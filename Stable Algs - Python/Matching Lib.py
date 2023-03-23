
from matching.games import StableRoommates

# SR checker

instance = {0 : [1,3,5,2,4],
            1 : [3,4,5,0,2],
            2 : [3,4,5,0,1],
            3 : [5,2,0,4,1],
            4 : [5,2,3,1,0],
            5 : [0,1,3,2,4]}


game = StableRoommates.create_from_dictionary(instance)
# print(game.solve(), game.check_stability())



#SPA checker
from matching.games import StudentAllocation

student_preferences = {
    "A": ["1", "7"],
    "B": ["1", "2", "3", "4", "5", "6"],
    "C": ["2", "1", "4"],
    "D": ["2"],
    "E": ["1", "2", "3", "4"],
    "F": ["2", "3", "4", "5", "6"],
    "G": ["5", "3", "8"]
}


# WORKING FOR https://eprints.gla.ac.uk/3439/1/irving3439.pdf EXAMPLE - PAGE 6-9
# https://matching.readthedocs.io/en/latest/how-to/create_from_dictionaries.html - DOCS 

supervisor_preferences = {"L1": ["G", "D", "A", "C", "B", "E", "F"], "L2": ["C", "B", "F", "G", "E"], "L3" : ["A", "G"]}

project_supervisors = {"1" : "L1", "2" : "L1", "3" : "L1", "4" : "L2", "5" : "L2", "6" : "L2", "7" : "L3", "8" : "L3"}


project_capacities = {'1': 2, '2': 1, '3': 1, '4': 1, '5': 1, '6': 1, '7': 1, '8': 1}
supervisor_capacities = {'L1': 3, 'L2': 2, 'L3': 2}


game = StudentAllocation.create_from_dictionaries(
    student_preferences,
    supervisor_preferences,
    project_supervisors,
    project_capacities,
    supervisor_capacities,
)


# print(game.solve())
# for i in game.solve():
#     print(i)

from matching.games import HospitalResident

# hospitals = {"A" : [1, 2, 4 ,3],
#              "B" : [3, 2, 4, 1],
#              "C" : [4, 3, 1, 2]}

# residents = {1 : ["C", "A", "B"],
#              2 : ["A", "B", "C"],
#              3 : ["B", "A", "C"],
#              4 : ["A", "C", "B"]}




hospitals = {1 : [1, 2, 4 ,3],
             2 : [3, 2, 4, 1],
             3 : [4, 3, 1, 2]}

residents = {1 : [3,1,2],
             2 : [1,2,3],
             3 : [2,1,3],
             4 : [1,3,2]}

capacities = {1 : 2,
              2 : 2,
              3 : 2}


game = HospitalResident.create_from_dictionaries(residents, hospitals, capacities)
print(game.solve(optimal="hospital"))

game = HospitalResident.create_from_dictionaries(residents, hospitals, capacities)
print(game.solve(optimal="resident"))





from matching.games import StableMarriage

suitor_preferences = {"A": ["X", "Y", "Z"], "B": ["Y", "Z", "X"], "C": ["Y", "X", "Z"]}

reviewer_preferences = {
    "X": ["B", "C", "A"],
    "Y": ["A", "C", "B"],
    "Z": ["A", "B", "C"],
}

game = StableMarriage.create_from_dictionaries(suitor_preferences, reviewer_preferences)
print(game.solve(optimal="suitor"))

game = StableMarriage.create_from_dictionaries(suitor_preferences, reviewer_preferences)
print(game.solve(optimal="reviewer"))




