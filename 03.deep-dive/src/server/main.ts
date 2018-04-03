import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { port } from '../shared/constants';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.enableCors({
        origin: 'http://localhost:4200'
    }).listen(port);
}

bootstrap();
