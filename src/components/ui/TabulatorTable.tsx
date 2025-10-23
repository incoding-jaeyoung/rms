'use client';

import { useEffect, useRef, useMemo, useState } from 'react';

// 사용자 데이터 타입 (제네릭으로 확장 가능)
export interface TabulatorData {
  [key: string]: string | number | boolean | Date | null | undefined;
}

// Tabulator 셀 타입
export interface TabulatorCell {
  getValue(): unknown;
  getRow(): TabulatorRow;
  getElement(): HTMLElement;
  getData(): TabulatorData;
}

// Tabulator 행 타입
interface TabulatorRow {
  getData(): TabulatorData;
  getElement(): HTMLElement;
  getPosition(): number;
}

// Tabulator 컬럼 옵션 타입
interface TabulatorColumnOptions {
  headerSort?: boolean;
  sorter?: string | ((a: unknown, b: unknown) => number);
  formatter?: string | ((cell: TabulatorCell) => string | HTMLElement);
  editor?: string | boolean;
  validator?: string | ((value: unknown) => boolean | string);
  cssClass?: string;
  headerFilter?: boolean | string;
  frozen?: boolean;
  visible?: boolean;
}

// Tabulator 컬럼 타입
export interface TabulatorColumn extends TabulatorColumnOptions {
  title: string;
  field: string;
  width?: number;
  minWidth?: number;
  widthGrow?: number;
  responsive?: number;
  hozAlign?: 'left' | 'center' | 'right';
  vertAlign?: 'top' | 'middle' | 'bottom';
}

// Tabulator 타입 정의
interface TabulatorInstance {
  element: HTMLElement;
  getPageSize(): number;
  getPage(): number;
  getDataCount(): number;
  getPageMax(): number;
  setPage(page: number): void;
  setPageSize(size: number): void;
  destroy(): void;
}

// 테이블 설정 인터페이스
export interface TabulatorConfig {
  showFooter?: boolean;
  dataCount?: number;
  height?: string | number;
  layout?:
    | 'fitColumns'
    | 'fitData'
    | 'fitDataFill'
    | 'fitColumnsFill'
    | 'fitDataTable'
    | 'fitDataStretch';
  responsiveLayout?: 'hide' | 'collapse' | 'stack' | false;
  movableColumns?: boolean;
  movableRows?: boolean;
  selectable?: boolean | number | 'highlight' | 'range';
  headerSort?: boolean;
  headerFilter?: boolean;
  locale?: string;
  langs?: Record<string, Record<string, string>>;
  placeholder?: string;
}

// Tabulator 옵션 타입
interface TabulatorOptions {
  data: TabulatorData[];
  columns: TabulatorColumn[];
  layout: string;
  height: string | number;
  responsiveLayout: string | boolean;
  pagination: string | boolean;
  paginationSize: number;
  paginationSizeSelector: boolean;
  paginationCounter: boolean;
  paginationElement: HTMLElement;
  placeholder: string;
  pageLoaded: (this: TabulatorInstance, pageno: number) => void;
  dataLoaded: (this: TabulatorInstance) => void;
  tableBuilt: (this: TabulatorInstance) => void;
  renderComplete: (this: TabulatorInstance) => void;
}

// TabulatorTable Props
export interface TabulatorTableProps {
  data: TabulatorData[];
  columns: TabulatorColumn[];
  config?: TabulatorConfig;
  className?: string;
}

