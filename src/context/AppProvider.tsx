"use client";
import { ReactNode, createContext, useReducer } from "react";

import { DefaultOptionType } from "antd/es/select";
import { IMasterData } from "@/utils";

interface ResultObject {
  [key: string]: {
    id: number;
    value: string;
  };
}

type PayloadType = {
  openRegisterModal?: boolean;
  subGroupMegaMenu?: Array<Menu>;
  groupMegaMenuId?: number | null;
  isHoverd?: boolean;
  isHoverdMegaMenu?: boolean;
  idHoverd?: number;
  groupMenuId?: number;
  dataInfoConfig?: ResultObject;
  listMasterData?: IMasterData[] | DefaultOptionType[];
  isModalSuccess?: boolean;
};

export type AppState = {
  subGroupMegaMenu?: Array<Menu>;
  groupMegaMenuId?: number | null;
  isHoverd?: boolean;
  isHoverdMegaMenu?: boolean;
  idHoverd?: number;
  openRegisterModal?: boolean;
  groupMenuId?: number;
  dataInfoConfig?: ResultObject;
  listMasterData?: IMasterData[] | DefaultOptionType[];
  isModalSuccess?: boolean;
};

export type ActionType = {
  type: string;
  payload?: PayloadType;
};

type AppProviderProps = {
  children: ReactNode;
};

type AppContextProps = {
  state: AppState;
  dispatch: React.Dispatch<ActionType>;
};

const initialState = {
  subGroupMegaMenu: [],
  groupMegaMenuId: 0,
  isHoverd: false,
  isHoverdMegaMenu: false,
  idHoverd: 0,
  openRegisterModal: false,
  groupMenuId: 0,
  listMasterData: [],
  isModalSuccess: false,
};

export const AppContext = createContext<AppContextProps>({
  state: initialState,
  dispatch: () => null,
});

function reducer(state: AppState, action: ActionType) {
  switch (action?.type) {
    case "setRegisterModalOpen":
      return {
        ...state,
        openRegisterModal: true,
      };
    case "setRegisterModalClose":
      return {
        ...state,
        openRegisterModal: false,
      };

    case "setIsModalSuccess":
      return {
        ...state,
        isModalSuccess: action.payload?.isModalSuccess,
      };

    default:
      throw new Error();
  }
}

function AppProvider({ children }: AppProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
