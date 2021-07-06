import React from 'react';
import Container from 'react-bootstrap/Container';
import stock from '../../assets/photos/stocks.jpg';
import fantasyTeam from '../../assets/photos/fantasy-team.jpg';
import reddit from '../../assets/photos/reddit.jpg';
import techNews from '../../assets/photos/tech-news.jpg';
import comingSoon from '../../assets/photos/coming-soon.jpg';

function Portfolio() {

    return (
        <section>
            <Container className='justify-content-center mt-5'>
                <h3 className='project-title text-center'>Stock Dashboard Project</h3>
                <div className='project justify-content-center'>
                    <a href="https://stock-news-dashboard.herokuapp.com/" target="_blank" class='project-link'>
                        <img src={stock} style={{ width: "75%", height: "auto" }} alt='stock project' className='img-responsive center-block' />
                    </a>
                </div> 
                <div className='project-description'>
                    <p class='text-center' style={{ width: "75%" }}>Ongoing side project to create a stock dashboard. I have noticed that lately stock movement is based largely on news 
                        traffic and sentiment with the level of access everyone now has to the market. My goal with this dashboard is to capture
                        trends and predict potential movers. This is mainly a front end application using JavaScript to make API calls, but I intend
                        to add back end functionality for saving price values and historical data to reach more accurate predictions.
                        The project's GitHub can be found <a href="https://github.com/KaleTEvans/stocksV2" target='_blank'>here</a>
                    </p>
                </div>
            </Container>
            <Container className='justify-content-center mt-5'>
                <h3 className='project-title text-center'>Reddit Stock Tracker</h3>
                <div className='project'>
                    <a href="https://github.com/KaleTEvans/reddit-stock-tracker" target="_blank" class='project-link'>
                        <img src={reddit} style={{ width: "75%", height: "auto" }} alt='reddit project' />
                    </a>
                </div>
                <div className='project-description'>
                    <p class='text-center' style={{ width: "75%" }}>This is another ongoing side project I have been working on built with NodeJs and mySQL. The purpose of this program is to pull data from the reddit API, specifically from
                        the WallStBets forum, and search for traffic on different stocks. I started working on this because I wanted to experiment with creating a search engine,
                        with the future possibility of creating my own APIs for the above stock project that have been personalized to give me the data I specifically want. 
                        As of right now, the app is very limited, and only scans the title of the hot posts on the forum for ticker symbols, and uses a node sentiment analyzer 
                        package (that does not understand reddit lingo very well) to rate the sentiment of the title, and uploads this data to an SQL database where I am able
                        to manipulate and visualize the outcomes. I plan to add several upgrades in the future to make a cleaner and broader search and sentiment scorer, but getting
                        the foundations has allowed me to learn a lot about how sentiment trackers like the Stock News API I have used in my stock project work. 
                    </p>
                </div>           
            </Container>
            <Container className='justify-content-center mt-5'>
                <h3 className='project-title text-center'>Fantasy Sports Team Website</h3>
                <div className='project'>
                    <a href="https://fantasy-team-builder.herokuapp.com/" target="_blank" class='project-link'>
                        <img src={fantasyTeam} style={{ width: "75%", height: "auto" }} alt='fantasy sports team' />
                    </a>
                </div>
                <div className='project-description'>
                    <p class='text-center' style={{ width: "75%" }}>
                    This is from a group project done with the University of Texas Web Developer Boot Camp. The project requirements were to create a full stack 
                    application, using nodeJs and mySQL for the back end and database, and handlebars for the generated front end. The project was completed using 
                    GitHub version control to ensure updates to the code were made smoothly. The project's GitHub can be found <a href="https://github.com/jshmtchll/fantasy-team-roster">here</a>
                    </p>
                </div>           
            </Container>
            <Container className='justify-content-center mt-5'>
                <h3 className='project-title text-center'>Just Tech News Blog</h3>
                <div className='project'>
                    <a href="https://afternoon-hamlet-39621.herokuapp.com/" target="_blank" class='project-link'>
                        <img src={techNews} style={{ width: "75%", height: "auto" }} alt='just tech news' />
                    </a>
                </div>
                <div className='project-description'>
                    <p class='text-center' style={{ width: "75%" }}>
                        This is a full stack application for a tech blog created using NodeJs and MySQL along with sequelize for the back end. 
                        The project's GitHub can be found <a href='https://github.com/KaleTEvans/just-tech-news'>here</a>
                    </p>
                </div>           
            </Container>
            <Container className='justify-content-center mt-5'>
                <h3 className='project-title text-center'>Other Projects are Currently Being Prepared</h3>
                <div className='project'>
                    <a href="/" target="_blank" class='project-link'>
                        <img src={comingSoon} style={{ width: "75%", height: "auto" }} alt='coming soon' />
                    </a>
                </div>          
            </Container>
            <Container className='justify-content-center mt-5'>
                <h3 className='project-title text-center'>Other Projects are Currently Being Prepared</h3>
                <div className='project'>
                    <a href="/" target="_blank" class='project-link'>
                        <img src={comingSoon} style={{ width: "75%", height: "auto" }} alt='coming soon' />
                    </a>
                </div>          
            </Container>
        </section>
    )

}

export default Portfolio;