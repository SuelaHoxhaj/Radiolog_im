import React, { useState } from 'react';

const RadiationCalculator = () => {
  const [ctCount, setCtCount] = useState(0);
  const [xrayCount, setXrayCount] = useState(0);
  const [mriCount, setMriCount] = useState(0);

  const calculateRisk = () => {
    const dose = ctCount * 7 + xrayCount * 0.1;
    let riskLevel = 'I ulët';
    if (dose > 50) riskLevel = 'I lartë';
    else if (dose > 20) riskLevel = 'Mesatar';

    return { dose, riskLevel };
  };

  const { dose, riskLevel } = calculateRisk();

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Radiologu Im</h1>
      <p>Numri i CT-ve: <input type="number" value={ctCount} onChange={e => setCtCount(+e.target.value)} /></p>
      <p>Numri i Rreze-X: <input type="number" value={xrayCount} onChange={e => setXrayCount(+e.target.value)} /></p>
      <p>Numri i MRI-ve: <input type="number" value={mriCount} onChange={e => setMriCount(+e.target.value)} /></p>
      <h2>Doza e llogaritur: {dose.toFixed(2)} mSv</h2>
      <h3>Niveli i rrezikut: {riskLevel}</h3>
    </div>
  );
};

export default RadiationCalculator;