import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { UserDto } from './user.dto';

export class CreateUserDto extends UserDto {}
