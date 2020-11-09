const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get("/", (req, res) => {
    res.send("dziala");
  });

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/test/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });
};
