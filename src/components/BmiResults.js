import React from 'react';

function BmiResult({ location }) {
  const { result } = location.state;

  return (
    <div>
      <h2>BMI Result</h2>
      <p>Weight: {result.weight} kg</p>
      <p>Height: {result.height} cm</p>
      <p>BMI: {result.bmi}</p>
      <p>Status: {result.status}</p>
    </div>
  );
}

export default BmiResult;