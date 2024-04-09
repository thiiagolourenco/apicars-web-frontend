import { Injectable } from '@angular/core';
import { Car } from 'src/app/shared/modules/cars/models/car.model';
import { User } from 'src/app/shared/modules/users/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  compareLists(oldList: User[] | Car[], newList: User[] | Car[]): boolean {
    if (oldList.length !== newList.length) {
      return true;
    }

    for (let i = 0; i < oldList.length; i++) {
      if (oldList[i].id !== newList[i].id) {
        return true;
      }
    }

    return false;
  }
}
