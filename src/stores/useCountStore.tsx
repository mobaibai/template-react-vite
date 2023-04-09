import { create } from "zustand";

interface Count {
  count: number
  inc: () => void
  cut: () => void
}
export const useCountStore = create<Count>(set => ({
  count: 0,
  inc: () => set(state => ({ count: state.count >= 9 ? 9 : state.count + 1 })),
  cut: () => set(state => ({ count: state.count <= 0 ? 0 : state.count - 1 }))
}))