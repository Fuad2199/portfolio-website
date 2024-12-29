import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiVite } from "react-icons/si";

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">
                        <SiVite className="text-7xl text-technolight" />
                    </a>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                        <RiReactjsLine className="text-7xl text-technolight" />
                    </a>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                        <TbBrandNextjs className="text-7xl text-technolight" />
                    </a>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                        <SiJavascript className="text-7xl text-technolight" />
                    </a>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                        <SiTypescript className="text-7xl text-technolight" />
                    </a>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                        <RiTailwindCssFill className="text-7xl text-technolight" />
                    </a>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <a href="https://mui.com/" target="_blank" rel="noopener noreferrer">
                        <SiMui className="text-7xl text-technolight" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Technologies
