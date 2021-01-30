var movies = [];
// var myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44");
// myRequest.send();

// myRequest.addEventListener("readystatechange", function () {
//     if (myRequest.readyState == 4 && myRequest.status == 200) {
//         movies = JSON.parse(myRequest.response).results;

//         console.log(movies)
//         displayMovies();
//     }
// })
async function now_playing() {
    movies = [];
    let apiResponse = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let mymovies = await apiResponse.json();
    movies = mymovies.results;
    displayMovies();
}
async function top_rated() {
    movies = [];
    let apiResponse = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let mymovies = await apiResponse.json();
    movies = mymovies.results;
    displayMovies();
}
async function popular() {
    movies = [];
    let apiResponse = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let mymovies = await apiResponse.json();
    movies = mymovies.results;
    displayMovies();
}
async function trending() {
    movies = [];
    let apiResponse = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let mymovies = await apiResponse.json();
    movies = mymovies.results;
    displayMovies();
}
async function upcoming() {
    movies = [];
    let apiResponse = await fetch(`https://api.themoviedb.org/3/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let mymovies = await apiResponse.json();
    movies = mymovies.results;
    displayMovies();
}
function displayMovies() {
    var Container = ``;
    document.getElementById('myRow').innerHTML = ``;
    for (var i = 0; i < movies.length; i++) {
        Container += `
        <div class="col-lg-4  col-md-6 col-sm-12 team-member">
        <div class="card team-card">
            <img class="card-img-top" src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}" alt="Card image cap">

            <div class="card-overlay align-items-center">

                <div class="float-left list-items ">
                    <div class="team-info">
                        <h2>${movies[i].title}</h2>
                        <p>${movies[i].overview}</p>
                        <p>rate : ${movies[i].vote_average}</p>
                        <p>${movies[i].release_date}</p>

                    </div>

                </div>
            </div>
        </div>
    </div>`;
    }
    document.getElementById('myRow').innerHTML = Container;
}

/************************SlidderToggle****************************** */

$(".toggle").click(function () {
    let sidemenu = $("#side-menu").innerWidth();
    if ($("#side-bar").css("left") == "0px") {
        $("#side-bar").animate({ left: `-${sidemenu}` }, 1000);
    //    alert('close');
    $( ".item1" ).animate({
        opacity: 0,
        paddingTop: "25px"
      }, 1000 );
      $( ".item2" ).animate({
        opacity: 10,
        paddingTop: "25px"
      }, 1100 );
      $( ".item3" ).animate({
        opacity: 0,
        paddingTop: "25px"
      }, 1200 );
      $( ".item4" ).animate({
        opacity: 0,
        paddingTop: "25px"
      }, 1300 );
      $( ".item5" ).animate({
        opacity: 0,
        paddingTop: "25px"
      }, 1400 );
      $( ".item6" ).animate({
        opacity: 0,
        paddingTop: "25px"
      }, 1500 );
    
    }
    else {
        $("#side-bar").animate({ left: `0px` }, 1000);
       $(".fa-align-justify").toggleClass("fa-times"),
       
        $( ".item1" ).animate({
            opacity: 1,
            paddingTop: "25px"
          }, 1000 );
          $( ".item2" ).animate({
            opacity: 1,
            paddingTop: "25px"
          }, 1100 );
          $( ".item3" ).animate({
            opacity: 1,
            paddingTop: "25px"
          }, 1200 );
          $( ".item4" ).animate({
            opacity: 1,
            paddingTop: "25px"
          }, 1300 );
          $( ".item5" ).animate({
            opacity: 1,
            paddingTop: "25px"
          }, 1400 );
          $( ".item6" ).animate({
            opacity: 1,
            paddingTop: "25px"
          }, 1500 );
        }
        
});

/************************displayByCategory************************** */

$(".item1").click(async function () {
    let apiResponse = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let mymovies = await apiResponse.json();
    movies = mymovies.results;
    displayMovies()
});

$(".item2").click(async function () {
    let apiResponse = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let mymovies = await apiResponse.json();
    movies = mymovies.results;
    displayMovies()
});

$(".item3").click(async function () {
    let apiResponse = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let mymovies = await apiResponse.json();
    movies = mymovies.results;
    displayMovies()
});

$(".item4").click(async function () {
    let apiResponse = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let mymovies = await apiResponse.json();
    movies = mymovies.results;
    displayMovies()
});

$(".item5 ").click(async function () {
    let apiResponse = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let mymovies = await apiResponse.json();
    movies = mymovies.results;
    displayMovies()
});
// $(".item6 ").click();

/************************SearchbyWord****************************** */
async function findbyWord() {
    var searchName = document.getElementById('searchByName').value;
    if (searchName != null && searchName != "") {
        // alert(searchName);
        let apiResponse = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchName}&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1&include_adult=false`);
        let mymovies = await apiResponse.json();
        movies = mymovies.results;
        displayMovies();
    }
    else {
        displayMovies();
    }
}

