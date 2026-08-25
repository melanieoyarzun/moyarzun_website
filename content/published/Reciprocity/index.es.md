---
author: "Cristian Candia, Melanie Oyarzún, Victor Landaeta, Tamara Yaikin, Cecilia Monge, César Hidalgo & Carlos Rodríguez-Sickert"
categories:
- article
date: "2022-12-01"
draft: false
excerpt: Mapeamos redes de cooperación en 45 salas de clase chilenas usando un dilema social no anónimo en tablets y, con un diseño de diferencias en diferencias entre semestres, mostramos que mayor reciprocidad se asocia con una mejora diferencial del rendimiento académico.
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
Candia, C., Oyarzún, M., Landaeta, V., Yaikin, T., Monge, C., Hidalgo, C., & Rodríguez-Sickert, C. (2022). Reciprocity heightens academic performance in elementary school students. <em>Heliyon</em>, 8(12), e11916. <a href="https://doi.org/10.1016/j.heliyon.2022.e11916">https://doi.org/10.1016/j.heliyon.2022.e11916</a>
</div>
<div class="citation-metrics">
<div class="altmetric-embed" data-badge-type="donut" data-badge-popover="right" data-doi="10.1016/j.heliyon.2022.e11916"></div>
</div>
</div>

<script type="text/javascript" src="https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js"></script>

---

<div class="paper-key-question">
<div class="paper-key-question-label">Pregunta clave</div>
¿Quiénes mejoran más su rendimiento durante el año escolar: estudiantes inmersos en relaciones recíprocas de cooperación, o sus compañeros y compañeras que no lo están?
</div>

<div class="paper-lede">
<div class="paper-tldr">
<span class="tldr-label">En breve</span>
Mapeamos redes de cooperación en 45 salas de clase chilenas usando un dilema social no anónimo en tablets. Estudiantes con más vínculos recíprocos, donde cooperan con compañeros que también cooperan de vuelta, mejoraron más su rendimiento entre el primer y el segundo semestre. Con un diseño de diferencias en diferencias dentro del mismo curso, el efecto es <em>causalmente identificado</em> y se concentra en el 20% con mayor reciprocidad.
</div>
<div class="paper-significance">
<div class="significance-label">Por qué importa</div>
La idea de que "las relaciones importan" es ampliamente compartida en educación, pero rara vez se mide bien <em>cuáles</em> relaciones y <em>cuánto</em>. Aquí proponemos una pipeline reproducible — juego diádico → red dirigida → indicadores → DiD — que permite cuantificar el efecto de la estructura social del aula sobre el aprendizaje. El mismo diseño es extensible a equipos de trabajo, comunidades de práctica y otras organizaciones donde la cooperación sea parte del producto.
</div>
</div>

## Resumen

Las relaciones sociales son una infraestructura central del aprendizaje, pero todavía sabemos poco sobre qué tipos y condiciones de vínculos lo facilitan. Estudiamos 855 estudiantes de educación básica en 14 escuelas públicas de Chile, distribuidos en 45 aulas, durante dos semestres consecutivos.

Mapeamos las relaciones de cooperación con un dilema social no anónimo entre pares, implementado de forma simultánea en cada sala usando tablets conectadas con una interfaz amigable. A partir de esas decisiones reconstruimos una red dirigida por aula y calculamos, a nivel estudiante, indicadores de cooperación entrante, saliente, recíproca y de estatus social.

Con regresiones OLS con efectos fijos por curso encontramos una asociación positiva y significativa entre reciprocidad y rendimiento académico, robusta a controles individuales. Con un diseño de diferencias en diferencias entre semestres, identificamos el efecto: mayor reciprocidad genera una mejora diferencial del GPA. El efecto es heterogéneo y considerablemente más fuerte para el 20% con mayor reciprocidad.

---

## Cómo funciona el estudio

### Paso 1 — La pregunta

No comparamos *niveles* de rendimiento, comparamos *cambios*. La pregunta es trayectorial: dentro de un mismo curso, ¿quién mejora más entre el primer y el segundo semestre — los estudiantes inmersos en relaciones recíprocas de cooperación o los que no?

Es una pregunta deliberadamente angosta. Nos permite usar al estudiante como su propio control en el tiempo y al curso como su propio control en el espacio, lo que después se traduce limpiamente en un diseño de diferencias en diferencias.

<div class="paper-key-question">
<div class="paper-key-question-label">Pregunta operativa</div>
Dada la estructura de cooperación de un aula al inicio del año, ¿qué predice la reciprocidad de cada estudiante sobre el <em>cambio</em> de su rendimiento entre semestres, después de descontar lo que aporta el curso y lo que aporta el propio estudiante?
</div>

---

### Paso 2 — La medición: un juego de cooperación no anónimo

