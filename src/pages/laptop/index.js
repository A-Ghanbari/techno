import Category from "../../components/category/Category";
import { fetchEntries } from "../../helper/contentful";

export default function Laptop({ items }) {
  return (
    <div>
      <Category items={items} cat="لپ تاپ" />
    </div>
  );
}

export async function getServerSideProps() {
  const { items } = await fetchEntries("techno");

  return { props: { items } };
}