import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';

const FIELDS = [
    { label: 'Survey Title', name: 'title' },
    { label: 'Subject Line', name: 'subject' },
    { label: 'Email body', name: 'body' },
    { label: 'Recipients', name: 'emails' },

];

class SurveyFrom extends Component {

    renderFields() {
        return FIELDS.map(({ label, name }) => {
            return <Field
                key={name}
                type='text'
                component={SurveyField}
                label={label}
                name={name}
            />
        })

    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <Link to='/surveys' className='red left btn-flat white-text'>
                        Cancel
                    </Link>
                    <button type='submit' className='teal right btn-flat white-text'>
                        Next
                        <i className='material-icons right'>done</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values){
    const errors = {};

    if(!values.title){
        errors.title = 'You must provide a title!';
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'SurveyFrom'
})(SurveyFrom);