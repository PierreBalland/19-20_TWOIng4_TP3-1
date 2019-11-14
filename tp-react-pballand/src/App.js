import React from 'react';
import logo from './logo.svg';
import './App.css';

const globale="michael";
const DEFAULT_STATE = { name: 'Scott', frstname: 'Michael', date: '07/11/65' }; // Michael
const DEFAULT_STATE1 = { name: 'Schrute', frstname: 'Dwight', date: '05/08/66' }; //Dwight
const DEFAULT_STATE2 = { name: 'Beasley', frstname: 'Pam', date: '23/04/97' }; //Pam

class Carreprincipale extends React.Component { //le carre principale a un prenom un nom date et photo a afficher
constructor(prenom,nom,date,pic){
    super();
    this.prenom=prenom;
    this.nom=nom;
    this.date=date;
    this.pic=pic;
    this.state = { DEFAULT_STATE };

}
    handleClick(){
        this.setState(DEFAULT_STATE);
        alert('Bien');
        //window.location.reload();
    }
    handleClick1(){
        this.setState(DEFAULT_STATE1);
        alert('Bien');
        //window.location.reload();
    }
    handleClick3(){
        this.setState(DEFAULT_STATE2);
        alert('Bien');
        //window.location.reload();
    }

    render() {

const nom=this.state.name;
const prenom=this.state.frstname;
const date=this.state.date;
        return (
                <div id="glob">
                    <button className="favorite styled"type="button" onClick={() => this.handleClick()}>Michael</button> <button className="favorite styled"type="button" onClick={() => this.handleClick1()}>Dwight</button>
                    <button className="favorite styled"type="button" onClick={() => this.handleClick3()}>Pam</button>
                    <div id="square">
                        {nom}

                    <p> {prenom} </p>
                    <p>{date} </p>
                    </div>


            </div>
        );
    }

}


function f() {
    globale="andre";
    window.location.reload();
}

class Page extends React.Component {
    render() {
        return (

            <Carreprincipale prenom={"Michael"} nom={"Scott"} date={"07/11/65"} pic={"michael.jpg"}/>

        );
    }
}

// ========================================
export default Page
