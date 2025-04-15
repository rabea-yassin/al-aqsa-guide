import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const destinations = [
  "قبة الصخرة",
  "باب حطة",
  "المصلى القبلي",
  "باب السلسلة",
  "المصلى المرواني"
];

export default function Destination() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const handleSelect = (destination) => {
    setSelected(destination);
    // Later we’ll save this to global state or context
    setTimeout(() => navigate('/location'), 500); // simulate transition
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>اختر وجهتك</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
        {destinations.map((d, index) => (
          <button
            key={index}
            onClick={() => handleSelect(d)}
            style={{
              padding: '1rem',
              fontSize: '1.2rem',
              borderRadius: '10px',
              border: selected === d ? '2px solid green' : '1px solid gray',
              background: selected === d ? '#e0ffe0' : 'white',
              cursor: 'pointer'
            }}
          >
            {d}
          </button>
        ))}
      </div>
    </div>
  );
}
