import "../Header/Header.css";
import reactImg from "../../assets/react-core-concepts.png"

const values=[ "Core", "Crucial", "Fundamental"];
 
function genRandomValue(max){
 return Math.floor (Math.random() *(max+1)  );
}

export default function Header(){
    const description = values[genRandomValue(2)];  

    return<div>
        <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
         <h2>Time to get started!</h2>
      </main>
    </div>
}