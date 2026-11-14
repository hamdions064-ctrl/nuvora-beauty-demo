
"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Soins du visage",
    description: "Des soins adaptés pour révéler l’éclat naturel de votre peau.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900",
  },
  {
    number: "02",
    title: "Soins du corps",
    description: "Un moment de détente et de bien-être pour votre corps.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900",
  },
  {
    number: "03",
    title: "Beauté & élégance",
    description: "Des prestations beauté pour vous sentir belle au quotidien.",
    
image: "/images/beauty.png",

  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen bg-[#faf8f4] text-[#302b27]">
      {/* Navigation */}
      <header className="relative z-50 flex items-center justify-between bg-[#faf8f4] px-6 py-6 md:px-16">
        <a
          href="#accueil"
          onClick={closeMenu}
          className="text-2xl font-serif tracking-[0.15em]"
        >
          ÉLÉA<span className="text-[#ad896c]">.</span>
        </a>

        {/* Menu ordinateur */}

<nav className="hidden items-center gap-7 text-sm md:flex">
  <a href="#accueil" className="transition hover:text-[#ad896c]">Accueil</a>
  <a href="#apropos" className="transition hover:text-[#ad896c]">À propos</a>
  <a href="#services" className="transition hover:text-[#ad896c]">Services</a>
  <a href="#galerie" className="transition hover:text-[#ad896c]">Galerie</a>
  <a href="#tarifs" className="transition hover:text-[#ad896c]">Tarifs</a>
  <a href="#contact" className="transition hover:text-[#ad896c]">Contact</a>
</nav>


        <a
          href="#contact"
          className="hidden border border-[#ad896c] px-5 py-3 text-xs tracking-wider transition hover:bg-[#ad896c] hover:text-white md:block"
        >
          RÉSERVER
        </a>

        {/* Bouton menu téléphone */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          className="flex flex-col gap-1.5 p-2 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-[#302b27] transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-[#302b27] transition ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-[#302b27] transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>

        {/* Menu mobile */}
        
{menuOpen && (
  <nav className="absolute left-0 top-full flex w-full flex-col gap-5 border-t border-[#e8dfd5] bg-[#faf8f4] px-6 py-7 text-sm shadow-lg md:hidden">
    <a href="#accueil" onClick={closeMenu}>Accueil</a>
    <a href="#apropos" onClick={closeMenu}>À propos</a>
    <a href="#services" onClick={closeMenu}>Services</a>
    <a href="#galerie" onClick={closeMenu}>Galerie</a>
    <a href="#tarifs" onClick={closeMenu}>Tarifs</a>
    <a href="#contact" onClick={closeMenu}>Contact</a>
    <a
      href="#contact"
      onClick={closeMenu}
      className="bg-[#ad896c] px-5 py-3 text-center text-xs tracking-widest text-white"
    >
      RÉSERVER
    </a>
  </nav>
)}

      
      </header>

      {/* Hero */}
      <section
        id="accueil"
        className="relative flex min-h-[620px] items-center bg-cover bg-center px-6 md:px-16"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(35,29,25,.68), rgba(35,29,25,.08)), url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1800')",
        }}
      >
        <div className="max-w-2xl py-28 text-white">
          <p className="mb-6 text-xs tracking-[0.35em]">
            BIENVENUE CHEZ ÉLÉA BEAUTY
          </p>

          <h1 className="mb-7 font-serif text-5xl leading-tight md:text-7xl">
            La beauté commence par un moment pour soi.
          </h1>

          <p className="mb-9 max-w-lg text-sm leading-7 text-white/85">
            Découvrez un espace dédié à votre beauté, votre bien-être
            et votre sérénité.
          </p>

          <a
            href="#services"
            className="inline-block bg-[#ad896c] px-8 py-4 text-xs tracking-widest transition hover:bg-[#8e6d54]"
          >
            DÉCOUVRIR NOS SOINS
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section id="apropos" className="px-6 py-24 text-center md:px-16">
        <p className="mb-5 text-xs tracking-[0.3em] text-[#ad896c]">
          NOTRE PHILOSOPHIE
        </p>

        <h2 className="mx-auto mb-7 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
          Prenez soin de vous, vous le méritez.
        </h2>

        <p className="mx-auto max-w-2xl text-sm leading-8 text-[#77706a]">
          Éléa Beauty vous accueille dans un univers chaleureux et
          raffiné. Notre objectif est de vous offrir une expérience
          unique, où beauté et relaxation se rencontrent.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#f1ece5] px-6 py-24 md:px-16">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs tracking-[0.3em] text-[#ad896c]">
            NOS PRESTATIONS
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">
            Nos services
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} className="group overflow-hidden">
              <div
                className="h-72 bg-cover bg-center transition duration-500 group-hover:scale-[1.02]"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              <div className="bg-[#faf8f4] p-7">
                <p className="mb-3 text-xs text-[#ad896c]">
                  {service.number}
                </p>
                <h3 className="mb-3 font-serif text-2xl">
                  {service.title}
                </h3>
                <p className="text-sm leading-7 text-[#77706a]">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

{/* Tarifs */}

