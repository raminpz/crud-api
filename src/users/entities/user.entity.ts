import { ApiProperty } from "@nestjs/swagger"
import { Role } from "@prisma/client";

type UserWithoutPassword = Omit<UserEntity, 'password'>

export class UserEntity implements UserWithoutPassword{
    @ApiProperty()
    id: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    telephone: string | null;

    @ApiProperty()
    firstname: string;

    @ApiProperty()
    lastName: string | null;

    @ApiProperty()
    createAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    role: Role = 'USER';
}
