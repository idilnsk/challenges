console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";
  for (let star = 1; star <= 5; star++) {
    const img = document.createElement("img");
    if (star <=filledS)
    img.src = "assets/star-empty.svg";
    starContainer.append(img);
    //--v-- your code here --v--
  }
  //--^-- your code here --^--
}

renderStars();
