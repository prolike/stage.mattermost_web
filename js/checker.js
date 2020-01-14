function getInputValue() {
    // Selecting the input element and get its value 

    var inputVal = document.getElementById("myInput").value;

    var domainList = ["prolike", "123", "labs"]
    
    if (inputVal == "") {
    var redTL = new TimelineMax()

        redTL.to(".alertBox", 1, {
            css: {
                height: "5vh",
                backgroundColor: "red",
                border: "2px solid #613a3a",
            }
        })

        document.getElementById("alertInfo").innerHTML = "<p>Please type in your wanted domain</p>";

    } else if (domainList.includes(inputVal)) {

        var redTL = new TimelineMax()

        redTL.to(".alertBox", 1, {
            css: {
                height: "5vh",
                backgroundColor: "red",
                border: "2px solid #613a3a",
            }
        })

        document.getElementById("alertInfo").innerHTML = "<p>This domain has been taken</p>";

    } else {
        var greenTL = new TimelineMax()
        console.log(inputVal)
        greenTL.to(".alertBox", 1, {
            css: {
                height: "5vh",
                backgroundColor: "green",
                border: "2px solid #4a812b"
            }
        })

        document.getElementById("alertInfo").innerHTML = "<p>This domain is free</p>";
    }

}