let savedResult;

function getGender() {
    let res = document.getElementById("name_input").value; // getting the value of the entered number in edit text.
    addLoader();  // adding loader for waiting.
    fetch(`https://api.genderize.io/?name=${res}`) // send request to api.
        .then(res => res.json())
        .then(data => {
            deleteLoader(); // deleting loader.
            let name = data.name; // saving the result into local variables.
            if (data.gender == null) { // if the API cannot predict the gender(gender is null), then a window alert should be shown.
                // window.alert("Error in request. Please Try again");
                document.getElementById("prediction-gender").innerHTML = "No Gender Found!";
                document.getElementById("prediction-probability").innerHTML = "";
            } else {
                let gender = data.gender; // assigning the response gender into a local variable

                let probability = data.probability; // assigning the response gender into a local variable.
                document.getElementById("prediction-gender").innerHTML = "Gender: " + gender; // writing the gender into our html.

                document.getElementById("prediction-probability").innerHTML = "Probability: %" + (probability * 100); // same as above.

            }
            
            if (localStorage.getItem(name) !== null) { // if the local storage has the name as a key in itself, then it is written in html code.
                document.getElementById("saved-answer-gender").innerHTML = localStorage.getItem(data.name);
            }

            if (document.getElementById("male").checked) { // saving the user answer which is enetered through radio button
                localStorage.setItem(name, "Male");
                savedResult = name;
            } else if (document.getElementById("female").checked) { // same as above.
                localStorage.setItem(name, "Female");
                savedResult = name;
            }

        });


}

function removeSavedResult() { // remove the last saved-item answer.
    localStorage.removeItem(savedResult);
    document.getElementById("saved-answer-gender").innerHTML = "No saved answer.";
}

function removeAll() { // removing all the saved-answers.
    localStorage.clear();
    document.getElementById("saved-answer-gender").innerHTML = "No saved answer.";
}

function addLoader(){
    document.getElementById("loader").style.display = "block"; // showing loader by block display
    document.getElementById("prediction-gender").innerHTML="";
    document.getElementById("prediction-probability").innerHTML="";
}

function deleteLoader(){
    document.getElementById("loader").style.display = "none"; // hiding loader by setting the display to none.
}