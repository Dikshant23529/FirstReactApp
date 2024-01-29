import './App.css'
import Card from './components/card/Card'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import Navbar from './components/navbar/Navbar'

function App() {
  

  return (
    <>
      <Navbar name="React Props Application" />
      <Main heading="Power of React App with Props"/>
      <Card a="First" b="Second" c="Third"/>
      <Card a="Four" b="five" c="six"/>
      <Footer />
    </>
  )
}

export default App
