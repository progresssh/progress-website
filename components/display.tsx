import { useAuth } from "./contexts/UserContext";

const Display = () => {
  const { currentUser } = useAuth();

  return (
    <h1 className="font-rajdhani">
      {currentUser ? `Logged In.` : "GATEWAY - Reach out, as far as you can."}
    </h1>
  );
};

export default Display;
