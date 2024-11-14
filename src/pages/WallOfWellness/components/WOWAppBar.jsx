import React, { useEffect, useState } from "react";
import arrowBack from "../../../assets/arrow_left.svg";
import arrowBackGrey from "../../../assets/wallOfWellness/arrow_left.svg";
import shareIcon from "../../../assets/wallOfWellness/share.svg";
import editIcon from "../../../assets/wallOfWellness/edit.svg";
import {
  FacebookShareButton,
  EmailShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  EmailIcon,
} from "react-share";
import { Link } from "react-router-dom";

const WOWAppBar = ({ storyId, userId, forceClose }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    window.closeWebView = () => {
      // This function can be left empty since Flutter will listen for the message
    };

    return () => {
      delete window.closeWebView;
    };
  }, []);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "My Website",
          text: "Check out this amazing website!",
          url: "https://d13f6mc9d8xfqo.cloudfront.net/wall-of-wellness", // Current URL
        })
        .then(() => console.log("Successfully shared"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  const [showLinkCopied, setShowLinkCopied] = useState(false);

  return (
    <div
      className={` py-[20px] px-[20px] flex max-w-[420px] items-center sticky top-0 bg-[#24262B] z-10`}
    >
      <img
        src={arrowBack}
        onClick={
          forceClose != null
            ? () => {
                window.closeWebView();
              }
            : () => {
                if (window.history.length > 1) {
                  window.history.back();
                } else {
                  window.closeWebView();
                }
              }
        }
        alt="Arrow Back"
        className="float-left h-[28px] mr-[8px]"
      />
      <p className="text-[18px] font-bold text-white">Wall of Wellness</p>
      {storyId && (
        <Link
          to={`/wow/edit/${storyId}`}
          className={`float-right ml-auto ${userId == null ? "" : "mr-[40px]"}`}
        >
          <img
            src={editIcon}
            alt="Arrow Back"
            className="float-left ml-auto  h-[20px]"
          />
        </Link>
      )}

      {userId == null && (
        <img
          onClick={openDialog}
          src={shareIcon}
          alt="Arrow Back"
          className={`float-left ${
            storyId == null ? "ml-auto" : "ml-[12px]"
          }  h-[20px]`}
        />
      )}

      <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
        <p
          className="text-center text-[18px] font-bold text-black mb-5
        "
        >
          Share this story
        </p>
        <div className="flex flex-wrap gap-1">
          <FacebookShareButton
            className="rounded-[24px]"
            hashtag="#koshiqa"
            quote="Koshiqa"
            url={"https://koshiqa.com"}
          >
            <FacebookIcon className="rounded-[12px]" />
          </FacebookShareButton>

          <LinkedinShareButton
            title="Koshiqa"
            summary="This is a summary"
            url={"https://d13f6mc9d8xfqo.cloudfront.net/wall-of-wellness"}
          >
            <LinkedinIcon className="rounded-[12px]" />
          </LinkedinShareButton>
          <RedditShareButton url={"https://koshiqa.com"}>
            <RedditIcon className="rounded-[12px]" />
          </RedditShareButton>
          <EmailShareButton url={"https://koshiqa.com"}>
            <EmailIcon className="rounded-[12px]" />
          </EmailShareButton>

          <div
            onClick={handleShare}
            className="bg-[#24262B] items-center justify-center flex px-5 rounded-[12px] h-[65px]"
          >
            <img src={shareIcon} alt="Share Icon" className="h-[40px]" />
          </div>
        </div>
        {showLinkCopied && (
          <p
            className="text-center text-[14px] text-[#1C1C1C] mt-4 font-medium  leading-[20px]
        "
          >
            Link copied
          </p>
        )}

        <button
          onClick={() => {
            navigator.clipboard.writeText(
              "https://d13f6mc9d8xfqo.cloudfront.net/wall-of-wellness"
            );
            setShowLinkCopied(true);
            setTimeout(() => {
              setShowLinkCopied(false);
            }, 2000);
          }}
          className="bg-[#0E986A] max-w-[344px] mt-[16px] w-full  text-white py-[18px] rounded-[16px] font-semibold"
        >
          Copy Link
        </button>
      </Dialog>
    </div>
  );
};

const Dialog = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div style={styles.overlay}>
      <div style={styles.dialog}>
        <button onClick={onClose} style={styles.closeButton}>
          <img
            src={arrowBackGrey}
            alt="Arrow Back"
            className="h-[30px] bg-[#24262B] rounded-[50%] p-[5px] text-white
          "
          />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  dialog: {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    width: "300px",
    maxWidth: "90%",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    border: "none",
    background: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export const WOWWhiteAppBar = ({ title }) =>
  // :{}
  {
    useEffect(() => {
      window.closeWebView = () => {
        // This function can be left empty since Flutter will listen for the message
      };

      return () => {
        delete window.closeWebView;
      };
    }, []);
    return (
      <div
        className={`py-[20px] px-[20px] flex max-w-[420px] items-center sticky top-0 bg-[#FAFAFA] z-10`}
      >
        <img
          onClick={() => {
            console.log(
              "window.history.length",
              window.history.length,
              " & ",
              window.history.state
            );
            if (window.history.length > 1) {
              window.history.back();
            } else {
              // Send a close message to the Flutter WebView
              window.closeWebView();
            }
          }}
          src={arrowBackGrey}
          alt="Arrow Back"
          className="float-left h-[28px] mr-[8px]"
        />
        <p className="text-[18px] font-medium leading-[24.3px] text-black">
          {title}
        </p>
      </div>
    );
  };

export default WOWAppBar;
