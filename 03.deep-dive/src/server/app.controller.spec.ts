import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
    let app: TestingModule;

    beforeAll(async () => {
        app = await Test.createTestingModule({
            controllers: [AppController],
        }).compile();
    });

    describe('hello', () => {
        it('should return Hello ${name}', () => {
            const appController = app.get<AppController>(AppController);
            const name = 'Calgary NodeJS';
            expect(appController.hello(name).message).toBe(`Hello ${name}!`);
        });
    });
});
