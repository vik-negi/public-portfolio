export const isAutheticated = () => {
  if (typeof window == "undefined") {
    return true;
  }
  if (localStorage.getItem("userAuth")) {
    return JSON.parse(localStorage.getItem("userAuth"));
  } else {
    console.log(JSON.parse(localStorage.getItem("userAuth")));
    return false;
  }
};

export const getToken = () => {
  if (typeof window == "undefined") {
    return null;
  }
  console.log(JSON.parse(localStorage.getItem("userAuth")));
  if (localStorage.getItem("userAuth")) {
    return JSON.parse(localStorage.getItem("userAuth")).token;
  } else {
    console.log(JSON.parse(localStorage.getItem("userAuth")));
    return null;
  }
};

export const getUsername = () => {
  if (typeof window == "undefined") {
    return true;
  }
  if (localStorage.getItem("userAuth")) {
    return JSON.parse(localStorage.getItem("userAuth")).data.username;
  } else {
    // console.log(JSON.parse(localStorage.getItem("userAuth")));
    // return "vikramnegi-9162604468";
    return null;
  }
};

export const signout = () => {
  // show warning
  const answer = window.confirm("Are you sure you want to logout?");
  if (answer) {
    localStorage.removeItem("userAuth");
  }
  return true;
};
