import React from "react";
import {NavLink} from "react-router-dom";
import '../index.css';

export default function Nav() {
    return (
        <div className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact
                             activeClassName='active'
                             >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/new' exact activeClassName='active'>
                        New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard' exact activeClassName='active'>
                        Leader Board
                    </NavLink>
                </li>
            </ul>
            <span className='hline'/>
        </div>
    );
}