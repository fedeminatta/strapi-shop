import { makeRequest } from '../makeRequest';
import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const apiToken = import.meta.env.VITE_API_TOKEN;
        const fetchData = async () => {
            try {
                setLoading(true);
                const result = await makeRequest.get(url);
                setData(result.data.data);
            } catch (error) {
                setError(true);
            }
            setLoading(false);
        };
        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
