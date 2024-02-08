import React from "react";
import project1 from "../../assets/Images/project-001.png";
import project2 from "../../assets/Images/project-002.jpg";
import project3 from "../../assets/Images/project-003.jpg";
import project4 from "../../assets/Images/project-004.jpg";
import project5 from "../../assets/Images/project-005.jpg";
import Spin from "react-reveal/Spin";
import { useNavigate } from "react-router-dom";
import "./Projects.css";



const Projects = () => {
  const navigate = useNavigate();

  const sapalogyPortal = () => {
    navigate("/sapalogyPortal");
  };
  
  return (
    <>
      <div className="continer project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recent Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 Here are my projects with details and live Link
        </p>
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4 projects">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img src={project1} alt="project1" />
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-detail-badge">Laravel</span>
                  <span className="card-detail-badge">JavaScript</span>
                  <span className="card-detail-badge">HTML5</span>
                  <span className="card-detail-badge">CSS3</span>
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Sapalogy Smart Learning Hub Portal
                    </h6>
                  </div>
                  <a className="ad-btn" onClick={sapalogyPortal} >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 projects">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img src={project2} alt="project1" />
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-detail-badge">Laravel</span>
                  <span className="card-detail-badge">JavaScript</span>
                  <span className="card-detail-badge">HTML5</span>
                  <span className="card-detail-badge">CSS3</span>
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">CRM</h5>
                  </div>
                  <a className="ad-btn" href="" >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 projects">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img src={project3} alt="project1" />
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-detail-badge">Laravel</span>
                  <span className="card-detail-badge">JavaScript</span>
                  <span className="card-detail-badge">HTML5</span>
                  <span className="card-detail-badge">CSS3</span>
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Alpha Direct</h5>
                  </div>
                  <a className="ad-btn" href="">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 projects">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img src={project4} alt="project1" />
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-detail-badge">React JS</span>
                  <span className="card-detail-badge">Node JS</span>
                  <span className="card-detail-badge">HTML5</span>
                  <span className="card-detail-badge">CSS3</span>
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Hospital management system
                    </h6>
                  </div>
                  <a className="ad-btn" href="">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 projects">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img src={project1} alt="project5" />
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-detail-badge">React JS</span>
                  <span className="card-detail-badge">Node JS</span>
                  <span className="card-detail-badge">HTML5</span>
                  <span className="card-detail-badge">CSS3</span>
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Herambindia</h5>
                  </div>
                  <a className="ad-btn" href="">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
