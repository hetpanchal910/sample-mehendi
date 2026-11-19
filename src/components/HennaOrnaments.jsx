import React from 'react';

// Intricate Traditional Henna Mandala
export const HennaMandala = ({ className = "w-64 h-64 text-gold-500/30", spin = false }) => {
    return (
        <svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${className} ${spin ? 'animate-spin-slow' : ''}`}
        >
            {/* Outer decorative ring */}
            <circle cx="100" cy="100" r="94" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="82" stroke="currentColor" strokeWidth="0.8" />

            {/* 12 Outer Petals */}
            {[...Array(12)].map((_, i) => {
                const angle = (i * 360) / 12;
                return (
                    <g key={`petal-${i}`} transform={`rotate(${angle} 100 100)`}>
                        <path
                            d="M100 12 C108 30 118 45 100 60 C82 45 92 30 100 12 Z"
                            fill="currentColor"
                            fillOpacity="0.15"
                            stroke="currentColor"
                            strokeWidth="1.2"
                        />
                        <circle cx="100" cy="18" r="2.5" fill="currentColor" />
                        <path d="M100 24 L100 48" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                    </g>
                );
            })}

            {/* Mid decorative ring */}
            <circle cx="100" cy="100" r="56" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />

            {/* 8 Inner Paisley Leaves */}
            {[...Array(8)].map((_, i) => {
                const angle = (i * 360) / 8 + 22.5;
                return (
                    <g key={`inner-leaf-${i}`} transform={`rotate(${angle} 100 100)`}>
                        <path
                            d="M100 50 C112 65 110 80 100 90 C90 80 88 65 100 50 Z"
                            fill="currentColor"
                            fillOpacity="0.2"
                            stroke="currentColor"
                            strokeWidth="1.2"
                        />
                        <circle cx="100" cy="62" r="2" fill="currentColor" />
                    </g>
                );
            })}

            {/* Center Flower & Core */}
            <circle cx="100" cy="100" r="26" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="20" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="100" cy="100" r="8" fill="currentColor" />

            {/* Radiating sun spikes */}
            {[...Array(16)].map((_, i) => {
                const angle = (i * 360) / 16;
                return (
                    <line
                        key={`spike-${i}`}
                        x1="100"
                        y1="75"
                        x2="100"
                        y2="79"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        transform={`rotate(${angle} 100 100)`}
                    />
                );
            })}
        </svg>
    );
};

// Traditional Paisley (Kalka / Mango Motif)
export const HennaPaisley = ({ className = "w-32 h-32 text-henna-600/40" }) => {
    return (
        <svg viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path
                d="M60 145 C25 145 10 115 10 85 C10 45 45 20 65 10 C75 5 88 12 85 24 C82 36 68 45 68 60 C68 75 80 82 85 95 C92 112 85 145 60 145 Z"
                stroke="currentColor"
                strokeWidth="2"
                fill="currentColor"
                fillOpacity="0.12"
            />
            <path
                d="M58 130 C35 130 25 108 25 85 C25 55 50 35 62 25"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="2 3"
            />
            <circle cx="50" cy="85" r="14" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.2" />
            <circle cx="50" cy="85" r="6" fill="currentColor" />
            <circle cx="58" cy="115" r="4" fill="currentColor" />
            <circle cx="68" cy="62" r="3" fill="currentColor" />
        </svg>
    );
};

// Delicate Floral Corner Ornament
export const HennaCorner = ({ className = "w-24 h-24 text-gold-400" }) => {
    return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M5 5 L5 45 C5 65 25 85 45 85 L95 85" stroke="currentColor" strokeWidth="1.5" />
            <path d="M5 5 L45 5 C65 5 85 25 85 45 L85 95" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.15" />
            <circle cx="20" cy="20" r="4" fill="currentColor" />
            <path d="M35 15 C45 20 45 35 35 40" stroke="currentColor" strokeWidth="1.2" />
            <path d="M15 35 C20 45 35 45 40 35" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="8" cy="8" r="3" fill="currentColor" />
        </svg>
    );
};