// your code here
let heading = document.querySelector('#url');
let nameElement = document.querySelector('#name');
let yearElement = document.querySelector('#year');
let submit = document.querySelector('#button')



function changeUrl(){
    let headingText = "https://localhost:8080/";
    let nameValue = nameElement.value;
    let yearValue = yearElement.value;
    console.log(heading , nameElement ,yearElement , submit, nameValue, yearValue)
    if (!nameValue == "" && !yearValue == "") {
        headingText += '?name=' + nameValue + '&year=' + yearValue;
    }
    else if(nameValue == "" && !yearValue == ""){
        headingText += '?year=' + yearValue;
    }
    else if(yearValue=="" && nameValue!=""){
        headingText += '?name=' + nameValue;
    }
    else{
        headingText = headingText;
    }
    heading.textContent = headingText
}

submit.addEventListener('click' , changeUrl)