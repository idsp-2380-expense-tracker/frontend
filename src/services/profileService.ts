import { ApiService } from "./apiService";

export class ProfileService extends ApiService {
  // public async updateUserProfile(firstName: string, lastName: string, email: string) {
  //   const payload = { firstName, lastName, email };
  //   return this.postRaw("user/edit", payload);
  // }

  public async updateUserProfile(user: any, firstName: string, lastName: string) {
    if (!user) return;

    const fn = firstName.trim() || user.firstName;
    const ln = lastName.trim() || user.lastName;
    await user.update({ firstName: fn, lastName: ln });

    // const currentEmail = user.primaryEmailAddress?.emailAddress || "";
    // const emailInput = email.trim();
    // if (emailInput && emailInput !== currentEmail) {
    //   const newEmail = await user.createEmailAddress({ email: emailInput });
    //   await user.update({ primaryEmailAddressId: newEmail.id });
    // }
    await user.reload();
  }
}

export const profileService = new ProfileService();