"use client";
import React,{ Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// UI IMPORT
import { Icon, Text } from "../../../ui";

// PROJECT IMPORT
import LogoSection from "./logoSection";
import { MenuItemsTypes } from "./menuItems";
import { useIsDrawerOpen } from "../../../features/common/commonSlice";

/* ============================== DRAWER ============================== */

interface DrawerProps {
  menuItems: MenuItemsTypes[];
}

interface ShowMenuProps extends MenuItemsTypes {
  selected: string;
  isDrawerOpen: boolean;
  badge?: number;
}

interface NavigateProps extends Pick<MenuItemsTypes, "subItems" | "url"> {
  className?: string;
  isDrawerOpen: boolean;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Navigate = (props: NavigateProps) => {
  const {
    className = "",
    url,
    subItems,
    isDrawerOpen,
    children,
    onClick,
  } = props;
  return (
    <div>
      {subItems ? (
        <button
          className={`${className} ${isDrawerOpen ? "" : "justify-center"
            } items-center cursor-pointer w-full flex px-4`}
          onClick={onClick}
        >
          {children}
        </button>
      ) : (
        <Link
          to={url}
          className={`${className} ${isDrawerOpen ? "" : "justify-center"
            } items-center cursor-pointer w-full flex px-4`}
        >
          {children}
        </Link>
      )}
    </div>
  );
};

const ShowMenu = (props: ShowMenuProps) => {
  const {
    url,
    id,
    subItems,
    selected,
    icon,
    title,
    isDrawerOpen,
    badge = 1,
  } = props;

  const [isExtended, setIsExtended] = useState<boolean>(false);

  const subIds = subItems?.map((item: MenuItemsTypes) => item?.id);
  const current = !!(
    selected === id ||
    isExtended ||
    subIds?.includes(selected)
  );

  return (
    <>
      <Navigate
        className={`${badge === 2 ? "pl-8" : ""}`}
        url={url}
        subItems={subItems}
        isDrawerOpen={isDrawerOpen}
        onClick={() => setIsExtended(!isExtended)}
      >
        <div
          className={`flex gap-2 items-center py-3 ${badge === 2
              ? `border-l pl-2 ${current ? "border-secondary-400" : "border-gray-500"
              }`
              : ""
            }`}
        >
          <Icon
            name={icon}
            className={`fill-white ${current ? "!fill-secondary-400" : ""}`}
          />
          <Text
            className={`${isDrawerOpen ? "" : "hidden"
              } text-sm text-txt hover:text-secondary-400 ${current ? "!text-secondary-400 font-bold" : ""
              }`}
          >
            {title}
          </Text>
          {subItems ? (
            <Icon
              name={current ? "Down" : "Forward"}
              className={`${current ? "fill-secondary-400" : "fill-white"}`}
            />
          ) : null}
        </div>
      </Navigate>
      {subItems?.length && current
        ? subItems.map((subItem: MenuItemsTypes,index:number) => {
          return (
            <Fragment key={index}>
            <ShowMenu
              {...subItem}
              badge={2}
              selected={selected}
              isDrawerOpen={isDrawerOpen}
            />
            </Fragment>
          );
        })
        : null}
    </>
  );
};

const Drawer = ({ menuItems }: DrawerProps) => {
  const isDrawerOpen = useIsDrawerOpen();
  const location = useLocation();
  const pathnames = location.pathname?.split("/");

  return (
    <>
      <div
        className={`fixed h-full w-[280px] scrollbar-hide z-20 bg-primary shadow-xl shadow-primary overflow-y-scroll transition-all border-r dark:border-bb-dark ${isDrawerOpen ? "translate-x w-[230px]" : "w-[78px]"
          }`}
      >
        <LogoSection />
        {menuItems.map((item: MenuItemsTypes, index: number) => (
          <Fragment key={index}>
            <ShowMenu
              {...item}
              selected={pathnames[1]}
              isDrawerOpen={isDrawerOpen}
            />
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default Drawer;
