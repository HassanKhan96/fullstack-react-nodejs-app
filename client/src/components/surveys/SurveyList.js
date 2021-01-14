import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
    componentDidMount(){
        this.props.fetchSurveys()
    }

    renderList(){
        return this.props.surveys.map(survey => {
            return (
                <div className="card darken-1 blue-grey" key={survey._id}>
                    <div className="card-content">
                        <span className="card-title white-text">{survey.title}</span>
                        <p className="white-text">{survey.body}</p>
                        <p className="right white-text">{new Date(survey.dateSent).toLocaleDateString()}</p>
                    </div>
                    <div className="card-action">
                        <a>Yes: {survey.yes}</a>
                        <a>No: {survey.no}</a>
                    </div>
                </div>
            );
        })
    }

    render(){
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProp = ({ surveys }) => {
    return { surveys };
}

export default connect(mapStateToProp, { fetchSurveys })(SurveyList);