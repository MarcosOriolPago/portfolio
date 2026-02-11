import ProjectCard from "../ProjectCard";
import SkillIconGroup from "../SkillIconGroup";
import InnerProjectDescription from "./InnerProjectDescription";
import Gallery from "../Gallery";
import { RevealOnScroll } from "../RevealOnScroll";
import {
  SiJavascript, SiReact, SiTailwindcss, SiGooglecloud,
  SiPython, SiC, SiArduino, SiNumpy, SiGit, SiPytorch, SiVite,
  SiDocker, SiLatex,
} from "react-icons/si";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-blue-500" />
            <span className="text-sm font-mono text-blue-400 tracking-wider uppercase">
              Work
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-100 mb-16">
            Projects
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* SNNverse */}
          <ProjectCard
            title="SNNverse"
            description="A visual, interactive playground for building, simulating, and understanding Spiking Neural Networks with GPU-accelerated computation through GeNN."
            image="img/snnverse.png"
            link="https://github.com/MarcosOriolPago/SNNverse"
            skills={
              <SkillIconGroup>
                <SiReact title="React" className="text-blue-400" />
                <SiPython title="Python" className="text-yellow-400" />
                <SiTailwindcss title="Tailwindcss" className="text-blue-300" />
                <SiDocker title="Docker" className="text-blue-600" />
              </SkillIconGroup>
            }
            detailedDescription={
              <InnerProjectDescription>
                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                  <strong className="text-blue-400">Purpose</strong>
                  <br />
                  SNNverse is an open-source visual playground for quickly prototyping
                  Spiking Neural Networks. It bridges a modern React-based frontend with
                  GPU-accelerated backend simulation through GeNN, making SNN research
                  accessible and intuitive.
                </p>
                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                  <strong className="text-blue-400">Key Features</strong>
                </p>
                <ul className="text-sm text-neutral-400 leading-relaxed mb-4 list-disc list-inside flex flex-col gap-1">
                  <li>Drag-and-drop flow-based network construction</li>
                  <li>Real-time simulation feedback with live membrane voltage and spike raster streams</li>
                  <li>GPU-accelerated computation with automatic C++ code generation</li>
                  <li>WebSocket-based streaming interface for live data</li>
                  <li>Dynamic parameter editing and topology manipulation</li>
                </ul>
                <img
                  src="img/snnverse.png"
                  alt="SNNverse builder interface"
                  className="rounded-xl border border-white/10 mb-2"
                />
                <p className="text-xs text-neutral-500 mb-4">
                  <strong>Figure:</strong> The visual network builder showing a multi-layer
                  spiking neural network with PyInput nodes and interconnected neuron populations.
                </p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  <strong className="text-blue-400">Tech Stack</strong>
                  <br />
                  React + React Flow for the frontend, Python + GeNN for the GPU-accelerated backend,
                  WebSockets for real-time data streaming, and Docker for containerized deployment.
                </p>
              </InnerProjectDescription>
            }
          />

          {/* Spiking Neural Networks Research */}
          <ProjectCard
            title="Spiking Neural Networks"
            description="Neuromorphic computation on low-power microcontrollers for closed-loop signal detection applications."
            image="img/loihi2.jpg"
            link="https://github.com/MarcosOriolPago/LAVA_SNN_ripples"
            skills={
              <SkillIconGroup>
                <SiPython title="Python" className="text-yellow-400" />
                <SiPytorch title="Pytorch" className="text-orange-400" />
                <SiNumpy title="Numpy" className="text-blue-900" />
                <SiGit title="Git" className="text-orange-600" />
              </SkillIconGroup>
            }
            detailedDescription={
              <InnerProjectDescription>
                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                  <strong className="text-blue-400">Context</strong>
                  <br />
                  Spiking Neural Networks (SNNs) work similar to other classical
                  neural networks. However, they involve time in the equation. By
                  mimicking the membrane potential of biological neurons, each
                  node will get charged when receiving an input, and discharged
                  through each time step.
                  <br />
                  <br />
                  <strong className="text-blue-400">Goal</strong>
                  <br />
                  This project consisted in applying a SNN for detecting Sharp
                  Wave Ripples, a characteristical brain signal pattern present
                  in epilepsy.
                </p>
                <img
                  src="img/overview_workflow.png"
                  alt="SNN workflow overview"
                  className="rounded-xl border border-white/10 mb-2"
                />
                <p className="text-xs text-neutral-500 mb-4">
                  <strong>Figure 1:</strong> Each timestep, a value of the signal
                  arrives to a specific neuron from the input layer of the
                  network.
                </p>
                <strong className="text-blue-400 text-sm">Result</strong>
                <div className="grid grid-cols-1 gap-4 mt-2">
                  <div>
                    <p className="text-xs text-neutral-500 mb-1 text-center">
                      Input
                    </p>
                    <img
                      src="img/input.gif"
                      alt="Input signal"
                      className="rounded-lg border border-white/10"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-1 text-center">
                      Output
                    </p>
                    <img
                      src="img/output.gif"
                      alt="Output signal"
                      className="rounded-lg border border-white/10"
                    />
                  </div>
                </div>
              </InnerProjectDescription>
            }
          />

          {/* Web Portfolio */}
          <ProjectCard
            title="Web Portfolio"
            description="Biography and portfolio website showcasing my projects and skills."
            image="img/portfolio-main.png"
            link="https://github.com/MarcosOriolPago/portfolio"
            skills={
              <SkillIconGroup>
                <SiReact title="React" className="text-blue-400" />
                <SiJavascript title="JavaScript" className="text-orange-400" />
                <SiTailwindcss title="Tailwindcss" className="text-blue-300" />
                <SiVite title="Vite" className="text-blue-900" />
                <SiDocker title="Docker" className="text-blue-600" />
                <SiGooglecloud title="Google Cloud" className="text-blue-500" />
              </SkillIconGroup>
            }
          />

          {/* LaTeX CV Template */}
          <ProjectCard
            title="LaTeX CV Template"
            description="A minimal and modern LaTeX template for creating professional CVs with fully customizable sections and high-quality PDF output."
            image="img/cv-preview.png"
            link="https://github.com/MarcosOriolPago/cv"
            skills={
              <SkillIconGroup>
                <SiLatex title="LaTeX" className="text-teal-400" />
                <SiGit title="Git" className="text-orange-600" />
              </SkillIconGroup>
            }
            detailedDescription={
              <InnerProjectDescription>
                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                  <strong className="text-blue-400">Overview</strong>
                  <br />
                  A clean, modern LaTeX template designed for professional CVs.
                  It produces high-quality PDF output suitable for job applications,
                  academic purposes, or professional portfolios.
                </p>
                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                  <strong className="text-blue-400">Features</strong>
                </p>
                <ul className="text-sm text-neutral-400 leading-relaxed mb-4 list-disc list-inside flex flex-col gap-1">
                  <li>Minimal and modern design with gradient header</li>
                  <li>Fully customizable sections (career, projects, education, skills)</li>
                  <li>Skill icon integration for technologies</li>
                  <li>Easy to update personal information</li>
                  <li>High-quality PDF output via pdflatex</li>
                </ul>
                <img
                  src="img/cv-preview.png"
                  alt="CV Template Preview"
                  className="rounded-xl border border-white/10 mb-2"
                />
                <p className="text-xs text-neutral-500">
                  <strong>Preview:</strong> The generated CV layout with career history,
                  projects, skills, and education sections.
                </p>
              </InnerProjectDescription>
            }
          />

          {/* Rehabilitation RF Car */}
          <ProjectCard
            title="Rehabilitation RF Car"
            description="Development of a fully 3D printed radiocontrolled car for arm rehabilitation. Controlled two arduinos and a custom Bluetooth communication protocol."
            image="img/cars.jpg"
            link=""
            skills={
              <SkillIconGroup>
                <SiArduino title="Arduino" className="text-blue-500" />
                <SiC title="C" className="text-blue-300" />
              </SkillIconGroup>
            }
            detailedDescription={
              <InnerProjectDescription>
                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                  <strong className="text-blue-400">Context</strong>
                  <br />
                  This project consisted in developing a radiocontrolled car for
                  rehabilitation purposes. The car was designed to be used by
                  patients with arm disabilities, allowing them to control the
                  car with their arm movements.
                  <br />
                  <br />
                  <strong className="text-blue-400">Goal</strong>
                  <br />
                  The goal was to develop a fully 3D printed car that could be
                  controlled by two Arduinos with a custom Bluetooth
                  communication protocol.
                  <br />
                  <br />
                  <strong className="text-blue-400">Development</strong>
                </p>
                <Gallery
                  imgs_folder={[
                    "img/bluetooth.jpg",
                    "img/cars1.jpg",
                    "img/car_stage1.jpg",
                    "img/car_run.gif",
                    "img/cars_wires.jpg",
                  ]}
                />
                <p className="text-sm text-neutral-400 leading-relaxed mt-4 mb-2">
                  <strong className="text-blue-400">Result</strong>
                </p>
                <img
                  src="img/cachiao.gif"
                  alt="Car demonstration"
                  className="rounded-lg border border-white/10"
                />
              </InnerProjectDescription>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
