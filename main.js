import { setCookie, getCookie, setinlocalstorage } from "./modules/storage.js";

document.addEventListener('DOMContentLoaded', function () {

    // Get form and input elements
    const myform = document.getElementById("MyForm");
    const submitButton = document.getElementById('submitButton');
    const ownernameInput = document.getElementById('ownername');
    const emailInput = document.getElementById('email');
    const petnameInput = document.getElementById('petname');
    const typeInput = document.getElementById('type');
    const weightInput = document.getElementById('weight');
    const ageInput = document.getElementById('age');

    // Get gender checkboxes
    const maleCheckbox = document.getElementById('male');
    const femaleCheckbox = document.getElementById('female');
    const unknownCheckbox = document.getElementById('unknown');

    // Initialize genderInput to the initially checked checkbox
    let genderInput = null;

    // Add event listeners to each checkbox
    maleCheckbox.addEventListener('change', function () {
        if (maleCheckbox.checked) {
            genderInput = maleCheckbox.value;
            femaleCheckbox.checked = false;
            unknownCheckbox.checked = false;
        }
    });

    femaleCheckbox.addEventListener('change', function () {
        if (femaleCheckbox.checked) {
            genderInput = femaleCheckbox.value;
            maleCheckbox.checked = false;
            unknownCheckbox.checked = false;
        }
    });

    unknownCheckbox.addEventListener('change', function () {
        if (unknownCheckbox.checked) {
            genderInput = unknownCheckbox.value;
            maleCheckbox.checked = false;
            femaleCheckbox.checked = false;
        }
    });

    // Get the aggressive radio buttons
    const aggressiveRadios = document.querySelectorAll("input[type='radio'][name='aggressive']");

    // Initialize a variable to store the selected value
    let selectedAggressive = null;

    // Add event listeners to each radio button
    aggressiveRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            if (radio.checked) {
                selectedAggressive = radio.value;
                console.log("Selected aggressive value:", selectedAggressive);
            }
        });
    });

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

    // Prevent default form submission
    myform.addEventListener('submit', (event) => { event.preventDefault(); });

    // Add click event listener to handle form submission
    submitButton.addEventListener('click', function () {
        let ownername = ownernameInput.value;
        let email = emailInput.value;
        let petname = petnameInput.value;
        let type = typeInput.value;
        let weight = parseFloat(weightInput.value);
        let age = parseInt(ageInput.value);
        let gender = genderInput;
        let aggressive = selectedAggressive;

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
        displayOwnerInfo(ownerinfo, "ownerview");
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
        <p>Aggressive: ${data._aggressive}</p>`;
    }

    // Function to display form data in HTML div
    function displayOwnerInfo(data, location) {
        const displayDiv = document.getElementById(location);
        displayDiv.innerHTML = `
            <p>Owner name: ${data._ownername}</p>
            <p>Email: ${data._email}</p>`;
    }

});
