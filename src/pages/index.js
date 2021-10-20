import CatNews from "../components/Home/CatNews";
import LastPosts from "../components/Home/LastPosts";
import { fetchEntries, fetchEntry } from "../helper/contentful";

export default function Home({ items, post }) {
  console.log(post);

  return (
    <>
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
