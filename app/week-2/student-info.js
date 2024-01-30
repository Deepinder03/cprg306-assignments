import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <p>Deepinder Kumar</p>
      <Link href="https://github.com/Deepinder03/cprg306-assignments.git">
        <a>Link to your GitHub repository</a>
      </Link>
    </div>
  );
}
