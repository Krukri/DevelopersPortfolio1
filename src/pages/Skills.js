import "../css/Design.css";
import { Container } from "react-bootstrap";
const SkillsPage = () => {
   let style_border = {
     border: "solid var(--contrast) 4px",
     borderRadius: "40px",
   };
  return (
    <div>
      <div className="nav_vector_left">
        <div className="nav_vector1"></div>
        <div className="nav_vector2"></div>
      </div>
      <Container style={style_border}>
        <div className="home_page_wrapper">
          <div className="content_wrapper">
            <div className="col-6 name_content">
              <h1>Hello! I'm Joseph</h1>
              <h5>Full-stack Web Developer.</h5>
            </div>
            <div className="col-6 text_content">
              <p>
                -- I was a Customer Service Representative for 8 years and
                developed skills in multitasking, attention to details, and
                problem solving. I set time everyday to learn coding and improve
                my knowledge and coding skills. I am always excited to learn new
                things and enthusiastic about challenging and more complicated
                tasks or projects.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SkillsPage;
