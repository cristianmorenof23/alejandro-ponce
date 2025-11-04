import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#001E50] text-white py-8 mt-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <p className="text-sm opacity-90">
          © {new Date().getFullYear()} Alejandro Ponce · Volkswagen Córdoba
        </p>

        <div className="flex items-center gap-5">
          <Link
            href="https://wa.me/3515607232"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <FaWhatsapp size={22} />
          </Link>

          <Link
            href="https://www.instagram.com/aleponceautohaus"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <FaInstagram size={22} />
          </Link>

          <Link
            href="https://www.facebook.com/profile.php?id=61566892732814"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <FaFacebookF size={22} />
          </Link>
        </div>
      </div>

      {/* Línea de separación */}
      <div className="border-t border-white/10 mt-6 pt-4 text-center text-xs opacity-80">
        Sitio desarrollado por{" "}
        <Link
          href="https://cristianmoreno.site"
          target="_blank"
          className="font-semibold hover:underline hover:opacity-100 transition"
        >
          Cristian Moreno
        </Link>
      </div>
    </footer>
  );
}
