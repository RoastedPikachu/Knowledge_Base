import Hello from "./content/hello.mdx";

import TheHeader from "@/widgets/header/TheHeader";

export default function Home() {
  return (
    <>
      <TheHeader/>

      <Hello/>
    </>
  );
}
