var searchLink = document.querySelector(".btn-hotel-search");
var searchForm = document.querySelector(".form-item");

searchLink.addEventListener("click", function(event){
  event.preventDefault();
  if (searchForm.classList.contains("form-item-show")) {
    searchForm.classList.remove("form-item-show");
  } else {
      searchForm.classList.add("form-item-show");
  }

});
