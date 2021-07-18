let lista = [];

const salvarDado = (evento)=> {

    evento.preventDefault();

    const input = document.querySelector("[data-form-input]");
    const valor = input.value;
    
    lista.push(valor);

    localStorage.setItem("dados", JSON.stringify(lista));
    
    input.value = " ";
}

const enviar = document.querySelector("[data-form-button]");

enviar.addEventListener("click", salvarDado);