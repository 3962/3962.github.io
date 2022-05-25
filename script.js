const form = document.querySelector("form");
form.addEventListener("submit", Send);

function Send(event) {

  event.preventDefault();


  let Name = document.querySelector("#Name").value;
  let LastName = document.querySelector("#LastName").value;
  let Email = document.querySelector("#Email").value;
  let Tel = document.querySelector("#Tel").value;

  console.log(Name, LastName, Email, Tel);

    Display(Name, LastName, Email, Tel);
}

function Display(Name, LastName, Email, Tel) {
    let DisDiv = document.querySelector("#Output");

    DisDiv.innerHTML = `
    <div>
        <h2>Din anmälan:</h2>
        <h5>Namn: ${Name}</h5>
        <h5>Efternamn: ${LastName}</h5>
        <h5>Email: ${Email}</h5>
        <h5>Telefon nummer: ${Tel}</h5>
    </div>
    `;
    document.querySelector("#Back").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

