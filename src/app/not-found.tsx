import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="container not-found">
      <div className="eyebrow">404 / SIGNAL NOT FOUND</div>
      <h1>This path isn’t connected.</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link href="/" className="button primary">
        Return to portfolio →
      </Link>
    </main>
  );
}
