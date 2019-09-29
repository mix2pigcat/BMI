function BMI() {
    let bmi,weight,height;
    input=prompt('weight');
    input=prompt('height');
    bmi=(weight/height*2);
    if (bmi<18){
        alert("underweight");
    }
    else if (bmi<25){
        alert("normal");
    }
    else if (bmi<30){
        alert("overweight");
    }
    else{
        alert("obese");
    }


}