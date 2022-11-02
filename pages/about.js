import Link from "next/link";
import Layout from "../components/layout";

export default function About() {
  const title = "About";
  return (
    <>
      <Layout title={title}>
        <div className="bg-[#090909] h-full p-8">
          <div className="md:w-4/12">
            <Link href={"/"} aria-label="Back to homepage">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                  />
                </svg>
              </a>
            </Link>
            <h1 className="text-[#FFD600] text-2xl font-quantico pt-4">
              About
            </h1>
            <main>
              <article className="text-gray-300 font-opensans space-y-3 pt-8 leading-normal text-[0.87rem]">
                <p>
                  Progress is my attempt at getting better at the things that
                  are meaningful to me and to strive for life.
                </p>
                <p>
                  This is my heartfelt desire to go as far as I can, to find my
                  place in the world. To shine as brightly as I can.
                </p>
                <p>
                  There&apos;s so much in store for the future and I&apos;ll
                  work hard to see mine come into form with everything I&apos;ve
                  got.
                </p>
              </article>
            </main>
          </div>
        </div>
      </Layout>
    </>
  );
}
