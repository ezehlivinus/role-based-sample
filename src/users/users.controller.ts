import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto } from './dtos/index.user.dto';
import { UsersService } from './users.service';
import { Auth } from '@/common/decorators/http.decorator';
import { Roles } from './user.schema';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/')
  async create(@Body() createUserDto: CreateUserDto) {
    const newUser = await this.usersService.create(createUserDto);

    return {
      data: newUser
    };
  }

  @Get('/')
  async find() {
    const users = await this.usersService.find();

    return { data: users };
  }

  @Get('/only-admin')
  @Auth([Roles.ADMIN])
  async findOnlyAdmin() {
    return { data: { message: 'Only admin can see this' } };
  }

  @Get('/only-shipper')
  @Auth([Roles.SHIPPER])
  async findOnlyShipper() {
    return { data: { message: 'Only shipper can see this' } };
  }

  @Get('/only-carrier')
  @Auth([Roles.CARRIER])
  async findOnlyCarrier() {
    return { data: { message: 'Only carrier can see this' } };
  }

  @Get('/only-admin-shipper')
  @Auth([Roles.ADMIN, Roles.SHIPPER])
  async findOnlyAdminShipper() {
    return { data: { message: 'Only admin and shipper can see this' } };
  }

  @Get('/only-admin-carrier')
  @Auth([Roles.ADMIN, Roles.CARRIER])
  async findOnlyAdminCarrier() {
    return { data: { message: 'Only admin and carrier can see this' } };
  }

  @Get('/only-shipper-carrier')
  @Auth([Roles.SHIPPER, Roles.CARRIER])
  async findOnlyShipperCarrier() {
    return { data: { message: 'Only shipper and carrier can see this' } };
  }

  @Get('/all')
  @Auth([Roles.ADMIN, Roles.SHIPPER, Roles.CARRIER])
  // Or @Auth([]) any login user can see this
  async findAll() {
    return { data: { message: 'All roles can see this' } };
  }

  @Get('/:id')
  async findById(@Param('id') id: string) {
    const user = await this.usersService.findById(id);

    return { data: user };
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const updatedUser = await this.usersService.update(id, updateUserDto);

    return { data: updatedUser };
  }
}
