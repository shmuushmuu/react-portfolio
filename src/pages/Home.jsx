import React from "react";
import shmuu from "../../assets/images/shmuu.jpeg";

const styles = {
  myimg: {
    height: 280,
    width: "auto",
    borderRadius: 280
  },
  shadow: {
    border: "2 px solid dark-blue",
    boxShadow: "4px 20px 16px #161B23"
  },
};

export default function Home() {
  return (
    <>
      <div className="row m-2 p-3">
        <h1 className="text-center">About Me</h1>
      </div>
      <div className="min-vh-100">
        <div className="row m-2 p-3">
          <div className="d-flex justify-content-center mb-3">
            <img src={myself} alt="shmuu" style={styles.shmuu} />
          </div>
          <div
            className="d-flex justify-content-evenly text-center"
            style={styles.shadow}
          ></div>
          <p className="fs-4 p-2 d-flex justify-content-center">
            Hi! I'm Sam, aka shmuushmuu. I'm a developer, a singer-songwriter, a gamer, an enjoyer of Dungeons and Dragons, a hot yoga enthusiast, a husband, and a foodie with IBS.
            <br />
            I love collaborating with all the fine developers I've encountered so far. This community is relaxed, encouraging, and thriving. I'm excited to potentially work with you, and I"m looking to forward to leading a team in the next few years.
          </p>
        </div>
      </div>
      </>
      );
}
