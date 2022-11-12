import React, { Component } from 'react';

class Header extends Component{
    verificar = true;
    textoGeral = 'hahaha'
    timer = null;

    constructor(props){
        super(props);
    }

    componentDidMount(){
        // let counter = 0;
        // this.timer = setInterval(function(){
        //     console.log("Estou rodando " + counter);
        //     counter++;
        // }, 2000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    generateText(){
        this.textoGeral = 'alterado';
    }

    formatName(name){
        this.props.func();
        return name.replace(" ", "-")
    }
    
    render(){
        this.generateText();
        const texto = "Olá mundo";
        if(this.verificar){
            return (
                <header>
                    <h2>{texto} no cabeçalho {this.textoGeral} verdade {this.formatName("Tiago Silva")}</h2>
                    <p>Olá {this.props.name}</p>
                </header>
            )
        }else{
            return <h2>{texto} no cabeçalho {this.textoGeral} mentira</h2>
        }
    }
}

Header.defaultProps = {
    name: "",
    func: () => {}
}

export default Header;