import React from "react";
import Category from "../../components/category/Category";
import Head from "next/head";
import { fetchEntries } from "../../helper/contentful";

export default function index({ items }) {
  return (
    <div>
      <Head>
        <title>موبایل</title>
      </Head>
      <Category items={items} cat="موبایل" />
    </div>
  );
}
export async function getServerSideProps() {
  const { items } = await fetchEntries("techno");

  return { props: { items } };
}
