export const alert = message => {
  window.alert(message);
};

export const showLoading = () => {
  const loading = document.getElementById("loading");
  loading.classList.remove("hidden");
  loading.classList.add('shown');
};

export const hideLoading = () => {
  const loading = document.getElementById("loading");
  loading.classList.remove("shown");
  loading.classList.add("hidden");
};

export const showDarkHeader = () => {
  const header = document.getElementById("header");
  const headerLeft = document.getElementById("header-left");
  const headerRight = document.getElementById("header-right");
  const headerMiddle = document.getElementById("header-middle");
  const headerMiddleItems = document.getElementsByClassName("header__middle-item");
  const headerActions = document.getElementsByClassName("header__action");

  const search = document.getElementById("search");
  const searchContainer = document.getElementById("search-container");

  header.classList.remove("header--light");
  headerLeft.classList.remove("header__left--light");
  headerRight.classList.remove("header__right--light");
  headerMiddle.classList.remove("header__middle--light");
  for (let i = 0; i < headerMiddleItems.length; i++) {
    headerMiddleItems[i].classList.remove("header__middle-item--light");
  }
  for (let i = 0; i < headerActions.length; i++) {
    headerActions[i].classList.remove("header__action--light");
  }

  search.classList.remove("search--light");
  searchContainer.classList.remove("search__container--light");

  document.body.style.background = "#000";
};

export const showLightHeader = () => {
  const header = document.getElementById("header");
  const headerLeft = document.getElementById("header-left");
  const headerRight = document.getElementById("header-right");
  const headerMiddle = document.getElementById("header-middle");
  const headerMiddleItems = document.getElementsByClassName("header__middle-item");
  const headerActions = document.getElementsByClassName("header__action");

  const search = document.getElementById("search");
  const searchContainer = document.getElementById("search-container");

  header.classList.add("header--light");
  headerLeft.classList.add("header__left--light");
  headerRight.classList.add("header__right--light");
  headerMiddle.classList.add("header__middle--light");
  for (let i = 0; i < headerMiddleItems.length; i++) {
    headerMiddleItems[i].classList.add("header__middle-item--light");
  }
  for (let i = 0; i < headerActions.length; i++) {
    headerActions[i].classList.add("header__action--light");
  }

  search.classList.add("search--light");
  searchContainer.classList.add("search__container--light");

  document.body.style.background = "#fff";
};