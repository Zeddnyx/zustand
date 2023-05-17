import { useStore } from "../stores/store";
import { shallow } from "zustand/shallow";
import { useState } from "react";

export default function Username() {
  const [username, setUsername] = useState("");
  const [user, getUser] = useStore((state) => {
    console.log("get User from github exec");
    return [state.user, state.getUser];
  }, shallow);

  return (
    <section>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => getUser(username)}>GetUser</button>
      <p>User: {user.login}</p>
    </section>
  );
}
