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

      {/* CURRENT WORK */}
      <div className="mt-16">
        <p className="text-center text-sm font-medium uppercase tracking-[0.24em] text-cyan-200/80">
          Currently Building
        </p>

        <div className="group relative mt-6 max-w-5xl mx-auto">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400/20 via-violet-500/20 to-fuchsia-400/20 blur-2xl opacity-50 transition duration-700 group-hover:opacity-90" />

          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/[0.10] via-white/[0.03] to-violet-500/[0.10] p-8 md:p-10 backdrop-blur-2xl shadow-[0_0_40px_rgba(34,211,238,0.08)] transition duration-500 group-hover:-translate-y-1 group-hover:border-cyan-300/30">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-white md:text-3xl">
                  Cross-Platform Coaching &amp; Messaging App
                </h3>
                <p className="mt-2 text-cyan-100">
                  Freelance project · React Native, Expo, TypeScript &amp; Firebase
                </p>
              </div>

              <span className="w-fit rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-sm text-cyan-100">
                In progress
              </span>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-zinc-300">
              Building a cross-platform mobile application for a fitness coaching
              business. Architected role-based access for admins, coaches, and
              clients; real-time group chat with file sharing; secure email
              authentication with live session control; and server-enforced
              Firestore security rules—delivering a production-ready experience
              across iOS, Android, and web.
            </p>
          </div>
        </div>

        <div className="group relative mt-6 max-w-5xl mx-auto">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-400/20 via-fuchsia-500/20 to-cyan-400/20 blur-2xl opacity-50 transition duration-700 group-hover:opacity-90" />

          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/[0.10] via-white/[0.03] to-fuchsia-500/[0.10] p-8 md:p-10 backdrop-blur-2xl shadow-[0_0_40px_rgba(139,92,246,0.08)] transition duration-500 group-hover:-translate-y-1 group-hover:border-violet-300/30">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-white md:text-3xl">
                  Lightweight Attendance System
                </h3>
                <p className="mt-2 text-violet-100">
                  Personal product · React, TypeScript, FastAPI &amp; PostgreSQL
                </p>
              </div>

              <span className="w-fit rounded-full border border-violet-200/20 bg-violet-200/10 px-3 py-1 text-sm text-violet-100">
                In progress
              </span>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-zinc-300">
              Building a lightweight attendance system for small businesses that
              still rely on paper registers and manual month-end attendance
              tracking. The product will deliver a simple Progressive Web App
              experience, backed by a secure Python API and a reliable relational
              data layer.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
