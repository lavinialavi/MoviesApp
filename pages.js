const prevPage = document.querySelector(".previous-page");
const nextPage = document.querySelector(".next-page");

const firstPage = document.querySelector(".first-page");
const lastPage = document.querySelector(".last-page");
const pageNumber = document.querySelector(".pageNumber");

const disablePaginationButton = () => {
  !prev ? (prevPage.disabled = true) : (prevPage.disabled = false);
  !next ? (nextPage.disabled = true) : (nextPage.disabled = false);
  !prev ? (firstPage.disabled = true) : (firstPage.disabled = false);
  !next ? (lastPage.disabled = true) : (lastPage.disabled = false);
};

const emptyContainer = container => {
  container.innerHTML = "";
};
const updatePageNumber = (pageNumber, nrOfPages) => {
  pageNumber.innerText = `${pageNr} of ${nrOfPages}`;
};

prevPage.addEventListener("click", () => getDataFromServer(prev));
nextPage.addEventListener("click", () => getDataFromServer(next));
firstPage.addEventListener("click", () => getDataFromServer(first));
lastPage.addEventListener("click", () => getDataFromServer(last));
