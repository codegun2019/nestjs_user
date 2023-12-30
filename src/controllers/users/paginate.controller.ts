import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { PaginateDto } from 'src/dtos/users/paginate.dto';
import { UseResources } from 'src/interceptors/use-resources.interceptor';
import { ApiResource } from 'src/resources/api.resource';
import { UserResource } from 'src/resources/users/user.resource';
import { UsersResource } from 'src/resources/users/users.resource';
import { UsersService } from 'src/services/users.service';

@Controller({ path: 'users' })
export class PaginateController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseResources(UsersResource)
  async paginate(@Query() dto: PaginateDto) {
    const user = await this.usersService.paginate(dto);

    return ApiResource.successResponse(user)
  }
}
