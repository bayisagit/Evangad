import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__icons">
                    <FacebookOutlinedIcon />
                    <InstagramIcon />
                    <YouTubeIcon />
                </div>
                <div className="footer__nav">
                    <div>
                        <ul>
                            <li>Audio Description</li>
                            <li>Investor Relations</li>
                            <li>Legal Notice</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Help Center</li>
                            <li>Jobs</li>
                            <li>Cookie Preference</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Gift Cards</li>
                            <li>Terms of Use</li>
                            <li>Corporate Information</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Media Center</li>
                            <li>Privacy</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__serviceCode">
                    <p>Service Code</p>
                </div>
                <div className="footer__copyWrite">
                    <span>&copy; 1997 - 2024 Netflix, Inc.</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;