import { motion } from "framer-motion";
import {
  useEffect,
  useState,
  RefObject,
} from "react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

type HeroProps = {
  workRef: RefObject<HTMLElement>;
};

function Hero({ workRef }: HeroProps) {

  const phrases = [
    "<>",
    "<H>",
    "<Hey>",
    "<Hey, I>",
    "<Hey, I am>",
    "<Hey, I am S>",
    "<Hey, I am Swa>",
    "<Hey, I am Swarni>",
    "<Hey, I am Swarnim />",
  ];

  const [text, setText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {

    let index = 1;

    setText(phrases[0]);

    const startTimeout = setTimeout(() => {

      const interval = setInterval(() => {

        setText(phrases[index]);

        index++;

        if (index >= phrases.length) {

          clearInterval(interval);

          setTimeout(() => {
            setTypingDone(true);
          }, 500);
        }

      }, 50);

    }, 700);

    return () => clearTimeout(startTimeout);

  }, []);

  return (

    <section
      className="
        relative
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        px-6
        text-center
      "
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] bg-violet-600/20 blur-[180px] rounded-full" />

        <div className="absolute bottom-0 left-1/3 w-[500px] h-[700px] bg-fuchsia-600/10 blur-[120px] rounded-full" />

        <div className="absolute top-1/2 right-1/4 w-[400px] h-[300px] bg-indigo-500/10 blur-[120px] rounded-full" />

      </div>

      {/* HERO TITLE */}
      <h1
        className="
          text-5xl sm:text-6xl md:text-7xl lg:text-8xl
          font-semibold
          tracking-tight
          leading-tight
          max-w-5xl
          text-transparent
          bg-clip-text
          pb-2
          bg-gradient-to-r
          from-pink-300
          via-violet-200
          to-purple-400
        "
      >
        {text}
      </h1>

      {/* TAGLINE */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={typingDone ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        className="
          mt-8
          text-zinc-400
          text-xl md:text-2xl
          font-light
          max-w-3xl
          leading-relaxed
        "
      >
        Making complex systems feel simple.
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={typingDone ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.50, duration: 0.9 }}
        className="mt-10 flex gap-4"
      >

        <button
          onClick={() =>
            workRef.current?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="
            px-6 py-3
            border border-zinc-700
            rounded-full
            hover:bg-white
            hover:text-black
            transition duration-300
            cursor-pointer
          "
        >
          View Work
        </button>

        <button
        onClick={() => {
            document
            .getElementById("contact")
            ?.scrollIntoView({
                behavior: "smooth",
            });
        }}
        className="
            px-6 py-3
            border border-zinc-700
            rounded-full
            hover:bg-white
            hover:text-black
            transition duration-300
            cursor-pointer
        "
        >
            Contact
        </button>

      </motion.div>

      {/* SOCIAL LINKS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={typingDone ? { opacity: 1 } : {}}
        transition={{ delay: 0.9, duration: 1 }}
        className="
          mt-8
          flex
          items-center
          justify-center
          gap-6
        "
      >

        {/* GITHUB */}
        <a
          href="https://github.com/swarmeme"
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-zinc-500
            hover:text-white
            hover:scale-110
            transition
          "
        >
          <FaGithub size={24} />
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/codeswav/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-zinc-500
            hover:text-[#0A66C2]
            hover:scale-110
            transition
          "
        >
          <FaLinkedin size={24} />
        </a>

        {/* LEETCODE */}
        <a
          href="https://leetcode.com/u/swarmeme/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-zinc-500
            hover:text-[#FFA116]
            hover:scale-110
            transition
          "
        >
          <SiLeetcode size={24} />
        </a>

      </motion.div>

    </section>
  );
}

export default Hero;