En lugar de preguntar quién es amigo de quién, *observamos* cómo deciden. Cada estudiante de un curso jugó simultáneamente, desde su tablet, un dilema social no anónimo: sabe con quién juega y la otra persona sabe que es él o ella, de modo que las decisiones tienen un peso social real.

Cada estudiante recibe **10 tokens** y decide cuántos enviar a cada compañero o compañera identificado de su curso. Los tokens recibidos se **duplican** para quien los recibe. Es una decisión con bajo costo individual y alto beneficio para el otro: una forma operacional de medir disposición a cooperar.

{{< figure src="gr1_lrg.jpg" alt="Figura 1: interfaz del juego de cooperación y ejemplo de red de sala de clases" caption="**(A)** El juego de cooperación: cada estudiante parte con 10 tokens y decide cuántos enviar a cada compañero o compañera. Los tokens recibidos se duplican. **(B)** Ejemplo de red emergente de un aula: los nodos son estudiantes; las aristas, interacciones cooperativas. El tamaño del nodo es proporcional a la reciprocidad y el color al promedio de notas. Los nodos más grandes y oscuros, es decir, mayor reciprocidad y mejor rendimiento, tienden a agruparse." class="paper-figure" >}}

{{< figure src="gr2_lrg.jpg" alt="Figura 2: distribución de fichas enviadas durante el juego" caption="Distribución de tokens enviados. La mayoría de los estudiantes adopta estrategias extremas: cooperación total (10 tokens) o no cooperación (0 tokens). Aproximadamente 12% de las interacciones fueron completamente cooperativas." class="paper-figure" >}}

---

### Paso 3 — Cada decisión deja una huella relacional

Las elecciones individuales, agregadas, reconstruyen una **red dirigida de cooperación por aula**. El curso deja de ser una caja negra: se vuelve un objeto observable, donde cada arista tiene dirección, peso y un destinatario con nombre.

En total, alrededor de **17.000 decisiones diádicas** sobre **45 redes locales** que comparten un mismo formato y por lo tanto pueden agruparse en un análisis a nivel estudiante con efectos fijos por curso.

<div class="network-explainer">
<div class="network-card">
<div class="network-card-title">↔ Vínculo recíproco</div>
A envía tokens a B <em>y</em> B envía tokens a A. La cooperación va en las dos direcciones. Es la primitiva clave del estudio.
</div>
<div class="network-card">
<div class="network-card-title">→ Vínculo no recíproco</div>
A envía tokens a B, pero B no envía a A. Hay cooperación, pero no es mutua. Aporta a la red, pero no a la reciprocidad de A.
</div>
</div>

---

### Paso 4 — De la red a indicadores cuantitativos

Traducimos la red en cuatro indicadores a nivel estudiante, que capturan dimensiones distintas de su posición en la estructura del aula:

- **Average in-degree** — cuánta cooperación recibe, en promedio.
- **Average out-degree** — cuánta cooperación entrega.
- **Reciprocated weight (Rᵢ)** — la variable central: para cada par, el peso recíproco es el mínimo entre lo que A envió a B y lo que B envió a A. Rᵢ es el promedio sobre los vínculos del estudiante.
- **PageRank** — estatus social, considerando el estatus de quienes cooperan con cada estudiante.

La separación importa: queremos descartar que el efecto que veremos venga de *recibir mucho*, *dar mucho* o ser *popular*. La hipótesis específica es que importa la **mutualidad** del vínculo, no su volumen ni su prestigio.

---

### Paso 5 — Diseño causal: diferencias en diferencias entre semestres

Una correlación entre reciprocidad y rendimiento puede ser selección: tal vez los estudiantes con mejor desempeño previo forman mejores vínculos recíprocos. Para enfrentar eso usamos un **diseño de diferencias en diferencias** entre dos semestres consecutivos, con efectos fijos individuales que absorben todo lo invariante en el tiempo a nivel estudiante — talento, personalidad, ingreso del hogar, capital cultural — y efectos fijos por curso que absorben todo lo que comparte un aula.

La idea operativa: para cada estudiante, comparamos su cambio de GPA entre semestres en función de su nivel de reciprocidad al inicio del año. Después comparamos esos cambios entre estudiantes del mismo curso. El estimador DiD es **δ = Δ alta reciprocidad − Δ baja reciprocidad**.

<div class="paper-key-question">
<div class="paper-key-question-label">Idea central</div>
No comparamos <em>niveles</em>. Comparamos <em>cambios</em>. Lo que sobrevive a los efectos fijos es la parte del cambio que la reciprocidad puede explicar dentro del mismo curso.
</div>

---

## Hallazgos principales

### Hallazgo 1 — La reciprocidad predice mejor GPA, incluso controlando por otras dimensiones de la red

