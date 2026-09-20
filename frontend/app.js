const API_URL = "https://balo-5.onrender.com";
localStorage.removeItem("token");
const loginView = document.getElementById("loginView");
const registerView = document.getElementById("registerView");
const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

function setMessage(el, text, isSuccess = false) {
  el.textContent = text;
  el.classList.toggle("success", isSuccess);
}

showRegister.addEventListener("click", (e) => {
  e.preventDefault();
  loginView.classList.add("hidden");
  registerView.classList.remove("hidden");
});

showLogin.addEventListener("click", (e) => {
  e.preventDefault();
  registerView.classList.add("hidden");
  loginView.classList.remove("hidden");
});

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  try {
    const response = await fetch(`${API_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
      setMessage(message, data.message || "Login failed.");
      return;
    }

    sessionStorage.setItem("token", data.token);
    window.location.href = "index.html";
  } catch (error) {
    setMessage(message, "Cannot connect to the server.");
  }
});

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  const message = document.getElementById("registerMessage");

  try {
    const response = await fetch(`${API_URL}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();
    setMessage(message, data.message, response.ok);

    if (response.ok) {
      registerForm.reset();
    }
  } catch (error) {
    setMessage(message, "Cannot connect to the server.");
  }
});