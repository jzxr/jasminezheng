import React, { useEffect, useRef } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTrophy, faBriefcase, faGraduationCap, faCertificate } from '@fortawesome/free-solid-svg-icons';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/ExperienceTimeline.css';
import { experience } from '../data/experienceData';
import { useScrollContext } from './context/ScrollContext';

interface TimelineProps {
  darkMode: boolean;
}

const allTimelineItems = [...experience].sort(
  (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
);

const formatDate = (dateStr: string | null): string => {
  if (!dateStr) return 'Present';
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
  return new Date(dateStr).toLocaleDateString(undefined, options);
};

const ExperienceTimeline: React.FC<TimelineProps> = ({ darkMode }) => {
  const { triggerScrollToTimeline, setTriggerScrollToTimeline } = useScrollContext();
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (triggerScrollToTimeline && timelineRef.current) {
      setTimeout(() => {
        timelineRef.current?.scrollIntoView({ behavior: 'smooth' });
        setTriggerScrollToTimeline(false);
      }, 100); 
    }
  }, [triggerScrollToTimeline, setTriggerScrollToTimeline]);

  return (
    <section
      id="timeline"
      ref={timelineRef}
      className={`timeline-section ${darkMode ? 'dark' : 'light'}`}
    >
      <h2 className="timeline-title">Work Experience & Education</h2>
      <VerticalTimeline lineColor={darkMode ? '#888' : '#ddd'}>
        {allTimelineItems.map((item) => {
        const icon = (() => {
          switch (item.iconType) {
            case 'trophy':
              return faTrophy;
            case 'work':
              return faBriefcase;
            case 'school':
              return faGraduationCap;
            case 'cert':
              return faCertificate;
            case 'code':
            default:
              return faCode;
          }
        })();
          return (
            <VerticalTimelineElement
              key={item.id}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: darkMode ? '#222' : '#fff',
                color: darkMode ? '#fff' : '#333',
              }}
              contentArrowStyle={{ borderRight: `7px solid ${item.color}` }}
              date={`${formatDate(item.startDate)} – ${formatDate(item.endDate)}`}

              icon={<FontAwesomeIcon icon={icon} />}
              iconStyle={{ background: item.color, color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
              <p>{item.description}</p>

              {item.techStack && (
                <>
                  <div className="tech-stack-container">
                    {item.techStack.map((tech: string, index: number) => (
                      <span key={index} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};

export default ExperienceTimeline;
