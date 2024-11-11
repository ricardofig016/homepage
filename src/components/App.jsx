import Header from "./Header/Header.jsx";
import TestButton from "./TestButton/TestButton.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <TestButton bgColor="white" />
      <TestButton bgColor="light-blue" />
      <TestButton bgColor="dark-blue" />
      <TestButton bgColor="black" />
      <Footer />
    </>
  );
}

export default App;
