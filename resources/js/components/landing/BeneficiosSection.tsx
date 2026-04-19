import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const beneficios = [
    {
        color: '#4272FF',
        titulo: 'Las palabras exactas',
        descripcion: 'Frases concretas y adaptadas a cada edad para empezar la conversación sin miedo a equivocarte.',
    },
    {
        color: '#42EAFF',
        titulo: 'Herramientas prácticas',
        descripcion: 'Recursos y estrategias que puedes aplicar esa misma noche en casa, sin preparación extra.',
    },
    {
        color: '#FF7E42',
        titulo: 'Comunidad de padres',
        descripcion: 'Conecta con otras familias latinas en Brisbane que enfrentan los mismos desafíos que tú.',
    },
    {
        color: '#FFB343',
        titulo: 'Confianza real',
        descripcion: 'Sal del evento sabiendo que puedes tener estas conversaciones — y que vale la pena tenerlas.',
    },
];

function BeneficioCard({
    beneficio,
    index,
}: {
    beneficio: (typeof beneficios)[0];
    index: number;
}) {
    const { ref, isVisible } = useScrollAnimation(0.1);

    return (
        <div
            ref={ref}
            className={`overflow-hidden rounded-2xl bg-white shadow-sm transition-all ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDuration: `${600 + index * 100}ms` }}
        >
            <div className="h-1.5 w-full" style={{ backgroundColor: beneficio.color }} />
            <div className="p-7">
                <h3 className="mb-2 font-['Rum_Raisin'] text-2xl text-[#0a0a1a]">{beneficio.titulo}</h3>
                <p className="font-['Roboto'] text-base leading-relaxed text-[#6b6b80]">{beneficio.descripcion}</p>
            </div>
        </div>
    );
}

export default function BeneficiosSection() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="bg-white px-6 py-24 md:py-32" aria-label="Lo que te llevas">
            <div className="mx-auto max-w-4xl">
                <div
                    ref={ref}
                    className={`mb-14 text-center transition-all duration-700 ease-out ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                >
                    <h2 className="font-['Rum_Raisin'] text-4xl text-[#0a0a1a] md:text-5xl">Lo que te llevas</h2>
                    <p className="mt-4 font-['Roboto'] text-lg text-[#6b6b80]">
                        Más que información — una transformación en la forma de hablar con tus hijos.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {beneficios.map((beneficio, index) => (
                        <BeneficioCard key={beneficio.titulo} beneficio={beneficio} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
