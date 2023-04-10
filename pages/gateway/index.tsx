import AuthProvider from "../../components/contexts/userContext";
import Form from "../../components/form";
import Layout from "../../components/layout";
import TextEditor from "../../components/textEditor";

const App = () => {
  return (
    <Layout title={"Gateway"}>
      <AuthProvider>
        <div className="flex h-full flex-col justify-center items-center bg-[#090909] text-gray-300">
          <div className="w-full mb-auto overflow-auto">
            <Form />
            <TextEditor />
          </div>
        </div>
      </AuthProvider>
    </Layout>
  );
};

export default App;
