let searchBtn = document.getElementById('searchBtn');


searchBtn.addEventListener('click', ()=>{

    let textInput = document.getElementById('searchInput').value;
    console.log(textInput)


    function getProfile(){
        const url = `https://api.github.com/users/${textInput}`
    
        fetch(url)
        .then(response => response.json())
        .then(data => {
            if(data.name !== undefined){
                gitAvatar.src = data.avatar_url
                gitName.textContent = `Nome: ${data.name}`
                gitUserName.textContent = `Usuário: ${data.login}`
                gitFollowers.textContent = `Seguidores: ${data.followers}`
                gitRepos.textContent = `Quantidade de repositórios: ${data.public_repos}`
                container.style.opacity = '1';
                profileInfos.style.opacity = '1';
                profileError.style.opacity = '0';
            }else{
                profileError.style.opacity = '1';
                container.style.opacity = '1';
                profileInfos.style.opacity = '0';

            }
            console.log(data.name)
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
