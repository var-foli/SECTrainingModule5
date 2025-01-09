import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

function App() {

  return (
    <div className="App">
        <Header title="React JS Blog"/>
        <DataProvider>
        <Nav/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="post">
            <Route index element={<NewPost/>} />
            <Route path=":id" element={<PostPage/>} />
          </Route>
          <Route path="/edit/:id">
            <Route index element={<EditPost/>} />
          </Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="*" element={<Missing/>}></Route>
        </Routes>
        </DataProvider>
        <Footer />
    </div>
  );
}

export default App;
