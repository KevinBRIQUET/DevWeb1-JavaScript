let alerte = function () {
    alert("Vous êtes dans une fonction anonyme");
  };
  
  let mesParagraphes = document.querySelectorAll("p");
  //  comment parcourir cette Nodelist
  for (i = 0; i < mesParagraphes.length; i++) {
    console.log(mesParagraphes[i].id);
  }
  
  mesParagraphes.forEach(function (node, index) {
    console.log(index + "==>" + node.id);
    node.addEventListener("click", function () {
      // ensemble de code à lancer lors de la détection du click
      if (this.className === "standard") {
        this.className = "click";
      } else {
        this.className = "standard";
      }
    });
  });