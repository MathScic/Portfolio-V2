# Projet – Portfolio Mathieu Scicluna

## Objectif

Portfolio Next.js au style premium minimaliste.
Priorités : lisibilité, performance, responsive, code propre.

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion (animations légères uniquement)

## Règles de travail (IMPORTANT)

- Travailler bloc par bloc (1 modification = 1 bloc)
- Attendre validation avant le bloc suivant
- < 100 lignes par composant quand possible (120 max)
- Pas de sur-ingénierie

## Design

- Minimal / premium
- Arrondis, blur léger
- Primary uniquement pour accent
- Mobile-first, responsive strict

## Header

- Desktop : nav centrée + pill active animée
- Mobile : composant MobileHeader séparé, bouton burger circulaire, drawer animé

## Footer

- En bas de page (pas sticky écran)
- 3 colonnes égales : Présentation / Navigation / Contact
- Icônes mail, LinkedIn, GitHub
- Responsive (email wrap)

## Hero

- Responsive mobile / desktop
- Texte centré mobile, aligné gauche desktop
- Image sous texte mobile
- CTA clairs

## Style de réponse attendu

- Réponses courtes et actionnables
- Code directement copiable
- Respect strict du bloc par bloc
- Aide a comprendre ce que je code, explication et écriture du code bloc par bloc.

## Verrouillage du design system (TRÈS IMPORTANT)

Le projet dispose DÉJÀ :

- d’une charte graphique définie
- d’une palette de couleurs existante
- d’une typographie existante
- d’un style UI cohérent et validé
- de composants déjà en place (ex: Hero.tsx, Header.tsx, Footer.tsx)

Règles strictes :

- Ne jamais modifier les couleurs existantes sans demande explicite
- Ne jamais changer la typographie existante
- Ne jamais proposer ou remplacer des images existantes
- Ne jamais redessiner un layout existant
- Ne jamais réinventer le style global du site

Ce qui est autorisé :

- Ajustements subtils
- Micro-animations
- Améliorations UX légères
- Optimisations techniques ou de structure

Objectif :
Toujours travailler SUR l’existant, jamais le redéfinir.
