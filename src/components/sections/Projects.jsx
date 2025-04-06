import React from 'react';
import ProjectCard from '../ProjectCard';
import SkillIconGroup from '../SkillIconGroup';
import Background from '../AnimatedBackground';
import { 
    SiJavascript, SiReact, SiTailwindcss, SiHtml5, SiPhp, SiMysql, SiTensorflow, 
    SiPython, SiC, SiPandas, SiNumpy, SiGit, SiPytorch, SiVite,
    SiDocker
  } from 'react-icons/si';

const Projects = () => {
    return (
        <section id="projects" className="py-20">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                {" "}
                Projects
            </h2>
            <div className="grid flex-col sm:grid-cols-2 gap-8 ">
                <ProjectCard
                    title="Spiking Neural Networks"
                    description="Neuromorphic computation on low-power microcontrollers for closed-loop signal detection applications."
                    image="src/assets/img/loihi2.jpg"
                    link="https://github.com/MarcosOriolPago/LAVA_SNN_ripples"
                    skills={
                        <SkillIconGroup>
                            <SiPython title="Python" className="text-blue-400"/>
                            <SiPytorch title="Pytorch" className="text-orange-400" />
                            <SiNumpy title="Numpy" className="text-blue-900"/>
                            <SiGit title="Git" className="text-orange-600"/>
                        </SkillIconGroup>
                    }
                />
                <ProjectCard
                    title="Web Portfolio"
                    description="Biography and portfolio website showcasing my projects and skills."
                    image="src/assets/img/react-docker.png"
                    link="https://github.com/MarcosOriolPago/portfolio"
                    skills={
                        <SkillIconGroup>
                            <SiReact title="React" className="text-blue-400"/>
                            <SiJavascript title="JavaScript" className="text-orange-400" />
                            <SiTailwindcss title="Tailwindcss" className="text-blue-200"/>
                            <SiVite title="Vite" className="text-blue-900"/>
                            <SiDocker title="Docker" className="text-blue-600"/>
                        </SkillIconGroup>
                    }
                />
                <ProjectCard
                    title="AI Agent Builder"
                    description="Frontend development for an AI agent builder, allowing users to create and customize their own AI agents."
                    image="src/assets/img/agent-builder.png"
                    link="https://github.com/AndresOriol/agent_builder_frontend"
                    skills={
                        <SkillIconGroup>
                            <SiReact title="React" className="text-blue-400"/>
                            <SiJavascript title="JavaScript" className="text-orange-400" />
                            <SiTailwindcss title="Tailwindcss" className="text-blue-200"/>
                            <SiVite title="Vite" className="text-blue-900"/>
                            <SiDocker title="Docker" className="text-blue-600"/>
                        </SkillIconGroup>
                    }
                />
            </div>
        </div>
        </section>
    );
    }

export default Projects;