import React from 'react';

const SurveyField = ({ input, label }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} placeholder={label}/>
        </div>
    );
}

export default SurveyField;