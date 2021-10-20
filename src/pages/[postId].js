import React from "react";
import { fetchEntry } from "../helper/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default function PostId({ fields }) {
  return (
    <div>
      {fields.title}
      <div
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(fields.content),
        }}
      />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { postId } = params;

  const { fields } = await fetchEntry(postId);

  return { props: { fields } };
}
