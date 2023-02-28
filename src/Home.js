import React from 'react';
// import './Home.css'
// import logo from './assets/logo.svg';
import Card from './Card';
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Home = ({property,onClickCallback}) => {
    const handleClick=()=>{
        onClickCallback();
    }
    console.log(property.index);
    return(
        <div>
            <TransitionGroup className="card-container">
                <CSSTransition
                    key={property._id}
                    timeout={1000}
                    classNames="slide"
                >
                    <Card property={property} onClickCallback={handleClick}/>
                </CSSTransition>
            </TransitionGroup>
            
           

        </div>   
    )
}

export default Home;