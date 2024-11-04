/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
import typograhy from "@tailwindcss/typography"

export default {
    darkMode: 'media',
    content: [
        "./index.html",
        "./src/**/*.{html,js,jsx}"
    ],
    safelist: ["divider-primary"],
    theme: {
        sans: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
    },
    plugins: [
        daisyui,
        typograhy
    ],
    daisyui: {
        themes: [
            {
                light: {
                    "primary": "#3b82f6",      // Blu vivace
                    "secondary": "#6b7280",    // Grigio
                    "accent": "#10b981",       // Verde brillante
                    "neutral": "#f3f4f6",      // Grigio chiaro
                    "base-100": "#faf9f6",     // Bianco (sfondo)
                    "info": "#60a5fa",         // Azzurro chiaro
                    "success": "#34d399",      // Verde chiaro
                    "warning": "#fbbf24",      // Giallo
                    "error": "#ef4444",        // Rosso acceso
                },
                dark: {
                    "primary": "#2563eb",      // Blu scuro
                    "secondary": "#9ca3af",    // Grigio chiaro
                    "accent": "#14b8a6",       // Verde acqua
                    "neutral": "#1f2937",      // Grigio antracite
                    "base-100": "#111827",     // Nero carbone (sfondo)
                    "info": "#93c5fd",         // Azzurro pastello
                    "success": "#4ade80",      // Verde lime
                    "warning": "#fcd34d",      // Giallo ocra
                    "error": "#f87171",        // Rosso salmone
                },
            },
        ],
    }
}

