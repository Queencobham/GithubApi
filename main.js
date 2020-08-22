const searchFrom = document.querySelector('.searchbutton');
const input = document.querySelector('#input');
const showResult = document.querySelector('.result')

searchFrom.addEventListener('click', function(e) {

  e.preventDefault()

  if (input.value == ''){
    alert('Input field is empty')
    return
  }
  
  let username = input.value;

   
  fetch(`https://api.github.com/users/${username}?client_id=d9308aacf8b204d361fd&client_secret=62551cc02cee983fff0bac41baf170eb5a312c1c`).then((res) =>{
    return res.json()
  }).then((data) =>{
    console.log(data)
    
    showResult.innerHTML = `
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">${data.name}</h3>
      </div>
     <div class="panel-body">
    <div class="row">
      <div class="col-md-3">
         <img class="image" src="${data.avatar_url}">
      </div>
      <div class="col-md-9"> 
        <span class="label label-default"> Repos: ${data.public_repos}</span>
        <span class="label label-default"> Followers: ${data.followers}</span>
        <span class="label label-default"> Following: ${data.following}</span>
        <br><br>
        <ul class="list-group">
          <li class="list-group-item">Github Username : ${data.login}</li> 
          <li class="list-group-item">Bio : ${data.bio}</li>
          <li class="list-group-item">Blog : ${data.blog}</li>
          <li class="list-group-item">Twitter : ${data.twitter_username}</li>
          <li class="list-group-item">Location : ${data.location}</li>
          <li class="list-group-item">Joined : ${data.created_at}</li>
        </ul>
        <a target="_blank" class="btn btn-block" href="${data.html_url}">View Profile / Repository</a>
        </div>     
    </div>
  </div>
   
   `  
  })
    
  
  })
  
    


