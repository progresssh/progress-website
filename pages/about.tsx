import Link from "next/link";
import Layout from "../components/layout";

const TITLE = "About";

const SOCIAL_LINKS = [
  {
    name: "Twitter",
    href: "https://twitter.com/progress_sh_",
    description: "Best place to keep yourself updated on whatever I'm up to",
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@progressSH/",
    description:
      "I haven't made videos yet, but I very much intend on making devlogs",
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/progress.sh",
    description: "Alternative to twitter",
  },
  {
    name: "Twitch",
    href: "https://twitch.tv/progress_sh",
    description: "I sometimes stream art or programming there",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/progress_sh_/",
    description: "Twitter but I post stories there",
  },
  {
    name: "Github",
    href: "https://github.com/progresssh",
    description: "Gaze upon my (dubious) code",
  },
  {
    name: "Discord",
    href: "https://discord.gg/Xp6HZXN6vq",
    description: "My discord server",
  },
  {
    name: "star@progress.sh",
    href: "mailto:star@progress.sh",
    description: "Actual best place to keep yourself updated, I love conversations!",
  },
];

const PROJECT_LINKS = [
  {
    name: "Progress",
    href: "https://www.progress.sh/",
    description: "Ramblings of a wanderer finding their way",
  },
  {
    name: "Second Sight (shutdown)",
    href: "",
    description:
      "Journaling website with an AI (GPT-3 API) that is a tad over-enthusiastic",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[rgb(9,9,9)] h-full">
      <Layout title={TITLE}>
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
              <div className="flex flex-col  ">
                <div className="md:w-full md:pr-4">
                  <div>
                    <div className="py-4">
                      <h1 className="text-[#FFD600] text-2xl  font-thin font-quantico ">
                        About
                      </h1>
                      <p className="text-gray-300 font-opensans leading-normal text-[0.87rem]">
                        Hi!
                      </p>
                    </div>


                    <div className="md:flex md:flex-col text-gray-300 font-opensans space-y-6 leading-normal text-[0.87rem] ">
                      <div>
                        <h3 className="text-[#FFD600] text-lg font-normal  font-quantico pb-3">
                          Socials
                        </h3>
                        <nav>
                          <ul className="space-y-4 ">
                            {SOCIAL_LINKS.map((link, i) => {
                              return (
                                <li key={i}>
                                  <Link
                                    href={link.href}
                                    className="text-[#FFD600] hover:underline font-bold italic"
                                    aria-label={`${link.name} link`}
                                    target="_blank"
                                  >
                                    {link.name}
                                  </Link>
                                  <span className="ml-2 text-gray-300 font-normal">
                                    - {link.description}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </nav>
                      </div>
                      <div>
                        <h3 className="text-[#FFD600] text-lg font-normal  font-quantico py-3">
                          Projects
                        </h3>
                        <nav>
                          <ul className="space-y-4 ">
                            {PROJECT_LINKS.map((link, i) => {
                              return (
                                <li key={i}>
                                  <Link
                                    href={link.href}
                                    className="text-[#FFD600] hover:underline font-bold italic"
                                    aria-label={`${link.name} link`}
                                    target="_blank"
                                  >
                                    {link.name}
                                  </Link>
                                  <span className="ml-2 text-gray-300 font-normal">
                                    - {link.description}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
