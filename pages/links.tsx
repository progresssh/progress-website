import Link from "next/link";
import Layout from "../components/layout";

const TITLE = "Links";

const WEBRING_LINKS = [
  {
    name: "apt-get",
    href: "https://apt-get.xyz/",
  },
  {
    name: "willow",
    href: "https://willow.phantoma.online/",
  },
];

export default function LinkPage() {
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
                    <h1 className="text-[#FFD600] text-2xl  font-thin font-quantico py-4">
                      Links
                    </h1>
                    <div className="md:flex md:flex-col text-gray-300 font-opensans space-y-6 leading-normal text-[0.87rem] ">
                      <div>
                        <h3 className="text-[#FFD600] text-lg font-normal  font-quantico pb-3">
                          Webring - Interesting people, friends, places.
                        </h3>
                        <nav>
                          <ul className="flex space-x-4">
                            {WEBRING_LINKS.map((link, i) => {
                              return (
                                <li key={i}>
                                  <Link
                                    href={link.href}
                                    className="text-[#ff4870] hover:text-[#ffffff] transition ease-in-out delay-50 font-bold italic"
                                    aria-label={`${link.name} link`}
                                    target="_blank"
                                  >
                                    {`✦ ${link.name}`}
                                  </Link>
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
