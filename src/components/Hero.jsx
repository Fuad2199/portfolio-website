import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/projects/image.png"

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-4xl font-thin tracking-tight lg:mt-16
                             lg:text-6xl text-white">
                                Fuad Beybutov
                        </h1>
                        {/* {Profession} */}
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
            bg-clip-text text-3xl tracking-tight text-transparent">
                            Front-End Developer
                        </span>
                        {/* {Hero content} */}
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-lg">
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>
                {/* {Profile image} */}
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-end">
                        <img className="object-contain max-h-96 max-w-full" src={profilePic} alt="Fuad Beybutov" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
