import Category from "../../components/Category/Category";
import { fetchEntries } from "../../helper/contentful";
import Head from "next/head";
export default function Game({ items }) {
  return (
    <div>
      <Head>
        <title>بازی</title>
      </Head>
      <Category items={items} cat="بازی" />
    </div>
  );
}
export async function getServerSideProps() {
  const { items } = await fetchEntries("techno");

  return { props: { items } };
}
