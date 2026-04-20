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
                <p className="mb-8 font-['Rum_Raisin'] text-3xl leading-snug text-white md:text-4xl">
                    "El mejor momento para tener esta conversación con tus hijos
                    <br className="hidden md:block" />
                    es antes de que alguien más la tenga con ellos."
                </p>

                <p className="mb-2 font-['Roboto'] text-base text-white/60">
                    23 de Mayo · 10:00 am – 1:00 pm · Bardon, Brisbane
                </p>

                <p className="mb-8 font-['Roboto'] text-2xl font-medium text-white">$40 AUD</p>

                <a
                    href={humanitixUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-2xl bg-[#FFB343] px-7 py-4 font-['Roboto'] text-base font-medium text-[#0a0a1a] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#f0a730] hover:shadow-[#FFB343]/30 hover:shadow-xl sm:px-10 sm:text-lg"
                >
                    Quiero estar ahí · $40 AUD
                </a>

                <p className="mt-5 font-['Roboto'] text-sm text-white/40">Los lugares son limitados.</p>
            </div>
        </section>
    );
}
