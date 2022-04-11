import "./myfooter.css";
import { Container } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Container id="footer-wrapper" className="pt-2">
      <footer>
       
         <h6>Job Search Application</h6>
          <div id="content-wrapper">
            <p>Made with Love by Ana Matei</p>
            <i class="bi bi-heart-fill"></i>
            
          </div>
          <p>©{new Date().getFullYear()}</p>
      </footer>
    </Container>
  );
};

export default MyFooter;
