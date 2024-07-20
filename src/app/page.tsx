import BookDemo1 from "../../components/BookDemo1";
import BookDemo2 from "../../components/BookDemo2";
import Hero from "../../components/Hero";
import Paytrack from "../../components/Paytrack";
import WhyPaytrack from "../../components/WhyPaytrack";

export default function Home() {
  return (
    <>
      <Hero />
      <Paytrack />
      <BookDemo1 />
      <WhyPaytrack />
      <BookDemo2 />
    </>
  );
}
