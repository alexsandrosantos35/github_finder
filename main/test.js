const QUERY = document.querySelector(".query");

const USER = {
    repos: Array,
}

async function getRepos() {
    const URL = `https://api.github.com/users/${QUERY.value}`;
    const DATA = await fetch(URL);
    const INFO = await DATA.json();
    USER.repos = INFO;
showData();
}

function showData(){

const USER_INFO = document.getElementById("user-info");

USER_INFO.innerHTML = `
    ${
        USER.repos.map((repo) => ` { <div><h1></h1>${repo.name}</h1></div>} `)
     } 
`;
}

showData();