import React, { useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import FloatingShape from './components/FloatingShape';
import Loader from './components/Loader';

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative bg-black text-white min-h-screen">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.2} />
            <directionalLight position={[10, 10, 5]} intensity={0.5} />
            <FloatingShape position={[0, 0, -2]} rotation={[0, 0, 0]} scale={2} />
            <Environment preset="city" />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              enableRotate={false}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10" ref={scrollRef}>
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-white/70">© 2025 Jyothiraditya Payavula. All rights reserved.</p>
              </div>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a 
                  href="mailto:adityanaidu1002@gmail.com" 
                  whileHover={{ y: -3 }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Mail size={20} />
                </motion.a>
                <motion.a 
                  href="/resume.pdf" 
                  target="_blank"
                  whileHover={{ y: -3 }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <FileText size={20} />
                </motion.a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;