import { useState, useEffect } from "react";

export default function CurrencyDropdown({ value, onChange }) {
    const [currencies, setCurrencies] = useState({});

    useEffect(() => {
        fetch("https://api.frankfurter.dev/v1/currencies")
            .then(response => response.json())
            .then(data => setCurrencies(data));
    }, []);

    return (
        <div className="input-group">
            <select value={value} onChange={onChange} className="form-control">
                <option value="">Select Currency</option>
                {Object.entries(currencies).map(([code, name]) => (
                    <option key={code} value={code}>
                        {code} - {name}
                    </option>
                ))}
            </select>
        </div>
    );
}
