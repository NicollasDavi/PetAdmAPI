import { CreateUserService } from "../services/create.user.service";

class UserController {
    async handle(request: any, reply: any) {
        const { body } = request;
        try {
            const createUserService = new CreateUserService();
            const result = await createUserService.execute(body);
            return reply.send(result);
        } catch (error: any) {
            return reply.status(400).send({ error: error.message });
        }
    }
}

export { UserController };
