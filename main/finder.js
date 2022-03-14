const USER = {
    login: String,
    name: String,
    bio: String,
    avatar_url: String,
    public_repos: Number,
    followers: Number,
    following: Number,
    repos: Array,
};

const QUERY = document.querySelector(".query");

async function getUser() {
    getRepos();
    const URL = `https://api.github.com/users/${QUERY.value}`;
    const DATA = await fetch(URL);
    const USER_INFO = await DATA.json();

    USER.login = USER_INFO.login;
    USER.name = USER_INFO.name;
    USER.bio = USER_INFO.bio;
    USER.avatar_url = USER_INFO.avatar_url;
    USER.followers = USER_INFO.followers;
    USER.following = USER_INFO.following;
    USER.public_repos = USER_INFO.public_repos;

    getAllData();
}

async function getRepos() {
    const URL = `https://api.github.com/users/${QUERY.value}/repos`;
    const DATA = await fetch(URL);
    const REPOS = await DATA.json();
    USER.repos = REPOS;
}

function getAllData() {
    const USER_INFO = document.getElementById("user-info");

    USER_INFO.setAttribute("style", "display : block");
    USER_INFO.innerHTML = `
    <div class="user-info">
    <div class="user-avatar">
    <h2 class="user-name>${USER.name == null ? USER.name = "Nome indisponível" : USER.name}</h2>
    <h3 class="uyser-login">${USER.login}</h3>
    <img class="avatar-img" src="${USER.avatar_url}" alt="${USER.login}">
    <p class="bio">${USER.bio == null ? USER.bio = "Bio indisponível" : USER.bio}</p>
    </div>
    <div class="user-stats">
        <p>Repos: ${USER.public_repos}</p>
        <p>Followers: ${USER.followers}</p>
        <p>Following: ${USER.following}</p>
    </div>
    ${USER.repos.map((repo) => `<div class="repo">
    <h3 class="repo-name">${repo.name}</h3>
    <p class="repo-description">${
        repo.description == null 
        ? repo.description = "Sem descrição" :
        repo.description 
    }</p>
    <p class="repo-language">${repo.language == null ? repo.language : repo.language}
    <div class="repo-stats">
    <span>
    ${repo.starsgazers_count}
    </span>
    <span>
    ${repo.watchers_count}
    </span>
    <span>
    ${repo.forks_count}
    </span>
    <span>
    ${new Date(repo.updated_at).LocaleDateString("pt-br")}
    </span>
    </div>
    <a href="${repo.html_url}" target="_blanck">
    <span>
    ${repo.html_url}
    </span>
    </a>
    </div>`)
            .join("")}
   `; 
  }