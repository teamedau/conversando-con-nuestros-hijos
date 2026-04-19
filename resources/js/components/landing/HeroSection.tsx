import AnimatedTitle from '@/components/landing/AnimatedTitle';

interface HeroSectionProps {
    humanitixUrl: string;
}

export default function HeroSection({ humanitixUrl }: HeroSectionProps) {
    return (
        <section
            className="relative overflow-hidden bg-[#0a0a1a] px-6 py-24 text-center md:py-32"
            aria-label="Hero"
        >
            {/* Círculos decorativos de fondo */}
            <div
                className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#4272FF] opacity-[0.12]"
                style={{ filter: 'blur(80px)' }}
            />
            <div
                className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#42EAFF] opacity-[0.10]"
                style={{ filter: 'blur(70px)' }}
            />
            <div
                className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#FF7E42] opacity-[0.08]"
                style={{ filter: 'blur(90px)' }}
            />

            <div className="relative mx-auto max-w-3xl">
                <AnimatedTitle humanitixUrl={humanitixUrl} />
            </div>
        </section>
    );
}
