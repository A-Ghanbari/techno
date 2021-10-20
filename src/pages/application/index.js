import React from "react";
import Category from "../../components/Category/Category";
import { fetchEntries } from "../../helper/contentful";
import Head from "next/head";
export default function Application({ items }) {
  return (
    <div>
      <Head>
        <title>نرم افزار</title>
      </Head>
      <Category items={items} cat="نرم افزار" />
    </div>
  );
}
export async function getServerSideProps() {
  const { items } = await fetchEntries("techno");

  return { props: { items } };
}
