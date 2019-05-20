import Link from "next/link";

type SpeakerProps = {
  first: string;
  last: string;
  selectedFn: (name: string) => void;
};
export function Speaker({ first, last, selectedFn }: SpeakerProps) {
  return <h2 onMouseOut={() => selectedFn("")} onMouseOver={() => selectedFn(first)} className="speaker-block speaker">
    <Link href={`/${first}`}>
      <a>
        <span className="drop">{first} </span>
        <span className="nope">{last}</span>
      </a>
    </Link>
  </h2>;
}
