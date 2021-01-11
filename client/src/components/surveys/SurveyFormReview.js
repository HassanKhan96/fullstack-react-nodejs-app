import React from 'react';
import { connect } from 'react-redux';
import FIELDS from './formFields';
import * as actions from '../../actions/index';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
    const fieldList = FIELDS.map(({label, name}) => {
        return <div key={name} style={{marginBottom: '20px'}}>
            <label>{label}</label>
            <div>{formValues[name]}</div>
        </div>
    })
    return (
        <div>
            <h1>Please confirm the review</h1>
            {fieldList}
            <button
                className='yellow darken-3 btn-flat'
                onClick={onCancel}
            >
                Go back
            </button>
            <button 
                onClick={() => submitSurvey(formValues)}
                className='btn-flat green white-text right'
            >
                Submit
                <i className='material-icons left'>email</i>
            </button>
        </div>
    );
}

function mapStateToProps(state){
    return { formValues: state.form.surveyForm.values};
}

export default connect(mapStateToProps, actions)(SurveyFormReview);