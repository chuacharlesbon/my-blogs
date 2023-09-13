import Link from 'next/link';

export default function FirstPost() {
    return <h1>
    Go <Link href="/test_route">back!</Link> Go <Link href="/">home!</Link>
  </h1>;
}