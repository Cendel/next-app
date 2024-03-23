import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>New Project</h1>
      <Link href="/users">Users</Link>
    </main>
  );
}
