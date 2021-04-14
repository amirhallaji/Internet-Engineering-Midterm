function getGender() {
    var res = document.getElementById("name_input").value;
    fetch(`https://api.genderize.io/?name=${res}`)
        .then(res => res.json())
        .then(data => {
            let name = data.name;
            if (data.gender == null) {
                window.alert("Error");
            }
            else {
                let gender = data.gender;
                let probability = data.probability;
                document.getElementById("prediction-gender").innerHTML = gender;
                document.getElementById("prediction-probability").innerHTML = probability;

                if (localStorage.getItem(name) !== null) {
                    document.getElementById("saved-answer-gender").innerHTML = localStorage.getItem(data.name);
                }
            }
            if (document.getElementById("male").checked) {
                localStorage.setItem(name, "Male");
            }
            else if (document.getElementById("female").checked) {
                localStorage.setItem(name, "Female");
            }
        });


}
function removeSavedResult() {
    localStorage.clear();
}

// window.localStorage.