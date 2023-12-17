import { create } from "zustand";

interface Response {
  data: any;
  status: number;
  headers: any;
  timeout: number;
  method: string;
}

interface Request {
  id: number;
  title: string;
  url: string;
  method: string;
  headers: any;
  data: any;
  timeout: number;
  response: Response | null;
}

interface DoomState {
  settings: {
    theme: string;
    timeout: number;
  };
  requestList: Request[];
  activeRequest: Request | null;
}

interface Action {
  updateActiveRequest: (request: Request) => void;
  updateRequestList: (newRequests: Request[]) => void;
  appendRequestList: (request: Request) => void;
  removeRequestList: (id: number) => void;
}

const useDoomStore = create<DoomState & Action>()((set) => ({
  settings: {
    theme: "dark",
    timeout: 5000,
  },
  requestList: [],
  activeRequest: null,
  updateActiveRequest: (request: Request) =>
    set(() => ({ activeRequest: request })),
  updateRequestList: (newRequests: Request[]) =>
    set(() => ({ requestList: newRequests })),
  appendRequestList: (request: Request) =>
    set((state) => ({
      requestList: [...state.requestList, request],
    })),
  removeRequestList: (id: number) =>
    set((state) => ({
      requestList: state.requestList.filter((req) => req.id !== id),
      activeRequest:
        state.activeRequest?.id === id ? null : state.activeRequest,
    })),
}));

export default useDoomStore;
