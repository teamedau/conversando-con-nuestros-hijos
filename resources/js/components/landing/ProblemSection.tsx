import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const bullets = [
    '¿Cómo le explico a mi hijo qué es el sexo sin querer que me trague la tierra?',
    '¿Cuándo es el momento correcto para hablar de dinero, de espiritualidad, de seguridad en las redes sociales?',
    '¿Y si le digo algo mal y lo confundo más de lo que ya está?',
];

export default function ProblemSection() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section
            className="bg-[#f9f7f4] px-6 py-24 md:py-32"
            aria-label="El problema"
        >
            <div
                ref={ref}
                className={`mx-auto max-w-2xl transition-all duration-700 ease-out ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
            >
                <h2 className="mb-10 font-['Rum_Raisin'] text-3xl leading-snug text-[#0a0a1a] md:text-4xl">
                    Hay conversaciones que postergamos porque no sabemos cómo empezarlas.
                </h2>

                <ul className="mb-10 space-y-5">
                    {bullets.map((bullet, index) => (
                        <li key={index} className="flex items-start gap-4">
                            <span
                                className="mt-1.5 h-3 w-3 shrink-0 rounded-full"
                                style={{ backgroundColor: '#FF7E42' }}
                            />
                            <p className="font-['Roboto'] text-base leading-relaxed text-[#3a3a4a] md:text-lg">
                                {bullet}
                            </p>
                        </li>
                    ))}
                </ul>

                <div className="rounded-2xl border-l-4 border-[#4272FF] bg-white px-8 py-6 shadow-sm">
                    <p className="font-['Roboto'] text-base font-medium leading-relaxed text-[#0a0a1a] md:text-lg">
                        Este evento reúne a <strong>6 expertas latinoamericanas en Brisbane</strong> para darte las
                        palabras, las herramientas y la confianza que necesitas para tener esas conversaciones con tus
                        hijos — antes de que alguien más las tenga.
                    </p>
                </div>
            </div>
        </section>
    );
}
