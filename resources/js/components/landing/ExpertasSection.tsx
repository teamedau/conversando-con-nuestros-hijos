import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export interface Experta {
    nombre: string;
    tema: string;
    descripcion: string;
    color: string;
    foto?: string;
}

interface ExpertasSectionProps {
    expertas: Experta[];
}

function getInitials(nombre: string): string {
    return nombre
        .split(' ')
        .slice(0, 2)
        .map((n) => n[0])
        .join('')
        .toUpperCase();
}

function ExpertaCard({ experta, index }: { experta: Experta; index: number }) {
    const { ref, isVisible } = useScrollAnimation(0.1);

    return (
        <div
            ref={ref}
            className={`rounded-2xl bg-white p-6 shadow-sm transition-all ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDuration: `${600 + index * 80}ms` }}
        >
            {/* Avatar */}
            <div className="mb-4 flex justify-center">
                {experta.foto ? (
                    <img
                        src={experta.foto}
                        alt={experta.nombre}
                        className="h-20 w-20 rounded-full object-cover"
                    />
                ) : (
                    <div
                        className="flex h-20 w-20 items-center justify-center rounded-full font-['Rum_Raisin'] text-2xl text-white"
                        style={{ backgroundColor: experta.color }}
                    >
                        {getInitials(experta.nombre)}
                    </div>
                )}
            </div>

            {/* Name */}
            <h3 className="mb-2 text-center font-['Rum_Raisin'] text-xl text-[#0a0a1a]">{experta.nombre}</h3>

            {/* Topic badge */}
            <div className="mb-3 flex justify-center">
                <span
                    className="rounded-full px-4 py-1 font-['Roboto'] text-sm font-medium text-[#0a0a1a]"
                    style={{ backgroundColor: experta.color }}
                >
                    {experta.tema}
                </span>
            </div>

            {/* Description */}
            <p className="text-center font-['Roboto'] text-sm leading-relaxed text-[#6b6b80]">{experta.descripcion}</p>
        </div>
    );
}

export default function ExpertasSection({ expertas }: ExpertasSectionProps) {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="bg-[#f9f7f4] px-6 py-24 md:py-32" aria-label="Las expertas">
            <div className="mx-auto max-w-5xl">
                <div
                    ref={ref}
                    className={`mb-14 text-center transition-all duration-700 ease-out ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                >
                    <h2 className="font-['Rum_Raisin'] text-4xl text-[#0a0a1a] md:text-5xl">Las 6 expertas</h2>
                    <p className="mt-4 font-['Roboto'] text-lg text-[#6b6b80]">
                        Cada una con un tema diferente, todas con algo real que decirte.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {expertas.map((experta, index) => (
                        <ExpertaCard key={experta.nombre} experta={experta} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
