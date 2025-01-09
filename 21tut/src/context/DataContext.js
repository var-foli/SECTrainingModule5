import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext = createContext({});

export const DataProvider = ({children}) => {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const {data, fetchError, isLoading} = useAxiosFetch("http://localhost:3500/posts");
  useEffect(() => {
    setPosts(data);
  }, [data])
  //replaces: 
  /*
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        //using axios instead of fetch, will auto catch anything not ok
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          //not in 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`)
        }
      }
    }

    fetchPosts();
  }, [])
  */

  useEffect(() => {
    const filteredResults = posts.filter(post => 
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));

    setSearchResults(filteredResults.reverse());
  }, [posts, search])

  return (
    <DataContext.Provider value={{
      search, setSearch,
      searchResults, fetchError, isLoading,
      posts, setPosts
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;