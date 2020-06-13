import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {handleInitialData} from "../actions/shared";
import NewQuestion from "./NewQuestion";
import {LoadingBar} from "react-redux-loading";
import Nav from './Nav';
import LeaderBoard from "./LeaderBoard";
import '../index.css';
import Home from "./Home";
import Vote from "./Vote";
import Results from "./Results";

class App extends Component{
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <Nav/>
                    <div className='main'>
                        {this.props.loading === true
                            ? null
                            : <div>
                                <Route exact path='/' component={Home}/>
                                <Route path='/new' component={NewQuestion}/>
                                <Route path='/leaderboard' component={LeaderBoard}/>
                                <Route path='/vote' component={Vote}/>
                                <Route path='/results' component={Results}/>
                            </div>}
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        loading: authedUser === null,
    }
}

export default connect(mapStateToProps)(App)