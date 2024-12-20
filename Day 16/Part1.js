import {getCharCoords, stringTo2dArray} from "../sharedFunctions.js";

const input = `#############################################################################################################################################
#.....#.............#.#.......#.......#.................#.......#...#.......#.........#.....#.......#.......#...............#..............E#
#.###.#.###########.#.#.#####.#.#.###.#######.#########.#.#####.#.#.#.#####.#.#####.###.#.#.#.#######.#.###.#.###.#####.###.#.###.#.#.#.#.###
#...#...#.....#.....#.#.#...................#.#.......#.................#.#.#...#.#.....#.#...#.......#.#.#.#...#.....#...#.#.#.............#
###.#######.#.#.#####.#.#.#.###.###.#######.#.#####.#.#######.###.#.###.#.#.#.#.#.#######.#####.#######.#.#.#.#.#########.#.#.#.#######.###.#
#...#...#...#.#.....#.....#.....#...#.#.....#.....#.#.#...#...#...#.......#...#.#...#...#.....#.#.......#.#.#.#...........#.#.#.#...#.......#
#.###.#.#.#.#.#####.#.###########.###.#.#########.#.###.#.#.#.#.#############.#.###.#.#.#####.#.#.#######.#.#.###############.#.#.#.#######.#
#.#...#.#.#.#.....#.#.#...........#...#.#.#.....#.#...#.#.#.....#.........#...#.#...#.......................#...#.........#...#.#.#...#.....#
#.#.###.#.###.#.###.###.#############.#.#.#.#.###.#.#.#.#.###.###.#######.#.###.#.#.#.#.#.#.###.#####.#.#.#.###.#.#####.#.#.#.#.#.###.#.###.#
#.....#.#...#.#...#...#.#.........#...#.#...#.....#.#.#.....#.....#.....#.#...#.#.#.....................#.#...#...#...#.#...................#
#.#####.#.#.#.###.###.#.#.#######.#.###.#.#########.#.#.###.#.#####.#####.###.#.#.#.#.#.#.###.###.#.###.#.###.#####.#.#.#####.#.#.#.#.#.#.#.#
#...............#.#.....#.....#...#.....#.....#.....#.#.#.#.#.....#.#...#...#.#...#.#.#...#...#...#.#...#...#.......#.#.#.....#.#.#.#...#.#.#
###.#.#.###.#.#.#.#.###.#.#####.###.#########.#######.#.#.#.#.###.#.#.#.###.#.#####.#.#####.###.#.#.###.###########.#.#.#.###.###.#.###.#.#.#
#...#...#...#...#.....#...#.....#...........#...#.....#.#.....#...#.#.#.....#.......#.#.....#...#.#...#...........................#.....#.#.#
#.#####.#.#.#.#####.#.#.###.###########.###.###.#.###.#.#####.#.###.#.###############.#.#####.###.###.#.###.###.#.#.#########.#.#.#.###.#.###
#...#...#...#.#...#...#.#.#.......#...#...#.#.#.#.#.#.#.....#...#.......#.......#.....#.#.....#.....#.#.#...#.....#.....#.....#...#.#.#.#...#
###.#.###.#.#.#.#.#####.#.#######.#.#.###.#.#.#.#.#.#.#####.###########.###.###.#.###.#.#.#.###.#####.#.#.#####.#.###.#.#.###.###.#.#.#.###.#
#...#.#...#...#.#.............#...#.#.....#.#.....#.#...#.#.......#...#...#.#.#.#...#.#.#.#.#...#.#...#.#...#...#...#...#.#.#...#.#...#.#...#
#.###.#.###.#.#.#########.###.#.###.#####.#.#######.###.#.#######.#.#.#.#.#.#.#.###.#.#.#.#.#.###.#.#######.#.#.#####.###.#.###.#.#####.#.#.#
#.#.#.#.#...........#.....#...#.#.....#...#.....#.............#.#...#...#...#.......#...#.#.#.....#...#.....#.#.#...#.....#...#.#.......#.#.#
#.#.#.###.#.#.#####.###.#####.#.#.#.#.#########.#############.#.#######.#####.#########.###.#########.#.#.###.#.#.#.###.#.###.#.###.###.#.###
#...#...#.#.............#...#.#.#...#.#.......#.......#.....#.#.......#.#...#...#.......#...#.....#...#.#.#.......#...#...#...#.....#...#...#
###.###.#.#.#.#######.###.#.###.#####.#.#.###########.#.###.#.#####.###.#.#.###.#.#.#.###.###.###.#.###.###.#######.#######.#.#####.###.###.#
#.#...#...#.........#.....#.....#...#...#.#...........#.#...#.....#.#...#.....#.#.#.#.#.#...#.#.....#...#...#.....#.#.......#.#...#...#.#...#
#.###.#.###.#.#####.#.###########.#.###.#.#.###########.#########.#.#.#####.#.#.#.#.#.#.#.#.#.#######.#.#.###.#.#.#.#.#.#.###.#.#####.#.#.#.#
#.#...#...#.#.....#.#...#...#.....#...#.....#.........#...........#.#.....#.#...#.#.#.#...#.#...#.#...#...#...#...#.....#.#...#...#...#.#.#.#
#.#.###.#.#.###.#.#.###.#.#.#.#######.#.###########.#.#.###########.#####.#######.#.#.#####.###.#.#.#######.#.#.#.#######.#.#####.#.###.#.#.#
#...#...#.#.#...#.....#...#.......#...#.#...#.....#.#.#.#.#.......#.#.....#.......#.#.#.......#.#...#.......#...#...#.....#.......#.......#.#
#.#####.###.#.#.###.#.#######.#####.###.#.#.#.###.#.#.#.#.#.#.###.#.#.#.#.#.#######.#.#.#####.#.###.#.#######.#.#####.###.###############.#.#
#.#.............#...#.#.....#.#...#.#.#.#.#...#...#.#...#...#.#.....#.#.#.#.#.....#...#...#...#...#.#.......#.#.#...#...#.#.............#...#
#.#.#.#.#########.#.#.#.#.#.#.#.#.#.#.#.#.#####.#.#####.#####.#.#####.#.#.#.#.#.#######.#.#.#####.#.###.###.#.###.#.#.#.#.#.#######.#####.###
#...#.............#.#.#.#.#...#.#...#.#.#.#...........#.......#...#...#.#.#.#.#.......#.#.#...#...#.....#.#.#.....#...#...#...#...#.......#.#
#######.###########.#.###.#####.#####.#.#.#.#########.#####.#######.###.#.#.#######.#.###.###.#.#########.#.#.#####.#.#.#.###.#.#########.#.#
#.....#.......#.......#...#.....#.......#.#.#.....#...#.....#.....#.#...#.#...#...#.#.#...#.#.#...#.......#.#...#...#.#.#...#.#.............#
#.###.#.#####.#.#######.#.#.#########.###.#.#.###.#.###.#####.###.#.#.###.###.#.#.#.#.#.###.#.###.#.#.#####.###.#.###.#.###.#.#.#######.#.#.#
#.#...........#.........#.#.........#...#.......#.#.#...#.....#.#...#.#...#...#.#...#...#.....#.#.#.#.....#.#...#...#.#.#.#.#.....#...#.#...#
#.#####.###########.###############.###.#.###.###.#.#.###.#####.#####.#.###.###.#########.###.#.#.#######.#.#.#####.###.#.#.#.#####.#.#.###.#
#.......#.......#...#...............#...#.......#.#.#...#...#...........#...#.....#.....#...#...#.......#.#.#.....#.#...#...#.....#.#.#...#.#
#######.#.###.#.#.###.###############.#########.#.#.###.###.#.#####.###.#.#####.#.#####.###.#.#.#######.#.#.###.###.#.#####.#####.#.#.#.#.#.#
#...#...#...#.#.#.#...#.........#...#...........#...#...#...#...#...#...#.....#...#.......#...#.#.....#.#.....#.#...#.....#.....#...........#
#.#.#.#.###.#.#.#.#.#####.#.#.#.#.###############.###.###.#####.#.#.#.#######.#.###.#####.#####.###.#.#.#####.###.#######.#.###.#####.###.#.#
#.#...#.#...#.#.#.#...#...#.#.#...#.......#.....#.#...#.#...#.#.#.#.#.#.......#...#.#...#.....#.#...#.#.....#...#.....#.#.#.#...#...#.....#.#
#.#####.#.###.###.###.#.###.#.#####.#.#####.###.#.#.###.###.#.#.#.###.#.#########.#.#.#####.#.#.#.###.#####.###.#.#.#.#.#.#.#.###.#.#######.#
#.....#.#.#.#.#.......#...#.#.#...#.#...........#.#.....#.......#.#...#.#.........#.#.........#...#...#...#.#.#...#.#...#...#.....#...#.....#
#.###.###.#.#.#.#####.#.#.#.#.#.#.#.#########.#.#.#######.#######.#.###.###.###.###.#.#############.#.###.#.#.###.#.#####.###########.#.#####
#...#...#...#...#.#...#.#...#.......#.#...#...#.#.........#.....#.#.#...#.....#.#...#.....#.....#...#.....#.#.......#...#...#.....#...#.#...#
#.###.#.###.#####.#.#######.#.#####.#.#.#.#.###.#.###########.#.#.#.#.###.###.#.#.#.#######.###.#.#.#####.#.#######.#.#.###.###.#.#.###.###.#
#.#.......#.#.#...#.......#...#...#.#.#.#...#.....#.........#.#.#.#.#.#...#.#...#.#.......#...#...#.#.....#.........#.#...#...#.#.#.....#...#
#.#.#.###.#.#.#.#.#######.#.###.#.#.#.#.#####.#####.#######.#.#.#.#.#.#.#.#.#####.#######.###.#####.#.###.#######.###.###.###.#.#.#.#####.#.#
#.#.....#.#.#.#.#.....#.#.#.#...#.#...#.......#.#...#.......#.#...#.#.#.#.#.......#.....#...#...#.#...#.........#.#...#.#...#...#.........#.#
#.###.#.#.#.#.#.###.#.#.#.###.###.###########.#.#.#####.###.#.#####.#.###.#.#######.#.#####.###.#.#####.#####.###.#.###.###.#####.#######.###
#.#...#.#.#.#...#...#.#.#...#...#...#...#...#...#...#...#...#.......#.#...#.........#.#.......#...#...#.#.....#...#.#.....#.#...#.#...#.....#
#.#.#.#.#.#.#####.###.#.###.###.###.#.#.#.#.###.###.#.###.###.#######.#.#############.#.#########.#.###.#.###.#.###.#.###.#.#.#.###.#.#.#.#.#
#.#.#...#.#.#.....#.#.....#.....#.#...#...#.#.#...#...#...#...#...#...#.#...........#.#.........#.#.....#.#...#.......#...#...#.....#.....#.#
#.#.#.###.#.#.#####.#####.#######.#########.#.#.#####.#.###.###.#.#.###.#####.###.###.#########.#.###.###.#.#####.#####.#################.#.#
#.#.#...#.#.#...#.......#.......#.....#.....#.........#...#...#.#.#.....#.........#...#.......#.....#...#.#.....#.......#...#...#.#.........#
#.#.#.#.#.#.###.#####.#.#######.#.###.#.#####.###.#######.###.###.#######.#####.###.###.###.#######.#####.#####.#########.#.#.#.#.#.#####.#.#
#.#...#.#.#.#...#...#...#.....#...#.#.#.#.....#.....#.....#.#.....#.......#.#...#...#.....#.#.....#.....#...#.#...........#...#...#.#.......#
#.#.#.#.#.#.#.###.#.###.#.###.#####.#.#.#######.#####.#####.#####.#.#####.#.#.###.#######.###.#.#.###.#.#.#.#.###################.#.###.###.#
#...#.#.#.#...#...#.#...#.#.#...#.....#.........#.....#.#.......#...........#...#.....#...#...#.#.#.....#.#.#.....#.........#.....#.......#.#
#.#.#.#.#######.###.#.#.#.#.###.#.###############.#####.#.#.#####.#########.#.#######.#.###.###.#.#####.###.#.###.#.#######.#.#########.#.#.#
#.#.#.#.......#...#...#.#...#.....#.............#.....#...#.#.....#.....#.....#...#.....#...#...#.....#.....#...#.#.#.....#...#.....#...#.#.#
#.#.#.#####.###.#.#####.###.#.#.#.#.###########.#####.###.#.#.#####.###.###.###.#.#.#####.#.###.#####.#####.#####.#.###.#.#####.###.###.#.###
#...#.....#...#.#...#...#.#.#.#...#.#...........#...#...#.....#.#...#.#...#.#...#.#.#...#.#.........#.....#.#...#...#...#.........#.....#...#
###.###.#.###.#.###.#.###.#.#.#####.#.#########.#.#####.#.#####.#.###.###.#.#.###.#.#.#.#.#.#.#.#########.###.#.#.###.#########.#.#.###.###.#
#.......#...#.#.#...#.....#...#.....#.#.......#.#.#.....#.....#.#.#.....#.#.#...#.#.#.#...#.#...#.....#...#...#.#...#...#.....#.#.#.#.......#
#######.###.#.#.#.#.#####.#.#.###.###.#######.#.#.#.#########.#.#.#.#####.#####.#.#.#.#####.#.###.###.#.###.###.###.###.#.###.#.#.#.#.#.###.#
#...#.......#.....#...#.#...#...#...#...#.....#.#.#.#.......#...#...#...#...#...#...#.#...#.#.....#...#.....#...#...#...#.#.#.......#...#...#
#.#.###.#########.###.#.#.#.###.#######.#.#####.#.#.###.#.#####.###.#.#.###.#.#######.#.#.#.#######.#########.###.###.#.#.#.#####.#.###.#.###
#.#...#...#.....#.#...#.#.#...#.........#.#.......#...#.#.........#.#.#...#.#...#...#...#.#...#...#.#.......#.#...#...#...#.#.....#.#.#.#...#
#.###.#.###.###.#.#.###.#.#.#.#.#########.#.#########.#.###########.#.###.#.###.#.#.#####.###.###.#.#.###.###.#.###.#.#.###.#.#####.#.#.#####
#...#...........#...#...#.#.#...#.#.......#...#.#...#.#...#...#...#.#...#.#.#...#.#.....#...#.....#.....#.#...#...#.#.#.#...#.#.......#.....#
#.#.###.#.###.#.#.#####.#.###.#.#.#.#####.#.#.#.#.#.#.###.#.#.#.#.#.#####.#.#.###.###.#####.#.#.#.#####.#.#.#####.#.###.###.#.#######.#####.#
#.#.#.#.#...#.#...#.....#.#...#...#.#...#.#.....#.#...#...#.#.#.#.#.#...#.#...#.....#.#.....#...#.#...#.#...#...#.#.#.......#.#.....#.#.....#
#.#.#.#.#.#.#.#####.#.#.#.#.#####.#.###.#.#.#####.#########.#.#.#.#.#.###.###.#####.#.#.###########.#.#.#####.#.#.#.#.#######.#.###.###.###.#
#.#.#.#.#...#.#.....#.#.#...#...#.#.....#...#...#.#.........#...#.#.#...#...#.....#.#.#.............#.#.#...#.....#...........#...#.#...#...#
#.#.#.#.#.#.#.#.#####.#.#####.#.#.#####.#####.#.#.#.#########.###.#.#.#.#.#.#####.#.#.#########.###.#.#.#.#.#.#########.#.###.#.#.#.#.###.###
#.#...#.#.#.#...#.....#.....#.#.#.....#...#...#.#.....#.....#.#.....#.#...#.#.....#.#...#.........#.#.#...#.#...#.....#.#...#.#.#.#...#.....#
###.#.#.#.#.#####.###########.#.#.#######.#.###.#######.###.#.#.#########.#.###.#######.#.#######.###.#####.###.#.###.#####.#.#.#.###.#######
#...#...#.#.....#.........#...#...#.......#.#.#.....#...#...#...#.........#...#.......#.#.......#.....#.#...#.......#.#.....#...#...........#
#.###.#.#####.#.###.#####.#.#######.#######.#.#####.#.###.#####.#.#.#########.#######.#.#######.#######.#.###.#####.#.#.#.#.###.###########.#
#...#.......#.#.......#.#...#.......#.....#.....#.#...#...#...#...#.#.......#.....#.........#...#.....#...#.....#.#...#.#...#.#.......#.#...#
#.#.###.#.#.###.#.###.#.#####.###.#.#####.#.###.#.#####.#.#.#.###.###.#.#.#.#####.#.#########.#####.#.#.###.###.#.#.###.#####.#.#####.#.#.#.#
#.#...#...#...#.#.#.#.......#.#.#.#.......#.....#.......#...#.#...#...#...#.......#.#.........#.....#.#...#...#.#...#...#.......#...#...#.#.#
#.#.#.#.#.###.###.#.###.#.#.#.#.#.###.#####.#.#.#.###.#.#####.#####.#################.###########.###.###.#.#.#.###.#.###.#.#.#.#.#.#####.#.#
#...#.#.#...#.....#.....#.......#.....#.....#...#...#.#...#.#.......#...#.............#.....#.....#...#...#.#.#...#...#...#.#.#...#.....#.#.#
#.#.#.#.#.#.#############.#########.#.#.###########.#.###.#.#########.###.#####.#######.#.#.#.#.#####.#.#####.###.#####.###.#.#.#######.#.#.#
#.#...#.#.#.#.........#...#.........#.#.#.........#.#.#...#.......#.....#.#...#.#.......#.#.#.#.#...#.#.......#...#.......#...............#.#
#.#.###.#.#.#.#######.#.###.#######.###.#.#####.#.###.#.#########.#.###.#.#.###.#.###.###.#.###.#.#.###########.###.#####.#.#.#.###.#####.#.#
#.#.......#.....#.....#...#...#...#.....#.#...#.#.....#...........#.#.#...#...#.#.....#...#.....#.#...........#.#...#.....#.#.#...#.......#.#
#.#.###.#.#######.#####.#.###.###.#######.#.#.#.#################.#.#.#######.#.#####.#.###.#####.#########.###.#.###.#####.#.###.#########.#
#.#...#...#.#.....#.....#...#.......#.......#.#.......#...........#...#.....#.#.#...#.#.#.........#.#.....#.....#...#.#.....#...#...#.....#.#
#.#.#.#.#.#.#.#.###.#.#####.#######.###########.#####.#.#############.#.###.#.#.#.#.###.#.#.#######.#.###.###########.###.#####.###.#.#.#.#.#
#...#...#.#.#.#.#...#...#...#...#.#...#...#...#.....#...........#...#...#...#.#.#.#...#...#.#.....#.#.#...#.........#.............#.#.#.#.#.#
#########.#.#.###.#####.#.###.#.#.###.#.#.#.#.#######.#########.#.#######.###.#.#.###.#.###.#.#.#.#.#.#.#.#.#######.#.#############.#.#.###.#
#.#.....#.#.#.........#.#.#...#.#...#...#...........#...#.........#...........#.#...#.#...#...#.#.#...#.#.#.#.....#.#.......#.......#.#.....#
#.#.#.###.#.###########.#.#.###.###.###############.###.###########.#.#######.#.###.#.###.#####.#.#####.#.#.#.#.###.#######.#.#######.#######
#.#.#.....#...#.........#.#.#.#.........#.........#...#.............#.....#...#.#...#...#.....#.#.......#...#.#...#.....#...#.#.............#
#.#.#######.###.#.#####.#.#.#.#########.#.#.#########.###############.###.#.###.#.###.#.#####.#.#############.###.#####.#.###.#.###########.#
#...#.....#...#.#.#...#.#...#.#...#.....#.#.#.........#...............#.#.#.#...#.#...#...#.....#...........#.#.......#.#...#...............#
#.#####.###.#.#.#.#.#.#######.#.#.#.#####.#.#.#######.#.#.#############.#.###.#.#.#.#####.#######.#######.###.#.#######.###.#.###.###.#.#.###
#.#.....#...#.#.#.#.#...#.......#.....#...#...#.......#.#.#...#.........#.....#.#.#.....#...#...#.#.....#.....#.......#.#...#.......#.#.#...#
#.#.#.###.###.#.###.###.#.#############.#########.###.#.###.#.###.#########.###.#.###.#.###.#.#.#.#.#.###############.#.#########.###.#.###.#
#.#.#.....#...#...#...#...#.......#...#.#.#.......#.....#...#...#...........#.....#...#.#...#.#...#.#.........#.....#.....#.......#...#.#...#
#.#########.#.###.###.#.###.#.#####.#.#.#.#.###.###.###.#.#####.#.###########.#####.###.#.###.#.#.#.#####.###.#.###.#.###.#.#####.#.###.#.###
#...........#.#.#...........#.#.....#...#.....#.....#.#.#.....#.#.........#...#.......#.#.#...#.#.#.....#.#...#...#...#.#...#.....#...#.#.#.#
#####.#######.#.###############.#########.#########.#.#.#####.#.#########.#.###.#####.#.#.###.#.#.#####.#.#.#####.###.#.#####.###.#.#.#.#.#.#
#.#.....#...#.#.................#...#.......#.......#.#...#.#.#.....#...#.#.#.....#...#.#...#.#...#.....#.#.#.#...........#.#.#.....#.#.....#
#.#.#.#.#.###.#.###.#.###########.###.#######.#######.###.#.#.#####.#.#.###.#.###.###.#.###.#.#########.#.#.#.#.#####.#.#.#.#.#.#.###.#####.#
#...#.#...#...#.#...#.........#.............#.#...#.......#.#.#.......#.#...#...#...#.#...#.........#.....#.#.#...#.....#.....#.....#...#...#
#.###.#.###.###.###.#########.###.#######.#.#.#.#.###.#####.#.#.###.#.#.#.#########.#.#.###.#.#.###.#.#####.#.###.#.###.###.#.###.#.###.#####
#...#.#.....#.....#.........#...#...#...#.#...#.#...#...#...#.....#.#.#.............#...#...#...#...#.....#.#...#...#.#...#.#.#...#.#.#.....#
###.#.#.#########.#######.#####.###.#.#.#.#####.###.###.#.#.#.###.###.###############.###.#######.#.###.#.#.#.#.#####.###.#.#.#.#.#.#.#####.#
#.#.#.#...#.....#.#...#...#.....#...#.#...#.....#...#.......#.#.#.......#.......#.....#...#...#...#...#.#.#...#.........#.#.#.#.#.....#.....#
#.#.#.#.#.###.#.#.#.#.#####.#########.#####.#####.#########.#.#.###.#.#.#.#####.#######.###.#.#.###.#.#.#.#####.#########.###.###.###.#.###.#
#.#.#.#...#...#.#.#.#.....#.#.........#.....#...#.......#...#.....#...#.#...#.#.#.......#...#.#.....#.#.#.#.....#.......#...#.......#.#.#.#.#
#.#.#.#.###.###.#.#.#####.#.###.#####.#.#####.#.###.###.#.#####.#.#####.###.#.#.#.#######.###.#######.###.#####.#.#####.###.#####.#.###.#.#.#
#...#...#...#...#.....#...#.#.......#.#.....#.#...#...#.#.#.............#...#.#.#...#...#...#...#...#...#.....#.#.#...#.#.....#...#.....#.#.#
#.#####.#.###.###.#####.#.#.#.#.###.#.###.###.###.#####.###.#.#.#####.###.###.#.#.#.#.#.###.#.#.#.#####.#.#.#.#.#.#.###.#.#####.#.#######.#.#
#.#.....#...#...#.#.....#.#.#.#...#.#.#.#.#...#.......#.....#...#...#.#...#...#.#.#...#.#...#.#...#.....#.#...#.#.#.#...#...#...#.......#...#
#.#.###.###.###.###.#######.#.#.#.#.#.#.#.#.#.#######.#########.#.#.###.###.#.#.#.###.#.#.###.#####.#.#.#.#.#####.#.#.#####.#.###.#.###.#.###
#.#.#...#...#...#...#.......#.#.#...#.#.#.#.....#.............#.#.#.#...#...#...#.....#.#...#.......#...#.#.#...#.#...#...#.#.#...#...#.#...#
#.#.#.#.#.###.###.#.#.#######.#.#####.#.#.#####.#.#######.#.#.###.#.#.###.#######.#####.###.#############.#.#.#.#.#.###.#.#.#.#.#.###.#.###.#
#...#.#...#.#.....#.#.#.......#.......#.#...#...#...#...#...#...#.#...#...#.......#.#.....#...........#...#.#.#...#.#...#.#.....#...#.#.#...#
#####.#.###.#######.#.#######.#.#####.#.###.#.###.###.#.#######.#.#####.#.#.#.###.#.#.#.#.#.#.#####.#.#####.#.#####.#.###.#######.###.#.#.###
#...#...#.........#.#.......#.#.....#.....#.#.#...#...#.#.....#.#.#...#.#.#.#.....#...#.#.#.#...#.#.#.....#.#...#.....#...#...#.#.#...#.#...#
###.###.#.#########.#######.#.#####.#.###.#.#.#####.###.#.#####.#.#.#.#.#.#####.#.#.###.#.#.###.#.#.#####.#.###.#.#######.#.#.#.#.#.###.###.#
#.....#...........#...#.....#.#...........................................#...#.#.#.#...#.#.#...#.#...#.......#.#.#.....#...#.#...#.#.....#.#
#.#####.#########.#.#.#.#####.#######.#####.#.#.#####.###.#.#.#######.#.###.#.###.###.###.#.#.###.###.#######.#.###.###.#####.#.###.#.#####.#
#.....#.........#.....#...#.#.......#...#...#.....#...#...#.#.#.....#.#.#...#.....#...#...#.#.......#...#...#.#.....#...#.....#.#...#.#.....#
#.###.#########.#####.###.#.#.#####.#.#.#.#########.###.###.#.#.#.#.#.#.###.#######.#####.#.###.#######.#.#.#########.###.#######.###.#.#####
#.#...........#.#.#.....#.#.......#...#.........#...#.....#.#.#.#.....#.....#...#.......#.#...#.#.....................#.............#.......#
###.#.#######.#.#.#.#.#.#.###.#########.#########.#########.#.#.###############.#.#####.#.###.#.#.###.#.#.#######.#.###.#######.#.#.#######.#
#...#.#...#.....#...#.#.#...#.#.......#.#...#.....#.........#.#.........#.......#...#.#.#.....#.#.#...#.........#.#...#.......#.#.#.......#.#
#.###.#.#.#.#.#######.#####.#.#.#####.#.#.#.#.#####.###.#####.#.#.#####.###.#.#####.#.#.#.#######.#.#####.#####.#.###.#.#####.#.#######.###.#
#...#.#.#.#.........#...#...#.#...#.#.#...#...#.....#...#...#.#.#.....#...#.#.........#.#.#...#...#.....#.#...#.#.#...#.....#...........#...#
###.###.#.###.#####.###.#.#######.#.#.#.#.#####.#.###.###.#.#.#.#####.###.#.###########.#.#.#.#.###.###.#.#.#.###.#.#.###################.###
#...#...#.........#.....#...#.....#...#.#.....#.#.......#.#.#.#.........#...#.....#.....#...#.#...#.#...#.#.#.....#.#.#.....#.......#.....#.#
#.###.#######.#.#######.###.#.#####.#########.#.#####.#.#.#.#.###########.#.#####.#.#########.###.#.#.#####.#####.#.###.###.#.#####.#.#####.#
#S............#...........#...#...............#.......#...#...............#.......#...............#.........#.....#.......#.......#.........#
#############################################################################################################################################`

