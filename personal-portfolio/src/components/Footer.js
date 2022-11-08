import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
          <h1 className="logoName">Arlind's</h1>
            <span className="logoSpan">PORTFOLIO</span>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href={"https://linkedin.com/in/arlind-aliu-393a88204"} target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href={"https://facebook.com/arlindaliu123"} target='_blank'><img src={navIcon2} alt="Icon" /></a>
              <a href={"https://instagram.com/arlindaliuu"} target='_blank'><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
