import { lazy } from "solid-js";

const routes = [
    {
        path: "/",
        component: lazy(() => import("../../pages/homepage/Homepage.tsx")),
    },
    {
        path: "/todos",
        component: lazy(() => import("../../pages/todos/Todos.tsx")),
    },
    {
        path: "/login",
        component: lazy(() => import("../../pages/login/Login.tsx")),
    },
    {
        path: "/users",
        component: lazy(() => import("../../pages/users/Users.tsx")),
    },
    {
        path: "/signup",
        component: lazy(() => import("../../pages/signup/Signup.tsx")),
    },
];

export default routes;
