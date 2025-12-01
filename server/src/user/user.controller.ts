import { Controller, Get, HttpCode, Param, Patch } from '@nestjs/common';
import { UserService } from './user.service.js';
import { Auth } from '../auth/decorators/auth.decorator.js';
import { CurrentUser } from '../auth/decorators/user.decorator.js';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  @Auth()
  async getProfile(@CurrentUser('id') id: string) {
    return this.userService.getById(id);
  }

  @HttpCode(200)
  @Auth()
  @Patch('profile/favorites/:productId')
  async togglefavorite(
    @CurrentUser('id') id: string,
    @Param('productId') productId: string,
  ) {
    return this.userService.toggleFavorite(id, productId);
  }
}
