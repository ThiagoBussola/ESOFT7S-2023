import {
  Module,
} from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0/esoft-nest-7s'),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule{}
