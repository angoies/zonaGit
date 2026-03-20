btn1 = document.querySelector("#busca");
btn1.onclick = generaUsuario;

btn2 = document.querySelector("#lista");
btn2.onclick = generaTabla;

function generaUsuario() {
  usuario = document.querySelector("#usuario");
  fetch("https://jsonplaceholder.typicode.com/users/" + usuario.value)
    .then((response) => response.json())
    .then((response) => {
      let cad = "<tr><th>Nombre</th><th>Email</th><th>Télefono</th></tr>";
      cad += `<tr><td>${response.name}</td>
                                <td>${response.email}</td>
                                <td>${response.phone}</td></tr>`;

      document.getElementById("tabla1").innerHTML = cad;
    });
}

function generaTabla() {
  console.log("genera Tabla")
  fetch("https://jsonplaceholder.typicode.com/users/")
    .then((response) => response.json())
    .then((response) => {
      let cad = "<tr><th>Nombre</th><th>Email</th><th>Télefono</th></tr>";
      for (let usuario of response) {
        cad += `<tr><td>${usuario.name}</td>
                    <td>${usuario.email}</td>
                    <td>${usuario.phone}</td></tr>`;
      }
      document.getElementById("tabla1").innerHTML = cad;
    });
}
