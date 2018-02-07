import { Injectable } from '@angular/core';

@Injectable()
export class QuillService {
  private toolbar: HTMLElement = null;

  constructor() {}

  public getToolbar(toolbarConfig: any) {
    let toolbar = toolbarConfig;

    if (typeof toolbarConfig === 'string') {
      toolbar = document.querySelector(toolbarConfig);
    }

    if (toolbar instanceof HTMLElement) {
      if (!this.toolbar) {
        this.toolbar = toolbar;
      }

      const clone = this.toolbar.cloneNode(true);

      toolbar.parentNode.replaceChild(clone, toolbar);

      return clone;
    }

    return toolbarConfig;
  }
}