const map = stringTo2dArray(input)

const startCoords = getCharCoords('S', map)

const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

const startingDirection = directions[1]

const isOppositeDirection = (dir1, dir2) => {
    const index1 = directions.indexOf(dir1)
    const index2 = directions.indexOf(dir2)
    return Math.abs(index1 - index2) === 2
}

const getNewCoords = (coords, direction) => {
    return [coords[0] + direction[0], coords[1] + direction[1]]
}

const shortestPathAtNode = {}

const isShortestPathAtNode = (coords, direction, score) => {
    const shortestPath = shortestPathAtNode[[coords[0], coords[1], direction]]
    if (shortestPath) {
        if (score < shortestPath) {
            shortestPathAtNode[[coords[0], coords[1], direction]] = score
            return true
        } else return false
    } else {
        shortestPathAtNode[[coords[0], coords[1], direction]] = score
        return true
    }
}

let lowestScore

const takeAction = (coords, currentDirection, score = 0, path = new Set) => {
    if (path.has(coords.toString())) return
    if (map[coords[0]][coords[1]] === '#') return
    if (!isShortestPathAtNode(coords, currentDirection, score)) return
    if (map[coords[0]][coords[1]] === 'E') {
        lowestScore = score
        return
    }
    path.add(coords.toString())

    directions.forEach( direction => {
        if (isOppositeDirection(direction, currentDirection)) return
        let scoreToAdd = 1
        if (direction !== currentDirection) scoreToAdd = 1001
        const newCoords = getNewCoords(coords, direction)
        takeAction(newCoords, direction, score + scoreToAdd, new Set(path))
    })
}

takeAction(startCoords, startingDirection)

console.log(lowestScore)