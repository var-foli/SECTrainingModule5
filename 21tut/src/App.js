import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import About from "./About";
import Missing from "./Missing";
import { useEffect } from "react";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { Route, Routes } from "react-router-dom";
import { useStoreActions } from "easy-peasy";

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const {data, fetchError, isLoading} = useAxiosFetch("http://localhost:3500/posts");
  
  useEffect(() => {
    setPosts(data);
  }, [data, setPosts])

  return (
    <div className="App">
        <Header title="React JS Blog"/>
        <Nav/>
        <Routes>
          <Route index element={<Home 
            isLoading={isLoading}
            fetchError={fetchError}
          />} />
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
        <Footer />
    </div>
  );
}

export default App;
