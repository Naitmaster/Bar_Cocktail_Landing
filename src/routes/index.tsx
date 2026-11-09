import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-cocktail.jpg";
import eventBar from "@/assets/event-bar.jpg";
import arturo from "@/assets/arturo.jpg";

const IG = "https://www.instagram.com/arthur_8a/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arturo Bartender — Cocktail Bar para tus eventos" },
      { name: "description", content: "Barra de coctelería de autor para bodas, cumpleaños y eventos corporativos con Arturo Bartender." },
      { property: "og:title", content: "Arturo Bartender — Cocktail Bar para tus eventos" },
      { property: "og:description", content: "Coctelería de autor y barra móvil para bodas, fiestas y eventos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { t: "Bodas", d: "Barra elegante y cócteles de Autor creados para la pareja." },
  { t: "Fiestas Privadas", d: "Cumpleaños, Aniversarios y Reuniones con Mixología en vivo." },
  { t: "Eventos Corporativos", d: "Servicio Profesional y Menú adaptado a tu Marca." },
];
const menu = [
  ["Old Fashioned Ahumado", "bourbon, bitters, naranja, humo de roble"],
  ["Margarita de la Casa", "tequila, limón, agave, sal de chile"],
  ["Mojito Clásico", "ron blanco, hierbabuena, lima, soda"],
  ["Espresso Martini", "vodka, café, licor de café"],
];

function Index() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <img src={hero} alt="Bartender sirviendo un cóctel" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-fade" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-24">
          <p className="tracking-[0.3em] text-primary uppercase text-sm">Arturo · Bartender</p>
          <h1 className="mt-4 max-w-3xl text-6xl leading-none md:text-8xl">Cocktail Bar <em className="text-primary">para tu Evento</em></h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">Coctelería de Autor, Barra Completa y Servicio Profesional para que tus Invitados brinden con algo Memorable.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={IG} target="_blank" rel="noreferrer" className="rounded-sm bg-primary px-7 py-3 font-semibold text-primary-foreground transition hover:opacity-90">Cotiza por Instagram</a>
            <a href="#menu" className="rounded-sm border border-primary px-7 py-3 text-primary transition hover:bg-primary/10">Ver menú</a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-24 md:grid-cols-3">
        {services.map((s, i) => (
          <div key={s.t} className="border-t border-primary/40 pt-6">
            <span className="font-display text-primary text-2xl">0{i + 1}</span>
            <h3 className="mt-2 text-3xl">{s.t}</h3>
            <p className="mt-3 text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </section>

      <section id="menu" className="bg-card py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <img src={eventBar} alt="Barra móvil de cócteles en una boda" loading="lazy" width={1200} height={912} className="rounded-sm" />
          <div>
            <h2 className="text-5xl">Menú de Autor</h2>
            <ul className="mt-8 space-y-6">
              {menu.map(([n, d]) => (
                <li key={n} className="border-b border-border pb-4">
                  <p className="font-display text-2xl text-primary">{n}</p>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">Menús personalizados según tu evento.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[1fr_1.4fr]">
        <img src={arturo} alt="Arturo, bartender" loading="lazy" width={640} height={640} className="rounded-sm" />
        <div>
          <p className="tracking-[0.3em] text-primary uppercase text-sm">Tu bartender</p>
          <h2 className="mt-3 text-5xl">Hola, soy Arturo</h2>
          <p className="mt-6 text-lg text-muted-foreground">Bartender apasionado por la mixología. Llevo la barra, la cristalería y los ingredientes frescos hasta tu evento para que tú solo disfrutes.</p>
        </div>
      </section>

      <section className="bg-secondary py-24 text-center">
        <h2 className="text-5xl text-secondary-foreground">¿Listo para brindar?</h2>
        <p className="mt-4 text-muted-foreground">Envíame un mensaje con la fecha y número de invitados.</p>
        <a href={IG} target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-sm bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:opacity-90">@arthur_8a en Instagram</a>
      </section>

      <footer className="py-8 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Arturo Bartender</footer>
    </main>
  );
}
