---
author: "Mariana Macedo, Melanie Oyarzún, Cristian Candia & César A. Hidalgo"
categories:
- article
date: "2026-08-21"
draft: false
excerpt: "Combinando pageviews multilingües de Wikipedia con un experimento global de trivia, mostramos que la memoria colectiva tiene una prima local medible: las personas recuerdan con mayor probabilidad a figuras históricas que comparten su país o idioma."
featured: true
layout: paper-single
links:
- icon: gamepad
  icon_pack: fas
  name: Play Pantheon Trivia Game
  url: https://pantheon.world/game/trivia
show_post_time: false
show_author_byline: false
subtitle: "Accepted on PNAS NEXUS - Forthcoming"
tags:
- collective memory
- cultural proximity
- Wikipedia
- computational social science
- digital traces
- online experiments
title: La proximidad cultural revela una prima local en la memoria colectiva
---

<div class="paper-citation-box">
<div class="citation-text">
<span class="tldr-label">Accepted on PNAS NEXUS - Forthcoming</span><br>
Macedo, M., Oyarzún, M., Candia, C., & Hidalgo, C. A. (forthcoming). Cultural Proximity Reveals a Local Premium in Collective Memory. <em>PNAS Nexus</em>.
</div>
</div>

---

<div class="paper-key-question">
<div class="paper-key-question-label">Pregunta clave</div>
Cuando las personas recuerdan figuras históricas, ¿cuánto de esa memoria refleja fama global y cuánto refleja proximidad cultural?
</div>

<div class="paper-key-question">
<div class="paper-key-question-label">Idea central</div>
Napoleón y Bernardo O'Higgins son figuras militares y políticas profundamente ligadas a historias nacionales: Napoleón a Francia y O'Higgins a Chile. Pero su fama circula de maneras distintas. Napoleón es reconocido en muchos países e idiomas, mientras que O'Higgins es recordado con mucha más fuerza en Chile y su órbita cultural. Este paper formaliza esa diferencia separando y midiendo los componentes locales y globales de la memoria colectiva, y luego pregunta cómo la proximidad cultural, como compartir país o idioma, moldea a quiénes recordamos.
</div>

<div class="paper-lede">
<div class="paper-tldr">
<span class="tldr-label">En breve</span>
Separamos la memoria colectiva en <em>localidad</em> y <em>globalidad</em> usando trazas de atención multilingües de Wikipedia para más de 50.000 biografías y más de 137 mil millones de pageviews. Luego validamos esas medidas con un experimento de trivia que involucró a más de 41.000 participantes. El resultado: las personas tienen cerca de 10 puntos porcentuales más probabilidad de recordar a alguien de su propio país y cerca de 5 puntos más cuando comparten un idioma.
</div>
<div class="paper-significance">
<div class="significance-label">Por qué importa</div>
La fama suele tratarse como si fuera una sola cosa. Este paper muestra que no lo es. Algunas figuras son recordadas porque la atención se concentra en un contexto cultural local; otras viajan entre idiomas y países. Separar esas dimensiones permite estudiar con más precisión espacial quién se vuelve históricamente visible, quién sigue siendo importante de manera local y cómo los eventos transforman el recuerdo.
</div>
</div>

---

## Resumen

La memoria colectiva, es decir, la información compartida sobre el pasado que moldea la identidad de un grupo, suele estudiarse mediante constructos como familiaridad o saliencia, que confunden sus componentes locales y globales. Aquí separamos esos componentes usando trazas de atención online multilingües para más de 50.000 biografías de Wikipedia, que abarcan 137 mil millones de pageviews, y validamos las medidas resultantes con un experimento conductual a gran escala en el que más de 41.000 participantes respondieron preguntas aleatorizadas sobre esas biografías.

La localidad captura atención concentrada dentro de un solo idioma, mientras que la globalidad captura su distribución entre múltiples idiomas. Ambas dimensiones explican significativamente el reconocimiento y revelan una prima local robusta en la memoria: las personas tienen alrededor de 10 puntos porcentuales más probabilidad de recordar a alguien de su país y 5 puntos más cuando comparten un idioma.

Eventos importantes como premios Nobel, Oscars y muertes producen aumentos locales breves, pero incrementos globales más lentos y sostenidos. Así, la memoria colectiva no es una acumulación uniforme de fama, sino un campo estructurado por la proximidad cultural, donde audiencias locales y globales ejercen influencias medibles sobre la visibilidad histórica en la era digital.

---

## Cómo funciona el estudio

### Paso 1 - Separar la atención local y global

El paper parte de una observación simple: dos personas pueden ser igualmente notables, pero ser recordadas en geografías muy distintas. Johnny Unitas y Elinor Ostrom nacieron en Estados Unidos en 1933. Sin embargo, Unitas recibe la mayor parte de su atención en Wikipedia en inglés, mientras que la atención hacia Ostrom está más distribuida entre idiomas.

