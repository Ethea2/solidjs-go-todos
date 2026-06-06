import { A } from "@solidjs/router";

function Homepage() {
    return (
        <div class="min-h-screen bg-base-100 flex flex-col">
            {/* Hero Section */}
            <section class="flex-1 flex flex-col justify-center items-center text-center px-6 py-24 relative overflow-hidden">
                {/* Glow blob */}
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "500px",
                        height: "500px",
                        "border-radius": "9999px",
                        background:
                            "radial-gradient(circle, oklch(var(--p) / 0.15), transparent 70%)",
                        filter: "blur(48px)",
                        "pointer-events": "none",
                    }}
                />

                <div
                    style={{
                        position: "relative",
                        "z-index": 10,
                        "max-width": "680px",
                        display: "flex",
                        "flex-direction": "column",
                        "align-items": "center",
                        gap: "1.5rem",
                    }}
                >
                    {/* Badge */}
                    <div class="badge badge-outline badge-lg gap-2 text-base-content/60 border-base-content/20 px-4 py-3">
                        ⚡ Powered by SolidJS + Go
                    </div>

                    {/* Headline */}
                    <h1
                        style={{
                            "font-size": "clamp(2.8rem, 8vw, 5.5rem)",
                            "font-weight": "800",
                            "line-height": "1.05",
                            "letter-spacing": "-0.03em",
                            color: "oklch(var(--bc))",
                        }}
                    >
                        Get things{" "}
                        <span
                            style={{
                                background:
                                    "linear-gradient(135deg, oklch(var(--p)), oklch(var(--s)))",
                                "-webkit-background-clip": "text",
                                "-webkit-text-fill-color": "transparent",
                                "background-clip": "text",
                            }}
                        >
                            done.
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p
                        class="text-base-content/60 text-lg"
                        style={{ "max-width": "420px", "line-height": "1.7" }}
                    >
                        A fast, no-nonsense todo app. Organize your tasks, track
                        your progress, and ship your day — backed by a
                        blazing-fast Go API.
                    </p>

                    {/* CTA Buttons */}
                    <div
                        style={{
                            display: "flex",
                            gap: "0.75rem",
                            "flex-wrap": "wrap",
                            "justify-content": "center",
                        }}
                    >
                        <A
                            href="/todos"
                            class="btn btn-primary btn-lg"
                            style={{
                                "border-radius": "9999px",
                                "padding-left": "2rem",
                                "padding-right": "2rem",
                            }}
                        >
                            Open Todos
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ width: "1.25rem", height: "1.25rem" }}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </A>
                        <A
                            href="/users"
                            class="btn btn-outline btn-lg"
                            style={{
                                "border-radius": "9999px",
                                "padding-left": "2rem",
                                "padding-right": "2rem",
                            }}
                        >
                            View Users
                        </A>
                    </div>

                    {/* Stats */}
                    <div
                        style={{
                            display: "flex",
                            gap: "3rem",
                            "padding-top": "1.5rem",
                            "margin-top": "0.5rem",
                            "border-top": "1px solid oklch(var(--bc) / 0.1)",
                            width: "100%",
                            "justify-content": "center",
                        }}
                    >
                        {[
                            { value: "~5ms", label: "API Response" },
                            { value: "∞", label: "Todos" },
                            { value: "100%", label: "Open Source" },
                        ].map((s) => (
                            <div style={{ "text-align": "center" }}>
                                <div
                                    style={{
                                        "font-size": "1.75rem",
                                        "font-weight": "800",
                                        color: "oklch(var(--p))",
                                        "letter-spacing": "-0.02em",
                                    }}
                                >
                                    {s.value}
                                </div>
                                <div
                                    style={{
                                        "font-size": "0.65rem",
                                        "text-transform": "uppercase",
                                        "letter-spacing": "0.1em",
                                        color: "oklch(var(--bc) / 0.4)",
                                        "margin-top": "0.25rem",
                                    }}
                                >
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section class="bg-base-200" style={{ padding: "5rem 1.5rem" }}>
                <div style={{ "max-width": "900px", margin: "0 auto" }}>
                    <div
                        style={{
                            width: "2.5rem",
                            height: "3px",
                            "border-radius": "9999px",
                            background:
                                "linear-gradient(90deg, oklch(var(--p)), oklch(var(--s)))",
                            "margin-bottom": "0.75rem",
                        }}
                    />
                    <h2
                        style={{
                            "font-size": "2.25rem",
                            "font-weight": "800",
                            "letter-spacing": "-0.02em",
                            color: "oklch(var(--bc))",
                            "margin-bottom": "0.5rem",
                        }}
                    >
                        Why this app?
                    </h2>
                    <p
                        class="text-base-content/50"
                        style={{
                            "margin-bottom": "3rem",
                            "max-width": "380px",
                        }}
                    >
                        Everything you need to manage tasks, nothing you don't.
                    </p>

                    <div
                        style={{
                            display: "grid",
                            "grid-template-columns":
                                "repeat(auto-fit, minmax(240px, 1fr))",
                            gap: "1rem",
                        }}
                    >
                        {[
                            {
                                icon: "⚡",
                                title: "Reactive UI",
                                badge: "SolidJS",
                                desc: "Fine-grained reactivity means zero virtual DOM overhead. Updates are surgical and instant.",
                            },
                            {
                                icon: "🐹",
                                title: "Go Backend",
                                badge: "Golang",
                                desc: "A concurrent, typed Go API handles your data with speed and simplicity baked in.",
                            },
                            {
                                icon: "✅",
                                title: "Full CRUD",
                                badge: "REST API",
                                desc: "Create, complete, and delete todos. Assign them to users. Stay organized end-to-end.",
                            },
                        ].map((f) => (
                            <div
                                class="card bg-base-100 border border-base-content/10"
                                style={{
                                    padding: "1.75rem",
                                    "border-radius": "1.25rem",
                                }}
                            >
                                <div
                                    style={{
                                        "font-size": "2rem",
                                        "margin-bottom": "1rem",
                                    }}
                                >
                                    {f.icon}
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        "align-items": "center",
                                        gap: "0.5rem",
                                        "margin-bottom": "0.5rem",
                                    }}
                                >
                                    <span
                                        style={{
                                            "font-size": "1.1rem",
                                            "font-weight": "700",
                                            "letter-spacing": "-0.01em",
                                            color: "oklch(var(--bc))",
                                        }}
                                    >
                                        {f.title}
                                    </span>
                                    <span class="badge badge-primary badge-outline badge-sm">
                                        {f.badge}
                                    </span>
                                </div>
                                <p
                                    class="text-base-content/50 text-sm"
                                    style={{ "line-height": "1.65" }}
                                >
                                    {f.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section style={{ padding: "5rem 1.5rem" }}>
                <div style={{ "max-width": "900px", margin: "0 auto" }}>
                    <div
                        style={{
                            "border-radius": "1.5rem",
                            padding: "4rem 2rem",
                            "text-align": "center",
                            position: "relative",
                            overflow: "hidden",
                            background:
                                "linear-gradient(135deg, oklch(var(--p) / 0.12), oklch(var(--s) / 0.08))",
                            border: "1px solid oklch(var(--p) / 0.2)",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                                background:
                                    "radial-gradient(circle at 75% 25%, oklch(var(--s) / 0.1), transparent 60%)",
                                "pointer-events": "none",
                            }}
                        />
                        <div style={{ position: "relative", "z-index": 1 }}>
                            <h2
                                style={{
                                    "font-size": "clamp(1.8rem, 5vw, 3rem)",
                                    "font-weight": "800",
                                    "letter-spacing": "-0.02em",
                                    color: "oklch(var(--bc))",
                                    "margin-bottom": "1rem",
                                }}
                            >
                                Ready to start?
                            </h2>
                            <p
                                class="text-base-content/50"
                                style={{
                                    "margin-bottom": "2rem",
                                    "max-width": "340px",
                                    margin: "0 auto 2rem",
                                }}
                            >
                                Your todos are waiting. Jump in and take control
                                of your day.
                            </p>
                            <A
                                href="/todos"
                                class="btn btn-primary btn-lg"
                                style={{
                                    "border-radius": "9999px",
                                    "padding-left": "2.5rem",
                                    "padding-right": "2.5rem",
                                }}
                            >
                                Go to Todos →
                            </A>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                class="footer footer-center bg-base-200 text-base-content/40 border-t border-base-content/10"
                style={{ padding: "1.5rem" }}
            >
                <p style={{ "font-size": "0.875rem" }}>
                    Built with SolidJS &amp; Go · {new Date().getFullYear()}
                </p>
            </footer>
        </div>
    );
}

export default Homepage;
