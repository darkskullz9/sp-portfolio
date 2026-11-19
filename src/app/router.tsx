import { createBrowserRouter } from "react-router";

import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import PublicLayout from "../layouts/PublicLayout/PublicLayout";
import PagePlaceholder from "../components/common/PagePlaceholder";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
        element: <PublicLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },

            {
                path: "/about",
                element: <About />,
            },

            {
                path: "/skills",
                element: <Skills />,
            },

            {
                path: "/projects",
                element: (
                    <PagePlaceholder
                        title="Projets"
                        description="Présentation de mes réalisations."
                    />
                ),
            },

            {
                path: "/experiences",
                element: (
                    <PagePlaceholder
                        title="Expériences"
                        description="Présentation de mes expériences professionnelles."
                    />
                ),
            },

            {
                path: "/e5",
                element: (
                    <PagePlaceholder
                        title="Épreuve E5"
                        description="Présentation de mes réalisations professionnelles."
                    />
                ),
            },

            {
                path: "/watch",
                element: (
                    <PagePlaceholder
                        title="Veille technologique"
                        description="Présentation de ma veille technologique."
                    />
                ),
            },

            {
                path: "/contact",
                element: (
                    <PagePlaceholder
                        title="Contact"
                        description="Retrouve ici mes informations de contact."
                    />
                ),
            },
        ],
    },

    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: (
                    <PagePlaceholder
                        title="Dashboard"
                        description="Espace d'administration du portfolio."
                    />
                ),
            },
        ],
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;