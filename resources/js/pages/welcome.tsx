import BeneficiosSection from '@/components/landing/BeneficiosSection';
import CausaSection from '@/components/landing/CausaSection';
import CtaFinal from '@/components/landing/CtaFinal';
import ExpertasSection, { type Experta } from '@/components/landing/ExpertasSection';
import FaqSection from '@/components/landing/FaqSection';
import Footer from '@/components/landing/Footer';
import HeroSection from '@/components/landing/HeroSection';
import PreciosSection from '@/components/landing/PreciosSection';
import ProblemSection from '@/components/landing/ProblemSection';
import StatsBar from '@/components/landing/StatsBar';
import { Head } from '@inertiajs/react';

// ↓ Reemplaza esta URL con el link real de Humanitix cuando esté disponible
const HUMANITIX_URL = 'https://events.humanitix.com/conversando-con-nuestros-hijos';

const expertas: Experta[] = [
    {
        nombre: 'Ana María Uztaris',
        tema: 'Sexualidad',
        descripcion:
            'Doctora en ciencias de la orientación sexual y terapeuta de pareja. Te da el vocabulario y el enfoque para hablar de cuerpo, consentimiento y desarrollo con claridad y amor.',
        color: '#FFB343',
        foto: '/images/ana-maria.jpg',
    },
    {
        nombre: 'Soraya Cooney',
        tema: 'Finanzas personales',
        descripcion:
            'Coach financiera con enfoque saludable. Aprendamos técnicas sencillas para que nuestros niños entiendan el valor y relación del dinero para lograr metas y bienestar.',
        color: '#42EAFF',
        foto: '/images/soraya.jpg',
    },
    {
        nombre: 'Gabriela Borgognone',
        tema: 'Espiritualidad',
        descripcion:
            'Guía espiritual. Ayuda a padres a entender los estados de conciencia expandida de sus hijos y a guiarlos con apertura y sin prejuicios.',
        color: '#4272FF',
        foto: '/images/gabriela.jpg',
    },
    {
        nombre: 'Solange Lipcin',
        tema: 'Comunicación efectiva',
        descripcion:
            'Coach en comunicación efectiva. Transforma la forma en que te comunicas con tus hijos: escucha activa, límites con amor y diálogo real.',
        color: '#FF7E42',
        foto: '/images/solange.jpg',

    },
    {
        nombre: 'Karoll Pinzón',
        tema: 'Multiculturalidad',
        descripcion:
            'Fundadora de The Familia Hub y especialista en familias migrantes. Ayuda a criar hijos que integran culturas sin perder su identidad ni su raíz.',
        color: '#FFB343',
        foto: '/images/karoll.jpg',
    },
    {
        nombre: 'Viviana Castrillón',
        tema: 'Ciberseguridad',
        descripcion:
            'Experta en tecnología y comunicaciones digitales. Te enseña qué ven tus hijos en internet y los tres grandes desafíos que ningún padre debería ignorar.',
        color: '#42EAFF',
        foto: '/images/viviana.jpg',
    },
];

export default function Welcome() {
    return (
        <>
            <Head>
                <title>Conversando con Nuestros Hijos – Brisbane, 23 de Mayo 2026</title>
                <meta
                    name="description"
                    content="Un evento presencial en Bardon, Brisbane para padres latinos. 6 expertas en vivo durante 3 horas. Aprende a tener las conversaciones importantes con tus hijos. 23 de Mayo 2026 · Desde $49 AUD."
                />
            </Head>

            <main>
                <HeroSection humanitixUrl={HUMANITIX_URL} />
                <StatsBar />
                <ProblemSection />
                <CausaSection />
                <ExpertasSection expertas={expertas} />
                <BeneficiosSection />
                <PreciosSection humanitixUrl={HUMANITIX_URL} />
                <FaqSection />
                <CtaFinal humanitixUrl={HUMANITIX_URL} />
                <Footer />
            </main>
        </>
    );
}
