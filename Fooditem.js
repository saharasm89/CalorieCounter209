function Fooditem(name,calories,quantity)
{
    this.Name= name;
    this.Calories = calories;
    this.Quantity = quantity;
}

Fooditem.prototype.valid = function(name,calories,quantity)
{
    if(this.Name != null)
    {
        if(this.Calories>=0)
        {
            if(this.Quantity > 0 )
            {
                return true;
                
            } else {alert("quantity must be greater than 0"); return false;}
            
        }else{alert("Calories cannot be below 0"); return false;}
    }else{alert("Has to have a name"); return false;}

}


let newfooditem = new Fooditem("eggs", 180, 2);
console.table(newfooditem);
