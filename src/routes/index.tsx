import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MapPage } from "../pages/Map";
import { MapEditorPage } from "../pages/MapEditor";
import { FarmPage } from "../pages/Farm";

const routes = createBrowserRouter([
    {
      path: '/mapa',
      Component: MapPage
    },
    {
        path: '/editormapa',
        Component: MapEditorPage
    },
    {
        path: '/fazendas',
        Component: FarmPage
    }
]);

export const Routes = () => {
    return (
        <RouterProvider router={routes}></RouterProvider>
    );
}