import React from 'react';
import ProjectCard from '../ProjectCard';
import SkillIconGroup from '../SkillIconGroup';
import { 
    SiJavascript, SiReact, SiTailwindcss, SiHtml5, SiPhp, SiMysql, SiTensorflow, 
    SiPython, SiC, SiArduino, SiNumpy, SiGit, SiPytorch, SiVite,
    SiDocker
  } from 'react-icons/si';


const Projects = () => {
    return (
        <section id="projects" className="py-10">
        <div className="px-4">
            <h2 className="text-3xl font-bold mb-20 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                {" "}
                Projects
            </h2>
            <div className="grid flex-col gap-30 ">
                <ProjectCard
                    title="Spiking Neural Networks"
                    description="Neuromorphic computation on low-power microcontrollers for closed-loop signal detection applications."
                    image="img/loihi2.jpg"
                    link="https://github.com/MarcosOriolPago/LAVA_SNN_ripples"
                    skills={
                        <SkillIconGroup>
                            <SiPython title="Python" className="text-blue-400"/>
                            <SiPytorch title="Pytorch" className="text-orange-400" />
                            <SiNumpy title="Numpy" className="text-blue-900"/>
                            <SiGit title="Git" className="text-orange-600"/>
                        </SkillIconGroup>
                    }
                    detailedDescription={
                        <div className="overflow-y-scroll h-120">
                            <p className="text-gray-400 mt-2 mb-4">
                                This project implements a Spiking Neural Network (SNN) model for detecting ripples in neural signals. 
                                The SNN is designed to run on low-power microcontrollers, making it suitable for real-time applications in closed-loop systems.
                            </p>
                            <table>
                                <tr><td align="center"><b>Input</b></td></tr>
                                <tr><td> <img src="img/input.gif"/> </td></tr>
                                <tr><td align="center"><b>Output</b></td></tr>
                                <tr><td> <img src="img/output.gif"/> </td></tr>
                            </table>
                            <img src="img/overview_workflow.png" alt="" />
                        </div>
                    }
                />
                <ProjectCard
                    title="Web Portfolio"
                    description="Biography and portfolio website showcasing my projects and skills."
                    image="img/react-docker.png"
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
                    image="img/agent-builder.png"
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
                <ProjectCard
                    title="Rehabilitation RF Car"
                    description="
                    Development of a fully 3D printed radiocontrolled car for arm rehabilitation. 
                    Controled two arduinos and a custom Bluetooth communication protocol.
                    "
                    image="img/cars.jpg"
                    link=""
                    skills={
                        <SkillIconGroup>
                            <SiArduino title="Arduino" className="text-blue-500"/>
                            <SiC title="C" className="text-blue-300" />
                        </SkillIconGroup>
                    }
                    detailedDescription={
                        <div>
                            <iframe width="560" height="315" 
                                src="https://www.youtube.com/embed/5mGxKpf0huA?si=p9rKs7VoDAtfEjl6" 
                                title="YouTube video player" frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                            </iframe>
                        </div>
                    }
                />
            </div>
        </div>
        </section>
    );
    }

export default Projects;