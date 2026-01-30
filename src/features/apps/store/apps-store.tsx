import type { AppData } from "@/types/app-data";
import {
  FaCamera,
  FaDiscord,
  FaDocker,
  FaFigma,
  FaGithub,
  FaGitlab,
  FaMedium,
  FaSkype,
  FaSlack,
  FaStripe,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { create } from "zustand";
import { TbBrandGmail } from "react-icons/tb";
import { RiNotionLine } from "react-icons/ri";
import { LuSquareKanban } from "react-icons/lu";
import type { ConnectionFilter, Sort } from "../types";

type AppsStoreState = {
  data: AppData[];
  mainData: AppData[];
  sort: Sort;
  setSort: (value: Sort) => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  connectionFilter: ConnectionFilter;
  setConnectionFilter: (value: ConnectionFilter) => void;
};

const data: AppData[] = [
  {
    title: "Discord",
    description: "Connect with Discord for seamless team communication.",
    icon: FaDiscord,
    isConnected: false,
  },
  {
    title: "Docker",
    description: "Effortlessly manage Docker containers on your dashboard.",
    icon: FaDocker,
    isConnected: false,
  },
  {
    title: "Figma",
    description: "View and collaborate on Figma designs in one place.",
    icon: FaFigma,
    isConnected: true,
  },
  {
    title: "GitHub",
    description: "Streamline code management with GitHub integration.",
    icon: FaGithub,
    isConnected: false,
  },
  {
    title: "GitLab",
    description: "Efficiently manage code projects with GitLab integration.",
    icon: FaGitlab,
    isConnected: false,
  },
  {
    title: "Gmail",
    description: "Access and manage Gmail messages effortlessly.",
    icon: TbBrandGmail,
    isConnected: true,
  },
  {
    title: "Medium",
    description: "Explore and share Medium stories on your dashboard.",
    icon: FaMedium,
    isConnected: false,
  },
  {
    title: "Notion",
    description: "Effortlessly sync Notion pages for seamless collaboration.",
    icon: RiNotionLine,
    isConnected: true,
  },
  {
    title: "Skype",
    description: "Connect with Skype contacts seamlessly.",
    icon: FaSkype,
    isConnected: false,
  },
  {
    title: "Slack",
    description: "Integrate Slack for efficient team communication",
    icon: FaSlack,
    isConnected: false,
  },
  {
    title: "Stripe",
    description: "Easily manage Stripe transactions and payments.",
    icon: FaStripe,
    isConnected: false,
  },
  {
    title: "Telegram",
    description: "Connect with Telegram for real-time communication.",
    icon: FaTelegram,
    isConnected: false,
  },
  {
    title: "Trello",
    description: "Sync Trello cards for streamlined project management.",
    icon: LuSquareKanban,
    isConnected: false,
  },
  {
    title: "WhatsApp",
    description: "Easily integrate WhatsApp for direct messaging.",
    icon: FaWhatsapp,
    isConnected: false,
  },
  {
    title: "Zoom",
    description: "Host Zoom meetings directly from the dashboard.",
    icon: FaCamera,
    isConnected: true,
  },
];

function AppsOperation(state: AppsStoreState) {
  const { mainData, sort, searchTerm, connectionFilter } = state;

  const newData = [...mainData];

  // const filteredData = newData.filter((item) =>
  //   item.title.toLocaleLowerCase().includes(searchTerm),
  // );

  // const sortedData = [...state.data].sort((a, b) =>
  //   state.sort === "ascending"
  //     ? b.title.localeCompare(a.title)
  //     : a.title.localeCompare(b.title),
  // );

  // const filterByConnection = newData.filter((item) =>
  //   value === "all-apps"
  //     ? true
  //     : value === "connected"
  //       ? item.isConnected
  //       : !item.isConnected,
  // );

  return newData
    .filter((item) =>
      connectionFilter === "all-apps"
        ? true
        : connectionFilter === "connected"
          ? item.isConnected
          : !item.isConnected,
    )
    .filter((item) => item.title.toLocaleLowerCase().includes(searchTerm))
    .sort((a, b) =>
      sort === "ascending"
        ? b.title.localeCompare(a.title)
        : a.title.localeCompare(b.title),
    );
}

export const useAppsStore = create<AppsStoreState>((set) => ({
  data,
  mainData: data,
  sort: "ascending",
  searchTerm: "",
  connectionFilter: "all-apps",
  setSort: (value) => {
    set((state) => {
      if (value === state.sort) return state;

      const sortedData = [...state.data].sort((a, b) =>
        state.sort === "ascending"
          ? b.title.localeCompare(a.title)
          : a.title.localeCompare(b.title),
      );
      return {
        sort: value,
        data: sortedData,
      };
    });
  },
  setSearchTerm: (value) => {
    set((state) => {
      const searchTerm = value.toLocaleLowerCase();

      const filteredData = state.mainData.filter((item) =>
        item.title.toLocaleLowerCase().includes(searchTerm),
      );

      const sortedData = filteredData.sort((a, b) =>
        state.sort === "ascending"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title),
      );
      return {
        searchTerm,
        data: sortedData,
      };
    });
  },
  setConnectionFilter: (value) => {
    set((state) => {
      const newData = [...state.data];
      const filterByConnection = newData.filter((item) =>
        value === "all-apps"
          ? true
          : value === "connected"
            ? item.isConnected
            : !item.isConnected,
      );
      return {
        connectionFilter: value,
        data: filterByConnection,
      };
    });
  },
}));

export const selectAppsData = (s: AppsStoreState) => s.data;
export const selectSort = (s: AppsStoreState) => s.sort;
export const selectSetSort = (s: AppsStoreState) => s.setSort;
export const selectSearchTerm = (s: AppsStoreState) => s.searchTerm;
export const selectSetSearchTerm = (s: AppsStoreState) => s.setSearchTerm;
export const selectConnectionFilter = (s: AppsStoreState) => s.connectionFilter;
export const selectSetConnectionFilter = (s: AppsStoreState) =>
  s.setConnectionFilter;
