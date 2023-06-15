import * as dao from "./userDao.js";

const userController = (app) => {
    const getUsers = async (req, res) => {
        console.log("getting all users");
        const users = await dao.findAllUsers();
        res.json(users);
    };

    // const getUserById = async (req, res) => {
    //     console.log("getting user");
    //     const user = await dao.findAllUsers();
    //     res.json(user);
    // };

    const createUser = async (req, res) => {
        console.log("creating user");
        //TODO: will need to add registration and security params
        const newUser = await dao.createUser(req.body.user);
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

    app.get("/api/users", getUsers);
    app.get("/api/users/:uid", getUserById);
    app.post("/api/users/register", createUser);
    app.put("/api/users/update/:uid", updateUser);
    app.delete("/api/users/delete/:uid", deleteUser);
};

export default userController;