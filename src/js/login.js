const data = {
  login: "admin",
  password: "admin"
};

document.getElementById("enter").onclick = checkUser;

function checkUser() {
  let login = document.getElementById("login").value,
    password = document.getElementById("password").value;
  if (checkAdmin(login, password)) {
    location.href = "./index.html";
  } else checkNull(login, password);

  return console.error("NOOO");
}

function checkAdmin(login, password) {
  return login === data.login && password === data.password;
}

function checkNull(login, password) {
  if (login === "" && password === "") {
    let nullDiv = document.querySelectorAll(".nullLogin, .nullPassword");
    for (let item of nullDiv) {
      item.style.display = "flex";
    }
  } else if (login === "") {
    let nullLogin = document.querySelector(".nullLogin");
    nullLogin.style.display = "flex";
  } else {
    let nullPassword = document.querySelector(".nullPassword");
    nullPassword.style.display = "flex";
  }
}
