import { PrismaClient } from "@prisma/client";
import { z } from "zod";


const prisma = new PrismaClient();

class UserRepository {
    users: any[] = [];

    findByUsername(username: string): any | null {
        const userExist = this.users.find((user) => user.username === username);
        return userExist ? userExist : null;
    }

    async save(user: any) {

        const createUserSchema = z.object({
            username: z.string(),
            email: z.string().email(),
            password: z.string(),
            cpf: z.string(),
            address: z.string(),

        });
        
        try {
            const { username, email, password, cpf, address} = createUserSchema.parse(user);
            const newUser = await prisma.user.create({
                data: {
                    email,
                    password,
                    address,
                    cpf,
                    username,
                }
            });

            return newUser;
        }  catch (error: any) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error("Erro desconhecido");
            }
        }
    }
}

export default new UserRepository();
