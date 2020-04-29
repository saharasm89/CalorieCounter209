
let TotalCals = 0;

document.getElementById("Submit").addEventListener("click",function(){
    let Name = document.getElementById("Name").value;
    let Calories = document.getElementById("Calories").value;
    let HowManyAte = document.getElementById("HowManyAte").value;
    let list = document.getElementById("FoodList");
    let Food = new Fooditem(Name, Calories, HowManyAte);
    
    
    if(Food.valid()){
        let foodnode = document.createElement("li");
        foodnode.appendChild(
            document.createTextNode(Food.Name + " " + Food.Calories + " " + Food.Quantity));
        list.appendChild(foodnode);

        TotalCals += Food.Calories * Food.Quantity;
        document.getElementById("Totalcalories").innerHTML = "Total Calories" + TotalCals;

    }
});

    





