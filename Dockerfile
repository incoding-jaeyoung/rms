# ============================================
# 1. 의존성 설치 단계
# ============================================
FROM node:20-alpine AS deps
WORKDIR /app

# 의존성 파일 복사
COPY package.json package-lock.json ./

# 의존성 설치 (프로덕션 + 개발 의존성)
RUN npm ci

# ============================================
# 2. 개발 환경
# ============================================
FROM node:20-alpine AS development
WORKDIR /app

# 의존성 복사
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 개발 서버 포트 노출
EXPOSE 3001

# 개발 서버 실행 (Turbopack 사용)
CMD ["npm", "run", "dev"]

# ============================================
# 3. 빌드 단계 (프로덕션)
# ============================================
FROM node:20-alpine AS builder
WORKDIR /app

# 의존성 복사
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js 빌드 (Turbopack 사용)
RUN npm run build

# ============================================
# 4. 프로덕션 실행 환경
# ============================================
FROM node:20-alpine AS production
WORKDIR /app

ENV NODE_ENV=production

# 프로덕션 의존성만 설치
COPY package.json package-lock.json ./
RUN npm ci --only=production

# 빌드된 파일 복사
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# 프로덕션 서버 포트 노출
EXPOSE 3000

# 프로덕션 서버 실행
CMD ["npm", "start"]
