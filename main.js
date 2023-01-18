const form = document.getElementById('myForm')
const inputs = document.getElementsByClassName('required')
const spans = document.getElementsByClassName('spanRequired')
let validateBolean = []

form.addEventListener('submit', (event) => {
    event.preventDefault()
})

function inputsCheck(index) {
    if (inputs[index]?.value.length != 0){
        spans[index].style.visibility = 'hidden'
        validateBolean[index] = true
    }
    else {
        spans[index].style.visibility = 'visible'
        validateBolean[index] = false
    }
}

function validate(){
    for (let i = 0; i < inputs.length; i++) {
        inputsCheck(i)
    }
    if(validateBolean.includes(false)){
        spans[5].style.visibility = 'visible'
        spans[5].innerHTML = 'Campos obrigatórios não registrados.'
        spans[5].style.color = '#E73550'
    }else{
        spans[5].innerHTML = 'Sucesso!'
        spans[5].style.color = 'green'
        formCheck()
    }
}

function formCheck(){
    let sendForm = document.getElementById('sendForm')
    sendForm.addEventListener('click', (submit))
}

function submit(){
    form.submit()
}