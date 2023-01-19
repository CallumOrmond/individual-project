import { Injectable } from '@angular/core';
import { type } from 'os';
import { runInThisContext } from 'vm';
import { StableRoomMates } from '../../abstract-classes/StableRoomMates';
import { Agent } from '../../interfaces/Agent';
import { AlgorithmData } from '../../interfaces/AlgorithmData';
import { Man } from '../../interfaces/Man';
import { Person } from '../../interfaces/Person';


@Injectable({
  providedIn: 'root'
})
export class StableRoomIrvService extends StableRoomMates {

  group1Name = "p";
  group2Name = "Other";

  group1Agents: Map<String, Person> = new Map();

  personkey = {}

  generateAgents() {

    // make each person 
    for (let i = 1; i < this.numberOfAgents + 1; i++) {
      let group1AgentName = this.group1Name + i;

      this.group1Agents.set(group1AgentName, {
          name: group1AgentName,
          match: new Array(),
          ranking: new Array(),
          lastProposed: null
      });

      this.freeAgentsOfGroup1.push(group1AgentName);

      

  }

  // fill data structures for group2 - Other - might not be used
  let currentLetter = 'A';

  for (let i = 1; i < this.numberOfGroup2Agents + 1; i++) {
    let group2AgentName = this.group2Name + currentLetter;

    this.group2Agents.set(group2AgentName, {
        name: group2AgentName,
        match: new Array(),
        ranking: new Array(),
    });

    this.personkey[String(i)] = currentLetter

    currentLetter = String.fromCharCode((((currentLetter.charCodeAt(0) + 1) - 65 ) % 26) + 65);
    }
  }

  ///////////////////////////////////////////////////


  constructor() { 
    
    super();
    // console.log("Super call");


  }
  ///////////////////////////////////////////////////


  // checks is anyone is assigned to a person, returns assigned person if true, null otherwise 
  assign_check(assinged: String) {

    // console.log("---Assing Check---")

    for (let [key, person] of this.group1Agents.entries()){

      // if assigned then 
      if (person.lastProposed != null){
        if (person.lastProposed.name == assinged){
          // console.log("assigned", person.lastProposed.name, key)
          return key
        }
      }
    }
    return null;
  }

  // makes sure noone is assigned to person "free"
  // loop through all people - if they are - assign them to null
  free(person_free: String){

    // console.log("---Free Person---")

    for (let [key, person] of this.group1Agents.entries()){

      // if assigned then set to null
      if (person.lastProposed != null){
        if (person.lastProposed.name == person_free){

          //free a 
          this.update(8, {"%old_person%" : person.name, "%selected%" : person_free})

          this.removePersonFromArray(this.currentLines, this.getLastCharacter(person.name))
          // add new free person to list 
          this.freeAgentsOfGroup1.push(this.getLastCharacter(person.name))
          person.lastProposed = null;
          // console.log(this.group1Agents);

        }
      }
    }
  }

  // del agent1 from agent2 ranking 
  // del agent2 from agent1 ranking 
  delete_pair(agent1, agent2){

    // console.log("---Delete---");

    let agent1index = agent2.ranking.indexOf(agent1);
    if (agent1index != -1){
      // console.log("Delete --- ", agent1.name, " From ", agent2.name);
      agent2.ranking.splice(agent1index, 1);
    
    }
  
    let agent2index = agent1.ranking.indexOf(agent2);
    if (agent2index != -1){
      // console.log("Delete --- ", agent2.name, " From ", agent1.name);
      agent1.ranking.splice(agent2index, 1);
    }

    // grey out elms from visual lists
    this.changePreferenceStyle(
      this.group1CurrentPreferences,
      this.getLastCharacter(agent1.name), 
      this.originalGroup1CurrentPreferences.get(this.getLastCharacter(agent1.name)).indexOf(this.getLastCharacter(agent2.name)), 
      "grey")

      this.changePreferenceStyle(
      this.group1CurrentPreferences,
      this.getLastCharacter(agent2.name), 
      this.originalGroup1CurrentPreferences.get(this.getLastCharacter(agent2.name)).indexOf(this.getLastCharacter(agent1.name)), 
      "grey")


  }

