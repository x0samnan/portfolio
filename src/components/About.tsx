import { motion } from 'framer-motion';
import { Coffee, Terminal, Brain, Star, Code2, Rocket, Users, GitBranch } from 'lucide-react';

const About = () => {
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

  const stats = [
    { icon: Coffee, label: "400+ Coffee Cups", value: "This Year", color: "from-yellow-400 to-orange-500" },
    { icon: Terminal, label: "20+ Projects", value: "Completed", color: "from-green-400 to-emerald-500" },
    { icon: Brain, label: "15+ Technologies", value: "Mastered", color: "from-blue-400 to-indigo-500" },
    { icon: Star, label: "100+ Contributions", value: "On Github", color: "from-purple-400 to-pink-500" }
  ];

  const skills = [
    { name: 'Problem Solving', icon: Code2, color: 'from-cyan-400 to-blue-500' },
    { name: 'Team Leadership', icon: Users, color: 'from-green-400 to-teal-500' },
    { name: 'Clean Code', icon: GitBranch, color: 'from-purple-400 to-indigo-500' },
    { name: 'Agile Development', icon: Rocket, color: 'from-pink-400 to-rose-500' }
  ];

  return (
    <section id='about' className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto px-6 relative z-10"
      >
        {/* Enhanced Header with Icon */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-6">
            <Brain className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              About Me
            </span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Enhanced Content Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="prose prose-invert">
              <p className="text-lg leading-relaxed text-gray-300">
                Hello! I'm a passionate Full Stack Developer with a deep love for creating elegant solutions to complex problems. With 2+ years of experience in web development, I specialize in building high-performance applications that deliver exceptional user experiences.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                My journey in tech started with a Open Source Exploration, and I've since worked with startups and established companies, helping them scale their applications and improve their technical infrastructure.
              </p>
            </div>
            
            {/* Enhanced Skills Section with Gradient Icons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {skills.map(({ name, icon: Icon, color }) => (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group px-4 py-2 rounded-full bg-white/5 border border-white/10 
                           hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300
                           flex items-center gap-2"
                >
                  <div className={`bg-gradient-to-r ${color} p-1.5 rounded-full`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Stats Grid with Larger Icons */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, label, value, color }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.02, y: -2 }}
                className="relative p-6 rounded-xl border border-white/10 overflow-hidden group"
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/10" />
                
                {/* Animated Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className="relative">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {label}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decorative Elements */}
        {[...Array(20)].map((_, i) => (
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
      </motion.div>
    </section>
  );
};

export default About;
