import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
// styles
import "./Home.css";
const Home = () => {
  const {
    data: articles,
    isPending,
    err,
  } = useFetch("http://localhost:3000/articles");
  return (
    <div className="home">
      {isPending && <div>loading ...</div>}
      {err && <div>{err}.</div>}
      {articles &&
        articles.map((article) => (
          <div key={article.id} className="card">
            <h3>{article.title}</h3>
            <p>{article.author}</p>
            <Link to={`/articles/${article.id}`}>Read More...</Link>
          </div>
        ))}
    </div>
  );
};

export default Home;
