import { useState, useEffect } from "react";

function useFetch(url) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {

        try {
            const response = await fetch(url);
            const results = await response.json();

            if (response.ok) {
                setData(results.data);
            }

        }
        catch (error) {
            console.log(error)
            setError("Failed to fetch, Pleae try again")

        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchData();

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 500)

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return {
        data, loading, error
    }

}

export default useFetch