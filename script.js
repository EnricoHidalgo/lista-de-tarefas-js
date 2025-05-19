let confBtn = document.getElementById("conf");
let tarInp = document.getElementById("tarIn");
let ul = document.getElementById("ul");
let item = document.getElementsByTagName("li");

function qntEsc(){
    return tarInp.value.length;
}

function cle() {
    const texto = tarInp.value;
    
    tarInp.value = "";

    const li = document.createElement("li");
    li.appendChild(document.createTextNode(texto)); //  
    ul.appendChild(li);

    function cO() {
        li.classList.toggle("feito");
    }

    li.addEventListener("click", cO);

    let deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("✖"));
    li.appendChild(deleteBtn);

    function dli() {
        li.classList.add("deletar");
    }
    deleteBtn.addEventListener("click", dli);
}

confBtn.addEventListener("click",dpsClick);
tarInp.addEventListener("keypress",dpsKeyPress);

function dpsClick(){
    if(qntEsc() > 2){
        cle();
    }
    console.log(tarInp.value)
}

function dpsKeyPress(){
    if(qntEsc() > 2 && event.which === 13){
        cle();
    }
}
