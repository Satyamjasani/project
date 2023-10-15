import React from 'react'
import { Outlet } from 'react-router-dom';

// PROJECT IMPORTS
import Header from "./Header";
import Drawer from "./Drawer";
import {menuItems} from "./Drawer/menuItems";
import { useIsDrawerOpen } from "../../features/common/commonSlice";

/* ============================== MAIN LAYOUT ============================== */

const MainLayout = () => {
  const isdrawerOpen = useIsDrawerOpen()

  return (
    <>
      <Header />
      <Drawer menuItems={menuItems} />
      <main className={`pt-[65px] pr-5 ${isdrawerOpen ? 'pl-[300px]' : 'pl-[98px]'}`}><Outlet /></main>
    </>
  );
};

export default MainLayout;
