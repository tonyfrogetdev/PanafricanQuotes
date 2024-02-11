const quotes = [
  {
    auteur: "Tony FROGET",
    citation:
      "Chaque personne d'ascendance africaine, peu importe où elle se trouve dans le monde, devrait aspirer à l'excellence afin de pouvoir ensuite apporter cette excellence en Afrique.",
    photoAuteur:
      "https://media.licdn.com/dms/image/D4E03AQHA_GYytGdEUQ/profile-displayphoto-shrink_200_200/0/1691599860108?e=2147483647&v=beta&t=FoE0-D1htwIlrul-Q_RLafT8T4LidHGZKldz5zcilE4",
  },
  {
    auteur: "Patrice Lumumba",
    citation:
      "L'Afrique écrira sa propre histoire et elle sera au nord et au sud du Sahara une histoire de gloire et de dignité.",
    photoAuteur:
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/PatriceLumumba1960.jpg",
  },
  {
    auteur: "Cheik Anta Diop",
    citation:
      "La facilité avec laquelle nous renonçons, souvent, à notre culture ne s’explique que par notre ignorance de celle-ci, et non par une attitude progressiste adoptée en connaissance de cause.",
    photoAuteur:
      "https://s.rfi.fr/media/display/cf249d3e-0f03-11ea-b996-005056a9aa4d/w:1280/p:1x1/cheikh-anta-retouchee_0.jpg",
  },
  {
    auteur: "Kwame Nkrumah",
    citation:
      "Je ne suis pas africain parce que je suis né en Afrique, mais parce que l'Afrique est née en moi.",
    photoAuteur:
      "https://pan-african-music.com/wp-content/uploads/2017/03/925b0a0a-kwame-nkrumah-portrait-e1614789500325.jpg",
  },
  {
    auteur: "Amilcar Cabral",
    citation:
      "Ne pas avoir peur du peuple et l’amener à participer à toutes les décisions qui le concernent – telle est la condition fondamentale de la démocratie révolutionnaire que nous devons réaliser progressivement.",
    photoAuteur: "https://www.peresblancs.org/image2/amilcar_cabral1.jpg",
  },
  {
    auteur: "Julius Nyerere",
    citation: "Sans unité, il n'y a pas d'avenir pour l'Afrique.",
    photoAuteur:
      "https://cdn.britannica.com/14/42314-004-677D1E59/Julius-Nyerere-1981.jpg",
  },
  {
    auteur: "Malcolm X",
    citation:
      "Paix et liberté ne peuvent être séparées, car personne ne peut être en paix tant qu'il n'est pas libre.",
    photoAuteur:
      "https://upload.wikimedia.org/wikipedia/commons/7/7f/Malcolm-x_colorized_photo.jpg",
  },
  {
    auteur: "Malcolm X",
    citation:
      "Le mal le plus pernicieux, le plus nocif sur cette Terre est le racisme.",
    photoAuteur:
      "https://www.bondamanjak.com/wp-content/uploads/2016/10/malcolmX.jpg",
  },
  {
    auteur: "Winnie Mandela",
    citation:
      "Ce n’est que lorsque tous les peuples noirs s’uniront et parleront d’une seule voix que nous serons une force de négociation qui décidera de son propre destin.",
    photoAuteur:
      "https://news.mandela.ac.za/getmedia/fa895b90-4fd8-4acd-a1d3-6f40500312ff/Winnie-Madikizela-Mandela?width=400&height=500",
  },
  {
    auteur: "Frantz Fanon",
    citation:
      "Chaque génération doit, dans une relative opacité, découvrir sa mission, la remplir ou la trahir.",
    photoAuteur:
      "https://festivalfifac.com/wp-content/uploads/2021/09/sur_les_traces_Frantz-Fanon.Pasp_-768x1068.jpg",
  },
  {
    auteur: "Thomas Sankara",
    citation:
      "Il ne peut pas y avoir de bonheur sans liberté, ni de liberté sans courage.",
    photoAuteur:
      "https://focus.telerama.fr/2022/07/06/0/0/620/918/1200/0/60/0/e280d32_1657098645685-gamma-ga522738-007.jpg",
  },
  {
    auteur: "Wangari Muta Maathai",
    citation:
      "La meilleure façon de gérer l'environnement n'est pas de le préserver tel quel, mais de le restaurer.",
    photoAuteur:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Wangari_Matthai_2001_%28cropped%29.jpg",
  },
  {
    auteur: "Miriam Makeba",
    citation:
      "Ma vie est une vie chantée. Avec mes chansons, je me bats contre l'injustice, l'apartheid et toutes sortes de maux sociaux.",
    photoAuteur:
      "https://pan-african-music.com/wp-content/uploads/2018/11/Miriam-Makeba.jpg",
  },
  {
    auteur: "Ellen Johnson Sirleaf",
    citation:
      "Si vos rêves ne vous font pas peur, ils ne sont pas assez grands.",
    photoAuteur:
      "https://upload.wikimedia.org/wikipedia/commons/f/f1/Ellen_Johnson_Sirleaf_February_2015.jpg",
  },
  {
    auteur: "Angela Davis",
    citation:
      "Parfois, nous devons faire le travail même si nous ne voyons pas encore une lueur à l’horizon que cela va être possible.",
    photoAuteur:
      "https://static.wixstatic.com/media/831fe9_bc5600ddf6ab4dfc9b479fd11142846f~mv2.jpg/v1/crop/x_191,y_3,w_1089,h_673/fill/w_560,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/angela%20davis.jpg",
  },
  {
    auteur: "Assata Shakur",
    citation:
      "Personne dans le monde, personne dans l'histoire, n'a jamais obtenu sa liberté en faisant appel au sens moral de ceux qui les oppriment.",
    photoAuteur: "https://www.babelio.com/users/AVT_Assata-Shakur_1571.jpg",
  },
];
const button = document.querySelector("#quotesButton");
const quotesSection = document.querySelector(".quotesGenerator");

