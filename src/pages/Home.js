import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>دليلك للأقصى</h1>
      <p>إرشاد بصري بدون إنترنت</p>
      <button onClick={() => navigate('/destination')}>ابدأ</button>
    </div>
  );
}
