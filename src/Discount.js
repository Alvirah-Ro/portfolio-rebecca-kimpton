export default function Discount({ amount, discount }) {
    const discountedAmount = amount - (amount * (discount / 100));
    return (
        <div>
            <h2>
                {discount
                    ? `After a discount of ${discount}%, the amount is approximately ${discountedAmount.toFixed(2)}`
                    : "No discount applied"}
            </h2>
        </div>
    );
}