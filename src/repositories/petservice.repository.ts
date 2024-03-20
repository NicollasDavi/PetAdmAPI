import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PetServiceRepository{
    async save(petService: any){
        try {
            const { petId, employeeId, serviceId, date} = petService;
            const newService = await prisma.petService.create({
                data: {
                    petId,
                    employeeId,
                    serviceId,
                    date,
                }
            });

            return newService;
        } catch (error : any) {
            throw new Error(error.message);
        }
    }
}