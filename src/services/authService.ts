import {
    SignInButton as ClerkSignInButton,
    SignOutButton as ClerkSignOutButton,
    SignIn,
    useAuth,
    useClerk,
    useUser
} from "@clerk/clerk-react";

export function useAuthService() {
    const { openSignIn, openUserProfile, signOut } = useClerk();
    const { getToken, isLoaded, isSignedIn } = useAuth();
    const { user } = useUser();

    return {
        openSignIn,
        openUserProfile,
        signOut,
        getToken,
        isLoaded,
        isSignedIn,
        user,
    };
}

// UI Components
export default SignIn;
export const SignInButton = ClerkSignInButton;
export const SignOutButton = ClerkSignOutButton;