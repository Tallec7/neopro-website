# Mode operatoire — Gestion du site Neopro

## Architecture du systeme

```
Tu (Figma/contenu)
    |
    v
+------------------+       +------------------+       +------------------+
|  Sanity Studio   |  -->  |  GitHub (code)   |  -->  |  Vercel (site)   |
|  neopro.sanity.  |       |  Tallec7/        |       |  neopro-website  |
|  studio          |       |  neopro-website   |       |  .vercel.app     |
+------------------+       +------------------+       +------------------+
   CMS (contenu)              Code source              Site en ligne
```

### Qui fait quoi ?

| Outil | Role | URL |
|-------|------|-----|
| **Sanity Studio** | Gerer le contenu (textes, prix, logos, temoignages) | https://neopro.sanity.studio |
| **GitHub** | Stocker le code source | https://github.com/Tallec7/neopro-website |
| **Vercel** | Heberger le site en ligne | https://www.neopro-communication.fr |
| **Dev local** | Developper + tester avant de deployer | http://localhost:4321 |
| **Figma (reference)** | Maquettes de reference (export dans `Neopro2/`) | Dossier local du projet |

---

## Scenario 1 — Modifier du contenu (texte, prix, logo)

**Pas besoin de toucher au code.**

1. Ouvre https://neopro.sanity.studio
2. Clique sur le type de contenu a modifier (ex: "Offre de pricing")
3. Fais ta modification
4. Clique **Publish**
5. **Attends ~2 min** → Vercel rebuild automatiquement (si webhook configure)

> Si le site ne se met pas a jour apres 5 min :
> Va sur https://vercel.com/dashboard → ton projet → **Deployments** → **Redeploy**

### Ce qui est modifiable dans Sanity

| Schema Sanity | Ce que ca controle sur le site |
|---------------|-------------------------------|
| Site Settings | Email, reseaux sociaux, liens nav, footer |
| Page | Titres hero, sous-titres, SEO (meta title/description) |
| Offre de pricing | Noms des offres, prix, features, badge "populaire" |
| Package video | Packages video en option (prix, features) |
| Temoignage | Citations des clubs |
| Logo club partenaire | Logos dans le carrousel "Les clubs Neopro" |
| Panneau solution | Sections sticky sur /solution (titre, texte, image) |
| Feature solution | 3 cartes (Sans wifi, Sans fil, Simple) |
| Panneau couleur | Panneaux colores sur /solution |

---

## Scenario 2 — Integrer un export Figma (nouveau design)

C'est le cas le plus courant quand tu recois des maquettes.

> **Le Figma est la reference absolue.** L'export Figma Make est stocke dans le dossier
> `Neopro2/` a la racine du projet. Ce dossier contient du React/Vite (non deployable tel quel)
> mais sert de **reference visuelle** : layout, textes, couleurs, espacements.
> On adapte ensuite le code Astro dans `src/` pour coller au Figma.

### Etape 1 : Preparer les images

1. **Exporte les images** depuis Figma :
   - Format : **WebP** (ou PNG si pas disponible, on convertira)
   - Heros : largeur **1920px**
   - Images de contenu : largeur **1200px** max
   - Logos : **PNG transparent** ou **SVG**

2. **Convertis en WebP** si necessaire (chaque image < 200 KB) :
   ```bash
   # Sur Mac avec sips (natif)
   sips -s format webp image.png --out image.webp

   # Ou avec cwebp (installer via : brew install webp)
   cwebp -q 80 image.png -o image.webp
   ```

3. **Place les images** dans le projet :
   ```
   src/assets/images/     ← images utilisees dans le code (heros, illustrations)
   ```
   Ou uploade-les dans **Sanity Studio** si c'est du contenu dynamique (logos clubs, images de panneaux solution).

### Etape 2 : Identifier ce qui change

Compare la maquette Figma avec le site actuel. Ca se classe en 3 categories :

| Type de changement | Ou intervenir | Exemple |
|-------------------|---------------|---------|
| **Texte/contenu** | Sanity Studio | Changer un titre, un prix |
| **Style/layout** | Code (fichiers .astro/.tsx) | Changer des couleurs, espacements, grille |
| **Nouveau composant** | Code (creer un fichier) | Ajouter une section FAQ |

### Etape 3 : Modifier le code

1. **Ouvre un terminal** dans le dossier du projet :
   ```bash
   cd /Users/gletallec/Documents/NEOPRO/neopro-astro
   ```

