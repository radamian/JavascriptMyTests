const handleCreatePet = (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.target).entries());

    if (values.petname === "") {
        alert("Name should have a value");
        return;
    }
    if (values.age === "") {
        alert("Age should have a value");
        return;
    }
    let ownername = document.getElementById('ownername').value;
    let email = document.getElementById('email').value;
    let petname = document.getElementById('petname').value;
    let type = document.getElementById('type').value;
    let weight = parseFloat(document.getElementById('weight').value);
    let age = parseInt(document.getElementById('age').value);
    let gender = document.querySelector('input[name="selGender"]').value;
    let aggressive = document.querySelector('input[name="aggressive"]').value;



    

    //////////
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
    //////////



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

    console.log("Display:")
    console.log(pet);

    console.log("Display:")
    console.log(ownerinfo);


    document.getElementById(`ownerview`).innerHTML = "PET TYPE:"+values.type;

    displayPetData(pet);

    // Function to display form data in HTML div
    function displayPetData(petData) {
        const displayDiv = document.getElementById("petview");
        displayDiv.innerHTML = `
        <p>Name: ${petData.petname}</p>
        <p>Type: ${petData.type}</p>
        <p>Age: ${petData.age}</p>
        <p>Weight: ${petData.weight}</p>
        <p>Gender: ${petData.gender}</p>
        <p>Aggressive: ${petData.aggressive}</p>    `;
    }


};
