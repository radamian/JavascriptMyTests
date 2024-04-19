
import { setCookie } from './storage';
import { getCookie } from './storage';
import { setinlocalstorage } from './storage';
import { getlocalstorage } from './storage';

// Function to handle form submission
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const pets = []


    class PetData {
        constructor(ownername, email, petname, petage, petgender, petweight, pettype, aggressive) {
            this.owner = ownername;
            this.email = email
            this.name = petname;
            this.age = petage;
            this.gender = petgender;
            this.weight = petweight;
            this.type = pettype;
            this.aggressive = aggressive;
        }
    }

    ////////get form data

    // Get input elements
    let ownernameInput = document.getElementById('ownername');
    let emailinput = document.getElementById('email');
    let weightInput = document.getElementById('weight');
    let selGenderInput = document.querySelector('input[name="selGender"]');
    let petnameInput = document.getElementById('petname');
    let typeinput = document.getElementById('type');
    let ageInput = document.getElementById('age');
    let aggressiveInput = document.querySelector('input[name="aggressive"]');

    let checkInDateInput = document.getElementById('CheckInDate');
    let checkOutDateInput = document.getElementById('CheckOutDate');


    // Get the values of the input elements
    let ownernameValue = ownernameInput.value.trim();
    let emailvalue = emailinput.value;
    let namevalue = petnameInput.value.trim();
    let agevalue = ageInput.value;
    let weightvalue = weightInput.value;
    let aggressivevalue = aggressiveInput.checked;
    let gendervalue = selGenderInput.value;
    let typevalue = typeinput.value;


    /////////// Create an instance of FormData class with form data
    const petData = new PetData(ownernameValue, emailvalue, namevalue, agevalue, gendervalue, weightvalue, typevalue, aggressivevalue);

    pets.push(petData);


    setinlocalstorage(ownernameValue, typevalue); // key, value ---- owner and pet type
    setCookie(document, ownernameValue, emailvalue, 7); // owner name and email and time to expiration - days  setCookie(document,name, value, days)

    // Add event listeners for date changes
    checkInDateInput.addEventListener('change', checkcheckInOut);
    checkOutDateInput.addEventListener('change', checkcheckInOut);

    // Function to validate the value of the CheckIn and CheckOut dates
    function checkcheckInOut() {
        const checkInDate = new Date(checkInDateInput.value);
        const checkOutDate = new Date(checkOutDateInput.value);
        if (checkInDate > checkOutDate) {
            alert("CheckOut time cannot be before CheckIn");
        }
    }
    // Display the form data in the HTML div
    displayPetData(petData);
})

// Function to display form data in HTML div
function displayPetData(petData) {
    const displayDiv = document.getElementById("displayInfo");
    displayDiv.innerHTML = `
        <p>Owner name: ${petData.ownername}</p>
        <p>Name: ${petData.name}</p>
        <p>Type: ${petData.type}</p>
        <p>Age: ${petData.age}</p>
        <p>Weight: ${petData.weight}</p>
        <p>Gender: ${petData.gender}</p>
        <p>Aggressive: ${petData.aggressive}</p>    `;
}











