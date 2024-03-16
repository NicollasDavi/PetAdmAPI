import { FastifyInstance, FastifyPluginOptions} from "fastify";
import { UserController } from "./controllers/user.controller";

const userController = new UserController();

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.post("/users", userController.handle);
}