2. **Lance le serveur de dev** :
   ```bash
   npm run dev
   ```
   → Ouvre http://localhost:4321 — tu vois les changements en direct.

3. **Modifie les fichiers** selon la maquette :

   | Fichier | Contenu |
   |---------|---------|
   | `src/pages/index.astro` | Page d'accueil |
   | `src/pages/solution.astro` | Page /solution |
   | `src/pages/offres.astro` | Page /offres |
   | `src/pages/devis.astro` | Page /devis |
   | `src/pages/qui-sommes-nous.astro` | Page /qui-sommes-nous |
   | `src/components/Navbar.astro` | Barre de navigation |
   | `src/components/Footer.astro` | Pied de page |
   | `src/components/Hero.astro` | Composant hero reutilisable |
   | `src/components/Button.astro` | Boutons (6 variantes : green, black, white, yellow, pink, outline) |
   | `src/components/ContactForm.tsx` | Formulaire de contact (React) |
   | `src/components/DevisForm.tsx` | Formulaire devis multi-etapes (React) |
   | `src/components/ClubCarousel.tsx` | Carrousel logos clubs (React) |
   | `src/components/TestimonialCarousel.tsx` | Carrousel temoignages (React) |
   | `src/layouts/BaseLayout.astro` | Layout global (SEO, meta, GA) |

4. **Conventions Tailwind** — couleurs du design systeme :
   ```
   neo-green       #81e3bc    (vert principal)
   neo-green-dark  #51b28b    (vert fonce)
   neo-dark        #101828    (texte sombre)
   neo-dark-bg     #2f3935    (fond section sombre)
   neo-gray        #4a5565    (texte secondaire)
   neo-yellow      #ffec85    (accent jaune)
   neo-pink        #ff9ec6    (accent rose)
   neo-sky         #79e8fa    (accent bleu)
   ```

   Polices :
   ```
   font-outfit     → Outfit (sans-serif, texte courant)
   font-playfair   → Playfair Display (serif, titres italiques)
   ```

### Etape 4 : Verifier le build

```bash
npm run build
```

Si ca passe sans erreur → pret a deployer.

### Etape 5 : Deployer

```bash
git add .
git commit -m "description du changement"
git push origin main
```

Vercel detecte le push et deploie automatiquement (~2 min).

---

## Scenario 3 — Ajouter une nouvelle page

1. Cree le fichier dans `src/pages/` :
   ```
   src/pages/ma-nouvelle-page.astro
   ```
   → Automatiquement accessible a `/ma-nouvelle-page`

2. Utilise le layout de base :
   ```astro
   ---
   import BaseLayout from '@/layouts/BaseLayout.astro';
   import Hero from '@/components/Hero.astro';
   import ContactForm from '@/components/ContactForm.tsx';
   ---

   <BaseLayout title="Titre SEO" description="Description SEO">
     <Hero title="Mon titre" />

     <!-- Ton contenu ici -->

     <div id="contact">
       <ContactForm client:visible />
     </div>
   </BaseLayout>
   ```

3. Ajoute le lien dans la **navigation** :
   - Soit dans **Sanity Studio** → Site Settings → navLinks
   - Soit dans `src/components/Navbar.astro` et `Footer.astro` (si hardcode)

4. Commit + push.

---

## Scenario 4 — Ajouter un nouveau type de contenu dans Sanity

Exemple : tu veux ajouter une section "FAQ" gerable depuis Sanity.

1. **Cree le schema** dans `sanity/neopro/schemaTypes/` :
   ```ts
   // sanity/neopro/schemaTypes/faq.ts
   import { defineType, defineField } from 'sanity'

   export default defineType({
     name: 'faq',
     title: 'FAQ',
     type: 'document',
     fields: [
       defineField({ name: 'question', title: 'Question', type: 'string' }),
       defineField({ name: 'answer', title: 'Reponse', type: 'text' }),
       defineField({ name: 'order', title: 'Ordre', type: 'number' }),
     ],
   })
   ```

2. **Enregistre-le** dans `sanity/neopro/schemaTypes/index.ts` :
   ```ts
   import faq from './faq'
   // ... ajoute dans le tableau export
   ```

3. **Ajoute la requete GROQ** dans `src/lib/queries.ts` :
   ```ts
   export const faqQuery = `*[_type == "faq"] | order(order asc) {
     question,
     answer
   }`;
   ```

