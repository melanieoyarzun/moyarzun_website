---
author: "Cristian Candia, Melanie Oyarzún, Victor Landaeta, Tamara Yaikin, Cecilia Monge, César Hidalgo & Carlos Rodríguez-Sickert"
categories:
- article
date: "2022-12-01"
draft: false
excerpt: Usando un juego conductual en tablets conectadas para mapear redes sociales en 45 salas de clase chilenas, encontramos que estudiantes que participan en relaciones de cooperación mutua, es decir, recíprocas, obtienen mejores notas, y que el efecto es mayor para quienes tienen más vínculos recíprocos.
featured: true
layout: paper-single
links:
- icon: doi
  icon_pack: ai
  name: Artículo (Open Access)
  url: https://doi.org/10.1016/j.heliyon.2022.e11916
- icon: paperclip
  icon_pack: fa
  name: Descargar PDF
  url: reciprocity_candiaetal.pdf
show_post_time: false
show_author_byline: false
subtitle: "Heliyon · Cell Press · 2022 · Open Access"
tags:
- social networks
- academic performance
- experimental game theory
- cooperation
- elementary education
- Chile
title: La reciprocidad mejora el rendimiento académico en estudiantes de educación básica
---

<div class="paper-citation-box">
<div class="citation-text">
Candia, C., Oyarzún, M., Landaeta, V., Yaikin, T., Monge, C., Hidalgo, C., & Rodríguez-Sickert, C. (2022). Reciprocity heightens academic performance in elementary school students. <em>Heliyon</em>, 8, e11916. <a href="https://doi.org/10.1016/j.heliyon.2022.e11916">https://doi.org/10.1016/j.heliyon.2022.e11916</a>
</div>
<div class="citation-metrics">
<div class="altmetric-embed" data-badge-type="donut" data-badge-popover="right" data-doi="10.1016/j.heliyon.2022.e11916"></div>
</div>
</div>

<script type="text/javascript" src="https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js"></script>

---

<div class="paper-key-question">
<div class="paper-key-question-label">Pregunta clave</div>
¿Las relaciones mutuas entre pares realmente mejoran el rendimiento académico de los estudiantes, o simplemente los alumnos con mejor desempeño terminan insertos en mejores redes sociales?
</div>

<div class="paper-lede">
<div class="paper-tldr">
<span class="tldr-label">En breve</span>
Mapeamos redes sociales entre pares en 45 salas de clase chilenas usando un juego conductual de cooperación en tablets conectadas. Los estudiantes con más relaciones <em>recíprocas</em>, donde cooperan con compañeros que también cooperan de vuelta, mostraron mejores notas en el semestre siguiente. El efecto es equivalente en tamaño a la caída típica del promedio entre semestres.
</div>
<div class="paper-significance">
<div class="significance-label">Por qué importa</div>
En educación sabemos que las relaciones importan para aprender, pero medir <em>qué</em> relaciones importan y <em>cuánto</em> es difícil. Este estudio entrega una medida conductual de la estructura social del aula, que va más allá de las encuestas, y muestra que los vínculos mutuos y recíprocos son la dimensión más asociada a los resultados de aprendizaje. Eso abre una posibilidad concreta: intervenciones que fortalezcan conexiones recíprocas podrían mejorar el rendimiento académico.
</div>
</div>

---

## Resumen

Las relaciones sociales son fundamentales para los seres humanos, pero todavía no entendemos completamente qué tipos y condiciones de vínculos facilitan el aprendizaje entre niños y niñas. Aquí presentamos los resultados de un estudio con 855 estudiantes de educación básica de 14 escuelas públicas chilenas, diseñado para comprender sus estrategias de aprendizaje social dentro del aula.

Mapeamos relaciones sociales usando un experimento conductual, un dilema social no anónimo, que permite medir cooperación e inferir relaciones recíprocas y asimétricas entre pares. Implementamos el experimento de forma simultánea en cada sala usando tablets conectadas y una interfaz amigable, para reducir barreras cognitivas y aumentar el involucramiento.

Usando modelos de regresión, encontramos una asociación positiva y significativa entre reciprocidad y rendimiento académico, incluso controlando por asistencia, sexo, educación de los padres, estatus social, disposiciones cooperativas individuales y efectos fijos por curso. Con un diseño de diferencias en diferencias entre dos semestres consecutivos, encontramos evidencia robusta de que la reciprocidad incrementa el rendimiento académico. Este efecto es heterogéneo y considerablemente más fuerte para el 20% de estudiantes con niveles más altos de reciprocidad.

---

## Cómo funciona el estudio

### El juego: mapear cooperación sin preguntar

Las encuestas tradicionales sobre relaciones entre pares presentan sesgos conocidos cuando se aplican a niños y niñas: deseabilidad social, barreras cognitivas y bajo involucramiento. Nosotros tomamos otra ruta: en vez de preguntar quién les gusta o no les gusta, *observamos* cómo actúan.

Cada estudiante de un curso jugó simultáneamente un dilema social en una tablet. El juego no es anónimo: sabes con quién juegas y la otra persona sabe que eres tú, de modo que las decisiones tienen un peso social real y reflejan vínculos preexistentes.

