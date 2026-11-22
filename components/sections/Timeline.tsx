"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Timeline } from "../ui/AceternityTimeline";
import { RevealOnScroll } from "../RevealOnScroll";

import type { IconType } from "react-icons";
import {
  SiPython, SiPytorch, SiNumpy, SiGit, SiTensorflow, SiC, SiCplusplus, SiRos, SiDocker, SiLinux, SiAmd,
  SiBluetooth,
} from "react-icons/si";

type Job = {
  period: string;
  role: string;
  org: string;
  orgUrl?: string;
  location: string;
  description: string;
  /** Optional link to a related project page on this site. */
  project?: { title: string; href: string };
  skills: { icon: IconType; label: string; color: string }[];
};

function JobCard({ job }: { job: Job }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-black/[0.08] bg-white/70 p-6 lg:p-8 backdrop-blur-sm hover:border-black/[0.12] transition-colors duration-300"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-5">
        <div className="w-2 h-2 rounded-full bg-blue-600" />
        <span className="text-sm font-mono text-blue-600">{job.period}</span>
      </div>

      <h3 className="text-2xl font-semibold text-neutral-900 mb-1">{job.role}</h3>
      <p className="text-base text-neutral-600 mb-1">
        {job.orgUrl ? (
          <a
            href={job.orgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors duration-200 underline underline-offset-4 decoration-neutral-300 hover:decoration-blue-400"
          >
            {job.org}
          </a>
        ) : (
          job.org
        )}
      </p>
      <p className="text-sm text-neutral-500 mb-5">{job.location}</p>
      <p className="text-base text-neutral-700 leading-relaxed mb-6">{job.description}</p>
      {job.project && (
        <Link
          href={job.project.href}
          className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 transition-colors mb-6"
        >
          {job.project.title}
          <ChevronRight size={16} />
        </Link>
      )}

      <div className="flex flex-wrap gap-2.5">
        {job.skills.map((skill) => (
          <div
            key={skill.label}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/[0.04] border border-black/[0.08] text-sm text-neutral-700"
          >
            <skill.icon style={{ color: skill.color }} size={14} />
            <span>{skill.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

const python = { icon: SiPython, label: "Python", color: "#3776AB" };
const pytorch = { icon: SiPytorch, label: "PyTorch", color: "#EE4C2C" };
const numpy = { icon: SiNumpy, label: "NumPy", color: "#013243" };

const i3s: Job = {
  period: "Feb 2024 - Jun 2024",
  role: "Research Intern · B.Sc. Thesis",
  org: "i3S - Neuroengineering & Computational Neuroscience",
  orgUrl: "https://www.i3s.up.pt/",
  location: "Porto, Portugal",
  description:
    "Developed spiking neuron models detecting memory-related patterns in mouse hippocampus, deployed on Intel's Loihi 2 neuromorphic chip.",
  skills: [python, pytorch, numpy, { icon: SiLinux, label: "Linux", color: "#FCC624" }],
};

const prbb: Job = {
  period: "Sep 2024 - Dec 2024",
  role: "Software Engineer (Collaboration)",
  org: "PRBB - Hospital del Mar",
  orgUrl: "https://www.prbb.org/",
  location: "Barcelona, Spain",
  description:
    "Built software for a startup using focused ultrasound (FUS) for spinal-cord stimulation, including T1/T2 MRI tissue segmentation models isolating the spinal cord for FUS targeting.",
  skills: [python, pytorch, numpy, { icon: SiGit, label: "Git", color: "#F05032" }],
};

const idneo: Job = {
  period: "Nov 2024 - Jun 2026",
  role: "AI / ML Engineer",
  org: "IDNEO Technologies",
  orgUrl: "https://www.idneo.com/",
  location: "Barcelona, Spain",
  description:
    "Developed AI models for automotive embedded systems, from data collection to deployment. Built an in-vehicle ROS 2 + Foxglove platform integrating 10+ sensors (radar, lidar, cameras, UWB), used to record the team's datasets and run every ML demo live for clients in the car.",
  skills: [
    python,
    { icon: SiTensorflow, label: "TensorFlow", color: "#FF6F00" },
    { icon: SiC, label: "C", color: "#A8B9CC" },
    { icon: SiRos, label: "ROS 2", color: "#22314E" },
    { icon: SiDocker, label: "Docker", color: "#2496ED" },
  ],
};

const ini: Job = {
  period: "Sep 2026 - Feb 2027",
  role: "Research Student",
  org: "Institute of Neuroinformatics - ETH Zürich & University of Zürich",
  orgUrl: "https://www.ini.uzh.ch/",
  location: "Zürich, Switzerland",
  description:
    "Built a PyTorch-style library to train and run spiking neural networks on a custom neuromorphic chip, with a Zynq UltraScale+ FPGA control layer handling host-chip communication, and designed a standard Zynq communication framework shared by the lab's neuromorphic chips.",
  skills: [
    python,
    pytorch,
    { icon: SiCplusplus, label: "C++", color: "#00599C" },
    { icon: SiAmd, label: "Zynq FPGA", color: "#ED1C24" },
  ],
};

const ethrc: Job = {
  period: "Sep 2026 - Feb 2027",
  role: "Robotics Team Lead",
  org: "ETH Robotics Club (ETHRC)",
  location: "Zürich, Switzerland",
  description:
    "Led software and model training for a sEMG-controlled prosthetic hand built from scratch by a 17-person team. Co-designed a low-cost 64-electrode sEMG array, chose the smallest MCU able to run the model while sampling 64 channels at 2 kHz, and managed a silicone feedback armband fed by the hand over BLE.",
  project: { title: "sEMG-Controlled Prosthetic Hand", href: "/semg-prosthetic-hand" },
  skills: [
    python,
    pytorch,
    { icon: SiC, label: "C", color: "#A8B9CC" },
    { icon: SiBluetooth, label: "BLE", color: "#0082FC" },
  ],
};

const timelineEntries = [
  { title: "Early 2024", content: <JobCard job={i3s} /> },
  {
    title: "2024 - 2026",
    content: (
      <div className="flex flex-col gap-8">
        <JobCard job={prbb} />
        <JobCard job={idneo} />
      </div>
    ),
  },
  {
    title: "2026 - Present",
    content: (
      <div className="flex flex-col gap-8">
        <JobCard job={ini} />
        <JobCard job={ethrc} />
      </div>
    ),
  },
];

function TimelineSection() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Career History
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mb-12">
            My journey through bioengineering, neuroscience research, and software engineering.
          </p>
        </RevealOnScroll>

        <Timeline data={timelineEntries} />
      </div>
    </section>
  );
}

export default TimelineSection;
