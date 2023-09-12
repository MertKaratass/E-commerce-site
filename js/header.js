function sidebarFunc() {
  // ! home sidebar start
  const btnopenSidebar = document.querySelector("#btn-menu");
  const sidebar = document.querySelector("#sidebar");
  const btnCloseSidebar = document.querySelector("#close-sidebar");
  btnopenSidebar.addEventListener("click", function () {
    sidebar.style.left = "0";
  });

  btnCloseSidebar.addEventListener("click", function () {
    sidebar.style.left = "-100%";
  });

  /* click putside start */
  document.addEventListener("click", function (event) {
    if (
      !event.composedPath().includes(sidebar) &&
      !event.composedPath().includes(btnopenSidebar)
    ) {
      sidebar.style.left = "-100%";
    }
  });

  /* click putside end */

  //! home sidebar end
}

function searchModalFunc() {
  //!Search modal start
  const btnOpenSearch = document.querySelector(".search-button");
  const btnCloseSearch = document.getElementById("close-search");
  const modalSearch = document.getElementsByClassName("modal-search");
  const modalSearchWrapper = document.getElementsByClassName("modal-wrapper");

  btnOpenSearch.addEventListener("click", function () {
    modalSearch[0].style.visibility = "visible";
    modalSearch[0].style.opacity = "1";
  });

  btnCloseSearch.addEventListener("click", function () {
    modalSearch[0].style.visibility = "hidden";
    modalSearch[0].style.opacity = "0";
  });

  //?click outside start

  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(modalSearchWrapper[0]) &&
      !e.composedPath().includes(btnOpenSearch)
    ) {
      modalSearch[0].style.visibility = "hidden";
      modalSearch[0].style.opacity = "0";
    }
  });

  //?click outside end

  //!Search modal end
}

function headerFunc() {
  sidebarFunc();
  searchModalFunc();
}

export default headerFunc();
