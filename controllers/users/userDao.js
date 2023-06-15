import userModel from "./userModel.js";

export const findAllUsers = async () => {
    const users = await userModel.find();
    return users;
};

export const findUserByCredentials = async (username, password) => {
    const user = await userModel.findOne({ username, password });
    return user;
}

export const findUserById = async (uid) => {
    const user = await userModel.findById(uid);
    return user;
}

export const findUserByEmail = async (email) => {
    const user = await userModel.findOne({ email: email });
    return user;
}

export const findUserByUserName = async (username) => {
    const user = await userModel.findOne({ username: username });
    return user;
};


export const createUser = async (user) => {
    const newUser = await userModel.create(user);
    return newUser;
};

export const updateUser = async (uid, user) => {
    const newUser = await userModel.updateOne({ _id: uid }, { $set: user });
    return newUser;
};

export const deleteUser = async (uid) => {
    const user = await userModel.deleteOne({ _id: uid });
    return user;
};