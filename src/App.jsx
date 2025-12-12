import Form from "./components/Form"
import Navbar from "./components/Navbar"
import ListGroup from "./components/ListGroup"


const App = () => {

 

  return (
    <>
      <Navbar />

      <div className="p-8 bg-blue-200 min-h-screen">
        <Form  />
        <ListGroup  />
      </div>

    </>
  )
}

export default App