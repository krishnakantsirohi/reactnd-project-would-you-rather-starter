import React from "react";
import {NavLink} from "react-router-dom";
import '../index.css';

export default function Nav() {
    return (
        <nav className='sub-nav container'>
            <ul>
                <li>
                    <NavLink to='/answered' exact activeClassName='active'>
                        Answered Questions
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/unanswered' activeClassName='active'>
                        Unanswered Questions
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}