let inc = document.querySelector('#increment');
let dec = document.querySelector('#decrement');
let count = document.querySelector('#counter');

inc.addEventListener('click',()=>
{
    let counter = parseInt(sessionStorage.getItem('counter'))||0;
    counter = counter + 1;
    sessionStorage.setItem('counter',counter);
    updatecounter()
})


dec.addEventListener('click',()=>
    {
        let counter = parseInt(sessionStorage.getItem('counter'))||0;
        counter = counter - 1;
        sessionStorage.setItem('counter',counter);
        updatecounter()
    })
    

    function updatecounter()
    {
        let counter = parseInt(sessionStorage.getItem('counter'))||0
        count.innerText = counter;
    }

    updatecounter()