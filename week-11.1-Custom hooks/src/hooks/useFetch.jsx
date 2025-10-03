import { use, useEffect, useState } from "react";

export function UseFetch(url, retrytime) {
    const [finalData, setFinalData] = useState({});
    const [loading, setLoading] = useState()

    async function getDetails() {
        setLoading(true)
        const response = await fetch(url);
        const data = await response.json();
        setFinalData(data)
        setLoading(false)
    }
    useEffect(() => {
        getDetails()
    }, [url])

    useEffect(() => {
        console.log("console from inside the clock")
        let interval = setInterval(getDetails, retrytime * 1000);

        return () => clearInterval(interval)
    }, [url])
    return {
        finalData,
        loading
    }
}


