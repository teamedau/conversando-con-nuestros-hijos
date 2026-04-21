import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface CtaFinalProps {
    humanitixUrl: string;
}

export default function CtaFinal({ humanitixUrl }: CtaFinalProps) {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section
            className="relative overflow-hidden bg-[#0a0a1a] px-6 py-28 text-center md:py-36"
            aria-label="Llamada a la acción final"
        >
            {/* Decorative circles */}
            <div
                className="pointer-events-none absolute top-0 right-0 h-72 w-72 rounded-full bg-[#FFB343] opacity-[0.08]"
                style={{ filter: 'blur(80px)' }}
            />
            <div
                className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#4272FF] opacity-[0.10]"
                style={{ filter: 'blur(80px)' }}
            />

            <div
                ref={ref}
                className={`relative mx-auto max-w-2xl transition-all duration-700 ease-out ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
            >
                <p className="mb-6 font-['Roboto'] text-base leading-relaxed text-white/60 md:text-lg">
                    Cada día que pasa, alguien más está teniendo esas conversaciones con tus hijos.
                    El mundo digital, los amigos, las redes. Tú puedes llegar primero.
                </p>

                <p className="mb-10 font-['Rum_Raisin'] text-3xl leading-snug text-[#42EAFF] md:text-4xl">
                    El mejor momento para empezar es ahora.
                </p>

                <p className="mb-2 font-['Roboto'] text-sm text-white/50">
                    23 de Mayo · 10:00 am – 1:00 pm · Bardon, Brisbane
                </p>

                <p className="mb-8 font-['Roboto'] text-sm text-white/50">Máximo 40 familias.</p>

                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <a
                        href={humanitixUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full rounded-full bg-[#FFB343] px-8 py-4 text-center font-['Roboto'] text-base font-medium text-[#5a3800] transition-all duration-200 hover:brightness-95 sm:w-auto"
                    >
                        Quiero mi lugar · $49 AUD
                    </a>
                    <a
                        href={humanitixUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full rounded-full border-2 border-[#FFB343] px-8 py-4 text-center font-['Roboto'] text-base font-medium text-[#FFB343] transition-all duration-200 hover:bg-[#FFB343]/10 sm:w-auto"
                    >
                        Venimos en pareja · $79 AUD
                    </a>
                </div>

                <p className="mt-6 font-['Roboto'] text-sm text-white/40">Los lugares son limitados.</p>
            </div>
        </section>
    );
}
