/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { IUserInfo } from "../type/commonType";
//持久化

let store = (set: any) => ({
    userInfo: {} as IUserInfo,
    setUserInfo: (data: IUserInfo) => set((state: any) => ({ ...state, userInfo: data })),
    clearUserInfo: () => set((state: any) => ({ ...state, userInfo: {} as IUserInfo })),
})

store = persist(store, { name: 'state' }) as any;
const useUserStore = create(store);

export default useUserStore;