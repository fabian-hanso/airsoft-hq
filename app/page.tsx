import BlogOverview from "@/components/Blog/BlogOverview";
import EventOverview from "@/components/Events/EventOverview";
import SocialBreaker from "@/components/SocialBreaker/SocialBreaker";
import VideoHero from "@/components/VideoHero/VideoHero";

export default function Home() {

  return (
    <div className="">
      <VideoHero />
      <BlogOverview />
      <SocialBreaker />
      <EventOverview />
      <div
        className="fussballde_widget"
        data-id="e25a76dc-7f41-48e2-84a3-f4c252e7b4e2"
        data-type="table">
      </div>
    </div>
  );
}
