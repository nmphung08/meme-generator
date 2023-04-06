import React from "react"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        image: "http://i.imgflip.com/1bij.jpg",
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const data = await fetch("https://api.imgflip.com/get_memes").then(
                (res) => res.json()
            )
            // console.log(data.data.memes)
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    function changeMeme() {
        let random = Math.floor(Math.random() * allMemes.length)
        setMeme((prev) => {
            let newObj = { ...prev }
            // console.log(allMemes)
            newObj.image = allMemes[random].url
            return newObj
        })
    }

    function handleChange(e) {
        const name = e.target.name
        setMeme((prev) => {
            let obj = { ...prev }
            obj[name] = e.target.value
            return obj
        })
    }

    return (
        <div className="p-8 mt-4">
            <div>
                <div className="grid grid-cols-2 gap-4">
                    <input
                        className="border border-gray-300 rounded-md py-2 px-4"
                        placeholder="Top text"
                        value={meme.topText}
                        name="topText"
                        onChange={handleChange}
                    />
                    <input
                        className="border border-gray-300 rounded-md py-2 px-4"
                        placeholder="Bottom text"
                        value={meme.bottomText}
                        name="bottomText"
                        onChange={handleChange}
                    />
                </div>
                <button
                    onClick={changeMeme}
                    className="mt-4 w-full text-center text-white text-base font-semibold py-4 rounded-md bg-gradient-to-br from-purple-900 to-purple-500 hover:translate-x-[1px] hover:translate-y-[1px]"
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="relative mx-auto h-[500px] mt-6">
                <img src={meme.image} className="rounded-md mx-auto h-full" />
                <div className="absolute top-0 bottom-0 w-full flex flex-col items-center justify-between text-white uppercase text-3xl font-extrabold tracking-wider font-impact">
                    <span className="drop-shadow-black-border mt-10">
                        {meme.topText}
                    </span>
                    <span className="drop-shadow-black-border mb-10">
                        {meme.bottomText}
                    </span>
                </div>
            </div>
        </div>
    )
}
