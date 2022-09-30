import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Spring } from "react-spring/renderprops"
import "./App.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = (props) => {
    const animateHeader = [{letter: "H", delay: 50},
                         {letter: "i", delay: 100},
                         {letter: ",", delay: 150},
                         {letter: "i", delay: 200},
                         {letter: "'", delay: 250},
                         {letter: "m", delay: 300},
                         {letter: " ", delay: 350},
                         {letter: "B", delay: 400},
                         {letter: "i", delay: 450},
                         {letter: "l", delay: 500},
                         {letter: "l", delay: 550},
                         {letter: ".", delay: 600},
                         {letter: "A", delay: 650},
                         {letter: " ", delay: 700},
                         {letter: "f", delay: 750},
                         {letter: "r", delay: 800},
                         {letter: "o", delay: 850},
                         {letter: "n", delay: 900},
                         {letter: "t", delay: 950},
                         {letter: " ", delay: 1000},
                         {letter: "e", delay: 1050},
                         {letter: "n", delay: 1100},
                         {letter: "d", delay: 1150},
                         {letter: " ", delay: 1200},
                         {letter: "w", delay: 1250},
                         {letter: "e", delay: 1300},
                         {letter: "b", delay: 1350},
                         {letter: " ", delay: 1400},
                         {letter: "d", delay: 1450},
                         {letter: "e", delay: 1500},
                         {letter: "v", delay: 1550},
                         {letter: "e", delay: 1600},
                         {letter: "l", delay: 1650},
                         {letter: "o", delay: 1700},
                         {letter: "p", delay: 1750},
                         {letter: "e", delay: 1800},
                         {letter: "r", delay: 1850},
                        ]
  const word = animateHeader.map(letter => <Spring key={letter.delay} from={{ opacity: 0, transform: "translateY(-150px)" }} to={{ opacity: 1, transform: "translateY(0)"}} config={{delay: letter.delay, duration: 1000}}> 
    {props => (<p style={props}>{letter.letter}</p>)}
    </Spring>)

  return (
    
    <div id="/" className="home" style={{background: "rgba(0, 0, 0, 0)"}}>
      <h2 className='header mt-3'>{word}</h2>
   <Link to="/projects"><div><Spring from={{ opacity: 0, transform: "translateX(-100vh)" }} to={{ opacity: 1, transform: "translateX(0)" }} config={{delay: 1500, duration: 1000}}> 
   {prop => <Button style={prop}>Projects</Button>}
</Spring></div></Link>
<Link to="/blog"><div><Spring from={{ opacity: 0, transform: "translateX(300px)" }} to={{ opacity: 1, transform: "translateX(0)" }} config={{delay: 1500, duration: 1000}}> 
   {prop => <Button type="reset" style={prop} >Blog</Button>}
</Spring></div></Link>
<Link to="Contact"><div><Spring from={{ opacity: 0, transform: "translateY(50px)" }} to={{ opacity: 1, transform: "translateY(0)" }} config={{delay: 1500, duration: 1000}}> 
   {prop => <Button type="reset" onClick={props.handleContact} style={prop}>Contact</Button>}
</Spring></div></Link>
</div>
  )
}

export default Home