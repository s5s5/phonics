import Head from "next/head";

const Fallback = () => (
  <>
    <Head>
      <title>✨ Phonics /fon-iks/</title>
    </Head>
    <h1>This is offline fallback page</h1>
    <h2>When offline, any page route will fallback to this page</h2>
    <p>
      <a href="https://phonics.misuisui.com" target="_blank">
        Go phonics.misuisui.com
      </a>
    </p>
  </>
);

export default Fallback;
