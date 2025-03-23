import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";  
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/ProjectDetails.css';
import { projectDetails } from '../data/projectDetailsData';
interface HomeProps {
    darkMode: boolean;
}

const ProjectDetails: React.FC<HomeProps> = ({ darkMode }) => {
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
    <div className="project-details-container"> 
      <div className="project-details">
        <h1 className="project-title">{project.title}</h1>
        <p className="project-meta">Written by <strong>{project.author}</strong> | {project.date}</p>

        {project.video && (
          <video controls className="project-video">
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        <div className="project-content" dangerouslySetInnerHTML={{ __html: project.content }}></div>

        <Slider {...sliderSettings} className="project-carousel">
          {project.images.map((img, index) => (
            <div key={index}>
              <img loading="lazy" src={img} alt={`${project.title} - ${index + 1}`} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectDetails;
