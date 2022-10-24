const currentSearch = location.search;
const searchTerm = "=";
const indexOfFirst = currentSearch.indexOf(searchTerm);
const cardId = currentSearch.slice(indexOfFirst + 1);
console.log(cardId);
const spinner = document.getElementById("loader");
const categoryImage = document.getElementById("category-image");
const titleTextH1 = document.getElementById("title-text-big");
const titleTextH2 = document.getElementById("title-text-small");
const titleText = document.getElementById("title-text");
const content = document.getElementById("content");
const cardDescription = document.getElementById("card-description");
const allData = sessionStorage.getItem("categoryData");
if (allData == null || cardId.length == 0) {
  location.assign("./index.html");
}

const data = JSON.parse(allData);
//console.log(data);

const currentItem = data.find((element) => element.id === cardId);
spinner.style.display = "none";
cardDescription.classList.remove("d-none");
//console.log(currentItem);
categoryImage.style.backgroundImage = `url(${currentItem.imageUrl})`;
categoryImage.style.backgroundPosition = "center";
titleTextH1.innerText = currentItem.author;
titleTextH2.innerText = currentItem.author;
titleText.innerText = currentItem.author;
content.innerText = currentItem.content;
