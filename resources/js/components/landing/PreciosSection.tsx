import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface PreciosSectionProps {
    humanitixUrl: string;
}

export default function PreciosSection({ humanitixUrl }: PreciosSectionProps) {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="bg-[#f8f8f8] px-6 py-24 md:py-32" aria-label="Precios">
            <div className="mx-auto max-w-3xl">
                <div
                    ref={ref}
                    className={`transition-all duration-700 ease-out ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                >
                    <h2 className="mb-12 text-center font-['Rum_Raisin'] text-4xl text-[#0a0a1a] md:text-5xl">
                        ¿Cuánto vale?
                    </h2>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {/* Card 1 — Una persona */}
                        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                            <div className="h-1 w-full bg-[#FFB343]" />
                            <div className="flex flex-col p-8">
                                <p className="mb-2 font-['Roboto'] text-sm font-medium uppercase tracking-widest text-[#6b6b80]">
                                    Una persona
                                </p>
                                <p className="mb-1 font-['Rum_Raisin'] text-5xl text-[#0a0a1a]">$49</p>
                                <p className="mb-4 font-['Roboto'] text-sm text-[#6b6b80]">AUD</p>
                                <p className="mb-8 font-['Roboto'] text-base text-[#3a3a4a]">
                                    Ven, aprende y lleva todo a casa.
                                </p>
                                <a
                                    href={humanitixUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto block w-full rounded-full bg-[#FFB343] py-3.5 text-center font-['Roboto'] text-base font-medium text-[#5a3800] transition-all duration-200 hover:brightness-95"
                                >
                                    Quiero mi lugar
                                </a>
                            </div>
                        </div>

                        {/* Card 2 — En pareja (destacada) */}
                        <div className="overflow-hidden rounded-2xl border-2 border-[#4272FF] bg-white shadow-sm">
                            <div className="h-1 w-full bg-[#4272FF]" />
                            <div className="flex flex-col p-8">
                                <div className="mb-4 flex items-center gap-3">
                                    <p className="font-['Roboto'] text-sm font-medium uppercase tracking-widest text-[#6b6b80]">
                                        En pareja
                                    </p>
                                    <span className="rounded-full bg-[#4272FF] px-3 py-0.5 font-['Roboto'] text-[11px] font-medium text-white">
                                        Más popular
                                    </span>
                                </div>
                                <p className="mb-1 font-['Rum_Raisin'] text-5xl text-[#0a0a1a]">$79</p>
                                <p className="mb-4 font-['Roboto'] text-sm text-[#6b6b80]">AUD</p>
                                <p className="mb-8 font-['Roboto'] text-base text-[#3a3a4a]">
                                    Porque estas conversaciones se construyen entre dos.
                                </p>
                                <a
                                    href={humanitixUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto block w-full rounded-full bg-[#4272FF] py-3.5 text-center font-['Roboto'] text-base font-medium text-white transition-all duration-200 hover:bg-[#3060ee]"
                                >
                                    Reservar dos lugares
                                </a>
                            </div>
                        </div>
                    </div>

                    <p className="mx-auto mt-8 text-center font-['Roboto'] text-sm leading-relaxed text-[#6b6b80]"
                        style={{ maxWidth: '460px' }}>
                        Son 3 horas con 6 expertas. El precio es intencionalmente accesible para que ninguna familia
                        se quede afuera.
                    </p>
                </div>
            </div>
        </section>
    );
}
