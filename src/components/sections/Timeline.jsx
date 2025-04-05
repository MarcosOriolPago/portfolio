import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import SkillIconGroup from "../SkillIconGroup";
import 'react-vertical-timeline-component/style.min.css';
import '../../assets/styles/Timeline.scss'

import { 
  SiJavascript, SiHtml5, SiPhp, SiMysql, SiTensorflow, 
  SiPython, SiC, SiPandas, SiNumpy, SiGit, SiPytorch, SiLinux
} from 'react-icons/si';

function Timeline() {
  return (
    <div id="work">
      <div className="items-center justify-center">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Carrer History
        </h2>
        <VerticalTimeline>
          <TimelineEvent
            date="2024 - present"
            title="AI - ML Engineer"
            subtitle="Barcelona, Spain"
            organization="IDNEO Technologies Inc."
            organizationUrl="https://www.idneo.com/"
            description="Development of AI Models for embedded systems in the automotive industry, including data collection, model training, and deployment."
            skills={
              <SkillIconGroup>
                <SiPython title="Python" className="text-[#3776AB]" />        
                <SiTensorflow title="TensorFlow" className="text-[#FF6F00]" />
                <SiC title="C" className="text-[#A8B9CC]" />
                <SiPandas title="Pandas" className="text-[#150458]" />        
                <SiNumpy title="NumPy" className="text-[#013243]" />
                <SiGit title="Git" className="text-[#F05032]" /> 
              </SkillIconGroup>
            }
          />
          <TimelineEvent
            date="2024 - 2025"
            title="Software Engineer"
            subtitle="Barcelona, Spain"
            organization="PRBB"
            organizationUrl="https://www.prbb.org/"
            description="Developing and implementing artificial intelligence tools for software designed for ultrasonic-based spinal cord stimulation."
            skills={
              <SkillIconGroup>
                <SiPython title="Python" className="text-[#3776AB]" />
                <SiTensorflow title="Tensorflow" className="text-teal-400" />
                <SiNumpy title="NumPy" className="text-[#013243]" />
                <SiGit title="Git" className="text-[#F05032]" /> 
              </SkillIconGroup>
            }
          />
          <TimelineEvent
            date="2024 Feb - Jul"
            title="Computational Neuroscience Researcher"
            subtitle="Porto, Portugal"
            organization="i3S - Instituto de Investigação e Inovação em Saúde"
            organizationUrl="https://www.i3s.up.pt/"
            description="Neuromorphic computation on low-power microcontroller for closed-loop signal detection applications."
            skills={
              <SkillIconGroup>
                <SiPython title="Python" className="text-[#3776AB]" />
                <SiPytorch title="Pytorch" className="text-red-400" />
                <SiNumpy title="NumPy" className="text-[#013243]" />
                <SiLinux title="WSL" />
              </SkillIconGroup>
            }
          />
          <TimelineEvent
            date="2023 - 2024"
            title="Software Developer"
            subtitle="Barcelona, Spain"
            organization="Skynet Legal"
            organizationUrl="https://www.skynetlegal.com/"
            description="Automation, Web development, and Data Analysis for a legal tech startup."
            skills={
              <SkillIconGroup>
                <SiPython title="Python" className="text-[#3776AB]" />
                <SiJavascript title="JavaScript" className="text-orange-400" />
                <SiHtml5 title="HTML5" className="text-[#E34F26]" />
                <SiPhp title="PHP" className="text-[#4F5B93]" />
                <SiMysql title="SQL" className="text-[#E34F26]" />
              </SkillIconGroup>
            }
          />
        </VerticalTimeline>
      </div>
    </div>
  );
}


const TimelineEvent = ({
  date,
  title,
  subtitle,
  description,
  organization,
  organizationUrl,
  skills,
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: 'linear-gradient(135deg, #e0c3fc, #8ec5fc)', // Gradient
        color: 'rgb(39, 40, 34)',
        borderRadius: '10px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}
      contentArrowStyle={{ borderRight: '7px solid white' }}
      date={date}
      iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
      icon={<FontAwesomeIcon icon={faBriefcase} />}
    >
      {/* Title with better styling */}
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
        {title}
      </h3>

      {/* Organization (with optional link) */}
      {organization && (
        <h4 className="text-sm sm:text-base text-gray-600 mb-1 font-medium">
          {organizationUrl ? (
            <a
              href={organizationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-indigo-600 transition-colors"
            >
              {organization}
            </a>
          ) : (
            organization
          )}
        </h4>
      )}

      {/* Location / subtitle */}
      <h5 className="text-sm text-gray-500 italic mb-2">{subtitle}</h5>

      {/* Description */}
      <p className="text-sm text-gray-700 leading-relaxed">{description}</p>

      {/* Skills */}
      {skills && <div className="mt-3">{skills}</div>}
    </VerticalTimelineElement>
  );
};

export default Timeline;