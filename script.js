let btn = document.getElementById("btn")

function getRecipe() {
    let search = document.getElementById("search")
    let value = search.value
    let facts = document.getElementById("facts")
    fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${value}`)
        .then((res) => {
            return res.json()
        }).then((data) => {
            if(data.meals === null){
                console.log("sorry");
                facts.innerHTML = "Sorry,We could not find the recipe you are looking for ."
            }
            else{
                console.log(data);
                console.log(data.meals);
                facts.innerHTML = data.meals[0].strInstructions
            }
        }
        )
}

btn.addEventListener("click", getRecipe)