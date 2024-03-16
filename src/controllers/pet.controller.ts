import { CreatePetService } from "../services/create.pet.service";


class PetController {
    async handle(request: any, reply: any) {
        const { body } = request;
        try {
            const createPetService = new CreatePetService();
            const result = await createPetService.execute(body);
            return reply.send(result);
        } catch (error: any) {
            return reply.status(400).send({ error: error.message });
        }
    }
}

export { PetController };