4. **Utilise dans ta page** :
   ```astro
   ---
   import { sanityClient } from '@/lib/sanity';
   import { faqQuery } from '@/lib/queries';

   let faqs = [];
   try {
     if (sanityClient) {
       faqs = await sanityClient.fetch(faqQuery);
     }
   } catch {}
   ---
   ```

5. **Deploie Sanity Studio** :
   ```bash
   cd sanity/neopro
   npx sanity deploy
   ```

6. Commit + push le code.

---

## Scenario 5 — Integrer un export Figma Make (workflow detaille)

### Pourquoi on ne copie pas le code Figma tel quel

L'export Figma Make genere un **projet React/Vite complet** (fichiers `.tsx`). Ce code :
- Utilise React (JSX, useState, useEffect) — notre projet est en **Astro** (HTML statique)
- A des **positions/tailles en dur** en pixels — pas responsive
- Importe **60+ dependances** (Radix, MUI, shadcn) — qu'on n'utilise pas
- Contient du code genere **non maintenable** et non accessible

On utilise donc l'export comme **source de verite visuelle** : on en extrait les specs exactes (couleurs, tailles, espacements, polices, structure) et on les traduit en code Astro propre.

### Structure de l'export Figma

```
Neopro2/                           ← Export Figma Make (REFERENCE UNIQUEMENT)
├── src/
│   ├── imports/                   ← CODE GENERE par Figma (les specs sont LA)
│   │   ├── PageDaccueil.tsx            Code genere de la page d'accueil
│   │   ├── PageDaccueil-45-196.tsx     Variante avec numeros de frame
│   │   ├── LaSolution.tsx              Code genere /solution
│   │   ├── LesOffres.tsx               Code genere /offres
│   │   ├── QuiSommesNous.tsx           Code genere /qui-sommes-nous
│   │   ├── Devis21.tsx                 Code genere /devis
│   │   └── svg-*.ts                    SVG inlines generes
│   ├── app/components/            ← Composants "propres" (moins fiables)
│   │   ├── Hero.tsx                    Version simplifiee du hero
│   │   ├── Welcome.tsx                 Version simplifiee bienvenue
│   │   └── ui/                         Composants shadcn (ignorer)
│   └── assets/                    ← IMAGES extraites du Figma
│       └── *.png                       Images avec noms de hash
├── package.json                   ← Montre les dependances (React, Radix, etc.)
└── README.md                      ← Lien vers le projet Figma original
```

**Fichiers cles a lire :** Les fichiers dans `src/imports/` contiennent le code le plus fidele au Figma. Les fichiers dans `src/app/components/` sont des versions simplifiees mais parfois inexactes.

### Correspondance pages Figma ↔ Astro

| Fichier Figma (Neopro2/src/imports/) | Page Astro (src/pages/) |
|--------------------------------------|------------------------|
| `PageDaccueil.tsx` ou `PageDaccueil-*.tsx` | `index.astro` |
| `LaSolution.tsx` ou `LaSolution-*.tsx` | `solution.astro` |
| `LesOffres.tsx` ou `LesOffres-*.tsx` | `offres.astro` |
| `Devis21.tsx` | `devis.astro` |
| `QuiSommesNous.tsx` | `qui-sommes-nous.astro` |

> S'il y a plusieurs variantes (ex: `PageDaccueil.tsx` et `PageDaccueil-45-196.tsx`),
> la version avec numeros (`-45-196`) est generalement la plus complete et fidele.

### Etape 1 : Extraire les specs du code Figma

Ouvre le fichier TSX dans `Neopro2/src/imports/` et lis les classes Tailwind. Ce sont les **specs exactes** du design.

**Grille de lecture — comment traduire les classes Tailwind :**

| Classe dans le TSX Figma | Ce que ca veut dire | Comment l'utiliser |
|--------------------------|--------------------|--------------------|
| `text-[70px]` | Taille du texte : 70px | Mettre `font-size: 70px` ou `text-[70px]` |
| `leading-[70px]` | Hauteur de ligne : 70px | `line-height: 70px` |
| `font-['Playfair_Display:Italic']` | Police Playfair Display Italic | `font-playfair italic` (deja configuree) |
| `font-['Outfit:Medium']` | Police Outfit Medium | `font-outfit font-medium` |
| `bg-[#81e3bc]` | Couleur de fond : vert Neopro | `bg-neo-green` (token du design system) |
| `bg-[#2f3935]` | Fond sombre | `bg-neo-dark-bg` |
| `text-[#F4E96D]` | Texte jaune accent | `text-neo-yellow` |
| `rounded-[65px]` | Border-radius : 65px | `rounded-full` ou `rounded-[65px]` |
| `p-[60px]` | Padding : 60px | `p-[60px]` ou `p-15` |
| `gap-[43px]` | Espacement flex : 43px | `gap-[43px]` ou `gap-11` |
| `h-[743px]` | Hauteur fixe : 743px | Adapter en responsive (`min-h-[600px]` etc.) |
| `w-full` | Largeur 100% | `w-full` |
| `max-w-7xl` | Largeur max container | `max-w-7xl` |
| `px-[30px] py-[10px]` | Padding bouton | `px-8 py-2.5` |

