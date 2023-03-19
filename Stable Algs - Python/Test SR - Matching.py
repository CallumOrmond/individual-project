from matching.games import StableRoommates

instance1 = {0 : [1,3,5,2,4],
            1 : [3,4,5,0,2],
            2 : [3,4,5,0,1],
            3 : [5,2,0,4,1],
            4 : [5,2,3,1,0],
            5 : [0,1,3,2,4]}

instance2 = {0 : [1,3,5,2,4],
            1 : [3,4,5,0,2],
            2 : [3,4,5,0,1],
            3 : [5,2,0,4,1],
            4 : [5,2,3,1,0],
            5 : [0,1,3,2,4]}

def input_to_usable(l):

    instance = {}

    for index, value in enumerate(l):

        newlist = []
        s = str(value)
        print(s)
        for char in s:
            print(char)
            newlist.append(int(char))

        instance[index + 1] = newlist

    return instance

a = ["423", "134", "412", "231"]
b = ["432", "314", "124", "123"]
c = ["45362", "16453", "52146", "56321", "36412", "32514"]
d = ["46352", "13654", "61452", "56312", "42361", "14352"]
e = ["3874652", "8715463", "8654712", "5673218", "2163487", "3728154", "3154826", "7465312"]
f = ["7536842", "5671483", "4725168", "8276315", "4783162", "1452378", "6342518", "6215374"]
instance = input_to_usable(f)


game = StableRoommates.create_from_dictionary(instance)

for key, value in game.solve().items():
    print("(", key, ",", value, ")")