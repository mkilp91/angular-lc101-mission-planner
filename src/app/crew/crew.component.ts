import { Component, OnInit } from '@angular/core';
// import { endTimeRange } from '@angular/core/src/profile/wtf_impl';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  memberBeingEdited: object = null;
  inCrew: boolean = false;

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string, isFirst: boolean) {
    for(let i=0; i<this.crew.length; i++){
      if(this.crew[i]['name']===memberName){
        this.inCrew = true;
      }
    } if (!this.inCrew){
      this.crew.push({name: memberName, firstMission: isFirst});
    }
    this.inCrew = false;
  }

  edit(member:object) {
    this.memberBeingEdited = member;
  }

  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  save(name: string, member: object) {
    member['name'] = name;
    this.memberBeingEdited = null;
  }

}
