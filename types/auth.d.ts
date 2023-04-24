export interface AuthInterface {
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User>>;
  auth: Auth;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  postDocument: (post: JSONContent) => Promise<void>;
  isProgress: boolean;
}
