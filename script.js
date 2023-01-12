const turnGreen = (checkBox) => {
    const createBtn = document.querySelector('#createBTN')
    const allCheckboxes = document.querySelectorAll('.form-check-input-dark')
    console.log(allCheckboxes)
    let checkBoxesChecked
    allCheckboxes.forEach((checkBox) => {
        if (checkBox.checked) {
            checkBoxesChecked = true;
            checkBox.parentNode.parentNode.classList.add('table-success')
        } else {
            checkBox.parentNode.parentNode.classList.remove('table-success')
        }
    })
    if (checkBoxesChecked) {
        
        createBtn.style.display = 'none'
    } else {
        createBtn.style.display = 'inline-block'
    }

};

const deleteEntry = async () => {
    try {
await fetch(`https://vector-crud-616d3-default-rtdb.firebaseio.com/${id}/.json`)
    }
}

const callData = async () => {
    try {
        const response = await fetch('https://vector-crud-616d3-default-rtdb.firebaseio.com/.json');
        const response1 = await fetch('https://vector-crud-2-default-rtdb.firebaseio.com/.json');
        const response2 = await fetch('https://vector-crud3-default-rtdb.firebaseio.com/.json');
        const data = await response.json();
        const data1 = await response1.json();
        const data2 = await response2.json();
        data.dataBase1.forEach((profile, index) => {
            const newEntry = {
                firstName: profile.firstName,
                lastName: data1.dataBase2[index].lastName,
                startDate: data2.dataBase3[index].startDate,
                lastUpdated: data1.dataBase2[index].lastUpdated,
                jobTitle: profile.jobTitle
            }

            const tableBody = document.querySelector('.customerdata').innerHTML +=
                `
            <tr>
            <td><input class="form-check-input-dark mt-0" type="checkbox" id="accept" onclick="turnGreen(this)"
            aria-label="Checkbox for following text input"></td>
            <td>${newEntry.firstName}</td>
            <td>${newEntry.lastName}</td>
            <td>${newEntry.startDate}</td>
            <td>${newEntry.lastUpdated}</td>
            <td>${newEntry.jobTitle}</td>S
            </tr>
            `
        });
        console.log('Success', data)
        console.log('Success', data1)
        console.log('Success', data2)
    }
    catch (err) {
        console.log('Fail', err)
    }

}

// const turnGreen = () => {
//     const cb = document.querySelector('#accept');
//     const btn = document.querySelector('.form-check-input-dark');
//     btn.onclick = () => {
//        alert(cb.value);
//        console.log(value);
//     };

// }
// const btn = document.querySelector('#accept')
// btn.addEventListener('click', turnGreen(() => {
//     console.log(value)
// }));  

callData();
