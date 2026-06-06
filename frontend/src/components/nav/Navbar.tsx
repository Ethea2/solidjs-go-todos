import { A } from "@solidjs/router";

function Navbar() {
    return (
        <div class="navbar bg-base-100 shadow-sm sticky top-0 z-50">
            <div class="navbar-start">
                <a class="btn btn-ghost text-xl font-bold">MyApp</a>
            </div>
            <div class="navbar-end hidden sm:flex">
                <ul class="menu menu-horizontal px-1 gap-1">
                    <li>
                        <A
                            href="/"
                            class="rounded-btn"
                            activeClass="text-red-500"
                            inactiveClass="text-gray-200"
                            end={true}
                        >
                            Homepage
                        </A>
                    </li>
                    <li>
                        <A
                            href="/todos"
                            class="rounded-btn"
                            activeClass="text-red-500"
                            inactiveClass="text-gray-200"
                        >
                            Todos
                        </A>
                    </li>
                    <li>
                        <A
                            href="/users"
                            class="rounded-btn"
                            activeClass="text-red-500"
                            inactiveClass="text-gray-200"
                        >
                            Users
                        </A>
                    </li>
                </ul>
            </div>
            {/* Mobile dropdown */}
            <div class="navbar-end sm:hidden">
                <div class="dropdown dropdown-end">
                    <div tabIndex={0} role="button" class="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <A href="/" activeClass="active">
                                Homepage
                            </A>
                        </li>
                        <li>
                            <A href="/todos" activeClass="active">
                                Todos
                            </A>
                        </li>
                        <li>
                            <A href="/users" activeClass="active">
                                Users
                            </A>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
