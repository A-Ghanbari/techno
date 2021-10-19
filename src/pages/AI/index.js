import Category from "../../components/category/Category";
import { fetchEntries } from "../../helper/contentful";
export default function AI({ items }) {
  return (
    <div>
      <Category items={items} cat="هوش مصنوعی" />
    </div>
  );
}
export async function getServerSideProps() {
  const { items } = await fetchEntries("techno");

  return { props: { items } };
}