/*****************************Search******************************* */
function findInArr() {
    var searchName = document.getElementById('searchInArr').value;
    if (searchName != null && searchName != "") {
        // alert(searchName);
        // movies.filter(movies)
        var NewArr = [];
        var j = 0;
        for (var i = 0; i < movies.length; i++) {

            if (movies[i].title.includes(searchName)) {
                NewArr[j] = movies[i];
                j++;
                // alert("jjj")
            }
        }
        // console.log(NewArr)
        var Container = ``;
        document.getElementById('myRow').innerHTML = ``;
        for (var i = 0; i < NewArr.length; i++) {
            Container += `
        <div class="col-lg-4  col-md-6 col-sm-12 team-member">
        <div class="card team-card">
            <img class="card-img-top" src="https://image.tmdb.org/t/p/w500/${NewArr[i].poster_path}" alt="Card image cap">

            <div class="card-overlay align-items-center">

                <div class="float-left list-items ">
                    <div class="team-info">
                        <h2>${NewArr[i].title}</h2>
                        <p>${NewArr[i].overview}</p>
                        <p>rate : ${NewArr[i].vote_average}</p>
                        <p>${NewArr[i].release_date}</p>

                    </div>

                </div>
            </div>
        </div>
    </div>`;
        }
        document.getElementById('myRow').innerHTML = Container;
        // displayMovies();
    }
    else {
        displayMovies();
    }
}

/**********************Contact Us*********************************  */

var NamInp = document.getElementById("NameInp");
var EmailInp = document.getElementById("EmailInp");
var PhoneInp = document.getElementById('PhoneInp');
var AgeInp = document.getElementById('AgeInp');
var PasswordInp = document.getElementById('PasswordInp');
var RePasswordInp = document.getElementById('RePasswordInp');

var namealert = document.getElementById("namealert");
var Emailalert = document.getElementById("Emailalert");
var Phonealert = document.getElementById('Phonealert');
var Agealert = document.getElementById('Agealert');
var Passwordalert = document.getElementById('Passwordalert');
var RePasswordalert = document.getElementById('RePasswordalert');

var contact = document.getElementById('contact');

// NamInp.addEventListener('keyup', checkName)
// EmailInp.addEventListener('keyup', checkEmail)
// PhoneInp.addEventListener('keyup', checkPhone)
// AgeInp.addEventListener('keyup', checkAge)
// PasswordInp.addEventListener('keyup', checkPass)
// RePasswordInp.addEventListener('keyup', checkRePass)



function checkName() {
    var Expression = /^[A-Za-z]+$/;
    if (NamInp.value.match(Expression)) {
        namealert.style.display = "none";
        return true;

    }
    else {
        namealert.style.display = "block";
        return false;

    }
}

function checkEmail() {
    var Expression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (EmailInp.value.match(Expression)) {
        Emailalert.style.display = "none";
        return true;

    }

    else {
        Emailalert.style.display = "block";
        return false;

    }

}

function checkPhone() {
    var Expression = /^\d{10}$/;
    if (PhoneInp.value.match(Expression)) {
        Phonealert.style.display = "none";
        return true;

    }

    else {
        Phonealert.style.display = "block";
        return false;

    }
}

function checkAge() {
    var Expression = /^[1-9][0-9]?$|^100$/;
    if (AgeInp.value.match(Expression)) {
        Agealert.style.display = "none";
        return true;

    }

    else {
        Agealert.style.display = "block";
        return false;

    }

}

function checkPass() {
    var Expression = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (PasswordInp.value.match(Expression)) {
        Passwordalert.style.display = "none";
        return true;

    }

    else {
        Passwordalert.style.display = "block";
        return false;

    }

}

function checkRePass() {
    if (PasswordInp.value == RePasswordInp.value) {
        RePasswordalert.style.display = "none";
        return true;
    }

    else {
        RePasswordalert.style.display = "block";
        return false;
    }
}
function checkall() {
    if (checkRePass() && checkPass() && checkAge() && checkPhone() && checkEmail() && checkName())
    $( "#contact" ).removeClass( "disabled" )
    else
    $( "#contact" ).addClass( "disabled" )
    

}
$('#contact').click(checkall)
