import React, { useEffect, useState } from "react";
import style from "./home.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router-dom";

export default function Home({ match }) {
  const [longUrl, setLongUrl] = useState("");
  const [data, setData] = useState(null);
  useEffect(() => {
    if (match.params.code) {
      fetch(`${process.env.REACT_APP_API_URL}/checkShortUrl`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: match.params.code }),
      })
        .then(async (res) => {
          const data = await res.json();
          setData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
  const handleSubmit = () => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/shortenUrl`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ longUrl }),
      }).then(async (res) => {
        const data = await res.json();
        if (data.error) {
          toast.error("Invalid URL 😂");
        } else {
          navigator.clipboard.writeText(data.shortUrl);
          toast.success("Copied to your clipboard!");
          setLongUrl("");
        }
      });
    } catch (err) {
      // expected to be never reached
      console.log(err);
      toast.error("Error!");
    }
  };
  if (data && data.error) {
    return <Redirect to={{ pathname: `/error` }}></Redirect>;
  } else if (data && data.longUrl) {
    window.location.href = data.longUrl;
  } else {
    return (
      <div className={style.mainContainer}>
        <div className={style.inputContainer}>
          <input
            className={style.input}
            type="text"
            placeholder={"Paste any URL you'd like to shorten..."}
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <button
            className={style.button}
            onClick={handleSubmit}
            disabled={longUrl === ""}
          >
            {"Get"}
          </button>
        </div>
        <ToastContainer draggable={false} hideProgressBar={true} />
      </div>
    );
  }
}
