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

  group1Name = "";
  group2Name = "Other";

  group1Agents: Map<String, Person> = new Map();

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

    currentLetter = String.fromCharCode((((currentLetter.charCodeAt(0) + 1) - 65 ) % 26) + 65);
    }
  }

  ///////////////////////////////////////////////////


  constructor() { 
    
    super();
    console.log("Super call");

  }
  ///////////////////////////////////////////////////


  // checks is anyone is assigned to a person, returns assigned person if true, null otherwise 
  assign_check(assinged: String) {

    console.log("---Assing Check---")

    for (let [key, person] of this.group1Agents.entries()){

      // if assigned then 
      if (person.lastProposed != null){
        if (person.lastProposed.name == assinged){
          console.log("assigned", person.lastProposed.name, key)
          return key
        }
      }
    }
    return null;
  }

  // makes sure noone is assigned to person "free"
  // loop through all people - if they are - assign them to null
  free(person_free: String){

    console.log("---Free Person---")

    for (let [key, person] of this.group1Agents.entries()){

      // if assigned then set to null
      if (person.lastProposed != null){
        if (person.lastProposed.name == person_free){
          console.log(this.group1Agents);
          console.log("Unassigned --- ", key)
          person.lastProposed = null;
          console.log(this.group1Agents);
        }
      }
    }
  }

  // del agent1 from agent2 ranking 
  // del agent2 from agent1 ranking 
  delete_pair(agent1, agent2){

    console.log("---Delete---");

    let agent1index = agent2.ranking.indexOf(agent1);
    if (agent1index != -1){
      console.log("Delete --- ", agent1.name, " From ", agent2.name);
      agent2.ranking.splice(agent1index, 1);
    
    }
  
    let agent2index = agent1.ranking.indexOf(agent2);
    if (agent2index != -1){
      console.log("Delete --- ", agent2.name, " From ", agent1.name);
      agent1.ranking.splice(agent2index, 1);
    }
  }

  print_rankings(agent){

    for (let i = 0 ; i < agent.ranking.length ; i++){
      console.log("Element", i, agent.ranking[i])
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
        console.log("Agent with multiple prefs", key, person.ranking.length)
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
  

  match(): AlgorithmData {


    let free_agents: Map<String, Person> = new Map();
    free_agents = this.check_free_agents();

    this.update(1);

    while (free_agents.size > 0) {

      this.currentlySelectedAgents = [];
      this.relevantPreferences = [];

      console.log("match.irv");
      console.log(this.freeAgentsOfGroup1);
      console.log(this.group1Agents);

    

      //loop through each agent in the list 
      for (let [key, person] of free_agents.entries()){
            
        //let person: Person = this.group1Agents.get(this.freeAgentsOfGroup1[0]);
        console.log("------------------")
        console.log(person);
        // console.log(person.name);
        // console.log(person.ranking);
        // console.log(person.match);
        // console.log(person.lastProposed);

        
        // if there is no more preferances for a agent - no stable matchong exists
        if (person.ranking.length < 1){
          console.log("NO STABLE MATHCING - empty preferance list")
          break;
        }

        //get person's most prefered person - pref
        let pref = person.ranking[0];
        //console.log("Pref check --- ", pref)
        
        //if someone is assigned to their most prefered person, then unassign them and assign current agent to them 
        let check = this.assign_check(pref.name);
        //console.log("check check --- ", check);


        if (check != null){
          this.free(pref.name);
        }
        person.lastProposed = pref;


        // preferances = pref.ranking[i]; = the preferacens of the current agents preferance 
        // loop through preferance list in data 

        
        for (let i = 0 ; i < pref.ranking.length ; i++){
          
          //check for preferacen in list, the ones after this in the list are the ones to remove
          if (pref.ranking[i] == person){
            // remove remaining preferances, in each list 
            // remove (pref, p)

            // pref = index of current preferance for the current agent 
            // p = an index of a person tp remove 

            // need to get splice of list 
            for (let j = i + 1; j < pref.ranking.length ; j++){
              
              console.log("del", pref.ranking[j].name, pref.name)

              let tempagent = pref.ranking[j]

              this.delete_pair(pref, pref.ranking[j]);
           
              this.print_rankings(pref)
              console.log("\n")
              this.print_rankings(tempagent)

            break;
            }
          }
        }

        //person.ranking = person.ranking.slice(0, 3);
        console.log("Before", free_agents);
        free_agents = this.check_free_agents();
        console.log("After", free_agents);

      }
      console.log("END --- ", this.group1Agents);

      console.log("ENDER")
      for (let data of this.group1Agents.values()){
        console.log(data.name, " ---> ", data.lastProposed, data.ranking)
      }
  }


  let agents_multiple_prefs = this.check_pref_count()

  // while there are agents that have more than 1 person in their prefrance list 

  console.log("length --- ", agents_multiple_prefs.size)

  while (agents_multiple_prefs.size > 0){
    console.log("There is agents with multiple prefs")
    console.log(agents_multiple_prefs)
    

    //loop through those^ agents
    for (let [key, person] of agents_multiple_prefs.entries() ){
      console.log("looping these agents")

      let rotation_pairs = []

      let starting_agent = person                               // starting person
      let second_pref = person.ranking[1]                       //the starting persons second prefered person
      let last_pref = second_pref.ranking.slice(-1)[0]          //the second preferned persons last preferd person

      // list of pairs to call delete on
      rotation_pairs.push([last_pref, second_pref])


      // Loop until there is a loop through people until back to the starting person

      let counter = 0
      while (starting_agent != last_pref){
        console.log("adding pairs ")  
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

      console.log("Found rotation", rotation_pairs)

      let deleted_pairs = []
      for (let pair = 0  ; pair < rotation_pairs.length ; pair++ ){
        console.log("looping dels")

        // if pair not already deleted 
        if (!deleted_pairs.includes(rotation_pairs[pair])){
          console.log("deleting", rotation_pairs[pair])
          
          this.delete_pair(rotation_pairs[pair][0], rotation_pairs[pair][1])
          deleted_pairs.push(rotation_pairs[pair])
        } else {

          break;
        }

      }


      // conditions to end if no stable matching is found 
      agents_multiple_prefs = this.check_pref_count()
      console.log("checking number of agents with multiple preferances")
      console.log(agents_multiple_prefs)
      if (agents_multiple_prefs.size < 1) {
        break;
      }

      if (this.check_pref_list_empty() == true) {
        console.log("No Stable matching")
        break;
      }

    }

    // printing 
    console.log("ENDEST")
    
      for (let data of this.group1Agents.values()){

        console.log(data.name, " ---> ", data.ranking[0].name)
      }

    break;

  }

  return;

  }
}
