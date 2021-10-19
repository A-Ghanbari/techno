import * as SDK from "contentful";

const contentful = SDK.createClient({
  space: "b4tfquwms68l",
  accessToken: "P6x90b4fjEDTfpa5UOstGUJnZ73oyv3AvXZONXnFXmE",
});

export async function fetchEntries(content) {
  const entries = await contentful.getEntries({
    content_type: `${content}`,
  });
  if (entries.items) return entries;
  // console.log(`Error getting Entries for ${contentType.name}.`);
}
// export async function fetchContent() {
//   const contents = await contentful.getContentTypes();
//   return contents;
// }
export default { fetchEntries };
