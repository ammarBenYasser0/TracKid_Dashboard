import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users:any[] , trem:string): any {
    if( trem == undefined)
    {
      return users;
    }
    return users.filter(function(user){
      return user.name.toLowerCase().includes(trem.toLowerCase())
    }) ;
  }

}