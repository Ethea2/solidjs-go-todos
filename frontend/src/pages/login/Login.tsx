function Login() {
    return (
        <div class="flex w-full min-h-screen bg-base-100 overflow-hidden">
            {/* Left decorative panel */}
            <div class="relative hidden lg:flex flex-1 overflow-hidden bg-gradient-to-br from-primary to-secondary">
                {/* Grid overlay */}
                <div
                    class="absolute inset-0"
                    style={{
                        "background-image":
                            "linear-gradient(oklch(1 0 0 / 0.07) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.07) 1px, transparent 1px)",
                        "background-size": "40px 40px",
                    }}
                />

                {/* Glow orb */}
                <div class="absolute -bottom-20 -left-20 w-[420px] h-[420px] rounded-full bg-secondary/50 blur-[80px]" />

                {/* Content */}
                <div class="relative z-10 w-full h-full flex flex-col justify-center items-center p-12 gap-8">
                    <div class="text-[2.8rem] font-extrabold tracking-tight text-primary-content leading-tight">
                        Your tasks,
                        <br />
                        under control.
                    </div>
                    <p class="text-primary-content/70 text-base leading-relaxed max-w-xs">
                        A minimal, fast todo app built on SolidJS and Go. Sign
                        in to manage your day.
                    </p>

                    <div class="flex flex-col gap-3 mt-4">
                        {[
                            { icon: "⚡", text: "Instant reactive updates" },
                            { icon: "🐹", text: "Go-powered REST API" },
                            { icon: "✅", text: "Full task management" },
                        ].map((f) => (
                            <div class="flex items-center gap-3 bg-primary-content/10 border border-primary-content/20 rounded-xl px-4 py-2.5 text-primary-content/90 text-sm">
                                <span>{f.icon}</span>
                                <span>{f.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right: Login form */}
            <div class="flex flex-col justify-center w-full max-w-[480px] px-10 py-12 mx-auto">
                {/* Logo mark */}
                <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl mb-10">
                    ✅
                </div>

                <h1 class="text-[2rem] font-extrabold tracking-tight text-base-content mb-1.5">
                    Welcome back
                </h1>
                <p class="text-base-content/50 text-[0.95rem] mb-10">
                    Sign in to your Todos account
                </p>

                <div class="flex flex-col gap-[1.1rem]">
                    {/* Username */}
                    <div class="form-control gap-1.5">
                        <label class="label p-0">
                            <span class="label-text font-medium text-base-content/70">
                                Username
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="your_username"
                            class="input input-bordered w-full focus:input-primary rounded-xl"
                        />
                    </div>

                    {/* Password */}
                    <div class="form-control gap-1.5">
                        <label class="label p-0">
                            <span class="label-text font-medium text-base-content/70">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            class="input input-bordered w-full focus:input-primary rounded-xl"
                        />
                        <div class="flex justify-end mt-1">
                            <a class="link link-primary text-[0.8rem]">
                                Forgot password?
                            </a>
                        </div>
                    </div>

                    <button class="btn btn-primary w-full rounded-xl mt-2 font-bold text-base">
                        Sign In
                    </button>

                    {/* Divider */}
                    <div class="flex items-center gap-3 my-1">
                        <div class="flex-1 h-px bg-base-content/10" />
                        <span class="text-[0.8rem] text-base-content/35">
                            or
                        </span>
                        <div class="flex-1 h-px bg-base-content/10" />
                    </div>

                    <button class="btn btn-outline w-full rounded-xl font-semibold">
                        Continue as Guest
                    </button>
                </div>

                <p class="text-center mt-8 text-[0.8rem] text-base-content/35">
                    Don't have an account?{" "}
                    <a class="link link-primary font-semibold">Sign up</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
