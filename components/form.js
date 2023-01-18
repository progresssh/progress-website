import { useState } from "react";
import { useAuth } from "./contexts/userContext";

const Form = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const { signIn, isProgress } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setIsSubmitting(true);
    try {
      await signIn(email, password);
    } catch (error) {
      setError(error);
    }
    setIsSubmitting(false);
  };

  return (
    <div>
      {!isProgress && (
        <form
          className=" font-quantico overflow-auto"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex flex-col space-y-4 pt-2 md:flex-col md:w-2/6 justify-left">
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                className="text-black"
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                className="text-black"
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <p>{error ? "Error: Wrong Credentials" : ""}</p>
            </div>
          </div>

          <div className="pt-4">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Entering Database..." : "Sign In"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
