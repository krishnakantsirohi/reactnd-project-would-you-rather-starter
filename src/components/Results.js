import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class Results extends Component{
    componentDidMount() {
        const {questions, authedUser} = this.props;
        const question = questions[this.props.location.state.id];
        const vote1 = question.optionOne.votes.length;
        const vote2 = question.optionTwo.votes.length;

        if (vote1>=vote2){
            document.getElementById('optionOneVotes').className = 'votes-color';
            document.getElementById('optionTwoVotes').className = 'votes';
        } else {
            document.getElementById('optionOneVotes').className = 'votes';
            document.getElementById('optionTwoVotes').className = 'votes-color';
        }

        if (question.optionOne.votes.includes(authedUser)){
            document.getElementById('badgeOptionOne').style.display = 'flex';
        } else {
            document.getElementById('badgeOptionTwo').style.display = 'flex';
        }
    }

    render() {
        const {authedUser, users, questions} = this.props;
        const question = questions[this.props.location.state.id];
        const author = users[question.author];
        const user = users[authedUser]
        const vote1 = question.optionOne.votes.length;
        const vote2 = question.optionTwo.votes.length;
        const total = vote1 + vote2;

        return(
            <div className='container'>
                <div className='question-box'>
                    <div className='question-box-author'>
                        <h3>
                            Added by {author.name}
                        </h3>
                    </div>
                    <div className='results-info'>
                        <img
                            src={user.avatarURL}
                            alt={`Image of ${user.name}`}
                            className='avatar'
                        />
                        <div>
                            <h3>Results</h3>
                            <div className='votes' id='optionOneVotes'>
                                <div className='badge-optionOne' id='badgeOptionOne'>Your vote</div>
                                <p>Would you rather {question.optionOne.text}?</p>
                                <div className='progress-bar'>
                                    <div style={{width: (vote1/total)*100+'%'}}/>
                                </div>
                                <p>{vote1} out of {total} votes</p>
                            </div>
                            <br/>
                            <div className='votes' id='optionTwoVotes'>
                                <div className='badge-optionTwo' id='badgeOptionTwo'>Your vote</div>
                                <p>Would you rather {question.optionTwo.text}?</p>
                                <div className='progress-bar'>
                                    <div style={{width: (vote2/total)*100+'%'}}/>
                                </div>
                                <p>{vote2} out of {total} votes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps({authedUser, questions, users}) {
    return{
        authedUser: authedUser,
        questions: questions,
        users: users,
    }
}


export default withRouter(connect(mapStateToProps)(Results));