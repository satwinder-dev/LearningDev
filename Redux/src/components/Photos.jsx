import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../features/counter/thunk";

export default function Photos() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.photos);

  console.log(data)
  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;
  return (
    <>
      <div className="flex flex-wrap gap-4">
        {data.recipes?.length > 0 ? data.recipes.map((recipe) => (
          <div key={recipe.id} className="max-w-50">
            <img src={recipe.image} alt=""  />
            <p>{recipe.name}</p>
            <p className="text-red-400">{recipe.cuisine}</p>
          </div>
        )):(
            <>
            <p>data not found</p>
            </>
        )}
      </div>
    </>
  );
}
