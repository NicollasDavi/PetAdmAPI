import petRepository from "../repositories/pet.repository";

class CreatePetService{
    async execute(data: any){
        return petRepository.verifyPetObject(data);
    }
}

export { CreatePetService }