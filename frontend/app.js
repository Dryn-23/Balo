const API_URL = "https://balo-5.onrender.com";
localStorage.removeItem("token");

const loginView = document.getElementById("loginView");
const registerView = document.getElementById("registerView");
const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

function setMessage(el, text, isSuccess = false) {
  el.textContent = text;
  el.classList.toggle("success", isSuccess);
}

function setLoading(btn, isLoading) {
  btn.disabled = isLoading;
  btn.querySelector(".btn-text").classList.toggle("hidden", isLoading);
  btn.querySelector(".spinner").classList.toggle("hidden", !isLoading);
}

// Password show/hide toggles
document.querySelectorAll(".eye-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = document.getElementById(btn.dataset.target);
    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    btn.querySelector(".eye-open").classList.toggle("hidden", isPassword);
    btn.querySelector(".eye-closed").classList.toggle("hidden", !isPassword);
    btn.setAttribute("aria-label", isPassword ? "Hide password" : "Show password");
  });
});

// View switching with transition
function switchView(hideEl, showEl) {
  hideEl.classList.add("slide-out-left");
  setTimeout(() => {
    hideEl.classList.add("hidden");
    hideEl.classList.remove("slide-out-left");

    showEl.classList.remove("hidden");
    showEl.classList.add("slide-in");
    setTimeout(() => showEl.classList.remove("slide-in"), 350);
  }, 350);
}

showRegister.addEventListener("click", (e) => {
  e.preventDefault();
  switchView(loginView, registerView);
});

showLogin.addEventListener("click", (e) => {
  e.preventDefault();
  switchView(registerView, loginView);
});

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  setMessage(message, "");
  setLoading(loginBtn, true);

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
    sessionStorage.setItem("justLoggedIn", "1");
    window.location.href = "index.html";
  } catch (error) {
    setMessage(message, "Cannot connect to the server.");
  } finally {
    setLoading(loginBtn, false);
  }
});

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  const confirmPassword = document.getElementById("regConfirmPassword").value;
  const message = document.getElementById("registerMessage");

  setMessage(message, "");

  if (password !== confirmPassword) {
    setMessage(message, "Passwords do not match.");
    return;
  }

  setLoading(registerBtn, true);

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
  } finally {
    setLoading(registerBtn, false);
  }
});