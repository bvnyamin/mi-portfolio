# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dos lectores con el mismo peso, que llegan al sitio por canales distintos:

1. **Reclutador / selección (Chile).** Abre el enlace desde una postulación o LinkedIn y escanea en ~30 segundos. Busca señales de si Nicolás califica: experiencia real, stack, certificaciones, y cómo contactarlo. Quiere el CV descargable sin buscarlo.
2. **Lead técnico / desarrollador senior.** Llega después del primer filtro, o directo desde GitHub. Evalúa criterio técnico, no vocabulario: entra a los repos, mira qué decisiones se tomaron y si el código aguanta. No le sirven adjetivos; le sirven artefactos.

El sitio debe servir al escaneo rápido sin volverse superficial para la lectura técnica. Ninguno de los dos es secundario.

## Product Purpose

Portfolio personal de Nicolás Villagrán Peña, egresado de Ingeniería en Informática (UTEM) y desarrollador Full-Stack en ejercicio. Existe para conseguir su siguiente rol, y para que la conversación empiece con evidencia en vez de con un CV genérico.

Éxito = el lector contacta a Nicolás, o entra a un repo/demo. Un visitante que lee todo y se va sin hacer ninguna de las dos cosas es un fracaso del sitio.

## Positioning

**Full-Stack con datos geoespaciales empresariales.** No es un egresado con proyectos de curso: trabajó en plataformas de gestión de incidencias georreferenciadas que operan de verdad en Enel X, usadas por despacho, contratistas y equipos de terreno, llevando una prueba de concepto hasta preproducción y transfiriéndola a un equipo. PostGIS, QGIS Server y Leaflet en contexto productivo es lo que un portfolio de egresado promedio no puede copiar de forma honesta.

Dos capas detrás de eso: IA aplicada (su proyecto de título es un copiloto RAG + NL2SQL para consultas seguras sobre bases de datos) y plataforma/Linux acreditada (Red Hat RH124, ANCI, Cisco, AWS). El argumento es "construyo plataformas que ya están en uso, y sé sostenerlas".

## Operating Context

- Mercado chileno (postulaciones a práctica/junior), con intención de abrirse a roles remotos o internacionales.
- El sitio se comparte como un único enlace: en postulaciones, en LinkedIn, y en conversaciones directas. Suele abrirse primero en móvil y revisarse después en escritorio.
- Compite por atención contra decenas de portfolios de egresados que se ven iguales entre sí.

## Capabilities and Constraints

- Sitio estático de una sola página, sin backend ni formulario con servidor. El contacto es `mailto:` + enlaces a LinkedIn y GitHub.
- Stack existente que se conserva: React 19, TypeScript (strict), Vite 7, Tailwind CSS v4 (vía `@tailwindcss/vite`, sin `tailwind.config`), Framer Motion 12, Lenis para scroll, lucide-react.
- **Bilingüe español + inglés** con switch de idioma. El español es el idioma por defecto. Todo el contenido debe existir en ambos idiomas; ninguna cadena queda hardcodeada en los componentes.
- `npm run build` debe pasar `tsc -b`. Hoy falla con 3 errores de tipos de Framer Motion en objetos `variants` (Certifications, Focus, Skills).
- El portfolio muestra **4–5 proyectos**. Los 3 actuales más uno o dos que Nicolás aún no ha entregado.

## Brand Commitments

- Nombre: Nicolás Villagrán Peña. Identificador actual en el sitio: "Nicolas.dev".
- Restricción visual declarada por el usuario y vinculante: **minimalismo, movimiento/animación, y paleta dark/white**. Sin color decorativo de acento salvo que sea funcional.
- El sitio no debe leerse como generado por IA ni como plantilla.

## Evidence on Hand

Real y verificado, con origen en el CV (`rendercv_output/Nicolás_Villagrán_CV.pdf`) y el perfil público linkedin.com/in/nvillagran-ti:

