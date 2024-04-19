import { setCookie, getCookie, setinlocalstorage } from "./modules/storage.js";
console.log(setCookie, getCookie)

// Get form and input elements
const myform = document.getElementById("MyForm");
const submitButton = document.getElementById('submitButton');
const ownernameInput = document.getElementById('ownername');
const emailInput = document.getElementById('email');
const petnameInput = document.getElementById('petname');
const typeInput = document.getElementById('type');
const weightInput = document.getElementById('weight'); // Get the element
const ageInput = document.getElementById('age'); // Get the element
const genderInput = document.querySelector('input[name="selGender"]');
const aggressiveInput = document.querySelector('input[name="aggressive"]');






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

    console.log(weightInput.value, parseFloat(weightInput.value));
    console.log(ageInput.value, parseInt(ageInput.value));

    let ownername = ownernameInput.value;
    let email = emailInput.value;
    let petname = petnameInput.value;
    let type = typeInput.value;
    let weight = parseFloat(weightInput.value); // Parse the value to float
    let age = parseInt(ageInput.value); // Parse the value to integer
    let gender = genderInput.value;
    console.log(genderInput.value)
    let aggressive = aggressiveInput.value;



    console.log({
        ownername: ownername,
        petname: petname,
        type: type,
        weight: weight,
        age: age,
        gender: gender,
        aggressive: aggressive
    });


    const pet = {
        _ownername: ownername,
        _petname: petname,
        _type: type,
        _weight: weight,
        _age: age,
        _gender: gender,
        _aggressive: aggressive,
    };

    const ownerinfo = {
        _ownername: ownername,
        _email: email
    };

    displayPetData(pet, "petview");

    displayOwnerInfo(ownerinfo, "ownerview")

    setCookie(pet._petname, pet._type, 7);

    setinlocalstorage(pet._ownername + " has a ", pet._type);


});


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





