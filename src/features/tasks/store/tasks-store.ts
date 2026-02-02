import { create } from "zustand";
import type { Priority, Status } from "../types";

type tasksStoreState = {
    filterPriority:string[],
    filterStatus:string[],
    setFilterPriority:(value:Priority)=>void;
    setFilterStatus:(value:Status)=>void;
};
export const useTasksStore = create<tasksStoreState>((set) => ({
    filterPriority:[],
    filterStatus:[],
    setFilterPriority:(value)=>set([filterPriority:value]),
    setFilterStatus:(value)=>set([filterStatus:value]),
}));

export const selectfilterPriority = (s: tasksStoreState) => s.filterPriority;
export const selectfilterStatus = (s: tasksStoreState) => s.filterStatus;
export const selectsetFilterPriority = (s: tasksStoreState) => s.setFilterPriority;
export const selectsetFilterStatus = (s: tasksStoreState) => s.setFilterStatus;
