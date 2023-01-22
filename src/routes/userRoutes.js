import fastify from "fastify";
import userCtrl from "../controllers/userController.js";

const userRoutes = (fastify, opts, done) => {

    fastify.get("/", userCtrl.getData)
    fastify.get("/:id", userCtrl.getDataById)

    fastify.post("/", userCtrl.saveData)
    fastify.put("/:id", userCtrl.update)
    fastify.delete("/:id", userCtrl.deleteData)

    done()
}

export default userRoutes