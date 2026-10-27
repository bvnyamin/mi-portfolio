# Portfolio — Nicolás Villagrán

Sitio de una página, bilingüe español/inglés. React 19 + TypeScript + Vite 7 + Tailwind v4.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b + vite build
npm run lint
```

---

## De dónde sale el contenido

Todo el texto y los datos vienen de tu CV (`rendercv/rendercv_output/`) y de
tu perfil en linkedin.com/in/nvillagran-ti. Nada está inventado.

El sitio tiene **siete secciones**: Portada, Perfil, Trayectoria, Proyectos,
Stack, Certificaciones y Contacto. El orden lo fija `src/App.tsx`, y los
nombres viven en el array `registers` de **ambos** idiomas.

## Lo que falta por completar

Solo queda una cosa: **los enlaces y las imágenes de tus proyectos.**

### Enlaces de repositorio y demo

En `src/content/data.ts`, dentro de cada proyecto:

```ts
{
  id: "copiloto",
  year: "2026",
  stack: ["Python", "Streamlit", "RAG", "NL2SQL", "Chroma", "PostgreSQL"],
  links: [
    { kind: "code", url: "https://github.com/bvnyamin/tesis-rag-f1" },
  ],
}
```

**Importante:** si no hay enlace, **omite `links` entero**. No pongas `"#"` —
eso renderiza un botón que no lleva a ninguna parte. Sin `links`, el sitio
muestra «Repositorio en preparación», que es honesto.

Un proyecto puede llevar varios enlaces con nombre propio. Los tipos
disponibles son `code`, `backend`, `frontend` y `demo`, y sus etiquetas se
traducen en `projects.links` de cada idioma. El primero de la lista se muestra
con más peso, así que pon primero el que más te represente.

El copiloto RAG + NL2SQL es el proyecto que más va a interesarle a un lead
técnico. Si hay repo, ese es el primero que vale la pena enlazar.

### Imágenes de los proyectos

El copiloto ya tiene dos capturas conectadas; sirven de ejemplo. Para los demás:

1. Déjame las capturas y las proceso — o hazlo tú: apaisadas ~16:10, y guárdalas
   en `src/assets/projects/` como WebP a **480 y 960px** de ancho. Solo WebP:
   no hace falta un JPG de respaldo.
2. En `src/content/data.ts`, impórtalas arriba y agrégalas al proyecto:

```ts
shots: [
  { small: miShot480, large: miShot960 },
],
```

3. En `es.ts` y `en.ts`, agrega `imageAlts` al proyecto: **un texto por captura,
   en el mismo orden**, describiendo lo que realmente se ve. No lo dejes vacío.

**Las capturas van a color**, tal como se ven en pantalla: lo decidiste así
para que se vea la interfaz real. Son el único color del sitio — todo lo demás
(tu retrato incluido) es neutro por diseño. Si alguna vez quieres unificarlas
con el resto, dímelo y las graduó como la foto.

Lo único que les hago es redimensionar y convertir a WebP. Nada de filtros.

### Si agregas una tecnología nueva

Los logos de la sección «Stack» viven en `src/content/marks.ts`: un
trazo SVG por tecnología, extraído una vez del paquete `simple-icons` y
guardado acá para no arrastrar una dependencia de 10 MB.

Para agregar uno:

1. Busca el logo en https://simpleicons.org
2. Copia el `path` del SVG.
3. Agrégalo a `MARKS` usando como clave **el nombre exacto** que aparece en
   `es.ts` / `en.ts`:

```ts
"Kubernetes": "M10.204 14.35l.007...",
```

La clave debe coincidir letra por letra, incluidas mayúsculas. Si no coincide,
el término se muestra solo con texto — que es lo que pasa hoy con *APIs REST*,
*PostGIS*, *Modelado y consultas SQL* y *Fundamentos de AWS*: AWS, Twilio y
MATLAB fueron retirados de simple-icons por sus dueños, y PostGIS nunca estuvo.

**Los logos van monocromos a propósito.** Se pintan con `currentColor`, no con
el color de marca. El único color del sitio es el bermellón de los enlaces;
diecinueve paletas de marca competirían con él.

### Si cambias de trabajo o sacas una certificación

- **Trabajo:** una entrada en `timeline` (`data.ts`), **la más reciente arriba**,
  con `from`/`to` en formato `"2026-07"`. Usa `to: "present"` si sigue vigente.
  Luego la copia en `path.entries` de ambos idiomas.
- **Certificación:** una entrada en `certifications` con `date: "2026-11"`, más
  la copia en `certifications.items`.

Las fechas se formatean solas según el idioma (`jul 2026` / `Jul 2026`), y los
rangos dentro de un mismo año se colapsan a `ene — feb 2026`.

### Revisa el inglés

Escribí la versión en inglés a partir de tu CV y tu LinkedIn. Léela antes de
compartir el sitio con alguien de afuera: `src/content/en.ts`.

## Dos cosas que debes saber

**El CV que descarga la gente** es `public/cv-nicolas-villagran.pdf`, y lo
actualicé con tu versión de RenderCV. Cada vez que regeneres el CV, cópialo ahí
de nuevo o el sitio seguirá entregando el viejo.

**Tu teléfono está publicado** en la sección de Contacto, como enlace `tel:`
para que se pueda tocar y llamar desde un móvil. Lo pediste explícitamente
después de que te advirtiera que un número en HTML público lo recogen los
scrapers de spam. Si en algún momento quieres sacarlo, borra el bloque del
teléfono en `src/sections/Contact.tsx` y las claves `phone` / `phoneHref` en
`src/content/data.ts`.

**La certificación de IA Generativa (BiblioRedes)** está en la lista con año
2025 pero sin mes, porque no aparece en tu CV. Si quieres que quede ordenada
con precisión entre las demás, cambia `date: "2025"` por `"2025-MM"` en
`src/content/data.ts`.

## Sobre tu foto

- El máster es `src/assets/profile-source.png`. No se importa, así que no se
  envía al navegador. Todo se regenera desde ahí.
- La página sirve `portrait-360.webp` (6 KB) y `portrait-720.webp` (17 KB), a
  color natural, elegidos por `srcset` según el ancho y la densidad de pantalla.
  Solo se redimensionó: el fondo oscuro del estudio se funde con la página negra.

**Si cambias la foto**, pídeme que regenere las dos versiones. No subas un PNG
directo.

## Una cosa técnica pendiente

**No hay imagen de Open Graph.** Cuando compartas el enlace en LinkedIn o
WhatsApp va a salir sin miniatura. Necesita un PNG de 1200×630 en `public/` y
una línea `<meta property="og:image">` en `index.html`.

---

## Cómo está organizado

```
src/
  content/      Todo el texto y los datos. Es lo único que vas a editar seguido.
    data.ts     Hechos estructurales: proyectos, timeline, certificaciones, contacto.
    es.ts       Copia en español + copia de proyectos.
    en.ts       Copia en inglés.
    types.ts    Formas de los diccionarios. TypeScript te avisa si falta algo.
  sections/     Un archivo por sección (Hero = Portada … Contact = Contacto).
  components/
    ink/        Encabezado fijo, sección (línea + título + contenido), enlace
                con subrayado a mano, logos de tecnologías.
    layout/     Pie.
  lib/
    layout.ts   El contenedor de la página (ancho máximo y márgenes).
    dates.ts    Formato de fechas y el cálculo de meses de cada etapa.
  i18n/         Proveedor de idioma. Guarda la elección en localStorage.
