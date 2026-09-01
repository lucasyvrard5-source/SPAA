document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".nav ul");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("open");
      var expanded = menu.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  }

  var filterBtns = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll("[data-type]");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var type = btn.getAttribute("data-filter");
      cards.forEach(function (card) {
        if (type === "tous" || card.getAttribute("data-type") === type) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Présélection du sujet du formulaire via ?sujet=adoption (lien depuis une fiche animal)
  var sujetSelect = document.getElementById("sujet");
  if (sujetSelect) {
    var params = new URLSearchParams(window.location.search);
    var sujet = params.get("sujet");
    if (sujet) {
      sujetSelect.value = sujet;
    }
  }

  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.getElementById("form-status");
      status.textContent = "Merci ! Votre message a bien été pris en compte (prototype — aucun e-mail n'est réellement envoyé). L'association vous répondra dans les meilleurs délais.";
      status.classList.add("show", "ok");
      form.reset();
    });
  }
});
