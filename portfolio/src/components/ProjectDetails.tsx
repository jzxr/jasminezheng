import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";  
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/ProjectDetails.css';

const projectDetails = {
  "smart-home": {
    title: "Smart Home Automation System",
    date: "January 22, 2019",
    author: "Jasmine Zheng",
    video: "/videos/smart-home/smart-home-demo.mp4",
    images: [  
      "/images/smart-home/smart-home-1.jpg",
      "/images/smart-home/smart-home-2.jpg",
      "/images/smart-home/smart-home-3.jpg",
      "/images/smart-home/smart-home-4.jpg"
    ],
    content: `
      <p>This <strong>Smart Home Automation System</strong> integrates various sensors and IoT components 
      to enhance automation and air quality monitoring.</p>

      <h3>Key Features:</h3>
      <ul>
        <li><strong>TMP102 Temperature Sensor:</strong> Automatically controls a cooling fan.</li>
        <li><strong>DHT22 Temperature & Humidity Sensor:</strong> Displays real-time data on an LCD screen.</li>
        <li><strong>PM2.5 Dust Sensor:</strong> Continuously monitors air quality.</li>
        <li><strong>4-Channel Relay Module:</strong> Controls various smart home devices.</li>
        <li><strong>LED Strip:</strong> Provides smart lighting with automation.</li>
        <li><strong>MQTT Communication:</strong> Ensures seamless IoT connectivity.</li>
      </ul>

      <h3>How It Works:</h3>
      <p>When temperature or humidity reaches a set threshold, the system triggers actions such as 
      turning on a fan or adjusting lighting. The mobile web app allows users to monitor sensor data 
      and control devices remotely.</p>

      <p>Built using <strong>Python</strong> for backend processing, <strong>MQTT</strong> for real-time data exchange, and a 
      <strong>CSS</strong>-styled web interface for an intuitive user experience.</p>

      <h3>Achievements:</h3>
      <ul>
        <li><strong>Temasek Foundation International Specialists’ Community Action and Leadership Exchange (TFI SCALE)</strong> at Republic Polytechnic.</li>
        <li>Engaged in holistic learning and cross-cultural sharing experience in Suzhou, China.</li>
        <li>Implemented co-developed social innovation projects to benefit local communities, such as the <strong>Environmental Monitoring Detection System</strong>.</li>
      </ul>
    `,
  },
};

const ProjectDetails: React.FC = () => {
  const { projectId } = useParams();
  const project = projectDetails[projectId as keyof typeof projectDetails];

  if (!project) {
    return <h1>Project Not Found</h1>;
  }

  // ✅ Carousel settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="project-details">
      <h1 className="project-title">{project.title}</h1>
      <p className="project-meta">Written by <strong>{project.author}</strong> | {project.date}</p>

      <video controls className="project-video">
        <source src={project.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="project-content" dangerouslySetInnerHTML={{ __html: project.content }}></div>

      <Slider {...sliderSettings} className="project-carousel">
        {project.images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`${project.title} - ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectDetails;
