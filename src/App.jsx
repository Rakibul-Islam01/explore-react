import './App.css'
import AllUsers from './components/AllUsers/AllUsers'
import Counter from './components/Counter/Counter'
import Friends from './components/Friends/Friends'
import Team from './components/Team/Team'

function App() {

  function addclick(){
    alert('button 1 clicked')
  }

  const addclick2 = ()=>{
    alert('button 2 clicked')
  }
  const addclick3 =(num)=>{
    alert(num + 3)
  }
  return (
    <>
      <div>
       <p>react core concepts</p>
       <button onClick={addclick}>Click me</button>
       <button onClick={addclick2}>Click me 2</button>
       <button onClick={()=>addclick3(7)}>Click me 3</button>
      </div>
      <Counter></Counter>
      <Team></Team>
      <AllUsers></AllUsers>
      <Friends></Friends>
     
    </>
  )
}

export default App
