const handleCreatePet = (event)=> {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.target).entries());

    if (values.petname ===""){
        alert("Pet Name should have a value");
        return;
    }
    if (values.ownername ===""){
        alert("Owner name should have a value");
        return;
    }
    
    let petname = document.getElementById('petname').value;
    let type = document.getElementById('type').value;
    let gender = document.getElementById('selGender').value;
    let weight = parseFloat(document.getElementById('weight').value);
    let age = parseInt(document.getElementById('age').value);
    let aggressive = document.querySelector('input[name="aggressive"]').value;

    
    let pet = {
        ownername: ownername,
        petname: petname,
        type: type,
        gender: gender,
        weight: weight,
        age: age,
        aggressive: aggressive, 
    };

    console.log("Display:")
    console.log(pet);
    

    document.getElementById(`view`).innerHTML=values.type;

    displayPetData(pet);

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
    

    
};
