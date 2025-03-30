/* eslint-disable @typescript-eslint/no-explicit-any */
import ErrorView from "@/components/Blog/ErrorView";
import Post from "@/components/BlogPost/BlogPost";
import client from "@/lib/contentful";
import { redirect } from "next/navigation";

// type BlogPageProps = {
//     params: {
//       blogpost: string;
//     }
//   };

export default async function BlogPost(props: any) {

  const { params } = await props;
  const { blogpost } = await params;

  const queryOptions = {
    content_type: "blogbeitrag",
    "fields.slug[match]": blogpost,
  };

  const post = await client.getEntries(queryOptions);

  if(!post.total > 0) {
    return(
      // Was passiert, wenn es den Blogbeitrag nicht gibt?
      // redirect("/blog")
      <ErrorView />
    )
  }

  return (
    <Post post={post.items[0]}/>
  );
}
