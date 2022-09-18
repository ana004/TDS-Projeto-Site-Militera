const form = document.getElementById('contato-form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const fields = document.querySelectorAll('.field');
let isError = true;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validarNome();
    validarEmail();
    validarMensagem();
    if (isError == false) {
        console.log(isError);
    form.submit();
    }
})

function setError(index) {
    campos[index].style.border = '1px solid #e63636';
    spans[index].style.display = 'inline-block';
}

function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function validarNome() {
    if(campos[0].value.length < 3)
    {
        isError = true;
        setError(0);
    } else {
        isError = false;
        removeError(0);
    }
}

function validarEmail() {
  if(!emailRegex.test(campos[1].value)) 
  {
    isError = true;
    setError(1);
  } else {
    isError = false;
    removeError(1);
  }
}

function validarMensagem() {
    if(campos[2].value.length < 30)
    {
        isError = true;
        setError(2);
    } else {
        isError = false;
        removeError(2);
    }
}

