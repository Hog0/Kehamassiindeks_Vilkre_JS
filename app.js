const name = document.querySelector("#name");
let mass = document.querySelector("#mass");
let length = document.querySelector("#length");
let age = document.querySelector("#age");
const form = document.querySelector("#input-form");
const detailsList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-replay");

loadEventListeners();

function loadEventListeners(){
    //Convert a input event
    form.addEventListener('submit', Convert);
    //Remove task
    detailsList.addEventListener('click', removeTask);
    //clear all tasks
    clearBtn.addEventListener('click', clearTasks);
}

// e = event
function Convert(e){
    //check for empty input
    if(name.value === '' || mass.value === '' || length.value === '' || age.value === ''){
        return alert('Enter a task');
    }else {
       Agecontrol(e); 
    };
    e.preventDefault();
}

function Agecontrol(e){

    if(age.value < 20 || age.value > 60){

        // Create an li element to add to the ul
        const li = document.createElement('li');
        // Add a class name to the li element
        li.className = 'collection-item'; 
        const replay = (name.value + " Sorry but the program correctly displays between age range of 20-60 years ");
        li.appendChild(document.createTextNode(replay));
        // Create a new ancher element
        const link = document.createElement('a');
        // Add a class to the element
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="far fa-times-circle fa-2x"></i>';
        li.appendChild(link);
        detailsList.appendChild(li);

        e.preventDefault();

        inputs0(e);



    }else {

        console.log('doing a calculation');

        Calculate(e);

        inputs0(e);
    };

    /* do to
    if( == replay){s
        alert('Already Exists in the Replay');
        return;
    }else{
        
    }
    */

};

function inputs0(e){

    name.value = '';
    length.value = '';
    mass.value = '';
    age.value = '';

};

function Calculate(e){

    let hight = parseInt(length.value)/100;
    let masss = parseInt(mass.value);
    let BMI = Math.round(masss/Math.pow(hight,2));

    /* do do
    const replay3 = " Your Body mass index is Unhealthy Underweighted ";
    const replay4 = " Your Body mass index is Underweighted ";
    const replay5 = " Your Body mass index is Normal Weight ";
    const replay6 = " Your Body mass index is Overweighted ";
    const replay7 = " Your Body mass index is Obesity ";
    const replay8 = " Your Body mass index is Strongly Obesity ";
    const replay9 = " Your Body mass index is Unhealthy Obesity ";

    if(BMI > 16){
        replay3 === replay2;
    }else if(16 > BMI < 18.5) {
        replay4 === replay2;
    }else if(18.6 > BMI < 25) {
        replay5 === replay2;
    }else if(25.1 > BMI < 30) {
        replay6 === replay2;
    }else if(30.1 > BMI < 35) {
        replay7 === replay2;
    }else if(35.1 > BMI < 40) {
        replay8 === replay2;
    }else if(BMI > 40.1) {
        replay9 === replay2;
    }
    */

    const li = document.createElement('li');
    // Add a class name to the li element
    li.className = 'collection-item'; 
    const replay2 = (name.value + " Your Body mass index is " + BMI);
    li.appendChild(document.createTextNode(replay2));
    // Create a new ancher element
    const link = document.createElement('a');
    // Add a class to the element
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="far fa-times-circle fa-2x"></i>';
    li.appendChild(link);

    detailsList.appendChild(li);
    
}

function removeBook(event){
   
    if(event.target.parentElement.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure you want to delete that?')){
            event.target.parentElement.parentElement.remove();
            console.log(event.target.parentElement.parentElement.textContent);
        }
    }
}

function clearTasks(){
    if(confirm("Clear the task list?")){
        while(detailsList.firstChild){
            detailsList.removeChild(detailsList.firstChild);
        }
    }
}
