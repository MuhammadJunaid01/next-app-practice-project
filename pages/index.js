import Foods from "../comp/foods/Foods";
import NavBar from "../comp/navbar/Index";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  return (
    <div>
      <Foods data={data} />
    </div>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(
    "http://www.thecocktaildb.com/api/json/v1/1/search.php?s"
  );

  const data = await res.json();

  return { props: { data } };
};
