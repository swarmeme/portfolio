import { RefObject } from "react";

type HighlightsProps = {
  sectionRef: RefObject<HTMLElement>;
};

function Highlights({ sectionRef }: HighlightsProps) {
  return (
    <section
      ref={sectionRef}
      className="
        relative
        px-6
        py-20
        max-w-6xl
        mx-auto
        -mt-20
        z-10
      "
    >

      {/* section blend glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-violet-700/10 blur-[160px] rounded-full" />
      </div>

      <h2
        className="
          text-4xl md:text-5xl
          font-semibold
          mb-14
          text-center
          pb-2
          leading-normal
          text-transparent
          bg-clip-text
          bg-gradient-to-r
          from-pink-300
          via-indigo-100
          to-pink-200
          drop-shadow-[0_0_25px_rgba(139,92,246,0.15)]
        "
      >
        What I do
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {/* CARD 1 */}
        <div className="group relative">

          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-500/30 via-fuchsia-400/20 to-indigo-400/30 blur-2xl opacity-40 group-hover:opacity-80 transition duration-700" />

          <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-8 shadow-[0_0_40px_rgba(255,255,255,0.06)] transition duration-500 group-hover:-translate-y-4 group-hover:border-purple-400/30">

            <h3 className="text-2xl font-semibold mb-6 text-center">
              Distributed Systems Engineering
            </h3>

            <p className="text-zinc-300 leading-relaxed text-center">
              Built scalable backend orchestration systems and
              REST-based workflows for 900+ production MySQL
              clusters, enabling lifecycle management,
              zero-downtime migrations, and infrastructure reliability.
            </p>

          </div>
        </div>

        {/* CARD 2 */}
        <div className="group relative">

          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400/30 via-blue-400/20 to-indigo-500/30 blur-2xl opacity-40 group-hover:opacity-80 transition duration-700" />

          <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-8 shadow-[0_0_40px_rgba(255,255,255,0.06)] transition duration-500 group-hover:-translate-y-4 group-hover:border-cyan-300/30">

            <h3 className="text-2xl font-semibold mb-6 text-center">
              Platform & Infrastructure Automation
            </h3>

            <p className="text-zinc-300 leading-relaxed text-center">
              Developed Go and Python backend services integrating
              REST APIs, gRPC communication, and provisioning
              pipelines to automate DBaaS operations,
              reducing manual effort by 98%.
            </p>

          </div>
        </div>

        {/* CARD 3 */}
        <div className="group relative">

          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-pink-500/30 via-fuchsia-400/20 to-rose-400/30 blur-2xl opacity-40 group-hover:opacity-80 transition duration-700" />

          <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-8 shadow-[0_0_40px_rgba(255,255,255,0.06)] transition duration-500 group-hover:-translate-y-4 group-hover:border-pink-300/30">

            <h3 className="text-2xl font-semibold mb-6 text-center">
              Reliability & Observability
            </h3>

            <p className="text-zinc-300 leading-relaxed text-center">
              Engineered validation frameworks, improved API
              error propagation across React and Golang services,
              and resolved complex replication inconsistencies
              through binlog analysis and system tracing.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Highlights;