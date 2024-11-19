const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const PORT = process.env.PORT || 3000;
const indexPath = path.resolve(__dirname, "..", "build", "index.html");

// static resources should just be served as they are
app.use(
  express.static(path.resolve(__dirname, "..", "build"), { maxAge: "30d" })
);

const getPostById = (url) => {
  console.log("url", url);
  if (url === "wow") {
    return {
      title: "WoW - Wall Of Wellness",
      description:
        "This wall of wellness from Koshiqa is so inspiring.\nLoved these medal winning journey and experience of people with Koshiqa. Do read it.",
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

// here we serve the index.html page

app.get("/wow/:id", (req, res, next) => {
  fs.readFile(indexPath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("Error during file reading", err);
      return res.status(404).end();
    }

    const post = getPostById("req.params");
    if (!post) return res.status(404).send("Post not found");

    // inject meta tags
    htmlData = htmlData
      .replace("<title>React App</title>", `<title>${post.title}</title>`)
      .replace("__META_OG_TITLE__", post.title)
      .replace("__META_OG_DESCRIPTION__", post.description)
      .replace("__META_DESCRIPTION__", post.description)
      .replace("__META_OG_IMAGE__", post.thumbnail);
    return res.send(htmlData);
  });
});

app.get("/wow", (req, res, next) => {
  fs.readFile(indexPath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("Error during file reading", err);
      return res.status(404).end();
    }

    const post = getPostById("wow");
    if (!post) return res.status(404).send("Post not found");

    // inject meta tags
    htmlData = htmlData
      .replace("<title>React App</title>", `<title>${post.title}</title>`)
      .replace("__META_OG_TITLE__", post.title)
      .replace("__META_OG_DESCRIPTION__", post.description)
      .replace("__META_DESCRIPTION__", post.description)
      .replace("__META_OG_IMAGE__", post.thumbnail);
    return res.send(htmlData);
  });
});

app.get("/", (req, res, next) => {
  fs.readFile(indexPath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("Error during file reading", err);
      return res.status(404).end();
    }

    const post = getPostById(req.params);
    if (!post) return res.status(404).send("Post not found");

    return res.send(htmlData);
  });
});
// listening...
app.listen(PORT, (error) => {
  if (error) {
    return console.log("Error during app startup", error);
  }
  console.log("listening on " + PORT + "...");
});
