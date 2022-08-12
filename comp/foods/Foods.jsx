import FooodsStyle from "../../styles/foods.module.css";
const Foods = ({ data }) => {
  console.log("log by foods", data.drinks);
  return (
    <div className={FooodsStyle.foods_container}>
      <h1>hello foods page</h1>
      <div className={FooodsStyle.foods_content}>
        {data.drinks.map((data, index) => {
          return (
            <div className={FooodsStyle.foods_item} key={index}>
              <div>
                <img
                  style={{ width: "100%" }}
                  src={data.strDrinkThumb}
                  alt=""
                />
              </div>
              <div style={{ padding: "20px" }}>
                <p className={FooodsStyle.food_item_name}>{data.strCategory}</p>
                <p>{data.strInstructionsDE?.slice(0, 50)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Foods;
