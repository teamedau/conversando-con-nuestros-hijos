import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const stats = [
    { bg: '#FFB343', text: '#0a0a1a', number: '6', label: 'expertas en vivo' },
    { bg: '#42EAFF', text: '#0a0a1a', number: '3h', label: 'de contenido real' },
    { bg: '#4272FF', text: '#ffffff', number: '1', label: 'evento presencial único' },
];

export default function StatsBar() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section aria-label="Estadísticas">
            <div
                ref={ref}
                className={`grid grid-cols-1 transition-all duration-700 ease-out sm:grid-cols-3 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
            >
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center px-8 py-8 text-center md:py-12"
                        style={{ backgroundColor: stat.bg, color: stat.text }}
                    >
                        <span className="font-['Rum_Raisin'] text-5xl md:text-6xl">{stat.number}</span>
                        <span className="mt-2 font-['Roboto'] text-lg font-medium">{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
