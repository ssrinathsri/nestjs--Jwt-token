import { AuthService } from './auth.service';
import { Controller, Post, Body } from  '@nestjs/common';
import { User } from  '../user.entity';

@Controller('auth')
export  class  AuthController {
    constructor(private  readonly  authService:  AuthService) {}
    @Post('login')
    async login(@Body() user: User): Promise<any> {
      return this.authService.login(user);
    }  

    @Post('register')
    async register(@Body() user: User): Promise<any> {
      return this.authService.register(user);
    } 
}