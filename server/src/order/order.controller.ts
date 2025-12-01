import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OrderService } from './order.service.js';
import { Auth } from '../auth/decorators/auth.decorator.js';
import { CurrentUser } from '../auth/decorators/user.decorator.js';
import { OrderDto } from './dto/order.dto.js';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  @Auth()
  getAll() {
    return this.orderService.getAll();
  }

  @Get('by-user')
  @Auth()
  getByUserId(@CurrentUser('id') userId: string) {
    return this.orderService.getByUserId(userId);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  placeOrder(@Body() dto: OrderDto, @CurrentUser('id') userId: string) {
    return this.orderService.placeOrder(dto, userId);
  }
}
