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
    </div>
  );
}
