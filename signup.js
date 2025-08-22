// signup.js
import { apireq } from "./api.js"; // assuming you have api.js in same dir

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      username: formData.get("username"),
      password: formData.get("password"),
      school_id: formData.get("school_id"),
    };

    try {
      const res = await apireq("POST", "/signup", payload);

      if (res.token) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));
        window.location.href = "notices/main.html";
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("Signup failed. Please try again.");
    }
  });
});