//function to check user submission
function submitForm() {
	//select all elements by a given classname
	var question1 = document.getElementsByClassName("question1")
	//store element by id to display results later
	var results = document.getElementById("results")
	//create array for checkbox answers - this will become the value for var answer1
	var checkboxesArray = []
	//create variables to eventually hold the question1 answers
	var answer1


	//loop through all checkboxes using the question1 variable
	for(var i = 0; i < question1.length; i++) {
		//check if the current checkbox has been checked by the user, then do this
		if(question1[i].checked) {
			//add item to checkBoxesArray
			checkboxesArray.push(question1[i].value)
		}
		//set answer1 variable equal to checkbox array
		answer1 = checkboxesArray
		console.log(answer1)
	}

	//stop function if no data for question1
	if(answer1.length == 0) {
		//update the text content of results
		results.textContent = "you forgot to answer question 1"
		//stop function if no answer
		return
	}
};

//select button with id="submitButton"
var submitButton = document.getElementById("submitButton")
//add event to submitButton
submitButton.addEventListener("click", submitForm, false)




function submitForm2() {
	//select all elements by a given class name
	var question2 = document.getElementsByClassName('question2')
	//store elements by id to diplay results later
	var results2 = document.getElementById("results2")
	//create array for select answers - this will become the value for the var answer2
	var selectArray = []
	//create variables to eventually hold the question2 answers
	var answer2

	//loop through select options
	for(var i = 0; i<question2.length; i++) {
		//check if the current select has been selected by the user, then do this
		if(question2[i].selected) {
			//add item to selectArray
			selectArray.push(question2[i].value)
		}
		//set answer 2 variable equal to selectArray array
		answer2 = selectArray
		console.log(answer2)
	}

	//stop function if no data for question2
	if(answer2 == 0) {
		//update the textContent results
		results2.textContent = "you forgot to answer question 2"
		//stop function if no answer
		return
	}
};

//select button with id="submitButton"
var submitButton2 = document.getElementById("submitButton2")
//add event to submitButton
submitButton2.addEventListener("click", submitForm2, false)




function submitForm3() {
	//select all elements with the given class name
	var question3 = document.getElementsByClassName("question3")
	//store elemnts by id to display the results later
	var results3 = document.getElementById("results3")
	//create variable to eventually hold the question 3 answer
	var answer3

	//loop through the question options
	for(var i = 0; i < question3.length; i++) {
		//check if the current question has been selected by the user, then do this
		if(question3[i].checked) {
			//add item to selection2 variable
			answer3 = question3[i].value
			console.log(answer3)
		}
	}

	//stop function if no data for question3
	if(answer3 == undefined) {
		//udate the text content of results
		results3.textContent = "you forgot to answer question 3"
		//stop function if no answer
		return
	}
}

//select button with id="submitButton"
var submitButton3 = document.getElementById("submitButton3")
//add event to submitButton
submitButton3.addEventListener("click", submitForm3, false)


















