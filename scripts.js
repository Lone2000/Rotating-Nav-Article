function showNav() {
  // Get the container element
  const container = document.querySelector(".content");
  const btn_open = document.querySelector("#open");
  // Toggle the 'shownav' class on the container
  container.classList.toggle("shownav");
  //   grab nav
  const nav = document.querySelector("nav");

  // toggle inactive
  nav.classList.remove("inactive");
  nav.classList.remove("move-out");

  // Toggle animation
  nav.classList.toggle("move-in");

  // Get the close button
  const btn_close = document.querySelector("#close");

  // Toggle vanish
  btn_open.classList.toggle("vanish");

  // Make Bars vanish
  //   btn_open.classList.add("vanish");

  // Make the X appear
  btn_close.classList.remove("inactive");
  btn_close.classList.add("active");

  //   btn.close.classList.toggle("inactive");
  //   btn_close.classList.toggle("a")
}

function hideNav() {
  const container = document.querySelector(".content");
  const btn_open = document.querySelector("#open");
  const btn_close = document.querySelector("#close");

  // Remove 'shownav' class on the container
  container.classList.toggle("shownav");

  // Remove 'vanish' from 'open' and add to 'close'
  btn_open.classList.toggle("vanish");
  //   btn_close.classList.add("vanish");
  btn_close.classList.toggle("vanish");
  btn_close.classList.toggle("active");

  //   grab nav
  const nav = document.querySelector("nav");
  nav.classList.toggle("move-in");

  nav.classList.toggle("move-out");
}
