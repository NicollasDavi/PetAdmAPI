import { CreatePetServiceService } from "../services/create.petservice.service"

class PetServiceController{
    async handle(request:any, reply:any){
        const { body } = request
        try{
            const createPetService = new CreatePetServiceService();
            const result = createPetService.execute(body)
            return reply.send(result)
        } catch (error: any) {
            return reply.status(400).send({ error: error.message });
        }
        
    }
}

export { PetServiceController }