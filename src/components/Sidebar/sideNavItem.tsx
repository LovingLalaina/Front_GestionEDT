import { cn } from "@/libs/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaHome } from "react-icons/fa";

export interface SideNavItemType {
  icon?: {
    icon: React.ReactNode;
    fillIcon: React.ReactNode;
  };
  label: string;
  href: string;
}

interface SidebarOpen {
  isSidebarOpen: boolean;
}

const SideNavItem = ({
  icon,
  label,
  href,
  isSidebarOpen,
}: SideNavItemType & SidebarOpen) => {
  const pathname = usePathname();
  const isActivePage = pathname == href;
  return (
    <Link
      href={href}
      className="flex gap-2 items-center cursor-pointer transition-all delay-300 duration-300"
    >
      <div className="w-[35px] h-[35px] text-3xl">
        {isActivePage ? icon?.fillIcon : icon?.icon}
      </div>
      {isSidebarOpen && (
        <p
          className={cn(
            "text-xl hidden md:block pr-4 transition-all duration-300 delay-200",
            isActivePage && "font-bold"
          )}
        >
          {label}
        </p>
      )}
    </Link>
  );
};

export default SideNavItem;