  print_rankings(agent){

    for (let i = 0 ; i < agent.ranking.length ; i++){
      // console.log("Element", i, agent.ranking[i])
    }
  }

  
  // returns a map of agents that are free - not assigned to anyone 
  check_free_agents(){

    let free_agents: Map<String, Person> = new Map();

    for (let [key, person] of this.group1Agents.entries()){

      // if assigned then 
      if (person.lastProposed == null){
        free_agents.set(key, person);
      }
    }
    return free_agents;
  }

  // returns a list of the agent keys that have more than one preferance 
  check_pref_count(){

    let agents_multiple_prefs: Map<String, Person> = new Map();

    for (let [key, person] of this.group1Agents.entries()){

      // if person has more than one person in their ranking 
      if (person.ranking.length > 1){
        agents_multiple_prefs.set(key, person);
        // console.log("Agent with multiple prefs", key, person.ranking.length)
      }
    }
    return agents_multiple_prefs;
  }

  // checks if any preferance lists are empty
  check_pref_list_empty(){

    let free_agents: Map<String, Person> = new Map();
    

    for (let [key, person] of this.group1Agents.entries()){

      if (person.ranking.length < 1){
        return true
      }
    }
    return false;

  }

  // returns a persons ranking as a string 
  objs_toString(ranking){
    let s = "";

    // go through each ranking and add to string 
    for (let person of ranking){
      s = s + person.name;
      s = s + ", ";
    }

    // remove extra comma added before 
    s = s.slice(0 , -2)
    return s 
  }

