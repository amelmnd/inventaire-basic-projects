# Énoncé de l'exercice Portfolio

Pour cet exercice, vous devrez réaliser une page Web qui fera office de Portfolio.

> Un Portfolio est un dossier qui permet à un professionnel de représenter son travail.
> Dans le milieu de la programmation, notamment chez les développeurs, le portfolio est généralement un site Web dans lequel sont présentés et mis en avant les différents projets réalisés.

Voici une série d'étapes pour vous guider dans la réalisation de cet exercice. Les codes des couleurs, les tailles de police, les tailles des images et d'autres renseignements vous seront fournis pour reproduire cette page Web au plus proche du modèle.

**Conseils**

- Prenez le temps de toujours observer le rendu de votre code dans le navigateur dès que vous ajoutez un élément HTML ou une propriété de style. Ceci vous permettra de bien comprendre et visualiser les différents ajouts.
- N'hésitez pas à ajouter des couleurs de fond et/ou des bordures colorées à vos différents éléments HTML (notamment les conteneurs) pour bien les visualiser. Ces couleurs seront retirées une fois les éléments correctement agencés.
- Les étapes proposées ci-dessous sont indicatives, vous pouvez choisir de ne pas les suivre.

- Cet exercice est à faire, refaire et encore refaire ! Plus vous vous entrainerez, plus vous vous améliorerez. 💪

## Étape 1 : création du dossier

Suivez ces étapes afin de mettre en place votre environnement de travail :
dans un premier temps, commencez par créer un dossier nommé "my-portfolio" - dans ce dossier, créez :
..un fichier index.html
..un dossier css
..un dossier img - dans le dossier css, créez :
..un fichier reset.css
..un fichier style.css

### Étape 2 : ajout du code de départ et des images

**Fichier index.html**
Dans le fichier index.html, ajoutez le code suivant :

```
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
    <link rel="stylesheet" href="./css/reset.css" />
    <link rel="stylesheet" href="./css/style.css" />
  </head>
  <body>
    <!-- Le contenu de votre page Web sera à insérer ici -->
  </body>
</html>
```

**Vous pouvez modifier le titre de votre page Web par le texte "Mon portfolio", ou bien par le titre de votre choix.**

**_Fichier reset.css_**
Dans le fichier reset.css, ajoutez le code suivant :

```
/* http://meyerWeb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```

Le code ci-dessus permet d'annuler les styles par défaut des navigateurs.

**_Dossier img_**
Récupérez les images du projet en cliquant ici, puis insérez-les dans le dossier img.

_Toutes les images et tous les logos présents dans le projet modèle vous sont fournis dans un dossier ZIP. Vous pouvez bien sûr remplacer l'image de profil par votre propre photo._

### Étape 3 : le body

Ajoutez les règles de style ci-dessous à l'élément HTML body :

- la **couleur de fond** _#5c48d2_
- les **polices d'écriture** _Verdana, Tahoma, Arial, sans-serif_
- une **taille de police** de _16px_

### Étape 4 : le header

L'élément header de ce projet est seulement composé d'un élément h1 dont voici les propriétés de style :

- une **taille de police** de _48px_
- la **couleur** _white_
- une **hauteur de ligne** de _200px_

Une fois ces différentes propriétés ajoutées, il ne restera plus qu'à centrer le titre sur l'axe vertical. Pour retrouver cette propriété, rendez-vous dans l'onglet "Agencer des éléments".

### Étape 5 : le main

L'élément _main_ de ce projet est composé du contenu principal de la page : il s'agit du grand bloc situé entre le _header_ et le _footer_.

Dans un premier temps, stylisez ce bloc grâce à une _class_ que vous pouvez nommer _main-block_ et à laquelle vous pouvez appliquer les propriétés suivantes :

