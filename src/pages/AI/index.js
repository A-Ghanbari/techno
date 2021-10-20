import Category from "../../components/Category/Category";
import Head from "next/head";
import { fetchEntries } from "../../helper/contentful";
export default function AI({ items }) {
  return (
    <div>
      <Head>
        <title>هوش مصنوعی</title>
      </Head>
      <Category items={items} cat="هوش مصنوعی" />
    </div>
  );
}
export async function getServerSideProps() {
  const { items } = await fetchEntries("techno");

  return { props: { items } };
}
