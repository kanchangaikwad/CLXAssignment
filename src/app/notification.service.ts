import { Injectable } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  toastTimeout = 3000; animate: 'slideFromTop'; showCloseButton: true;

  constructor(public toastr: ToastrManager) { }


showSuccess(message: string , title?: string ) {
  this.toastr.successToastr(message , title,
                            {toastTimeout: 3000, animate: 'slideFromTop', showCloseButton: true});
}

showWarning(message: string , title?: string ) {
  this.toastr.warningToastr(message , title,
                            {toastTimeout: 3000, animate: 'slideFromTop', showCloseButton: true});
}

showError(message: string , title?: string ) {
  this.toastr.errorToastr( message , title ,
                         {toastTimeout: 3000, animate: 'slideFromTop', showCloseButton: true});
}

showInfo(message: string , title?: string ) {
  this.toastr.infoToastr( message , title ,
                         {toastTimeout: 3000, animate: 'slideFromTop', showCloseButton: true});
}

}
