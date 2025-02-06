import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { Roles } from '../user.schema';

export class UserDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  password: string;

  @ApiProperty({ enum: Roles, default: Roles.SHIPPER })
  @IsEnum(Roles)
  @IsNotEmpty()
  role: Roles;

}

export class UserDtoWithoutPassword extends UserDto {
  constructor(dto: UserDto) {
    super();
    Object.assign(this, dto);
    delete this.password;
  }
}

export { CreateUserDto, UpdateUserDto };
