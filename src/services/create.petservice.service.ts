import petserviceRepository from "../repositories/petservice.repository"

class CreatePetServiceService{
    async execute(data :any){
        return petserviceRepository.save(data)
    }
}

export { CreatePetServiceService }