import Link from "next/link";
import { IconType } from "react-icons";

interface ISidebarItemProps {
  path: string;
  title: string;
  fullMenu: boolean;
  Icon: IconType;
}

export default function SidebarItem({
  title,
  path,
  fullMenu,
  Icon,
}: ISidebarItemProps) {
  return (
    <Link href={path}>
      <div className="py-2 px-4 w-full h-12 rounded-md bg-slate-300 hover:bg-slate-900 transition duration-300 flex items-center gap-3 hover:text-slate-300 cursor-pointer">
        <Icon size={20} />
        {fullMenu && <span className="text-md">{title}</span>}
      </div>
    </Link>
  );
}
