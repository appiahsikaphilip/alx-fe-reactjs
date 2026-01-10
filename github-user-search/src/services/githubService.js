import axios from 'axios';

// 1. Function name must be fetchUserData
// 2. Must use the specific endpoint: https://api.github.com/users/{username}
// 3. Must use axios
export const fetchUserData = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
};