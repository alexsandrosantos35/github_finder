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
    const URL = `https://api.github.com/users/${QUERY.value}/repos`;
    const DATA = await fetch(URL);
    const REPOS = await DATA.json();
    USER.repos = REPOS;

    if (typeof REPOS === Array) {
        return console.table(USER.repos);
    }


    else {
        console.log(typeof REPOS);

    }
    
}

   getRepos();