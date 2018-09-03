import api from 'superagent-wrapper';
import { GET_BEER_LIST_URL } from '../constants/endpoints';

export const fetchBeerList = food => api.get(`${GET_BEER_LIST_URL}?food=${food}`);
