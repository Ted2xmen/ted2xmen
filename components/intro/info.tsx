import React from "react";

const Info = () => {
  return (
    <div className="info-container">
      <div className="w-1/2 md:w-1/1">
        <img
          className="rounded-1"
          src="https://pbs.twimg.com/profile_images/1321170490048786436/0EtFIqGA_400x400.jpg"
          alt="me"
        />
      </div>
      <div>
        <p>
          I am a self-taught frontend developer who is curious and passionate
          about learning new technologies. I am motivated to be a part of a team
          where I can improve myself and to contribute, and learn from, other
          talented colleagues on complex and interesting projects.
        </p>
      </div>
    </div>
  );
};

export default Info;
