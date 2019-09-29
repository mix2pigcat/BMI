    let bmi,weight,height;
    input=parseInt(prompt('weight'));
    input=parseInt(prompt('height'));
    bmi=(weight/height*2);
    if (bmi < 18){
        document.write("Underweight");
    }
    else if (bmi <25){
        document.write("Normal");
        }
    else if (bmi <30){
                document.write("Overweight");
    }
    else{
                document.write("Obese");
    }
