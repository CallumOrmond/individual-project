from matching.games import StudentAllocation



student_preferences1 = {1 : ["D", "B", "E", "A", "C"],
      2 : ["D", "A", "B", "C", "E"],
      3 : ["E", "C", "D", "A", "B"],
      4 : ["D", "E", "C", "A", "B"]}

project_capacities1 = {'A': 2, 'B': 2, 'C': 2, 'D': 2, 'E': 2}

project_supervisors1 = {"A" : "L1", "B" : "L1", "C" : "L1", 
                       "D" : "L2", "E" : "L2"}

supervisor_preferences1 = {"L1" : [3,1,4,2],
                          "L2" : [4,2,1,3]}

supervisor_capacities1 = {'L1': 3, 'L2': 3,}

instance1 = [student_preferences1, supervisor_preferences1, project_supervisors1, project_capacities1, supervisor_capacities1]


student_preferences2 = {1 : ["A","B","C","D","E"],
                        2 : ["B","E","A","D","C"],
                        3 : ["C","D","B","A","E"],
                        4 : ["B","E","A","C","D"]}

project_capacities2 = {'A': 2, 'B': 2, 'C': 2, 'D': 2, 'E': 2}

project_supervisors2 = {"A" : "L1", "B" : "L1", "C" : "L1", 
                       "D" : "L2", "E" : "L2"}

supervisor_preferences2 = {"L1" : [2,4,1,3],
                          "L2" : [2,3,4,1]}

supervisor_capacities2 = {'L1': 3, 'L2': 3,}

instance2 = [student_preferences2, supervisor_preferences2, project_supervisors2, project_capacities2, supervisor_capacities2]



student_preferences3 = {1 : ["C","B","D","E","A"],
                        2 : ["B","C","E","A","D"],
                        3 : ["B","A","D","E","C"],
                        4 : ["A","B","E","C","D"]}

project_capacities3 = {'A': 2, 'B': 2, 'C': 2, 'D': 2, 'E': 2}

project_supervisors3 = {"A" : "L1", "B" : "L1", "C" : "L1", 
                       "D" : "L2", "E" : "L2"}

supervisor_preferences3 = {"L1" : [3,2,4,1],
                          "L2" : [4,3,2,1]}

supervisor_capacities3 = {'L1': 3, 'L2': 3,}

instance3 = [student_preferences3, supervisor_preferences3, project_supervisors3, project_capacities3, supervisor_capacities3]


student_preferences4 = {1 : ["C","B","D","E","A"],
                        2 : ["B","C","E","A","D"],
                        3 : ["B","A","D","E","C"],
                        4 : ["A","B","E","C","D"],
                        5 : ["E","C","A","D","B"],
                        6 : ["C","E","B","D","A"]}

project_capacities4 = {'A': 2, 'B': 2, 'C': 2, 'D': 2, 'E': 2,}

project_supervisors4 = {"A" : "L1", "B" : "L1", "C" : "L1", 
                       "D" : "L2", "E" : "L2"}

supervisor_preferences4 = {"L1" : [1,2,6,4,5,3],
                          "L2" : [5,4,3,1,6,2]}

supervisor_capacities4 = {'L1': 3, 'L2': 3,}

instance4 = [student_preferences4, supervisor_preferences4, project_supervisors4, project_capacities4, supervisor_capacities4]



student_preferences5 = {1 : ["E","B","D","A","C"],
                        2 : ["A","D","B","C","E"],
                        3 : ["C","A","D","B","E"],
                        4 : ["B","A","E","C","D"],
                        5 : ["C","A","D","B","E"],
                        6 : ["A","E","D","B","C"]}

project_capacities5 = {'A': 2, 'B': 2, 'C': 2, 'D': 2, 'E': 2,}

project_supervisors5 = {"A" : "L1", "B" : "L1", "C" : "L1", 
                       "D" : "L2", "E" : "L2"}

supervisor_preferences5 = {"L1" : [6,3,5,2,4,1],
                          "L2" : [2,1,6,3,4,5]}

supervisor_capacities5 = {'L1': 3, 'L2': 3,}

instance5 = [student_preferences5, supervisor_preferences5, project_supervisors5, project_capacities5, supervisor_capacities5]



student_preferences6 = {1 : ["A","C","E","B","D"],
                        2 : ["A","C","D","E","B"],
                        3 : ["C","E","B","D","A"],
                        4 : ["E","B","C","D","A"],
                        5 : ["E","D","A","B","C"],
                        6 : ["B","A","C","E","D"]}

project_capacities6 = {'A': 2, 'B': 2, 'C': 2, 'D': 2, 'E': 2,}

project_supervisors6 = {"A" : "L1", "B" : "L1", "C" : "L1", 
                       "D" : "L2", "E" : "L2"}

supervisor_preferences6 = {"L1" : [1,3,2,4,5,6],
                          "L2" : [4,1,5,3,2,6]}

supervisor_capacities6 = {'L1': 3, 'L2': 3,}

instance6 = [student_preferences6, supervisor_preferences6, project_supervisors6, project_capacities6, supervisor_capacities6]






game = StudentAllocation.create_from_dictionaries(*instance6)


for key, value in game.solve().items():
    print("(", value, ",", key, ")")