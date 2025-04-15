import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LandmarkPopup from './LandmarkPopup';

const steps = [
  {
    img: "https://via.placeholder.com/300x200?text=Step+1",
    text: "اتجه نحو الدرج الحجري"
  },
  {
    img: "https://via.placeholder.com/300x200?text=Step+2",
    text: "تابع السير حتى ترى القوس أمامك"
  },
  {
    img: "https://via.placeholder.com/300x200?text=Step+3",
    text: "انعطف يمينًا بجانب الشجرة"
  },
  {
    img: "https://via.placeholder.com/300x200?text=Step+4",
    text: "لقد وصلت إلى قبة الصخرة"
  }
];

export default function StepByStep() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const next = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/arrival');
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const { img, text } = steps[currentStep];

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>الخطوة {currentStep + 1} من {steps.length}</h2>
      <img src={img} alt={text} style={{ width: '300px', borderRadius: '10px', marginBottom: '1rem' }} />
      <p>{text}</p>

      {currentStep === 1 && (
        <button onClick={() => setShowPopup(true)} style={{ marginBottom: '1rem' }}>
          معلومة عن هذا المعلم
        </button>
      )}

      <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button onClick={prev} disabled={currentStep === 0}>السابق</button>
        <button onClick={next}>التالي</button>
      </div>

      <LandmarkPopup
        open={showPopup}
        onClose={() => setShowPopup(false)}
        title="قوس المدخل"
        image="https://via.placeholder.com/300x200?text=Arch+Landmark"
        text="هذا القوس مبني على الطراز الأموي ويقود إلى الطريق المؤدية إلى قبة الصخرة."
      />
    </div>
  );
}
