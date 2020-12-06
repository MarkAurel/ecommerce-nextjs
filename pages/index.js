import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      Olá mundo!{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
