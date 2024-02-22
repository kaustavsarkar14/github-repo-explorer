import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositoriesStart } from "./features/RepositorySlice";
import Repository from "./components/Repository";
import useScollPagination from "./hooks/useScrollPagination";

function App() {
  const dispatch = useDispatch();
  const { loading, repositories } = useSelector((state) => state.repository);
  useEffect(() => {
    dispatch(fetchRepositoriesStart());
  }, [dispatch]);
  useScollPagination()
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Most Starred Repos</h1>
      <div className="flex flex-col gap-3 p-2 max-w-[70rem] m-auto">
        {(repositories.length==0 && loading) ? (
          <h1>Loading...</h1>
        ) : (
          repositories.map((repository) => (
            <Repository key={repository.id} repository={repository} />
          ))
        )}
        {(repositories.length>0 && loading) && <h1>Loading...</h1>}
      </div>
    </div>
  );
}

export default App;
