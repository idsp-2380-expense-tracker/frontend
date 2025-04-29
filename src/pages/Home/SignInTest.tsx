import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function SignInTest() {
  return (
    <>
      <h1>Clerk Test</h1>
      <SignedIn>
        <UserButton />
      </SignedIn>

      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
  );
}

export default SignInTest;