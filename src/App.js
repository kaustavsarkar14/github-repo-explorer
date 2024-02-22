import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositoriesStart } from "./features/RepositorySlice";
import Repository from "./components/Repository";
import useScollPagination from "./hooks/useScrollPagination";
import LoadingSekeletion from "./components/LoadingSekeletion";

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
          Array(20).fill(0).map((el,i)=><LoadingSekeletion key={i} />)
        ) : (
          repositories.map((repository) => (
            <Repository key={repository.id} repository={repository} />
          ))
        )}
        {(repositories.length>0 && loading) && <LoadingSekeletion/>}
      </div>
    </div>
  );
}

export default App;
