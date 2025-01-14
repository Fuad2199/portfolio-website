import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="text-3xl font-normal text-white mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center mx-2 w-10">
        FB
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://linkedin.com/in/fuad-beybutov-05934728b" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Fuad2199" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://wa.me/+994504993511" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
        </a>
        <a href="https://t.me/fuadbeybutov21">
        <FaTelegramPlane />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
