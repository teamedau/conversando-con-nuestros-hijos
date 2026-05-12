import { useEffect, useState } from 'react';

const EVENT_DATE = new Date('2026-05-23T10:00:00+10:00');
const HUMANITIX_URL = 'https://events.humanitix.com/conversando-con-nuestros-hijos';

function useDaysLeft() {
    const [daysLeft, setDaysLeft] = useState<number | null>(null);

    useEffect(() => {
        const calculate = () => {
            const now = new Date();
            const diff = EVENT_DATE.getTime() - now.getTime();
            setDaysLeft(Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24))));
        };
        calculate();
        const interval = setInterval(calculate, 60000);
        return () => clearInterval(interval);
    }, []);

    return daysLeft;
}

export default function FloatingBanner() {
    const [visible, setVisible] = useState(false);
    const daysLeft = useDaysLeft();

    useEffect(() => {
        const closed = sessionStorage.getItem('banner-closed');
        if (!closed) {
            const timer = setTimeout(() => setVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const close = () => {
        setVisible(false);
        sessionStorage.setItem('banner-closed', '1');
    };

    if (!visible || daysLeft === null) return null;

    return (
        <div
            className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 overflow-hidden rounded-2xl bg-[#0a0a1a] shadow-2xl"
            style={{ border: '1px solid rgba(255,255,255,0.15)' }}
        >
            {/* Top accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#4272FF] via-[#42EAFF] to-[#FFB343]" />

            <div className="p-6">
                {/* Close button */}
                <button
                    onClick={close}
                    className="absolute top-5 right-5 text-white/40 transition-colors hover:text-white/80"
                    aria-label="Cerrar"
                >
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                        <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>

                {/* Countdown + info */}
                <div className="mb-5 flex items-center gap-4">
                    <div className="flex flex-col items-center rounded-xl bg-[#4272FF]/20 px-5 py-3">
                        <span className="font-['Rum_Raisin'] text-5xl leading-none text-[#42EAFF]">
                            {daysLeft}
                        </span>
                        <span className="mt-1 font-['Roboto'] text-[11px] uppercase tracking-widest text-white/50">
                            {daysLeft === 1 ? 'día' : 'días'}
                        </span>
                    </div>
                    <div>
                        <p className="font-['Rum_Raisin'] text-xl leading-snug text-white">
                            para el evento
                        </p>
                        <p className="mt-1 font-['Roboto'] text-sm text-white/50">
                            23 de Mayo · 10 am – 1 pm
                        </p>
                        <p className="font-['Roboto'] text-sm text-white/50">
                            Bardon, Brisbane · Máx. 40 familias
                        </p>
                    </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col gap-3">
                    <a
                        href={HUMANITIX_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full rounded-full bg-[#FFB343] py-3.5 text-center font-['Roboto'] text-base font-medium text-[#5a3800] transition-all duration-200 hover:brightness-95"
                    >
                        Quiero mi tiquete · Desde $49 AUD
                    </a>
                    <a
                        href="/sponsor"
                        className="block w-full rounded-full border border-white/20 py-3.5 text-center font-['Roboto'] text-base font-medium text-white/70 transition-all duration-200 hover:border-white/40 hover:text-white"
                    >
                        Quiero ser sponsor
                    </a>
                </div>
            </div>
        </div>
    );
}
