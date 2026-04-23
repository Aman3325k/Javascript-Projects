const random = {
    lower: () =>  String.fromCharCode(97 + Math.floor(Math.random()*26)),
    upper: () =>  String.fromCharCode(65 + Math.floor(Math.random()*26)),
    number: () => Math.floor(Math.random() * 10),
    symbol: () =>{
             const symbol = "!@#$%^&*()*?<}{[]|\ ";
             return symbol[Math.floor(Math.random()*symbol.length)];

}
}


const output = document.getElementById('output');
const button = document.querySelector('button');

button.addEventListener('click',()=>{
     const types = [random.upper,random.lower,random.number,random.symbol];
     let password = "";

    for(let i = 0; i<= 7; i++){
    
        const randomtype = types[Math.floor(Math.random()*types.length)];
        password += randomtype();
    
    }

    // return password;
    output.innerHTML = password;

})

const copy = document.getElementById('copy');

copy.addEventListener('click',()=>{
    const password = output.innerText;
    if( !password) return;

    navigator.clipboard.writeText(password).then(()=>{
        copy.textContent = "copied";
        setTimeout(()=> copy.textContent = 'copy',2000);
    })
})

