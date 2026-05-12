import Footer from '@/components/landing/Footer';
import { Head, Link } from '@inertiajs/react';

const HUMANITIX_URL = 'https://events.humanitix.com/conversando-con-nuestros-hijos';

const beneficios = [
    {
        titulo: 'Material en la bolsita',
        descripcion: 'Flyers, tarjetas o muestras de tu negocio en las manos de las 40 familias asistentes.',
    },
    {
        titulo: 'Mención verbal en el evento',
        descripcion: '"Este evento es posible gracias a [nombre de tu negocio]" — frente a todos los asistentes.',
    },
    {
        titulo: 'Presencia en redes sociales',
        descripcion: 'Apareces en los perfiles de las 6 expertas con audiencias latinas activas, gracias al flyer digital del evento que cada una compartirá.',
    },
    {
        titulo: 'Logo en el flyer digital',
        descripcion: 'Tu logo visible en todas las comunicaciones digitales del evento antes y durante.',
    },
    {
        titulo: 'Pendón en el evento',
        descripcion: 'Un pendón de tu negocio presente físicamente durante las 3 horas del evento.',
    },
    {
        titulo: '2 tiquetes incluidos',
        descripcion: 'Para quien el sponsor quiera invitar — asistencia opcional.',
    },
];

export default function Sponsor() {
    return (
        <>
            <Head>
                <title>Sé Sponsor – Conversando con Nuestros Hijos</title>
                <meta
                    name="description"
                    content="Lleva tu negocio a 40+ familias latinas en Brisbane. Conoce el paquete sponsor del evento Conversando con Nuestros Hijos."
                />
            </Head>

            <main className="bg-white">
                {/* Hero */}
                <section className="bg-[#0a0a1a] px-6 py-24 text-center md:py-32">
                    <div className="mx-auto max-w-2xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 font-['Roboto'] text-xs text-white/70">
                            <span className="h-2 w-2 rounded-full bg-[#FFB343]" />
                            23 de Mayo · Bardon, Brisbane
                        </div>
                        <h1 className="mb-6 font-['Rum_Raisin'] text-4xl leading-tight text-white md:text-6xl">
                            Sé sponsor del evento
                        </h1>
                        <p className="mx-auto font-['Roboto'] text-base leading-relaxed text-white/60 md:text-lg" style={{ maxWidth: '480px' }}>
                            Tu negocio frente a 40+ familias latinas en Brisbane.
                            Tu cliente ideal, en persona, en un evento que les importa.
                        </p>
                    </div>
                </section>

                {/* Precio destacado */}
                <section className="bg-[#f8f8f8] px-6 py-16">
                    <div className="mx-auto max-w-xl text-center">
                        <p className="mb-2 font-['Roboto'] text-sm font-medium uppercase tracking-widest text-[#6b6b80]">
                            Paquete único
                        </p>
                        <p className="mb-1 font-['Rum_Raisin'] text-7xl text-[#0a0a1a]">$79</p>
                        <p className="mb-6 font-['Roboto'] text-sm text-[#6b6b80]">AUD</p>
                        <p className="mx-auto mb-8 font-['Roboto'] text-base leading-relaxed text-[#3a3a4a]" style={{ maxWidth: '400px' }}>
                            Todo incluido. Un solo paquete, diseñado para que tu negocio llegue directo a quienes más te necesitan.
                        </p>
                        <a
                            href={HUMANITIX_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block rounded-full bg-[#4272FF] px-10 py-4 font-['Roboto'] text-base font-medium text-white transition-all duration-200 hover:bg-[#3060ee]"
                        >
                            Comprar paquete sponsor · $79 AUD
                        </a>
                        <p className="mt-4 font-['Roboto'] text-xs text-[#6b6b80]">
                            Selecciona el paquete "Dos personas" (botón azul) en Humanitix
                        </p>
                    </div>
                </section>

                {/* Beneficios */}
                <section className="px-6 py-20 md:py-28">
                    <div className="mx-auto max-w-3xl">
                        <h2 className="mb-12 text-center font-['Rum_Raisin'] text-3xl text-[#0a0a1a] md:text-4xl">
                            ¿Qué incluye?
                        </h2>
                        <div className="space-y-5">
                            {beneficios.map((item, i) => (
                                <div key={i} className="flex items-start gap-4 rounded-2xl bg-[#f9f7f4] p-6">
                                    <span className="mt-0.5 shrink-0 text-xl">✅</span>
                                    <div>
                                        <p className="mb-1 font-['Roboto'] text-base font-medium text-[#0a0a1a]">
                                            {item.titulo}
                                        </p>
                                        <p className="font-['Roboto'] text-sm leading-relaxed text-[#6b6b80]">
                                            {item.descripcion}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA final */}
                <section className="bg-[#0a0a1a] px-6 py-20 text-center">
                    <div className="mx-auto max-w-xl">
                        <h2 className="mb-4 font-['Rum_Raisin'] text-3xl text-white md:text-4xl">
                            ¿Listo para llegar a tu cliente ideal?
                        </h2>
                        <p className="mb-8 font-['Roboto'] text-base text-white/60">
                            Los cupos de sponsor son limitados, igual que los del evento.
                        </p>
                        <a
                            href={HUMANITIX_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block rounded-full bg-[#FFB343] px-10 py-4 font-['Roboto'] text-base font-medium text-[#5a3800] transition-all duration-200 hover:brightness-95"
                        >
                            Quiero ser sponsor · $79 AUD
                        </a>
                        <div className="mt-6">
                            <Link
                                href="/"
                                className="font-['Roboto'] text-sm text-white/40 transition-colors hover:text-white/70"
                            >
                                ← Volver al evento
                            </Link>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}
