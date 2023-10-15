// UI IMPORT
import { IconKey } from "../../../ui";

// TYPES
export interface MenuItemsTypes {
    id: string;
    icon: IconKey;
    title: string;
    url: string;
    subItems?: MenuItemsTypes[];
}

export interface MenuItemHeaders {
    title: string;
    url: string;
}
/* ============================== MENU ITEMS ============================== */

export const menuItems: MenuItemsTypes[] = [
    {
        id: "dashboard",
        icon: "Search",
        title: "Dashboard",
        url: "/dashboard",
    },
    {
        id: "campaign",
        icon: "Search",
        title: "Campaign",
        url: "/campaign",
    },
    {
        id: "user",
        icon: "Search",
        title: "User",
        url: "/user",
    },
    {
        id: "profile",
        icon: "Search",
        title: "Profile",
        url: "/profile",
    },
];

export const menuItemHeaders: MenuItemHeaders[] = [
    { url: "/dashboard", title: "Dashboard" },
    { url: "/campaign", title: "Campaign" },
    { url: "/user", title: "User" },
    { url: "/profile", title: "Profile" },
];
