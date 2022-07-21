import logo from './logo.svg';
import './App.css';
import Form from "./Form"

function App() {
  return (
    <div className="App">
    <h1>Components Notes  <NameView name_1="Mete"/></h1>
     <Hello name="Mesut">
      <img src="https://picsum.photos/200/300" alt="" />
      <p>ramdom image, props children</p>

     </Hello>
     <p>onay için <NewButon buton="Enter"/></p>
     <NewButon buton="Enter"/>
     <Form formbuton="back"/>
    </div>
  );
}

export default App;

function Hello(props){
  console.log(props);
  return (<div>
    <p>Merhaba, <NameView name_1={props.name}/> </p> 
     <p>{props.children}</p>
    
    </div>
    );
}

function NameView(props){
   console.log(props)
  return <a href="/"> {props.name_1 || "misafir" }</a>
}


function NewButon(props){

  return <button>{props.buton}</button>
}



