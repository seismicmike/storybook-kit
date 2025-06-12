// This needs some extra js to fix buggyness when going back and forth between small and large view ports and the menu has been toggled.

/* global Drupal */
/* global jQuery */
/* global once */
(($, Drupal) => {
  "use strict";

  Drupal.behaviors.NavMenu = {
    attach(context) {
      once("nav-menu-toggle", ".nav-menu__toggle", context).forEach(
        (toggle) => {
          toggle.addEventListener("click", (e) => {
            const items = toggle.nextElementSibling;
            if (items.classList.contains("nav-menu__items")) {
              $(items).slideToggle(500);
            }
          });
        }
      );
    },
  };
})(jQuery, Drupal);
