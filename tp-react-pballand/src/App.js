import React from 'react';
import logo from './logo.svg';
import './App.css';

class Carreprincipale extends React.Component { //le carre principale a un prenom un nom date et photo a afficher
constructor(prenom,nom,date,pic){
    super();
    this.prenom=prenom;
    this.nom=nom;
    this.date=date;
    this.pic=pic;
}
    render() {

const test =this.props.pic;
        return (
                <div id="square">
                    {this.props.pic}
                    <img className="fit-picture" src={test}/>
                    {this.props.prenom}

                    <p> {this.props.nom} </p>
                    <p>{this.props.date} </p>


            </div>
        );
    }

}
class Topbuttons extends React.Component { //le carre principale a un prenom un nom date et photo a afficher
    constructor(){
        super();
        }
    render() {


        return (
            <div>
                <button className="favorite styled"
                        type="button">
                    Add to favorites
                </button>


            </div>
        );
    }

}
class Personne  { //le carre principale a un prenom un nom date et photo
    constructor(prenom,nom,date,pic){

        this.prenom=prenom;
        this.nom=nom;
        this.date=date;
        this.pic=pic;
    }


}
class Page extends React.Component {
    render() {
        return (
            <div>
            <Topbuttons/>
            <Carreprincipale prenom={"Michael"} nom={"Scott"} date={"07/11/65"} pic={"michael.jpg"}/>
            </div>
        );
    }
}

// ========================================
export default Page
