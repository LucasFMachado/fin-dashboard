"use client";
import { RxDashboard, RxPerson } from "react-icons/rx";
import { BiLogOutCircle } from "react-icons/bi";
import { IoCodeSlash } from "react-icons/io5";
import SidebarItem from "./SidebarItem";
import { useMenu } from "@/contexts/MenuContext";

export default function Sidebar() {
  const { fullMenu } = useMenu();

  return (
    <aside
      className={`${
        fullMenu ? "w-80" : "w-15"
      } h-full bg-slate-800 flex flex-col`}
    >
      <div className="flex gap-6 items-center justify-center text-slate-300 font-bold h-16 bg-blue-900">
        <IoCodeSlash size={35} />
      </div>
      <div className="flex flex-col gap-4 justify-between h-full p-4">
        <div className="flex flex-col gap-4">
          <SidebarItem
            fullMenu={fullMenu}
            title="Dashboard"
            path="/dashboard"
            Icon={RxDashboard}
          />
          <SidebarItem
            fullMenu={fullMenu}
            title="Users"
            path="/users"
            Icon={RxPerson}
          />
        </div>
        <SidebarItem
          fullMenu={fullMenu}
          title="Logout"
          path="/"
          Icon={BiLogOutCircle}
        />
      </div>
    </aside>
  );
}
