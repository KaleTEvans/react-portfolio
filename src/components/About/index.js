import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import selfPortrait from '../../assets/photos/self-portrait.jpg';

function About(props) {

    return (
        <section>
            <Container className='jumbo'>
                <h3 className='text-center'>Hi! My name is Kale Evans. I am a Full Stack Developer with a background in Aerospace and Systems Engineering, looking to work in the Austin, Texas area.</h3>
            </Container>
            <Container>
                <h3 className='about-title'>About Me</h3>
                <Row>
                    <Col>
                        <img src={selfPortrait} style={{ width: "100%" }} alt='self portrait' />
                    </Col>
                    <Col xs={8}>
                        <p className='about-text'>
                            Currently, I work as a Systems Engineer for the Boeing Company. I graduated from the University of Oklahoma in 2019
                            with a Bachelor's degree in Aerospace Engineering, and have been in Oklahoma for some time now. Being originally from 
                            Texas, I am looking to move back to the Austin area. After working in the Aerospace industry for two years now, I felt
                            like I wanted to make a change and try something new. I enrolled in the University of Texas web developer bootcamp to give 
                            Software Development a try, and realized I thoroughly enjoyed it. I've decided to pursue a new career in Software Engineering,
                            and hope I can bring a unique perspective to the table! Outside of my professional life, I enjoy traveling to the mountains 
                            for skiing, playing video games, and learning about all the possibilities of software development.   
                        </p>
                    </Col>
                </Row>
                <h3 className='about-title mt-3 text-right'>Skills and Interests</h3>
                <Row>
                    <Col xs={10}>
                        <p className='about-text'>
                            As a Full Stack Developer I have a wide range of knowledge in JavaScript, CSS, and HTML. While in college, I also had
                            experience working with C++ to design embedded systems, using methods such as state machines. I also have proficiency
                            working with SQL, noSQL, and REST API databases. My interests lie mostly in back end development, working with data and
                            algorithms using mostly Node.Js, but I've started to try and get into using C++ as well to refresh myself on the language. 
                            Coming from a background in Systems Engineering at Boeing, I also have a background in working with system architecture, 
                            collaborating across multiple teams, and communicating technical details to the customer. 
                        </p>
                    </Col>
                    <Col>
                    <div class='row justify-content-center'>
                        <div class='sw html'>
                            <img src="https://img.icons8.com/color/48/000000/html-5--v1.png"/>
                        </div>
                        <div class='sw css'>
                            <img src="https://img.icons8.com/color/48/000000/css3.png"/>
                        </div>
                        <div class='sw js'>
                            <img src="https://img.icons8.com/color/48/000000/javascript.png"/>
                        </div>
                    </div>
                    <div class='row justify-content-center'>
                        <div class='sw sql'>
                            <img src="https://img.icons8.com/ios-filled/50/000000/sql.png"/>
                        </div>
                        <div class='sw node'>
                            <img src="https://img.icons8.com/color/48/000000/nodejs.png"/>
                        </div>
                        <div class='sw git'>
                            <img src="https://img.icons8.com/fluent/48/000000/github.png"/>
                        </div>
                    </div>
                    <div class='row justify-content-center'>
                        <div class='sw vs'>
                            <img src="https://img.icons8.com/color/48/000000/visual-studio.png"/>
                        </div>
                        <div class='sw excel'>
                            <img src="https://img.icons8.com/fluent/48/000000/microsoft-excel-2019.png"/>
                        </div>
                        <div class='sw cplus'>
                            <img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"/>
                        </div>
                    </div>
                </Col>
                </Row>
            </Container>
        </section>
    )

}

export default About;