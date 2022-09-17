function User(name, lastname) {
  this.name = name;
  this.lastname = lastname;
  this.appendTable = function () {
    const nameTable = document.createElement("td");
    const lastnameTable = document.createElement("td");
    nameTable.textContent = this.name;
    lastnameTable.textContent = this.lastname;
    const tableRow = document.createElement("tr");
    tableRow.append(nameTable, lastnameTable);
    document.querySelector("table > tbody").append(tableRow);
  };
}

const capital = (enteredText) =>
  enteredText.charAt(0).toUpperCase() + enteredText.slice(1).toLowerCase();
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const userFullName = document.getElementById("fullName").value;
  const [name, lastname] = userFullName
    .split(" ")
    .map((newName) => capital(newName.trim()));
  const user = new User(name, lastname);
  user.appendTable();
});
