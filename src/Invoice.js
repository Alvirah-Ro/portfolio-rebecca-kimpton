import Convert from './Convert';
import CurrencyDropdown from './CurrencyDropdown';
import { useState } from 'react';

export default function Invoice() {
    const [amount, setAmount] = useState("");
    const [discount, setDiscount] = useState("0");
    const [fromCurrency, setFromCurrency] = useState("EUR");
    const [toCurrency, setToCurrency] = useState("USD");

    const discountedAmount =
        amount && discount
            ? Number(amount) - (Number(amount) * (Number(discount) / 100))
            : 0;

    return (
        <div className="container">
            <form>
                <h1 className="m-3 p-3 text-center rebecca">Currency Conversions for Invoices</h1>
                <div className="container mx-auto p-4 justify-content-center lavender rebeccaBackground" style={{ maxWidth: "720px" }}>
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
                        <label htmlFor="discount">Discount Percent:</label>
                        <div className="input-group">
                            <input className="form-control"
                                type="number"
                                id="discount"
                                value={discount}
                                step="1"
                                min="0"
                                max="100"
                                onChange={(e) => setDiscount(e.target.value)}
                            />
                        </div>
                        <div className="mt-3">
                            <h2>
                                {Number(discount) > 0
                                ? `Discounted Amount: ${discountedAmount.toFixed(2)} ${fromCurrency}`
                                : ""
                                }
                            </h2>
                            <h5 className="py-1">Converting {discountedAmount} {fromCurrency} to {toCurrency}.</h5>
                            <Convert from={fromCurrency} to={toCurrency} amount={discountedAmount} />

                        </div>
                    </div>
                </div>
            </form >
        </div >
    );
}