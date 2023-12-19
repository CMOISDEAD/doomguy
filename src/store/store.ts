import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

interface DoomState {
  settings: {
    theme: string;
    timeout: number;
  };
  requestList: RequestInterface[];
  activeRequest: RequestInterface | null;
}

interface Action {
  updateActiveRequest: (request: RequestInterface) => void;
  updateRequestList: (newRequests: RequestInterface[]) => void;
  appendRequestList: (request: RequestInterface) => void;
  removeRequestList: (id: string) => void;
}

const useDoomStore = create<DoomState & Action>()(
  persist(
    (set) => ({
      settings: {
        theme: "dark",
        timeout: 5000,
      },
      requestList: [],
      activeRequest: null,
      updateActiveRequest: (request: RequestInterface) =>
        set((state) => {
          const idx = state.requestList.findIndex(
            (req) => req.id === request.id,
          );
          state.requestList[idx] = request;
          return { activeRequest: request };
        }),
      updateRequestList: (newRequests: RequestInterface[]) =>
        set(() => ({ requestList: newRequests })),
      appendRequestList: (request: RequestInterface) =>
        set((state) => ({
          requestList: [
            ...state.requestList,
            {
              ...request,
              id: uuidv4(),
            },
          ],
        })),
      removeRequestList: (id: string) =>
        set((state) => ({
          requestList: state.requestList.filter((req) => req.id !== id),
          activeRequest:
            state.activeRequest?.id === id ? null : state.activeRequest,
        })),
    }),
    {
      name: "doom-state",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useDoomStore;
