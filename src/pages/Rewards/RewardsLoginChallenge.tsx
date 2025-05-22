import { ChallengeType } from "../../interfaces/types";
import { Button, Progress } from "@mantine/core";

export enum Status {
  Incomplete = "incomplete",
  Ready = "ready",
  Collected = "collected",
}

interface LoginChallengeProps {
  type: ChallengeType;
  title: string;
  gain: number;
  current: number;
  total?: number;
  openUntil?: string;
  status: Status;
  onCollect?: (type: ChallengeType) => void;
}

export default function LoginChallenge(c: LoginChallengeProps) {
  return (
    <div>
      <div id="challenge-title">
        <h3>{c.title}</h3>
        <p id="gain-points">
          Gain <span style={{ fontWeight: "bold" }}>{c.gain} Points</span>
        </p>
      </div>

      {c.status === Status.Incomplete && c.total != null && (
        <>
          <Progress value={(+c.current / +c.total) * 100} />
          <span id="challenge-status">
            {c.current} / {c.total}
          </span>
        </>
      )}

      {c.status === Status.Ready && (
        <div id="collect-points-status">
          <p>Completed!</p>
          <Button id="collect-points-btn" onClick={() => c.onCollect?.(c.type)}>
            Collect Points
          </Button>
        </div>
      )}

      {c.status === Status.Collected && c.openUntil && (
        <p id="challenge-status">
          Open Until &nbsp;
          <span style={{ fontWeight: "bold" }}>{c.openUntil}</span>
        </p>
      )}
    </div>
  );
}
