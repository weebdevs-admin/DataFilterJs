let elTitle = document.querySelector('h1')
let elInput = document.querySelector('input')
let elform = document.querySelector('form')

const Data =['python','javascript','php','swift','c++','c#','delphy','ruby','node.js','angular.js','vue.js','react.js','django','flask','.net']

elInput.addEventListener('keyup',function(evn){
    evn.preventDefault()
    fillData = Data.filter((e)=> e.includes(elInput.value)==true)
    elTitle.textContent = fillData
    console.log(fillData);
})
