import cors from "@fastify/cors";
import formBody from "@fastify/formbody";

import Fastify from "fastify";
import userRoutes from "./routes/userRoutes.js";

const fastify = Fastify({
    logger: true
})



fastify.register(cors, { origin: "*" })
fastify.register(userRoutes, { prefix: "/users" })

fastify.register(formBody)

const start = async() => {
    try {
        await fastify.listen({ port: 4000, host: "0.0.0.0" })
        console.log("Escuchando por el puerto 4000");
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()