import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {isPending && <div>Loading..</div>}
      {error && <div>{error}</div>}
      {data && <Bloglist blogs={data} title={"All Blogs"} />}
    </div>
  );
};
export default Home;
