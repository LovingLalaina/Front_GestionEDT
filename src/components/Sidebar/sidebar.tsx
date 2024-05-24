"use client";
import React, { useState } from "react";
import { cn } from "../../libs/utils";

import Link from "next/link";
import Image from "next/image";
import SideNavItem, { SideNavItemType } from "./sideNavItem";
import { RiArrowLeftDoubleFill, RiBookLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import {
  IoCalendarOutline,
  IoCalendarSharp,
  IoHome,
  IoHomeOutline,
  IoSchool,
  IoSchoolOutline,
} from "react-icons/io5";
import {
  PiStudentFill,
  PiStudentLight,
  PiUserDuotone,
  PiUserFill,
} from "react-icons/pi";
import { RiBookFill } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { LINKS } from "./links";

type Props = {};

function Sidebar({}: Props) {
  const [isSidebarOpen, setisSidebarOpen] = useState(true);

  return (
    <div
      className={cn(
        " min-h-screen max-h-screen overflow-y-auto  md:pr-8 pr-3 pt-2 flex flex-col gap-3 border-r-[1px] md:pl-[50px] relative",
        isSidebarOpen && "md:w-[15%] transition-all delay-300 duration-300"
      )}
    >
      <div className="h-full flex flex-col fixed justify-between gap-4 pt-4 pb-4">
        <div className="flex flex-col gap-16">
          <Link href={"/"}>
            <Image src="/adt.png" alt="logo" width={60} height={60} />
          </Link>
          <div>
            {LINKS.map((link) => (
              <HoverContainer key={link.label}>
                <SideNavItem
                  icon={{
                    fillIcon: link.icon?.fillIcon,
                    icon: link.icon?.icon,
                  }}
                  label={link.label}
                  href={link.href}
                  isSidebarOpen={isSidebarOpen}
                />
              </HoverContainer>
            ))}
          </div>

          <HoverContainer>
            <RiArrowLeftDoubleFill
              onClick={() => setisSidebarOpen(!isSidebarOpen)}
              className={cn(
                "text-gray-400  cursor-pointer transition-all delay-300 duration-300 text-4xl",
                !isSidebarOpen && " rotate-180"
              )}
            />
          </HoverContainer>
        </div>
        <HoverContainer>
          <Link href="" className="flex gap-2 items-center cursor-pointer">
            <div className="w-[35px] h-[35px] text-3xl">
              <CiLogout />
            </div>
            {isSidebarOpen && (
              <p
                className={cn(
                  "text-xl hidden md:block pr-4 transition-all duration-300"
                )}
              >
                LogOut
              </p>
            )}
          </Link>
        </HoverContainer>
      </div>
    </div>
  );
}

export default Sidebar;

function HoverContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="p-3 transition-all rounded-full cursor-pointer hover:bg-gray-200 w-fit dark:hover:bg-zinc-900 group-hover:dark:bg-zinc-900 group-hover:bg-gray-200 ">
      {children}
    </div>
  );
}
