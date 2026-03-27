---
author: "Cristian Candia, Melanie Oyarzún, Victor Landaeta, Tamara Yaikin, Cecilia Monge, César Hidalgo & Carlos Rodríguez-Sickert"
categories:
- article
date: "2022-12-01"
draft: false
excerpt: Using a behavioral game on networked tablets to map social networks in 45 Chilean classrooms, we find that students who engage in more mutually cooperative (reciprocal) peer relationships achieve higher grades — and the effect is largest for students with the most reciprocal ties.
featured: true
layout: paper-single
links:
- icon: doi
  icon_pack: ai
  name: Journal (Open Access)
  url: https://doi.org/10.1016/j.heliyon.2022.e11916
- icon: paperclip
  icon_pack: fa
  name: Download PDF
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
title: Reciprocity heightens academic performance in elementary school students
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
<div class="paper-key-question-label">Key question</div>
Do mutual peer relationships actually improve students' academic performance, or do high-performing students simply end up in better social networks?
</div>

<div class="paper-lede">
<div class="paper-tldr">
<span class="tldr-label">TL;DR</span>
We mapped peer social networks in 45 Chilean classrooms using a behavioral cooperation game on networked tablets. Students with more <em>reciprocal</em> relationships — where they cooperate with classmates who also cooperate back — showed higher grades the following semester. The effect is equivalent in size to the typical drop in GPA between semesters.
</div>
<div class="paper-significance">
<div class="significance-label">Why it matters</div>
Educators know that relationships matter for learning, but measuring <em>which</em> relationships and <em>how much</em> is hard. This study provides a behaviorally grounded measure of classroom social structure — one that goes beyond surveys — and shows that mutual, reciprocal ties are the component most linked to learning outcomes. That's actionable: interventions that strengthen reciprocal connections could boost academic performance.
</div>
</div>

---

## Abstract

Social relationships are pivotal for human beings, yet we still lack a complete understanding of the types and conditions of social relationships that facilitate learning among children. Here, we present the results of a study involving 855 elementary school children from 14 different public schools in Chile, designed to understand their social learning strategies in classrooms.

We mapped students' social relationships using a behavioral experiment — a non-anonymous social dilemma — that allows us to measure cooperation and infer reciprocal and asymmetrical relationships between peers. We implemented the experiment synchronously in each classroom using networked tablets and a friendly user interface to mitigate cognitive barriers and boost engagement.

Using regression models, we found a positive and significant association between reciprocity and academic performance, after controlling for attendance, sex, parents' education, social status, individual cooperative dispositions, and class-group fixed effects. Using a difference-in-differences framework comparing two consecutive academic semesters, we found robust evidence that reciprocity heightens academic performance. This effect is heterogeneous and considerably more prominent for the top 20% of students experiencing higher levels of reciprocity.

---

## How the study works

### The game: mapping cooperation without asking

Traditional surveys of peer relationships suffer from well-known biases in children: social desirability (saying what seems expected), cognitive barriers (not fully understanding questions), and lack of engagement. We took a different approach — instead of asking who students like or dislike, we *observed* how they act.

Every student in a class played a social dilemma simultaneously on a tablet. The game is non-anonymous: you know who you are playing with, and they know it's you — which means choices have real social weight and reflect pre-existing relationships.

{{< figure src="gr1_lrg.jpg" alt="Figure 1: The cooperation game interface and an example classroom network" caption="**(A)** The game: each student starts with 10 tokens and decides how many to send to each classmate. Sent tokens are doubled for the receiver. **(B)** Example classroom network: nodes are students, edges represent fully cooperative interactions. Node size is proportional to reciprocity; color indicates GPA. Darker, larger nodes — more reciprocal, higher-performing students — cluster together." class="paper-figure" >}}

The key measure is **reciprocated cooperation (Rᵢ)**: for each pair of students, the reciprocated weight is the minimum of what A sent to B and what B sent to A. A student with high Rᵢ has many classmates who mutually cooperate with them — the network analog of mutual friendship.

---

### From game behavior to social networks

From each student's in-game decisions, we computed four network measures for every student in each classroom:

- **Average in-degree:** how much cooperation a student receives on average
- **Average out-degree:** how much cooperation a student sends
- **Reciprocated weight (Rᵢ):** the core measure — the average level of mutual cooperation
- **PageRank:** social status, accounting for the status of those who cooperate with you

These four measures together capture different dimensions of a student's position in the classroom social network — who is well-connected, who is influential, and who has genuinely mutual relationships.

{{< figure src="gr2_lrg.jpg" alt="Figure 2: Distribution of cooperative behaviors in the game" caption="Distribution of tokens sent during the game. Most students engaged in either fully cooperative (10 tokens) or non-cooperative (0 tokens) strategies, with a small proportion using intermediate values. Fully cooperative responses occurred in about 12% of all interactions." class="paper-figure" >}}

---

## Key findings

### Reciprocity predicts higher grades — above and beyond other social measures

Using OLS regression with class-group fixed effects, we find that a **1 standard deviation increase in reciprocated cooperation** is associated with a **GPA increase of 0.094 points** (on Chile's 1–7 grading scale), after controlling for prior GPA, attendance, parents' education, sex, and social rank.

To put this in context: the average drop in GPA between the two semesters studied was 0.080 points. The effect of reciprocity (0.094) is **117% of that typical decline** — large enough to offset the usual between-semester dip. Social network measures together explain 18.3% of the within-classroom variance in GPA, with reciprocity alone accounting for 5.4%.

This holds after controlling for individual cooperative dispositions (how much a student sends in general) and social status (PageRank), which means it is the *mutuality* of the relationship — not just being cooperative or popular — that drives the result.

### A causal test: difference-in-differences across semesters

Associations can reflect selection: maybe higher-achieving students happen to form better reciprocal ties. To address this, we use a **difference-in-differences** framework comparing each student's GPA across two consecutive semesters, with individual fixed effects absorbing all time-invariant characteristics (talent, household income, personality).

The diff-in-diff estimator is **δ = 0.038** (p < 0.01): students who had more reciprocal relationships at the start of the year improved their GPA more over the following semester compared to similar students with fewer reciprocal ties. This effect is about 40% larger than the pure associative estimate, suggesting that controlling for unobserved confounders, if anything, strengthens the finding.

### The effect is strongest for the most reciprocal students

The effect is not uniform: it is **heterogeneous and concentrated at the top**. Among students in the top 20% of reciprocated cooperation in their classroom, the effect size jumps to **0.100–0.106** — about 2.5 times larger than the average effect. Among students with lower reciprocity, the effect is smaller and less precisely estimated.

This pattern suggests a threshold or reinforcement dynamic: students who are deeply embedded in mutually cooperative relationships get the most learning benefit, possibly through richer peer-to-peer knowledge exchange and stronger social support.

---

## Keywords

Social networks · Academic performance · Reciprocity · Experimental game theory · Peer interaction · Cooperation · Primary education · Chile
