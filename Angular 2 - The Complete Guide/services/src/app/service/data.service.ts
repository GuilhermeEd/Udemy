import { LogService } from './log.service';
import { Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class DataService {
  pushedData = new EventEmitter<string>();

  private data: string[] = [];

  constructor(private logService: LogService){}

  addData(input: string){
    this.data.push(input);
    this.logService.writeToLog('Save item: ' + input);
  }

  getData(){
    return this.data;
  }

  pushData(value: string){
    this.pushedData.emit(value);
  }

}
