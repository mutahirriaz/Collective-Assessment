const URL = "https://api.github.com";

const allGistUrl = (username) => {
    return `${URL}/users/${username}/gists`;
}

const singleGistUrl = (gistId) => {
    return `${URL}/gists${gistId}`
}

export {allGistUrl, singleGistUrl}