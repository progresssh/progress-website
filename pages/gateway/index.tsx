import AuthProvider from "../../components/contexts/userContext";
import Form from "../../components/form";
import Layout from "../../components/layout";
import TextEditor from "../../components/TextEditor";

const App = () => {
  return (
    <Layout title={"Gateway"}>
      <AuthProvider>
        <div className="flex h-full w-full flex-col justify-center items-center p-2 overflow-auto bg-[#090909] text-gray-300">
          <video
            src={require("../../public/star.mp4")}
            muted
            autoPlay
            loop
            playsInline
            height={128}
            width={128}
          />
          <Form />

          <TextEditor />
        </div>
      </AuthProvider>
    </Layout>
  );
};

export default App;
