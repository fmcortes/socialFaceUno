import { Component, Input, OnInit } from '@angular/core';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';

@Component({
  selector: 'app-profile-friend-list',
  templateUrl: './profile-friend-list.component.html',
  styleUrls: ['./profile-friend-list.component.scss']
})

export class ProfileFiendListComponent implements OnInit {

  @Input() friends: Partial<CurrentUserInterface>[] = []

  constructor() { }

  ngOnInit() { }
}