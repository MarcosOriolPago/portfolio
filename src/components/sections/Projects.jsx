import React from 'react';
import ProjectCard from '../ProjectCard';
import SkillIconGroup from '../SkillIconGroup';
import Background from '../AnimatedBackground';
import { 
    SiJavascript, SiReact, SiTailwindcss, SiHtml5, SiPhp, SiMysql, SiTensorflow, 
    SiPython, SiC, SiPandas, SiNumpy, SiGit, SiPytorch, SiLinux
  } from 'react-icons/si';

const Projects = () => {
    return (
        <section id="projects" className="py-20">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                {" "}
                Projects
            </h2>
            <div className="grid flex-col">
                <ProjectCard
                    title="Neuromorphic Computation Project"
                    description="Neuromorphic computation on low-power microcontrollers for closed-loop signal detection applications."
                    image="../../src/assets/img/loihi2.jpg"
                    link="https://github.com/yourproject"
                    skills={
                        <SkillIconGroup>
                            <SiReact />
                            <SiJavascript />
                            <SiTailwindcss />
                        </SkillIconGroup>
                    }
                />
                <ProjectCard
                    title="AI-Powered App"
                    description="An AI-based mobile application to automate daily tasks using machine learning."
                    image="https://via.placeholder.com/400x250"
                    link="https://github.com/yourproject2"
                    skills={
                        <SkillIconGroup>
                            <SiReact />
                            <SiJavascript />
                            <SiTailwindcss />
                        </SkillIconGroup>
                    }
                />
            </div>
        </div>
        </section>
    );
    }

export default Projects;