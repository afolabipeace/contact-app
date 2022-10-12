import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contactfilter'
})
export class ContactfilterPipe implements PipeTransform {

  transform(contacts: any, searchText: any): any {
    if (!searchText) return contacts ;
    searchText = searchText.toLowerCase();
    let filteredContact = contacts.filter((contacts:any) => contacts.full_name.toLowerCase().includes(searchText) ||
     contacts.email.toLowerCase().includes(searchText) || 
     contacts.relationship.toLowerCase().includes(searchText));
    return filteredContact;
  }

}