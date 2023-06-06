"use client";
import { ReactNode, createContext, useContext, useState } from "react";

interface IMenuProviderProps {
  children: ReactNode;
}

interface IMenuContext {
  fullMenu: boolean;
  toggleMenu: () => void;
}

const MenuContext = createContext({} as IMenuContext);

const MenuProvider = ({ children }: IMenuProviderProps) => {
  const [fullMenu, setFullMenu] = useState<boolean>(true);

  function toggleMenu() {
    setFullMenu(!fullMenu);
  }

  return (
    <MenuContext.Provider
      value={{
        fullMenu,
        toggleMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

const useMenu = () => useContext(MenuContext);

export { MenuContext, MenuProvider, useMenu };
