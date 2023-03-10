import Head from "next/head";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="description"
          content="Progress.sh · A journey to strive for life. Progress is my attempt at getting better at the things that are meaningful to me and to strive for life. This is my heartfelt desire to go as far as I can, to find my place in the world. To shine as brightly as can. There's so much in store for the future and I'll work hard to see mine come into form with everything I've got."
        />
      </Head>
      {children}
    </>
  );
};

export default Layout;
