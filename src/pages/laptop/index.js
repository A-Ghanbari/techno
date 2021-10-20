import Category from "../../components/category/Category";
import { fetchEntries } from "../../helper/contentful";
import Head from "next/head";
export default function Laptop({ items }) {
  return (
    <div>
      <Head>
        <title>لپ تاپ</title>
      </Head>
      <Category items={items} cat="لپ تاپ" />
    </div>
  );
}

export async function getServerSideProps() {
  const { items } = await fetchEntries("techno");

  return { props: { items } };
}
