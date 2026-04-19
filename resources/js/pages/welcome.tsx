import BeneficiosSection from '@/components/landing/BeneficiosSection';
import CtaFinal from '@/components/landing/CtaFinal';
import ExpertasSection, { type Experta } from '@/components/landing/ExpertasSection';
import Footer from '@/components/landing/Footer';
import HeroSection from '@/components/landing/HeroSection';
import ProblemSection from '@/components/landing/ProblemSection';
import StatsBar from '@/components/landing/StatsBar';
import { Head } from '@inertiajs/react';

// ↓ Reemplaza esta URL con el link real de Humanitix cuando esté disponible
const HUMANITIX_URL = 'https://events.humanitix.com/conversando-con-nuestros-hijos';

const expertas: Experta[] = [
    {
        nombre: 'Ana María',
        tema: 'Sexualidad',
        descripcion:
            'Educadora sexual certificada. Te da el vocabulario y el enfoque para hablar de cuerpo, consentimiento y desarrollo con claridad y amor.',
        color: '#FFB343',
    },
    {
        nombre: 'Soraya Cooney',
        tema: 'Finanzas saludables',
        descripcion:
            'Asesora financiera familiar. Enseña a criar hijos con una relación sana con el dinero, el ahorro y el valor del trabajo.',
        color: '#42EAFF',
    },
    {
        nombre: 'Gabriela',
        tema: 'Espiritualidad',
        descripcion:
            'Guía espiritual intercultural. Acompaña a familias a nutrir la dimensión espiritual de sus hijos con apertura y profundidad.',
        color: '#4272FF',
    },
    {
        nombre: 'Solange',
        tema: 'Comunicación afectiva',
        descripcion:
            'Coach en comunicación efectiva. Transforma la forma en que te comunicas con tus hijos: escucha activa, límites con amor y diálogo real.',
        color: '#FF7E42',
    },
    {
        nombre: 'Karoll',
        tema: 'Multiculturalidad',
        descripcion:
            'Especialista en familias inmigrantes. Ayuda a criar hijos que integran dos culturas sin perder su identidad ni su raíz.',
        color: '#FFB343',
    },
    {
        nombre: 'Viviana Castrillón',
        tema: 'Ciberseguridad',
        descripcion:
            'Experta en tecnología y communicaciones digitales. Te enseña qué ven tus hijos en internet y cómo hablar de ello sin generar pánico ni prohibición.',
        color: '#42EAFF',
    },
];

export default function Welcome() {
    return (
        <>
            <Head>
                <title>Conversando con Nuestros Hijos – Brisbane, 23 de Mayo 2025</title>
                <meta
                    name="description"
                    content="Un evento presencial en Bardon, Brisbane para padres latinos. 6 expertas en vivo durante 3 horas. Aprende a tener las conversaciones importantes con tus hijos. 23 de Mayo 2025 · $40 AUD."
                />
                <meta property="og:title" content="Conversando con Nuestros Hijos – Brisbane 2025" />
                <meta
                    property="og:description"
                    content="6 expertas latinoamericanas. 3 horas de contenido real. 1 evento presencial en Brisbane. ¿Prefierías que tus hijos recibieran esta información de ti?"
                />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/og-image.jpg" />
            </Head>

            <main>
                <HeroSection humanitixUrl={HUMANITIX_URL} />
                <StatsBar />
                <ProblemSection />
                <ExpertasSection expertas={expertas} />
                <BeneficiosSection />
                <CtaFinal humanitixUrl={HUMANITIX_URL} />
                <Footer />
            </main>
        </>
    );
}
