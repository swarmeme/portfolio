function Contact() {
    return (
  
      <section
        id="contact"
        className="
          relative
          px-6
          pt-28
          pb-36
          max-w-5xl
          mx-auto
          text-center
        "
      >
  
        {/* BACKGROUND ATMOSPHERE */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
  
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-violet-700/10 blur-[160px] rounded-full" />
  
          <div className="absolute bottom-[-100px] left-[-150px] w-[400px] h-[400px] bg-purple-600/10 blur-[180px] rounded-full" />
  
          <div className="absolute bottom-0 right-[-150px] w-[400px] h-[400px] bg-cyan-500/10 blur-[180px] rounded-full" />
  
        </div>
  
        {/* HEADING */}
        <h2
          className="
            text-4xl md:text-5xl
            font-semibold
            pb-2
            leading-normal
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-pink-200
            via-orange-200
            to-fuchsia-200
          "
        >
          Let’s build something meaningful.
        </h2>
  
        {/* SUBTEXT */}
        <p
          className="
            mt-6
            text-zinc-400
            text-lg md:text-xl
            leading-relaxed
            max-w-3xl
            mx-auto
          "
        >
          Open to backend engineering, distributed systems,
          platform infrastructure, and impactful product experiences.
        </p>
  
        {/* CONTACT CARD */}
        <div
          className="
            mt-14
            rounded-3xl
            border
            border-white/10
            bg-gradient-to-br
            from-pink-500/[0.10]
            via-white/[0.03]
            to-purple-500/[0.08]
            backdrop-blur-2xl
            p-10 md:p-12
            max-w-3xl
            mx-auto
            shadow-[0_0_40px_rgba(139,92,246,0.08)]
          "
        >
  
          <div className="space-y-8">
  
            {/* EMAIL */}
            <div>
  
              <p className="inline-block text-orange-200 mb-2 border-b border-violet-300/40 pb-1">
                Email
              </p>
  
              <div>
                <a
                  href="mailto:svarshneyas@gmail.com"
                  className="
                    text-xl md:text-xl
                    text-white
                    hover:text-violet-300
                    transition
                  "
                >
                  svarshneyas@gmail.com
                </a>
              </div>
  
            </div>
  
            {/* PHONE */}
            <div>
  
              <p className="inline-block text-orange-200 mb-2 border-b border-violet-300/40 pb-1">
                Phone
              </p>
  
              <div>
                <a
                  href="tel:+919891344382"
                  className="
                    text-lg md:text-xl
                    text-zinc-300
                    hover:text-white
                    transition
                  "
                >
                  +91 98913 44382
                </a>
              </div>
  
            </div>
  
            {/* LOCATION */}
            <div>
  
              <p className="inline-block text-orange-200 mb-2 border-b border-violet-300/40 pb-1">
                Location
              </p>
  
              <p className="text-zinc-300 text-lg">
                New Delhi, India
              </p>
  
            </div>
  
          </div>
  
        </div>
  
        {/* FOOTER */}
        <p
          className="
            mt-14
            text-sm
            text-zinc-500
            tracking-wide
          "
        >
          Designed & engineered by Swarnim Varshneya.
        </p>
  
      </section>
    );
  }
  
  export default Contact;