function startClassifictaion() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Ua9Eek-2i/model.json', modelReady)
}

function modelReady() {
    classifier.classify(gotResults);
}

cat = 0;
dog = 0;
cow= 0;
lion = 0;

function gotResults(error,results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        randon_number_r = Math.floor(Math.random() * 255) + 1;
        randon_number_g = Math.floor(Math.random() * 255) + 1;
        randon_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear -' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy ' + (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+randon_number_r+","+randon_number_g+","+randon_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+randon_number_r+","+randon_number_g+","+randon_number_r+")";

        img = document.getElementById("");

          if(results[0].label == "barking"){
          img.src = 'dog.png';
        } else if(results[0].label == "meowing"){
            img.src = 'cat.png';
        }else if(results[0].label == "mooing"){
            img.src = 'cow.png';
        }else if(results[0].label=="roaring") {
            img.src = 'lion.png';
        }else{
            img.src = 'ear.png.jpg'; 
        }
            
           
        }}
          
    
    

