window.addEventListener("load", function () {
  const createCard = (order, btnText = "Open") => {
    const cardsCollection = [
      {
        cardBg: "banane-bg",
        textTitle: "world",
        textDescription:
          "150 paper bananas, in every shade of yellow on Earth. What more could you want from an NFT?",
        pictureImage: "/images/banane.png",
        pictureSource: "/images/banane_M.png",
      },
      {
        cardBg: "smoke-bg",
        textTitle: "science",
        textDescription:
          "These explosive graphics from YeStudio are part of a limited collection, exclusive to NFTwow.",
        pictureImage: "/images/smokyYe.png",
        pictureSource: "/images/sokyYe_M.png",
      },
      {
        cardBg: "cesr-bg",
        textTitle: "automobile",
        textDescription:
          " U I O P Studio’s new collection is part of a Rome exhibition combining the city’s past and future.",
        pictureImage: "/images/cesr.png",
        pictureSource: "/images/cesr_M.png",
      },
      {
        cardBg: "fllow-bg",
        textTitle: "technology",
        textDescription:
          "This digital sculpture collection by Emmiy Uulo explores digital form and virtual reality NFTs.",
        pictureImage: "/images/fllow.png",
        pictureSource: "/images/fllow_M.png",
      },
    ];

    const title = document.createElement("h3");
    const titleText = cardsCollection[order].textTitle;
    title.innerText = titleText.charAt(0).toUpperCase() + titleText.slice(1);

    const description = document.createElement("p");
    description.innerText = cardsCollection[order].textDescription;
    const button = document.createElement("button");
    button.innerHTML = `<a href="/index2.html?page=${cardsCollection[order].textTitle}">${btnText}</a>`;
    button.classList.add("btn-font", "btn", "btn-padding", "btn-outline-dark");

    const textWrapper = document.createElement("div");
    textWrapper.classList.add("col-6");
    textWrapper.appendChild(title);
    textWrapper.appendChild(description);
    textWrapper.appendChild(button);

    const picture = document.createElement("picture");
    const source = document.createElement("source");
    source.media = "(max-width: 766px)";
    source.srcset = cardsCollection[order].pictureSource;
    const image = document.createElement("img");
    image.src = cardsCollection[order].pictureImage;
    picture.appendChild(source);
    picture.appendChild(image);

    const pictureWrapper = document.createElement("div");
    pictureWrapper.classList.add("col-6", "d-flex", "align-items-center");
    pictureWrapper.appendChild(picture);

    const row = document.createElement("div");
    row.classList.add("row", "gx-4");
    row.appendChild(textWrapper);
    row.appendChild(pictureWrapper);

    const claimBlock = document.createElement("div");
    claimBlock.classList.add("claim-block", cardsCollection[order].cardBg);
    claimBlock.appendChild(row);

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("col-12", "col-lg-6", "d-flex");
    cardContainer.appendChild(claimBlock);

    const categories = document.getElementById("categories");
    if (categories !== null) {
      categories.appendChild(cardContainer);
    }
  };
  const spinner = document.getElementById("spinner");

  if (spinner !== null) {
    window.setTimeout(() => {
      spinner.style.display = "none";
      for (let i = 0; i < 4; i++) {
        createCard(i);
      }
    }, 3000);
  }
});

$(document).ready(function () {
  $(".animsition").animsition({
    inClass: "zoom-in",
    outClass: "zoom-out",
    inDuration: 1500,
    outDuration: 800,
    linkElement: ".animsition-link",
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: "body", //animsition wrapper element
    loadingClass: "animsition-loading",
    loadingInner: "", // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ["animation-duration", "-webkit-animation-duration"],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay: false,
    overlayClass: "animsition-overlay-slide",
    overlayParentElement: "body",
    transition: function (url) {
      window.location.href = url;
    },
  });
});
