import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  // `/products?populate=*`
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  // console.log("data", data);
  // console.log("loading", loading);
  // console.log("error", error);

  return (
    <div className="FeaturedProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          recusandae quis iure similique corporis, neque ullam reiciendis earum
          odit aspernatur. Eligendi libero pariatur qui reiciendis totam fugit
          adipisci autem in, accusamus quae!
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong"
          : loading
          ? "loading"
          : data?.map((item) => <Card key={item.id} item={item} />)}
      </div>
    </div>
  );
};
export default FeaturedProducts;
