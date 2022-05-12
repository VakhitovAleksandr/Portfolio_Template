"use strict";

class toggleBlock {
  constructor(block, target) {
    if (block && target) {
      this.block = document.querySelector(block);
      this.target = document.querySelector(target);

      this.target.addEventListener("click", () => {
        if (!this.block.classList.contains("active")) {
          this.show();
        } else {
          this.hide();
        }
      });
    }

    // Show/Hide Блок

    this.show = () => {
      this.block.classList.add("active");
      document.body.style.overflow = "hidden";
      setTimeout(this.bodyClick, 0);
    };

    this.hide = () => {
      this.block.classList.remove("active");
      document.body.style.overflow = "";
    };

    // Target parent

    this.bodyClick = () => {
      let target = (e) => {
        if (!e.target.closest(block)) {
          this.hide();
          document.body.removeEventListener("click", target);
        }
      };
      document.body.addEventListener("click", target);
    };
  }
}

export default toggleBlock;
