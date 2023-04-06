/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            karla: ["Karla", "san-serif"],
            impact: ["impact", "san-serif"],
        },
        extend: {
            dropShadow: {
                "black-border": [
                    "2px 0 black",
                    "-2px 0 black",
                    "0 2px black",
                    "0 -2px black",
                ],
            },
        },
    },
    plugins: [],
}
