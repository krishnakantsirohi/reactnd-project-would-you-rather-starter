import React, {Component} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Answered from "./Answered";
import HomeNav from "./HomeNav";
import Unanswered from "./Unanswered";

class Home extends Component{
    render() {
        return (
            <Router>
                <HomeNav/>
                <Route path='/answered' component={Answered}/>
                <Route path='/unanswered' component={Unanswered}/>
            </Router>
        )
    }
}

export default Home;