import React from "react";
import { useParams } from "react-router-dom";

const EmbedWoW = () => {
  const { id } = useParams();

  const getPostById = (id) => {
    if (id === "wow") {
      return {
        title: "WoW - Wall Of Wellness",
        description:
          "This wall of wellness from Koshiqa is so inspiring.\nLoved these medal-winning journeys and experiences of people with Koshiqa. Do read it.",
        thumbnail:
          "https://res.cloudinary.com/dolqf9s3y/image/upload/v1732011613/wow_ss_gel6dh.png",
      };
    }
    return {
      title: "WoW - Wall Of Wellness",
      description: "Post not found",
      thumbnail:
        "Hey, my story got featured on Koshiqa's Wall of Wellness.\nRead my journey of winning the medal and my experience with the platform",
    };
  };

  const post = getPostById(id);

  return (
    <div
      style={{
        width: "504px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <img
        src={post.thumbnail}
        alt={post.title}
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
};

export default EmbedWoW;
