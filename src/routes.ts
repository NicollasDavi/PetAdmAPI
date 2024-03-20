import { FastifyInstance, FastifyPluginOptions} from "fastify";
import { UserController } from "./controllers/user.controller";
import { PetController } from "./controllers/pet.controller";
import { ServiceController } from "./controllers/service.controller";

const userController = new UserController();
const petController = new PetController();
const serviceController = new ServiceController();

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.post("/user", userController.handle);
    
    fastify.post("/pet", petController.handle);

    fastify.post("/pet/service", serviceController.handle)
}