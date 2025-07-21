import React from 'react'
import "./header.css"
import netflix_log from '../../assets/images/netflixlogo.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Header() {
    return (
        <div className="header_outer_container fluid-container text-white">
            <div className="header_container row">
                <div className="header_left col-9">
                    <ul className="row list-unstyled">
                        <li className="col">
                            <img
                                src={netflix_log}
                                alt="Netflix logo"
                                width="100"
                            />
                        </li>

                        <li className="col">Home</li>
                        <li className="col">TVShows</li>
                        <li className="col">Movies</li>
                        <li className="col">Latest</li>
                        <li className="col">MyList</li>
                        <li className="col">Browse by Languages</li>
                    </ul>
                </div>
                <div className="header_right row col-3">
                    <ul className="row list-unstyled">
                        <li className="col">
                            <SearchIcon />
                        </li>
                        <li className="col">
                            <NotificationsNoneIcon />
                        </li>
                        <li className="col">
                            <AccountCircleIcon />
                        </li>
                        <li className="col">
                            <ArrowDropDownIcon />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );

}