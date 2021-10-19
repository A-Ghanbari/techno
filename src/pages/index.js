import { fetchEntries } from "../helper/contentful";

import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default function Home({ items }) {
  console.log(items);

  return (
    <div>
      {items.map((post) => {
        // if (post.fields.category.fields.category === "لپ تاپ") {
        return (
          <div key={post.sys.id}>
            <h3 style={{ color: "red" }}>{post.fields.title}</h3>
            <img src={post.fields.image.fields.file.url} />
            <div
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(post.fields.content),
              }}
            />
            <div>{post.fields.category.fields.category}</div>
          </div>
        );
        // }
      })}
    </div>
    // <div>h</div>
  );
}

export async function getServerSideProps() {
  const { items } = await fetchEntries("techno");

  return { props: { items } };
}
