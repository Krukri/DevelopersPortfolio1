import { Link } from "react-router-dom";
import "../css/Design.css";
import { Container } from "react-bootstrap";
const ContactInformation = () => {
  let style_border = {
    border: "solid var(--contrast) 4px",
    borderRadius: "40px",
  };
  let mytextStyled = {
    color: "var(--contrast)",
  };
  return (
    <div>
      <div className="contact_page">
        <div className="contact_vector_left">
          <div className="contact_vector1"></div>
          <div className="contact_vector2"></div>
        </div>
        <Container style={style_border}>
          <div className="contact_page_wrapper">
            <div className="contact_content_wrapper">
              <div className="col-6 contact_content">
                <h1>Contact me here: </h1>
              </div>
            </div>
            <div className="next_button">
              <Link to="/Home">
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
        </Container>
      </div>
    </div>
  );
};

export default ContactInformation;
