let isOpen = false;
function openNav() {
  if (isOpen == false) {
    document.querySelector(".navBar").classList.add("active");
    isOpen = true;
  } else {
    document.querySelector(".navBar").classList.remove("active");
    isOpen = false;
  }
}

changeIcon = (icon) => icon.classList.toggle("fa-xmark");

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "1",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

const softBtn = document.querySelector("#soft");
const hardBtn = document.querySelector("#hard");
const tabBox = document.querySelector(".tab");

function softSkills() {
  if (softBtn.className.includes("tabActive") == false) {
    softBtn.classList.add("tabActive");
    tabBox.innerHTML += `<h2 class="tabTitle">My Soft Skills</h2>
    <p class="tabInfo">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Molestiae, numquam?
    </p>`;
  } else {
  }
}

// DOM Elements
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tabcontent");
const darkModeSwitch = document.querySelector("#dark-mode-switch");

// Functions
const activateTab = (tabnum) => {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  tabContents.forEach((tabContent) => {
    tabContent.classList.remove("active");
  });

  document.querySelector("#tab" + tabnum).classList.add("active");
  document.querySelector("#tabcontent" + tabnum).classList.add("active");
  localStorage.setItem("jstabs-opentab", JSON.stringify(tabnum));
};

// Event Listeners
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activateTab(tab.dataset.tab);
  });
});
