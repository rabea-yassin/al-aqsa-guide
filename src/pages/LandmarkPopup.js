import React from 'react';

export default function LandmarkPopup({ open, onClose, title, text, image }) {
  if (!open) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '12px',
        maxWidth: '350px',
        textAlign: 'center'
      }}>
        <h2>{title}</h2>
        <img src={image} alt={title} style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
        <p>{text}</p>
        <button onClick={onClose} style={{ marginTop: '1rem' }}>إغلاق</button>
      </div>
    </div>
  );
}
