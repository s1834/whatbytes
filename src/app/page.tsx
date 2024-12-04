import Header from "@/app/header/page";
import SideNav from "@/app/sidenav/page";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-neutral-950">
      <Header />
      <SideNav />
    </div>
  );
}
