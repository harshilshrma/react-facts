import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div id="container">
      <Navbar />
      
      <main id="main">
        <h1 id="main-title">Fun facts about React</h1>
        <ul>
          <li>Was first release in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 200K stars on GitHub</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    </div>
  )
}

export default App
