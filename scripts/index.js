const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(
  ".modal__close-button",
);

const profileFormElement = editProfileModal.querySelector(".modal__form");
const EditProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input",
);
const EditProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input",
);

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");

  EditProfileNameInput.value = profileNameEl.textContent;
  EditProfileDescriptionInput.value = profileDescriptionEl.textContent;
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-button");

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); //prevents default HTML form behavior

  profileNameEl.textContent = EditProfileNameInput.value;
  profileDescriptionEl.textContent = EditProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

const addCardFormElement = newPostModal.querySelector(".modal__form");
const linkInput = newPostModal.querySelector("#card-image-input");
const captionInput = newPostModal.querySelector("#card-caption-input");

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  console.log(linkInput.value);
  console.log(captionInput.value);

  newPostModal.classList.remove("modal_is-opened");
}

addCardFormElement.addEventListener("submit", handleAddCardSubmit);
