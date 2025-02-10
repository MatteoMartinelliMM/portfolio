/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
import typograhy from "@tailwindcss/typography"

export default {
    darkMode: 'media', content: ["./index.html", "./src/**/*.{html,js,jsx}"], //safelist: ["divider-primary"],
    theme: {
        extend: {
            keyframes: {
                'fade-in': {
                    '0%': {opacity: '0'},
                    '100%': {opacity: '1'}
                },
                'fade-in-fast': {
                    '0%': {opacity: '0'},
                    '100%': {opacity: '1'}
                },
            },
            animation: {
                'progress-fill': "'progress-fill' 1.5s ease-out forwards",
                'fade-in': 'fade-in 2s ease-in',
                'fade-in-fast': 'fade-in-fast 1s ease-in'
            },
        },
        sans: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
    }, plugins: [daisyui, typograhy, function ({addComponents, theme}) {
        addComponents({
            '.progress.animate::-webkit-progress-value': {
                transition: 'width 1.5s ease-out'
            },
            '.progress.animate::-moz-progress-bar': {
                animation: 'progress-fill 1.5s ease-out forwards'
            },
        })
    }], daisyui: {
        themes: [{
            light: {
                "primary": "#3b82f6",
                "secondary": "#6b7280",
                "accent": "#10b981",
                "neutral": "#f3f4f6",
                "base-100": "#faf9f6",
                "base-200": "#e5e7eb",
                "info": "#60a5fa",
                "info-accent": "#93c5fd",
                "success": "#34d399",
                "success-accent": "#6ee7b7",
                "warning": "#fbbf24",
                "warning-accent": "#fde047",
                "error": "#ef4444",
            }, dark: {
                "primary": "#2563eb",
                "secondary": "#9ca3af",
                "accent": "#14b8a6",
                "neutral": "#1f2937",
                "base-100": "#111827",
                "base-200": "#1a202c",
                "info": "#93c5fd",
                "info-accent": "#60a5fa",
                "success": "#4ade80",
                "success-accent": "#22c55e",
                "warning": "#fcd34d",
                "warning-accent": "#f59e0b",
                "error": "#f87171",
            },
        },],
    }
}

