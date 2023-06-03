import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function BmiForm() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bmi = calculateBmi(weight, height);
    const status = calculateStatus(bmi);
    const result = { weight, height, bmi, status };
    navigate.push({
      pathname: '/result',
      state: { result },
    });
  };

  const calculateBmi = (weight, height) => {
    const bmi = weight / ((height / 100) * (height / 100));
    return bmi.toFixed(2);
  };

  const calculateStatus = (bmi) => {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}

export default BmiForm;