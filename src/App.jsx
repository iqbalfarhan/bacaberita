import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(1);
  const [article, setArticle] = useState({});

  function nextPage() {
    setCount(count + 1);
  }

  function prevPage() {
    setCount(count - 1);
  }

  useEffect(() => {
    fetch("https://dummyjson.com/posts/" + count)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, [count]);

  return (
    <body>
      <div>halaman {count}</div>
      <button onClick={prevPage}>prev page</button>
      <button onClick={nextPage}>next page</button>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </body>
  );
};

export default App;