// 커스텀 페이징 엘리먼트 생성 함수
const createCustomPaginationElement = () => {
  const paginationContainer = document.createElement('div');
  paginationContainer.className = 'custom-pagination';

  // 왼쪽: 현재 페이지 범위와 전체 항목 수
  const leftInfo = document.createElement('div');
  leftInfo.className = 'pagination-left';
  leftInfo.innerHTML = '<p class="range-info">1-50 <em>of</em> 100 <em>items</em></p>';

  // 중앙: 페이지 네비게이션
  const centerNav = document.createElement('div');
  centerNav.className = 'pagination-center';

  // Prev 버튼
  const prevBtn = document.createElement('button');
  prevBtn.className = 'nav-btn prev-btn';
  prevBtn.type = 'button';
  prevBtn.innerHTML =
    '<img src="/icons/ico-page-prev.svg" alt="prev" width="16" height="16" /><span>Prev</span>';

  // 페이지 입력
  const pageInput = document.createElement('input');
  pageInput.className = 'page-input';
  pageInput.type = 'number';
  pageInput.min = '1';
  pageInput.value = '1';

  // "of" 텍스트
  const ofText = document.createElement('span');
  ofText.className = 'of-text';
  ofText.textContent = 'of';

  // 총 페이지 수
  const totalPages = document.createElement('span');
  totalPages.className = 'total-pages';
  totalPages.textContent = '100';

  // Next 버튼
  const nextBtn = document.createElement('button');
  nextBtn.className = 'nav-btn next-btn';
  nextBtn.type = 'button';
  nextBtn.innerHTML =
    '<span>Next</span><img src="/icons/ico-page-next.svg" alt="next" width="16" height="16" />';

  // 요소들을 centerNav에 추가
  centerNav.appendChild(prevBtn);
  centerNav.appendChild(pageInput);
  centerNav.appendChild(ofText);
  centerNav.appendChild(totalPages);
  centerNav.appendChild(nextBtn);

  // 오른쪽: 페이지당 항목 수 선택 (50으로 고정)
  const rightSelector = document.createElement('div');
  rightSelector.className = 'pagination-right';
  rightSelector.innerHTML = `
    <select class="page-size-select">
      <option value="10">10 items</option>
      <option value="25">25 items</option>
      <option value="50" selected>50 items</option>
      <option value="100">100 items</option>
    </select>
  `;

  paginationContainer.appendChild(leftInfo);
  paginationContainer.appendChild(centerNav);
  paginationContainer.appendChild(rightSelector);

  return paginationContainer;
};

// 커스텀 페이징 업데이트 함수
const updateCustomPagination = (table: TabulatorInstance) => {
  try {
    // 테이블 컨테이너에서 커스텀 페이징 요소 찾기
    const tableContainer = table.element.parentElement;
    const paginationElement = tableContainer?.querySelector('.custom-pagination');
    if (!paginationElement) return;

    const pageSize = table.getPageSize();
    const currentPage = table.getPage();
    const totalRows = table.getDataCount();
    const totalPages = Math.ceil(totalRows / pageSize);

    const startRow = (currentPage - 1) * pageSize + 1;
    const endRow = Math.min(currentPage * pageSize, totalRows);

    // 왼쪽 정보 업데이트
    const leftInfo = paginationElement.querySelector('.range-info');
    if (leftInfo) {
      leftInfo.innerHTML = `${startRow}-${endRow} <em>of</em> ${totalRows.toLocaleString()} <em>items</em>`;
    }

    // 모바일: 테이블 위 range-info 업데이트
    const topRangeInfo = tableContainer?.parentElement?.querySelector('.custom-range .range-info');
    if (topRangeInfo) {
      topRangeInfo.innerHTML = `${startRow}-${endRow} <em>of</em> ${totalRows.toLocaleString()} <em>items</em>`;
    }

    // 중앙 네비게이션 업데이트
    const pageInput = paginationElement.querySelector('.page-input') as HTMLInputElement;
    const totalPagesSpan = paginationElement.querySelector('.total-pages');
    const prevBtn = paginationElement.querySelector('.prev-btn') as HTMLButtonElement;
    const nextBtn = paginationElement.querySelector('.next-btn') as HTMLButtonElement;

    if (pageInput) {
      pageInput.value = currentPage.toString();
      pageInput.max = totalPages.toString();
    }
    if (totalPagesSpan) totalPagesSpan.textContent = totalPages.toString();
    if (prevBtn) prevBtn.disabled = currentPage <= 1;
    if (nextBtn) nextBtn.disabled = currentPage >= totalPages;

    // 오른쪽 선택자 업데이트
    const pageSizeSelect = paginationElement.querySelector(
      '.page-size-select'
    ) as HTMLSelectElement;
    if (pageSizeSelect) pageSizeSelect.value = pageSize.toString();
  } catch (error) {
    console.error('페이징 업데이트 오류:', error);
  }
};

