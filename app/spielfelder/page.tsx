import PlaygroundOverview from "@/components/PlaygroundOverview/PlaygroundOverview";
import SubPageImageHeader from "@/components/SubPageImageHeader/SubPageImageHeader";
import client from "@/lib/contentful";

export default async function Spielfelder() {

  const queryOptions = {
    content_type: "spielfelder",
  };

  const spielfeldData = await client.getEntries(queryOptions);

  return (
    <div className="">
      <SubPageImageHeader />
      <PlaygroundOverview spielfeldData={spielfeldData}/>
    </div>
  );
}
