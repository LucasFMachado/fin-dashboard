import type { ReactNode } from "react";

import { MenuProvider } from "./MenuContext";

interface IContextProviderProps {
  children: ReactNode;
}

export function ContextProvider({ children }: IContextProviderProps) {
  return <MenuProvider>{children}</MenuProvider>;
}
