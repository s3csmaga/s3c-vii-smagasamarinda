// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan div
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// click to close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};


// modal box a
const itemDetailModala = document.querySelector("#item-detail-modal-a");
const itemDetailButtona = document.querySelectorAll(".item-detail-button-a");

itemDetailButtona.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModala.style.display = "flex";
    e.preventDefault();
  };
});

// click to close modal
document.querySelector(".modal .close-icon-a").onclick = (e) => {
  itemDetailModala.style.display = "none";
  e.preventDefault();
};



// modal box b
const itemDetailModalb = document.querySelector("#item-detail-modal-b");
const itemDetailButtonb = document.querySelectorAll(".item-detail-button-b");

itemDetailButtonb.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModalb.style.display = "flex";
    e.preventDefault();
  };
});

// click to close modal
document.querySelector(".modal .close-icon-b").onclick = (e) => {
  itemDetailModalb.style.display = "none";
  e.preventDefault();
};



// modal box c
const itemDetailModalc = document.querySelector("#item-detail-modal-c");
const itemDetailButtonc = document.querySelectorAll(".item-detail-button-c");

itemDetailButtonc.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModalc.style.display = "flex";
    e.preventDefault();
  };
});

// click to close modal
document.querySelector(".modal .close-icon-c").onclick = (e) => {
  itemDetailModalc.style.display = "none";
  e.preventDefault();
};


// modal box d
const itemDetailModald = document.querySelector("#item-detail-modal-d");
const itemDetailButtond = document.querySelectorAll(".item-detail-button-d");

itemDetailButtond.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModald.style.display = "flex";
    e.preventDefault();
  };
});

// click to close modal
document.querySelector(".modal .close-icon-d").onclick = (e) => {
  itemDetailModald.style.display = "none";
  e.preventDefault();
};



// modal box e
const itemDetailModale = document.querySelector("#item-detail-modal-e");
const itemDetailButtone = document.querySelectorAll(".item-detail-button-e");

itemDetailButtone.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModale.style.display = "flex";
    e.preventDefault();
  };
});

// click to close modal
document.querySelector(".modal .close-icon-e").onclick = (e) => {
  itemDetailModale.style.display = "none";
  e.preventDefault();
};

