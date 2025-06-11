// This needs some extra js to fix buggyness when going back and forth between small and large view ports and the menu has been toggled.

/* global Drupal */
/* global jQuery */
/* global once */
(($, Drupal) => {
  "use strict";

  Drupal.behaviors.MainNav = {
    attach(context) {
      once("main-nav-toggle", ".main-nav__toggle", context).forEach(
        (toggle) => {
          toggle.addEventListener("click", (e) => {
            const items = toggle.nextElementSibling;
            if (items.classList.contains("main-nav__items")) {
              $(items).slideToggle(500);
            }
          });
        }
      );
    },
  };
})(jQuery, Drupal);
