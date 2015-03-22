 var toggler = document.getElementById('toggler');
    toggler.onclick = function (e) {
      e.preventDefault();
      toggler.classList.toggle('menu-toggler--close');
    }