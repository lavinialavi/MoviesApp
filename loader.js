function showLoader() {
  document
    .querySelectorAll(".loader, .loaderBackground")
    .forEach(element => element.classList.add("show"));
}

function hideLoader() {
  document
    .querySelectorAll(".loader, .loaderBackground")
    .forEach(element => element.classList.remove("show"));
}
