import Link from "next/link";

export default function PageNotFound() {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="">
            <h1 className="page-not-found-title">
              4<span className="">0</span>4
            </h1>
            <p className="">
              Oops. The page you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href="/" className="">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}