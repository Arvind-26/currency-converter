import { useEffect, useState } from "react"

const useCurrencyChange = () => {
    const [currencyName, setCurrencyName] = useState([])
    useEffect(() => {
    fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ALY49Gwa7ccO0hdp4nLDePS91T0etyZ5B1W3VntZ")
        .then((res) => res.json())
        .then((data) => {
            setCurrencyName(Object.keys(data.data))
        })
    },[])
    return currencyName
}

export default useCurrencyChange