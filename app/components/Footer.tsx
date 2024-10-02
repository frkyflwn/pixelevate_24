import Link from 'next/link';

export function Footer() {

  return (
    <footer><Link href="/impressum">Impressum&nbsp;</Link> | <Link href="/datenschutz">&nbsp;Datenschutz</Link></footer>
  );
}
