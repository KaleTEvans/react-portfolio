import React from 'react';
import Container from 'react-bootstrap/Container';
import stock from '../../assets/photos/stocks.jpg';
import fantasyTeam from '../../assets/photos/fantasy-team.jpg';
import reddit from '../../assets/photos/reddit.jpg';

function Portfolio() {

    return (
        <section>
            <Container className='justify-content-center'>
                <h3 className='project-title text-center'>Stock Dashboard Project</h3>
                <div className='project'>
                    <a href="https://stock-news-dashboard.herokuapp.com/" target="_blank" class='project-link'>
                        <img src={stock} style={{ width: "100%" }} alt='stock project' />
                    </a>
                </div>
            </Container>
        </section>
    )

}

export default Portfolio;