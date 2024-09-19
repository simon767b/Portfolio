import Intro from "../Components/Intro";
import Picture from "../Components/Picture";
import Projects from "../Components/Projects";
import Bio from "../Components/Bio";
import Contact from "../Components/Contact";
import Some from "../Components/Some";
import { Helmet } from "react-helmet-async";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="This is the home page of my portfolio."
        />
      </Helmet>

      <Intro />

      <Picture />

      <Projects />

      <Bio />

      <Contact />

      <Some />
    </>
  );
}