**Correspondance couleurs Figma → tokens du projet :**

| Couleur hex dans Figma | Token Tailwind | Usage |
|------------------------|----------------|-------|
| `#81e3bc` | `neo-green` | Vert principal (boutons, accents) |
| `#51b28b` | `neo-green-dark` | Vert fonce (hover) |
| `#101828` | `neo-dark` | Texte sombre |
| `#2f3935` | `neo-dark-bg` | Fond sections sombres |
| `#4a5565` | `neo-gray` | Texte secondaire |
| `#ffec85` | `neo-yellow` | Accent jaune |
| `#ff9ec6` | `neo-pink` | Accent rose |
| `#79e8fa` | `neo-sky` | Accent bleu |
| `#F4E96D` | (proche neo-yellow) | Jaune Figma, utiliser `neo-yellow` |

### Etape 2 : Extraire les images

Les images du Figma sont dans `Neopro2/src/assets/` avec des noms de hash (ex: `031a4c7d...png`).

1. Identifie quelle image correspond a quoi en lisant les imports dans les TSX :
   ```tsx
   // Dans le TSX, on voit :
   import imgHero from "figma:asset/031a4c7d...png";
   // → C'est l'image du hero
   ```

2. Copie les images utiles dans `src/assets/images/` avec des noms explicites :
   ```bash
   cp Neopro2/src/assets/031a4c7d...png src/assets/images/hero-homepage.png
   ```

3. Convertis en WebP pour la performance :
   ```bash
   cwebp -q 80 src/assets/images/hero-homepage.png -o src/assets/images/hero-homepage.webp
   ```

### Etape 3 : Traduire en Astro

Pour chaque section, la methode est toujours la meme :

1. **Lire** le TSX Figma → noter la structure HTML (ignorer la syntaxe React)
2. **Extraire** les valeurs (couleurs, tailles, polices, espacements)
3. **Mapper** les couleurs hex vers les tokens du design system (tableau ci-dessus)
4. **Ecrire** en Astro avec ces valeurs exactes
5. **Adapter** pour le responsive (les tailles Figma sont desktop uniquement)

**Exemple concret — traduire le Hero :**

```tsx
// CE QU'ON LIT dans Neopro2/src/imports/PageDaccueil-45-196.tsx :
<div className="h-[743px] relative w-full" data-name="Hero">
  <img src={imgHero} className="absolute h-full w-full object-cover" />
  <div className="bg-gradient-to-r from-[#2f3935] to-[rgba(47,57,53,0.3)]" />
  <p className="font-['Playfair_Display:Italic'] text-[70px] leading-[70px] text-white">
    On fait de votre ecran,
  </p>
</div>
```

```astro
<!-- CE QU'ON ECRIT dans src/pages/index.astro : -->
<section class="relative min-h-[600px] lg:min-h-[743px] w-full">
  <img src={heroImage} class="absolute inset-0 h-full w-full object-cover" alt="..." />
  <div class="absolute inset-0 bg-gradient-to-r from-neo-dark-bg to-neo-dark-bg/30" />
  <h1 class="font-playfair italic text-4xl md:text-5xl lg:text-[70px] lg:leading-[70px] text-white">
    On fait de votre ecran,
  </h1>
</section>
```

**Ce qui change :** la hauteur fixe devient responsive (`min-h`), les tailles de texte ont des breakpoints (`text-4xl md:text-5xl lg:text-[70px]`), les couleurs hex deviennent des tokens (`neo-dark-bg`), et la syntaxe React (`className`) devient du HTML standard (`class`).

### Etape 4 : Utiliser Claude Code pour automatiser

C'est la methode la plus rapide. Claude lit l'export et fait la traduction.

