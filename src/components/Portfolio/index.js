import React from 'react';
import Container from 'react-bootstrap/Container';
import stock from '../../assets/photos/stocks.jpg';
import fantasyTeam from '../../assets/photos/fantasy-team.jpg';
import reddit from '../../assets/photos/reddit.jpg';

function Portfolio() {

    return (
        <section>
            <Container className='justify-content-center mt-5'>
                <h3 className='project-title text-center'>Stock Dashboard Project</h3>
                <div className='project'>
                    <a href="https://stock-news-dashboard.herokuapp.com/" target="_blank" class='project-link'>
                        <img src={stock} style={{ width: "auto", height: "300px" }} alt='stock project' className='img-responsive center-block' />
                    </a>
                </div>
                <p class='project-description'>Ongoing side project to create a stock dashboard. I have noticed that lately stock movement is based largely on news 
                    traffic and sentiment with the level of access everyone now has to the market. My goal with this dashboard is to capture
                    trends and predict potential movers. This is mainly a front end application using JavaScript to make API calls, but I intend
                    to add back end functionality for saving price values and historical data to reach more accurate predictions.
                </p>
            </Container>
            <Container className='justify-content-center mt-5'>
                <h3 className='project-title text-center'>Reddit Stock Tracker</h3>
                <div className='project'>
                    <a href="https://github.com/KaleTEvans/reddit-stock-tracker" target="_blank" class='project-link'>
                        <img src={reddit} style={{ width: "auto", height: "300px" }} alt='reddit project' />
                    </a>
                </div>
                <p class='project-description'>This is another ongoing side project I have been working on built with NodeJs and mySQL. The purpose of this program is to pull data from the reddit API, specifically from
                    the WallStBets forum, and search for traffic on different stocks. I started working on this because I wanted to experiment with creating a search engine,
                    with the future possibility of creating my own APIs for the above stock project that have been personalized to give me the data I specifically want. 
                    As of right now, the app is very limited, and only scans the title of the hot posts on the forum for ticker symbols, and uses a node sentiment analyzer 
                    package (that does not understand reddit lingo very well) to rate the sentiment of the title, and uploads this data to an SQL database where I am able
                    to manipulate and visualize the outcomes. I plan to add several upgrades in the future to make a cleaner and broader search and sentiment scorer, but getting
                    the foundations has allowed me to learn a lot about how sentiment trackers like the Stock News API I have used in my stock project work. 
                </p>
            </Container>
        </section>
    )

}

export default Portfolio;