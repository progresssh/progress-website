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
                        href="https://github.com/progresssh"
                        target="_blank"
                        aria-label="Github"
                        className="border-2 rounded-md p-2 border-[#FFD600]"
                      >
                        Github
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
                        Progress is my pursuit at getting better at the things
                        that are meaningful to me and my struggle to exist.
                      </p>

                      <p>
                        I&apos;ve been meaning to be a programmer, a
                        mathematician, an artist, and much more! All of these
                        things I&apos;ve been letting get past me, convincing
                        myself they&apos;re unattainable due to the lack of will
                        and presence I have for my life.
                        <br />
                        Spending my life imagining and daydreaming about lives
                        where I led myself to get there, instead of simply
                        finding out.
                      </p>

                      <p>
                        2021 was the year since I got away from my bedroom
                        lethargy and started to work on this project. I found
                        myself in bad shape, unable to focus for a little more
                        than 30 minutes, lacking in energy, battling against the
                        vicious chains wanting to get me back into the comfort
                        of forgetting my existence. I&apos;m getting better and
                        I wish to show myself and the world the constant
                        improvement of my system, my life.
                      </p>

                      <p>
                        I fell multiple times, and will fall again. And now that
                        I have learned to stand back up, I will do so as many
                        times as necessary.
                      </p>

                      <p>
                        I&apos;ll show you everything, failures and success,
                        every part of the struggle.
                        <br />
                        I&apos;ll walk towards that star, showing the way to my
                        aspiration. Symbol of the misery & bliss which makes it
                        shine.
                      </p>

                      <p>
                        With such grand goals it is easy to look to an abstract
                        future, wishfully thinking it will be realized.
                        <br />
                        However, &quot;one day&quot; does not exist, the future
                        is only materialized by your actions.
                        <br />
                        At this moment, this time, I hold all the keys. The
                        littest of the steps I earn will pave the way for the
                        next ones.
                      </p>

                      <p>The system will be kept running.</p>
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
