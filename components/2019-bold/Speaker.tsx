type SpeakerProps = {
  first: string;
  last: string;
  selectedFn: (name: string) => void;
};
export function Speaker({ first, last, selectedFn }: SpeakerProps) {
  return <h2 onMouseOut={() => selectedFn("")} onMouseOver={() => selectedFn(first)} className="speaker-block speaker">
    <span className="drop">{first} </span>
    <span className="nope">{last}</span>
  </h2>;
}
