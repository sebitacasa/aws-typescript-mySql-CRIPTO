import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";

export default function Search() {
  const query = useQuery();
  const title = query.get("title");
 // const [searchText, setSearchText] = useState("");

  const history = useNavigate();

//   useEffect(() => {
//     setSearchText(search || "");
//   }, [search]);

  const handleSubmit = (e: { preventDefault: () => void; } ) => {
    e.preventDefault();
    //history.push("/?search=" + search);
  };
  return (
    <form  onSubmit={handleSubmit} >
      <div >
        <input
          
          type="text"
          value={title ?? "" }
          autoFocus
          placeholder="Title"
          aria-label="Search Animes"
          onChange={(e) => {
              const value = e.target.value;
            
              history("?title=" + value)
            }}
        />
        <button  type="submit">
          <FaSearch  size={20} />
        </button>
      </div>
    </form>
  );
}
