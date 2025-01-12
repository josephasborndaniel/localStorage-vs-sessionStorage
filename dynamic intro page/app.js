let nameInput = document.querySelector('input');
let btn = document.querySelector('button');
let form = document.querySelector('#welcomeForm');
let nameSpan = document.querySelector('#name')

btn.addEventListener('click',()=>{
    let name = nameInput.value;
    localStorage.setItem('name',name);
    checkFrom()
})


function checkFrom()
{
    let userExists = 'name' in localStorage;

    if(userExists){
        form.classList.add('hidden');
        nameSpan.innerText = localStorage.getItem('name')
    }
}

checkFrom()




let user = {name: 'yash', email: 'yash@gmail.com'}
localStorage.setItem('user', JSON.stringify(user));
let userFromStorage = JSON.parse(localStorage.getItem('user'))


console.log(userFromStorage)


sessionStorage.clear()
sessionStorage.setItem('name', 'codekaro');
let a = sessionStorage.getItem('name')
console.log(a)

