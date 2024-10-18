import "./App.css";
import Counter from "./components/ManagingStates";
import FormMaking from "./components/SimpleForm";
import Card from "./components/CardComponents";
import Toggle from "./components/ToggleSwitch";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import List from "./components/List";
import Footer from "./components/Footer";
import ImageGallery from "./components/ImageGallery";

function App() {
  const todoItems = [
    "Buy groceries",
    "Complete React project",
    "Exercise for 30 minutes",
    "Read a new book",
  ];
  return (
    <div className="App">
      <Navbar />
      <Counter />
      <FormMaking />
      <ImageGallery/>
      <Card
        image="assets\sneh_saurav_ProfilePic.jpg"
        description="Sneh Saurav is a Student and he is seeking for the internships"
        title="Sneh The Warrior"
      />
      <Toggle />
      <Modal />
      <div className="App">
        <h1>To-Do Lists</h1>
        <List items={todoItems} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
