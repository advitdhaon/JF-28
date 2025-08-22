import { login } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const school_id = document.getElementById("school_id").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    try {
      const data = await login({ school_id, username, password });

      localStorage.setItem("token", data.token);
      alert("Login successful 🎉");
      window.location.href = "main.html";
    } catch (err) {
      alert("❌ " + err.message);
    }
  });
});