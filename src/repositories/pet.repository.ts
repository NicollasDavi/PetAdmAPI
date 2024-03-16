import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class petRepository {
    async verifyPetObject(data: any) {
        return this.save(data);
    }

    async save(pet: any) {
        try {
            const { name, breed, age, species, alerts, userId} = pet;
            const createdPet = await prisma.pet.create({
                data: {
                    name,
                    breed,
                    age,
                    species,
                    alerts,
                    userId
                }
            });
            return createdPet;
        } catch (error) {
            throw new Error(`Erro ao salvar o pet 1`);
        }
    }
}

export default new petRepository();