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
import { SideNavItemType } from "./sideNavItem";

export const LINKS: SideNavItemType[] = [
  {
    href: "/",
    label: "Home",
    icon: {
      icon: <IoHomeOutline />,
      fillIcon: <IoHome />,
    },
  },
  {
    href: "/Emploie",
    label: "E_D_T",
    icon: {
      icon: <IoCalendarOutline />,
      fillIcon: <IoCalendarSharp />,
    },
  },
  {
    href: "/Professeur",
    label: "Professeur",
    icon: {
      icon: <PiUserDuotone />,
      fillIcon: <PiUserFill />,
    },
  },
  {
    href: "/Classe",
    label: "classe",
    icon: {
      icon: <IoSchoolOutline />,
      fillIcon: <IoSchool />,
    },
  },
  {
    href: "/Matiere",
    label: "Matiere",
    icon: {
      icon: <RiBookLine />,
      fillIcon: <RiBookFill />,
    },
  },
  {
    href: "/Niveau",
    label: "Niveau",
    icon: {
      icon: <PiStudentLight />,
      fillIcon: <PiStudentFill />,
    },
  },
];
