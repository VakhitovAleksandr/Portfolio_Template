"use strict";

class toggleBlock {
  constructor(block, target) {
    this.block = document.querySelector(block);
    this.target = document.querySelector(target);

    this.target.addEventListener("click", () => {
      console.log(this);
      this.block.classList.toggle("active");
      if (this.block.classList.contains("active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });
  }
}

export default toggleBlock;
