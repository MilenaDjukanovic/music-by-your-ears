import { Component, OnInit } from '@angular/core';
import {comments} from '../../configuration/comments';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public comments = comments;

  constructor() { }

  ngOnInit(): void {
  }

}
