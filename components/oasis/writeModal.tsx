import { Dialog } from "@headlessui/react";
import { getUnixTime } from "date-fns";
import { addDoc, collection } from "firebase/firestore";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { db } from "../../firebase";
import PlainTextEditor from "../plainText";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

export default function WriteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const [justPosted, setJustPosted] = useState(false);

  const inputRef = useRef();

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const date = new Date();
    const time = getUnixTime(date);
    

    try {
      setIsLoading(true);

      await addDoc(collection(db, "oasis"), {
        name: name,
        content: text,
        time: time,
      });

      setIsLoading(false);
      setJustPosted(true);
      localStorage.setItem('star', 'true');
      setText(initialValue);
      setName("");
      setIsOpen(false);
    } catch (error) {
      console.error("Error adding document:", error);

      setIsLoading(false);
      setJustPosted(null);
      setText(initialValue);
      setName("");
      setIsOpen(false);
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <>
      <button
        type="button"
        className="ml-4 font-quantico text-lg"
        onClick={() => setIsOpen(true)}
      >
        [ Write ]
      </button>
      {justPosted ? (
        <div className="ml-4 font-quantico text-sm italic text-green-700">
          <p>
            Your message was heard, it will be inscribed here. Please reload in
            a moment.
          </p>
        </div>
      ) : justPosted === null ? (
        <div className="ml-4 font-quantico text-sm italic text-red-700">
          <p>
            Your message has failed to reach us, you may try again. Please
            contact <a href="mailto:star@progress.sh">star@progress.sh</a> if
            the issue persists.
          </p>
        </div>
      ) : (
        ""
      )}
      <Dialog
        initialFocus={inputRef}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/90 ">
          <div className="fixed flex items-center justify-center p-4 w-full h-full">
            <Dialog.Panel className={"text-white w-full max-w-lg md:h-3/4"}>
              <div className="flex items-center ">
                <Dialog.Title
                  className={"justify-self-end font-quantico text-base"}
                >
                  WRITE
                </Dialog.Title>
                <button className="ml-auto" onClick={() => setIsOpen(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 md:h-4 md:w-4 align-self-center "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div className="border-2 border-solid p-3.5 ">
                <form onSubmit={(e) => handleForm(e)}>
                  <div className="mb-4 font-quantico text-base">
                    <input
                      type="text"
                      ref={inputRef}
                      value={name}
                      placeholder={"Name"}
                      required
                      className="bg-black/0 outline-none"
                      onChange={(e) => handleNameChange(e)}
                    />
                  </div>
                  <div className="cursor-text font-quantico text-base">
                    <PlainTextEditor setText={setText} text={text} />
                  </div>
                  <div className="mt-8 font-quantico text-base">
                    <button type="submit">
                      {isLoading ? "Sending..." : "Send"}
                    </button>
                  </div>
                </form>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
