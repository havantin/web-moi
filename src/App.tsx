/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Mail, 
  Linkedin, 
  Facebook, 
  Globe, 
  Code2, 
  Terminal, 
  User, 
  Briefcase, 
  Cpu, 
  ChevronRight, 
  ExternalLink,
  Menu,
  X,
  GraduationCap,
  Award
} from 'lucide-react';

// Typing effect component
const TypingText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(text.substring(0, index));
      index++;
      if (index > text.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, [text]);

  return <span>{displayText}<span className="animate-pulse">|</span></span>;
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = [
    { name: "C/C++", level: 90, icon: <Terminal className="w-5 h-5" /> },
    { name: "HTML & CSS", level: 85, icon: <Code2 className="w-5 h-5" /> },
    { name: "Java", level: 80, icon: <Cpu className="w-5 h-5" /> },
    { name: "Python", level: 75, icon: <Terminal className="w-5 h-5" /> }
  ];

  const projects = [
    {
      title: "Ứng dụng Quản lý Thư viện",
      desc: "Hệ thống quản lý sách và độc giả sử dụng Java Swing và JDBC kết nối SQL Server.",
      tech: ["Java", "SQL Server", "Swing"],
      link: "#"
    },
    {
      title: "Profile Website",
      desc: "Trang web giới thiệu bản thân hiện đại với hiệu ứng animation mượt mà.",
      tech: ["React", "Tailwind", "Motion"],
      link: "https://web-profile-theta-two.vercel.app/"
    },
    {
      title: "Hệ thống Giải mã Thuật toán",
      desc: "Công cụ trực quan hóa các thuật toán tìm kiếm và sắp xếp cơ bản.",
      tech: ["C++", "Python", "Algorithms"],
      link: "#"
    }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-emerald-500 font-mono font-bold text-xl tracking-tighter"
            >
              Hatin<span className="text-white">.io.vn</span>
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-emerald-400 focus:outline-none"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0d0d0d] border-b border-white/10"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-300 hover:text-emerald-400 block px-3 py-4 text-base font-medium"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2670" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-[#0a0a0a]/80 to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Hà Văn Tín
            </h1>
            <div className="text-emerald-400 font-mono text-xl md:text-2xl mb-8">
              <TypingText text="Final-year IT student | C++ Developer" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#projects"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95"
              >
                Xem dự án
              </a>
              <a 
                href="#contact"
                className="glass hover:bg-white/10 px-8 py-3 rounded-full font-medium transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                Liên hệ <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-emerald-500 font-mono">
              <User className="w-5 h-5" />
              <span className="uppercase tracking-widest text-sm">Giới thiệu bản thân</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Xây dựng giải pháp kỹ thuật hiệu quả</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              Chào bạn! Mình là Tín, hiện đang là sinh viên năm cuối chuyên ngành Công nghệ thông tin tại 
              <span className="text-emerald-400"> Đại học Công nghệ Thông tin và Truyền thông Thái Nguyên (ICTU)</span>.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Với niềm đam mê mãnh liệt với lập trình và giải thuật, mình luôn nỗ lực để trở thành một kĩ sư phần mềm chuyên nghiệp. 
              Mình tập trung vào việc viết code sạch, dễ bảo trì và tối ưu hoá hiệu năng.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="glass p-4 rounded-xl">
                <div className="flex items-center gap-2 text-emerald-400 mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-xs uppercase font-bold tracking-tighter">GPA Hiện tại</span>
                </div>
                <div className="text-2xl font-bold text-white">3.2 / 4.0</div>
              </div>
              <div className="glass p-4 rounded-xl">
                <div className="flex items-center gap-2 text-emerald-400 mb-1">
                  <Award className="w-4 h-4" />
                  <span className="text-xs uppercase font-bold tracking-tighter">Năm sinh</span>
                </div>
                <div className="text-2xl font-bold text-white">2005</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden glass p-2 rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/659116950_122161876766709350_2981570442255074060_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=ASrjhCq5PNUQ7kNvwHymnIt&_nc_oc=AdownBsuzRNIILp9V37Zbn71cKyGWusMsd38xMh3HGm9RGmvU7qAOuspD52JfLsGR2w&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=sDu6Hh5Rm9SnsDxlAbpJag&_nc_ss=7b2a8&oh=00_Af1dw6P2v8ouTfPTFimom5mCm2IDRWvSGIwot7EM59nj7g&oe=69F7F549" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-xl bg-emerald-500/10"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emerald-500/20 blur-3xl -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-emerald-500/10 blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Các kỹ năng chuyên môn</h2>
            <p className="text-gray-400">Các công nghệ mà mình đã nghiên cứu và làm việc trong suốt thời gian học đại học.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl hover:border-emerald-500/50 transition-all group"
              >
                <div className="bg-emerald-500/10 p-3 rounded-lg w-fit text-emerald-500 mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{skill.name}</h3>
                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="h-full bg-emerald-500 rounded-full"
                  />
                </div>
                <span className="text-xs text-gray-500 mt-2 block font-mono">Expertise: {skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-emerald-500 font-mono mb-2">
              <Briefcase className="w-5 h-5" />
              <span className="uppercase tracking-widest text-sm">Sản phẩm tiêu biểu</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Dự án cá nhân</h2>
          </div>
          <p className="text-gray-400 max-w-md">Những dự án mình đã thực hiện để rèn luyện kỹ năng thực tế.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col h-full glass rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-48 bg-emerald-500/5 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-emerald-500/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Code2 className="w-16 h-16 text-emerald-500/20 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm flex-grow">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-1 bg-white/5 rounded-md text-emerald-400 border border-emerald-500/20">
                      {t}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="inline-flex items-center gap-2 text-white hover:text-emerald-400 transition-colors font-medium text-sm"
                >
                  Xem chi tiết <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="glass p-12 rounded-[2rem] text-center max-w-4xl mx-auto border-emerald-500/10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sẵn sàng cho những thử thách mới</h2>
            <p className="text-gray-400 text-lg mb-10">
              Hiện mình đang tìm kiếm cơ hội thực tập và làm việc tại các công ty công nghệ. 
              Nếu bạn quan tâm đến profile của mình, hãy liên hệ ngay nhé!
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              <a href="mailto:dtc235200750@ictu.edu.vn" className="p-6 glass rounded-2xl hover:bg-emerald-500 group transition-all">
                <Mail className="w-6 h-6 mx-auto mb-4 group-hover:text-white text-emerald-500" />
                <span className="block text-sm font-medium group-hover:text-white">Email</span>
              </a>
              <a href="https://www.facebook.com/metaai82923" target="_blank" rel="noreferrer" className="p-6 glass rounded-2xl hover:bg-blue-600 group transition-all">
                <Facebook className="w-6 h-6 mx-auto mb-4 group-hover:text-white text-blue-500" />
                <span className="block text-sm font-medium group-hover:text-white">Facebook</span>
              </a>
              <a href="https://web-profile-theta-two.vercel.app/" target="_blank" rel="noreferrer" className="p-6 glass rounded-2xl hover:bg-white group transition-all">
                <Globe className="w-6 h-6 mx-auto mb-4 group-hover:text-black text-gray-400" />
                <span className="block text-sm font-medium group-hover:text-black">Website</span>
              </a>
            </div>

            <div className="flex justify-center gap-6 pt-6 border-t border-white/5">
              <a href="https://github.com/havantin" target="_blank" rel="noopener noreferrer">
    <Github className="w-6 h-6 text-gray-500 hover:text-white transition-colors cursor-pointer" />
  </a>
              <Linkedin className="w-6 h-6 text-gray-500 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-600 border-t border-white/5 text-sm font-mono tracking-tighter">
        <p>© 2026 Hà Văn Tín. Built with React & Tailwind</p>
      </footer>
    </div>
  );
}
