import userRepository from "../repositories/user.repository";

class CreateUserService {
    async execute(data: any) {
        return userRepository.verifyObjectUser(data);
    }
}

export { CreateUserService };
