import { ReactNode } from "react";

interface IContentProps {
  children: ReactNode;
}

export default function Content({ children }: IContentProps) {
  return <div className="h-full p-4">{children}</div>;
}
