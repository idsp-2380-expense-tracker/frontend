import { SignInButton as ClerkSignInButton, useClerk, useUser } from "@clerk/clerk-react";

export function useAuthService() {
    const { openUserProfile } = useClerk();
    const { isSignedIn, user } = useUser();
    return { openUserProfile, isSignedIn, user };
}

export const SignInButton = ClerkSignInButton;