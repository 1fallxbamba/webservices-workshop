import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ApiAuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {

    if(req.headers['api-auth-token'] !== process.env.JWT_SECRET) {
      throw new HttpException(
        {
          status: 'AUTHENTICATION_ERROR',
          message: 'Invalid API authentication token',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
    next();
  }
}
