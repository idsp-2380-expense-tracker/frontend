import { OnBackProps } from "../../interfaces/uiProps";

export default function Insight({ onBack }: OnBackProps) {
  return (
    <>
      <h1>TEST_INSIGHT</h1>
      <button onClick={onBack}>TEST_BACK</button>
    </>
  );
}
