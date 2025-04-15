const fill = document.querySelector(".fill");
const container = document.querySelectorAll(".box-container");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const box of container) {
  box.addEventListener("dragover", dragOver);
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("drop", dragDrop);
}

function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className += " invisible "), 0);
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnd() {
  this.className = "fill";
}
function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}
function dragLeave() {
  this.className = "box-container";
}
function dragDrop() {
  this.className = "box-container";
  this.append(fill);
}
