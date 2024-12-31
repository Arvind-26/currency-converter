import React, { useState } from 'react';
import useCurrencyChange from '../hooks/useCurrencyChange';

const InputBox = ({ onAmountChange, onCurrencyChange, convertedAmount, currencyProp }) => {
    const currencyName = useCurrencyChange();
    const [currency, setCurrency] = useState(currencyProp);
    const [amount, setAmount] = useState(0);

    const handleAmountChange = (e) => {
        try {
            onAmountChange(e.target.value);
            setAmount(e.target.value);
        } catch (error) {

        }
    };

    const handleCurrencyChange = (e) => {
        const selectedCurrency = e.target.value;
        setCurrency(selectedCurrency);
        onCurrencyChange(selectedCurrency);
    };

    return (
        <div className="flex items-center justify-center gap-5 rounded-lg p-3">
            <div>
                <select
                    value={currency}
                    className="rounded-full p-2 h-10 bg-[#fff5e1a6] shadow-md"
                    onChange={handleCurrencyChange}
                >
                    {currencyName.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <input
                    onChange={handleAmountChange}
                    className="rounded-full p-2 h-10 bg-[#fff5e1a6] text-black shadow-md placeholder-gray-600"
                    min={0}
                    type="number"
                    name="amount"
                    id="amount"
                    placeholder="amount"
                    value={convertedAmount || amount}
                />
            </div>
        </div>
    );
};

export default InputBox;
