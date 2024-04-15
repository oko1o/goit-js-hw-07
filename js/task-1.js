const listOfCategories = document.querySelectorAll("li.item");
const numberOfCategories = listOfCategories.length;

console.log(`Number of categories: ${numberOfCategories}`);

listOfCategories.forEach((element) => {
  const h2Content = element.querySelector("h2").innerHTML;
  console.log(`Category: ${h2Content}`);

  const innerLiList = element.querySelectorAll("li");
  const sumOfLiListItems = innerLiList.length;
  console.log(`Elements: ${sumOfLiListItems}`);
});

const ulClass = document.querySelectorAll("h2+ul");
ulClass.forEach((ul) => {
  ul.classList.add("animals-list");
});

const liClass = document.querySelectorAll("h2+ul>li");
liClass.forEach((li) => {
  li.classList.add("animals-list-item");
});

const addLiSpan = document.querySelectorAll("h2+ul>li");
addLiSpan.forEach((li) => {
  const liText = li.textContent;
  li.innerHTML = `<span>${liText}</span>`;
});

document.head.insertAdjacentHTML('beforeend', '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>');