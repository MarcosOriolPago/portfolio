import React from 'react';
import ProjectCard from '../ProjectCard';
import SkillIconGroup from '../SkillIconGroup';
import InnerProjectDescription from './InnerProjectDescription';
import { 
    SiJavascript, SiReact, SiTailwindcss, SiHtml5, SiPhp, SiMysql, SiTensorflow, 
    SiPython, SiC, SiArduino, SiNumpy, SiGit, SiPytorch, SiVite,
    SiDocker
  } from 'react-icons/si';

import "../../assets/styles/text.scss";
import "../../assets/styles/Projects.scss";

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
                        <InnerProjectDescription>
                            <p className='inner-p'>
                                <strong className="text-orange-200">Context</strong><br />
                                Spiking Neural Networks (SNNs) work similar to other classical neural networks. However, they involve time in the equation. 
                                By mimicking the membrane potential of biological neurons, each node will get charged when receiving an input, and discharged 
                                through each time step. Therefore, the network learns to detect a pattern of values in a sequence of time. 
                                This makes them ideal for time domain applications, such as signal detection.
                                <br/>
                                <strong className="text-orange-200">Goal</strong><br />
                                This project consisted in applying a SNN for detecting Sharp Wave Ripples, a characteristical brain signal pattern
                                present in epilepsy.
                            </p>
                            <img src="img/overview_workflow.png" alt="" />
                            <figcaption>
                                <strong>Figure 1: </strong>Eact timestep, a value of the signal arrives to a specific neuron from the input layer
                                of the network. In this case, the high frequency oscillating signal stimulated the input neurons in a specific pattern.
                                This pattern is what the network learned during the training, and could easily detect afterwards.
                            </figcaption>
                            <br />
                            <strong className="text-orange-200">Result</strong><br />
                            <table>
                                <tbody>
                                    <tr><td align="center"><b>Input</b></td></tr>
                                    <tr><td> <img src="img/input.gif"/> </td></tr>
                                    <tr><td align="center"><b>Output</b></td></tr>
                                    <tr><td> <img src="img/output.gif"/> </td></tr>
                                </tbody>
                            </table>
                            <figcaption>
                                <strong>Figure 2: </strong> The network provides an output for each time input. When Sharp Wave Ripples arrive, the output neurons from the 
                                network fire faster in the neuron from label "Signal Detected", otherwise they fire "No Signal Detected". 
                            </figcaption>
                        </InnerProjectDescription>
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