// 커스텀 페이징 푸터를 수동으로 추가하는 함수
const addCustomPaginationFooter = (table: TabulatorInstance | null, showFooter: boolean = true) => {
  if (!table || !table.element) return;

  try {
    const tableContainer = table.element.parentElement;

    // 모든 기본 푸터 요소 강제 제거
    const existingFooters = table.element.querySelectorAll(
      '.tabulator-footer, .tabulator-footer-contents'
    );
    existingFooters.forEach((footer) => footer.remove());

    // 푸터 표시가 false인 경우 기존 푸터만 제거
    if (!showFooter) {
      // 기존 커스텀 페이징 제거
      const existingCustomPagination = tableContainer?.querySelector('.custom-pagination');
      if (existingCustomPagination) {
        existingCustomPagination.remove();
      }
      return;
    }

    // 이미 커스텀 페이징이 있는지 확인
    if (tableContainer?.querySelector('.custom-pagination')) {
      return;
    }

    // 커스텀 페이징 컨테이너 생성
    const customPagination = createCustomPaginationElement();

    // 테이블 컨테이너에 추가
    if (tableContainer) {
      tableContainer.appendChild(customPagination);

      // 이벤트 바인딩
      bindPaginationEvents(table);

      // 초기 페이징 정보 업데이트
      updateCustomPagination(table);
    }
  } catch (error) {
    console.error('커스텀 페이징 푸터 추가 오류:', error);
  }
};

// 페이징 이벤트 바인딩 함수
const bindPaginationEvents = (table: TabulatorInstance) => {
  try {
    // 테이블 컨테이너에서 커스텀 페이징 요소 찾기
    const tableContainer = table.element.parentElement;
    const paginationElement = tableContainer?.querySelector('.custom-pagination');
    if (!paginationElement) return;

    // 이전/다음 버튼 이벤트
    const prevBtn = paginationElement.querySelector('.prev-btn');
    const nextBtn = paginationElement.querySelector('.next-btn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const currentPage = table.getPage();
        if (currentPage > 1) {
          table.setPage(currentPage - 1);
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const currentPage = table.getPage();
        const maxPage = table.getPageMax();
        if (currentPage < maxPage) {
          table.setPage(currentPage + 1);
        }
      });
    }

    // 페이지 입력 이벤트
    const pageInput = paginationElement.querySelector('.page-input') as HTMLInputElement;
    if (pageInput) {
      // 숫자만 입력 허용 (실시간 검증)
      pageInput.addEventListener('input', (e: Event) => {
        const target = e.target as HTMLInputElement;
        target.value = target.value.replace(/[^0-9]/g, '');
      });

      // 키보드 입력 시 숫자만 허용
      pageInput.addEventListener('keydown', (e: KeyboardEvent) => {
        const allowedKeys = [
          'Backspace',
          'Delete',
          'Tab',
          'Escape',
          'Enter',
          'ArrowLeft',
          'ArrowRight',
          'Home',
          'End',
        ];
        const isNumber = e.key >= '0' && e.key <= '9';
        const isAllowedKey = allowedKeys.includes(e.key);
        const isCtrlCmd = e.ctrlKey || e.metaKey; // Ctrl+A, Ctrl+C 등 허용

        if (!isNumber && !isAllowedKey && !isCtrlCmd) {
          e.preventDefault();
        }
      });

      // 엔터키 입력 시 페이지 이동
      pageInput.addEventListener('keypress', (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const targetPage = parseInt(pageInput.value);
          const maxPage = table.getPageMax();

          if (targetPage >= 1 && targetPage <= maxPage) {
            table.setPage(targetPage);
          } else {
            // 유효하지 않은 페이지 번호인 경우 현재 페이지로 복원
            pageInput.value = table.getPage().toString();
          }
        }
      });

      // 포커스 아웃 시 페이지 이동
      pageInput.addEventListener('blur', () => {
        const targetPage = parseInt(pageInput.value);
        const maxPage = table.getPageMax();

        if (targetPage >= 1 && targetPage <= maxPage) {
          table.setPage(targetPage);
        } else {
          // 유효하지 않은 페이지 번호인 경우 현재 페이지로 복원
          pageInput.value = table.getPage().toString();
        }
      });
    }

    // 페이지 크기 변경 이벤트
    const pageSizeSelect = paginationElement.querySelector('.page-size-select');
    if (pageSizeSelect) {
      pageSizeSelect.addEventListener('change', (e: Event) => {
        const target = e.target as HTMLSelectElement;
        const newPageSize = parseInt(target.value);
        table.setPageSize(newPageSize);

        // 페이지 크기 변경 후 페이징 정보 업데이트
        setTimeout(() => {
          updateCustomPagination(table);
        }, 100);
      });
    }
  } catch (error) {
    console.error('페이징 이벤트 바인딩 오류:', error);
  }
};

