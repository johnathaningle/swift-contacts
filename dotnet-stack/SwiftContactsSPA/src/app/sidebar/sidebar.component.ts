import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  activeIndex: string = "Dashboard";
  constructor() { }
  
  @Output() menuEvent = new EventEmitter<string>();

  setActive(event) {
    let menuIcons = document.getElementsByClassName("menu-item");
    //reset the style for all menu elements
    for (let i = 0; i < menuIcons.length; i++) {
      menuIcons[i].className = "menu-item";
    }
    if (event.target.classList.contains("menu-item")) {
      event.target.classList = "menu-item menu-item-active";
      this.activeIndex = event.target.id;
      this.menuEvent.emit(event.target.id);
    } else if (event.target.parentElement.classList.contains("menu-item")) {
      event.target.parentElement.classList = "menu-item menu-item-active";
      this.activeIndex = event.target.parentElement.id;
      this.menuEvent.emit(event.target.parentElement.id);
    }
  }

  ngOnInit() {
  }

}
