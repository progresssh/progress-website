import Link from "next/link";
import Layout from "../components/layout";

export default function About() {
  const title = "About";
  return (
    <div className="bg-[rgb(9,9,9)] h-full">
      <Layout title={title}>
        <div className="p-8 bg-[rgb(9,9,9)]">
          <div className="flex w-full h-full">
            <div className=" md:w-4/12 flex flex-col">
              <Link href={"/"} className="w-full" aria-label="Back to homepage">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 4"
                  strokeWidth={1.0}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                  />
                </svg>
              </Link>

              <h1 className="text-[#FFD600] text-2xl font-quantico pt-4">
                About
              </h1>
              <main>
                <article className="text-gray-300 font-opensans space-y-3 pt-8 leading-normal text-[0.87rem]">
                  <p>[To be rewritten]</p>
                </article>
              </main>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
