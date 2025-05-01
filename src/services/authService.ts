import {
    SignInButton as ClerkSignInButton,
    SignOutButton as ClerkSignOutButton,
    SignIn,
    useClerk,
    useUser,
} from "@clerk/clerk-react";

export function useAuthService() {
    const { openSignIn, openUserProfile, signOut } = useClerk();
    const { isSignedIn, user } = useUser();
    return { openSignIn, openUserProfile, signOut, isSignedIn, user };
}

// UI Components
export default SignIn;
export const SignInButton = ClerkSignInButton;
export const SignOutButton = ClerkSignOutButton;