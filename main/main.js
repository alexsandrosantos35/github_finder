const QUERY = document.querySelector(".query");

const USER = {
    login: String,
    name: String,
    bio: String,
    avatar_url: Number,
    public_repos: Number,
    followers: Number,
    following: Number,
    repos: Array,
};

async function getRepos() {
    const URL = `https://api.github.com/users/alexsandrosantos35/repos`;
    const DATA = await fetch(URL);
    const REPOS = await DATA.json();
    USER.repos = REPOS;
    console.table(USER.repos);
   
    }

    getRepos();