```

Si agregas una sección nueva, móntala en `src/App.tsx` con el componente
`Section` (`src/components/ink/Section.tsx`), dale un `id` para los enlaces y
agrega su nombre en el array `registers` de **ambos** idiomas.

---

## Sobre el diseño

Decisiones que conviene no romper sin querer:

- **Una columna de texto sobre negro**, al estilo de una página índice
  personal. Fondo `#0A0A0A`, texto `#F2F2F0`, dos grises más suaves y líneas
  finas `#262626`.
- **Un solo color, el bermellón `#FF6A3D`, y solo para señalar:** el subrayado
  a mano de los enlaces, el hover, la selección de texto y la barra de scroll.
  No lo uses en títulos ni fondos.
- **Geist para el texto y Geist Mono para los rótulos chicos en mayúsculas.**
- **El rendimiento es parte del diseño.** El scroll es el nativo del
  navegador: no vuelvas a poner Lenis ni desenfoques (`backdrop-filter`), ni
  animaciones pegadas al scroll. Cada animación es una transición CSS que corre
  una vez (al cargar o al entrar la sección) o al pasar el cursor.
- **Los textos están en pantalla desde el primer pintado.** Solo se animan
  los subrayados, las líneas de sección, la grilla y los hovers.
- **`prefers-reduced-motion` se respeta:** todo aparece ya dibujado.
