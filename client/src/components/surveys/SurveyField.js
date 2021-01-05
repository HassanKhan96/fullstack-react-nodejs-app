import React from 'react';

const SurveyField = ({ input, label, meta: {error, touched}}) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} placeholder={label}/>
            {touched && error}
        </div>
    );
}

export default SurveyField;