import './App.css';
import {useState}from "react";

function App() {

  const[vetor,setvetor] = useState(["victor","antonio","estevao","mourao"]);
  const[aluno,setaluno] = useState("")

  function adicionar()
  {
  setvetor([...vetor,aluno]);
  setaluno ("");
  }


    return (
      <div>
          <h1>aula 04 - estudo de vetores</h1>


        <div className="conteudo"></div>
          <h3>entrada de dados</h3>
          <form>
            <p>
             digite o nome aluno <br />
              <input type="text" value={aluno} onChange={(e) => setaluno(e.target.value)} />
            </p>

            <p>

              <butoon type="butoon"onclick={adicionar}>adicionar o nome da lista</butoon>
            </p>
          </form>
        </div>



        <div className="conteudo">
            <h3>lista de alunos</h3>

            <ul>

              {vetor.map(nome => (<li>{nome}</li>))}

            </ul>

        </div>
  );
}

export default App;
