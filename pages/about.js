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
                <p>Progress is my pursuit at living life to its fullest.</p>

                <p>
                  I want to reach a higher place, to find happiness, meaning and
                  make great things.
                </p>

                <p>
                  With such grand goals it is easy to look to an abstract
                  future, wishfully thinking it will be realized.
                  <br />
                  However, &quot;one day&quot; does not exist, the future is
                  only materialized by your actions.
                  <br />
                  At this moment, this time, you hold all the keys. The littest
                  of your steps will pave the way for the next ones.
                </p>

                <p>
                  Don&apos; let go. <br />
                  Don&apos;t forget.
                  <br />
                  Walk towards the future.
                </p>

                <p>
                  Find out,
                  <br />
                  All the beautiful things waiting there,
                  <br />
                  All the painful things that&apos;ll gaze back upon you.
                  <br />
                  Who you are now is only a small subset of all the people
                  you&apos;ll ever be.
                  <br />
                  Live as you are while you&apos;re here.
                </p>

                <p>
                  I&apos;ll show you everything, failures and success, every
                  part of the struggle.
                  <br />
                  I&apos;ll walk towards that star, symbol of all my
                  aspirations.
                </p>

                <p>You are infinite, you can go as far as you&rsquo;d like.</p>
              </article>
            </main>
          </div>
        </div>
      </Layout>
    </>
  );
}
