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
            }
        });


}

// window.localStorage.