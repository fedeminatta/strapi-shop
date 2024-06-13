import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;
const authorization = import.meta.env.VITE_API_TOKEN;

export const makeRequest = axios.create({
	baseURL: baseURL,
	headers: {
		Authorization: 'bearer ' + authorization,
	},
});
