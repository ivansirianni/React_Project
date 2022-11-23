import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Greeting/ItemListContainer'
import './App.css'

function App() {
  return (
    <div className="App">      
        <header className="App-header">
          <NavBar />        
        </header>
      <div className='box-container'>
        <ItemListContainer />
        <img src="https://i.pinimg.com/originals/c8/46/e2/c846e2f4d7a952f189a2e957f2bc2931.gif" className='img'></img>
      </div>
           
    </div>
  );
}



export default App;
/**
 * 
 *  <header className="App-header">
        <NavBar />        
      </header>
      <main className='main-container'>
        <ItemListContainer label="Bienvenidos Terricolas"/>
        <section className='section-container'>
          <ItemListContainer>
            <h1>Bienvenidos Terricolas</h1>
          </ItemListContainer>
          <img src="https://i.pinimg.com/originals/c8/46/e2/c846e2f4d7a952f189a2e957f2bc2931.gif" className='img'></img>

        </section>
      </main>
 */
<ItemListContainer>
          <h1 className='main-h1'> hola</h1>
        </ItemListContainer> 