// VARIABLES 
let id, name, ext, email, department, submit 

// HELPER FUNCTION TO RETURN DOM ELEMENTS 
id = document.getElementById('id')
name = document.getElementById('name') 
ext= document.getElementById('ext')
email = document.getElementById('email')
department = document.getElementById('department')
submit= document.getElementById('submit') 

submit.addEventListener('click', () => { 

console.log('ID:', id.value)
console.log('Name:', name.value) 
console.log('Extension:', ext.value) 
console.log('Email:', email.value) 
console.log('Department:', department.value); })
