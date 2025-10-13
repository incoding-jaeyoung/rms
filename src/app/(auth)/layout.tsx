export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="auth-layout">
      {/* 로그인 페이지 전용 레이아웃 (사이드바, 헤더, 탭 없음) */}
      {children}
    </div>
  );
}
