import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-photo-box',
  templateUrl: 'profile-photo-box.component.html',
  styleUrls: ['./profile-photo-box.component.scss']
})

export class ProfilePhotoBoxComponent implements OnInit {

  @Input() pictures: string[] = []

  constructor() { }

  ngOnInit() { }
}