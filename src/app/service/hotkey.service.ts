import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Observable } from 'rxjs';

type Options = {
  element: any;
  keys: string;
};

@Injectable({
  providedIn: 'root'
})
export class HotkeyService {

  defaults: Partial<Options> = {
    element: this.document
  };

  constructor(
    private eventManager: EventManager,
    @Inject(DOCUMENT) private document: Document
  ) { }

  //optionsにショートカットを割り当てるキー名を渡す
  addShortcut(options: Partial<Options>){
    // Optionsを作成
    const merged = { ...this.defaults, ...options};
    // 引数に渡された値をkeydownイベントに整形
    const event = `keydown.${merged.keys}`;

    return new Observable(observer => {

      // 本来のキーの処理をキャンセルしてkeydownイベントを送信
      const handler = (e) => {
        e.preventDefault();
        observer.next(e);
      };
      //監視するイベントと発生した場合の処理を設定
      const dispose = this.eventManager.addEventListener(
        merged.element, event, handler
      );

      return () => {
        dispose();
      };
    });
  }
}
