import Logo from "../../logo.js"
import "../../App.css"

const page_welcome = ()=>{
    return(
        <div className="App">
      <header className="App-header">
         <p>
          Projeto clone <strong>NETFLIX</strong> para fins de desenvolvimento
        </p>
        <Logo></Logo>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>LETS -{'>'} GO</span>
        </a>
      </header>
    </div>
    )
}

export default page_welcome;