  match(): AlgorithmData {


    // console.log("Start")
    // console.log(this.group1Agents)
    this.objs_toString(this.group1Agents.get("p1").ranking)
    

    let free_agents: Map<String, Person> = new Map();
    free_agents = this.check_free_agents();

    // Set each person to be free
    this.update(1);

    // console.log("--- new info ---")

    // console.log(this.getGroupRankings(this.group1Agents))
    // console.log(this.group1CurrentPreferences)

    // console.log(this.group1Agents)
    // console.log(this.group2Agents)


    let last_person = null
    let last_pref = null
    
    
    while (free_agents.size > 0) {

      this.currentlySelectedAgents = [];
      this.relevantPreferences = [];

      // console.log("match.irv");
      // console.log(this.group1Agents);
      // console.log(this.group2Agents);

      let redLine = ["1", "B", "red"]

      //loop through each agent in the list 
      for (let [key, person] of free_agents.entries()){

        //While some person p is free (not assigned to someone)
        this.update(2, {"%person%" : person.name})
            
        //let person: Person = this.group1Agents.get(this.freeAgentsOfGroup1[0]);
        // console.log("------------------")
        // console.log(person);
        // console.log(person.name);
        // console.log(person.ranking);
        // console.log(person.match);
        // console.log(person.lastProposed);

        
        //if person p has a empty preferance list
        this.update(3, {"%person%" : person.name})

        // if there is no more preferances for a agent - no stable matchong exists
        if (person.ranking.length < 1){
          console.log("NO STABLE MATHCING - empty preferance list")

          //end - no stable mathcing
          this.update(4)
          break;
        }

       
        // change prevouis highlights back to black 
        if (last_person != null){
          this.changePreferenceStyle(
                    this.group1CurrentPreferences,
                    this.getLastCharacter(last_person.name), 
                    last_pref,
                    "black")
        }

        
        // store prevouis person
        last_person = person
        last_pref = this.originalGroup1CurrentPreferences.get(this.getLastCharacter(person.name)).indexOf(this.getLastCharacter(person.ranking[0].name)), 


        //highlight pref in persons list 
        this.changePreferenceStyle(
          this.group1CurrentPreferences,
          this.getLastCharacter(person.name), 
          this.originalGroup1CurrentPreferences.get(this.getLastCharacter(person.name)).indexOf(this.getLastCharacter(person.ranking[0].name)), 
          "red")

        //person b := first preferance on p's list
        this.update(5, {"%person%" : person.name, "%selected%" : person.ranking[0].name})

        let pref = person.ranking[0];
        // console.log("Pref check --- ", person.name, pref.name, person.ranking)

        redLine = [this.getLastCharacter(person.name), this.personkey[this.getLastCharacter(pref.name)], "red"]
        this.currentLines.push(redLine)

        // update free agents - remove first elm
        this.freeAgentsOfGroup1.shift()

        //assign p to b
        this.update(6, {"%person%" : person.name, "%selected%" : pref.name})

        //if someone is assigned to their most prefered person, then unassign them and assign current agent to them 
        let check = this.assign_check(pref.name);

        // if any person a is assigned to person b
        this.update(7, {"%person%" : person.name, "%selected%" : pref.name})
        

        if (check != null){
          this.free(pref.name);

          //free a 
          //this.update(8) -- done in function 
        
        }

        person.lastProposed = pref;
        

        this.update(9, {"%person%" : person.name, "%selected%" : pref.name, "%list%" : this.objs_toString(pref.ranking)})
        // loop through ranking 
        while (true){

          //get last elm of ranking
          let remove = pref.ranking.slice(-1)[0]

          // if elm is the current person then stop
          if (remove.name == person.name){
            break;
          }

          //delele elm from pref ranking list
          // delete perd from elm ranking list 
          // console.log("del", remove.name, pref.name)
          this.delete_pair(pref, remove)


          

           // for each person c less preferded than p on b's, preferance list
          this.update(10, {"%person%" : person.name, "%removee%" : remove.name})


        }


        //person.ranking = person.ranking.slice(0, 3);
        // console.log("Before", free_agents);
        free_agents = this.check_free_agents();
        // console.log("After", free_agents);

      }
      
      // console.log("ENDER")
      // for (let data of this.group1Agents.values()){
      //   console.log(data.name, " ---> ", data.lastProposed, data.ranking)
      // }
  }


  // fix last highlights number 
  this.changePreferenceStyle(
    this.group1CurrentPreferences,
    this.getLastCharacter(last_person.name), 
    last_pref,
    "black")

  let agents_multiple_prefs = this.check_pref_count()

 





  ////// PAHSE 2
  
  // while there are agents that have more than 1 person in their prefrance list 

  // console.log("length --- ", agents_multiple_prefs.size)

  

  let finished_people = []

  while (agents_multiple_prefs.size > 0){
    // console.log("There is agents with multiple prefs")
    // console.log(agents_multiple_prefs)
    

    //loop through those^ agents
    for (let [key, person] of agents_multiple_prefs.entries()){

      // While some person p has more than 1 preferance left
      this.update(11, {"%person%" : person.name, "%list%" : this.objs_toString(person.ranking)}) 

      // look for rotations in perosn p's preferance list 
      this.update(12, {"%person%" : person.name})

      let rotation_pairs = []

      let starting_agent = person                               // starting person
      let second_pref = person.ranking[1]                       //the starting persons second prefered person
      let last_pref = second_pref.ranking.slice(-1)[0]          //the second preferned persons last preferd person

      // list of pairs to call delete on
      rotation_pairs.push([last_pref, second_pref])


      // Loop until there is a loop through people until back to the starting person

      let counter = 0
      while (starting_agent != last_pref){
        // console.log("adding pairs ")  
        counter++

        // stops infinite loops - break if there is no cycle through all the people 
        if (counter > agents_multiple_prefs.size){
          break;
        }

        // console.log("HERE")
        // console.log(second_pref)
        // console.log(last_pref)

        // console.log("last_pref", last_pref)

        second_pref = agents_multiple_prefs.get(last_pref.name).ranking[1]    // update to be second pref of last_pref
        last_pref = second_pref.ranking.slice(-1)[0]                          // update like above with new second_pref

        // add to list 
        rotation_pairs.push([last_pref, second_pref])         

      }

      // if rotation r is found
      this.update(13, {"%rotation%" : this.objs_toString(rotation_pairs)}) // temp remove %rotation%

      // console.log("Found rotation", rotation_pairs)

      let deleted_pairs = []
      for (let pair = 0  ; pair < rotation_pairs.length ; pair++ ){
        // console.log("looping dels")

        // if pair not already deleted 
        if (!deleted_pairs.includes(rotation_pairs[pair])){
          // console.log("deleting", rotation_pairs[pair])
          
          this.delete_pair(rotation_pairs[pair][0], rotation_pairs[pair][1])
          deleted_pairs.push(rotation_pairs[pair])

          // delete pairs in rotation r
          this.update(14, {"%person%" : rotation_pairs[pair][1].name, "%removee%" : rotation_pairs[pair][0].name})

          // update lines 

          for (let [key_inner, person_inner] of this.group1Agents.entries()){

            if (person_inner.ranking.length == 1 && !finished_people.includes(person_inner.name)){

              // remove lines starting from person_inner
              this.removePersonFromArray(this.currentLines, this.getLastCharacter(person_inner.name))

              // this.free(person_inner.lastProposed.name)

              // HERE ^^^ WORKIGN ON UPDATEING FREE LIST IN PHASE 2 - ISSUE: DONT KNOW WHO GETS UNASSIGNED WHEN SOMEONE IS SET TO FREE, COULD LOOP AND CHECK ALL, 

              // add the 
              // this.freeAgentsOfGroup1.push(person_inner.lastProposed.name)

              // let person_inner propose to their last remaining person
              person_inner.lastProposed = person_inner.ranking.slice(0)[0]
              
              // remove lines going to their new proposal
              this.removeTargetFromArray(this.currentLines, this.personkey[this.getLastCharacter(person_inner.lastProposed.name)])

              // update value in list 
              this.changePreferenceStyle(
                this.group1CurrentPreferences,
                this.getLastCharacter(person_inner.name), 
                this.originalGroup1CurrentPreferences.get(this.getLastCharacter(person_inner.name)).indexOf(this.getLastCharacter(person_inner.ranking[0].name)), 
                "green")

              // draw line to new proposal
              let line = [this.getLastCharacter(person_inner.name), this.personkey[this.getLastCharacter(person_inner.lastProposed.name)], "green"]
              this.currentLines.push(line)

              // add person to finished person list 
              finished_people.push(person)


            }
    
          }

        } else {
          // everything deleted 
          // update 
         
          break;
        }

      }


      // conditions to end if stable matching is found 
      agents_multiple_prefs = this.check_pref_count()
      // console.log("checking number of agents with multiple preferances")
      // console.log(agents_multiple_prefs)

      if (agents_multiple_prefs.size < 1) {
        break;
      }

      // if a person b has 1 perferance left
      this.update(15)

      // update preferancees 
      for (let [key_inner, person_inner] of this.group1Agents.entries()){

        if (person_inner.ranking.length == 1){

         

          person_inner.lastProposed = person_inner.ranking.slice(0)[0]
          let line = [this.getLastCharacter(person_inner.name), this.personkey[this.getLastCharacter(person_inner.lastProposed.name)], "green"]
          // let line = ["1", "B", "green"]
          // this.currentLines.push(line)

          // person b := last preferance
          this.update(16, {"%person%" : person_inner.name, "%preferance%" : person_inner.lastProposed.name})


        }


      }


      // if any people have empty preferance lists - no mathcong
      this.update(17, {"%person%" : person.name})

      if (this.check_pref_list_empty() == true) {

        // end - no stable matching
        this.update(18)

        console.log("No Stable matching")
        break;
      }

    }

    // printing 
    // console.log("ENDEST")
    
      // for (let data of this.group1Agents.values()){
      //   console.log(data.name, " ---> ", data.ranking[0].name)
      // }

    break;

  }

  this.update(19)
  // console.log("group1agents at end", this.group1Agents, agents_multiple_prefs)

  return;

  }
}

//end text + viz not quite right, text not mathcing with viz but still is with what is happening 
