import { ApiService } from "./apiService";

export class ProfileService extends ApiService {
  public async updateUserProfile(params: {
    firstName?: string;
    lastName?: string;
    email?: string;
  }) {
    return this.postData("user/edit", params);
  }
}

export const profileService = new ProfileService();
