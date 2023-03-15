import { Link } from "react-router-dom";
import "../css/Design.css";
import { Container } from "react-bootstrap";
const WorkExperience = () => {
  let style_border = {
    border: "solid var(--contrast) 4px",
    borderRadius: "40px",
  };
  let mytextStyled = {
    color: "var(--contrast)",
  };

  let work_styled = {
    color: "var(--contrast)",
  };
  return (
    <div>
      <div className="work_page">
        <div className="work_vector_left">
          <div className="work_vector1"></div>
          <div className="work_vector2"></div>
        </div>
        <Container style={style_border}>
          <div className="work_page_wrapper">
            <div className="work_content_wrapper">
              <div className="col-6 work_content">
                <h1>
                  My <strong style={work_styled}>Projects:</strong>
                </h1>
              </div>
              <div className="col-6 next_button_work">
                <Link to="/Contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3rem"
                    height="3rem"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      style={mytextStyled}
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="projects_lists">
              <div className="project_items">
                <div className="work_item1" id="projects_made" placeholder="img">
                  projects in progress...
                </div>
                <div className="work_item2" id="projects_made">
                  projects in progress...
                </div>
                <div className="work_item3" id="projects_made">
                  projects in progress...
                </div>
                <div className="work_item4" id="projects_made">
                  projects in progress...
                </div>
              </div>
              <div className="project_items">
                <div className="work_item1" id="projects_made">
                  projects in progress...
                </div>
                <div className="work_item2" id="projects_made">
                  projects in progress...
                </div>
                <div className="work_item3" id="projects_made">
                  projects in progress...
                </div>
                <div className="work_item4" id="projects_made">
                  projects in progress...
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default WorkExperience;
