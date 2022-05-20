import Head from "next/head";

const Layout = ({ children, title }: { children: any; title: any }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <section className="flex flex-col justify-center bg-[#0f172a] items-center min-h-screen py-8 text-white">
        {children}
      </section>
    </>
  );
};

export default Layout;
