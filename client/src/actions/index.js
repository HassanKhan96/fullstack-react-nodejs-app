import axios from 'axios';
import { FETCH_USER } from './types';

export const authCheck = () =>  async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data});
        
}

export const getStripeToken = token => async dispatch => {
    const res = await axios.post('api/stripe_handler', token);
    dispatch({ type: FETCH_USER, payload: res.data});
}

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);
    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data});
}