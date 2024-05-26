// 1 task

document.getElementById("hider").addEventListener("click", function() {
  var textElement = document.getElementById("text");
  if (textElement.style.display === "none") {
      textElement.style.display = "block";
  } else {
      textElement.style.display = "none";
  }
});
