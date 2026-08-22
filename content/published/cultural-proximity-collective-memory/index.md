---
author: "Mariana Macedo, Melanie Oyarzún, Cristian Candia & César A. Hidalgo"
categories:
- article
date: "2026-08-21"
draft: false
excerpt: "Combining multilingual Wikipedia pageviews with a large-scale trivia experiment, we show that collective memory has a measurable local premium: people are substantially more likely to remember historical figures who share their country or language."
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
title: Cultural Proximity Reveals a Local Premium in Collective Memory
---

<div class="paper-citation-box">
<div class="citation-text">
<span class="tldr-label">Accepted on PNAS NEXUS - Forthcoming</span><br>
Macedo, M., Oyarzún, M., Candia, C., & Hidalgo, C. A. (forthcoming). Cultural Proximity Reveals a Local Premium in Collective Memory. <em>PNAS Nexus</em>.
</div>
</div>

---

<div class="paper-key-question">
<div class="paper-key-question-label">Key question</div>
When people remember historical figures, how much of that memory reflects global fame, and how much reflects cultural proximity?
</div>

<div class="paper-key-question">
<div class="paper-key-question-label">Core idea</div>
Napoleon and Bernardo O'Higgins are both military and political figures deeply tied to national history: Napoleon to France, and O'Higgins to Chile. But their fame circulates differently. Napoleon is recognized across many countries and languages, while O'Higgins is remembered much more strongly within Chile and its cultural orbit. This paper formalizes that difference by separating and measuring the local and global components of collective memory, and then asks how cultural proximity, such as sharing a country or language, shapes who people remember.
</div>

<div class="paper-lede">
<div class="paper-tldr">
<span class="tldr-label">TL;DR</span>
We separate collective memory into <em>locality</em> and <em>globality</em> using multilingual Wikipedia attention traces for more than 50,000 biographies and over 137 billion pageviews. Then we validate those measures with a trivia experiment involving more than 41,000 participants. The result: people are about 10 percentage points more likely to recall someone from their own country and about 5 points more likely when they share a language.
</div>
<div class="paper-significance">
<div class="significance-label">Why it matters</div>
Fame is often treated as if it were one thing. This paper shows it is not. Some figures are remembered because attention is concentrated in a local cultural context; others travel across languages and countries. Separating those dimensions gives us a more spatially aware way to study who becomes historically visible, who remains locally important, and how events reshape remembrance.
</div>
</div>

---

## Abstract

Collective memory - shared information about the past that shapes a group's identity - is often examined through constructs such as familiarity or salience, conflating its local and global components. Here, we untangle these components using multilingual online attention traces for over 50,000 Wikipedia biographies spanning 137 billion pageviews and validate the resulting measures with a large-scale behavioral experiment in which more than 41,000 participants answered randomized questions about them.

Locality reflects attention concentrated within a single language, and globality reflects its distribution across multiple languages. Both dimensions significantly explain recognition, revealing a robust local memory premium: people are around 10 percentage points more likely to recall someone from their country and 5 points more likely when they share a language.

Major life events such as Nobel Prizes, Oscars, and deaths produce brief local surges but slower, sustained global increases. Thus, collective memory is not a uniform accumulation of fame but a structured field of cultural proximity, offering a spatially nuanced view in which local and global audiences exert measurable influences on historical visibility in the digital age.

---

## How the study works

### Step 1 - Split collective memory into local and global attention

The paper starts from a simple observation: two people can be similarly notable, but remembered in very different geographies. Johnny Unitas and Elinor Ostrom were both born in the United States in 1933. Yet Unitas receives most of his Wikipedia attention in English, while Ostrom's attention is more distributed across languages.

{{< figure src="unitas-ostrom.png" alt="Wikipedia pageviews for Johnny Unitas and Elinor Ostrom by language edition" caption="The paper uses contrasting biographies to motivate the difference between local and global collective memory. Johnny Unitas receives highly concentrated attention in English; Elinor Ostrom receives a smaller but more internationally distributed audience." class="paper-figure" >}}

That difference motivates two measures:

- **Locality** - how concentrated a biography's attention is in the language where it is most visible.
- **Globality** - how broadly a biography receives above-expected attention across languages.

Together, these measures let us move beyond a single scale of "fame" and ask whether a figure is locally dominant, globally distributed, both, or neither.

{{< figure src="local-global.png" alt="Locality and globality of biographies, occupations, countries, philosophers, and people born in the United States" caption="Locality and globality decompose collective memory into two dimensions. Some figures are intensely remembered in one cultural-linguistic sphere, while others receive attention across many languages." class="paper-figure" >}}

---

### Step 2 - Validate the measures with a randomized trivia game

Wikipedia pageviews are useful, but they are observational: people choose what to search for and read. To validate the measures behaviorally, the study uses data from an online trivia game where biographies were randomly assigned to players. Participants did not choose the figures; they had to answer randomized questions about them.

This design lets us test whether locality, globality, shared country, and shared language actually predict recognition.

{{< figure src="trivia-experiment.png" alt="Trivia game design and results for shared country, locality, and globality" caption="Participants answered randomized trivia questions about biographies. Correct responses were more frequent when the biography came from the participant's country, and both locality and globality predicted recognition." class="paper-figure" >}}

The local premium is large. In the descriptive results, participants answered correctly about **65.45%** of the time when the biography came from their own country, compared with **53.95%** for different-country biographies. In the regression models, sharing a country increases the probability of a correct answer by about **9 to 10 percentage points**, while sharing a language adds about **5 points**.

---

### Step 3 - Follow memory around major life events

Finally, the paper asks how major events reshape attention. Using Wikipedia pageviews from 2015 to 2024, it follows biographies around deaths, Oscar wins, and Nobel Prizes.

{{< figure src="event-study.png" alt="Event-study estimates for pageviews, globality, and locality around death, Nobel Prize, and Oscar events" caption="Deaths, Oscars, and Nobel Prizes reshape collective memory differently. Local attention tends to spike quickly, while globality often grows more slowly and persists longer." class="paper-figure" >}}

The results show that events do not simply make people more famous in a uniform way. Deaths and Oscars generate sharp attention shocks, especially locally. Nobel Prizes, by contrast, produce a larger and more persistent global increase, suggesting that institutional recognition can help a biography cross cultural and linguistic boundaries.

---

## Key findings

### Finding 1 - Collective memory has more than one geography

Locality and globality are related, but not interchangeable. At lower levels of recognition they often move together, but among highly visible biographies they diverge. A figure can be locally dominant without being globally distributed, or globally recognized without being the most prominent figure in any single language context.

This matters because a one-dimensional fame score would flatten very different cultural footprints into the same number.

### Finding 2 - Cultural proximity predicts recall

People remember culturally proximate figures more often. The study finds a robust local memory premium for shared country and shared language, even after accounting for the Wikipedia-derived locality and globality measures, biography characteristics, birth year, occupation, and birthplace.

The core point is behavioral: cultural proximity is not only visible in pageviews; it also appears in what people can recognize when questions are randomly assigned.

### Finding 3 - Events change local and global memory differently

Deaths, Oscars, and Nobel Prizes all increase attention, but they do so with distinct local and global signatures. Locality often rises quickly and fades; globality can grow more slowly and last longer. The shape of memory depends not only on the event, but on whether the audience is local or global.

---

## Keywords

Collective memory · Cultural proximity · Wikipedia · Computational social science · Digital traces · Online experiments · Locality · Globality
