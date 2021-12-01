import Admin from "./pages/Admin.js";
import Basket from "./pages/Basket.js";
import Main from "./pages/Main.js";
import Auth from "./pages/Auth.js";
import DevicePage from "./pages/DevicePage.js";
import Distillers from "./pages/Distillers.js";
import Related from "./pages/Related.js";
import Accessories from "./pages/Accessories.js";
import New from "./pages/New.js";
import Delivery from "./pages/Delivery.js";
import Contacts from "./pages/Contacts.js";
import {ADMIN_ROUTE, BASKET_ROUTE, MAIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, DEVICE_ROUTE, DISTILLERS_ROUTE, RELATED_ROUTE, ACCESSORIES_ROUTE, NEW_ROUTE, DELIVERY_ROUTE, CONTACTS_ROUTE} from "./utils/consts.js";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
];

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
    {
        path: DISTILLERS_ROUTE,
        Component: Distillers
    },
    {
        path: RELATED_ROUTE,
        Component: Related
    },
    {
        path: ACCESSORIES_ROUTE,
        Component: Accessories
    },
    {
        path: NEW_ROUTE,
        Component: New
    },
    {
        path: DELIVERY_ROUTE,
        Component: Delivery
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    }
];