import { useState } from "react";

export default function Discount() {
    const [amount, setAmount] = useState("");
    const [discount, setDiscount] = useState("");
    const discountedAmount = amount - (amount * (discount / 100));    

    return (
        <div className="container">
            <form>
                <label htmlFor="amount">Amount:</label>
                <input className="form-control"
                        type="number"
                        id="amount"
                        value={amount}
                        step="0.01"
                        onChange={(e) => setAmount(e.target.value)}
                />
                <label htmlFor="discount">Discount Percent:</label>
                <input className="form-control"
                        type="number"
                        id="discount"
                        value={discount}
                        step="1"
                        onChange={(e) => setDiscount(e.target.value)}
                />
                <h2>
                    {discount
                        ? `After a discount of ${discount}%, the amount is approximately ${discountedAmount.toFixed(2)}`
                        : "No discount applied"}
                </h2>
            </form>
        </div>
    );
}