export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#0a0a1a] border-t border-white/10 px-6 py-8 text-center">
            <p className="font-['Roboto'] text-sm text-white/40">
                © {year} Conversando con Nuestros Hijos · Brisbane, Australia
            </p>
        </footer>
    );
}
