import { useAuth } from "./contexts/userContext";

const Display = () => {
  const { currentUser, isLoading } = useAuth();

  if (isLoading) return <h1>Entering...</h1>;

  return (
    <h1 className="font-rajdhani">
      {currentUser ? `Logged In.` : "GATEWAY - Reach out, as far as you can."}
    </h1>
  );
};

export default Display;
