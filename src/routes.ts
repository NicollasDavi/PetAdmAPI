import { FastifyInstance, FastifyPluginOptions} from "fastify";
import { UserController } from "./controllers/user.controller";
import { PetController } from "./controllers/pet.controller";
import { ServiceController } from "./controllers/service.controller";
import { PetServiceController } from "./controllers/petservice.controller";

const userController = new UserController();
const petController = new PetController();
const serviceController = new ServiceController();
const petServiceController = new PetServiceController();

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.post("/user", userController.handle);
    
    fastify.post("/pet", petController.handle);

    fastify.post("/service", serviceController.handle)

    fastify.post("/pet/service" , petServiceController.handle)
}