async function getUserData(username) {
    const userData = await fetch(`https://api.github.com/users/${username}`);
    const jsonResponse = await userData.json();
    return jsonResponse;
}


document.getElementById('get-info').addEventListener('click', async function () {
    const input = document.getElementById('username').value;
    const userData = await getUserData(input);

    document.getElementById('fullName').textContent = userData.name;
    document.getElementById('bio').textContent = userData.bio;
    document.getElementById('profilePicture').setAttribute("src", userData.avatar_url);
    const homeUrlElement = document.getElementById('homeUrl');
    homeUrlElement.textContent = userData.html_url;
    homeUrlElement.setAttribute("href", userData.html_url);
     
});