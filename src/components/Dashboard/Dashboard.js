import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);
  var run;
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
    <div>
      <h1>Hello</h1>
      <div>{posts}</div>
    </div>
  );
}
