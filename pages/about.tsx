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
              <Link
                href={"/"}
                className="w-full"
                aria-label="Back to homepage"
                legacyBehavior
              >
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
              </Link>
              <div className="flex flex-col  ">
                <div className="md:w-4/12 md:pr-4">
                  <h2 className="text-[#FFD600] text-2xl font-quantico pt-4">
                    Socials
                  </h2>
                  <div className="space-y-8 md:flex md:flex-col text-gray-300 font-opensans font-bold  pt-4 leading-normal text-[0.87rem] ">
                    <div className="space-x-4">
                      <Link
                        href="https://discord.gg/Xp6HZXN6vq"
                        className="border-2 rounded-md p-2 border-[#FFD600]"
                        aria-label="Discord"
                        target="_blank"
                      >
                        Discord
                      </Link>
                      <Link
                        href="https://progresssh.substack.com/"
                        target="_blank"
                        aria-label="Newsletter"
                        className="border-2 rounded-md p-2 border-[#FFD600]"
                      >
                        Newsletter
                      </Link>
                    </div>
                    <div className="space-x-4">
                      <Link
                        href="https://twitter.com/progress_sh_"
                        target="_blank"
                        aria-label="Twitter"
                        className="border-2 rounded-md p-2 border-[#FFD600]"
                      >
                        Twitter
                      </Link>
                      <Link
                        href="https://www.instagram.com/progress_sh_/"
                        target="_blank"
                        aria-label="Instagram"
                        className="border-2 rounded-md p-2 border-[#FFD600]"
                      >
                        Instagram
                      </Link>
                      <Link
                        href="https://twitch.tv/progress_sh"
                        target="_blank"
                        aria-label="Twitch"
                        className="border-2 rounded-md p-2 border-[#FFD600]"
                      >
                        Twitch
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-[#FFD600] text-2xl font-quantico pt-4">
                    About
                  </h1>
                  <main>
                    <article className="text-gray-300 font-opensans space-y-3 pt-8 leading-normal text-[0.87rem]">
                      <p>
                        Progress is my pursuit at living life to its fullest.
                      </p>

                      <p>
                        I want to reach a higher place, to find happiness,
                        meaning and make great things.
                      </p>

                      <p>
                        With such grand goals it is easy to look to an abstract
                        future, wishfully thinking it will be realized.
                        <br />
                        However, &quot;one day&quot; does not exist, the future
                        is only materialized by your actions.
                        <br />
                        At this moment, this time, you hold all the keys. The
                        littest of your steps will pave the way for the next
                        ones.
                      </p>

                      <p>
                        Don&apos;t let go. <br />
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
                        I&apos;ll show you everything, failures and success,
                        every part of the struggle.
                        <br />
                        I&apos;ll walk towards that star, symbol of all my
                        aspirations.
                      </p>

                      <p>
                        You are infinite, you can go as far as you&rsquo;d like.
                      </p>
                    </article>
                  </main>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
