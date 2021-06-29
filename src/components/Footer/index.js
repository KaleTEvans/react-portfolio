import React from 'react';

function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='links linkedin'>
                        <a href="https://www.linkedin.com/in/kaletevans/" target="_blank" className='linkedin-link'>
                            <img src="https://img.icons8.com/fluent/48/000000/linkedin.png"/>
                        </a>
                    </div>
                    <div className='links github'>
                        <a href="https://www.github.com/KaleTEvans" target="_blank" className="github-link">
                            <img src="https://img.icons8.com/fluent/48/000000/github.png"/>
                        </a>
                    </div>
                </div>
                <p className='text-center'>Copyright Kale Evans 2021</p>
            </div>
        </footer>
    )
}

export default Footer;