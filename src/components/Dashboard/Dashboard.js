import React, { useEffect, useState } from "react";
import axios from "axios";
import dart from "../../resource/3dArt.png";
import Graph from "../../resource/graph.png";
import "../Dashboard/Dashboard.css";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/data")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div class="bg">
      <p class="head">Soil Moisture Level</p>
      <div className="illustration">
        <img src={dart}></img>
      </div>

      <p class="data" style={{ color: "white" }}>
        Moisture
        {posts}
      </p>
      <p class="graph">
        <img src={Graph} alt="graph"></img>
      </p>
    </div>
  );
}
