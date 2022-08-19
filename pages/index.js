import Foods from "../comp/foods/Foods";
import NavBar from "../comp/navbar/Index";
import TopRatedProducts from "../comp/topRated/TopRatedProducts";
import HomeLayout from "../layoute/homeLayout";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  return (
    <div>
      <HomeLayout data={data}>
        <Foods data={data} />
      </HomeLayout>
    </div>
  );
}
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");

  const data = await res.json();

  return { props: { data } };
};
