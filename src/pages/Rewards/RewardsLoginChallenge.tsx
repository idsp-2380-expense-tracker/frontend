export enum Status {
    Incomplete = "incomplete",
    Ready = "ready",
    Collected = "collected",
}

interface LoginChallengeProps {
    title: string;
    gain: number;
    current: number;
    total?: number;
    openUntil?: string;
    status: Status;
}
  
export default function LoginChallenge(c: LoginChallengeProps) {
  return (
    <div>
      <h3>{c.title}</h3>
      <p>Gain {c.gain} Points</p>

      {c.status === Status.Incomplete && c.total != null && (
        <span>{c.current} / {c.total}</span>
      )}

      {c.status === Status.Ready && (
        <button>Collect Points</button>
      )}

      {c.status === Status.Collected && c.openUntil && (
        <p>Open Until {c.openUntil}</p>
      )}
    </div>
  );
}