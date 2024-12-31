import { useState } from 'react';
import './App.css';
import InputBox from './components/Input';

function App() {
  const [amountValue, setAmountValue] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');

  const convertCurrency = () => {
    fetch(
      `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ALY49Gwa7ccO0hdp4nLDePS91T0etyZ5B1W3VntZ&base_currency=${fromCurrency}&currencies=${toCurrency}`
    )
      .then((res) => res.json())
      .then((data) => {
        setConvertedAmount((data.data[toCurrency] * amountValue).toFixed(2));
      });
  };

  const handleAmountChange = (value) => {
    setAmountValue(value);
  };
  const handleFromChange = (value) => {
    setFromCurrency(value);
  };
  const handleToChange = (value) => {
    setToCurrency(value);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-dvh bg-[#FFF5E1]">

        <h1 className='text-4xl font-bold mb-3'>Currency Converter</h1>

        <div className="flex flex-col items-center justify-center bg-[#FF6969] rounded-lg p-5">
          <InputBox
            onAmountChange={handleAmountChange}
            onCurrencyChange={handleFromChange}
            currencyProp={fromCurrency}
          />
          <button
            onClick={convertCurrency}
            className="px-4 py-2 bg-[#10215e] text-white font-semibold rounded-lg shadow-md hover:bg-[#081131] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition"
          >
            Convert
          </button>
          <InputBox onCurrencyChange={handleToChange} convertedAmount={convertedAmount} currencyProp={toCurrency}/>
        </div>
      </div>
    </>
  );
}

export default App;
