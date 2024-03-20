import ServiceRepository from "../repositories/service.repository"

class CreateServiceService{
    async execute(data : any){
        return ServiceRepository.save(data);
    }
}

export {CreateServiceService}