import * as dao from "./itemsDao.js";

const itemsController = (app) => {
    const getItems = async (req, res) => {
        console.log("getting all items");
        const items = await dao.findAllItems();
        res.json(items);
    };

    const createItem = async (req, res) => {
        console.log("creating item");
        //console.log(req.body);
        const newItem = await dao.createItem(req.body.item);
        res.json(newItem);
    };

    const updateItem = async (req, res) => {
        console.log("updating item");
        const status = await dao.updateItem(req.params.rid, req.body);
        res.json(status);
    };

    const deleteItem = async (req, res) => {
        console.log("deleting item");
        const status = await dao.deleteItem(req.params.rid);
        res.json(status);
    };

    app.get("/api/items", getItems);
    app.post("/api/items/create", createItem);
    app.put("/api/items/update/:iid", updateItem);
    app.delete("/api/items/delete/:iid", deleteItem);
};

export default itemsController;