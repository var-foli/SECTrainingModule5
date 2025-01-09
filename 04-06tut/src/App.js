import Header from "./Header";
import Content from './Content';
import Footer from './Footer';

{/*renders anything in {} as a javacript object*/}
{/*objects and booleans cannot be rendered*/}
{/*<p>{[1, 2, 3]}</p>*/}

function App() {
  

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
