import { create } from "zustand";

interface DoomState {
  response: {
    data: any;
    status: number;
    headers: any;
    timeout: number;
    method: string;
  };
}

const useDoomStore = create<DoomState>()(() => ({
  response: {
    data: null,
    status: 0,
    headers: null,
    timeout: 0,
    method: "",
  },
}));

export default useDoomStore;
