import * as dao from "./userDao.js";

const userController = (app) => {
    // const getUsers = async (req, res) => {
    //     console.log("getting all users");
    //     const users = await dao.findAllUsers();
    //     res.json(users);
    // };

    const login = async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        console.log("logging in for " + username);
        const user = await dao.findUserByCredentials(username, password);
        if (user) {
            req.session["currentUser"] = user;
            res.json(user);
        } else {
            res.sendStatus(404);
        }
    };

    const logout = async (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    };

    const findUserById = async (req, res) => {
        console.log(req.params.uid);
        console.log("finding user: " + req.params.uid);
        const user = await dao.findUserById(req.params.uid);
        if (user) {
            return res.json(user);
        } else res.sendStatus(404);
    }

    const createUser = async (req, res) => {
        console.log("creating user");
        const username = req.body.username;
        const email = req.body.email;
        // check if user already exists by searching for username and email
        let user = await dao.findUserByUserName(username);
        if (!user) user = await dao.findUserByEmail(email);

        if (user) {
            res.sendStatus(409);
            return;
        }
        const newUser = await dao.createUser(req.body);
        req.session["currentUser"] = newUser;
        res.json(newUser);
    };

    const updateUser = async (req, res) => {
        console.log("updating user");
        const status = await dao.updateUser(req.params.uid, req.body);
        res.json(status);
    };

    const deleteUser = async (req, res) => {
        console.log("deleting user");
        const status = await dao.deleteUser(req.params.uid);
        res.json(status);
    };

    // app.get("/api/users", getUsers);
    app.get("/api/users/login", login);
    app.get("/api/users/logout", logout);
    app.get("/api/users/profile/:uid", findUserById);
    app.post("/api/users/register", createUser);
    app.put("/api/users/update/:uid", updateUser);
    app.delete("/api/users/delete/:uid", deleteUser);
};

export default userController;