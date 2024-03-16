import { PrismaClient } from "@prisma/client";
import { z } from "zod";


const prisma = new PrismaClient();

class UserRepository {

    async verifyObjectUser(data: string){
    try{
        const createUserSchema = z.object({
            username: z.string(),
            email: z.string().email(),
            password: z.string(),
            cpf: z.string(),
            address: z.string(),
        });

        return this.save(data);
    }catch{
        throw new Error("Um dos atributos esta errado")
    }        
    }

    async save(user: any) {
        try {
            const { username, email, password, cpf, address} = user;
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
