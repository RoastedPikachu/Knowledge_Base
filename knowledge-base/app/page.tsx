import Hello from "./content/hello.mdx";

import TheHeader from "@/widgets/header/TheHeader";
import SideBlockMenu from "@/widgets/sideBlockMenu/SideBlockMenu";

export default function Home() {
  return (
    <>
      <TheHeader />

      <main className="relative flex items-start w-full h-auto">
        <SideBlockMenu />

        <Hello />
      </main>
    </>
  );
}
