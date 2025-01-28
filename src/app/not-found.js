import Link from "next/link";
import Header from "./sections/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <div>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </>
  );
}
