import Head from 'next/head';
import Link from 'next/link';

export default function SecondPost() {
    return <div>
        <Head>
            <title>Test Title | Page 2</title>
            <link rel="icon" href="/s-logo.png" />
            <meta property="og:title" content="The Page 2" />
            <meta property="og:description " content="This is the page 2" />
            <meta property="og:image" content="https://i.ytimg.com/vi/IiNDgmq18Ks/maxresdefault.jpg" />
        </Head>
        <h1>
            Go <Link href="/test_route">back!</Link> Go <Link href="/">home!</Link>
        </h1>
    </div>;
}