import Link from "next/link";

type SpeakerProps = {
  first: string;
  last: string;
  selectedFn: (name: string) => void;
};
export function Speaker({ first, last, selectedFn }: SpeakerProps) {
  return (
    <h2 className="speaker-block speaker">
      <Link href={`/${first}`}>
        <a
          onMouseOut={() => selectedFn("")}
          onMouseOver={() => selectedFn(first)}
          onFocus={() => selectedFn(first)}
          onBlur={() => selectedFn("")}
        >
          <span className="drop">{first} </span>
          <span className="nope">{last}</span>
        </a>
      </Link>
    </h2>
  );
}
