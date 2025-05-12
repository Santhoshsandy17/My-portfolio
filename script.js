const topBtn = document.getElementById("topBtn");
window.onscroll = function () {
  topBtn.style.display = window.scrollY > 100 ? "block" : "none";
};
topBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("bg-dark");
  document.body.classList.toggle("text-white");
};

new TypeIt(".lead", {
  strings: ["Full Stack Web Developer", "Frontend Enthusiast", "Python Programmer"],
  speed: 100,
  loop: true,
  breakLines: false,
}).go();


// Contact form validation and submission
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = this;

  if (!form.checkValidity()) {
    e.stopPropagation();
    form.classList.add("was-validated");
    return;
  }

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { Accept: "application/json" },
  })
    .then(response => {
      if (response.ok) {
        form.reset();
        document.querySelector(".form-message").style.display = "block";
        form.classList.remove("was-validated");
        window.scrollTo({ top: form.offsetTop, behavior: 'smooth' });
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    })
    .catch(error => {
      alert("Oops! There was a problem connecting to the server.");
    });
});
