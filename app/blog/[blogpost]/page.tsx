/* eslint-disable @typescript-eslint/no-explicit-any */
import Post from "@/components/BlogPost/BlogPost";
import client from "@/lib/contentful";

// type BlogPageProps = {
//     params: {
//       blogpost: string;
//     }
//   };

export default async function BlogPost(props: any) {

  const { params } = props;
  const { blogpost } = params;

  const queryOptions = {
    content_type: "blogbeitrag",
    "fields.slug[match]": blogpost,
  };

  const post = await client.getEntries(queryOptions);

  return (
    <div className="">
        <Post post={post.items[0]}/>
    </div>
  );
}
