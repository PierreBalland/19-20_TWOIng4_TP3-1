import React from 'react';
import logo from './logo.svg';
import pam from './pam.jpg';
import michael from './michael.jpg';
import dwight from './dwight.jpg';
import './App.css';


const DEFAULT_STATE = { name: 'Scott', frstname: 'Michael', date: '07/11/65' , picture:michael, article:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}; // Michael
const DEFAULT_STATE1 = { name: 'Schrute', frstname: 'Dwight', date: '05/08/66',picture:dwight,article: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.' }; //Dwight
const DEFAULT_STATE2 = { name: 'Beesly', frstname: 'Pam', date: '23/04/97', picture:pam ,article: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"'}; //Pam
const color ='square';

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
        alert('Changement de profil');
        //window.location.reload();
    }
    handleClick1(){
        this.setState(DEFAULT_STATE1);
        alert('Changement de profil');
        //window.location.reload();
    }
    handleClick3(){
        this.setState(DEFAULT_STATE2);
        alert('Changement de profil');
        //window.location.reload();
    }
    randomcolor(){
        let r = Math.round((Math.random() * 100));
        if(r>=75) {
            document.body.style = 'background: red;';
        }
        if(r>50 && r<=74) {
            document.body.style = 'background: blue;';
        }
        if(r<=50){
            document.body.style = 'background: green;';
        }
    }

    render() {

const nom=this.state.name;
const prenom=this.state.frstname;
const date=this.state.date;
const picture=this.state.picture;
// document.div.style = 'background: red;';
        return (

                <div id="glob">

                    <div id="buttons">
                    <button className="favorite styled"type="button" onClick={() => this.handleClick()}>Michael</button> &nbsp; &nbsp; &nbsp;<button className="favorite styled"type="button" onClick={() => this.handleClick1()}>Dwight</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="favorite styled"type="button" onClick={() => this.handleClick3()}>Pamela</button></div>
                    <div id={color}>


                        <img src={picture}/>
                        <p> {nom} </p>

                    <p> {prenom} </p>
                    <p>{date} </p>
                        <button className="favorite styled"type="button" onClick={() => this.randomcolor()}>Change Style</button>
                    </div>
                        <div id='article'>
                            <p>{this.state.article}</p>
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