1. **Place l'export** dans `Neopro2/` (remplace l'ancien si besoin)
2. **Ouvre Claude Code** :
   ```bash
   cd /Users/gletallec/Documents/NEOPRO/neopro-astro
   claude
   ```
3. **Demande a Claude** en etant precis :
   > "Compare le hero de `Neopro2/src/imports/PageDaccueil-45-196.tsx` avec `src/pages/index.astro` et aligne le code Astro sur les specs du Figma (couleurs exactes, tailles, espacements, polices). Utilise les tokens du design system."

4. **Claude va :**
   - Lire le TSX Figma pour extraire les specs exactes
   - Lire le code Astro actuel
   - Modifier le code Astro pour correspondre au Figma
   - Utiliser les tokens du design system (pas les hex en dur)
   - Adapter pour le responsive (mobile/tablet/desktop)
   - Verifier avec `npm run build`

> **Conseil :** Proceder **section par section** (hero, welcome, offres...) plutot que page entiere.
> Ca donne de meilleurs resultats et c'est plus facile a verifier.

### Checklist de verification apres alignement

- [ ] Les couleurs correspondent au Figma (utiliser l'inspecteur navigateur)
- [ ] Les tailles de texte sont correctes sur desktop
- [ ] Les espacements (padding, margin, gap) sont fideles
- [ ] Les polices sont les bonnes (Outfit pour le texte, Playfair Display pour les titres italiques)
- [ ] Les border-radius sont corrects (boutons arrondis, cartes, etc.)
- [ ] Le site reste responsive (tester mobile/tablette)
- [ ] `npm run build` passe sans erreur
- [ ] Les images sont en WebP et < 200 KB

> **Important :** Le dossier `Neopro2/` n'est **jamais deploye** ni committe dans git.
> C'est juste une reference locale. Le vrai site vient uniquement des fichiers dans `src/`.

---

## Workflow quotidien resume

```
┌─────────────────────────────────────────────────────┐
│  CHANGEMENT DE CONTENU (texte, prix, image)         │
│  → Sanity Studio → Publish → Attendre rebuild       │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  CHANGEMENT DE DESIGN (layout, couleurs, nouveau    │
│  composant, export Figma)                           │
│  → Code local → npm run dev → tester → build →     │
│    git add/commit/push → Vercel deploie auto        │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  NOUVEAU TYPE DE CONTENU (FAQ, equipe, blog...)     │
│  → Schema Sanity + requete GROQ + code page →       │
│    npx sanity deploy + git push                     │
└─────────────────────────────────────────────────────┘
```

---

## Checklist avant mise en production d'un changement

- [ ] `npm run dev` — le site tourne sans erreur en local
- [ ] `npm run build` — le build passe
- [ ] Verifier les pages modifiees sur localhost:4321
- [ ] `git add` + `git commit` + `git push`
- [ ] Verifier sur neopro-website.vercel.app apres 2 min

---

## Commandes utiles

```bash
# Developper en local
cd /Users/gletallec/Documents/NEOPRO/neopro-astro
npm run dev                          # Serveur local → localhost:4321

# Builder
npm run build                        # Genere le site statique

# Git
git status                           # Voir les fichiers modifies
git add .                            # Stager tous les fichiers
git commit -m "description"          # Committer
git push origin main                 # Pousser → declenche Vercel

# Sanity
cd sanity/neopro
npx sanity dev                       # Studio local → localhost:3333
npx sanity deploy                    # Deployer Studio en ligne

# Seed (remplir Sanity avec le contenu initial)
cd sanity/neopro
SANITY_TOKEN="ton-token" node seed.mjs
```

---

## Structure des fichiers cles

```
neopro-astro/
├── src/
│   ├── pages/              ← Les 5 pages du site (.astro)
│   │   ├── index.astro          Accueil
│   │   ├── solution.astro       /solution
│   │   ├── offres.astro         /offres
│   │   ├── devis.astro          /devis
│   │   ├── qui-sommes-nous.astro /qui-sommes-nous
│   │   └── api/
│   │       ├── contact.ts       POST formulaire contact → email
│   │       └── devis.ts         POST formulaire devis → 2 emails
│   ├── components/         ← Composants reutilisables
│   │   ├── Navbar.astro         Navigation (vanilla JS)
│   │   ├── Footer.astro         Pied de page
│   │   ├── Hero.astro           Section hero
│   │   ├── Button.astro         Boutons (6 variantes : green/black/white/yellow/pink/outline)
│   │   ├── ContactForm.tsx      Formulaire contact (React)
│   │   ├── DevisForm.tsx        Formulaire devis (React)
│   │   ├── ClubCarousel.tsx     Carrousel logos hexagones colores (React)
│   │   └── TestimonialCarousel.tsx  Temoignages (React)
│   ├── layouts/
│   │   └── BaseLayout.astro     Layout global (SEO, meta, fonts)
│   ├── lib/
│   │   ├── sanity.ts            Client Sanity
│   │   ├── queries.ts           Requetes GROQ
│   │   └── jsonLd.ts            Schema.org
│   ├── assets/images/      ← Images optimisees (WebP)
│   └── styles/
│       └── global.css           Tailwind + fonts
├── sanity/neopro/          ← Sanity CMS
│   ├── schemaTypes/             Schemas du contenu
│   ├── seed.mjs                 Script pour remplir le contenu initial
│   └── sanity.config.ts         Config Studio
├── Neopro2/               ← Export Figma Make (reference visuelle, NE PAS DEPLOYER)
├── .env                    ← Variables d'environnement (NE PAS COMMITTER)
└── tailwind.config.mjs     ← Design tokens (couleurs, fonts)
```

---

## FAQ

**Q: J'ai modifie du contenu dans Sanity mais le site ne change pas ?**
→ Le site est statique. Il faut un rebuild. Soit le webhook Sanity→Vercel le fait auto, soit va sur Vercel Dashboard → Redeploy.

**Q: Comment forcer un redeploy sans changer de code ?**
→ Vercel Dashboard → Deployments → "..." sur le dernier → Redeploy.

**Q: Je recois un export Figma, par ou je commence ?**
→ Le plus simple : place l'export dans `Neopro2/`, ouvre Claude Code, et demande-lui de comparer et aligner (voir Scenario 5). Sinon manuellement : exporter les images en WebP, `npm run dev`, modifier les fichiers .astro, `npm run build`, `git push`.

**Q: Comment ajouter une image de hero ?**
→ Place-la dans `src/assets/images/` en WebP (max 1920px large). Importe-la dans la page : `import monImage from '@/assets/images/mon-image.webp'`. Passe-la au composant Hero : `<Hero imageSrc={monImage} />`.

**Q: Difference entre fichier .astro et .tsx ?**
→ `.astro` = HTML statique genere au build (0 JS envoye au navigateur). `.tsx` = React, utilise quand il faut de l'interactivite (formulaires, carrousels). On minimise le React pour la performance.

**Q: Le site est a quelle adresse ?**
→ Production : https://www.neopro-communication.fr (domaine personnalise). Preview Vercel : https://neopro-website.vercel.app

**Q: Sanity gere quoi exactement ?**
→ Sanity gere le **contenu modifiable** (textes des offres, logos des clubs, temoignages, etc.). Le **design/layout** (couleurs, espacements, structure des pages) vient du **code** dans `src/`. Les deux sont independants : changer le design dans le code ne touche pas le contenu Sanity, et vice versa.

**Q: C'est quoi le dossier Neopro2/ ?**
→ C'est l'export Figma Make. Il contient du React/Vite qu'on ne deploie **jamais**. C'est juste une **reference visuelle** pour savoir a quoi doit ressembler le site. Claude Code l'utilise pour comparer et aligner le vrai code (dans `src/`). Voir le Scenario 5 pour le workflow complet d'extraction des specs.

**Q: Pourquoi l'export Figma est en React (.tsx) et pas en HTML ?**
→ Figma Make genere du React par defaut (c'est le framework le plus repandu). Ce code n'est pas fait pour etre utilise tel quel — meme dans un projet React, on le reecrirait. On l'utilise uniquement pour **lire les specs** (couleurs, tailles, polices, espacements) et les reproduire dans notre code Astro.

**Q: Quel fichier Figma lire en priorite ?**
→ Les fichiers dans `Neopro2/src/imports/` (ex: `PageDaccueil-45-196.tsx`). Ils contiennent le code le plus fidele au design Figma avec toutes les valeurs exactes dans les classes Tailwind. Les fichiers dans `src/app/components/` sont des versions simplifiees et parfois inexactes.

**Q: Comment lire les specs dans le code Figma ?**
→ Les classes Tailwind dans les fichiers TSX contiennent les valeurs exactes : `text-[70px]` = taille 70px, `bg-[#81e3bc]` = couleur verte, `gap-[43px]` = espacement 43px, etc. Voir le tableau complet dans le Scenario 5.
