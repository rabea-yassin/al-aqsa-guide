import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RouteOverview() {
    const navigate = useNavigate();

    // For now, use static mock info — we can replace this later with real data from state or context
    const start = "درج حجري";
    const end = "قبة الصخرة";

    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h2>مسارك</h2>
            <p>أنت في <strong>{start}</strong></p>
            <p>وجهتك <strong>{end}</strong></p>

            <div style={{ marginTop: '2rem' }}>
                <button onClick={() => navigate('/offline')
                } style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>
                    ابدأ التوجيه
                </button>
            </div>
        </div>
    );
}
