import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="container px-6 py-12 md:px-12 md:py-16 lg:py-0 min-h-screen max-w-screen-xl">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <Main />
      </div>
    </div>
  );
}
