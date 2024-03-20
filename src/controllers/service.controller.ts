import { CreateServiceService } from "../services/create.service.service";

class ServiceController{
    async handle(request: any, reply: any){
        const { body } = request;
        try {
            const createServiceService = new CreateServiceService();
            const result = await createServiceService.execute(body);
            return reply.send(result);
        } catch (error: any) {
            return reply.status(400).send({ error: error.message });
        }
    }
}

export { ServiceController }