/* eslint-disable @typescript-eslint/no-explicit-any */
import PlaygroundDetails from "@/components/PlaygroundDetails/PlaygroundDetails";
import client from "@/lib/contentful";

export default async function Spielfeld(props: any) {

  const { params } = props;
  const { spielfeld } = await params;

  const queryOptions = {
    content_type: "spielfelder",
    "fields.spielfeldSlug[match]": spielfeld,
  };

  const spielfeldData = await client.getEntries(queryOptions);

  return (
    <div className="">
        <PlaygroundDetails data={spielfeldData.items[0]}/>
    </div>
  );
}
