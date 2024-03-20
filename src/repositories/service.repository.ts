import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ServiceRepository{
    async save(service : any){
        try {
            const { name, price,} = service;
            const newService = await prisma.service.create({
                data: {
                    name,
                    price
                }
            });

            return newService;
        }  catch (error: any) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error("Erro desconhecido");
            }
        }
    }
}

export default new ServiceRepository();