- une **largeur** de _1024px_
- la **couleur de fond** _white_
- une **hauteur** de _500px_ par exemple (cette hauteur est temporaire, elle permet pour l'instant de pouvoir visualiser le bloc)
- un arrondi aux angles de _20px_
- des **marges latérales** automatiques (utilisez pour cela la propriété _margin : 0 auto_)

Une fois le bloc bien positionné, vous pouvez ensuite passer à son contenu en ajoutant les éléments présentés dans les étapes suivantes.

### Étape 6 : la partie navigation

Une navigation composée de **4 liens internes** est placée tout en haut du bloc principal. Vous pouvez, pour cette partie, utiliser un **élément parent** _nav_ et des éléments enfants _a_. En cliquant sur un des liens, l'utilisateur sera dirigé vers la section correspondante.

Pour les éléments _a_, vous pouvez appliquer les propriétés suivantes :

- une **hauteur** de _100px_ (même si les éléments HTML _a_ sont des éléments de type inline, la hauteur est modifiable)
- une **taille de police** de _20px_
- une **couleur** _#190f33_
- une **couleur** _#5c48d2_ lors du survol

Les liens ne doivent pas être soulignés.

Faîtes en sorte qu'il y ait un changement de couleur des textes et un changement d'apparence du curseur lors du survol des liens.

Utilisez des propriétés **Flexbox** afin que les textes soient centrés sur les deux axes. Pensez à la propriété _flex : 1_ qui permettra à chaque lien d'occuper 1/4 de la largeur du bloc principal.

### Étape 7 : l'image principale

Ajoutez l'image principale avec les propriétés suivantes :

- une **hauteur** de _400#px_
- une **largeur** de _1024px_ afin que l'image occupe toute la largeur du bloc

Pour conserver les proportions de l'image, pensez à la propriété _object-fit : cover_.

### Étape 8 : ajout des éléments section\*\*

Le reste du bloc _main_ (en dessous de la grande image) peut être divisé en **4 éléments section**, en alternant la couleur de fond : _white_ ou _#eeeef7_ (violet très clair).

Chaque section possède les propriétés de style suivantes :

- des **marges internes** de _100px_ (en haut, en bas, à gauche et à droite)
- une **couleur de fond** _white_ ou _#eeeef7_ (selon la _section_)

Vous pouvez ajouter l'attribut _id_ à chacune de vos sections et ainsi identifier les parties de la Web vers lesquelles l'utilisateur peut naviguer en cliquant sur les liens se trouvant tout en haut du bloc _main_.

### Étape 9 : la section "about me"

Cette _section_ peut être découpée comme ceci :

- un bloc _div_ qui contient 3 éléments : - votre photo de profil - un bloc composé d'un élément _p_ avec vos nom et prénom et d'un élément p avec votre ville
  => Utilisez des propriétés Flexbox pour positionner ces éléments
- un titre _h3_ "À propos de moi"
- un texte dans lequel vous pouvez expliquer votre parcours professionnel par exemple.

##### L'image de profil

Appliquez les propriétés de style suivantes à l'image de profil :

- une **hauteur** de _250px_
- une **largeur** de _250px_
- un **arrondi aux angles** permettant d'obtenir une image de forme ronde
- des **bordures** ayant la couleur _#fcc01a_

#### Les éléments p

Appliquez la propriété de style suivante à tous les éléments _p_ de votre projet :

- une **hauteur de ligne** de _30px_

#### Le nom et le prénom

Appliquez les propriétés de style suivantes à l'élément _p_ utilisé pour votre nom et votre prénom :

- une **taille de police** de _38px_
- une **graisse de police** _bold_ (utilisez la propriété _font-weight_)
- la **couleur** _#190f33_
- une **marge basse** de _50px_

#### La ville

Appliquez les propriétés de style suivantes à l'élément _p_ utilisé pour votre ville :

- une **taille de police** de _30px_
- de **l'italique**
- la **couleur** _#190f33_

#### Les éléments h3

Appliquez les propriétés de style suivantes aux éléments _h3_ de votre projet :

- une **taille de police** de _26px_
- une **graisse de police** _bold_
- la **couleur** _#190f33_
- une **marge basse** de _40px_

### Étape 10 : la section "education"

Cette _section_ peut être découpée comme ceci :

- un titre _h2_ "Formation"
- un élément _p_ pour le texte "Les technologies sur lesquelles je me forme actuellement :"
- un bloc contenant 3 logos (utilisez des propriétés Flexbox pour les positionner)
- un élément _p_ pour le texte "Pochainement, je suivrai la formation Développement Web & Mobile au Reacteur afin de perfectionner mes connaissances et d'apprendre de nouvelles technologies :"
- un bloc contenant 2 logos (utilisez des propriétés Flexbox pour les positionner)

Dans le 2ème élément _p_ de cette _section_, le texte "Développement Web & Mobile" est en gras (vous pouvez utiliser l'élément _span_ pour styliser cette partie en particulier). Vous pouvez faire de même pour le mot "Reacteur".

#### Les éléments h2

Appliquez les propriétés de style suivantes aux éléments _h2_ de votre projet :

- une taille de police de _30px_
- une graisse de police _bold_
- la couleur _#190f33_
- une marge basse de _80px_

#### Les logos

Appliquez la propriété de style suivante à tous les logos de la _section_ "Education" :

- une **hauteur** de _100px_

### Étape 11 : la section "projects"

Cette _section_ peut être découpée comme ceci :

- un titre _h2_ "Projets"
- un élément _p_ pour le texte "Au cours de ma formation Développement Web & Mobile, je réaliserai plusieurs répliques d'applications Web et d'applications Mobiles :"
  plusieurs blocs contenant chacun : - une image - un bloc composé une colonne de textes avec un _h3_ pour le titre du projet, un _h4_ pour le type de projet, et une liste (utilisez un élément _ul_ ainsi que des éléments _li_).

#### Les images de la section "Projets"

Appliquez les propriétés de style suivantes sur les images des projets :

- une largeur de _500px_
- une marge à droite de _60px_

#### Les éléments h4

Appliquez les propriétés de style suivantes aux éléments _h4_ de votre projet :

- une **taille de police** de _18px_
- une **graisse de police** _bold_
- une **marge basse** de _10px_

#### Les listes

Appliquez les propriétés de style suivantes aux éléments _li_ de votre projet :

- une **hauteur de ligne** de _30px_
- la propriété _list-style-type: disc;_ afin d'avoir des **puces** comme sur le modèle.

### Étape 12 : la section "contact"

Cette _section_ peut être découpée comme ceci :

- un titre _h2_ "Contactez-moi"
- un bloc contenant 3 sous-blocs avec comme éléments enfants :
  - une image
  - un texte (pour l'adresse mail) ou un lien vers votre Linkedin et vers votre GitHub (les sites doivent s'ouvrir dans un nouvel onglet)

_Si vous ne possédez pas de compte Linkedin ou de compte GitHub, vous pouvez évidemment ignorer les éléments correspondants._

#### Les images de la section "Contact"

Appliquez les propriétés de style suivantes sur les images :

- une **hauteur** de _30px_
- une **marge à droite** de _20px_

Appliquez la propriété de style suivante sur les liens :

- une **couleur** _#5c48d2_ au survol

### Étape 13 : le footer

L'élément _footer_ de ce projet est composé de 2 éléments p et d'un élément a menant au site _https://www.lereacteur.io_ (le site doit s'ouvrir dans un nouvel onglet).

Appliquez la propriété de style suivante sur les éléments p :

- une **couleur** _#c4c4c4_
- une **hauteur de ligne** de _40px_

Appliquez la propriété de style suivante sur l'élément _a_ :

- une **couleur** _#fcc01a_
- une **couleur** _#190f33_ lors du survol
- une **hauteur de ligne** de _40px_

Appliquez une hauteur de _300px_ au _footer_.
