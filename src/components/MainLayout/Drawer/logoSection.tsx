"use client";

// UI IMPORT
import { Icon } from "../../../ui/icons";

// PROJECT IMPORTS
import { toggleDrawer, useIsDrawerOpen } from "../../../features/common/commonSlice";
import { useAppDispatch } from "../../../lib/hooks";

/* ============================== LOGO SECTION ============================== */

const LogoSection = () => {
  const dispatch = useAppDispatch();
  const isdrawerOpen = useIsDrawerOpen();
  return (
    <>
      <div
        className={`flex items-center justify-between h-12 border-b border-bb-dark border-dark-700 p-5 ${isdrawerOpen ? "pl-4" : "justify-center"
          }`}
      >
        <div>
            <Icon name="Search" className="fill-white" />
        </div>
        {isdrawerOpen && (
          <div
            onClick={() => {
              dispatch(toggleDrawer(!isdrawerOpen));
            }}
          >
            <Icon
              name="Menu"
              className="fill-white"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default LogoSection;
