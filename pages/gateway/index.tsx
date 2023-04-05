import AuthProvider from "../../components/contexts/UserContext";
import Display from "../../components/display";
import Form from "../../components/form";
import Layout from "../../components/layout";
import TextEditor from "../../components/textEditor";

const App = () => {
  return (
    <Layout title={"Gateway"}>
      <AuthProvider>
        <div className="flex w-full h-full flex-col justify-center items-center bg-[#090909] text-gray-300">
          <div className="md:w-5/12 w-full p-8 mb-auto overflow-auto">
            <Form />
            <div className="pt-4 pb-4">
              <Display />
            </div>
            <TextEditor />
          </div>
        </div>
      </AuthProvider>
    </Layout>
  );
};

export default App;
