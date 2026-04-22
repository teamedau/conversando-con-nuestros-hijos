import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useState } from 'react';

const faqs = [
    {
        pregunta: '¿Para qué edades de hijos es este evento?',
        respuesta:
            'Para todas las etapas. Cada experta habla desde su área y trae herramientas adaptables — tú decides cómo aplicarlas según la edad de tus hijos.',
    },
    {
        pregunta: '¿Puedo ir sin mi pareja?',
        respuesta:
            'Sí, absolutamente. Lo importante es que tú te vayas con nuevas herramientas. El resto lo construyes en casa a tu ritmo.',
    },
    {
        pregunta: '¿Voy a salir siendo experto en todos los temas?',
        respuesta:
            'No, y eso no es lo que prometemos. Vas a salir con más claridad, con mejores preguntas y con herramientas para empezar estas conversaciones en casa. El resto es práctica — y eso es tuyo.',
    },
    {
        pregunta: '¿Qué pasa si tengo hijos de diferentes edades?',
        respuesta:
            'Es lo más común. Cada experta aborda su tema desde distintas etapas y vas a poder adaptar lo que aprendas a cada uno.',
    },
    {
        pregunta: '¿Por qué este precio?',
        respuesta:
            'Porque queremos que ninguna familia se quede sin poder venir. Son 3 horas, 6 expertas y conversaciones que valen mucho más que el valor del ticket.',
    },
    {
        pregunta: '¿Los lugares son realmente limitados?',
        respuesta:
            'Sí. El evento es para máximo 40 personas — queremos que sea cercano y real, no un auditorio frío. Una vez se acaben los cupos, se acaban.',
    },
    {
        pregunta: '¿Hay estacionamiento?',
        respuesta:
            'Sí. El venue tiene parqueadero hay cupos limitados. Trata de llegar temprano.',
    },
    {   pregunta: '¿Hay otras comodidades?', 
        respuesta: 
            'Sí, el venue ofrece acceso para personas con discapacidad y un pequeño parque para niños (Niños bajo supervisión de sus padres).',
    },
];

function FaqItem({ pregunta, respuesta, isOpen, onToggle }: {
    pregunta: string;
    respuesta: string;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div className="border-b border-[#e0e0e0]">
            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between py-5 text-left"
                aria-expanded={isOpen}
            >
                <span className="font-['Roboto'] text-base font-medium text-[#0a0a1a] pr-6">{pregunta}</span>
                <span
                    className="shrink-0 text-2xl font-light text-[#4272FF] transition-transform duration-300"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                    +
                </span>
            </button>
            <div
                style={{
                    maxHeight: isOpen ? '400px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.35s ease',
                }}
            >
                <p className="pb-6 font-['Roboto'] text-[15px] leading-relaxed text-[#6b6b80]">{respuesta}</p>
            </div>
        </div>
    );
}

export default function FaqSection() {
    const { ref, isVisible } = useScrollAnimation();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white px-6 py-24 md:py-32" aria-label="Preguntas frecuentes">
            <div className="mx-auto max-w-2xl">
                <div
                    ref={ref}
                    className={`transition-all duration-700 ease-out ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                >
                    <h2 className="mb-12 font-['Rum_Raisin'] text-4xl text-[#0a0a1a] md:text-5xl">
                        Preguntas frecuentes
                    </h2>

                    <div>
                        {faqs.map((faq, index) => (
                            <FaqItem
                                key={index}
                                pregunta={faq.pregunta}
                                respuesta={faq.respuesta}
                                isOpen={openIndex === index}
                                onToggle={() => toggle(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
