import { Loader } from "@mantine/core";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100dvh",
        paddingTop: "0",
        gap: "1rem",
      }}
    >
      <Loader color="#9150f5" />
      <h1>Loading user data...</h1>
    </div>
  );
}
