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

El sitio tiene **siete registros**: Portada, Perfil, Trayectoria, Proyectos,
Stack, Certificaciones y Contacto. Si agregas o quitas uno, los
contadores («REG. 03 / 07») se recalculan solos — basta con editar
`REGISTER_IDS` en `src/lib/sheet.ts` y el array `registers` en **ambos**
idiomas.

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

Los logos del registro «Stack» viven en `src/content/marks.ts`: un
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
el color de marca. Diecinueve paletas distintas serían el único color del sitio
y romperían el sistema entero.

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

**Tu teléfono está publicado** en el registro de Contacto, como enlace `tel:`
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

El archivo original se llamaba `profile.jpg` pero **era un PNG** con un canal
alfa totalmente opaco — una fotografía guardada en un formato sin pérdida, con
peso muerto encima. Eso explicaba los 600 KB para una imagen de 819×1024.

Ahora:

- El máster quedó como `src/assets/profile-source.png`. No se importa, así que
  no se envía al navegador. Si alguna vez quieres volver a empezar, parte de ahí.
- Lo que sirve la página son `profile-360.webp` y `profile-720.webp`, elegidos
  por `srcset` según el ancho y la densidad de pantalla.
- Un visitante baja **9 KB** en vez de 600 KB.

La foto además está graduada: convertida a escala de grises y pasada por una
curva en S que hunde el fondo del estudio (luminancia 26–41) hasta el fondo de
la página (~9). Por eso ahora la figura emerge de la hoja en vez de verse como
un rectángulo más claro pegado encima.

**Si cambias la foto**, vuelve a generar las dos versiones WebP — el script está en
el historial de esta sesión, o pídemelo de nuevo. No subas un PNG directo.

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
  sections/     Un archivo por registro (01 Portada … 06 Contacto).
  components/
    seismo/     Las piezas del instrumento: trazo, grilla, marca de llegada, enlaces.
    layout/     Riel de registros, barra móvil, selector de idioma, pie.
  lib/
    seismo.ts   La geometría del sismograma. Determinista: la misma semilla
                dibuja siempre la misma línea.
    sheet.ts    Márgenes de la hoja e ids de los registros.
  i18n/         Proveedor de idioma. Guarda la elección en localStorage.
```

Si agregas un registro nuevo, su `id` tiene que entrar en `REGISTER_IDS`
(`src/lib/sheet.ts`) y su nombre en el array `registers` de **ambos** idiomas,
en el mismo orden.

---

## Sobre el diseño

Decisiones que conviene no romper sin querer:

- **Sin color.** La paleta es un fondo `#08090A` y un hueso `#F2F0EB`, cero tono.
  El estado se expresa con grosor de línea y geometría, nunca con color.
- **Una sola familia tipográfica en tres anchos.** Archivo variable: 125% para
  display, 100% para prosa, 78% para etiquetas. La mono (Martian Mono) está
  reservada **solo para mediciones**: coordenadas, contadores, años, marcas de
  fase. Si la usas para una etiqueta que se lee como texto, se rompe el sistema.
- **Un solo momento animado:** el lápiz dibujando el trazo. Nada entra con
  `opacity: 0` — el nombre y los datos están en pantalla desde el primer pintado,
  sin depender de que corra un script.
- **`prefers-reduced-motion` se respeta en serio:** todo aparece ya dibujado.