{{< figure src="unitas-ostrom.png" alt="Pageviews de Wikipedia para Johnny Unitas y Elinor Ostrom por edición idiomática" caption="El paper usa biografías contrastantes para motivar la diferencia entre memoria colectiva local y global. Johnny Unitas recibe atención fuertemente concentrada en inglés; Elinor Ostrom recibe una audiencia menor, pero más distribuida internacionalmente." class="paper-figure" >}}

Esa diferencia motiva dos medidas:

- **Localidad** - cuán concentrada está la atención hacia una biografía en el idioma donde es más visible.
- **Globalidad** - cuán ampliamente recibe una biografía atención por sobre lo esperado en distintos idiomas.

Juntas, estas medidas permiten ir más allá de una sola escala de "fama" y preguntar si una figura es dominante localmente, distribuida globalmente, ambas cosas o ninguna.

{{< figure src="local-global.png" alt="Localidad y globalidad de biografías, ocupaciones, países, filósofos y personas nacidas en Estados Unidos" caption="Localidad y globalidad descomponen la memoria colectiva en dos dimensiones. Algunas figuras son intensamente recordadas en una esfera cultural-lingüística; otras reciben atención en muchos idiomas." class="paper-figure" >}}

---

### Paso 2 - Validar las medidas con un experimento de trivia aleatorizado

Los pageviews de Wikipedia son útiles, pero son observacionales: las personas eligen qué buscar y qué leer. Para validar las medidas conductualmente, el estudio usa datos de un juego de trivia online donde las biografías fueron asignadas aleatoriamente a los jugadores. Los participantes no eligieron las figuras; tuvieron que responder preguntas aleatorizadas sobre ellas.

Este diseño permite evaluar si localidad, globalidad, país compartido e idioma compartido predicen efectivamente el reconocimiento.

{{< figure src="trivia-experiment.png" alt="Diseño del juego de trivia y resultados por país compartido, localidad y globalidad" caption="Los participantes respondieron preguntas de trivia aleatorizadas sobre biografías. Las respuestas correctas fueron más frecuentes cuando la biografía venía del país del participante, y tanto la localidad como la globalidad predijeron reconocimiento." class="paper-figure" >}}

La prima local es grande. En los resultados descriptivos, los participantes respondieron correctamente **65,45%** de las veces cuando la biografía venía de su propio país, frente a **53,95%** para biografías de otro país. En los modelos de regresión, compartir país aumenta la probabilidad de una respuesta correcta en cerca de **9 a 10 puntos porcentuales**, mientras que compartir idioma agrega cerca de **5 puntos**.

---

### Paso 3 - Seguir la memoria alrededor de eventos importantes

Finalmente, el paper pregunta cómo eventos importantes transforman la atención. Usando pageviews de Wikipedia entre 2015 y 2024, sigue biografías alrededor de muertes, premios Oscar y premios Nobel.

{{< figure src="event-study.png" alt="Estimaciones de event study para pageviews, globalidad y localidad alrededor de muertes, premios Nobel y premios Oscar" caption="Muertes, Oscars y premios Nobel transforman la memoria colectiva de maneras distintas. La atención local tiende a subir rápido, mientras que la globalidad suele crecer más lentamente y persistir por más tiempo." class="paper-figure" >}}

Los resultados muestran que los eventos no simplemente hacen que las personas sean más famosas de una manera uniforme. Las muertes y los Oscars generan shocks fuertes de atención, especialmente local. Los premios Nobel, en cambio, producen un aumento global mayor y más persistente, lo que sugiere que el reconocimiento institucional puede ayudar a que una biografía cruce fronteras culturales y lingüísticas.

---

## Hallazgos principales

### Hallazgo 1 - La memoria colectiva tiene más de una geografía

Localidad y globalidad están relacionadas, pero no son intercambiables. En niveles bajos de reconocimiento suelen moverse juntas, pero entre biografías muy visibles divergen. Una figura puede ser dominante localmente sin estar distribuida globalmente, o puede ser reconocida globalmente sin ser la figura más prominente en un contexto idiomático específico.

Esto importa porque una medida unidimensional de fama aplastaría huellas culturales muy distintas en un mismo número.

### Hallazgo 2 - La proximidad cultural predice recuerdo

Las personas recuerdan con mayor frecuencia figuras culturalmente próximas. El estudio encuentra una prima local robusta para país compartido e idioma compartido, incluso después de considerar las medidas de localidad y globalidad derivadas de Wikipedia, las características de las biografías, año de nacimiento, ocupación y lugar de nacimiento.

El punto central es conductual: la proximidad cultural no solo aparece en los pageviews; también aparece en lo que las personas pueden reconocer cuando las preguntas son asignadas aleatoriamente.

### Hallazgo 3 - Los eventos modifican de forma distinta la memoria local y global

Muertes, Oscars y premios Nobel aumentan la atención, pero lo hacen con firmas locales y globales distintas. La localidad suele subir rápido y luego desvanecerse; la globalidad puede crecer más lento y durar más. La forma de la memoria depende no solo del evento, sino también de si la audiencia es local o global.

---

## Palabras clave

Memoria colectiva · Proximidad cultural · Wikipedia · Ciencia social computacional · Trazas digitales · Experimentos online · Localidad · Globalidad
