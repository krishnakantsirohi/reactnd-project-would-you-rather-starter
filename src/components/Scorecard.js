import React, {Component} from "react";
import {connect} from "react-redux";

class Scorecard extends Component {
    render() {
        const {user} = this.props;
        return (
            <div>
                <div className='container'>
                    <img
                        src={user.avatarURL}
                        alt={`Avatar of ${user.name}`}
                        className='avatar'
                    />
                    <span className='vline'/>
                    <span className='user-stats'>
                        <h3>{user.name}</h3>
                        <p>Answered Questions: {Object.keys(user.answers).length}</p>
                        <p>Created Questions: {user.questions.length}</p>
                    </span>
                    <div className='scorebox'>
                        <div className='scorebox-title'>
                            <h4>Score</h4>
                        </div>
                        <div className='circle'>
                            {Object.keys(user.answers).length+user.questions.length}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}, {id}) {
    return {
        user: users[id],
    }
}

export default connect(mapStateToProps)(Scorecard)