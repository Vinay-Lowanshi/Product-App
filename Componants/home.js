const home = (req, res) => {
    res.render("admin.ejs",{name:"Home Page"});
}

module.exports = home;
