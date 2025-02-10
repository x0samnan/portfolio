import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Heart, Star } from "lucide-react";

const Footer = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <motion.footer 
      className="relative bg-gradient-to-b from-black to-gray-900 border-t border-white/10 py-8 md:py-12 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 md:px-6 relative z-10"
      >
        {/* Social Links */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-8"
        >
          <a 
            href="https://github.com/x0samnan" 
            target="_blank" 
            className="group flex items-center gap-2 w-full sm:w-auto px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 
                     hover:border-blue-500/30 transition-all duration-300"
          >
            <Github className="w-5 h-5 text-blue-400" />
            <span className="text-gray-300 group-hover:text-white transition-colors">GitHub</span>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          </a>
          <a 
            href="https://linkedin.com/in/samnansiddique" 
            target="_blank" 
            className="group flex items-center gap-2 w-full sm:w-auto px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 
                     hover:border-purple-500/30 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5 text-purple-400" />
            <span className="text-gray-300 group-hover:text-white transition-colors">LinkedIn</span>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-400 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          </a>
          <a 
            href="mailto:samnansiddique@yandex.com" 
            className="group flex items-center gap-2 w-full sm:w-auto px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 
                     hover:border-pink-500/30 transition-all duration-300"
          >
            <Mail className="w-5 h-5 text-pink-400" />
            <span className="text-gray-300 group-hover:text-white transition-colors">Email</span>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-pink-400 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          </a>
        </motion.div>

        {/* Star Repo CTA */}
        <motion.div 
          variants={itemVariants}
          className="mb-6 flex justify-center"
        >
          <motion.a
            href="https://github.com/x0samnan/portfolio"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 
                      rounded-full bg-gradient-to-r from-amber-500/10 to-yellow-500/10 
                      border border-yellow-500/20 hover:border-yellow-500/40
                      transition-all duration-300"
          >
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-gray-300 group-hover:text-yellow-400 transition-colors">
              Star this repo for support
            </span>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="absolute -top-1 -right-1"
            >
              <Star className="w-3 h-3 text-yellow-400 animate-pulse" />
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Made with Love */}
        <motion.div variants={itemVariants} className="text-center mb-4">
          <p className="text-gray-300 text-sm flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-400 animate-pulse" /> by Samnan
          </p>
        </motion.div>

        {/* Copyright */}
        <motion.div variants={itemVariants} className="text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Samnan Siddique. All Rights Reserved.
          </p>
        </motion.div>
      </motion.div>

      {/* Enhanced Decorative Elements */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
          className="absolute w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hidden md:block"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: 'blur(1px)',
          }}
        />
      ))}
    </motion.footer>
  );
};

export default Footer;
