var api_key = "SqDsnjsRsmHqGcw4Nm00tF55j7M3jtQj";
var search = document.getElementById("searchbarr");
var form = document.getElementById("form");
var logi = document.getElementById("login");

if (window.localStorage.getItem('name')){
  logi.innerHTML=`<a href="#" onClick="logout1()" id="logina"><i class="fas fa-user-alt"></i>${window.localStorage.getItem('name')}</a>`
}
else{
  logi.innerHTML=`<a href="../Html/Login.html" id="logina"><i class="fas fa-user-alt"></i>Login</a>`;
}

function logout1() {
  window.localStorage.removeItem('name');
  window.localStorage.removeItem('token');
  window.location.reload();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  search_gifs();
});
function search_gifs() {
  var url_2 = `https://api.giphy.com/v1/gifs/search?q=${search.value}&api_key=${api_key}`;
  console.log(search.value);
  fetch(url_2)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      add_search(data.data);
    });
}

function add_search(data) {
  if (data.length > 0) {
    var search_gifs = document.getElementById("search_gifs");
    var gifs = document.getElementById("gifs_searched");
    gifs.innerHTML='';
    data.forEach((gif) => {
      gifs.innerHTML += `<div class='gif'>
                        <img src=${gif.images.original.url}/>  
                    </div>`;
    });
    search_gifs.style.visibility = "visible";
  }
}