function quotesGenerator() {
  const index = Math.floor(Math.random() * quotes.length);
  const quote = quotes[index];

  // Récuperer l'image actuel si elle existe
  const currentImage = document.querySelector(".quoteImage");
  const currentAuteur = document.querySelector(".quoteAuteur");
  const currentParagraph = document.querySelector(".quoteParagraph");

  if (currentImage) {
    // je met l'animation de sortie
    currentImage.classList.add("quoteImage-exit");
    currentImage.classList.remove("quoteImage-enter");

    // attendre la fin de l'animation
    currentImage.addEventListener("animationend", function () {
      // supprimer l'image actuel
      currentImage.remove();

      // insérer la nouvelle image
      newQuote(quote);
    });
  } else {
    // si il y a pas d'image actuel, insère nouvelle image
    newQuote(quote);
  }

  if (currentAuteur) {
    currentAuteur.classList.add("quoteAuteur-exit");
    currentAuteur.classList.remove("quoteAuteur-enter");

    currentAuteur.addEventListener("animationend", function () {
      currentAuteur.remove();
    });
  }

  if (currentParagraph) {
    currentParagraph.classList.add("quoteParagraph-exit");
    currentParagraph.classList.remove("quoteParagraph-enter");

    currentParagraph.addEventListener("animationend", function () {
      currentParagraph.remove();
    });
  }
}

function newQuote(quote) {
  //efface l'ancienne citation
  quotesSection.innerHTML = "";

  // Créer la nouvelle image

  let newQuoteImage = document.createElement("img");
  newQuoteImage.className = "quoteImage";
  newQuoteImage.src = quote.photoAuteur;
  newQuoteImage.classList.add("quoteImage-enter");

  let quoteAuteur = document.createElement("p");
  quoteAuteur.className = "quoteAuteur";
  quoteAuteur.innerText = quote.auteur;
  quoteAuteur.classList.add("quoteAuteur-enter");

  let quoteParagraph = document.createElement("p");
  quoteParagraph.className = "quoteParagraph ";
  quoteParagraph.innerText = quote.citation;
  quoteParagraph.classList.add("quoteParagraph-enter");

  // Création de la div
  let quoteDiv = document.createElement("div");
  quoteDiv.className = "quoteDiv";
  quoteDiv.appendChild(newQuoteImage);
  quoteDiv.appendChild(quoteParagraph);
  quoteDiv.appendChild(quoteAuteur);

  quotesSection.appendChild(quoteDiv);

  // Appliquer l'animation d'entrée pour la nouvelle image
}
button.addEventListener("click", quotesGenerator);
