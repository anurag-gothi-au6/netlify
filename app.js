var queries = [
    "carrot",
    "broccoli",
    "asparagus",
    "cauliflower",
    "corn",
    "cucumber",
    "green pepper",
    "lettuce",
    "mushrooms",
    "onion",
    "potato",
    "pumpkin",
    "red pepper",
    "tomato",
    "beetroot",
    "brussel",
    "peas",
    "zucchini",
    "radish",
    "sweet potato",
    "artichoke",
    "leek",
    "cabbage",
    "celery",
    "chili",
    "garlic",
    "basil",
    "coriander",
    "parsley",
    "dill",
    "rosemary",
    "oregano",
    "cinnamon",
    "saffron",
    "green bean",
    "bean",
    "chickpea",
    "lentil",
    "apple",
    "apricot",
    "avocado",
    "banana",
    "blackberry",
    "blackcurrant",
    "blueberry",
    "boysenberry",
    "cherry",
    "coconut",
    "fig",
    "grape",
    "grapefruit",
    "kiwifruit",
    "lemon",
    "lime",
    "lychee",
    "mandarin",
    "mango",
    "melon",
    "nectarine",
    "orange",
    "papaya",
    "passion",
    "peach",
    "pear",
    "pineapple",
    "plum",
    "pomegranate",
    "quince",
    "raspberry",
    "strawberry",
    "watermelon",
    "salad",
    "pizza",
    "pasta",
    "popcorn",
    "lobster",
    "steak",
    "bbq",
    "pudding",
    "hamburger",
    "pie",
    "cake",
    "sausage",
    "tacos",
    "kebab",
    "poutine",
    "seafood",
    "chips",
    "fries",
    "fruit",
    "masala",
    "paella",
    "som tam",
    "chicken",
    "toast",
    "marzipan",
    "tofu",
    "ketchup",
    "hummus",
    "chili",
    "maple syrup",
    "parma ham",
    "fajitas",
    "champ",
    "lasagna",
    "poke",
    "chocolate",
    "croissant",
    "arepas",
    "bunny chow",
    "pierogi",
    "donuts",
    "rendang",
    "sushi",
    "ice cream",
    "duck",
    "curry",
    "beef",
    "goat",
    "lamb",
    "turkey",
    "pork",
    "fish",
    "crab",
    "bacon",
    "ham",
    "pepperoni",
    "salami",
    "sprouts",
    "ribs"
  ]
// console.log(queries)


var search = {
    element: `<div class="search">
<img src="home_header.png" alt="food" style="float: right;" >
<div class="center">
<h1><b>Search for the Dish Reciepe</b></h1>
<p>We have wide range of Reciepe available to make the best dish you will ever have.<br>
So what are you waiting for get your recipe NOW!!!!.
</p>
<form autocomplete="off">
    <input type="text" class="form-control" id="dish" placeholder="search for reciepe of the dish" required>
    <button type="submit" class="btn btn-primary mb-2 submit blue">Get Reciepe</button>
</form>
</div>
</div>`,
    load: function () { $('nav').after(search.element) }

}
search.load()


var query = {
    load: function (inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }

}

query.load(document.querySelector('#dish'),queries)

var card = {
  load : function(title,src,rid) {
        return `<div class="col-3">
        <div class="card custom-card shadow-lg p-3 mb-5 bg-white rounded">
        <img src="`+src+`" class="card-img-top custom-img" alt="">
        <div class="card-body" style="text-align: center;">
          <h5 class="card-title">`+title+`</h5>
          <button type="button" value="https://forkify-api.herokuapp.com/api/get?rId=`+rid+`"class="btn btn-primary custom-btn">Get Reciepe</button>
        </div>
      </div>
      </div>`
        
    }
}
var loader =`<div class="loader">Loading...</div>`
// $('body').append(card.load('abc','src'))


var geturl = {
    evnt : function(event){
        event.preventDefault()
        $('form').append(loader)
        if($('#dish').val().length<=0){
            $('.loader').remove()
            return
        }
        else{
         fetch('https://forkify-api.herokuapp.com/api/search?q='+$('#dish').val())
        .then(function(response){

            return response.json()
        })
        .then(function(jsonresponse){
            return jsonresponse.recipes
        })
        .then(function(data){
            $('nav').after(`<div class="row" style="text-align: justify;">`)
            var rowno=0
            for(var i=0;i<data.length;i++){
                
            $('.loader').remove()
            $('.search').remove()
            $('.row').append(card.load(data[i].title,data[i].image_url,data[i].recipe_id))
            }
        })
        .catch(err => console.log(err))
        
    }
    }
}
$('.submit').on('click',geturl.evnt)
$('.searchbox').on('click', function (event) {
    event.preventDefault();
    $('.row').remove()
    $('.remove').remove()

    search.load()
    query.load(document.querySelector('#dish'),queries)

    $('.submit').on('click',geturl.evnt)

})
$('.navbar-brand').on('click', function (event) {
    event.preventDefault();
    $('.row').remove()
    $('.remove').remove()
    search.load()
    query.load(document.querySelector('#dish'),queries)
    $('.submit').on('click',geturl.evnt)


})

