import Head from 'next/head';
import Link from 'next/link';

export default function SecondPost() {
    return <div>
        <Head>
            <title>Test Title | Page 2</title>
            <link rel="icon" href="/s-logo.jpg" />
            <meta property="og:title" content="The Rock" />
            <meta property="og:type" content="video.movie" />
            <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
            <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
        </Head>
        <h1>
            Go <Link href="/test_route">back!</Link> Go <Link href="/">home!</Link>
        </h1>
    </div>;
}