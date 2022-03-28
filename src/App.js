import { useEffect, useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import writers from "./writers";
import ProfileCard from "./components/ProfileCard";
import ProfileForm from "./components/ProfileForm";

function App() {
  const [allProfile, setAllProfile] = useState([
    {
      firstName: "Joshua",
      lastName: "Annan-Takyi",
      email: "annanjosh04@gmail.com",
      phone: "+233 024 455 000",
    },
  ]);

  const submit = (profile) => {
    const arr = allProfile;
    arr.push();
    setAllProfile();
  };

  return (
    <div>
      <h1>Writer Profiles</h1>
      <div className="container">
        <ProfileForm submit={submit} />
        {allProfile.map((writer) => (
          <ProfileCard key={writer.id} writer={writer} />
        ))}
      </div>
    </div>
  );
}

export default App;
