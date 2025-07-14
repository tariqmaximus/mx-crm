import { Injectable, Type } from '@angular/core';

declare var bootstrap: any;

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modalTitle: string = '';
  modalButtonText: string = '';
  modalType: string = '';
  dynamicComponent: Type<any> | null = null;

  openDynamicModal(
    title: string,
  buttonText: string,
  type: string,
  component: Type<any>,
  size: 'modal-sm' | 'modal-md' | 'modal-lg' | 'modal-xl' | '' = ''
  ) {
    this.modalTitle = title;
    this.modalButtonText = buttonText;
    this.modalType = type;
    this.dynamicComponent = component;

    const modalElement = document.getElementById('dynamicModal');
    if (modalElement) {
      const dialog = modalElement.querySelector('.modal-dialog');
      if (dialog) {
        dialog.classList.remove('modal-sm', 'modal-md', 'modal-lg', 'modal-xl');
        if (size) {
          dialog.classList.add(size);
        }
      }

      const modalInstance = new bootstrap.Modal(modalElement);
      modalInstance.show();
    } else {
      console.warn('Modal element not found with ID: dynamicModal');
    }
  }
}
