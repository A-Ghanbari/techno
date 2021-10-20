import React from "react";
import { fetchEntry } from "../helper/contentful";
import Head from "next/head";
import SinglePage from "../components/SinglePage/SinglePage";

export default function PostId({ fields }) {
  return (
    <>
      <Head>
        <title>{fields.title}</title>
        <meta name="description" content={fields.overview} />
      </Head>
      <SinglePage fields={fields} />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { postId } = params;

  const { fields } = await fetchEntry(postId);

  return { props: { fields } };
}
