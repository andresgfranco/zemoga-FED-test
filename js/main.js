function listView() {
  document.getElementsByClassName("grid-view")[0].style.display = "none";
  document.getElementsByClassName("list-view")[0].style.display = "block";
}
function gridView() {
  document.getElementsByClassName("grid-view")[0].style.display = "block";
  document.getElementsByClassName("list-view")[0].style.display = "none";
}


window.addEventListener("resize", function(){
  if (document.documentElement.clientWidth < 768) {
    gridView();
  }
});