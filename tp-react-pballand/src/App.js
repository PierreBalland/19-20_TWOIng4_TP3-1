import React from 'react';
import logo from './logo.svg';
import './App.css';

const globale="michael";
const DEFAULT_STATE = { name: '', target: 5, units: '' }

class Carreprincipale extends React.Component { //le carre principale a un prenom un nom date et photo a afficher
constructor(prenom,nom,date,pic){
    super();
    this.prenom=prenom;
    this.nom=nom;
    this.date=date;
    this.pic=pic;
    this.state = { DEFAULT_STATE }
}

    render() {

const test =this.props.pic;
        return (
                <div id="square">
                    <button className="favorite styled"type="button" onClick={() => this.handleClick()}>Michael</button>
                    {this.props.pic}
                    <img className="fit-picture" src={test}/>
                    {this.props.prenom}

                    <p> {this.props.nom} </p>
                    <p>{this.props.date} </p>


            </div>
        );
    }
    handleClick(){
        this.setState(DEFAULT_STATE);
        alert('Bien');
    }
}
class Topbuttons extends React.Component { //le carre principale a un prenom un nom date et photo a afficher
    constructor(){
        super();
        }
    render() {


        return (
            <div>

                <button className="favorite styled"type="button">Dwight</button>
                <button className="favorite styled"type="button">Angela</button>

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
            <div>
            <Topbuttons/>
                {globale}
            <Carreprincipale prenom={"Michael"} nom={"Scott"} date={"07/11/65"} pic={"michael.jpg"}/>
            </div>
        );
    }
}

// ========================================
export default Page
