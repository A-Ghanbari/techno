import CatNews from "../components/Home/CatNews";
import LastPosts from "../components/Home/LastPosts";
import { fetchEntries, fetchEntry } from "../helper/contentful";
import Head from "next/head";

export default function Home({ items, post }) {
  console.log(items);
  return (
    <>
      <Head>
        <title>دیجی میجی | صفحه اصلی</title>
        <meta name="description" content="اخبار روز فناوری" />
      </Head>
      <LastPosts items={items} />
      <CatNews items={items} />
    </>
  );
}

export async function getServerSideProps() {
  const { items } = await fetchEntries("techno");
  const post = await fetchEntries("category");
  return { props: { items, post } };
}
