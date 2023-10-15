import React,{ useState } from "react";
import { useLocation } from "react-router-dom";

// UI IMPORT
import { Button, Icon, Text } from "../../../ui";

// PROJECT IMPORT
import { useAppDispatch } from "../../../lib/hooks";
import { toggleDrawer, useIsDrawerOpen } from "../../../features/common/commonSlice";
import { MenuItemHeaders, menuItemHeaders } from "../Drawer/menuItems";

/* ============================== HEADER ============================== */

const Header = () => {
  const location = useLocation();
  const pathnames = location.pathname?.split("/");
  const dispatch = useAppDispatch();

  const isdrawerOpen = useIsDrawerOpen();
  const [isSettingOpen, setIsSettingOpen] = useState<boolean>(false);

  // Get Title of Current Page
  const getHeaderTitle = () => {
    const currentPage = menuItemHeaders.find(
      (item: MenuItemHeaders) => item?.url === `/${pathnames[1]}`
    );
    return currentPage?.title || "";
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 pr-5 flex items-center justify-between border-b h-12 border-bb dark:border-bb-dark backdrop-blur-sm w-full z-10 transition-all ${isdrawerOpen ? "pl-[300px]" : "pl-[88px]"
          }`}
      >
        <div className="flex items-center gap-5 justify-center">
          {!isdrawerOpen ? (
            <Icon
              name="Menu"
              onClick={() => {
                dispatch(toggleDrawer(!isdrawerOpen));
              }}
            />
          ) : null}
          <Text className="font-bold">{getHeaderTitle()}</Text>
        </div>
      </div>
    </>
  );
};

export default Header;