// TabulatorTable 컴포넌트
export default function TabulatorTable({
  data,
  columns,
  config = {},
  className = '',
}: TabulatorTableProps) {
  const tableRef = useRef<HTMLDivElement>(null);
  const tabulatorRef = useRef<TabulatorInstance | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // 기본 설정값 (useMemo로 메모이제이션)
  const defaultConfig = useMemo(
    (): TabulatorConfig => ({
      showFooter: true,
      height: '200px',
      layout: 'fitDataFill',
      responsiveLayout: false,
    }),
    []
  );

  // 화면 크기 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // 초기 체크
    checkMobile();

    // 리사이즈 이벤트 리스너
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // 설정 병합 (useEffect 내부에서 수행)
    const tableConfig = { ...defaultConfig, ...config };

    // 768px 이하일 때 자동으로 collapse로 변경
    const responsiveLayoutValue =
      isMobile && tableConfig.responsiveLayout === false
        ? 'collapse'
        : tableConfig.responsiveLayout;

    const initTabulator = async () => {
      // 기존 테이블이 있으면 먼저 제거
      if (tabulatorRef.current) {
        tabulatorRef.current.destroy();
        tabulatorRef.current = null;
      }

      if (tableRef.current) {
        try {
          // TabulatorFull 사용 (모든 모듈 포함)
          const { TabulatorFull } = await import('tabulator-tables');

          // 컬럼에 기본 정렬 추가 및 sort 비활성화
          const processedColumns = columns.map((col) => {
            // checkbox 필드인 경우 자동으로 체크박스 설정
            if (col.field === 'checkbox') {
              return {
                ...col, // 사용자 설정 먼저
                vertAlign: 'middle' as const,
                hozAlign: 'center' as const,
                headerSort: false,
                title:
                  '<input type="checkbox" id="select-all-checkbox" style="cursor: pointer; width: 16px; height: 16px;" />',
                formatter: (cell: TabulatorCell) => {
                  const value = cell.getValue() as boolean;
                  return `<input type="checkbox" class="row-checkbox" ${value ? 'checked' : ''} style="cursor: pointer; width: 16px; height: 16px;" />`;
                },
              };
            }

            return {
              vertAlign: 'middle' as const,
              hozAlign: 'center' as const,
              headerSort: false, // 기본적으로 sort 비활성화
              ...col,
              // 특정 컬럼에서 headerSort: true로 오버라이드 가능
            };
          });

          // Tabulator 옵션 설정
          const tabulatorOptions: Partial<TabulatorOptions> = {
            data: data,
            columns: processedColumns,
            layout: tableConfig.layout,
            height: tableConfig.height,
            responsiveLayout: responsiveLayoutValue,
            pagination: tableConfig.showFooter ? 'local' : false,
            paginationSize: 50, // 고정값으로 설정
            paginationSizeSelector: false,
            paginationCounter: false,
            // 기본 푸터를 빈 div로 설정하여 렌더링 방지
            paginationElement: document.createElement('div'),
            // 데이터가 없을 때 표시할 메시지 (config에서 설정 가능)
            placeholder: tableConfig.placeholder || 'No Data Available',
            // 페이징 이벤트 핸들러
            pageLoaded: function (this: TabulatorInstance) {
              updateCustomPagination(this);
            },
            dataLoaded: function (this: TabulatorInstance) {
              updateCustomPagination(this);
            },
            tableBuilt: function (this: TabulatorInstance) {
              updateCustomPagination(this);
              bindPaginationEvents(this);
            },
            renderComplete: function (this: TabulatorInstance) {
              updateCustomPagination(this);
              // checkbox 필드가 있는 경우 전체선택 이벤트 바인딩
              const hasCheckboxColumn = columns.some((col) => col.field === 'checkbox');
              if (hasCheckboxColumn) {
                setTimeout(() => {
                  // 헤더 체크박스 셀 찾기 (이벤트 위임 방식)
                  const headerCheckboxCell = document.querySelector(
                    '.tabulator-header .tabulator-col[tabulator-field="checkbox"]'
                  );

                  if (
                    headerCheckboxCell &&
                    !headerCheckboxCell.hasAttribute('data-listener-attached')
                  ) {
                    headerCheckboxCell.setAttribute('data-listener-attached', 'true');

                    // 헤더 셀 전체에 클릭 이벤트
                    headerCheckboxCell.addEventListener('click', (e) => {
                      e.stopPropagation();

                      const checkbox = headerCheckboxCell.querySelector(
                        '#select-all-checkbox'
                      ) as HTMLInputElement;
                      const target = e.target as HTMLElement;

                      if (checkbox) {
                        // 체크박스가 아닌 다른 영역 클릭 시 체크박스 토글
                        if (target !== checkbox) {
                          checkbox.checked = !checkbox.checked;
                        }

                        const allCheckboxes = document.querySelectorAll(
                          '.row-checkbox'
                        ) as NodeListOf<HTMLInputElement>;

                        allCheckboxes.forEach((rowCheckbox) => {
                          rowCheckbox.checked = checkbox.checked;
                        });
                      }
                    });
                  }
                }, 300);
              }
            },
          };

          // Tabulator 인스턴스 생성
          const tabulatorInstance = new (TabulatorFull as unknown as new (
            element: HTMLElement,
            options: Partial<TabulatorOptions>
          ) => TabulatorInstance)(tableRef.current, tabulatorOptions);

          // 타입 캐스팅하여 저장
          tabulatorRef.current = tabulatorInstance;

          // 커스텀 페이징 푸터를 수동으로 추가 (여러 번 시도)
          setTimeout(() => {
            addCustomPaginationFooter(tabulatorRef.current, tableConfig.showFooter);
          }, 100);

          setTimeout(() => {
            addCustomPaginationFooter(tabulatorRef.current, tableConfig.showFooter);
          }, 500);

          setTimeout(() => {
            addCustomPaginationFooter(tabulatorRef.current, tableConfig.showFooter);
          }, 1000);

          // 테이블 변화 감지를 위한 MutationObserver 추가
          const observer = new MutationObserver(() => {
            if (tabulatorRef.current) {
              updateCustomPagination(tabulatorRef.current);
            }
          });

          if (tableRef.current) {
            observer.observe(tableRef.current, {
              childList: true,
              subtree: true,
              attributes: true,
            });
          }
        } catch (error) {
          console.error('Tabulator error:', error);
        }
      }
    };

    initTabulator();

    return () => {
      if (tabulatorRef.current) {
        tabulatorRef.current.destroy();
        tabulatorRef.current = null;
      }
    };
  }, [data, columns, config, defaultConfig, isMobile]);

  // 체크박스 전체선택 이벤트 바인딩 (별도 useEffect)
  useEffect(() => {
    const hasCheckboxColumn = columns.some((col) => col.field === 'checkbox');

    if (!hasCheckboxColumn) return;

    const bindCheckboxEvent = () => {
      const headerCheckboxCell = document.querySelector(
        '.tabulator-header .tabulator-col[tabulator-field="checkbox"]'
      );

      if (headerCheckboxCell && !headerCheckboxCell.hasAttribute('data-listener-attached')) {
        headerCheckboxCell.setAttribute('data-listener-attached', 'true');

        const handleClick = (e: Event) => {
          e.stopPropagation();

          const checkbox = headerCheckboxCell.querySelector(
            '#select-all-checkbox'
          ) as HTMLInputElement;
          const target = e.target as HTMLElement;

          if (checkbox) {
            if (target !== checkbox) {
              checkbox.checked = !checkbox.checked;
            }

            const allCheckboxes = document.querySelectorAll(
              '.row-checkbox'
            ) as NodeListOf<HTMLInputElement>;

            allCheckboxes.forEach((rowCheckbox) => {
              rowCheckbox.checked = checkbox.checked;
            });
          }
        };

        headerCheckboxCell.addEventListener('click', handleClick);

        return () => {
          headerCheckboxCell.removeEventListener('click', handleClick);
        };
      }
    };

    // 테이블이 완전히 렌더링될 때까지 대기
    const timer = setTimeout(bindCheckboxEvent, 500);
    return () => clearTimeout(timer);
  }, [columns, data]);

  return (
    <div className="flex-grow flex flex-col max-md:mt-7.5">
      {/* 모바일 전용: 테이블 위 range-info */}
      <div className="custom-range">
        <div className="range-info"></div>
      </div>
      <div className={`tabulator-container ${className}`} ref={tableRef}></div>
    </div>
  );
}
