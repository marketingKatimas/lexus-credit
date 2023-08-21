// Get all the read more elements
var readMoreElements = document.getElementsByClassName("read-more");

// Attach click event listeners to each read more element
for (var i = 0; i < readMoreElements.length; i++) {
  readMoreElements[i].addEventListener("click", toggleReadMore);
}


// ===== The New Update Function =====

function toggleReadMore(event) {
  var professionElement = event.target.parentNode;
  var dotsElement = professionElement.querySelector(".dots");
  var moreElement = professionElement.querySelector(".more");
  var readMoreElement = professionElement.querySelector(".read-more");

  if(!dotsElement || !moreElement || !readMoreElement) {
    console.error("Required elements not found.");
    return;
  }

  if(dotsElement.style.display === "none") {
    dotsElement.style.display = "inline";
    readMoreElement.textContent = getCurrentLanguage() === "en" ? "Read More" : "Baca Lagi";
    moreElement.style.display = "none";
  } else {
    dotsElement.style.display = "none";
    readMoreElement.textContent = getCurrentLanguage() === "en" ? "Read Less" : "Baca Kurang";
    moreElement.style.display = "inline";
  }
}

function getCurrentLanguage() {
  var languageToggle = document.getElementById("language-toggle");
  return languageToggle.checked ? "bm" : "en";
}