<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="robots" content="index, follow">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        {{-- Favicons --}}
        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        {{-- Canonical --}}
        <link rel="canonical" href="{{ url('/') }}" />

        {{-- Open Graph / WhatsApp / Facebook --}}
        <meta property="og:site_name" content="Conversando con Nuestros Hijos" />
        <meta property="og:locale" content="es_AU" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Conversando con Nuestros Hijos – Brisbane, 23 de Mayo 2026" />
        <meta property="og:description" content="6 expertas latinoamericanas en vivo. 3 horas de conversaciones reales sobre sexualidad, dinero, espiritualidad, tecnología y más. Evento presencial en Bardon, Brisbane. Desde $49 AUD." />
        <meta property="og:url" content="{{ url('/') }}" />
        <meta property="og:image" content="{{ url('/images/og-image.jpg') }}" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Conversando con Nuestros Hijos – Evento para familias latinas en Brisbane" />

        {{-- Twitter / X --}}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Conversando con Nuestros Hijos – Brisbane 2026" />
        <meta name="twitter:description" content="6 expertas latinoamericanas. 3 horas de contenido real. Evento presencial en Bardon, Brisbane el 23 de Mayo. Desde $49 AUD." />
        <meta name="twitter:image" content="{{ url('/images/og-image.jpg') }}" />
        <meta name="twitter:image:alt" content="Conversando con Nuestros Hijos – Evento para familias latinas en Brisbane" />

        {{-- JSON-LD: Event schema (rich results en Google) --}}
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Conversando con Nuestros Hijos",
            "startDate": "2026-05-23T10:00:00+10:00",
            "endDate": "2026-05-23T13:00:00+10:00",
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "location": {
                "@type": "Place",
                "name": "Bardon Community Centre",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Bardon",
                    "addressRegion": "QLD",
                    "postalCode": "4065",
                    "addressCountry": "AU"
                }
            },
            "image": "{{ url('/images/og-image.jpg') }}",
            "description": "Un evento presencial en Bardon, Brisbane para padres latinos. 6 expertas en vivo durante 3 horas: sexualidad, finanzas personales, espiritualidad, comunicación efectiva, multiculturalidad y ciberseguridad.",
            "organizer": {
                "@type": "Organization",
                "name": "Conversando con Nuestros Hijos",
                "url": "{{ url('/') }}"
            },
            "offers": [
                {
                    "@type": "Offer",
                    "name": "Una persona",
                    "price": "49",
                    "priceCurrency": "AUD",
                    "availability": "https://schema.org/LimitedAvailability",
                    "url": "https://events.humanitix.com/conversando-con-nuestros-hijos",
                    "validFrom": "2026-04-22T00:00:00+10:00"
                },
                {
                    "@type": "Offer",
                    "name": "Dos personas",
                    "price": "79",
                    "priceCurrency": "AUD",
                    "availability": "https://schema.org/LimitedAvailability",
                    "url": "https://events.humanitix.com/conversando-con-nuestros-hijos",
                    "validFrom": "2026-04-22T00:00:00+10:00"
                }
            ],
            "performer": [
                { "@type": "Person", "name": "Ana María Uztaris" },
                { "@type": "Person", "name": "Soraya Cooney" },
                { "@type": "Person", "name": "Gabriela Borgognone" },
                { "@type": "Person", "name": "Solange Lipcin" },
                { "@type": "Person", "name": "Karoll Pinzón" },
                { "@type": "Person", "name": "Viviana Castrillón" }
            ],
            "inLanguage": "es",
            "maximumAttendeeCapacity": 40
        }
        </script>

        {{-- JSON-LD: FAQ schema (rich results para preguntas frecuentes) --}}
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "¿Para qué edades de hijos es este evento?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Para todas las etapas. Cada experta habla desde su área y trae herramientas adaptables — tú decides cómo aplicarlas según la edad de tus hijos."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Puedo ir solo o sola sin mi pareja?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sí, absolutamente. Lo importante es que tú te vayas con nuevas herramientas. El resto lo construyes en casa a tu ritmo."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Qué pasa si tengo hijos de diferentes edades?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Es lo más común. Cada experta aborda su tema desde distintas etapas y vas a poder adaptar lo que aprendas a cada uno."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Por qué este precio?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Porque queremos que ninguna familia se quede sin poder venir. Son 3 horas, 6 expertas y conversaciones que valen mucho más que el valor del ticket."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Los lugares son realmente limitados?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sí. El evento es para máximo 40 familias — queremos que sea cercano y real, no un auditorio frío. Una vez se acaben los cupos, se acaban."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Hay estacionamiento?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sí. El venue tiene parqueadero, un pequeño parque de juegos por si vienen con los chiquitines, y acceso para personas con discapacidad."
                    }
                }
            ]
        }
        </script>

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&family=Rum+Raisin&display=swap');
        </style>

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        <x-inertia::head>
            <title>Conversando con Nuestros Hijos – Brisbane, 23 de Mayo 2026</title>
        </x-inertia::head>
    </head>
    <body class="font-sans antialiased">
        <x-inertia::app />
    </body>
</html>
