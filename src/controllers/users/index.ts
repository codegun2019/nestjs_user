import { CreateUserController } from "./create.controller";
import { DeleteUserController } from "./delete.controller";
import { PaginateController } from "./paginate.controller";
import { ShowController } from "./show.controller";

const UserControllers = [
    ShowController,
    PaginateController,
    CreateUserController,
    DeleteUserController
];

export default UserControllers;