{{< figure src="gr1_lrg.jpg" alt="Figura 1: interfaz del juego de cooperación y ejemplo de red de sala de clases" caption="**(A)** El juego: cada estudiante parte con 10 fichas y decide cuántas enviar a cada compañero o compañera. Las fichas enviadas se duplican para quien las recibe. **(B)** Ejemplo de red de aula: los nodos son estudiantes y las aristas representan interacciones completamente cooperativas. El tamaño del nodo es proporcional a la reciprocidad y el color indica promedio de notas. Los nodos más oscuros y grandes, es decir, estudiantes con mayor reciprocidad y mejor rendimiento, tienden a agruparse." class="paper-figure" >}}

La medida central es la **cooperación recíproca (Rᵢ)**: para cada par de estudiantes, el peso recíproco es el mínimo entre lo que A envió a B y lo que B envió a A. Un estudiante con alto Rᵢ tiene muchos compañeros que cooperan mutuamente con él o ella, el equivalente en red a una amistad verdaderamente mutua.

---

### Del comportamiento en el juego a las redes sociales

A partir de las decisiones tomadas en el juego, calculamos cuatro medidas de red para cada estudiante en cada sala:

- **Average in-degree:** cuánta cooperación recibe, en promedio
- **Average out-degree:** cuánta cooperación entrega
- **Reciprocated weight (Rᵢ):** la medida central, es decir, el nivel promedio de cooperación mutua
- **PageRank:** estatus social, considerando el estatus de quienes cooperan contigo

Estas cuatro medidas capturan dimensiones distintas de la posición de cada estudiante en la red del aula: quién está bien conectado, quién tiene influencia y quién sostiene relaciones genuinamente mutuas.

{{< figure src="gr2_lrg.jpg" alt="Figura 2: distribución de conductas cooperativas en el juego" caption="Distribución de fichas enviadas durante el juego. La mayoría de los estudiantes adoptó estrategias totalmente cooperativas (10 fichas) o no cooperativas (0 fichas), mientras una proporción menor usó valores intermedios. Las respuestas completamente cooperativas ocurrieron en aproximadamente 12% de todas las interacciones." class="paper-figure" >}}

---

## Hallazgos principales

### La reciprocidad predice mejores notas, incluso controlando por otras medidas sociales

Usando regresiones OLS con efectos fijos por curso, encontramos que un **aumento de 1 desviación estándar en cooperación recíproca** se asocia con un **aumento de 0.094 puntos en el promedio de notas** (en la escala chilena de 1 a 7), incluso controlando por promedio previo, asistencia, educación parental, sexo y rango social.

Para ponerlo en contexto: la caída promedio del GPA entre los dos semestres estudiados fue de 0.080 puntos. El efecto de la reciprocidad (0.094) equivale a **117% de esa caída típica**, es decir, es lo suficientemente grande como para compensar el descenso habitual entre semestres. En conjunto, las medidas de red explican 18.3% de la variación intraclase en GPA, y la reciprocidad por sí sola explica 5.4%.

Esto se mantiene incluso controlando por disposiciones cooperativas individuales, es decir, cuánto coopera un estudiante en general, y por estatus social (PageRank). En otras palabras, no es solo ser cooperativo o popular lo que importa, sino la *mutualidad* del vínculo.

### Una prueba causal: diferencias en diferencias entre semestres

Las asociaciones pueden reflejar selección: tal vez los estudiantes de mejor rendimiento forman mejores vínculos recíprocos. Para enfrentar eso usamos un marco de **diferencias en diferencias** que compara el GPA de cada estudiante entre dos semestres consecutivos, con efectos fijos individuales que absorben características invariantes en el tiempo, como talento, ingresos del hogar o personalidad.

El estimador diff-in-diff es **δ = 0.038** (p < 0.01): quienes tenían más relaciones recíprocas al inicio del año mejoraron más su GPA en el semestre siguiente que estudiantes comparables con menos reciprocidad. Este efecto es alrededor de 40% mayor que la estimación puramente asociativa, lo que sugiere que, si acaso, controlar por factores no observados fortalece el resultado.

### El efecto es más fuerte para estudiantes con mayor reciprocidad

El efecto no es uniforme: es **heterogéneo y se concentra en la parte alta de la distribución**. Entre estudiantes ubicados en el 20% superior de reciprocidad dentro de su sala, el tamaño del efecto sube a **0.100–0.106**, alrededor de 2.5 veces el efecto promedio. Entre estudiantes con menor reciprocidad, el efecto es más pequeño y está estimado con menor precisión.

Este patrón sugiere una dinámica de umbral o refuerzo: quienes están profundamente insertos en relaciones mutuamente cooperativas obtienen el mayor beneficio de aprendizaje, posiblemente gracias a un intercambio más rico de conocimiento entre pares y a un apoyo social más fuerte.

---

## Palabras clave

Redes sociales · Rendimiento académico · Reciprocidad · Teoría de juegos experimental · Interacción entre pares · Cooperación · Educación primaria · Chile
