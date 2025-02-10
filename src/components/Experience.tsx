import { motion } from 'framer-motion';
import { Briefcase, Calendar, ArrowUpRight, Users, Target, Trophy } from 'lucide-react';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  const experiences = [
    {
      company: "Beam Lab Co",
      role: "Full Stack Developer Intern",
      period: "2024 - Present",
      description: "Building a business solution using React, Node.js, and AWS.",
      achievements: [
        { text: "API implementation using Postman Collections", icon: Target },
        { text: "Migrated Wordpress to a NextJs Site", icon: ArrowUpRight },
        { text: "Worked with a team of 5 developers", icon: Users }
      ],
      tech: ["React", "Node.js", "Vite", "Javascript", "TailwindCSS"]
    },
    {
      company: "Shivam Group Pvt Ltd",
      role: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using modern web technologies.",
      achievements: [
        { text: "Built 12 client websites", icon: Trophy },
        { text: "Improved code coverage to 90%", icon: Target },
        { text: "Mentored junior developers", icon: Users }
      ],
      tech: ["React", "Node.js", "MongoDB", "Express", "Firebase", "AWS"]
    }
  ];

  return (
    <section id='experience' className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto px-6 relative z-10"
      >
        {/* Enhanced Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Experience
            </span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Enhanced Timeline */}
        <div className="relative space-y-12">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              variants={itemVariants}
              className="relative pl-12"
            >
              {/* Timeline Node */}
              <div className="absolute left-[-5px] top-0">
                <div className="w-[10px] h-[10px] rounded-full bg-gradient-to-r from-blue-500 to-purple-600 ring-2 ring-blue-500/20 ring-offset-2 ring-offset-gray-900" />
                <div className="absolute inset-0 w-[10px] h-[10px] rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-ping opacity-75" />
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ y: -2 }}
                className="relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm 
                         hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-blue-400" />
                      <span>{exp.company}</span>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6">{exp.description}</p>

                {/* Achievements */}
                <div className="space-y-3 mb-6">
                  {exp.achievements.map(({ text, icon: Icon }) => (
                    <div key={text} className="flex items-start gap-3 text-gray-300 group">
                      <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="pt-1">{text}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 
                               text-gray-300 hover:text-white hover:border-blue-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Decorative Elements */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `pulse ${2 + Math.random() * 4}s infinite ${Math.random() * 2}s`,
          }}
        />
      ))}
    </section>
  );
};

export default Experience;
