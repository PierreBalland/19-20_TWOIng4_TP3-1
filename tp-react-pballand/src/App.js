import React from 'react';
import logo from './logo.svg';
import pam from './pam.jpg';
import michael from './michael.jpg';
import dwight from './dwight.jpg';
import './App.css';


const DEFAULT_STATE = { name: 'Scott', frstname: 'Michael', date: '07/11/65' , picture:michael}; // Michael
const DEFAULT_STATE1 = { name: 'Schrute', frstname: 'Dwight', date: '05/08/66',picture:dwight }; //Dwight
const DEFAULT_STATE2 = { name: 'Beesly', frstname: 'Pam', date: '23/04/97', picture:pam }; //Pam

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
        const picture=this.state.picture;
        return (
                <div id="glob">
                    <div id="buttons">
                    <button className="favorite styled"type="button" onClick={() => this.handleClick()}>Michael</button> &nbsp; &nbsp; &nbsp;<button className="favorite styled"type="button" onClick={() => this.handleClick1()}>Dwight</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="favorite styled"type="button" onClick={() => this.handleClick3()}>Pamela</button></div>
                    <div id="square">


                        <img src={picture}/>
                        <p> {nom} </p>

                    <p> {prenom} </p>
                    <p>{date} </p>
                    </div>


            </div>
        );
    }

}


function f() {

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
