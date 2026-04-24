import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const navigationLinks = [
  { href: "/modelo", label: "Modelos" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/contacto", label: "Contacto" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/aleponceautohaus",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    href: "https://www.facebook.com/profile.php?id=61566892732814",
    label: "Facebook",
    icon: FaFacebookF,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 bg-[#001E50] text-white overflow-hidden">
      {/* Sutil gradiente de fondo para dar profundidad */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
        
        {/* Línea decorativa superior con gradiente */}
        <div className="mb-16 h-px w-full bg-linear-to-r from-transparent via-blue-400/30 to-transparent" />

        <section className="grid gap-16 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          
          {/* Columna Izquierda: Branding y CTA */}
          <div className="flex flex-col">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-0.5 w-10 bg-blue-500" />
              <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-blue-400">
                Alejandro Ponce
              </span>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl lg:text-6xl text-balance leading-[1.1]">
                Asesor comercial <span className="text-blue-400">oficial</span> Volkswagen
              </h2>

              <p className="max-w-xl text-lg leading-relaxed text-blue-100/70">
                Atención personalizada en <span className="text-white font-medium">Auto Haus Córdoba</span>. 
                Encontrá tu próximo vehículo con la transparencia y el respaldo que buscás.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="https://wa.me/5493515607232"
                target="_blank"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#001E50] transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
              >
                <FaWhatsapp className="text-xl text-green-600 transition-transform group-hover:scale-110" />
                Cotizar ahora
              </Link>

              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400/60 font-bold">Ubicación principal</span>
                <span className="text-sm font-medium text-blue-100/80">Auto Haus Córdoba</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Links y Contacto */}
          <div className="grid gap-10 sm:grid-cols-2 lg:border-l lg:border-white/10 lg:pl-12">
            
            {/* Navegación */}
            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400/80">Explorar</h3>
              <ul className="space-y-4">
                {navigationLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-blue-100/60 transition-all hover:text-white hover:translate-x-1 inline-block"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto & Redes */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400/80">Contacto Directo</h3>
                <div className="space-y-4 text-sm text-blue-100/80">
                  <a href="tel:+543515607232" className="group flex items-center gap-3 hover:text-white transition-colors">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-400/10 text-blue-400 group-hover:bg-blue-400 group-hover:text-white transition-all">
                      <FaPhoneAlt size={12} />
                    </div>
                    +54 351 560 7232
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-400/10 text-blue-400">
                      <FaMapMarkerAlt size={14} />
                    </div>
                    Córdoba, Argentina
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  {socialLinks.map(({ href, label, icon: Icon }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      aria-label={label}
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-blue-400"
                    >
                      <Icon className="text-lg" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Bottom */}
        <div className="mt-20 border-t border-white/5 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-[10px] uppercase tracking-[0.2em] text-blue-100/40">
              © {currentYear} Alejandro Ponce — Asesor Automotriz
            </p>
            
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-blue-100/40">
              <span>Creado por </span>
              <Link
                href="https://cristianmoreno.site"
                target="_blank"
                className="font-bold text-blue-100/80 transition-colors hover:text-blue-400"
              >
                Cristian Moreno
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}