{/* Galerie */}
<section id="galerie" className="px-6 py-24 md:px-16">
  <div className="mb-14 text-center">
    <p className="mb-4 text-xs tracking-[0.3em] text-[#ad896c]">
      NOTRE UNIVERS
    </p>
    <h2 className="font-serif text-4xl md:text-5xl">
      Un espace dédié à votre beauté
    </h2>
    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#77706a]">
      Découvrez une atmosphère douce et raffinée, pensée pour
      vous offrir un véritable moment de détente.
    </p>
  </div>

  <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {[
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=900",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900",
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=900",
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=900",
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=900",
    ].map((photo, index) => (
      <div
        key={index}
        className="group h-72 overflow-hidden bg-[#f1ece5]"
      >
        <img
          src={photo}
          alt={`Ambiance beauté Éléa Beauty ${index + 1}`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </div>
    ))}
  </div>
</section>

<section id="tarifs" className="px-6 py-24 md:px-16">
  <div className="mb-14 text-center">
    <p className="mb-4 text-xs tracking-[0.3em] text-[#ad896c]">
      NOS TARIFS
    </p>
    <h2 className="font-serif text-4xl md:text-5xl">
      Nos formules beauté
    </h2>
    <p className="mt-5 text-sm text-[#77706a]">
      Des prestations pensées pour votre bien-être.
    </p>
  </div>

  <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
    {[
      { name: "Soin du visage", price: "45 DT", detail: "Nettoyage et hydratation" },
      { name: "Massage relaxant", price: "60 DT", detail: "45 minutes de détente" },
      { name: "Soin complet", price: "80 DT", detail: "Beauté et bien-être" },
    ].map((item) => (
      <div
        key={item.name}
        className="border border-[#e6ddd2] bg-white p-9 text-center transition hover:-translate-y-1 hover:shadow-lg"
      >
        <h3 className="mb-5 font-serif text-2xl">{item.name}</h3>
        <p className="mb-5 text-3xl text-[#ad896c]">{item.price}</p>
        <p className="mb-8 text-sm text-[#77706a]">{item.detail}</p>
        <a
          href="#contact"
          className="inline-block border border-[#ad896c] px-6 py-3 text-xs tracking-widest transition hover:bg-[#ad896c] hover:text-white"
        >
          RÉSERVER
        </a>
      </div>
    ))}
  </div>
</section>

      {/* Contact */}
    
{/* Contact */}
<section id="contact" className="bg-[#f1ece5] px-6 py-24 md:px-16">
  <div className="mb-14 text-center">
    <p className="mb-5 text-xs tracking-[0.3em] text-[#ad896c]">
      CONTACTEZ-NOUS
    </p>
    <h2 className="font-serif text-4xl md:text-5xl">
      Votre moment de bien-être commence ici.
    </h2>
    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#77706a]">
      Une question ou envie de réserver ? Notre équipe sera ravie
      de vous accompagner.
    </p>
  </div>

  <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
    <div className="bg-[#faf8f4] p-8 md:p-10">
      <h3 className="mb-8 font-serif text-2xl">Nos coordonnées</h3>

      <div className="mb-7">
        <p className="mb-2 text-xs tracking-widest text-[#ad896c]">ADRESSE</p>
        <p className="text-sm text-[#77706a]">Votre adresse ici, Tunisie</p>
      </div>

      <div className="mb-7">
        <p className="mb-2 text-xs tracking-widest text-[#ad896c]">TÉLÉPHONE</p>
        <p className="text-sm text-[#77706a]">+216 XX XXX XXX</p>
      </div>

      <div>
        <p className="mb-2 text-xs tracking-widest text-[#ad896c]">HORAIRES</p>
        <p className="text-sm text-[#77706a]">Sur rendez-vous</p>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center bg-[#302b27] p-8 text-center text-white md:p-10">
      <p className="mb-5 text-xs tracking-[0.3em] text-[#c9a889]">
        PRENEZ RENDEZ-VOUS
      </p>

      <h3 className="mb-5 font-serif text-3xl">
        Nous sommes à votre écoute.
      </h3>

      <p className="mb-8 text-sm leading-7 text-white/65">
        Contactez-nous directement sur WhatsApp pour demander
        des informations ou réserver votre soin.
      </p>

      <a
        href="https://wa.me/216XXXXXXXX"
        target="_blank"
        rel="noreferrer"
        className="bg-[#ad896c] px-8 py-4 text-xs tracking-widest text-white transition hover:bg-[#8e6d54]"
      >
        CONTACTER SUR WHATSAPP
      </a>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-[#302b27] px-6 py-10 text-center text-white md:px-16">
        <p className="mb-3 font-serif text-2xl tracking-widest">
          ÉLÉA BEAUTY
        </p>
        <p className="mb-5 text-xs text-white/60">
          Beauté · Bien-être · Élégance
        </p>
        <p className="text-xs text-white/50">
          © 2026 Éléa Beauty. Tous droits réservés.
        </p>
        <p className="mt-3 text-xs text-white/50">
          Site démo réalisé par Nuvora Digital
        </p>
      </footer>
    </main>
  );
}
