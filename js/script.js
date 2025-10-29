// VARIABLES 
let id 
let name
let ext 
let email  
let department  
let submit

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

// const id = document.getElementById('id');
   // const name = document.getElementById('name');
   // const ext = document.getElementById('ext');
   // const email = document.getElementById('email');
   // const department = document.getElementById('department');
   // const submit = document.getElementById('submit');