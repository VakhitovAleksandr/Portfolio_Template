import Tabs from "./modules/tabs.js";
import toggleBlock from "./modules/toggleBlocks.js";

window.addEventListener("DOMContentLoaded", function () {
  const tab = new Tabs(".tabs__nav", ".tabs__item", ".tabs__link");
  const sidebarToggle = new toggleBlock(".sidebar", ".toggle-sidebar");
  const navToggle = new toggleBlock(".nav", ".toggle-menu");
});
