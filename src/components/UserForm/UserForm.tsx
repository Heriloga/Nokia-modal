import { FormEvent, useState } from "react";
import useGlobalModalContext from "../../hooks/useGlobalModalContext";

export interface UserFormProps {
  isLogin: boolean;
}

const UserForm = (props: UserFormProps) => {
  const { openModal, closeLastModal } = useGlobalModalContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState<null | boolean>(props.isLogin);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!password || !email) {
      return;
    }

    closeLastModal();

    if (!isLogin) {
      openModal({
        title: "Confirm your account",
        content: <p>Activation link sent to your e-mail address.</p>,
      });
    }
  };

  return (
    <div className="flex flex-col gap-2 items-center">
      <h1> {isLogin ? "Log In" : "Sign Up"} </h1>
      <form
        onSubmit={handleSubmit}
        className="flex gap-4 m-7 flex-col min-w-80"
      >
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-md p-2"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded-md p-2"
          required
        />
        <button
          type="submit"
          className={`p-2 rounded-md border-none bg-blue-600 text-lg text-white cursor-pointer
            hover:bg-blue-900`}
        >
          {isLogin ? "Log In" : "Create Account"}
        </button>
      </form>
      <button
        className={`p-2 rounded-md border text-sm text-black cursor-pointer hover:bg-gray-100`}
        onClick={() => setIsLogin((prev) => !prev)}
      >
        {isLogin ? "I don't have an account" : "I already have an account"}
      </button>
    </div>
  );
};

export default UserForm;
