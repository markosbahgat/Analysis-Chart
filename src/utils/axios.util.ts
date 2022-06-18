// When we build a big project we can create an instance from axios to pass the props (like baseUrl, interceptor...etc) we need to it and export this instance to use it in our application instead of declaring the axios props everytime we need to request or fetch something.
import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default instance;
