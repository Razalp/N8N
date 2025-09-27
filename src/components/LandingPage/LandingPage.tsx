import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiCheckCircle, FiTarget, FiTrendingUp, FiDollarSign, FiAward, FiBookOpen, FiCode, FiCpu, FiBriefcase, FiLayers, FiGitMerge, FiBox, FiCloud, FiShield, FiStar, FiUsers, FiVideo } from "react-icons/fi";

const LandingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <header className="text-center py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          >
            AI Automation & AI Agents Mastery Course
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto"
          >
            Transform your career with the most in-demand skill of 2024. Master AI automation, build intelligent agents, and unlock unlimited freelancing opportunities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <button className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-neutral-200 transition-colors duration-300">
              Enroll Now <FiArrowRight className="inline-block ml-2" />
            </button>
          </motion.div>
        </header>

        {/* Why AI Automation Section */}
        <section className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Why AI Automation is Your Next Big Opportunity</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FiTrendingUp className="w-8 h-8 text-purple-400" />}
              title="Market Explosion"
              description="The AI automation market is growing 25% yearly. Businesses desperately need experts."
            />
            <FeatureCard
              icon={<FiDollarSign className="w-8 h-8 text-green-400" />}
              title="High-Value Skills"
              description="Automation specialists earn $75-150/hour. Combine technical know-how with business impact."
            />
            <FeatureCard
              icon={<FiAward className="w-8 h-8 text-blue-400" />}
              title="Future-Proof Career"
              description="While AI replaces jobs, it creates massive demand for automation builders."
            />
          </div>
        </section>

        {/* Course Roadmap Section */}
        <section className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Course Roadmap: Your Journey to Automation Mastery</h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-neutral-700"></div>
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
        </section>

        {/* n8n Section */}
        <section className="py-20 bg-neutral-900 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="px-8">
              <h3 className="text-3xl font-bold mb-4">Getting Started: Your First Steps into n8n</h3>
              <p className="text-neutral-300 mb-6">The world's most powerful open-source automation platform. n8n gives you complete control over your workflows with visual, code-free building plus unlimited customization options.</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2"><FiLayers className="text-purple-400"/> 400+ pre-built integrations</div>
                <div className="flex items-center gap-2"><FiCloud className="text-blue-400"/> Cloud or self-hosted</div>
                <div className="flex items-center gap-2"><FiGitMerge className="text-green-400"/> JavaScript customization</div>
                <div className="flex items-center gap-2"><FiShield className="text-red-400"/> Enterprise-grade security</div>
              </div>
            </div>
            <div className="px-8">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpTdeT-22FzH2a4a2T745_9B1GgCgY2P6W3Q&s" alt="n8n" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </section>

        {/* Technical Foundation Section */}
        <section className="py-20">
            <h2 className="text-4xl font-bold text-center mb-12">Master the Technical Foundation</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <TechCard title="Workflow Architecture" description="Understand nodes, triggers, and actions. Learn data structures and JSON handling." />
                <TechCard title="JavaScript Integration" description="Write custom functions for complex logic, loops, and data mapping." />
                <TechCard title="Self-Hosting Mastery" description="Deploy on a VPS or Docker for maximum control, security, and scalability." />
            </div>
        </section>

        {/* n8n vs Make Section */}
        <section className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Platform Battle: n8n vs Make</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
              <div className="bg-neutral-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-center">n8n Advantages</h3>
                <ul className="space-y-2 text-neutral-300">
                  <li className="flex items-center gap-2"><FiCheckCircle className="text-green-500" /> Open source & self-hostable</li>
                  <li className="flex items-center gap-2"><FiCheckCircle className="text-green-500" /> Unlimited operations (self-hosted)</li>
                  <li className="flex items-center gap-2"><FiCheckCircle className="text-green-500" /> Full JavaScript customization</li>
                  <li className="flex items-center gap-2"><FiCheckCircle className="text-green-500" /> Enterprise security control</li>
                </ul>
              </div>
              <div className="bg-neutral-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-center">Make Advantages</h3>
                <ul className="space-y-2 text-neutral-300">
                  <li className="flex items-center gap-2"><FiCheckCircle className="text-green-500" /> Larger app ecosystem</li>
                  <li className="flex items-center gap-2"><FiCheckCircle className="text-green-500" /> Simpler visual interface</li>
                  <li className="flex items-center gap-2"><FiCheckCircle className="text-green-500" /> Built-in templates library</li>
                  <li className="flex items-center gap-2"><FiCheckCircle className="text-green-500" /> Faster initial setup</li>
                </ul>
              </div>
            </div>
          </div>
            <p className="text-center mt-8 text-neutral-400"><strong>Bottom line:</strong> Choose n8n for control and scalability, Make for quick starts and extensive integrations.</p>
        </section>

        {/* AI Agents Section */}
        <section className="py-20">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">Enter the Age of AI Agents</h2>
                <p className="max-w-3xl mx-auto text-neutral-300 mb-12">AI agents are the next evolution of automation: intelligent systems that can reason, plan, and execute complex tasks autonomously.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard icon={<FiCpu className="w-8 h-8 text-purple-400"/>} title="Autonomous Decision Making" description="Agents analyze situations and take actions without human intervention." />
                <FeatureCard icon={<FiGitMerge className="w-8 h-8 text-green-400"/>} title="Multi-Tool Integration" description="Connect agents to APIs, databases, and external apps for complex workflows." />
                <FeatureCard icon={<FiBookOpen className="w-8 h-8 text-blue-400"/>} title="Context & Memory" description="Advanced agents remember past interactions for sophisticated reasoning." />
            </div>
        </section>

        {/* Real-World Automation Section */}
        <section className="py-20 bg-neutral-900 rounded-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">Build Real-World Automation Systems</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
            <UseCaseCard icon={<FiUsers className="w-10 h-10 mx-auto mb-4 text-blue-400"/>} title="Social Media Automation" description="Automate LinkedIn outreach, Twitter engagement, and content scheduling." />
            <UseCaseCard icon={<FiTarget className="w-10 h-10 mx-auto mb-4 text-red-400"/>} title="Sales & CRM Workflows" description="Create lead scoring systems, automated follow-ups, and deal progression triggers." />
            <UseCaseCard icon={<FiVideo className="w-10 h-10 mx-auto mb-4 text-green-400"/>} title="AI-Powered Content Generation" description="Build systems that research topics, generate content, and publish across platforms." />
            <UseCaseCard icon={<FiBox className="w-10 h-10 mx-auto mb-4 text-purple-400"/>} title="Web Scraping & Enrichment" description="Extract data from websites, enrich it, and feed it into your business systems." />
          </div>
        </section>

        {/* Monetization Section */}
        <section className="py-20">
            <h2 className="text-4xl font-bold text-center mb-12">Turn Your Skills into Serious Income</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-2xl font-bold mb-4">Positioning Strategy</h3>
                    <p className="text-neutral-300 mb-4">Position yourself as an AI automation specialist. Focus on business outcomes: time savings, cost reduction, and revenue growth.</p>
                    <ul className="space-y-2 text-neutral-300">
                        <li className="flex items-center gap-2"><FiCheckCircle className="text-green-500" /> Build a portfolio with measurable results.</li>
                        <li className="flex items-center gap-2"><FiCheckCircle className="text-green-500" /> Create case studies showing ROI.</li>
                        <li className="flex items-center gap-2"><FiCheckCircle className="text-green-500" /> Develop signature automation packages.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4">Pricing & Scaling</h3>
                    <p className="text-neutral-300 mb-4">Start with project-based pricing, then move to retainer models. Advanced students can charge $2,000-$10,000 per project.</p>
                    <div className="bg-neutral-900 p-4 rounded-lg">
                        <p><strong>Discovery calls:</strong> $500 - $1,000</p>
                        <p><strong>Simple workflows:</strong> $1,000 - $3,000</p>
                        <p><strong>Complex AI agents:</strong> $5,000 - $15,000</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Limited Time Offer Section */}
        <section className="py-20">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center">
                <h2 className="text-4xl font-bold mb-4">Limited-Time Offer</h2>
                <div className="grid md:grid-cols-3 gap-8 my-8 text-left">
                    <div className="bg-white/10 p-6 rounded-lg">
                        <h4 className="font-bold text-xl mb-2">Complete Curriculum</h4>
                        <p className="text-sm">11 comprehensive modules covering everything from n8n basics to advanced AI agent development.</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-lg">
                        <h4 className="font-bold text-xl mb-2">Hands-On Projects</h4>
                        <p className="text-sm">Build real automation systems for your portfolio. Get practical experience with actual business use cases.</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-lg">
                        <h4 className="font-bold text-xl mb-2">Lifetime Access</h4>
                        <p className="text-sm">Keep up with the rapidly evolving AI landscape with course updates and community access.</p>
                    </div>
                </div>
                <p className="text-5xl font-bold my-4">$3,999</p>
                <p className="text-lg mb-8">Investment in your automation mastery. Most students recover this cost from their first 2-3 client projects.</p>
                <button className="bg-white text-black font-semibold py-4 px-10 rounded-full text-lg hover:bg-neutral-200 transition-colors duration-300">
                    Start Building Your AI-Powered Future Today
                </button>
            </div>
        </section>
      </div>
    </div>
  );
};

// Helper Components
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-neutral-900 p-6 rounded-lg text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-neutral-400">{description}</p>
  </div>
);

const RoadmapItem = ({ icon, title, description, align }: { icon: React.ReactNode, title: string, description: string, align: 'left' | 'right' }) => (
    <div className={twMerge("relative mb-12 md:flex items-center", align === 'right' ? 'md:flex-row-reverse' : '')}>
        <div className="md:w-1/2">
            <div className={twMerge("bg-neutral-900 p-6 rounded-lg", align === 'right' ? 'md:ml-auto' : 'md:mr-auto')}>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-neutral-400">{description}</p>
            </div>
        </div>
        <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-12 h-12 bg-black rounded-full items-center justify-center border-2 border-purple-500">
            {icon}
        </div>
    </div>
);

const TechCard = ({ title, description }: { title: string, description: string }) => (
    <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800 hover:border-purple-500 transition-colors duration-300">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-neutral-400">{description}</p>
    </div>
);

const UseCaseCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="text-center">
        {icon}
        <h4 className="font-bold text-lg mb-2">{title}</h4>
        <p className="text-sm text-neutral-400">{description}</p>
    </div>
);


export default LandingPage;