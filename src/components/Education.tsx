import { motion } from 'framer-motion';
import { BookOpen, MapPin, Award, Calendar } from 'lucide-react';

const Education = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      rotate: -5
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const educations = [
    {
      institution: "IU University, Berlin",
      degree: "Bachelor's Transfer Program",
      period: "2024 - Present",
      location: "Berlin, Germany",
      gpa: "In Progress",
      highlights: [
        "International Academic Transfer",
        "Continuing Advanced Studies"
      ]
    },
    {
      institution: "Presidency University, Bangalore",
      degree: "Bachelor's Initial Program",
      period: "2021 - 2024",
      location: "Bangalore, India",
      gpa: "8.1/10.0",
      highlights: [
        "Completed Initial Coursework",
        "Academic Credit Transfer Preparation"
      ]
    },
    {
      institution: "KV Kathmandu",
      degree: "High School Diploma",
      period: "2019 - 2021",
      location: "Kathmandu, Nepal",
      gpa: "3.36/4.0",
      highlights: [
        "Phsyics, Chemistry, Maths and Computer Science",
        "Secondary Education Completion"
      ]
    }
  ];

  return (
    <section id='academics' className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen py-16 px-4 md:px-8">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto space-y-8"
      >
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6 }
            }
          }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Academic Journey
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A chronicle of learning, growth, and academic exploration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {educations.map((edu) => (
            <motion.div 
              key={edu.institution}
              variants={cardVariants}
              className="bg-gray-800/60 border border-gray-700/50 rounded-2xl 
                         overflow-hidden transform transition-all 
                         hover:scale-[1.03] hover:shadow-2xl hover:border-cyan-500/30"
            >
              <div className="p-6 relative">
                <div className="absolute top-0 right-0 m-4 opacity-50">
                  <BookOpen className="w-12 h-12 text-cyan-500/30" />
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <div className="flex items-center text-gray-400 space-x-3 text-sm">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      <span>{edu.location}</span>
                    </div>
                    <span className="text-gray-600">•</span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4 text-green-400" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Award className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="text-gray-300">GPA: {edu.gpa}</span>
                  </div>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    {edu.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 border-t border-gray-700/50 pt-3">
                  <span className="text-sm text-gray-500 italic">
                    {edu.institution}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
