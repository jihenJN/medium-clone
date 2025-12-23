import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import flowbite from "flowbite/plugin";
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./node_modules/flowbite/**/*.js",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },

            colors: {
                /* -------- Brand -------- */
                brand: {
                    DEFAULT: "#2563eb", // bg-brand
                    strong: "#1e40af", // bg-brand-strong
                    medium: "#60a5fa", // ring-brand-medium
                    soft: "#dbeafe",
                },

                /* -------- Foreground (text) -------- */
                body: "#475569", // text-body
                heading: "#0f172a", // text-heading
                "fg-brand": "#2563eb", // text-fg-brand
                "fg-disabled": "#94a3b8",

                /* -------- Semantic -------- */
                success: {
                    DEFAULT: "#16a34a",
                    strong: "#15803d",
                    soft: "#dcfce7",
                },
                danger: {
                    DEFAULT: "#dc2626",
                    strong: "#b91c1c",
                    soft: "#fee2e2",
                },
                warning: {
                    DEFAULT: "#f59e0b",
                    strong: "#d97706",
                    soft: "#fef3c7",
                },

                /* -------- Neutral system -------- */
                neutral: {
                    primary: "#ffffff", // bg-neutral-primary
                    secondary: {
                        soft: "#f8fafc", // bg-neutral-secondary-soft
                        medium: "#f1f5f9", // bg-neutral-secondary-medium
                    },
                    tertiary: "#e5e7eb", // bg-neutral-tertiary
                },

                /* -------- Borders -------- */
                default: {
                    DEFAULT: "#e5e7eb", // border-default
                    medium: "#cbd5e1", // border-default-medium
                },
            },

            borderRadius: {
                base: "0.5rem", // rounded-base
            },

            boxShadow: {
                xs: "0 1px 2px rgba(0,0,0,0.05)", // shadow-xs
                sm: "0 1px 3px rgba(0,0,0,0.1)",
            },

            ringColor: {
                brand: "#2563eb",
                neutral: "#e5e7eb",
                "neutral-tertiary": "#e5e7eb",
            },
        },
    },

    plugins: [forms, flowbite],
};
