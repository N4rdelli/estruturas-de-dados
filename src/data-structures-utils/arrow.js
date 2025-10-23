/*
    Aqui estamos vendo na prática as vantagens de uma Arrow Function.
*/

// Arrow Function dentro de uma classe
class Pilha{
    #tamanho  = 0;
    
    // Function normal
    estaVazia() {
        if(this.tamanho === 0){
            return true;
        } else {
            return false;
        }
    }

    // Function mais resumida
    estaVazia2(){
        if(this.#tamanho === 0)
            return true;
        else 
            return false;
    }

    // Function ainda mais resumida
    estaVazia3(){
        return this.#tamanho === 0;
    }

    // Arrow Function
    estaVazia4 = () => this.#tamanho === 0;
}

// Arrow Function fora de uma classe
const n = () => console.log('Oi N4rdelli!');

// Function fora de uma classe (dentro de uma classe nós chamamos de método)
function n2(){
    console.log('Oi N4rdelli!');
}