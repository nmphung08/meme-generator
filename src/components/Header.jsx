import React from "react"
export default function Header() {
    return (
        <header className="h-16 bg-gradient-to-br from-purple-800 to-purple-500 flex flex-row items-center justify-between px-6">
            <span className="h-full flex flex-row items-center">
                <img src={`/src/images/troll-face.png`} className="h-1/2 mr-2" />
                <span className="text-xl text-white font-extrabold">Meme Generator</span>
            </span>
            <span className="text-white font-medium">&#169; 2023</span>
        </header>
    )
}
