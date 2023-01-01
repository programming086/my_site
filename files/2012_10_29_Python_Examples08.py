__author__ = 'ktisha'

class AAA(object):
    x = 1

class BBB(AAA):
    pass

class CCC(AAA):
    pass


print AAA.x, BBB.x, CCC.x
# 1 1 1

BBB.x = 2
print AAA.x, BBB.x, CCC.x
# 1 2 1

AAA.x = 3
print AAA.x, BBB.x, CCC.x
#3 2 3



# AAA: {'x': 1}, BBB: {}, CCC: {}
print AAA.x, BBB.x, CCC.x
# 1 1 1

BBB.x = 2
# AAA: {'x': 1}, BBB: {'x': 2}, CCC: {}
print AAA.x, BBB.x, CCC.x
# 1 2 1

AAA.x = 3
# AAA: {'x': 3}, BBB: {'x': 2}, CCC: {}
print AAA.x, BBB.x, CCC.x
# 3 2 3
