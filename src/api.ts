import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const searchMoviesByKeyword = async (keyword: string) => {
    const response = await axios.get(`${API_URL}/search`, {
        params: { keyword }
    });
    return response.data;
};

export const getGenres = async () => {
    const response = await axios.get(`${API_URL}/genres`);
    return response.data;
};

export const searchMoviesByGenres = async (genres: string[]) => {
    const response = await axios.post(`${API_URL}/searchByGenres`, { genres });
    return response.data;
};
