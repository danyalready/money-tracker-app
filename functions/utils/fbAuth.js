const { admin, db } = require("./admin");

exports.fbAuth = (req, res, next) => {
  let idToken;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    idToken = req.headers.authorization.split("Bearer ")[1];
  } else {
    return res.status(403).json({ error: "Access forbidden" });
  }

  admin
    .auth()
    .verifyIdToken(idToken)
    .then(decodedToken => {
      req.user = decodedToken;
      db.collection("users")
        .doc(req.user.email)
        .get()
        .then(data => {
          req.user.email = data.data().email;
          next();
        })
        .catch(err => {
          return res.status(500).json({ error: err.code });
        });
    })
    .catch(err => {
      if (err.code === "auth/argument-error") {
        return res.status(403).json({ error: "Invalid token" });
      } else {
        return res.status(403).json({ error: err.code });
      }
    });
};