- **Experiencia laboral (3 entradas).** BLUE EMPRESA consultoría y desarrollo, Full Stack Developer, jul 2026 – actualidad, remoto: plataforma de Due Diligence y evaluación de proveedores. Enel X, Full Stack Developer, mar – jul 2026, remoto: plataforma de gestión de incidencias en preproducción, backend Python/Flask/Jinja sobre PostgreSQL/PostGIS, Leaflet y QGIS sobre Linux. Enel X, práctica profesional ICT, ene – feb 2026, Las Condes, híbrido: prueba de concepto para reemplazar una plataforma interna.
- **Formación.** UTEM, Ingeniería en Informática, 2021–2026, egresado.
- **Proyectos publicados (5).** Copiloto conversacional RAG + NL2SQL (proyecto de título, 2026); gestión de luminarias en Enel X (2026); RestoMap, proyecto en equipo UTEM jul–nov 2025 (Next.js, TypeScript, Flask, SQLAlchemy, PostgreSQL, Docker); ERP Ansimaq 2025 (Python, Streamlit); gimnasio de Pilates 2024 (PHP, MySQL, Twilio). El proyecto de toma de horario universitario (Matlab, MySQL, 2024) existe y está en el CV, pero Nicolás lo retiró del sitio.
- **Gestión de luminarias.** Es **el mismo sistema** que describen las dos entradas de Enel X en la trayectoria, no un trabajo distinto: gestión de incidencias en luminarias de alumbrado público, Python/Flask/Jinja sobre PostgreSQL/PostGIS, cartografía con QGIS Server y Leaflet sobre Linux. Vive como ficha de proyecto porque ahí cabe el detalle técnico; las dos entradas de la trayectoria se acortaron deliberadamente para que el sistema no se cuente tres veces. Código corporativo, no publicable: la ficha lo declara como «Código privado · sistema interno» en vez de «Repositorio en preparación», que sería falso.
- **Certificaciones (5).** ANCI, Respuesta a Incidentes y Taxonomía en Ciberseguridad (ago 2026); Red Hat System Administration I RH124 sobre RHEL 9.3 (jul 2026); Cisco, Introduction to Cybersecurity (dic 2025); BiblioRedes, Inteligencia Artificial Generativa (2025, mes no registrado); AWS Academy Introduction to Cloud S1 y S2 (jul y sept 2024).
- **Contacto.** nvillagran.vp@gmail.com · +56 9 5314 5901 · linkedin.com/in/nvillagran-ti · github.com/bvnyamin · CV en `public/cv-nicolas-villagran.pdf`.
- **Assets.** Retrato de estudio, máster en `src/assets/profile-source.png`, derivados WebP servidos.

- **Proyecto de título.** Repositorio público: https://github.com/bvnyamin/tesis-rag-f1 — «Estudio de Retrieval-Augmented Generation para consultas en lenguaje natural sobre datos estructurados», aplicado a un dataset de Fórmula 1. Recuperación semántica en Chroma, generación de SQL y consulta sobre PostgreSQL, devolviendo la respuesta junto con la SQL y las filas que la sustentan. Tres modos comparables: híbrido completo, SQL sin RAG y LLM puro. Dos capturas entregadas y servidas en `src/assets/projects/`.

- **RestoMap** (búsqueda y gestión de restobares). Proyecto en equipo de la asignatura Talleres de Sistemas de Software, UTEM, bajo la organización `Proyecto-SDS`. Frontend: https://github.com/Proyecto-SDS/front-RestoMap (Next.js/TypeScript) — Nicolás figura como contribuidor con 3 commits de 17. Backend: https://github.com/Proyecto-SDS/back-RestoMap (Flask, SQLAlchemy, Alembic, PostgreSQL, Pydantic, Gunicorn, Docker, pensado para Cloud Run) — Nicolás **no figura** en la lista de contribuidores de la rama por defecto. Ambos se publican, etiquetados «Frontend» y «Backend», y la ficha dice explícitamente que fue un proyecto en equipo; Nicolás tomó esa decisión tras conocer el dato. Ninguno de los cinco repos de la organización contiene capturas de la aplicación.

Confirmado como existente pero **aún no entregado al repositorio**. No inventar:

- URLs de repositorio y demo para los tres proyectos restantes.
- Capturas de esos tres proyectos y de RestoMap.
- El framework de interfaz del copiloto parece Streamlit por los widgets de las capturas, pero Nicolás no lo ha confirmado, así que no figura en el stack publicado.

Dos decisiones explícitas de Nicolás, tomadas tras advertirle del costo de cada una, registradas aquí para que una sesión futura no las revierta por iniciativa propia:

- El teléfono se publica en la página como enlace `tel:`, pese al riesgo de scraping.
- Las capturas de proyectos se muestran **a color**, sin graduación ni desaturación, pese a ser el único tono de una página por lo demás neutra. El retrato sigue en monocromo graduado.

Ausencias que no se deben rellenar: no hay testimonios, métricas de impacto, premios ni prensa. No fabricar ninguno.

## Product Principles

1. **Artefactos sobre adjetivos.** Un repo enlazado vale más que una frase sobre pasión por el código. Cuando haya que elegir entre describir y mostrar, mostrar.
2. **Honestidad de nivel.** Es un perfil junior en titulación y el sitio no finge seniority. La credibilidad se gana siendo preciso sobre lo que sí se hizo, no inflando.
3. **Las dos lecturas conviven.** El escaneo de 30 segundos y la lectura técnica profunda tienen que salir ambos satisfechos del mismo documento, sin que uno estorbe al otro.
4. **Nada inventado.** Slots vacíos marcados antes que contenido de relleno. Un placeholder visible es honesto; un dato falso quema el perfil.
5. **El movimiento es jerarquía, no decoración.** La animación existe para dirigir la atención y dar carácter, no para demostrar que se sabe animar.

## Accessibility & Inclusion

Sin requisito normativo declarado. Aplican las bases: contraste legible sobre fondo oscuro, navegación completa por teclado, foco visible, respeto a `prefers-reduced-motion` (crítico dado el peso del movimiento en la dirección), y texto alternativo real en las imágenes de proyecto.
