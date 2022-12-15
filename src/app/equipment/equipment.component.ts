import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  
  equipmentBeingEdited: object = null;
  inInventory: boolean = false;

  equipment: object[] = [
    {type: 'Habitat dome'},
    {type: 'Drones'},
    {type: 'Food containers'},
    {type: 'Oxygen tanks'}
  ];
  constructor() { }

  ngOnInit() {
  }

  add(item: object) {
    for(let i=0; i<this.equipment.length; i++){
      if(this.equipment[i]===item){
        this.inInventory = true;
      }
    } if (!this.inInventory){
      this.equipment.push(item);
    }
    this.inInventory = false;
  }

  edit(equipment: object) {
    this.equipmentBeingEdited = equipment;
  }

  remove(item: object) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }

  save(type: string,item: object) {
    this.equipment['item'] = item;
    this.equipmentBeingEdited = null;
  }
}
