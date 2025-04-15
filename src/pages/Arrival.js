import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Arrival() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🎉 لقد وصلت!</h1>
      <p>أنت الآن في وجهتك. نتمنى لك زيارة مباركة وآمنة.</p>
      <button onClick={() => navigate('/')} style={{ marginTop: '2rem' }}>
        العودة إلى الصفحة الرئيسية
      </button>
    </div>
  );
}
