// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilClipboardNotes,
  UilUsersAlt,
  UilPackage,
  UilUserSquare,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Home",
  },
  {
    icon: UilClipboardAlt,
    heading: "OPD Form",
  },
  {
    icon: UilUsersAlt,
    heading: "Pateint List",
  },
  {
    icon: UilClipboardNotes,
    heading: 'Remarks'
  },
  {
    icon: UilUserSquare,
    heading: 'Panel Master'
  },
  {
    icon: UilUserSquare,
    heading: 'Login Master'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Patients",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "150",
    png: UilUserSquare,
    series: [
      {
        name: "List",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Remarks",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "59",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "latest",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },

  {
    title: "OPD Forms",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "100",
    png: UilClipboardAlt,
    series: [
      {
        name: "Toatal Forms",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Mohit",
    noti: "All checkups are done for this patient",

    time: "25 seconds ago",
  },
  {
    img: img1,
    name: "Mohit",
    noti: "All checkups are done for this patient",

    time: "25 seconds ago",
  },
  {
    img: img1,
    name: "Mohit",
    noti: "All checkups are done for this patient",

    time: "25 seconds ago",
  },
  {
    img: img1,
    name: "Mohit",
    noti: "All checkups are done for this patient",

    time: "25 seconds ago",
  },
  {
    img: img1,
    name: "Mohit",
    noti: "All checkups are done for this patient",

    time: "25 seconds ago",
  },
  {
    img: img1,
    name: "Mohit",
    noti: "All checkups are done for this patient",

    time: "25 seconds ago",
  },
  {
    img: img1,
    name: "Mohit",
    noti: "All checkups are done for this patient",

    time: "25 seconds ago",
  },
  {
    img: img1,
    name: "Mohit",
    noti: "All checkups are done for this patient",

    time: "25 seconds ago",
  },
  {
    img: img1,
    name: "Mohit",
    noti: "All checkups are done for this patient",

    time: "25 seconds ago",
  },
  {
    img: img1,
    name: "Mohit",
    noti: "All checkups are done for this patient",

    time: "25 seconds ago",
  },
  {
    img: img1,
    name: "Mohit",
    noti: "All checkups are done for this patient",

    time: "25 seconds ago",
  },
  {
    img: img1,
    name: "Mohit",
    noti: "All checkups are done for this patient",
    time: "25 seconds ago",
  },
  {
    img: img1,
    name: "Mohit",
    noti: "All checkups are done for this patient",

    time: "25 seconds ago",
  },
];
