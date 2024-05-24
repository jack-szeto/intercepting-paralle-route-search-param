import NavBar from "@/components/nav-bar";

export default function Home() {
  return (
    <main
      className={
        "flex flex-col items-center justify-center w-screen h-screen bg-gray-100"
      }
    >
      {/* navigation */}
      <NavBar />
    </main>
  );
}
