export interface AuthInterface {
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User>>;
  auth: Auth;
  signIn: (email: any, password: any) => Promise<UserCredential>;
  postDocument: (post: any) => Promise<void>;
  isProgress: boolean;
}
