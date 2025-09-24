import { useEffect, useState } from "react";

export function UseFetch(url) {
    const [finalData, setFinalData] = useState({});
    const [loading,setLoading]=useState(true)

    async function getDetails() {
        const response = await fetch(url);
        const data = await response.json();
        setFinalData(data)
        setLoading(false)
    }
    useEffect(() => {
        getDetails()
    }, [url])

    return {
        finalData,
        loading
    }
}