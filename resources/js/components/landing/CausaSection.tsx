import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function CausaSection() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="relative overflow-hidden bg-[#0a0a1a] px-6 py-24 text-center md:py-32" aria-label="La causa">
            {/* Background image overlay */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage: "url('/images/familia-bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.18,
                }}
            />
            <div
                ref={ref}
                className={`relative mx-auto max-w-2xl transition-all duration-700 ease-out ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
            >
                <h2 className="mb-8 font-['Rum_Raisin'] text-3xl leading-snug text-white md:text-4xl">
                    No es tu culpa. Es la realidad de criar hijos hoy.
                </h2>

                <p
                    className="mx-auto mb-12 font-['Roboto'] text-base leading-relaxed md:text-lg"
                    style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '520px' }}
                >
                    En la mayoría de familias estos temas simplemente no se hablaban. La sexualidad, el dinero, la
                    espiritualidad, los peligros del mundo digital — se evitaban, se dejaban para después, o
                    simplemente nunca llegaban.
                </p>

                <p className="font-['Rum_Raisin'] text-2xl text-[#42EAFF] md:text-[32px]">
                    Los tiempos han cambiado, y hablar de esto es clave: para proteger a tus hijos y ayudarles a crecer seguros, conscientes y felices.
                </p>
            </div>
        </section>
    );
}
