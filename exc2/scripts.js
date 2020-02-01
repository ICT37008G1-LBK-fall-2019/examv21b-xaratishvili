let list = document.createElement("ul");
document.body.appendChild(list);

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(
    json => json.map(users => {
        let li = document.createElement("li");
        li.innerHTML = users.name;
        list.appendChild(li);
    })
)

