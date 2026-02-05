import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
<<<<<<< HEAD
    return 'Bonjour ça va ?';
=======
    return 'Hello World!';
>>>>>>> 09a7179 (The commit)
  }
}
