import { useState } from "react";
const App = () => {
  const contactList = [
    "bryan",
    "kakfaruk",
    "kakmukhlis",
    "kakarafat",
    "kakdita",
    "kaknuning",
  ];
  const [historyChat, setHistoryChat] = useState({});
  const [typeChat, setTypeChat] = useState("");
  const [placeholder, setPlaceholder] = useState("Chat");
  const [contact, setContact] = useState(contactList[0]);

  return (
    <div>
      <div>
        <h2>Chat {contact}</h2>
        <ul>
          {(historyChat[contact] || []).map((chat, index) => (
            <li key={"chat-" + index}>{chat}</li>
          ))}
        </ul>
        <select
          value={contact}
          onChange={(e) => {
            console.log(e.target.value);
            setContact(e.target.value);
          }}
        >
          {contactList.map((username, index) => (
            <option key={"username-" + index} value={username}>
              {username}
            </option>
          ))}
        </select>
        <input
          value={typeChat}
          placeholder={placeholder}
          // event handling umum digunakan
          onChange={(e) => {
            console.log("trigger saat berubah valuenya | ", e.target.value);
            setTypeChat(e.target.value);
          }}
          onFocus={() => {
            console.log("trigger saat cursor input aktif");
            setPlaceholder(`Chat ${contact} sekarang`);
          }}
          onBlur={() => {
            console.log(
              "trigger saat cursor input menjadi tidak aktif dari yang sebelumnya aktif"
            );
            setPlaceholder("Chat");
          }}
          // onMouseEnter={() => {
          //   console.log("trigger saat cursor berada diatas input");

          // }}
          // onMouseLeave={() => {
          //   console.log(
          //     "trigger saat cursor berada diluar input dari yang sebelumnya diatasnya"
          //   );

          // }}
          onKeyPress={(e) => {
            console.log(e);
            if (e.key === "Enter") {
              if (typeChat !== "") {
                console.log("kirim pesan");
                setHistoryChat((prevState) => ({
                  ...prevState,
                  [contact]: [...(prevState[contact] || []), typeChat],
                }));
                setTypeChat("");
              }
            }
          }}
        />
      </div>
    </div>
  );
};
export default App;
