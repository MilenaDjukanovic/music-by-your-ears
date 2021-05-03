import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundChangeService {

  private subject = new Subject<any>();
  private lastSelectedBackground!: string;
  private lastSelectedIndex!: number;

  constructor() { }

  public setImage(image: string, index: number): void {
    this.lastSelectedIndex = index;
    this.lastSelectedBackground = image;
    this.subject.next({backgroundImage: image});
  }

  public getBackgroundImage(): Observable<any>{
    return this.subject.asObservable();
  }

  public getLastSelectedBackground(): string {
    return this.lastSelectedBackground;
  }

  public getLastIndex(): number {
    return this.lastSelectedIndex;
  }
}
