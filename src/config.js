import axios from 'axios';

export const listData = async (url, header = {}) => {
    try {
        const response = await axios.get(
            url,
            {
                headers: {
                    'Accept': 'application/json',
                    ...header
                }
            },
        )
        return response
    } catch (error) {
        console.error('Error fetching coins:', error);
        return error
    }
}