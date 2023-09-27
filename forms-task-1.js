const initialData = [
    {
       name: 'Steve',
       surname: 'Doe', 
       age: 25,
       phone: '+37069856365',
       email: 'steve@doe.com',
       itKnowledge: 4,
       group: 'FEU-1',
       interests: ['javascript', 'phyton', 'php']
    },
    {
        name: 'John',
        surname: 'Stewart', 
        age: 19,
        phone: '+37065936365',
        email: 'john@stewart.com',
        itKnowledge: 6,
        group: 'FEU-2',
        interests: ['php', 'java']
     },
     {
        name: 'Henry',
        surname: 'Thomson', 
        age: 22,
        phone: '+3456982365',
        email: 'henry@thomson.com',
        itKnowledge: 9,
        group: 'FEU-3',
        interests: ['java']
     },
     {
        name: 'Peter',
        surname: 'Scott', 
        age: 20,
        phone: '+34369582365',
        email: 'peter@scott.com',
        itKnowledge: 8,
        group: 'FEU-4',
        interests: ['phyton']
     },
     {
        name: 'Thom',
        surname: 'Johnson', 
        age: 23,
        phone: '+34369982365',
        email: 'thom@johnson.com',
        itKnowledge: 7,
        group: 'FEU-5',
        interests: ['javascript', 'java']
     },
]



function init (initialData) {
    rangeOutputDisplay()
    renderInitialData(initialData)
    
    const contactsForm = document.querySelector('#contacts-form')
   
    contactsForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const form = event.target

    const name = form.name.value
    const surname = form.surname.value
    const age = form.age.value
    const phone = form.phone.value
    const email = form.email.value
    const itKnowledge = form.elements['it-knowledge'].value
    const group = form.elements['group-selection'].value
    const interests = form.querySelectorAll('input[name="interest"]:checked')

    const interestsData = []
    interests.forEach(interest => {
        interestsData.push(interest.value)
    })

    // const student = {
    //     name: name,
    //     surname: surname,
    //     age: age,
    //     phone: phone,
    //     email: email,
    //     itKnowledge: itKnowledge,
    //     group: group,
    //     interests: interests
    // }
    const studentData = {
        name,
        surname,
        age,
        phone,
        email,
        itKnowledge,
        group,
        interests: interestsData,
    }

    renderSingleStudent(studentData)

    form.reset()


    alertMessage(`New student (${name} ${surname}) created.`, 'success')
   
    rangeOutputDisplay()
    })
}
init(initialData)


function renderInitialData(studentsData) {
    studentsData.forEach(student => renderSingleStudent (student))
}

function renderSingleStudent (student){
    const name = student.name
    const surname = student.surname
    const age = student.age
    const phone = student.phone
    const email = student.email
    const itKnowledge = student.itKnowledge
    const group = student.group
    const interests = student.interests


    const studentList = document.querySelector('#student-list')

    const studentItem = document.createElement('div')
    studentItem.classList.add('student-item')

    const studentMainInfo = document.createElement('h3')
    studentMainInfo.textContent = `${name}, ${surname}, ${age}.`

    const studentPhoneNumber = document.createElement('p')
    studentPhoneNumber.textContent = `Phone Number: *****`

    const studentEmailAddress = document.createElement('p')
    studentEmailAddress.textContent = `Email: *******`

    const studentItKnowledge = document.createElement('p')
    studentItKnowledge.textContent = `Student IT knowledge ${itKnowledge} / 10 scores.`

    const studentGroup = document.createElement('p')
    studentGroup.textContent = `Student group: ${group}.`


    const interestsWrapperElement = document.createElement('div')
    const studentInterestTitle = document.createElement('h4')
    studentInterestTitle.textContent = `Programming Languages:`
    
    const studentInterestsList = document.createElement('ul')

    interests.forEach((interest) => {
        console.log(interest)
        const studentInterestItem = document.createElement('li')
        studentInterestItem.textContent = interest
        studentInterestsList.append(studentInterestItem)
    })
    interestsWrapperElement.append(studentInterestTitle, studentInterestsList)

    const personalInfoButton = document.createElement('button');
    personalInfoButton.textContent = `Show personal info`

    let showPersonalInfo = false

    personalInfoButton.addEventListener("click", () => {
        showPersonalInfo = !showPersonalInfo

        if (showPersonalInfo) {
            personalInfoButton.textContent = `Hide personal info`;
            studentPhoneNumber.textContent = `Phone Number: ${phone}`;
            studentEmailAddress.textContent = `Email: ${email}`;
        } else {
            personalInfoButton.textContent = `Show personal info`
            studentPhoneNumber.textContent = `Phone Number: *****` 
            studentEmailAddress.textContent = `Email: *******`
        }
    })

    const removeStudentButton = document.createElement('button');
    removeStudentButton.textContent = `Remove Student`

    removeStudentButton.addEventListener('click', () => {
    studentItem.remove()

    alertMessage(`New student (${name} ${surname}) removed.`, 'danger')
       
    })
   

    studentItem.append(studentMainInfo, studentPhoneNumber, studentEmailAddress, studentItKnowledge, studentGroup, interestsWrapperElement, personalInfoButton, removeStudentButton)

    studentList.prepend(studentItem)
}

function alertMessage(text, elementClass) {
    const alertMessageElement = document.querySelector('#alert-message')
    alertMessageElement.classList.add(elementClass)
    alertMessageElement.textContent = text

    setTimeout(() => {
    alertMessageElement.textContent = ''
    alertMessageElement.classList.remove(elementClass)
    }, 5000);
}

function rangeOutputDisplay(){
    const input = document.querySelector('#it-knowledge');
    const output = document.querySelector('#it-knowledge-output')

    output.textContent = input.value

    input.addEventListener('input', (event) => {
        output.textContent = event.target.value
    })
}
