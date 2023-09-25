function init () {
    const contactsForm = document.querySelector('#contacts-form')
    const studentList = document.querySelector('#student-list')
   

    contactsForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const name = contactsForm.querySelector('#person-name').value
    const surname = contactsForm.querySelector('#person-surname').value
    const age = contactsForm.querySelector('#person-age').value
    const telephone = contactsForm.querySelector('#tel-number').value
    const email = contactsForm.querySelector('#email-address').value
    const skills = contactsForm.querySelector('#range-it').value
    const group = contactsForm.querySelector('input[name="group-selection"]:checked').value
    // const languages = contactsForm.querySelectorAll('input[name="language"]:checked').value

    const studentItem = document.createElement('div')
    studentItem.classList.add('student-item')


    const studentMainInfo = document.createElement('h3')
    studentMainInfo.textContent = `${name}, ${surname}, ${age}.`

    const studentTelephoneNumber = document.createElement('p')
    studentTelephoneNumber.textContent = `Telephone Number: *****`

    const studentEmailAddress = document.createElement('p')
    studentEmailAddress.textContent = `Email: *******`

    const studentItSkillsRange = document.createElement('p')
    studentItSkillsRange.textContent = `Student IT knowledge ${skills} scores.`

    const studentGroup = document.createElement('p')
    studentGroup.textContent = `Student group: ${group}.`

    // const studentLanguages = document.createElement ('p')
    // studentLanguages.textContent = `Programming languages: ${languages}.`

    let studentLanguages = document.querySelectorAll ('input[name="language"]:checked');
    let output = []
    studentLanguages.forEach((language) => {
        output.push(language.value)
       
    })
    console.log(output)


    const personalInfoButton = document.createElement('button');
    personalInfoButton.textContent = `Show personal info`

    personalInfoButton.addEventListener("click", () => {
        if (
            studentTelephoneNumber.textContent === `Telephone Number: *****` && 
            studentEmailAddress.textContent === `Email: *******`
        ) {
            studentTelephoneNumber.textContent = `Telephone Number: ${telephone}`;
            studentEmailAddress.textContent = `Email: ${email}`;
            personalInfoButton.textContent = `Hide personal info`;
        } else {
            studentTelephoneNumber.textContent = `Telephone Number: *****` 
            studentEmailAddress.textContent = `Email: *******`
            personalInfoButton.textContent = `Show personal info`
        }
    })

    const removeStudentButton = document.createElement('button');
    removeStudentButton.textContent = `Delete Student`

    removeStudentButton.addEventListener('click', () => {
        studentItem.remove()

    const removedStudentElement = document.createElement('span')
    removedStudentElement.textContent = `Student (${name} ${surname}) deleted. `
    removedStudentElement.style.color = 'red'
    contactsForm.after(removedStudentElement)
   
    setTimeout(() => {
        removedStudentElement.remove()
    }, 5000);
})
    
    const createdStudentElement = document.createElement('span')
    createdStudentElement.textContent = `New student (${name} ${surname}) created.`
    createdStudentElement.style.color = 'blue'
    contactsForm.after(createdStudentElement)

    setTimeout(() => {
        createdStudentElement.remove()
    }, 5000);


    studentItem.append(
        studentMainInfo,
        studentTelephoneNumber,
        studentEmailAddress,
        studentItSkillsRange,
        studentGroup,
        studentLanguages,
        personalInfoButton,
        removeStudentButton,
    )
    
    studentList.prepend(studentItem)


    // contactsForm(reset)

});

const value = document.querySelector("#value");
const input = document.querySelector("#range-it");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
  event.preventDefault()
})
}

init()


// KETVIRTA DALIS (studento ištrynimas):
// 1. Prie kiekvieno sukurti studento elemento pridėti mygtuką „Ištrinti studentą".
// 2. Paspaudus šį mygtuką, studento elementas yra ištrinamas.
// 3. Ištrynus studentą, turi iššokti <span> elementas, kuris informuoja apie studento ištrynimą: „Studentas (Vardas Pavardė) sėkmingai ištrintas.". Šis span elementas dingsta po 5 sekundžių.






