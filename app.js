let obj = {
  display: "block",
};
function handleCLick() {
  console.log("hello");
  document.getElementsByClassName("menu_items")[0].style = obj;
}
document
  .getElementsByClassName("nav_menu")[0]
  .addEventListener("click", handleCLick);
