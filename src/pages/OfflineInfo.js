import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function OfflineInfo() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>📵 وضع عدم الاتصال</h2>
      <p style={{ margin: '1rem 0' }}>
        لا حاجة للاتصال بالإنترنت أو الـ GPS.<br />
        كل التوجيهات متوفرة داخل التطبيق.
      </p>
      <p style={{ fontSize: '0.9rem', color: '#777' }}>
        يمكنك الآن بدء التنقل خطوة بخطوة.
      </p>
      <button
        onClick={() => navigate('/steps')}
        style={{ marginTop: '2rem', padding: '0.8rem 1.5rem', fontSize: '1rem' }}
      >
        ابدأ التوجيه
      </button>
    </div>
  );
}
