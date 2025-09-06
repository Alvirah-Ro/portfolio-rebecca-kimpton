import Convert from './Convert';
import CurrencyDropdown from './CurrencyDropdown';
import { useState } from 'react';

export default function Invoice() {
    const [amount, setAmount] = useState("");
    const [fromCurrency, setFromCurrency] = useState("EUR");
    const [toCurrency, setToCurrency] = useState("USD");
    const [showResult, setShowResult] = useState(false);

    const handleConvert = (e) => {
        e.preventDefault();
        setShowResult(true);
    };

    return (
        <div className="container">
            <form onSubmit={handleConvert}>
                <h1 className="m-3 p-3 text-center rebecca">Currency Conversions for Invoices</h1>
                <div className="container-md mx-4 p-4 lavender rebeccaBackground">
                    <div className="d-flex align-items-center flex-wrap gap-2">
                        <label htmlFor="fromCurrency">From Currency:</label>
                        <CurrencyDropdown
                            id="fromCurrency"
                            value={fromCurrency}
                            onChange={(e) => setFromCurrency(e.target.value)}
                        />
                        <label htmlFor="toCurrency">To Currency:</label>
                        <CurrencyDropdown
                            id="toCurrency"
                            value={toCurrency}
                            onChange={(e) => setToCurrency(e.target.value)}
                        />
                                                <label htmlFor="amount">Amount:</label>
                        <div className="input-group">
                        <input className="form-control"
                            type="number"
                            id="amount"
                            value={amount}
                            step="0.01"
                            onChange={(e) => setAmount(e.target.value)}
                        />
                        </div>

                        <button type="submit" 
                                className="btn btn-info mt-3">
                            Convert
                        </button>
                    </div>
                </div>
            </form>
            <div className="container mt-5">
                <h1>Currency Conversion</h1>
                <p>Converting {amount} {fromCurrency} to {toCurrency}.</p>
                {showResult && (
                    <Convert from={fromCurrency} to={toCurrency} amount={amount} />
                )}
            </div>
        </div>
    );
}