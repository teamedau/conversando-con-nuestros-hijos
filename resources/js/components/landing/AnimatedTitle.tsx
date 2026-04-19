import anime from 'animejs/lib/anime.es.js';
import { useEffect, useRef } from 'react';

const COLORS = ['#4272FF', '#42EAFF', '#FF7E42', '#FFB343', '#ffffff'];

interface Particule {
    x: number;
    y: number;
    color: string;
    radius: number;
    draw: () => void;
}

interface Circle {
    x: number;
    y: number;
    color: string;
    radius: number;
    alpha: number;
    lineWidth: number;
    draw: () => void;
}

interface AnimatedTitleProps {
    humanitixUrl: string;
}

export default function AnimatedTitle({ humanitixUrl }: AnimatedTitleProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const animationsRef = useRef<any[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const wrapper = wrapperRef.current;
        if (!canvas || !wrapper) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const distance = 180;
        const numberOfParticules = 22;

        const setCanvasSize = () => {
            canvas.width = wrapper.offsetWidth;
            canvas.height = wrapper.offsetHeight;
        };
        setCanvasSize();

        const removeAnimation = (anim: unknown) => {
            const index = animationsRef.current.indexOf(anim);
            if (index > -1) animationsRef.current.splice(index, 1);
        };

        const createParticule = (x: number, y: number): Particule => {
            const p: Particule = {
                x,
                y,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                radius: anime.random(6, 14),
                draw() {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
                    ctx.fillStyle = p.color;
                    ctx.fill();
                },
            };
            return p;
        };

        const createCircle = (x: number, y: number): Circle => {
            const c: Circle = {
                x,
                y,
                color: '#fff',
                radius: 0,
                alpha: 1,
                lineWidth: 6,
                draw() {
                    ctx.globalAlpha = c.alpha;
                    ctx.beginPath();
                    ctx.arc(c.x, c.y, c.radius, 0, 2 * Math.PI, true);
                    ctx.lineWidth = c.lineWidth;
                    ctx.strokeStyle = c.color;
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                },
            };
            return c;
        };

        const boom = (x: number, y: number) => {
            const particules: Particule[] = Array.from({ length: numberOfParticules }, () =>
                createParticule(x, y),
            );
            const circle = createCircle(x, y);

            const pAnim = anime({
                targets: particules,
                x: (p: Particule) => p.x + anime.random(-distance, distance),
                y: (p: Particule) => p.y + anime.random(-distance, distance),
                radius: 0,
                duration: () => anime.random(1200, 1800),
                easing: 'easeOutExpo',
                complete: removeAnimation,
            });

            const cAnim = anime({
                targets: circle,
                radius: () => anime.random(80, 140),
                lineWidth: 0,
                alpha: {
                    value: 0,
                    easing: 'linear',
                    duration: () => anime.random(400, 600),
                },
                duration: () => anime.random(1200, 1800),
                easing: 'easeOutExpo',
                complete: removeAnimation,
            });

            animationsRef.current.push(pAnim, cAnim);
        };

        // Render loop
        const loop = anime({
            duration: Infinity,
            update: () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                animationsRef.current.forEach((anim) => {
                    anim.animatables.forEach((animatable: { target: Particule | Circle }) => {
                        animatable.target.draw();
                    });
                });
            },
        });

        // Animaciones de entrada
        anime({
            targets: wrapper.querySelectorAll('.event-badge'),
            opacity: [0, 1],
            translateY: [-16, 0],
            duration: 600,
            delay: 100,
            easing: 'easeOutExpo',
        });

        anime({
            targets: wrapper.querySelectorAll('.event-word'),
            opacity: [0, 1],
            translateY: [40, 0],
            delay: anime.stagger(90, { start: 400 }),
            duration: 900,
            easing: 'easeOutExpo',
        });

        anime({
            targets: wrapper.querySelectorAll('.event-subtitle'),
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 700,
            delay: 1100,
            easing: 'easeOutExpo',
        });

        anime({
            targets: wrapper.querySelectorAll('.event-cta'),
            opacity: [0, 1],
            scale: [0.9, 1],
            duration: 600,
            delay: 1500,
            easing: 'easeOutBack',
        });

        // Auto boom al cargar
        setTimeout(() => {
            const cx = canvas.width / 2;
            const cy = canvas.height * 0.38;
            boom(cx, cy);
            setTimeout(() => boom(cx - 110, cy + 70), 220);
            setTimeout(() => boom(cx + 120, cy - 30), 420);
        }, 1600);

        // Click / touch → fuegos artificiales
        const handleTap = (e: MouseEvent | TouchEvent) => {
            const rect = canvas.getBoundingClientRect();
            const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
            const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
            boom(clientX - rect.left, clientY - rect.top);
        };

        wrapper.addEventListener('mousedown', handleTap as EventListener);
        wrapper.addEventListener('touchstart', handleTap as EventListener, { passive: true });

        const handleResize = () => setCanvasSize();
        window.addEventListener('resize', handleResize);

        return () => {
            loop.pause();
            animationsRef.current.forEach((a) => a.pause?.());
            wrapper.removeEventListener('mousedown', handleTap as EventListener);
            wrapper.removeEventListener('touchstart', handleTap as EventListener);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div ref={wrapperRef} className="relative cursor-pointer select-none">
            {/* Canvas fuegos artificiales */}
            <canvas
                ref={canvasRef}
                className="pointer-events-none absolute inset-0 h-full w-full"
            />

            {/* Badge */}
            <div className="event-badge mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 font-['Roboto'] text-xs text-white/80 opacity-0 backdrop-blur-sm sm:px-5 sm:text-sm">
                <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-[#42EAFF]" />
                <span>23 de Mayo · 10 am – 1 pm · Bardon, Brisbane</span>
            </div>

            {/* Título animado palabra a palabra */}
            <h1 className="mb-6 font-['Rum_Raisin'] text-5xl leading-tight text-white md:text-7xl">
                <span className="flex flex-wrap justify-center gap-x-4">
                    {['Conversando', 'con'].map((word) => (
                        <span key={word} className="event-word opacity-0">
                            {word}
                        </span>
                    ))}
                </span>
                <span className="mt-1 flex flex-wrap justify-center gap-x-4 text-[#42EAFF]">
                    {['nuestros', 'hijos'].map((word) => (
                        <span key={word} className="event-word opacity-0">
                            {word}
                        </span>
                    ))}
                </span>
            </h1>

            {/* Subtítulo */}
            <p className="event-subtitle mx-auto mb-10 max-w-xl font-['Roboto'] text-base leading-relaxed text-white/70 opacity-0 md:text-xl">
                Tus hijos ya están recibiendo esta información de algún lado.
                <br />
                <span className="text-white/90">¿Prefierías que la recibieran de ti?</span>
            </p>

            {/* CTA */}
            <a
                href={humanitixUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="event-cta relative z-10 inline-block rounded-2xl bg-[#4272FF] px-7 py-4 font-['Roboto'] text-base font-medium text-white opacity-0 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#3060ee] hover:shadow-[#4272FF]/40 hover:shadow-xl sm:px-10 sm:text-lg"
            >
                Quiero mi lugar · $40 AUD
            </a>

            <p className="mt-5 font-['Roboto'] text-xs text-white/25">
                ✦ toca cualquier parte para más fuegos artificiales
            </p>
        </div>
    );
}
