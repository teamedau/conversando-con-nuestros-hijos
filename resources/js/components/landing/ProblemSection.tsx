import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const bullets = [
    '¿Le digo demasiado y lo confundo?',
    '¿Le digo muy poco y lo dejo sin respuestas?',
    '¿Cómo hablo de temas que en mi propia familia nunca se nombraban?',
    '¿Cómo lo ayudo a crecer fuerte en un mundo que cambia más rápido que nosotros?',
];

export default function ProblemSection() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="bg-[#f9f7f4] px-6 py-24 md:py-32" aria-label="El problema">
            <div
                ref={ref}
                className={`mx-auto max-w-2xl transition-all duration-700 ease-out ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
            >
                <h2 className="mb-8 font-['Rum_Raisin'] text-3xl leading-snug text-[#0a0a1a] md:text-4xl">
                    Nadie nos preparó para estas conversaciones.
                </h2>

                <p className="mb-10 font-['Roboto'] text-base leading-relaxed text-[#3a3a4a] md:text-lg">
                    No importa de dónde vengas ni cuánto ames a tus hijos. Hay un momento en que te preguntan algo —
                    sobre su cuerpo, sobre el dinero, sobre lo que vieron en internet — y te quedas sin palabras. No
                    porque seas mal padre o mala madre. Sino porque nadie tuvo esta conversación contigo tampoco.
                </p>

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

                <p className="mb-10 font-['Roboto'] text-base leading-relaxed text-[#3a3a4a] md:text-lg">
                    Y si además estás criando entre dos culturas, la pregunta se vuelve más compleja: ¿cómo le
                    transmito mis valores sin que se sienta diferente? ¿Cómo protejo su identidad sin aislarlo del
                    mundo en el que vive?
                </p>

                <div className="rounded-2xl border-l-4 border-[#4272FF] bg-white px-8 py-6 shadow-sm">
                    <p className="font-['Roboto'] text-base font-medium leading-relaxed text-[#0a0a1a] md:text-lg">
                        Eso no te hace menos. Te hace humano.
                    </p>
                </div>
            </div>
        </section>
    );
}
