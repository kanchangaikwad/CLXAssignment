import { Injectable } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  Timeout = 3000; animate: 'slideFromTop'; showCloseButton: true;

  constructor(public toastr: ToastrManager) { }


showSuccess(message: string , title?: string, time?: number ) {
  this.toastr.successToastr(message , title,
                            {toastTimeout: time, animate: 'slideFromBottom', showCloseButton: true, position : 'bottom-right'});
}

showWarning(message: string , title?: string , time?: number) {
  this.toastr.warningToastr(message , title,
                              {toastTimeout: time, animate: 'slideFromTop', showCloseButton: true, position : 'bottom-right'});

}

showError(message: string , title?: string , time?: number) {
  this.toastr.errorToastr( message , title ,
                         {toastTimeout: time, animate: 'slideFromTop', showCloseButton: true});
}

showInfo(message: string , title?: string, time?: number ) {
  this.toastr.infoToastr( message , title ,
                         {toastTimeout: time, animate: 'slideFromTop', showCloseButton: true});
}

}
