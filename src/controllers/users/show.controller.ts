import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UseResources } from 'src/interceptors/use-resources.interceptor';
import { ApiResource } from 'src/resources/api.resource';
import { UserResource } from 'src/resources/users/user.resource';
import { UsersService } from 'src/services/users.service';

@Controller({ path: 'users' })
export class ShowController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  @UseResources(UserResource)
  async show(@Param('id', ParseIntPipe) id: number) {
    const user = await this.usersService.show(id);

    return ApiResource.successResponse(user)
  }
}