Con regresiones OLS con efectos fijos por curso, **un aumento de 1 desviación estándar en cooperación recíproca se asocia con +0.094 puntos de GPA** (escala chilena 1–7), controlando por GPA previo, asistencia, educación parental, sexo y rango social.

En contexto: la caída promedio del GPA entre los dos semestres estudiados fue de 0.080 puntos. El efecto de la reciprocidad (0.094) equivale al **117% de esa caída típica**: suficiente, en magnitud, para compensar el descenso habitual entre semestres. Las cuatro medidas de red en conjunto explican el **18.3% de la variación intraclase**; la reciprocidad por sí sola, el **5.4%**.

El resultado se mantiene al controlar por disposiciones cooperativas individuales — cuánto coopera un estudiante en promedio — y por estatus social (PageRank). No es ser cooperativo, ni ser popular: es la *mutualidad* del vínculo.

---

### Hallazgo 2 — Identificación causal: DiD entre semestres

Con el diseño de diferencias en diferencias, el estimador es **δ = 0.039*** (EE = 0.012, p < 0.01)**. Quienes tenían mayor reciprocidad al inicio del año mejoraron más su GPA en el semestre siguiente que estudiantes comparables del mismo curso con menor reciprocidad.

El efecto identificado por DiD es del orden del estimador asociativo y, si acaso, ligeramente mayor — controlar por factores no observables fortalece el resultado en lugar de erosionarlo.

{{< figure src="reciprocity_main_fig.png" alt="Diseño Difference-in-Differences: dos líneas, alta y baja reciprocidad, entre semestre 1 y semestre 2; efecto DiD destacado" caption="Visualización del diseño DiD. Línea verde petróleo: trayectoria del grupo con mayor reciprocidad (pendiente más alta entre semestres). Línea beige: grupo con menor reciprocidad. La distancia naranja al final mide el efecto DiD = Δ alta − Δ baja, con β = 0.039*** para la versión continua y +0.10 puntos de GPA para el top 20%." class="paper-figure" >}}

---

### Hallazgo 3 — El efecto es heterogéneo y se concentra en el top 20%

El efecto no es uniforme: se concentra en la parte alta de la distribución de reciprocidad. Entre estudiantes ubicados en el **20% superior de reciprocidad dentro de su sala**, el tamaño del efecto sube a **+0.10 puntos de GPA*** (EE = 0.034)**, alrededor de 2.5 veces el efecto promedio. Entre estudiantes con menor reciprocidad, el efecto es más pequeño y se estima con menor precisión.

El patrón sugiere una dinámica de **umbral o refuerzo**: quienes están profundamente insertos en relaciones mutuamente cooperativas obtienen el mayor beneficio de aprendizaje, posiblemente por un intercambio de conocimiento entre pares más rico y un sostén social más consistente.

<div class="paper-key-question">
<div class="paper-key-question-label">Lectura</div>
Las relaciones recíprocas no son sólo vínculos sociales: pueden funcionar como una <em>estructura</em> que sostiene el desempeño dentro del aula.
</div>

---

## Extensión: del aula a otras organizaciones

El pipeline metodológico es portable.

<div class="network-explainer">
<div class="network-card">
<div class="network-card-title">1. Juego diádico no anónimo</div>
Una decisión repetida, con bajo costo individual y alto beneficio relacional, jugada entre miembros identificados de un mismo grupo. En el aula fueron tokens; en una empresa pueden ser horas de mentoría, referencias a recursos, atribución de crédito en proyectos.
</div>
<div class="network-card">
<div class="network-card-title">2. Red dirigida</div>
Las decisiones agregadas reconstruyen quién aporta a quién. Pesos por intensidad, dirección por origen.
</div>
<div class="network-card">
<div class="network-card-title">3. Indicadores estructurales</div>
A nivel individuo: in-degree, out-degree, reciprocidad, PageRank. La <em>mutualidad</em> es la primitiva clave.
</div>
<div class="network-card">
<div class="network-card-title">4. Diseño DiD sobre desempeño</div>
Con dos cortes temporales (o más), efectos fijos individuales y de unidad organizacional, se identifica el efecto de la posición estructural sobre la trayectoria de desempeño.
</div>
</div>

El diseño es replicable en equipos de trabajo, comunidades de práctica, programas de innovación interna, redes de tutoría académica y, en general, en cualquier organización donde la cooperación recíproca sea parte de la infraestructura del producto. La promesa práctica: intervenciones que fortalezcan vínculos recíprocos podrían mejorar el desempeño, no por cambiar al individuo sino por cambiar la estructura en que decide.

---

## Palabras clave

Redes sociales · Rendimiento académico · Reciprocidad · Teoría de juegos experimental · Interacción entre pares · Cooperación · Educación primaria · Chile · Diferencias en diferencias
