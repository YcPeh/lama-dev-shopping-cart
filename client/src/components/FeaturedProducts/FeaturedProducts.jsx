import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/2112648/pexels-photo-2112648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/4066290/pexels-photo-4066290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "T shirt",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2112648/pexels-photo-2112648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "T shirt",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/2112648/pexels-photo-2112648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "T shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2112648/pexels-photo-2112648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "T shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];

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
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default FeaturedProducts;
