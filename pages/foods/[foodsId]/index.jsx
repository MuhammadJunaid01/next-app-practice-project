import React from "react";

const SingelFoods = ({ data }) => {
  console.log("single data", data);
  return (
    <div>
      <h1>hello</h1>
      <img src={data.img} alt="" />
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/products");

  const data = await res.json();
  const paths = data.map((food) => {
    return {
      params: { foodsId: `${food.id}` },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/products/${params.foodsId}`);

  const data = await res.json();
  return {
    props: { data },
  };
};
export default SingelFoods;
