import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Laptop, ExternalLink, Sparkles } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  const socialLinks = [
    { Icon: Github, href: 'https://github.com/x0samnan', label: 'GitHub', hoverColor: 'hover:text-blue-400' },
    { Icon: Linkedin, href: 'https://linkedin.com/in/x0samnan', label: 'LinkedIn', hoverColor: 'hover:text-purple-400' },
    { Icon: Mail, href: 'mailto:samnansiddique@yandex.com', label: 'Email', hoverColor: 'hover:text-pink-400' },
  ];

  const techStack = [
    // Frontend
    { name: 'React', color: 'from-cyan-400 to-blue-500' },
    { name: 'Next.js', color: 'from-gray-700 to-black' },
    { name: 'TypeScript', color: 'from-blue-400 to-indigo-500' },
    { name: 'Tailwind CSS', color: 'from-teal-400 to-cyan-500' },
    { name: 'Vue.js', color: 'from-emerald-400 to-green-500' },
    { name: 'Angular', color: 'from-red-500 to-rose-600' },
    { name: 'Svelte', color: 'from-orange-500 to-red-500' },
    { name: 'Sass', color: 'from-pink-400 to-rose-500' },

    // Backend
    { name: 'Node.js', color: 'from-green-400 to-emerald-500' },
    { name: 'MongoDB', color: 'from-green-500 to-green-700' },
    { name: 'SQL', color: 'from-yellow-400 to-orange-500' },
    { name: 'Redux', color: 'from-purple-400 to-violet-500' },
    { name: 'Express.js', color: 'from-gray-500 to-gray-700' },
    { name: 'GraphQL', color: 'from-pink-500 to-fuchsia-500' },
    { name: 'PostgreSQL', color: 'from-blue-500 to-indigo-600' },
    { name: 'Docker', color: 'from-sky-400 to-blue-500' },

    // Tools & Testing
    { name: 'Jest', color: 'from-red-400 to-rose-500' },
    { name: 'Git', color: 'from-orange-600 to-red-600' },
    { name: 'AWS', color: 'from-yellow-500 to-orange-600' },
    { name: 'Firebase', color: 'from-yellow-400 to-amber-500' }
  ];
  
  return (
    <section id='home' className="relative min-h-screen flex flex-col items-center justify-center bg-[#030014] text-white px-4 py-16 overflow-hidden">
      {/* Enhanced Background with Multiple Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.08),transparent_50%)]" />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239BA1A6" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        {/* Enhanced Profile Image with Interactive Effects */}
        <motion.div
          variants={itemVariants}
          className="relative w-52 h-52 mx-auto"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 180 : 0,
            }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30"
          />
          <div className="relative w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/30 border-4 border-white/10 overflow-hidden">
            <motion.span 
              animate={{ 
                scale: isHovered ? 1.2 : 1,
                rotate: isHovered ? 360 : 0
              }}
              transition={{ duration: 0.6 }}
              className="text-7xl"
            >
              👨‍💻
            </motion.span>
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm"
                />
              )}
            </AnimatePresence>
          </div>
          {/* Rotating rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                rotate: 360,
                scale: isHovered ? 1.1 : 1
              }}
              transition={{ 
                duration: 20 - i * 5,
                repeat: Infinity,
                ease: "linear",
                scale: { duration: 0.6 }
              }}
              className={`absolute inset-0 rounded-full border-2 border-dashed border-blue-400/20
                         ${i === 0 ? 'scale-110' : i === 1 ? 'scale-125' : 'scale-150'}`}
              style={{ transformOrigin: 'center center' }}
            />
          ))}
        </motion.div>

        {/* Enhanced Name Title with Sparkle Effect */}
        <motion.div variants={itemVariants} className="mt-10">
          <h1 className="text-6xl font-bold inline-flex items-center gap-4">
            <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
            <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text 
                           animate-gradient bg-300% hover:animate-shine cursor-default">
              Samnan Siddique
            </span>
            <Sparkles className="w-8 h-8 text-pink-400 animate-pulse" />
          </h1>
        </motion.div>

        {/* Enhanced Role Badge */}
        <motion.div variants={itemVariants} className="mt-6">
          <div className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full 
                         bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 
                         backdrop-blur-lg border border-white/10 hover:border-white/20 
                         shadow-lg shadow-purple-500/20 transition-all duration-300
                         hover:shadow-purple-500/30 hover:-translate-y-1">
            <Laptop className="w-5 h-5 text-blue-400" />
            <p className="text-xl text-gray-200 font-medium">Full-Stack Developer</p>
            <Code className="w-5 h-5 text-purple-400" />
          </div>
        </motion.div>

        {/* Enhanced Tech Stack with Staggered Animation */}
        <motion.div 
          variants={itemVariants}
          className="mt-10 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
        >
          {techStack.map(({ name, color }, index) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.05 }}
              whileHover={{ 
                scale: 1.1,
                y: -4,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className={`px-4 py-2 text-sm font-medium rounded-full 
                         bg-gradient-to-r ${color} bg-opacity-10 
                         backdrop-blur-md border border-white/10 
                         shadow-lg shadow-purple-500/5
                         hover:shadow-purple-500/20 transition-all
                         cursor-default select-none`}
            >
              {name}
            </motion.span>
          ))}
        </motion.div>

        {/* Enhanced Social Links with Hover Effects */}
        <motion.div 
          variants={itemVariants}
          className="mt-10 flex justify-center gap-6"
        >
          {socialLinks.map(({ Icon, href, label, hoverColor }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ 
                scale: 1.15,
                y: -4,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.95 }}
              className={`group relative p-4 rounded-full 
                         bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
                         hover:bg-white/10 border border-white/10 transition-all duration-300
                         hover:border-white/20 shadow-lg shadow-purple-500/5
                         hover:shadow-purple-500/20`}
            >
              <Icon className={`w-6 h-6 ${hoverColor} transition-colors duration-300`} />
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 
                          text-sm text-gray-400 whitespace-nowrap"
              >
                {label}
              </motion.span>
            </motion.a>
          ))}
        </motion.div>

        {/* Enhanced Contact Button with Gradient Animation */}
        <motion.div variants={itemVariants} className="mt-12">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 px-8 py-3 
                      rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                      text-white font-medium shadow-lg shadow-purple-500/30 
                      hover:shadow-purple-500/40 transition-all
                      overflow-hidden animate-gradient bg-300%"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Contact Me
              <ExternalLink className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 
                                     group-hover:translate-x-0 transition-all duration-300" />
            </span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Enhanced Floating Particles with Better Performance */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{ 
            y: [0, -Math.random() * 400 - 200],
            x: (i % 2 === 0) ? '+=100' : '-=100',
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 2,
          }}
          className="fixed w-1 h-1 rounded-full"
          style={{
            background: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, 0.4)`,
            filter: 'blur(1px)',
          }}
        />
      ))}
    </section>
  );
};

export default Hero;