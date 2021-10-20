import React from "react";
import { fetchEntry } from "../helper/contentful";

import SinglePage from "../components/SinglePage/SinglePage";

export default function PostId({ fields }) {
  return (
    <>
      <SinglePage fields={fields} />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { postId } = params;

  const { fields } = await fetchEntry(postId);

  return { props: { fields } };
}
