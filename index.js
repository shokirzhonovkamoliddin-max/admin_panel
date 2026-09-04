const elForm = document.querySelector(".form");
const elUser = document.querySelector(".username");
const elPasswd = document.querySelector(".passwd");

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = elUser.value;
  const password = elPasswd.value;
  console.log("click");

  if (username === "admin" && password === "1234") {
    Toastify({
      text: "Successfully joined!",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #0de72e, #028400)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();

    setTimeout(() => {
      window.location.href = "admin.html";
    }, 500);
  } else {
    Toastify({
      text: "ERROR 404",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #ff0808, #5c010a)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  }
});
