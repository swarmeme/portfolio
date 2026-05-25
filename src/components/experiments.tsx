function Experiments() {
    const experiments = [
      {
        title: "Distributed Log Tracing & Debugging",
        description:
          "Captured, filtered, and analyzed distributed service logs across backend systems to trace replication inconsistencies, synchronization failures, and production incidents. Worked closely with orchestration services and infrastructure workflows to identify root causes, reduce debugging time, and improve operational visibility for large-scale MySQL deployments.",
        glow: "hover:border-purple-400/30",
        gradient:
          "from-purple-500/10 via-transparent to-fuchsia-400/10",
      },
  
      {
        title: "MySQL Replication Analysis",
        description:
          "Resolved complex MySQL replication inconsistencies through detailed binlog analysis, node-level tracing, and failure debugging. Investigated replication lag, broken synchronization states, and cluster-level anomalies while contributing to more stable and reliable distributed database operations.",
        glow: "hover:border-indigo-400/30",
        gradient:
          "from-blue-400/10 via-transparent to-indigo-400/10",
      },
  
      {
        title: "gRPC & Service Communication",
        description:
          "Integrated gRPC-based communication pipelines between orchestration services, backend systems, and provisioning workflows to support distributed state synchronization. Worked on improving reliability of internal service interactions, backend coordination, and infrastructure lifecycle operations.",
        glow: "hover:border-violet-400/30",
        gradient:
          "from-violet-400/10 via-transparent to-blue-400/10",
      },
  
      {
        title: "React UI Engineering",
        description:
          "Built and improved internal React-based operational dashboards and interfaces focused on infrastructure visibility, configuration management, and smoother developer workflows. Worked alongside backend APIs and Golang services to create responsive UI experiences for internal platform tooling.",
        glow: "hover:border-red-400/30",
        gradient:
          "from-red-400/10 via-transparent to-orange-400/10",
      },
  
      {
        title: "Machine Learning Workflows",
        description:
          "Worked on machine learning workflows involving predictive analytics, classification systems, and data preprocessing pipelines using pandas, scikit-learn, and TensorFlow. Experimented with feature engineering, model training, and data analysis techniques to build practical ML-based solutions.",
        glow: "hover:border-pink-400/30",
        gradient:
          "from-pink-400/10 via-transparent to-fuchsia-400/10",
      },
  
      {
        title: "SwiftUI Application Interfaces",
        description:
          "Designed and developed modern SwiftUI interfaces with focus on clean visual design, intuitive user interactions, and smooth mobile experiences. Explored component-driven UI patterns, animations, and responsive layouts while building polished iOS application screens.",
        glow: "hover:border-orange-400/30",
        gradient:
          "from-orange-400/10 via-transparent to-yellow-400/10",
      },
    ];
  
    return (
        <section className="relative px-6 pt-20 pb-40 max-w-6xl mx-auto text-center">
  
        <h3
          className="
            text-3xl md:text-5xl
            font-semibold
            mb-14
            pb-2
            leading-normal
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-cyan-200
            via-pink-200
            to-orange-200
          "
        >
          More Experiments & Engineering
        </h3>
  
        <div className="flex flex-col gap-5 max-w-5xl mx-auto">
  
          {experiments.map((item) => (
            <div
              key={item.title}
              className={`
                group
                relative
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                px-8
                py-6
                text-left
                transition-all
                duration-500
                hover:bg-white/[0.06]
                hover:-translate-y-1
                ${item.glow}
              `}
            >
  
              {/* gradient overlay */}
              <div
                className={`
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  transition duration-500 bg-gradient-to-r ${item.gradient}
                `}
              />
  
              {/* content */}
              <div className="relative z-10">
  
                <h4 className="text-xl md:text-2xl font-semibold text-white">
                  {item.title}
                </h4>
  
                <div
                  className="
                    grid transition-all duration-500
                    grid-rows-[0fr]
                    group-hover:grid-rows-[1fr]
                  "
                >
                  <div className="overflow-hidden">
                    <p className="pt-4 text-zinc-400 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
  
              </div>
  
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Experiments;