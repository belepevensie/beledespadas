const cookieMessageStatus = localStorage.getItem("cookieMessageStatus");
const cookieMessage = document.querySelector(".cookie-message");

if (cookieMessageStatus === "okay") {
  cookieMessage.style.display = "none";
} else {
  const cookieButton = document.querySelector(".cookie-button");

  cookieButton.addEventListener("click", function () {
    cookieMessage.style.display = "none";
    localStorage.setItem("cookieMessageStatus", "okay");
  });
}
