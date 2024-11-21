require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

const express = require("express");
const path = require("path");
const fs = require("fs");
const { default: App } = require("../src/App");
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

app.get("*", (req, res) => {
  const routePath = req.path; // e.g., /wow, /wow/:id, etc.

  // Get metadata based on route (implement your logic here)
  const metadata = getMetadataForRoute(routePath);

  const html = ReactDOMServer.renderToString(<App initialRoute={routePath} />);

  const metaTags = `
    <title>${metadata.title}</title>
    <meta name="description" content="${metadata.description}" />
    <meta property="og:title" content="${metadata.title}" />
    <meta property="og:description" content="${metadata.description}" />
    <meta property="og:image" content="${metadata.image}" />
  `;

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        ${metaTags}
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/static/js/main.js"></script> <!-- Adjust if needed -->
      </body>
    </html>
  `);
});

function getMetadataForRoute(route) {
  const metadataMap = {
    "/wow": {
      title: "WoW - Wall Of Wellness",
      description: "Discover inspiring stories on the Wall Of Wellness.",
      image:
        "https://res.cloudinary.com/dolqf9s3y/image/upload/v1732011613/wow_ss_gel6dh.png",
    },
    "/contact": {
      title: "Contact Us - Your Website",
      description: "Reach out to us with your questions.",
      image:
        "https://res.cloudinary.com/dolqf9s3y/image/upload/v1732011613/wow_ss_gel6dh.png",
    },
    // Add metadata for all other routes
  };

  return (
    metadataMap[route] || {
      title: "Default Title",
      description: "Default Description",
      image:
        "https://res.cloudinary.com/dolqf9s3y/image/upload/v1732011613/wow_ss_gel6dh.png",
    }
  );
}
// listening...
app.listen(PORT, (error) => {
  if (error) {
    return console.log("Error during app startup", error);
  }
  console.log("listening on " + PORT + "...");
});
