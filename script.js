

document.addEventListener('keydown',(event)=>{
    let enter = event.key;
    if(enter=='Enter'){
       document.getElementById("h2").innerHTML ="";
       document.getElementById("p").innerHTML ="";
    let username = document.getElementById("searchbar").value;
    //console.log(username);
    let url = "https://api.github.com/users/" + username ;

fetch(url).then(function(response){
    //console.log (response);
    return response.json();
}).then(function(github){
     displaydata(github);
     console.log(github);
});
let displaydata = function(github){
      let imgurl = github.avatar_url;
      let followers = github.followers;
      let following = github.following;
      let joining = github.created_at;
      let pbgist = github.public_gists;
      let pbrepo = github.public_repos;
      let lastseen = github.updated_at;
      let img = document.getElementById("img");
      img.setAttribute("src",imgurl);
      let info = document.getElementById("info");
      let date1 = String(joining);
       date1 = joining.slice(0,10);
      let date2 =String(lastseen);
      date2 =lastseen.slice(0,10);
      let url1 ="https://github.com/" + username;
      info.setAttribute("a",url1);
      document.getElementById("link").setAttribute("href",url1);
      document.getElementById("link").innerHTML ="<br>UserName:" +username +"</br>";
      info.innerHTML = "Followers: " + followers +"<br>Following: "+following +"</br>Joined at: "+ date1+ "<br>Gists: " +pbgist +"</br>Repositories: " +pbrepo +"<br>Last seen : "+ date2+ "</br>" ;
      
     
}
    }

}

);