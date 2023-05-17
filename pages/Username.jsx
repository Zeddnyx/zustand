import { useStore } from "../stores/store";
import { shallow } from "zustand/shallow";

export default function Username() {
  const [username, setUsername] = useStore((state) => {
    console.log("username exec");
    return [state.username, state.setUsername];
  }, shallow);

  return (
    <section>
      <input
        type="text"
        onChange={(e) => {
          const newUser = e.target.value;
          setUsername(newUser);
        }}
      />
      {username}
    </section>
  );
}
