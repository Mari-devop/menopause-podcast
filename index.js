const burgerButton = document.querySelector('.header-section__burger');
const menu = document.querySelector('.header-section__menu');

burgerButton.addEventListener('click', () => {
    menu.classList.toggle('active'); 
    burgerButton.classList.toggle('active'); 
});

//Video - about us section 
function openModal() {
    const modal = document.getElementById("video-modal");
    const videoFrame = document.getElementById("video-frame");

    modal.style.display = "block";
    videoFrame.src = "https://www.youtube.com/embed/tiZfpCBQjeU?si=PRC_snNsgYn5W4fj";
  
    document.body.classList.add("no-scroll");
    document.addEventListener("keydown", handleEscapeKey);
  }
  
  function closeModal() {
    const modal = document.getElementById("video-modal");
    const videoFrame = document.getElementById("video-frame");
  
    modal.style.display = "none";
    videoFrame.src = "";
  
    document.body.classList.remove("no-scroll");
  
    document.removeEventListener("keydown", handleEscapeKey);
  }
  
  document.querySelector(".close").onclick = function () {
    closeModal();
  };
  
  window.onclick = function (event) {
    const modal = document.getElementById("video-modal");
    const modalContent = document.querySelector(".modal-content");
  
    if (event.target === modal && !modalContent.contains(event.target)) {
      closeModal();
    }
  };
  
  function handleEscapeKey(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }
  

