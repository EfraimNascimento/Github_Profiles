let searchBtn = document.getElementById('searchBtn');


searchBtn.addEventListener('click', ()=>{

    let textInput = document.getElementById('searchInput').value;
    console.log(textInput)


    function getProfile(){
        const url = `https://api.github.com/users/${textInput}`
    
        fetch(url)
        .then(response => response.json())
        .then(data => {
            gitAvatar.src = data.avatar_url
            gitName.textContent = data.name
            gitUserName.textContent = data.login
            gitFollowers.textContent = data.followers
            gitRepos.textContent = data.public_repos
    
        })
    }
    
    function getRepoList(){
        const url = `https://api.github.com/users/${textInput}/repos`
    
        fetch(url)
        .then(response => response.json())
        .then(data => {
        
            firstRepo.href = data[0].html_url
            firstRepo.textContent = data[0].name
            secondRepo.href = data[1].html_url
            secondRepo.textContent = data[1].name
            thirdRepo.href = data[2].html_url
            thirdRepo.textContent = data[2].name
            fourthRepo.href = data[3].html_url
            fourthRepo.textContent = data[3].name
    
            console.log(data)
    
        })
    }
    
    getRepoList()
    getProfile()

})
