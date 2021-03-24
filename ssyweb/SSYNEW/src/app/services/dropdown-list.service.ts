import { Injectable } from '@angular/core';

@Injectable()
export class DropdownListService {


    constructor(public id: any, public value: string, public desc?: any,
        public checked?: boolean)
    // tslint:disable-next-line:one-line
    {

    }

}
