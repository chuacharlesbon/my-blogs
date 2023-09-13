import Head from 'next/head';
import Link from 'next/link';

export default function FirstPost() {
    return <div>
        <Head>
            <title>Test Title | Page 1</title>
            <link rel="icon" href="/r-logo.jpg" />
            <meta property="og:title" content="The Page 1" />
        <meta property="og:description " content="This is the page 1" />
        <meta property="og:image" content="https://static.wixstatic.com/media/c7002f_c4fe5fdb189544e3966e10b4c4623d8b~mv2.png/v1/fill/w_672,h_346,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Page-One_Logo_Frei%202%20Kopie.png" />
        </Head>
        <h1>
            Read <Link href="/test/test_route_2">this page!</Link> Go <Link href="/">home!</Link>
        </h1>
    </div>;
}