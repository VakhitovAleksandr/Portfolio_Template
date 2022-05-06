"use strict";

class Tabs {
  constructor(tabNavsSelector, tabBodySelector, tabLinksSelector) {
    if (tabNavsSelector && tabBodySelector && tabLinksSelector) {
      this.nav = document.querySelector(tabNavsSelector);
      this.body = document.querySelectorAll(tabBodySelector);
      this.links = document.querySelectorAll(tabLinksSelector);

      this.hide = function () {
        this.body.forEach((item) => {
          item.style.display = "none";
          this.links.forEach((item) => {
            item.classList.remove("active");
          });
        });
      };

      this.show = function (i = 0) {
        this.body[i].style.display = "block";
        this.links[i].classList.add("active");
      };

      this.hide();
      this.show();

      this.nav.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.classList.contains(tabLinksSelector.replace(/\./, ""))) {
          this.links.forEach((item, i) => {
            if (e.target == item) {
              this.hide();
              this.show(i);
            }
          });
        }
      });
    }
  }
}

export default Tabs;
