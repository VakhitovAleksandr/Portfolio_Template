"use strict";

class toggleBlock {
  constructor(block, target) {
    this.block = document.querySelector(block);
    this.target = document.querySelector(target);

    this.show = () => {
      this.block.classList.add("active");
      document.body.style.overflow = "hidden";
    };

    this.hide = () => {
      this.block.classList.remove("active");
      document.body.style.overflow = "";
    };

    this.target.addEventListener("click", () => {
      if (!this.block.classList.contains("active")) {
        this.show();
      } else {
        this.hide();
      }
    });
  }
}

export default toggleBlock;
