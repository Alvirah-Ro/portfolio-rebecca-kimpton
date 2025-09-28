import { useState, useEffect } from "react";

export default function Convert({ from, to, amount }) {
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        if (!from || !to || !amount) {
            setConvertedAmount(null);
            setErrorMsg(null);
            return;
        }
        fetch(`https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`)
            .then(response => response.json())
            .then(data => {
                const rate = data.rates[to];
                if (rate) {
                    setConvertedAmount((amount * rate).toFixed(2));
                    setErrorMsg(null);
                } else {
                    setConvertedAmount(null);
                    setErrorMsg("Conversion rate not found.");
                }
            })
            .catch(() => {
                setConvertedAmount(null);
                setErrorMsg("Error fetching exchange rates.");
            });
    }, [from, to, amount]);

    return (
        <div>
            <h2>
                {errorMsg
                    ? errorMsg
                    : convertedAmount
                        ? `${amount.toFixed(2)} ${from} is approximately ${convertedAmount} ${to}`
                        : "Enter values to see conversions"}
            </h2>
        </div>
    );
}
