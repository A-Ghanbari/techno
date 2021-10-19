import React from "react";
import Category from "../../components/category/Category";
import { fetchEntries } from "../../helper/contentful";

export default function index({ items }) {
  return (
    <div>
      <Category items={items} cat="موبایل" />
    </div>
  );
}
export async function getServerSideProps() {
  const { items } = await fetchEntries("techno");

  return { props: { items } };
}
