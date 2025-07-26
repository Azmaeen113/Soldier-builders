import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Eye, Award, Users } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const About = () => {
  const leadership = [
    {
      name: "Maj Toufikul Muneem",
      title: "Chairman",
      image: "/assets/images/members/MAJ MD TOUFIKUL MUNEEM.jpg"
    },
    {
      name: "Brig Gen Md Zobaidur Rahman",
      title: "Managing Director",
      image: "/assets/images/members/BRIG GEN MD ZOBAIDUR RAHMAN.jpg"
    },
    {
      name: "Maj Gen Kamrul H Khan",
      title: "Board Member",
      image: "/assets/images/members/MG KAMRUL H KHAN.jpg"
    },
    {
      name: "Shanara Begum",
      title: "Board Member",
      image: "/assets/images/members/SHANARA BEGUM.jpg"
    },
    {
      name: "Brig Gen Md Habibur Rahman",
      title: "Board Member",
      image: "/assets/images/members/BG MD HABIBUR RAHMAN.jpg"
    },
    {
      name: "Dr Istiaque Anwar",
      title: "Board Member",
      image: "/assets/images/members/DR ISTIAQUE ANWAR.jpg"
    },
    {
      name: "Prof Dr A Shakur Khan",
      title: "Board Member",
      image: "/assets/images/members/PROF A SAKUR KHAN.jpg"
    },
    {
      name: "Lt Col Md Emdadul Haque",
      title: "Board Member",
      image: "/assets/images/members/LT COL MD EMDADUL HAQUE.jpg"
    },
    {
      name: "Prof Dr Begum Nasrin",
      title: "Board Member",
      image: "/assets/images/members/PROF BEGUM NASRIN.jpg"
    },
    {
      name: "Lt Col SM Nazrul Islam",
      title: "Board Member",
      image: "/assets/images/members/LT COL SM NAZRUL ISLAM.jpg"
    },
    {
      name: "Mahfuzur R Chowdhury",
      title: "Board Member",
      image: "/assets/images/members/MAHFUZUR R CHOWDHURY.jpg"
    },
    {
      name: "Ipsha Nazia Adiba",
      title: "Board Member",
      image: "/assets/images/members/IPSHA NAZIA ADIBA.jpg"
    },
    {
      name: "Dr A.R.M Momtajuddin",
      title: "Board Member",
      image: "/assets/images/members/ARM MOMTAJUDDIN.jpg"
    },
    {
      name: "Prof Dr Md Kamruzzaman",
      title: "Board Member",
      image: "/assets/images/members/PROF MD KAMRUZZAMAN.jpg"
    },
    {
      name: "Dr AFM Zohurul Haque",
      title: "Board Member",
      image: "/assets/images/members/DR AFM ZOHURUL HAQUE.jpg"
    },
    {
      name: "Dr Sohel Akhter",
      title: "Board Member",
      image: "/assets/images/members/DR SOHEL AKHTER.jpg"
    },
    {
      name: "Maj Gen Md Mahbubur Rahman",
      title: "Board Member",
      image: "/assets/images/members/MG MD MAHBUBUR RAHMAN.jpg"
    },
    {
      name: "Md Selim Reza",
      title: "Board Member",
      image: "/assets/images/members/MD SELIM REZA.jpg"
    },
    {
      name: "Brig Gen Md Delwar Hussain",
      title: "Board Member",
      image: "/assets/images/members/BG MD DELWAR HOSSAIN.jpg"
    },
    {
      name: "Col Md Mostafizur Rahman",
      title: "Board Member",
      image: "/assets/images/members/COL MDMOSTAFIZUR RAHMAN.jpg"
    },
    {
      name: "Lt Col Maksuda Begum",
      title: "Board Member",
      image: "/assets/images/members/LT COL MAKSUDA BEGUM.jpg"
    },
    {
      name: "Dr Shahana Begum",
      title: "Board Member",
      image: "/assets/images/members/DR. SHAHANA BEGUM.jpg"
    },
    {
      name: "Engr Selima Nargis",
      title: "Board Member",
      image: "/assets/images/members/ENGR. SELIMA NARGIS.jpg"
    },
    {
      name: "Prof Md Amanullah",
      title: "Board Member",
      image: "/assets/images/members/PROF MD AMANULLAH.jpg"
    },
    {
      name: "Afrin Sultana",
      title: "Board Member",
      image: "/assets/images/members/AFRIN SULTANA.jpg"
    },
    {
      name: "Lt Col Md Billal Hossain",
      title: "Board Member",
      image: "/assets/images/members/LT COL MD BILLAL HOSSAIN.jpg"
    },
    {
      name: "Md Mafrul Haque",
      title: "Board Member",
      image: "/assets/images/members/MD MAFRUL HAQUE.jpg"
    },
    {
      name: "Md Zakir H Khan",
      title: "Board Member",
      image: "/assets/images/members/MD ZAKIR H KHAN.jpg"
    },
    {
      name: "Mosammat Halima Begum",
      title: "Board Member",
      image: "/assets/images/members/MOSAMMAT HALIMA BEGUM.jpg"
    },
    {
      name: "Most Sayeeda Akhter",
      title: "Board Member",
      image: "/assets/images/members/MOST. SAYEEDA AKHTER.jpg"
    },
    {
      name: "Dr Mosammat Dipa",
      title: "Board Member",
      image: "/assets/images/members/DR MOSAMMAT DIPA.jpg"
    },
    {
      name: "Fihor Esrar Eham",
      title: "Board Member",
      image: "/assets/images/members/FIHOR ESRAR EHAM.jpg"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Military Precision",
      description: "We bring the discipline and attention to detail from military service to every project we undertake."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Uncompromising quality in every aspect of our work, from design to delivery."
    },
    {
      icon: Users,
      title: "Trust",
      description: "Building long-term relationships with our clients based on transparency and reliability."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Embracing cutting-edge technology and modern design principles in all our developments."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800" style={{ marginTop: '64px' }}>
        <div className="absolute inset-0">
          <img
            src="/assets/images/projects/haruns-nest/IMG-20250517-WA0013.jpg"
            alt="About Us Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo Section */}
          <div className="flex justify-center mb-8">
            <img
              src="/assets/images/SB_Logo_white_background-removebg-preview copy.png"
              alt="Soldiers Builders Logo"
              className="w-full max-w-4xl h-auto object-contain"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{
              WebkitTextStroke: '0.8px #000',
              textShadow: '0 1px 2px rgba(0,0,0,0.5)'
            }}>
              About <span className="text-yellow-400">Soldiers Builders</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Military precision meets luxury living. We build your dreams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Inspirational Quotes */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Words That Inspire Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-900 p-6 rounded-xl text-center"
            >
              <p className="text-lg text-gray-300 italic mb-4">
                "The best investment on Earth is earth."
              </p>
              <p className="text-yellow-400 font-semibold">— Louis Glickman</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900 p-6 rounded-xl text-center"
            >
              <p className="text-lg text-gray-300 italic mb-4">
                "Your home should tell the story of who you are"
              </p>
              <p className="text-yellow-400 font-semibold">— Nate Berkus</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-900 p-6 rounded-xl text-center"
            >
              <p className="text-lg text-gray-300 italic mb-4">
                "To be happy at home is the ultimate result of all ambition."
              </p>
              <p className="text-yellow-400 font-semibold">— Samuel Johnson</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-900 p-6 rounded-xl text-center"
            >
              <p className="text-lg text-gray-300 italic mb-4">
                "He is the happiest, be he king or peasant, who finds peace in his home."
              </p>
              <p className="text-yellow-400 font-semibold">— Johann Wolfgang von Goethe</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <div className="bg-gray-900 p-6 rounded-xl max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 italic mb-4">
                "Where we love is home; home that our feet may leave, but not our hearts."
              </p>
              <p className="text-yellow-400 font-semibold">— Oliver Wendell Holmes Sr.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  At Soldiers Builders, we build your dreams. Synonymous with
                  refined living, architectural excellence, and uncompromising quality, Soldiers Builders
                  stands as a testament to the perfect fusion of military discipline and civilian innovation.
                  With a foundation built on trust, integrity, innovation, and meticulous craftsmanship, Soldiers Builders is a symbol of
                  excellence in the real estate industry.
                </p>
                <p>
                  Our name represents our discipline, our dedication to detail, and our relentless pursuit 
                  of excellence — values reminiscent of elite forces, now translated into the art of construction.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury Building"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 p-8 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <div className="bg-yellow-400 p-3 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-gray-900" />
                </div>
                <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To deliver exceptional real estate experiences by combining visionary design, 
                high-end construction standards, and personalized service—ensuring every property 
                is not only a home but a statement. We are committed to exceeding expectations, 
                transforming dreams into reality, and creating spaces that resonate with elegance, 
                functionality, and enduring value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-900 p-8 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <div className="bg-yellow-400 p-3 rounded-lg mr-4">
                  <Eye className="h-8 w-8 text-gray-900" />
                </div>
                <h3 className="text-3xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Shaping Tomorrow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide every decision and shape every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-all duration-300"
              >
                <div className="bg-yellow-400 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Leadership Messages
            </h2>
          </motion.div>

          <div className="space-y-16">
            {/* Chairman's Message */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 p-8 rounded-xl"
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <OptimizedImage
                    src="/assets/images/members/MAJ MD TOUFIKUL MUNEEM.jpg"
                    alt="Major Toufikul Muneem"
                    className="w-32 h-32 rounded-full"
                    width={128}
                    height={128}
                    quality={90} // Higher quality for leadership portraits
                    priority={true}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Chairman's Message</h3>
                  <h4 className="text-lg text-yellow-400 mb-4">Major Toufikul Muneem</h4>
                  <p className="text-gray-300 leading-relaxed">
                    "At Soldiers Builders, we do more than shape skylines, we shape futures. As someone who
                    has dedicated their life to serving the nation, I understand the importance of creating
                    spaces that not only provide shelter but also foster community, build legacy, and a sense of belonging. At Soldiers Builders, luxury is not only in how a space
                    looks, but in how it makes you feel."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Managing Director's Message */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 p-8 rounded-xl"
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0 md:order-2">
                  <OptimizedImage
                    src="/assets/images/members/BRIG GEN MD ZOBAIDUR RAHMAN.jpg"
                    alt="Brigadier General Md Zobaidur Rahman"
                    className="w-32 h-32 rounded-full"
                    width={128}
                    height={128}
                    quality={90} // Higher quality for leadership portraits
                    priority={true}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Managing Director's Message</h3>
                  <h4 className="text-lg text-yellow-400 mb-4">Brigadier General Md Zobaidur Rahman</h4>
                  <p className="text-gray-300 leading-relaxed">
                    At Soldiers Builders, we bring a unique perspective - shaped by my years in uniform, where
                    precision, discipline, and attention to detail were not just values, but necessities.
                  </p>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    We serve individuals, families, and businesses who want more than a property. They want
                    confidence in the ground beneath their feet. They want a team that listens, understands,
                    and delivers. We consider it an honor to be trusted with that responsibility.
                  </p>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    We do not simply develop land - we cultivate futures. We understand that every family,
                    every investor, and every community that turns to us is placing their hopes into our hands.
                    And we honor that trust with a devotion to excellence that runs deeper than blueprints and budgets.
                  </p>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    Here, luxury is not just in the finish - it is in the philosophy. In the way we treat people.
                    In the legacy we leave behind. In every structure we build, there is strength. In every detail,
                    a promise. And behind every project - a team that leads with purpose."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Meet the distinguished leaders who guide Soldiers Builders with military precision and vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-all duration-300"
              >
                <OptimizedImage
                  src={leader.image}
                  alt={leader.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  width={96}
                  height={96}
                  quality={85} // Good quality for member portraits
                  priority={index < 8} // Load first 8 leadership images with priority
                />
                <h3 className="text-lg font-semibold text-white mb-2">{leader.name}</h3>
                <p className="text-yellow-400">{leader.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              "The best investment on Earth is earth."
            </h2>
            <p className="text-xl text-gray-800">
              — Louis Glickman
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;