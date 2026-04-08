// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// 아래 actions 배열을 이용하여 Toast 알림 시스템을 구현하시오.
//
// 요구사항:
//   1. 각 버튼 클릭 시 해당 타입의 토스트가 화면 우측 하단에 나타난다
//   2. 토스트는 3초 후 자동으로 사라진다
//   3. 토스트 클릭 시 즉시 제거된다
//   4. 여러 토스트가 동시에 쌓일 수 있다 (큐)
//   5. 나타날 때 오른쪽에서 슬라이드 인, 사라질 때 슬라이드 아웃 애니메이션
//   6. useToast() 커스텀 훅으로 로직을 분리한다
//
// 주어진 데이터:
const actions = [
  { type: 'success' as const, label: '✅ 저장 완료',    message: '파일이 성공적으로 저장되었습니다.' },
  { type: 'error'   as const, label: '❌ 오류 발생',    message: '서버와의 연결이 끊어졌습니다. 다시 시도해주세요.' },
  { type: 'warning' as const, label: '⚠️ 주의',         message: '저장하지 않은 변경 사항이 있습니다.' },
  { type: 'info'    as const, label: 'ℹ️ 업데이트',     message: '새로운 버전(v2.1.0)이 출시되었습니다.' },
];

// Toast 타입 정의
type ToastType = 'success' | 'error' | 'warning' | 'info';
interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ✅ 사용 훅 & API
//   - useState<Toast[]>       → 토스트 목록
//   - useEffect               → 자동 제거 타이머 (cleanup으로 clearTimeout 필수!)
//   - ReactDOM.createPortal() → document.body에 렌더링 (z-index 분리)
//
// ─── useToast 커스텀 훅 ──────────────────────────
//   const useToast = () => {
//     const [toasts, setToasts] = useState<Toast[]>([])
//     const add    = (t: Omit<Toast, 'id'>) => setToasts(p => [...p, { ...t, id: Date.now() }])
//     const remove = (id: number) => setToasts(p => p.filter(t => t.id !== id))
//     return { toasts, add, remove }
//   }
//
// ─── 자동 제거 (메모리 누수 주의) ────────────────
//   - useEffect 안에서 setTimeout → cleanup에서 clearTimeout

export default function ToastDemo() {
  return (
    <div>
      {/* TODO: 위 문제와 힌트를 참고하여 구현하세요 */}
    </div>
  );
}
