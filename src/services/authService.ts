import {
    SignInButton as ClerkSignInButton,
    SignOutButton as ClerkSignOutButton,
    useClerk,
    useUser,
} from "@clerk/clerk-react";

export function useAuthService() {
    const { openUserProfile, signOut } = useClerk();
    const { isSignedIn, user } = useUser();
    return { openUserProfile, signOut, isSignedIn, user };
}

// UI Components
export const SignInButton = ClerkSignInButton;
export const SignOutButton = ClerkSignOutButton;