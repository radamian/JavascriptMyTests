//import { SetLocalStorage } from "./storage";
//import { setCookie } from "./storage";

// Get form and input elements
const myform = document.getElementById("MyForm");
const submitButton = document.getElementById('submitButton');
const ownernameInput = document.getElementById('ownername');
const emailInput = document.getElementById('email');
const petnameInput = document.getElementById('petname');
const typeInput = document.getElementById('type');
const weightInput = document.getElementById('weight');
const ageInput = document.getElementById('age');
const genderInput = document.querySelector('input[name="selGender"]');
const aggressiveInput = document.querySelector('input[name="aggressive"]');

/*
const ownername = ownernameInput.value.trim();
const email = emailInput.value.trim();
const petname = petnameInput.value.trim();
const type = typeInput;
const weight = weightInput;
const age = ageInput;
const gender = genderInput;
const aggressive = aggressiveInput;
*/




///////////////////////////////////////////////////////////////////////////////
// Function to check if check-in date is before check-out date
function checkDates() {
    const checkInDate = new Date(document.getElementById('checkInDate').value);
    const checkOutDate = new Date(document.getElementById('checkOutDate').value);

    if (checkInDate >= checkOutDate) {
        alert("Check-out date should be after Check-in date");
    }
}

// Add event listener to the date fields
document.getElementById('checkInDate').addEventListener('change', checkDates);
document.getElementById('checkOutDate').addEventListener('change', checkDates);

///////////////////////////////////////////////////////////////////////////////

myform.addEventListener('load', (event) => { event.preventDefault(); });


// Add click event listener to handle form submission
submitButton.addEventListener('click', function () {




    // Log the form data to the console
    console.log({
        ownername: ownername.value,
        petname: petname.value,
        type: type.value,
        weight: weight.value,
        age: age.value,
        gender: gender.value,
        aggressive: aggressive.value,
    });

    console.log("weight: " + weightInput.value);
    console.log("weight: " + weight);






    //displayPetData(pet, "petview");
    //displayOwnerInfo(ownerinfo, "ownerview");

    //setCookie(pet.ownername, pet.petname, 7);

    //SetLocalStorage(pet);

});

const pet = {
    ownername: ownername,
    petname: petname,
    type: type,
    weight: weight,
    age: age,
    gender: gender,
    aggressive: aggressive,
};

const ownerinfo = {
    ownername: ownername,
    email: email
};

// Function to display form data in HTML div
function displayPetData(data, location) {
    const displayDiv = document.getElementById(location);
    displayDiv.innerHTML = `
        <p>Pet name: ${data._petname}</p>
        <p>Type: ${data._type}</p>
        <p>Age: ${data._age}</p>
        <p>Weight: ${data._weight}</p>
        <p>Gender: ${data._gender}</p>
        <p>Aggressive: ${data._aggressive}</p>    `;
}

// Function to display form data in HTML div
function displayOwnerInfo(data, location) {
    const displayDiv = document.getElementById(location);
    displayDiv.innerHTML = `
            <p>Owner name: ${data._ownername}</p>
            <p>Email: ${data._email}</p> `;
}


