import React from 'react';
import { useNavigate } from 'react-router-dom';

const visualOptions = [
  { label: "مئذنة", img: "https://via.placeholder.com/150?text=Minaret" },
  { label: "درج حجري", img: "https://via.placeholder.com/150?text=Stone+Stairs" },
  { label: "قوس", img: "https://via.placeholder.com/150?text=Archway" },
  { label: "شجرة زيتون", img: "https://via.placeholder.com/150?text=Olive+Tree" },
];

export default function LocationFinder() {
  const navigate = useNavigate();

  const handleSelect = (choice) => {
    console.log("User sees:", choice);
    // Later we can map this to an exact location
    setTimeout(() => navigate('/route'), 500);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>ماذا ترى حولك؟</h2>
      <p>اختر أقرب صورة للمكان الذي أنت فيه</p>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem', marginTop: '2rem' }}>
        {visualOptions.map((opt, index) => (
          <div key={index} onClick={() => handleSelect(opt.label)} style={{ cursor: 'pointer' }}>
            <img src={opt.img} alt={opt.label} style={{ width: '150px', borderRadius: '10px' }} />
            <p>{opt.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
