import Link from 'next/link';

export default function FirstPost() {
    return <h1>
    Read <Link href="/test/test_route_2">this page!</Link> Go <Link href="/">home!</Link>
  </h1>;
}