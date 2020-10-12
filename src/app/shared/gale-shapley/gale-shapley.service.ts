import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GaleShapleyService {

  men: Object = {};
  women: Object = {};

  freeMen: Array<string> = [];
  freeWomen: Array<string> = [];

  constructor() { }

  createPeople(numPeople: number): void {
    for (let i=1; i<numPeople+1; i++) {
      let manName = "man" + i;
      let womanName = "woman" + i;

      this.men[manName] = {
          name: manName,
          "match": null
      }

      this.women[womanName] = {
          name: womanName,
          "match": null
      }

      this.freeMen.push(manName);
      this.freeWomen.push(womanName);
    }
  }

  createRandomRankings(): void {
    // create rankings for men
    let womanObjectList = this.freeWomen.map(woman => this.women[woman]);
    for (let man in this.men) {
        this.shuffle(womanObjectList);
        let rankings = Object.assign([], womanObjectList);
        this.men[man]["ranking"] = rankings;
    }
    
    // create rankings for women
    let manObjectList = this.freeMen.map(man => this.men[man]);
    for (let woman in this.women) {
        this.shuffle(manObjectList);
        let rankings = Object.assign([], manObjectList);
        this.women[woman]["ranking"] = rankings;
    }
  }


  // FROM: https://javascript.info/task/shuffle
  shuffle(array: Array<Object>) {
    array.sort(() => Math.random() - 0.5);
  }


  galeShapley(numPeople: number): any[] {
    let commandList = [];
    
    this.createPeople(numPeople);
    this.createRandomRankings();
    commandList.push(1);

    console.log("---- MEN'S RANKINGS");

    for (let man in this.men) {
        console.log(man + "'s rankings: ");
        for (let woman in this.men[man]["ranking"]) {
            console.log(this.men[man]["ranking"][woman]["name"].slice(-1) + " ");
        }
        console.log("\n");
    }
    
    console.log("---- WOMEN'S RANKINGS");
    
    for (let woman in this.women) {
        console.log(woman + "'s rankings: ");
        for (let man in this.women[woman]["ranking"]) {
            console.log(this.women[woman]["ranking"][man]["name"].slice(-1) + " ");
        }
        console.log("\n");
    }
    
    console.log("----");


    // 2: while some man m is free do
    while (this.freeMen.length > 0) {
      commandList.push(2);
      // 3: w = most preferred woman on m’s list to which he has not yet proposed;
      let man: Object = this.men[this.freeMen[0]];
      console.log("-------");

      let woman: Object = man["ranking"][0];
      commandList.push(3);

      console.log("Man: " + man["name"]);
      console.log("Woman: " + woman["name"]);

      man["ranking"].shift();
      if (!woman["match"]) {
          commandList.push(4);
          console.log(woman["name"] + " was free, so matching her with " + man["name"]);
          woman["match"] = man;
          this.freeMen.shift();
          commandList.push(5);
      } else {
        commandList.push(6);
        let manName = man["name"];
        console.log("Index of current match (" + woman["match"]["name"] + "): " + woman["ranking"].findIndex(((man: { name: string; }) => man.name == woman["match"]["name"])));
        console.log("Index of man (" + man["name"] + "): " + woman["ranking"].findIndex(((man: { name: string; }) => man.name == manName)) );
        if (woman["ranking"].findIndex(((man: { name: string; }) => man.name == woman["match"]["name"])) > woman["ranking"].findIndex(((man: { name: string; }) => man.name == manName))) {
          commandList.push(7);
          console.log(woman["name"] + " prefers " + man["name"] + " to " + woman["match"]["name"] + " (" + woman["match"]["name"] + " is free, " + man["name"] + " engaged to " + woman["name"] + ")");
          this.freeMen.push(woman["match"]["name"]);
          woman["match"] = man;
          this.freeMen.shift();
          commandList.push(8);
        } else {
          commandList.push(9);
          console.log(woman["name"] + " prefers " + woman["match"]["name"] + " to " + man["name"] + " (no change)");
          commandList.push(10);
        }
      }
    }

    let matches: Object = {}

    // console.log(men);
    // console.log(women);

    console.log("-----");

    for (let woman in this.women) {
      matches[woman] = this.women[woman]["match"]["name"];
    }

    console.log(matches);

    commandList.push(11);

    // console.log(this.men);

    return commandList;
  }

}
