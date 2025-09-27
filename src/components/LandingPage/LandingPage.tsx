"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import {
  FiArrowRight,
  FiCheckCircle,
  FiTarget,
  FiTrendingUp,
  FiDollarSign,
  FiAward,
  FiBookOpen,
  FiCode,
  FiCpu,
  FiBriefcase,
  FiLayers,
  FiGitMerge,
  FiBox,
  FiCloud,
  FiShield,
  FiUsers,
  FiVideo,
} from "react-icons/fi"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

const LandingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-hidden relative">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with proper spacing from header */}
        <motion.section className="text-center pt-32 pb-16" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
            AI Automation & AI Agents{" "}
            <motion.span
              className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{
                textShadow: ["0 0 0px #3b82f6", "0 0 30px #3b82f6", "0 0 0px #3b82f6"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Mastery Course
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your career with the most in-demand skill of 2024. Master AI automation, build intelligent agents,
            and unlock unlimited freelancing opportunities.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-10 py-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 text-lg border-0"
              >
                Enroll Now <FiArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Why AI Automation Section */}
        <motion.section
          className="py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
            Why AI Automation is Your Next Big Opportunity
          </motion.h2>
          <motion.div className="grid md:grid-cols-3 gap-8" variants={containerVariants}>
            <FeatureCard
              icon={<FiTrendingUp className="w-8 h-8 text-blue-400" />}
              title="Market Explosion"
              description="The AI automation market is growing 25% yearly. Businesses desperately need experts."
            />
            <FeatureCard
              icon={<FiDollarSign className="w-8 h-8 text-blue-400" />}
              title="High-Value Skills"
              description="Automation specialists earn $75-150/hour. Combine technical know-how with business impact."
            />
            <FeatureCard
              icon={<FiAward className="w-8 h-8 text-blue-400" />}
              title="Future-Proof Career"
              description="While AI replaces jobs, it creates massive demand for automation builders."
            />
          </motion.div>
        </motion.section>

        {/* Course Roadmap Section */}
        <motion.section
          className="py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
            Course Roadmap: Your Journey to Automation Mastery
          </motion.h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500"></div>
            <RoadmapItem
              icon={<FiBookOpen />}
              title="Foundation Phase"
              description="Master automation mindset, n8n platform basics, and core workflow concepts."
              align="left"
            />
            <RoadmapItem
              icon={<FiCode />}
              title="Technical Mastery"
              description="Advanced JavaScript functions, self-hosting setup, and platform comparisons."
              align="right"
            />
            <RoadmapItem
              icon={<FiCpu />}
              title="AI Agent Integration"
              description="Connect AI models to workflows and build intelligent, autonomous business processes."
              align="left"
            />
            <RoadmapItem
              icon={<FiBriefcase />}
              title="Business & Monetization"
              description="Transform skills into income through freelancing strategies and client acquisition."
              align="right"
            />
          </div>
        </motion.section>

        {/* n8n Section */}
        <motion.section
          className="py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
            <CardContent className="p-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Getting Started: Your First Steps into n8n</h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    The world's most powerful open-source automation platform. n8n gives you complete control over your
                    workflows with visual, code-free building plus unlimited customization options.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      className="flex items-center gap-3 text-gray-300"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FiLayers className="text-blue-400 h-5 w-5" /> 400+ pre-built integrations
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3 text-gray-300"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FiCloud className="text-blue-400 h-5 w-5" /> Cloud or self-hosted
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3 text-gray-300"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FiGitMerge className="text-blue-400 h-5 w-5" /> JavaScript customization
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3 text-gray-300"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FiShield className="text-blue-400 h-5 w-5" /> Enterprise-grade security
                    </motion.div>
                  </div>
                </motion.div>
                <motion.div variants={itemVariants} className="flex justify-center">
                  <motion.div
                    className="w-80 h-60 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl flex items-center justify-center border border-gray-700"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-6xl text-blue-400">n8n</div>
                  </motion.div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Technical Foundation Section */}
        <motion.section
          className="py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
            Master the Technical Foundation
          </motion.h2>
          <motion.div className="grid md:grid-cols-3 gap-8" variants={containerVariants}>
            <TechCard
              title="Workflow Architecture"
              description="Understand nodes, triggers, and actions. Learn data structures and JSON handling."
            />
            <TechCard
              title="JavaScript Integration"
              description="Write custom functions for complex logic, loops, and data mapping."
            />
            <TechCard
              title="Self-Hosting Mastery"
              description="Deploy on a VPS or Docker for maximum control, security, and scalability."
            />
          </motion.div>
        </motion.section>

        {/* Platform Comparison Section */}
        <motion.section
          className="py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
            Platform Battle: n8n vs Make
          </motion.h2>
          <div className="flex justify-center">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full" variants={containerVariants}>
              <motion.div variants={itemVariants}>
                <Card className="h-full border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-6 text-center text-white">n8n Advantages</h3>
                    <ul className="space-y-3 text-gray-300">
                      <motion.li className="flex items-center gap-3" whileHover={{ x: 5 }}>
                        <FiCheckCircle className="text-blue-400 h-5 w-5" /> Open source & self-hostable
                      </motion.li>
                      <motion.li className="flex items-center gap-3" whileHover={{ x: 5 }}>
                        <FiCheckCircle className="text-blue-400 h-5 w-5" /> Unlimited operations (self-hosted)
                      </motion.li>
                      <motion.li className="flex items-center gap-3" whileHover={{ x: 5 }}>
                        <FiCheckCircle className="text-blue-400 h-5 w-5" /> Full JavaScript customization
                      </motion.li>
                      <motion.li className="flex items-center gap-3" whileHover={{ x: 5 }}>
                        <FiCheckCircle className="text-blue-400 h-5 w-5" /> Enterprise security control
                      </motion.li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="h-full border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-6 text-center text-white">Make Advantages</h3>
                    <ul className="space-y-3 text-gray-300">
                      <motion.li className="flex items-center gap-3" whileHover={{ x: 5 }}>
                        <FiCheckCircle className="text-blue-400 h-5 w-5" /> Larger app ecosystem
                      </motion.li>
                      <motion.li className="flex items-center gap-3" whileHover={{ x: 5 }}>
                        <FiCheckCircle className="text-blue-400 h-5 w-5" /> Simpler visual interface
                      </motion.li>
                      <motion.li className="flex items-center gap-3" whileHover={{ x: 5 }}>
                        <FiCheckCircle className="text-blue-400 h-5 w-5" /> Built-in templates library
                      </motion.li>
                      <motion.li className="flex items-center gap-3" whileHover={{ x: 5 }}>
                        <FiCheckCircle className="text-blue-400 h-5 w-5" /> Faster initial setup
                      </motion.li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
          <motion.p variants={itemVariants} className="text-center mt-8 text-lg text-gray-300">
            <strong className="text-white">Bottom line:</strong> Choose n8n for control and scalability, Make for quick starts and extensive
            integrations.
          </motion.p>
        </motion.section>

        {/* AI Agents Section */}
        <motion.section
          className="py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Enter the Age of AI Agents
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="max-w-3xl mx-auto text-gray-300 mb-12 text-lg leading-relaxed"
            >
              AI agents are the next evolution of automation: intelligent systems that can reason, plan, and execute
              complex tasks autonomously.
            </motion.p>
          </div>
          <motion.div className="grid md:grid-cols-3 gap-8" variants={containerVariants}>
            <FeatureCard
              icon={<FiCpu className="w-8 h-8 text-blue-400" />}
              title="Autonomous Decision Making"
              description="Agents analyze situations and take actions without human intervention."
            />
            <FeatureCard
              icon={<FiGitMerge className="w-8 h-8 text-blue-400" />}
              title="Multi-Tool Integration"
              description="Connect agents to APIs, databases, and external apps for complex workflows."
            />
            <FeatureCard
              icon={<FiBookOpen className="w-8 h-8 text-blue-400" />}
              title="Context & Memory"
              description="Advanced agents remember past interactions for sophisticated reasoning."
            />
          </motion.div>
        </motion.section>

        {/* Real-World Automation Section */}
        <motion.section
          className="py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
            <CardContent className="p-10">
              <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
                Build Real-World Automation Systems
              </motion.h2>
              <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants}>
                <UseCaseCard
                  icon={<FiUsers className="w-10 h-10 mx-auto mb-4 text-blue-400" />}
                  title="Social Media Automation"
                  description="Automate LinkedIn outreach, Twitter engagement, and content scheduling."
                />
                <UseCaseCard
                  icon={<FiTarget className="w-10 h-10 mx-auto mb-4 text-blue-400" />}
                  title="Sales & CRM Workflows"
                  description="Create lead scoring systems, automated follow-ups, and deal progression triggers."
                />
                <UseCaseCard
                  icon={<FiVideo className="w-10 h-10 mx-auto mb-4 text-blue-400" />}
                  title="AI-Powered Content Generation"
                  description="Build systems that research topics, generate content, and publish across platforms."
                />
                <UseCaseCard
                  icon={<FiBox className="w-10 h-10 mx-auto mb-4 text-blue-400" />}
                  title="Web Scraping & Enrichment"
                  description="Extract data from websites, enrich it, and feed it into your business systems."
                />
              </motion.div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Monetization Section */}
        <motion.section
          className="py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
            Turn Your Skills into Serious Income
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div variants={itemVariants}>
              <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-white">Positioning Strategy</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Position yourself as an AI automation specialist. Focus on business outcomes: time savings, cost
                    reduction, and revenue growth.
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <motion.li className="flex items-center gap-3" whileHover={{ x: 5 }}>
                      <FiCheckCircle className="text-blue-400 h-5 w-5" /> Build a portfolio with measurable results.
                    </motion.li>
                    <motion.li className="flex items-center gap-3" whileHover={{ x: 5 }}>
                      <FiCheckCircle className="text-blue-400 h-5 w-5" /> Create case studies showing ROI.
                    </motion.li>
                    <motion.li className="flex items-center gap-3" whileHover={{ x: 5 }}>
                      <FiCheckCircle className="text-blue-400 h-5 w-5" /> Develop signature automation packages.
                    </motion.li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-white">Pricing & Scaling</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Start with project-based pricing, then move to retainer models. Advanced students can charge
                    $2,000-$10,000 per project.
                  </p>
                  <Card className="bg-gray-800/50 border border-gray-700">
                    <CardContent className="p-6 space-y-2">
                      <p className="text-gray-300">
                        <strong className="text-white">Discovery calls:</strong> $500 - $1,000
                      </p>
                      <p className="text-gray-300">
                        <strong className="text-white">Simple workflows:</strong> $1,000 - $3,000
                      </p>
                      <p className="text-gray-300">
                        <strong className="text-white">Complex AI agents:</strong> $5,000 - $15,000
                      </p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Limited Time Offer Section */}
        <motion.section
          className="py-20 pb-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 rounded-3xl p-12 text-center text-white relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <motion.h2
                className="text-3xl md:text-5xl font-bold mb-6"
                animate={{
                  textShadow: ["0 0 0px #ffffff", "0 0 30px #ffffff", "0 0 0px #ffffff"],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Limited-Time Offer
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-8 my-10">
                <motion.div
                  className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="font-bold text-lg mb-3">Complete Curriculum</h4>
                  <p className="text-sm opacity-90">
                    11 comprehensive modules covering everything from n8n basics to advanced AI agent development.
                  </p>
                </motion.div>
                <motion.div
                  className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="font-bold text-lg mb-3">Hands-On Projects</h4>
                  <p className="text-sm opacity-90">
                    Build real automation systems for your portfolio. Get practical experience with actual business use
                    cases.
                  </p>
                </motion.div>
                <motion.div
                  className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="font-bold text-lg mb-3">Lifetime Access</h4>
                  <p className="text-sm opacity-90">
                    Keep up with the rapidly evolving AI landscape with course updates and community access.
                  </p>
                </motion.div>
              </div>
              <motion.p className="text-4xl md:text-6xl font-bold my-6" variants={pulseVariants} animate="animate">
                $3,999
              </motion.p>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Investment in your automation mastery. Most students recover this cost from their first 2-3 client
                projects.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-10 py-4 rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 text-lg border-0"
                >
                  Start Building Your AI-Powered Future Today
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Card className="h-full hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
      <CardContent className="p-8 text-center">
        <motion.div className="flex justify-center mb-4" variants={floatingVariants} animate="animate">
          {icon}
        </motion.div>
        <h3 className="text-lg font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
)

const RoadmapItem = ({
  icon,
  title,
  description,
  align,
}: { icon: React.ReactNode; title: string; description: string; align: "left" | "right" }) => (
  <motion.div
    className={`relative mb-12 md:flex items-center ${align === "right" ? "md:flex-row-reverse" : ""}`}
    variants={itemVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
  >
    <div className="md:w-1/2">
      <motion.div
        className={`${align === "right" ? "md:ml-auto" : "md:mr-auto"}`}
        whileHover={{ scale: 1.02, x: align === "right" ? -8 : 8 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-3 text-white">{title}</h3>
            <p className="text-gray-300 leading-relaxed">{description}</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
    <motion.div
      className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full items-center justify-center text-white shadow-2xl border-2 border-white/20"
      whileHover={{ scale: 1.2, rotate: 360 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {icon}
    </motion.div>
  </motion.div>
)

const TechCard = ({ title, description }: { title: string; description: string }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Card className="h-full border border-gray-800 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm">
      <CardContent className="p-8">
        <h3 className="text-lg font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
)

const UseCaseCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <motion.div
    className="text-center"
    variants={itemVariants}
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <motion.div variants={floatingVariants} animate="animate">
      {icon}
    </motion.div>
    <h4 className="font-bold text-lg mb-3 text-white">{title}</h4>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </motion.div>
)

export default LandingPage