const currentSearch = location.search;

const searchTerm = "=";
const indexOfFirst = currentSearch.indexOf(searchTerm);
const category = currentSearch.slice(indexOfFirst + 1);
const spinner = document.getElementById("loader");
const cardContainer = document.getElementById("cards-container");

let getData = async () => {
  let data = await fetch(
    `https://inshorts.deta.dev/news?category=${category}`
  ).then((response) => response.json());
  spinner.style.display = "none";

  const cardsCollection = data.data.slice(0, 16);
  cardsCollection.forEach((i) => {
    const card = createCard(i);
    cardContainer.appendChild(card);
  });

  // Save to SessionStorage
  sessionStorage.setItem("categoryData", JSON.stringify(data.data));
};

getData();
// Animationmation
//
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

if (category.length > 0) {
  const categoryTitles = document.querySelectorAll(".categories");
  categoryTitles.forEach((element) => {
    element.innerText = category.charAt(0).toUpperCase() + category.slice(1);
  });
}
const createCard = (cardData) => {
  // console.log(cardData);
  //Left Side
  const leftSeries = document.createElement("h5");
  leftSeries.classList.add("lh-15px", "green");
  leftSeries.innerText = "Series 1";
  const leftName = document.createElement("p");
  leftName.classList.add("lh-20px", "light-1");
  leftName.innerText = cardData.author;
  leftName.style.whiteSpace = "nowrap";
  leftName.style.overflow = "hidden";
  leftName.style.textOverflow = "ellipsis";
  const leftNumber = document.createElement("h4");
  leftNumber.classList.add("lh-20px", "fw-normal", "light-4");
  leftNumber.innerText = "#8734";

  const leftWrapper = document.createElement("div");
  leftWrapper.classList.add("col-6");
  leftWrapper.appendChild(leftSeries);
  leftWrapper.appendChild(leftName);
  leftWrapper.appendChild(leftNumber);

  //Right Side
  const amountImage = document.createElement("img");
  amountImage.src = "/images/erhtSmall.png";

  const amountImgWrapper = document.createElement("div");
  amountImgWrapper.classList.add(
    "erth-right-pd",
    "d-flex",
    "align-items-center"
  );
  amountImgWrapper.style.flexShrink = "0";
  amountImgWrapper.appendChild(amountImage);
  const amountText = document.createElement("p");
  amountText.classList.add("lh-20px", "light-1");
  amountText.innerText = "2.99 ETH";
  amountText.style.whiteSpace = "nowrap";
  amountText.style.overflow = "hidden";
  amountText.style.textOverflow = "ellipsis";

  const rightBid = document.createElement("h5");
  rightBid.classList.add("lh-15px", "light-1");
  rightBid.innerText = "Top Bid";
  const rightBidAmount = document.createElement("div");
  rightBidAmount.classList.add("d-flex", "flex-row", "justify-content-end");
  rightBidAmount.appendChild(amountImgWrapper);
  rightBidAmount.appendChild(amountText);
  const leftDate = document.createElement("h4");
  leftDate.classList.add("lh-20px", "fw-normal", "light-4");
  leftDate.innerText = "1 day left";

  const rightWrapper = document.createElement("div");
  rightWrapper.classList.add("col-6", "text-end");
  rightWrapper.appendChild(rightBid);
  rightWrapper.appendChild(rightBidAmount);
  rightWrapper.appendChild(leftDate);

  //
  const textBox = document.createElement("div");
  textBox.classList.add("row", "w-100", "g-0");
  textBox.appendChild(leftWrapper);
  textBox.appendChild(rightWrapper);

  const textBoxWrapper = document.createElement("div");
  textBoxWrapper.classList.add(
    "ending-small-box",
    "purple-man-small-bg",
    "w-100"
  );
  textBoxWrapper.appendChild(textBox);

  const card = document.createElement("div");
  card.classList.add(
    "ending-box",
    "w-100",
    //"purple-man-bg",
    "d-flex",
    "flex-column",
    "align-items-center",
    "justify-content-end"
  );
  card.style.backgroundImage = `url(${cardData.imageUrl})`;
  card.style.backgroundPosition = "center";
  card.appendChild(textBoxWrapper);

  const clickWrapper = document.createElement("a");
  clickWrapper.href = `/index3.html?id=${cardData.id}`;
  clickWrapper.appendChild(card);
  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add("col");
  cardWrapper.appendChild(clickWrapper);
  return cardWrapper;
};
