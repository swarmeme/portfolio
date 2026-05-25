import { ExternalLink, Download } from "lucide-react";

function TechStack() {
  return (
    <section className="relative px-6 py-20 max-w-6xl mx-auto">

      {/* subtle background atmosphere */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-violet-600/10 blur-[160px] rounded-full" />

        <div className="absolute bottom-[-100px] left-[-150px] w-[500px] h-[500px] bg-purple-600/10 blur-[180px] rounded-full" />

        <div className="absolute bottom-0 right-[-150px] w-[450px] h-[450px] bg-cyan-500/10 blur-[180px] rounded-full" />

      </div>

      {/* HEADING */}
      <h2
        className="
          text-4xl md:text-5xl
          font-semibold
          mb-20
          text-center
          pb-2
          leading-normal
          text-transparent
          bg-clip-text
          bg-gradient-to-r
          from-fuchsia-200
          via-purple-200
          to-cyan-200
          drop-shadow-[0_0_25px_rgba(139,92,246,0.15)]
        "
      >
        From Code to Production
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT CARD */}
        <div className="relative">

          <div
            className="
              relative
              h-full
              rounded-3xl
              border
              border-white/10
              bg-gradient-to-br
              from-violet-500/[0.10]
              via-white/[0.03]
              to-cyan-500/[0.08]
              backdrop-blur-2xl
              p-8
              shadow-[0_0_40px_rgba(139,92,246,0.08)]
            "
          >

            <h3 className="text-2xl font-semibold mb-8 text-center">
              What I build with
            </h3>

            <div className="space-y-6">

              <div>
              <p className="inline-block text-violet-200 mb-2 border-b border-violet-300/40 pb-1">
                Backend & Systems
             </p>

                <p className="text-zinc-300 leading-relaxed">
                  Go · Python · Microservices · gRPC ·
                  Protobuf · REST APIs
                </p>
              </div>

              <div>
                <p className="inline-block text-violet-200 mb-2 border-b border-violet-300/40 pb-1">
                  Databases
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  MySQL · MongoDB
                </p>
              </div>

              <div>
                <p className="inline-block text-violet-200 mb-2 border-b border-violet-300/40 pb-1">
                  DevOps & Infrastructure
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  Docker · Kubernetes · CI/CD · Git ·
                  Bash/Shell
                </p>
              </div>

              <div>
                <p className="inline-block text-violet-200 mb-2 border-b border-violet-300/40 pb-1">
                  Cloud & Observability
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  Google Cloud Platform · Prometheus ·
                  Grafana
                </p>
              </div>

              <div>
                <p className="inline-block text-violet-200 mb-2 border-b border-violet-300/40 pb-1">
                  Frontend
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  React.js · TypeScript · Tailwind CSS
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="relative">

          <div
            className="
              relative
              h-full
              rounded-3xl
              border
              border-white/10
              bg-gradient-to-br
              from-indigo-500/[0.10]
              via-white/[0.03]
              to-purple-500/[0.08]
              backdrop-blur-2xl
              p-8
              flex
              flex-col
              justify-between
              shadow-[0_0_40px_rgba(99,102,241,0.08)]
            "
          >

            <div>

              <h3 className="text-2xl font-semibold mb-2 text-center">
                Software Engineer
              </h3>

              <p className="text-center text-violet-200 mb-8">
                Flipkart · 2 Years
              </p>

              <ul className="space-y-4 text-zinc-300 leading-relaxed">

                <li>
                  Built and scaled a{" "}
                  <span className="text-white">
                    managed MySQL PaaS platform
                  </span>{" "}
                  supporting 450+ customers across the
                  Flipkart ecosystem with high availability
                  and reliability.
                </li>

                <li>
                  Developed{" "}
                  <span className="text-white">
                    automation systems in Go & Python
                  </span>{" "}
                  for cluster lifecycle management,
                  health checks, and provisioning workflows,
                  significantly reducing manual operations.
                </li>

                <li>
                  Built and enhanced{" "}
                  <span className="text-white">
                    internal React dashboards and
                    REST-based tools
                  </span>
                  , improving operational efficiency for
                  engineers managing large-scale database
                  systems.
                </li>

              </ul>
            </div>

            {/* BUTTONS */}
            <div className="mt-10 flex gap-4 justify-center">

              <a
                href="https://drive.google.com/file/d/1GHJrH6IXLNDZ_HeHN1cDlgsDW_QvylHo/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-5
                  py-2
                  rounded-xl
                  bg-white
                  text-black
                  font-medium
                  hover:opacity-90
                  transition
                  flex
                  items-center
                  gap-2
                "
              >
                View Resume
                <ExternalLink size={16} />
              </a>

              <a
                href="/resume.pdf"
                download
                className="
                  px-5
                  py-2
                  rounded-xl
                  border
                  border-white/20
                  text-white
                  hover:bg-white/10
                  transition
                  flex
                  items-center
                  gap-2
                "
              >
                Download
                <Download size={16} />
              </a>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default TechStack;