var ingredient = {
    load : function(ingredients){
       return `<li><b>`+ingredients+`</b></li>`
    }
}

var product = {
    load : function(img,title,rid,url){ 
        return `<div class="container-fluid remove">

    <img src="`+img+`" style="width: 100%;height: 30%; margin: auto;">
    <div class="w-75 p-3 custom-container">
    <div class="row" style="margin-top: 0;">
            <div class="col-8">
            <div class="jumbotron">
                <h1 class="display-4 title">`+title+`</h1>
                <b>You can find Reciepe for this dish here</b>
                <hr class="my-4">
                <p>"Veggies sunt bona vobis, proinde vos postulo esse magis grape pea sprouts horseradish courgette maize spinach prairie turnip jícama coriander quandong gourd."</p>
                
              </div>
        </div>
        <div class="col-4">
            <div class="jumbotron">
                <b style="color:darkblue;">Reciepe Id:`+rid+`</b>
                <p>  
                        <i class="fa fa-heart heart" style="font-size:48px;"></i>

                    ADD to favourite
                </p>

                <hr class="my-4">
                <div class="row" style="margin-top: 0;">
                <i class="far fa-clock"></i>
                <b>&nbsp preparation time</b>
                <p>&emsp;20mins</p>
                </div>
                <div class="row" style="margin-top: 0;">
                    <i class="far fa-clock"></i>
                    <b>&nbsp Difficulty</b>
                    <p>&emsp; Intermediate</p>
                    </div>
                    <hr class="my-4">
                <a href=`+url+`>Share Reciepe</a>

              </div>
        </div>
    </div>
    <div class="row" style="margin-top: 0;">
            <div class="box">
            <div class="row" style="margin-top: 0;">
                <h2>Ingredients</h2>
                <form style="margin-left: auto;">
                <button type="button" class="btn btn-outline-primary">2 Servings</button>
                <button type="button" class="btn btn-outline-primary">4 Servings</button>
                </form>



            </div>
            <hr class="my-4">
            <div class="row" style="margin-top: 0;">
                <div class="col-8 ingredients" style="border-right: 1px solid;">
                
               </div> 
               <div class="col-4">
                   <div class="row" style="margin: auto;">
                       <b>Energy (KJ)</b>
                       <p style="margin: auto;">2653</p>
                   </div>
                   <div class="row" style="margin: auto;margin-top: 1rem;">
                    <b>Calories</b>
                    <p style="margin: auto;">810</p>
                </div>
                <div class="row" style="margin: auto;margin-top: 1rem;">
                    <b>Protien</b>
                    <p style="margin: auto;">30g</p>
                </div>
                <div class="row" style="margin: auto;margin-top: 1rem;">
                    <b>Totsl Carb</b>
                    <p style="margin: auto;">72g</p>
                </div>
                <div class="row" style="margin: auto;margin-top: 1rem;">
                    <b>Total Fat</b>
                    <p style="margin: auto;">44g</p>
                </div>
                <hr class="my-4">
                <b>Alergies</b>
                <p>Peanuts</p>

               </div>
            </div>
        </div>
    </div>




</div>
        


     </div>`
}

}

var fav=0
$(document).on('click', '.custom-btn', function() {

    console.log(this.value)
    fetch(this.value)
        .then(function(response){
            console.log('click')
            return response.json()
        })
        .then(function(jsonresponse){
           return jsonresponse.recipe
        })
        .then(function(data){
            $('.row').remove()
            $('nav').after(product.load(data.image_url,data.title,data.recipe_id,data.source_url))
            for(i=0;i<data.ingredients.length;i++){
                $('.ingredients').append(ingredient.load(data.ingredients[i]))
            }
            $('.heart').on('click',function(){
                $('.heart').css("color","red")
                fav++
                localStorage.setItem("title"+i,$('.title').text())
                console.log(localStorage)
            })

        })
        
        
    
    
})














































