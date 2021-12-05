/** @format */

import { useState } from 'react';

const InputField = () => {
  const [date, setDate] = useState('');
  const [number, setNumber] = useState('');
  const [message, SetMessage] = useState('');
  const [status, SetStatus] = useState(false);

  const checkLucky = (birthday, luckyNumber) => {
    birthday = Number(birthday.split('-').join(''));
    let sumOfDigits = 0;

    while (birthday) {
      sumOfDigits += birthday % 10;
      birthday = Math.floor(birthday / 10);
    }

    if (sumOfDigits % luckyNumber === 0) {
      SetMessage('🥳🥳 Wohoo!! Your birthday is lucky');
      SetStatus(true);
    } else {
      SetMessage('🥺🥺 Seems like your birthday is not that lucky');
      SetStatus(false);
    }
  };

  return (
    <div className="mt-10">
      <div>
        <label htmlFor="date" className="text-xl font-mono">
          Choose your birthdate
        </label>
        <br />
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-96 p-2 cursor-pointer outline-none border border-purple-700 rounded-md text-gray-500 mt-2"
        />
      </div>

      <div className="mt-6">
        <label htmlFor="number" className="text-xl font-mono">
          What is you lucky number
        </label>
        <br />
        <input
          type="number"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-96 p-2 cursor-pointer outline-none border border-purple-700 rounded-md text-gray-500 mt-2"
        />
      </div>

      <button
        onClick={() => checkLucky(date, number)}
        className="mt-4 border border-purple-500 px-5 py-2 rounded-md cursor-pointer hover:text-white hover:bg-purple-500"
      >
        Check
      </button>
      <div
        className={`text-2xl mt-3 ${
          status ? `text-green-500` : `text-red-500`
        }`}
      >
        {message && message}
      </div>
    </div>
  );
};

export default InputField;
