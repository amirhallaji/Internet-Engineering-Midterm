let savedResult;
function getGender() {
    var res = document.getElementById("name_input").value;
    fetch(`https://api.genderize.io/?name=${res}`)
        .then(res => res.json())
        .then(data => {
            let name = data.name;
            if (data.gender == null) {
                window.alert("Error in request. Please Try again");
            }
            else {
                let gender = data.gender;

                let probability = data.probability;
                document.getElementById("prediction-gender").innerHTML = "Gender: " + gender ;
                
                document.getElementById("prediction-probability").innerHTML = "Probability: %" + (probability * 100);

                if (localStorage.getItem(name) !== null) {
                    document.getElementById("saved-answer-gender").innerHTML = localStorage.getItem(data.name);
                }
            }
            if (document.getElementById("male").checked) {
                localStorage.setItem(name, "Male");
                savedResult = name;
            }
            else if (document.getElementById("female").checked) {
                localStorage.setItem(name, "Female");
                savedResult = name;
            }
        });


}
function removeSavedResult() {
    localStorage.removeItem(savedResult);
    document.getElementById("saved-answer-gender").innerHTML = "No saved answer.";
}

function removeAll(){
    localStorage.clear();
    document.getElementById("saved-answer-gender").innerHTML = "No saved answer.";
}

