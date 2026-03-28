'use client';

import portfolioData from '../data/portfolio.json'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-effect p-8">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {portfolioData.about}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {portfolioData.experience}+
                </div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-lg font-semibold text-white mb-2">Current Role</div>
                <div className="text-purple-400">{portfolioData.currentRole}</div>
              </div>
            </div>
          </div>
          
          <div className="glass-effect p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Key Highlights</h3>
            <ul className="space-y-4">
              {portfolioData.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}