import Head from 'next/head';
import Link from 'next/link';

export default function FirstPost() {
    return <div>
        <Head>
            <title>Test Title | Page 1</title>
            <link rel="icon" href="/r-logo.jpg" />
            <meta property="og:title" content="The Rock" />
            <meta property="og:type" content="video.movie" />
            <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
            <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
        </Head>
        <h1>
            Read <Link href="/test/test_route_2">this page!</Link> Go <Link href="/">home!</Link>
        </h1>
    </div>;
}