import React from 'react';
import { connect } from 'react-redux';
import FIELDS from './formFields';

const SurveyFormReview = ({ onCancel, formValues }) => {
    const fieldList = FIELDS.map(({label, name}) => {
        return <div key={name}>
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
        </div>
    );
}

function mapStateToProps(state){
    return { formValues: state.form.surveyForm.values};
}

export default connect(mapStateToProps)(SurveyFormReview);