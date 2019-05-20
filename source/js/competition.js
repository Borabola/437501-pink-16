var competitionSent = document.querySelector(".member-form__sent");
var popupSent = document.querySelector(".modal__sent");
var popupUnsent = document.querySelector(".modal__unsent");
var closeSent = popupSent.querySelector(".modal__close");
var closeUnsent = popupUnsent.querySelector(".modal__close--unsent");
var userName = document.querySelector(".member-form__surname");
var userSurname = document.querySelector(".member-form__surname");
var userEmail = document.querySelector("[type=email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("userName");
} catch (err) {
  isStorageSupport = false;
}

if (popupSent) {closeSent.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSent.classList.remove("modal__show");
});
}
if (popupUnsent) {closeUnsent.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupUnsent.classList.remove("modal__show");
});
}

competitionSent.addEventListener("click", function (evt) {
  if (!userName.value || !userSurname.value || !userEmail.value) {
    evt.preventDefault();
    popupUnsent.classList.add("modal__show");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("userSurname", userSurname.value);
    localStorage.setItem("userEmail", userEmail.value);
    }

    popupSent.classList.add("modal__show");
  }
});
