//Written By Isaac Bucknell
//Work Completed on October 20th, 2022

function compute()
{
    //Get principal input
    var principal = document.getElementById("principal").value;

    //Validate Principal is positive number
    if(principal <= 0){
        alert("Enter a positive number");
        clearData();//Empties out all fields
        return false;
    }else{

        //get rate input
        var rate = document.getElementById("rate").value;
        //get # years input
        var years = document.getElementById("years").value;

        //Calculate Interest
        var interest = principal * years * rate / 100;

        //Calculate year interest is finished
        var year = new Date().getFullYear() + parseInt(years);
 
        //Output of Calculations
        var result = "If you deposit "+ highlighter(principal) + 
        ",\<br\>at an interest rate of "+ highlighter(rate + "%") +
        "\<br\>You will receive an amount of " + highlighter(parseFloat(interest)) +
        ",\<br\>in the year "+ highlighter(year) + "\n";

        //Display output
        document.getElementById("result").innerHTML = result;
    
    }

}
//Update Range Slider to display value
function updateRate(){

    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}

//Highlight input text
function highlighter(input){
    return "\<span class=\"highlight\"\>" + input + "\</span\>";
}

//Clear all data Fields
function clearData(){
    document.getElementById("principal").value = null;
    document.getElementById("rate").value = "10.25";
    document.getElementById("rate_val").innerText = "10.25%"
    document.getElementById("years").value = "1";

}