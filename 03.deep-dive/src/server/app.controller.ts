import { Controller, Get, Param } from '@nestjs/common';
import { HelloResponse } from '../shared/models';

@Controller()
export class AppController {

    private counter = 0;

    @Get('/hello/:name')
    hello(@Param('name') name: string): HelloResponse {
        return {
            message: `Hello ${name}!`,
            counter: this.counter++
        };
    }

}
