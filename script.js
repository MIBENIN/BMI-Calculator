let height=Number(document.getElementById("height").value);
let weight=Number(document.getElementById("weight").value);
let yourBMI=document.getElementById("yourBMI");
let result=document.getElementById("result");

calculateBMI=()=>{
    if(height == " " || weight == " "){
        alert("Height and weight should not be empty");
    }
    else if( height <=0 || weight <=0){
        alert("Height and weight should not be zero or less")
    }
    else if(isNaN(height || weight)){
        alert("Please enter height and weight in number")
    }
    else{
        heightInMeters=height/100;
        squareOfHeight=heightInMeters**2;
        bmi=(weight/squareOfHeight).toFixed(2);
        yourBMI.innerHTML="Your BMI is : "+bmi;

        if(bmi<18.5){
            result.innerHTML="You are Under Weight";
        }
        else if(bmi > 18.5 && bmi <24.9){
            result.innerHTML="You are normal";
        }
        else if(bmi>25 && bmi < 29.9){
            result.innerHTML="You are Over Weight";
        }
        else if(bmi<=30){
            result.innerHTML="You are Obese";
        }
    }
}