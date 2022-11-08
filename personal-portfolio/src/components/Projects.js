import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.PNG";
import projImg2 from "../assets/img/project-img2.PNG";
import projImg3 from "../assets/img/project-img3.PNG";
import projImg4 from "../assets/img/project-img4.PNG";
import projImg5 from "../assets/img/project-img5.PNG";
import projImg6 from "../assets/img/project-img6.PNG";
import projImg7 from "../assets/img/project-img7.PNG";
import projImg8 from "../assets/img/project-img8.PNG";
import projImg9 from "../assets/img/project-img9.PNG";
import projImg10 from "../assets/img/project-img10.PNG";
import projImg11 from "../assets/img/project-img11.PNG";
import projImg12 from "../assets/img/project-img12.PNG";
import projImg13 from "../assets/img/project-img13.PNG";
import projImg14 from "../assets/img/project-img14.PNG";
import projImg15 from "../assets/img/project-img15.PNG";
import projImg16 from "../assets/img/project-img16.PNG";
import projImg17 from "../assets/img/project-img17.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css'

export const Projects = () => {

  const project = [
    {
      title: "BuyTime E-Commerce",
      description: "Home",
      imgUrl: projImg1,
    },
    {
      title: "BuyTime E-Commerce",
      description: "Login",
      imgUrl: projImg2,
    },
    {
      title: "BuyTime E-Commerce",
      description: "Register",
      imgUrl: projImg3,
    },
    {
      title: "BuyTime E-Commerce",
      description: "Dashboard",
      imgUrl: projImg4,
    },
    {
      title: "BuyTime E-Commerce",
      description: "Contact Us",
      imgUrl: projImg5,
    },
    {
      title: "BuyTime E-Commerce",
      description: "Banner",
      imgUrl: projImg1,
    }
  ];
    //second project
    const project1 = [
    {
      title: "Food Service",
      description: "Home",
      imgUrl: projImg6,
    }
    ,
    {
      title: "Food Service",
      description: "Banner",
      imgUrl: projImg7,
    }
    ,
    {
      title: "Food Service",
      description: "Slider",
      imgUrl: projImg8,
    }
    ,
    {
      title: "Food Service",
      description: "Menu",
      imgUrl: projImg9,
    }
    ,
    {
      title: "Food Service",
      description: "Register for free",
      imgUrl: projImg10,
    }
    ,
    {
      title: "Food Service",
      description: "Contact Us & Footer",
      imgUrl: projImg11,
    }
  ];
      //third project
      const dropShippingProject = [
        {
          title: "Dropshipping Page",
          description: "Home Page",
          imgUrl: projImg12,
        }
        ,
        {
          title: "Dropshipping Page",
          description: "Shop",
          imgUrl: projImg13,
        }
        ,
        {
          title: "Dropshipping Page",
          description: "Product View",
          imgUrl: projImg14,
        }
        ,
        {
          title: "Dropshipping Page",
          description: "About Us",
          imgUrl: projImg15,
        }
        ,
        {
          title: "Dropshipping Page",
          description: "Category Selector",
          imgUrl: projImg16,
        }
        ,
        {
          title: "Dropshipping Page",
          description: "Chekckout View",
          imgUrl: projImg17,
        }
      ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <h2>Projects</h2>
                <p>Love to code. Love to waste time on doing projects made me a better coder. <br></br>
                I am presenting some projects that I have done during my short career as a programmer.
                 They are made for school projects, made during the course as Full-Stack Web Developer, and personal projects. You can see them in several different tabs as follows.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>Using Wordpress to create websites was my first step on the programming world. I made some projects earlier but the one who is more special
                      is my official Dropshipping website which is created by Wordpress and WoCommerce. This site is using AliDropship Plugin from which it recieves
                      the product data. You can also check the website clicking on <a href="https://purchasetime.net" target="_blank">this link</a> or you can see the 
                      photos of website down below.
                    </p>
                      <Row>
                        {
                          dropShippingProject.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>


                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <p> Improving my coding experience was doing and following Bootcamp 5 course projects which was a big step forward for me. The project in question was created by
                      HTML, Css and JavaScript. It is a website for selling food products. This project will be a real project for one of mine personal clients in the near future. </p>

                    <Row>
                        {
                          project1.map((project1, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project1}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>
                      Corresponding project is made on the third semester. It was an e-commerce website which I have finished implementing technologies that I have learned in school. The front-end is made by using HTML, CSS, JavaScript and 
                      back-end using PHP and SQL as a database. You can see some page examples down there.
                    </p>
                      <Row>
                        {
                          project.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
