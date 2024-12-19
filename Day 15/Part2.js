import {getCharCoords, stringTo2dArray} from "../sharedFunctions.js";

const input = `##################################################
##...OO.O.#.O..........OO..#.#..O.O.O.....O......#
#O.O#.OO.O#..O.....O..#..O........OO...O...#.....#
#O#..O........O.O.O.O......O.O##...#.O....O.O#.O.#
#...O.O...O..O..O..O.O..OO.O....O....OO.......##.#
#O...O......#O.#...O.O.....#O.....O....#.........#
#..OOO.....#.O.O#.........O#.OO.O.OO......OO...#.#
#OO.O...#.O.....O#O....O#.........O........O#OO#.#
#.#OO......O...O.O.#...........OO......O.#.OO....#
#.#O..O.O..O...O.O......OO.......OO#..O.OO#OO....#
#.O......#..OO.O...........O........O.O#.OO......#
#O..#..#...#...............O.#......OOO.OO.....OO#
##..OO.....#O##...O.O...##......#OOO..OO...O..O..#
#..OO..O..#O...O.O..O.#.O#O##.O..O..O..OO.#O.#.O.#
#...O..........OO........#...OO..O...O....O.OOO.O#
#...O.......O...OO.#O....O....O.O.O.O.#.O#..OO...#
##..O...O.O.......#O.OO.OO.OOO...O.OO....O..#....#
#O..#...O.......O#OO.O...OO...O...#....O.OO.OO..##
#...O..OO.#O.....O.OO..OOO.O........OO.O...#OOO.##
#.#......#..OO..OO.O.O.........O..#...O........O.#
#O...O..O.......O.O..#.OO.OO....#O....O....O...#.#
#.##O.#...O.#.......#O.O..O.OOO.......O..O..O..O##
#...OO.O..O......##...#.#.....O#O...O..O......#O.#
#..O#OO.O.OO..#O........OO..##..O...O......OO.O..#
#O..O.O.......OO.OO.....@O#.....#.O..#O........O.#
#...........O#.....O....OO..OO...O..OO...O..OO..O#
#O#...OOO................O.###.O...O.......O.....#
#.OO.O...OO#O..O#..OO.OO...O.......OO.O.....O...O#
#.O..#.O......OO..O.......#.OO.##OOOO..O....#.#O.#
#.............O...O..O.OO#OO.O#..OO.OO#O.##.....##
#..#O.OO.O.#..O#......O#.O....O.OO.O..O...O....###
#O.O.O.O...OOO..O..O..........O#.OO..#...#O.###..#
#..O#.#O.OO.....#OO.O....O..#......O.#O##..#...O##
###.O.....O.....O.#OO.....O........O.OO#....O....#
#O..#O.O.O.....O#.O..O.O#O...#.............O...#.#
#..............#O.#.#....O.OO...O...O......#...#.#
#OOOO...O.#..O..O#.#O....OOO........O.....O...#..#
#OOO.O.#.OO..O.#.O..O.O........#..O...#O.....O.O.#
#.....##.O.#OO.OO#.OO..OO.OO...OO...O....O#.#O..##
#O.O.O.O..O.....O......OOO...O..O...O#OO...O..O..#
#OO..OO..O......#....OO..#.O...OO..O....#O..#....#
#OO....OO..OOOO....O.OO.....O.O#.....#O....O.OOOO#
#........O.....#O..#O......O....O.#.O#..##..O..OO#
#.#....#...O.O.O....O.......OO#.OOO#.#....#..#...#
##O.O.#.....#O.......O.OO.#O...#OOO.O.#....OOO...#
#..O.O#.O..OO..O.........O......O..OO.OO.OO......#
#.O.....#.#O.O...OO................O.O.#O..#...O.#
#...O......O.OO..OO..OO....#O.O..#O..O#....O...#O#
#OO.O....O#..O.#.OOO.#............O.O.OO.O#.O.#O##
##################################################

v>>^vv>>>^v>v^^>vv^><^vv^^^<^^<^>>^<>><^^>v>vvv<>v><>>v<v<<^^^vv<v^^><vvv<v<<<<^>^>>><><^>^>^^^>>^^^<<v^v^>^^<>^v<^v<<>^^vv<^>v>v<<>v^<<>^><<>>vv>^<>vv>v>>><<^>^^>v<>>v^<^<^>vvv<>^v<^<<<^>^^v<vv<^><vv<>>^<^^v<^<<^<^^>vv^<>^<>>><^<<^v<v<>vvvv<^<^v<>>v<><vvvv^v^<v<<v>^^>^^v^vv<<^^v>v<^vv>^vv><vv<<>v>v<>vv<<<><v>vv<^<><^><<<>^><<<<^>v^v<>vv^^<v^>>>v>^><v>v^^<v<^v>v>><^^<>>v<>v>>^<<v<^vvvv<vvv>^<v^<vvv<v^>^^>>v^^^<<^<<>^^<>><v>^>>^>>^>>vv>v^<v>vv<><<>><<<>v>>vv^^>v<vvv<v>>><<><><v^^>^v<^<>v<<^><><^^>^>^^vv<^vv><v^^><<<<<<<<v<^<<^v^^^><>v>^^^<><^v>v<^v><<<<<><^vv>^v>v^<<>v^>v<^>^<>^<v^v^>v^v^<^<><>>^<<^vv<>>vv^v^^<^<v<v^v^><>^^<>^><>^^v<^v<<v^^<>^v<v^^v^v>v^>><^^<><>>^v><v>><<>v>>>>v<<<^v^^v<<<<^v<><^<^^<v<>>^^>>>v>v>>><^<vv^<<^vvv>^<>^v<<^^>v^<^<v>v><vv^<v>>^^<>^v^^^<>v^v>v^><><v<v>v<^v>^vv<>><>>^>v^^<v<<^^><<^<^^^v><<^><>>v<<<v<<>><v<><<v>><<<^^^^v^v>v<vv><^^>>^^v>v<<<^<<>^v>>>v^v^v<<v^v<<><><><^<v^>v<><<>><>^^^><v^>^v<v<vv>v^<^^>><^^^vv^>v^<<v^>^^v^v>>v><<<>vv^><>v<>>>v^^^vv<v<<>>>>v<><^
<vvv>v>v>>^v^<<<>>><>><<<^v^v>^^<v><vv>>^v<^<<>>^^^^v^><^^^v>v^vv^v<>>v>>>><v>^vv<<v<v<>>vvv^<>vvvv^>><<>^^<<^><><^<>v<^<<<v^>>^>^<<^^>>>^^v^vv>^><vvv^vv>><><>>^<v>>^v<>>><>v^v<vvvv<v^vvv^^^<^<^>v<>^v>><v>^^>^<v^<<v>v^>^v^^>vv<v^<><^<^<^<^>v<<<>>>v^v<^v<<<>^<<v^<>>>v><>>v<>>^><^>>v<^>v>v<><vv^<^^vv><^^v<v>vvvv<v<<^<>^>^^>^>>>vv>vv>v<^>v>^<<>^v<<<<v>^^vv>^v<^v>^>>^^^><v^>^>>^v<>v^<^v><>v><<<><<v<^^^^vv>^v><<<vv<<vv>^^v>><v<^vv<^<>v<vv^^v^vv<>v^^v<^^><<>^^>>v>v^>v<<vvv><^>v<<>v<<v<<><>^^^><^^^<<>v>v<<><<><^<v<<<>>v^<<v><<><^>^v>>>>><>v<<v>^^^>^>^v^v>><>>>>vvv^<v><^>^<^>v<^>^v>^<^^<vv<<v^<^^><<>v^<>^vv>^<>v>vv>v^^^<v^><^v^^^vv>vv>v^>^<<v><^vvv>v<vv<<^^>v^>v><>v^^^^<^v^v^<><vv<^<<vv>v>v^>>^<v>v>^<vv>>v<><^^<><vv>><<v<>^<>v<^>vvv<<>v<v^v>>^>><v^>^^><>vvv^^^v>^^<v>>><>v>^<^^^>vv<<<^>vv<^<^<>vvv<>^v^^>^^<^^^v^<v<^><>v<^^>^^>>v^v<><^v<>><>^<<<<v^v<^>v>>v><vv<v^<v^^v><vv^vv>>>^>^v>^^^vvvvvv>^vv>v>v<>^^><><^>^<>>^^^v^<<v<<v<v<<vv^^^vv>v^<^<<<^<vv<><>><<<vv><<<^^<<><<><>^<<vv<v^<v>><^v^^v><^v>>vv
^<<<>>v>>^^v<>><^><^^>v>>^^^<>^>>^>v>>^>><^><^>v<v>v^v>v^v>vvv<<^>>vv>^<vv^v^^^v<^^v<^>v>v<>^<<v<<<>>^>^^v>>v<<vvv<^<^^>^<^>><^v^v><<>v>>><<>v^<^><v<v<vv^v<<><v>vv^v^v^v>^>v<^><><<v<v>^><v<^<v<^>>><^>v>^><<<vvv<vv<^v>v>^<vv^>>>v^<v^<<^>^<<<>>v<v<v>^^v>v<^>>>v^^^<<^<^v><^><^>vv>>^>>>v>^<^<v<v>vv><^^>>^<<^>><<<v^<<<v>v<^<v>^^v<<>v>vv^<vv>^v<>v^v>>^>^^><>v><v>v^>>>>>vv^><^>v<^^vv^^>>><<<><^<v<<>^><>>>v>>^<<<<>^v^v><^v^^^<<v<v<^>>^<^<<<v^<<<>v^<>^v>v^>^<>^>^<v<><^^<<<v<<v>><>^<^<^>^v^v><<>>>v>^vv^v<>>>><v<>v^<v<<vv<v<>>v>vv><>><<v^<>^<>v^<<<vv^>>>v^^v^vv><vv^^v<^<>>^<v^>v>><>><v<^v<>v^>>><>^^>v><><>^^v^vv<^v><v<>^^v>>v>^vv<<v^^<><v><v^<><v<^vv>v<^^^^^v<>>vv^^v<^>v<v>v^v<>><><v>>v<^<^^<<v^>>>v<v^v<v>><<v^<>v<^>^^<v^>v^<v<v>v>><v>v>vv>^^v^<<>>v>>>^<v>^<><vv>><v<>vv<vv>v^v<^>vv<^>>v><^^>^><>>vv<><<<v<v>^<^^^v^v>^vv><>>>><v<>^>^<<^^^^>v^^vv<vv^^v>^^<^<^<>>^^>v><^>v>><^<^<vv^><^><<>v^v^>>^><<><v^^>>vv<v^<<^v>^<v<v><v<vv^>>v<>>v<^v<vv^v<v<<<>><><v>>^<vv<^<<><>>>><^v><^>^v<v<v^v^>^><<>^^<v>><><^^
>^>vv^v<>>><^^^<v<v^<v^^<>^^^^^^<>^><><^<v>v><<v<v<^v<<<^v^^v>>v>^v<<><^^v^v^v^v^v><^>>>^v><v^^^v<^v^^<<^<<><vv<>vvv^^<vv>>v^<^^>>v>vvv>^^v^^<^>><v^^v<^^>v>^<<v^><<>v^^^^<^<>^^>>v<^^^>vv>>>>>v>^<<>vv^<><v^<>>v^>vv^vvvv><^^<>v>v<vv>v><v>vv<v<v^^v<^><><vv>v><>^^vv^<v>v><<^vvv<>>^v<><>>^<<^v^<><<v<>v><>^vvvv^^v<<^^^<><<<>^^^>v^^<<>^<>^<><v^>v>>^<<<^^<>^v>^><<<^v<><v>^^>>^><<>^^v^><^v>^^<>>v<v^<<^v^v><<<<><^v<>>v^v<><v>^^vv>^^<>>^<v^<^^^<v>^v<><>>^^>v^v>v^><v>v<<^>>><^<<>^<vvvv^^><^v^>v>>v>^>^>^<^<><<^^<<<v^v<<<v^>^><v<^^<<^v><><><^vv^>vv<><<^^<<<v^v<>>^^><v<^<v^v>v>v^v<^>v>>>>><^^>>^v<<vv>^>v>v<><><<<v<>^>vv^<^^>>>><<<<>>v>v<<<^^<^>vv<^<v^>>><vv>>><>vv<v>v^^^><<>>>>^vv><^v^<<><v<<v^<vv<v<^v>vv^v<<>v<^vv><<v^>^^^^^<><^<><v>^<vv<^<^<^^<>>^<>^v^<<v^>^<^<v<^>><<><>vvv>vv>vvv<v^>><^^>^>v^^<v>^><v><^><>^><>^>>^vv<><^v^^<^>^v<^^^<>><>>^^vv^<>^v^>><<^^v<>^v^v^^v>^vv<^v^><^<v<<>>^^>>><^<<>><>v>^vv^^vv<><>>v><<^v><v><vvv>vv<>^vv<<v<>^vv>^<vv>v>>vvvv^><<<<vvv^>^<v^<<v<^vv>^<><v^^vv>>v>v>^>v^v>>><>vv
^v>v<^<vv^>^vv^>>^>>v<<<<^v^<<<>>^^><<>>v>>><^<vv<v>^>>^<^><v>vv<^v^>^^<>^<<v>><>vv<<vv>v<^^<<<><<><>^>>v<>><^<v>^v>v<vvvv<>>>><>vv<v>>^>>>>>^vv^v^v><^^<<<v^^vv<><>^<^^>><>vvv^>v^<v^<v^^<<^<<v>^>^^<>>v^^<>v<>^>>^<>><^^v<<>^vv^<v>^^>><<<<>vvv><<v>>^v^<^^<>>><>v>^>v<>^><>^><vv>^>><^^<>v>v<>v><v><>v<<v>^v><<>^>v>^vv><^>><v^vv<v^^v<v^>^<^v^<^v><<^v<<<^><<<<<^v^<vvv<><^>>>>>>v>vv>v<^^<^>>^^^vvv^v^^vv>^<>v>><><<<>>v^^>^<^><v<>^v><<v>^<<^><<<v>vv>^>>v<><^v^vv<v>v^<v><^>^<>^^v>v>vv<><<^<<^<<^>vv^>^>v>><v>^<>^^^^v<v^>v^v><<^>^v^<v^>>>^><<^vvvv<vv><^v>^<v^v^<<^<^<>>^^>>><^^><><^^vv<v<v<><^<>^<vvv<v<^>^><^vv<v>^<vv<<<^vvv^>>^>><<>><<<vv>><><<v^<^v<<<<>>v^<^^<v<>^^vv>>^^^>^^^^^^v>^^<<<>v>^<^v>^^^^>>v><<v>^v><v<<>>>^<<<>>v<>vv>><<><<v<>vv^><^<><v<^><>>^>vv^>v^v^>><>vv><v^<v^>^<>^>v^<>v<<v^v<><<><>>>^>v<<^<v^<<^^v^v^><^<><<>>>^v<^>>^^v<<<>>>^^v^><>>v<<<<>v>^^>v><v>>>v<<<<^^^<^>>^^v>^>v^<>^^^<v><<v>^<<v<v^^<^vv>^v<>^^^>^^<>vv^^>vv>^<<><><^^^<>^<v^^>><v^>>v>v<^^vvv<^>><<<<^>^^v<v><<v<<^><v>v>v>^v><^^<
^>>>^^^v^v^vv<v<vv^>v<^><>^>><^<vv>^vv>^^><v>v^v>>vv<^^<^<<v>^v^<>v>vv^v^^>v^^^^^^<>^^vv<<^vv^v<v<>v^^vv<>^^^^^><>v<v>vv><<v^>^^<>v<>>v<^v<vv^<^^<<^>v<v<>vv><v>^v><v<vvv^v^>v<^<vv<<v^<<v<><v><v^<>vv<^^v>>><<<>v^^>>^<><>>><^<v>>vv^v>^><vv^>v<<<>^v^^><<<^>v<vv^>v<><vv>vvv><><>>>^<<vv>>^v>><>v^^<<<^vv><^^>^vv><<<^>>^<v^^>>^>>^<^^>><><v^^<><><^^^^v^<^^vv<<>v^^v>>v^<<^^v^v^^<>v^<<<v<>>^><><^v^^vvv^>^><<^vv>^^^>><>vv^^>v^^^<v<>>^><^>>v><^<<^>>>>^v<<<>^>^<>v^>^^>>^^^^>v<vvv<vv^<v^v>v^<<>v^v><<><v<v^>vv>^<<<<v><<<v>^>v^<>v<>^<^^>>v^vvv>^<<>^vv<vvv>>^>>><>vv^^>vv>^>><^>v^>^<vv>><<^^^<v^^^<>v<><<<^^^>><><^vvv<^v^^v<<v<<v<>><<>>v^v><v^<^>><^^v>^^>>><vv<v<^>v^^v<^<^>v>>^<v^v<v^^>^v><><<^^^><^>>v^>v^^<>>><>><<^^v^>v>^>^<v^vv^vv<>^vv>>^>vv<^v>^^v<>v><>vv^<v^>>v^><vv<^<v^<<<<^^vvv^>^<>>><vv^^vv<^v<v^>v><^^^><v<<^v>v^v>vv<>^><>^v^>^>v<vvvv<v^^v<v>^^<<><>>><v><><v><^>>^^^>vv^<>v><<^^>v^vv^v<v>>v><>^vv<>v<v><^>^>>v^><>^<>^>>^<v^v^>^>><v><<v^^<v^^>^>v><^^^<v<<>vv^><v^^^<v^^<<^<vvv<v<>^>^>^vv>v<>>><^vv^v^
^v>^vv<^<v><^<^><><v^<^<<^^v<v^<>^<v<<>^>v^v>v<v^<^^<<>^><^v^>v>^vv^vv><><>^^v<<v>>v<<>>^^^v^<^^><>^<^><vv<v^>^>>^v<>v^^<v<^^v>^v>^>>>^vv^^<^><^^<^>^>v>v<^<><vvv^>><>v<>^>v>>>v^<^^<>^v^^<<^>v<>v<><^v^<^>v>><^^><v<^^^>>v>vv<>vv^^<>v^v>^v<<<>^>>^<>^<vv><^>><^>v>^vv^^<><v^<^>>v>^^v<^v>^^>^<<vv>v><v^>>>v>>v^v<^<v<>>^v^^>^^<>><><>><<^<^>^v^<>>^vvv><^v><<>><>^vvv<>v><v<<>^v^v<v<vv<>>>v^<<vv<^>vv<^v<^^<>>>><^v>v>vvvv^>v<^^><><v<v^^<<>><>>>><vvv^v>^v^^^<>v>^v^^<v>><<vv><vv><v<^>>^^v>^<<<v<vv<<^^>>v>>vv>^>>v<^>>>><<^>v<^v^<<v<^^v<>v^<^^^v>^^^^<<><v>^^^vv<>>vv^v>vv<<<<^v>vv>><<^<<>^^<v^>>v><<>v<<^^><<vv>^vv^>v^v^>^>>>v<>^^^vv<^v>^v<><<v<^<<^vv^vv>v<<>^>^>>>v^<^>>v>v<<^v^><v<<^>^><v^^>^<^vv<^><v<v<^>^<<<<<^^^<v<>v><<<v>>>^<vv<v<v^^^>v<v<^>^v<^>vv<vv^<v^>^v<^<<<^<^<^><>^^v<v<^^>><>>>>v^>^<v<v>^^<v>^^^^^<^>v>^^<<^^<v^<>>v><v>>^>>v<^^>^^<vv><<>^<>^><^<v<<>^<<<<^>^>>^<<^>>v^><v<>>^vv^>^<>v<<>^<^^v^><v<>v<>^v^v<v>v>^>v>v>>>^>>^<v<><<>^>>^v^><^^^v>>>>v^<<vvvvvv<>^<^>>^^v^^>>^<<vvv^<vv^>^<^v<v><vv<^v<><
>^vvv^><v^<<<<><><<v<^^<>v><v^<>v^>^<><vv><<^<v^v<v>^^><>>>v<v^>v^v<^<><vvvv<^>>>><<^vv<^^>v<^^v<>>^^v^^><^^^<<vv>>vv^v>>>>^^^>v^v>^^^<<^<vv^v>^^>^v>>v<^vv>^>>vvv>v^<<^v>^>>^<>><<vv<<v^^^<^v<>>v^v^v>>^>v^^^^<<>v><^<<<^>^v>>v<>v^>>>>^vv><>><^^^><^>>v<^^<v<^<v<>><^>>vvv>vv^^^<^><><vv^>v>^v^^<<<v^<>^<>>^^>v^vv^>^>v>^<^><v>v>^><>^<^<v<><v<^><^^^vv^^>><^><v<v^<v<v<>><<^v>>>v<>>>>^<v>^vv<<>v>v^^vv^v<>>>v>^^>>^^>v<^^<^v>^v<<v><<>^>^v^<<v>>>^v<>^v^<<^<>v<v^<^vv<>>v>v><^v>>v>v^^<v<v<>v>><vv^vv^<vvvv<<>>>>>>^v^><<<<v<>^v^<v^v>><<^<<^v^^v><<>v>^>v>>^<>^<>^^><v<v>><>^vv<>vv^<^>^>v>v<^^>>^<^v^<vv^^<v^><^<<<^vv<vv>v<vv^<v>>^^<<>vv<v<^v>vv<v>^^^<^>^^v<^^^>^v<>vvv>^>><<v^^>v>v<v>v<><^^^>>><>^^><v<<<^^>>vv<><><<^^<<v>v>^>v>^^>^vvv<vv<v>v>v^>v<<>><<v>>v<v>><^^<^^v<>^<vvv^><>><><v^>>^<^<><>>v>vvv^<<>vv<^><^<<v<<<>vv^<v<v>v>>^vvv<^^<^v<<><<>^^v^<^v^<<^<^>vv>vv^^v>^v<v<^v>^<<^vv^<<<vv<v><>v^><<^>v>^^^<>v<v^vv>v>v^><v>v<^>>>^<^<<^<v<><v<^>^>^v<^<^^>vv^><>^^^<>>v^>^^^^v<v^><^<>^>v>^><^<^v>>v^<<^v^v^^<<v<>v>v
>v^v^<>^<v><^>v>v>^^v^><v^<vv>>^v^<<>v<<^^<>v<<<<^>>vv<^><>><vvv>>v><>^><<<^><>>>v^>^vv^v<v^^<<^v>^v><^vv^>v>v<<<^^vvv>v<^v>^<<<^>^<v<><>v<vvv^><^^<vv^><^v<<>^v^v^^^^>>>><<<<<^^<^<^<v<<<>>v^>>v^v<<v^<^^vv<^<v>^<>v^v^>^>>>^<^<><^^^vv^v<^^^<^^>vv^v<^<<^^<v<^<^^^>v^vv><<^<>>^>^>^>><^vv<^v^^<v<<v>>v^v<^^^>v^<v<v^<v<<^<v^>v^<^>><<v<^<vv><>v<<<>>vvvv>v>v^vv^<<<^v<^vv^v>v^^>><^v>v><^>vvv>vvv^<>v^><>^<<^v>>><<<<^<v^<vv<v<<v>^^^><^v^<^<<><v<^^<><^>^^<vvvv^v<^^^^<^>v>>vv^<^v^vvv<^<<vv^>^<<<v^><>^^v>^<v^^^v<^^^^>>>v^^^v<<^<>vv>><<>>^<<vv^v^<^>>v>^><<<<^v^^<v^><v>v^^<<<>vvvv<<^v^>>>^v<v<^><v><^v<^<v^<<v<v^<^^v^<v><<^>v^^<><^<>vv>>>>>^<<^<v>v<>^v>^<<>v^<><vv>vv>^v^>><<>v<^vv^v>^v><^vvv>v<v>^>>v<<^^^<^v>^^><^^vv<^<^v<^^^^>>v>v<^>>>>><>vvv^<^vvv^<v<^<>vvv>^>^<^v^<<^>^v<<>vv>v^^<<>>v<>^^^^<>^>vvv><<^v>^vv>v<v^<v^<^<><<<>vv<^><vv<v^v<^^^>v<>>^vvv^vv^^>v>>v^^>vv><>^^v>>^vv<><v<v<^><^><<><^v<v<>v>^>vvv<^<>>^^<<^>>>^>v<><><^^><>>>^^vvvv<>^<v><v<<^<^^v<>>>>><^^<>vv<v^>><<v<^<v^v^<><<v^v>>>^^vvvvv<^<v><<<vv
<<v^><<><^vv^^>^<>^<<v<>^<^^>><>v>>vv<^^>vvv<<>>v^<>^<<>v^vvv>vv^^>^><>><<v<<^>>>>^v^>v<<<v>v<<v>^>v>>^<<v^><^^>>v^v^^v^v<v^^<^vv>v<^^<><v^>><<<>^<v^^<<v<>v<^vv<^v^^^<^<v>v<<^^v<<>^<<^v>><^<v^^><^^><>^>v^v^^v>>>v^^><><><v^v^^^v<vv>^v<^v^>>^vv>v^<v<^v<v<v^^^>v<^<^<^^<^><><vv>vvvvv<>>^<vvvvvv><<>>^<<><>>^v>vvv<v<<^>>v<vv<v<^>^<vv>v<^^<v>v^>^v>>><vv<<>>>>>>>^<<>^vv^<v^<<v<^>v>^>v<>^<^v^><<>v>^<v^^^<>>>^^v^<v^^^^vv<v^^^>v^>v<><>^^<>^<>><v><><^<^<^v^<<^vvv^v><^^>>v^^vvvv><^v>>>^><v<>^vv>^>^<vv>>>v><><>>^vv^v<>^v<^<<v>>>><vv>>v^^>^^><<^<><>^<<v<>v^v^vvv^>v^>>>^v><<>^^v<v<v^><<>>>>^>>vv>><v<^>>^<>><>^<v>v^^^>vvv<<>v>^>^>^>v>^v>>v>^>v<>v^>^>>>v>>^><>^>>><^^><>^^v^<v>v^>v^v>>v<>v><>^<>^>^>>v>v>^<<<^^^>^<<^<<<<^><^vv>>>^><^<<<v>>^>v<>^vv^<^v^<<>^^v<<<vv<>^v>^<v<<>v<vv<^<^v<>^<<><<v<v><>^<<>v^^vv>><v<vv>^><<^<v^<v><<vvv>^^^<^^v>^>>^><>v^^><v^v^v^<<>vv>v^v>^><^>^>^^<^v^v<v>v>>^^^^>^<<^<^vv<^<v>v^>^>>vv>^<<<<^v^^vv>v^^<vv>>^<<v^v^vv<^>><v>>v><<^>v>^^v^vv<<>vvv><<v>v<><v^>>^>v<><v<<v^><<>v<<vv^><v<<
<<^<v>>vv>v^v<>^>^>v<v><v<<<vv<>v<^^^^^^<<^^v>>>>^<^<><v^<vv>^>>>^^<>>^>><<^<<<<<>><v^>^><v<<>>>^v^<><^^^v>vv><<>><^v<<v>^^vvv>v^v^v<>><v^<^^<><v<><><<<<<<>><>v^<>v^^^>>vv^<>><^><^^v^v^^^^>^^><<v^^<<^>v^v^<vv<v<>v>v<^<><^><>>v><>v^vv<<<><>>vvv^^vv^v>>>>v<^vv>>vv<>>v^<>v^^^^<<^>^^>^>^^v<v<<><vv^v^<v^><v><<^^<^^v>^^^v<^^<>vv>vv>v^v>v<>^v>^<<v>>^<v<><<>v^^>>>^>^^<<vv<^^<^>>>><^vv><<v>v<>>v^v>^vv^>^^vv><^<>>v^<v<vv<^>^<>v><v<vv>><v>^<vv<^><<<^>^<^>^^^vv^v>><^<><^vvv>>>^<v>^>vv>>^<^v><>^>>^>><^<^^>><vv^^^v><^<^^<>>v<<^^>>><vvvvvv<vv^<>>><vv^><<^vv<^v><v><^^><^v<v^><<v<<v^vv^>^<>>>v><<<^><^<^<><>^>^>>v^v^^v^<^^v^>v^<^><>>^>^<><v>>>v^>^>>vvvv^>^>>v<^>vv<<>^v<><^<>>><>^<<vv^>^>>^v>v<<^^vv<^v<<v^v>v<^<><>v>v<<<<<^^vvv^^><>>vvv<^^v^>vvvv>^vvv^>v<v<<<v><^><<v<<^^<^<<vv<<v><<^vv>>>vv>>>^^v^vvv^<<<vvv^v^>^>^<^v<^^>^^v><v<v>^^v^vv><^<>^^^v><^v^v>^vv<^>><>^^^>^<^v>vvv><v^v^><<^<^<^^v>>v^vvv>v^v>>>>v^><v>v<<>^^>><>>^^v^<v^^^v>>^><^^<^vvvv^>v<<vv<<^>^><v>>>v^<^>>><^<^^^^>^<vvv<^><>>>v>^v<^<^v<<^<<^v>v^
^>^><<<>><<<<>>vvvv^vv^^^v>><>^^>v<^^v<^>^v^<<^><^v<>v<v>>>^>>>v<^<>>>^<v<^<>vv><>v<v<v<v>v>v<v^vv^<>^<vvv<^^v<^>>>^vvv><v<>^<><>vvv<<<>^v>v>^^v<<^vvvv<v^<<>^<>><v>>><>^^>^v^^>^<>v^>^<>v^>v>>vv<<><^v<^vv>vv>^<>vvvv>>>>^^>v^v<^^<^<v<>^^^v<>><^^><^><>v^>^<>v^v^<v^><<^>>>^vv>>><>v<>>^v>^^<v<^<^^^^><^v<<^<v<v>>v^<<>v>>^<^^v>vvv<<v^>v><^>^>^>v>>^<>^^<>><>^vv><v<^v>v<vv>v^v<^><v^<<vvv>^^>^^^vv^<^>^v><^<^<<v>v><<^<<vv^>><<^^<v<^><>><^><<<<vvv^vv<>v^><<^^^<<<><<v^^<<<vv<v<>>>v<<v<<^v<<<v^<^^<v^>>^><<^^v>v>>>vv><v^vv<vv^^>v^^v^><vvvvv>^<^^<<>v<v^>>>^>>vv<^<<<^<^>>^v>^<>^>vv><>><<^<<v>>^<v<>v>^>^<v^v<<v>vv^<<^>^^<vv^<<><<>>>v><<vv<^^v<v<>v><v>v^^<<<v^vv><<<<^^<v<v>v^<>><><vv>>^>vv>^<>>v<>v^^<vv><>>^v>v><<>^^>vv^^v^^vvv><v><^v<v^<<v<><>v^>vv^^^^<^>^<v>^^>>>>><>>vv><>^><vv^^<v<<>v^<^^^>^>vv>>v<vvvv>^<v<>^^^^v><<^v^<<<<^>>><^<^^^<>^<>^^v>v^<^^vvv^^<vv<v>^>vv^>^v<^vv<>><<<^vvvv^>>v^^>^>><<>^v>vv>^^v<<<><v^^>^><<<^<v<^^v^^<^>^v<^<v>^>v>v<<><v>>>vv<<<v>^v>><v>>^^><<vvv><<>><^<<>^<vv^<>v<^<<^<v^<v>vv<<
^v>v^<v>^vv^<vv^<vvv<^>^<<<><^<>v>vv<<>>v>^^v<^>>v<^^^^^v>><<v<^v^><>v<>v<<^<<vv<^vv^>^vv^^<^<>v<>^^>><^v>>^v<^^^^<^<><<v>^<^>><>><vv><<<<^^v<v<^v<^>v<<^><^v^<<<^^v>>v<v>><v>v^<<>v^<<^^^>>>vv^v<v<^v<vv<<>^><<vvvv^v^^v^>^^>>><^v>>>^<v>^><<>v<^vvv^<^^<<^<vvvv>^^v^^^<><<v<<^v^v^><v^^><>v^vv>^v<<v^^v^v<v>v^<<vv^<<<>>v>vv<vv^v<>^>><><v><^^^^v^v>^<^>^^^<<>><<<v<v<^>>^v>v<><<v<^^vv<>^vvv>v^^^vv^<v><<^>vv>>>^v<^^><v<^<vv^^^><>>^v^<^v<><v><v>v^>>^<v<^<v>><>v>v><^^v>v<v^vvv^v^<^<^>^><^><<>>v<^^^>>^^^<>^^>v><^<>v^><^<>v^>>^^^<vv<vvvvv^^>v^<vv>v<><><<^><v^v<>^><v<<^vv>v><^<<>><^>^v<v>^^<<>^v<v><vv>^<^>><^^v^>^v^^<^<^<>>>^v^<<<<v>^>v<vvvv>><<v>^vv<<<<v>>>vv>>>^^><><v>^^<^v^<v^^^>v>v>>>^><<^>^v<<<<^<vv>v<v<<^>^<<^^>v^v^><^v^^v>v>>^vvv<<v>>vvv^^^>v^^>^v<^<<^<>>>><^<^><>^>^<<<v<<>v>^v^>>>v^vv>^vvv<>vv>^>^^>v^^^<^>>^vv><<><^>v>^<^>><><v>><^v<<<vv<>vv>><^^^^v>^<><v<^>>>>vv<>v>>v^><>v^vv^vv^>><^^^<>v<>vv<<v<>^<^^^<>^vv><<<>>v<><<^>>vv<>^>>>^v^>v<>v><<^^v^<<>v^v<>^>v<^>^>^vvvv^>^<<<>>>><^>>^>^^v>^vvv<vv><
>>v><^>>>v<>><^><v^v<>><<vv>>v<v>v<>^>^<<>v>><>v<<v><v^<<v><^^>vv^>v^v><>^>^v>v<<^<v<v<v^vv>^^>>>vv>>v<^v^^^<^<>>^>^<<^^>v<><^><v^>>><vv^^v>>>>>>^<v<<^v<v><v<v<v>>v>^><^><<v^>>>>^v<<<>><<v^^^v>>vv^<<^>><^v>vv>>^v<<><>>v>>>><vv><v><v^<>^>^vv^<<><<v^^><>^>v<vv<vv^vv^<^<<^<^vv<<<^>>><^^v^<v^^v^>^v><>^<>^^v>^>vv>><>^<^>^>^><>^^^<><<<^v^<vv<^<^^v^>v<vvv^>^>>>>^v>>>^>^^<v<^>>^><>v<>v>^<vv<^v<>v^^^>v<<<>^<<<vv^v^>vvv^<v^v^><><^vv^v<^^<v<^v^vv^<>>^<^<>><<<>v><^^^v^^>^<>>^<v^<<><v><>v>^v><v>^v<^^v<>v><v><^<v^^^v^>^^<<v>v<^v>v>v^vv>^<vv>^vv><^>vv>v>>v^>^<v^v>v<<>v><><>vv^>v>^vvvv>^v<v<^v^>^>v>>v^>v<v>v>v^^^>v>>>v>v^vv<<>^>><^<^v>v^<v>^<v^^^<v<><v^>v<^v<>^><^>^v<v<<>>>>v^<>^>vv^^vv>v>^>>^>^<^^><^v^<v<v^<^><^vv<vv^v>^v<><>vvv<>^^^>v><^<<vv><vvv>>v>><<^vvv<v^>><<<v^>^<^<vv>^vvv<<>^<<>^<^><><>>>>^>^>^^><<<^<^v^<<<>><>>><<v><^v><vv^v>>v^<<>^v<>^^<>v<>>^<<>^<<<>vv<^^v<^^<<>^v^><^^vv^<v><<<^><>>vv><^<>>vvvvv^<^<<^>>v<<^^v>><>^><<<vv^^v^^<>>v<v^<^^^^^^v><^<^>><^>>v>^>>vv^>^<^><v^^>^^>><vv^^<vv^<vvv<><v>
vv^^v^<^>>v><^^><v<<v^^<vv>^v>v^>v^v<>>>><^<^v>v>>><>vvvv<<<><>^^v^^>v>>^><v^>^>^^>><v<^<>v^v<^<vv>v>^^v^^v<^v^>v><><>>^>vv^^<<v<^^^<^v<vv^vv^^<>>v<>vv>^<>^v>>v^><<^^v<^><<v^^^^<>>^^<<^>^<v>^v^^>>^^>^^^><><<<<<>^^<^v^^><^<>v^>>v^^>^<^<><>>^v<v<<<^^v><<v>^<<<<^<><v<^v<<<>^>>v^v<^v<<^>^^<>^v<<v^><vv^><>>^^>v^<>>v>^<v^>v<><>>>v><v>v><><>>^>vv<v^>^<<><>>^<<^^<<vv>v^<vv>><v^^>v>>^<>^>v<>>>^vv<<<<<^^>^<<<><<><^^^<v>v<><<<^v><^^^v<^<vv<^>>^^<><v^^<^^^v<v<<<<v^<<v^<v<><^^<^vv^^v<^<<><^^^^>v<vv<v>^<<<v>v^^>>v<v^>><>>>>>><v><v>^^<>><v^^><<vvvvvv>>>v^<v>v><><>v>v<><<v<<>v>v<>>>^^<<^v>v^v>v<>v><>vv^><vv^>vv>>>vvv<>^<v>^><<><<^<^^<>v<>^<v<><<<<><<><vv>v<vv<^v^<^^<<v>v<v<<^^<<>>vv^v>v^>^>v>>^<^^^<^<v^v^^v^^v^<<>^v<^vv<^<<>>^>>>v><^v^<v>v>^^^^<^v>><^<><^>^<^vvvv><>v^vv>vv^<v<v^^v^>v^<>v^>^^^^<^<<>^v<<>^^>>v<^><>^<<<^^^>>vv^^^><<v^<^v<v^^v<><vvv^^v^>^v<<>v^v^<><v^<v^^>v>^<<^<v^>^^<^^v^>v<v^^<<v>^v<>v^^>><^v<^>^v<v<>^>>^>v^vv^<v>^v^>>v^^<^v^^^<<vv^<><>^vvvv<>v<v^v^v^>>^<v>><>><vv<<>>v<>^<^>^^>^vv^<<<<>
vv<^vv<^^^v>^>><>><^v><><v^>^^v^><>v>^v>^^v<>>>^^^>>^v^v>^<v>^^<>^<>>^<v>><^^v<><v^>^<v>>^^^vv<^^v<<^vvv^<^vv<<<^v^v<v><v<^<<<<v^<^^vvv^^<v^vv>vv>v<<^v<vv<<<<v>^vv>^^^^<<v^>^v^<><<><v^><<>>>><^><<^<v^v^<<^v<<>^>v>^^^>vvv^<v<<>>v>>>^vv>>^<<^><<^^<<v^v^<v<<<<^<v<><vvv^^^>^^><<v^v^v^^v^<v<^<vvv>>^^vv>>>v^^>>><>^<<^<><<v>>^^^v<^^<v<<v<<v^v<^^v><vv>^<>v<<^^^^>^<^^^v>^<<><><vv^^<<>>>^<vv>v^>vvv<<^>><^^<<<><<<><>>^<<v<v<^^>v>>^^v>^>^^v<^<<<v>v><^>^^^^>^^<>^<<<<>^^^vv<^<^^<v<<v^^<<<v<v<^>v^<>>>>^^<v>v<v^<<<<v<<>v<v>^v>^vvvv><vv>v>^<^<>^<>v^<v>>v^>v<^><<v^^v>^<<v<v^^^<><^>v><>v<v>>v<><>v^^^vv<>v>v^^<^<<^>>^<v<>>^<^>v^^^<>>^<vvv<v>v>>^vv>^^v>><><<<>^vvv<vv^>^v^vv>v><v><v><v><vv>v<<>>><<>>^v^>^v><v^>v<^v<v<vv>><^<<<v<^<^<><<^<<>^>vv^v^>^>v>>><^v<v^vv^>^^<v>vvv^^<<^<v<vv<^<<v<>vvv<^<v^v>v>>>vvvv^>>^v>^^>>>^v>v^^vv^v^^>><v<^<<><>^<<v^v>vvvv<^<^vvv>v^<<><>^><^vv<^^^><>v<^>v<v<v<v<v<>v>^<<>v<vv>>vv<>^^v>>>>^>>vv>v<<v<><^^^<<>>vv><<^<^><>^<v<>v<v>>>^^>v<^><^<<><<^v^>^<^<^>v^vvv^v<><^>vvv>^v<^^>>v<<v><
v^v<^^>>>^>>>>v^>>^>vv><>^vv^v>vv^v>v<^^<<^<^<<>>^>^<^<vv^^>^<>vv>vv<<<>v^<^v>^^<v<<>v><v<v>>>><v>v^^v>^^v^v<<<<^v<^^^><vvv<v>^^v<><vv><^v<<<v><v<>^v<^v<><^<v<^<>><^>><^<v<v<^>>>>^><vv><^>>^^v><>v^vv<<^<>><^^<vvv>><>>>>v><><>^^<<^^^v<><<>^>v>>><^^<<<<<<vv^>>v^^vv<v>>v<<<v><>v^>vv<>>v<^v^>>>v<>^^><^^vvv^^<^<>><<<v^^v>vvvv^<<<vv^^^>>^><v>>>>><<^<^v^<<^v^>^>vv><^^><<<v<^^^v>vvv<<vvv>^>^<^^<v><<^<^vv<><>><^><v>^>^<^vvv^<<<v<>v^<v<^v<v<v<><<v^^<><<<v^v>^>>^v^^<<<^<v>v^^v<><v<>v>>v<>><>v<>^<v^<^<>v<^>vvv<^v^><<<><^v^^>>v<<v^>^<>^^>><^vv^^^^vv><<vvvv<>^>v^<^v<>vvv<<>^<v>v^v^v<>>^^vv<v^>v>v<<^>>><<^v^vv^>v>><>>^v<>>^^v<<>^^^<<^^^<^>^<<>>>^vv<v>><v^v<<vv<^v^>><>vvvvv^<^>>^v><>>^^<>^v<^v<<><<>v><<^^vv<<>vvvv<v>v^>>>>v^^<><^<>^><v^>v^v<<>>vvv<^v^v^<v<^><>>v<<v>^>v^^^vvv>>^>v>v><<<>^^vv^^v^>vvv^<^>>v>v<vv>v>^^<^^^v<v>^<^<v^><<<>>^<<v>><<<>>>>>v<^v<>vvv<<><<^<^^<><^<<vvv^<<^^>^>^^^<^<vv<v<<<<vv^^>v>v<v<^<<>vv<^v>v>v^<>v>>>v<v^^<^<<v^v<<^^>^^><v><>>><<v<<>>>>^><><<<>^<><>v^>>^><><<<<>^><<v>>vvvv>^v<
<^vv<><<>v<<^^>^>>>>^<^>><>vvv><<v>vv^v><^>><^vv<vv^^>v>vv^^>^<v<^<<^^v><^>v<<v>^^vv^<<^vvv<>>^>>vv<>^vv<v^^^^>>^^<><vv>^><v<>>^^v^^>><<<>><<<v^<>^<^^^<>^><>^v<v<^<><^<^>>^v>v^<^<>v^v>vv<^vv^v<v<v>>^^^<v<<vv>v><><<^<><vvvv<vv<v^^vvvv<^>v<v^><v<>><v<vv^^<^^>><^vvv^<><>^>>><>v><>^>vv>^<>v<v<><>>>v<^<v>vv^^v<^<v><v>v<^<vv>>v<vv<>vv><^>><^^>><vvv<<><v<v<<<^v^^vv>>v>v^><<>v^>v<vv>v<><v^>v^<v<^v^<<v<<>v^<vv^>^<^v>>v>>^^<^v^><v^>><^^v<<<vvv<>v>^<><>vv^^<^^>v^>>^<vv^><<<v<>>^vv<><^>^^^v^>v>>v<^^<v<^v^>^<^>v^^v>v^v^<>v<<vv^v^v<<v>^>^^^<vvv<v^^>vvv<^>v>vv><<v><v^>v<v<^<>^<>>^><><v<<<^><v<<><^>vvvv>^vvvv^<>vv^<<^><^<v>^v^v^<vvvvv>v<v<<<^<v>><^>vv><^>v>><>^v^>^<>>v<v<<>^vv>v^^^<^vv^><<>v<v^v^^<<>^^>vv><<v><><^v^>>v>^>^<v^^<<^^^><<v><^v<^<>v^>vv^<^^>^<vvvv>^v<v<>v>><^^<v^<><^<<><>^v<<vv^vv^<^vv^v><v^<>v^<^<>vv>vvv>^vv^>^<><<^^^^>v>>^<>v>v^^<^>>v<<<^v>>>>>^<><<<vvv<v<v<v><v^^^^<^<<>vv<^<v<><v>^>>^v^<<>v^<v^<v^^><><<^vv<<<<^<^^^<<v<<^>^^>>vv>^^>^vvv>v^>^<<>vv>v<v><^^vv^v><<v>^^vv><^v<v>^v>v^<^vv^v^vv
v<><<^^^v>^v^><^<><><>>^>^>v^<<>v<><^<>>v^^v<<vvv^^><^^>>v>^>^<^<^^^^<>vv<>^>^vv^^>^>v>^v<v>><v^>^<v<^><^>^vv<><>>v<<<^v<>vv<v>vv^>>vvv^<><^>>^^>>^>vvv>v><^><<^v<^>>v^^vvv^^<^v>v^vvv^>v>>>vv>v><^><><<^>><^v<<^>v<>^vv>>^^^^v<vvv<><>v>><v<v<><<<<^^^v^v>^v>vvv>><vvv>><^>^<>vv^^<>v^>^^<>>^vv><^^>vv^v<>^>>^v^<^<>^vv>^v^>>><^<>v<>^v<^>><<>><>v>>>^v^^^<^^<>>^^^<v>^v>^^vv>><v<^^^^>>vvv>vv>>>v<^v^v^^><^<>><v<v<>vv<>v^v<v<vv><><<<^vv^^^<^><<^^^^v>>^<v<^><><v^><<<v>>v<><><>v^<<>v^>><v<>>^>^^^<><>^>>>v^>v<v>>>v<^v^^>^^^^>>v^>>><<<>>><>>>^>v^v^v>v^v^<>>>vvv^vv^<vv><>^v<>v^^<<^><v<^<^<<vv^vv>^<>^<^>>v^v>>v^<<v>^>^^<^^^>^v>^^>vv<vvv^>>vv<v<v<>^v>v^v^<<vvv<v<<>>v^>vv^^^v<vv<<<><<^vv<>>^>^<>vv<^>>>><>^><v>^v<<^v>v<<v><^<v^v^^>>^<^^^>>v>v>v<^v><<><v<^>v<<^><><>><v>^^vv<^v<><<>^^v>^^^v^v^<<^v^<>^<^<^vv^^v><<^vv^<v<<^^<>v<<v<>^^<<v>^><^>^><^^><>>>^v<^<>^^>><<^v<^<<<<><vv>>v^>^v^v<>>^^<<v^><^^>>v>^><>^^^<^>>vv^><<<^<>>^v>>v<<>>^>^^><v>^^<v^^v>^<>v^vv><^^^^v>^>><>v<>v>^v^^^^^v^>^^v<<>>^<<<>v<<vv^^><><^<<v<v
vvv><<^^<^>><^^^v^>v^>^v<v>>v<<<>>^<<>><vv<<<v^>^v><<<^<>>>>>^v<v><>><>^>>>>>>v<<^^^^v^vv<^^^>v^v<>^vvv^^v<><^v<^v<vv^v>>>^^^<^<v^>vv>>><^>>>v>^<><><<<>>^^^><v^<v>v<v>v<>>^><>><<vvvvv><vv<>v<><^>v>>v><>>>v^^>^><<<^<>^^^<<<<>vv<^vv<>>^><^><>v<vv^^^>^>^<<v<^v<>v>>^>^^>vv<>^v<^^<><<>^^<>^>^^^^^^<^^<<vv<^^^><<<<v<^v>>^^>^v^^^>vvvv<^v^<^<^^<^v>^^^^>^<>v>><<<vvv<<>^<><v><^^>v<v><v^<^vvv<<v<>>v^<<<vv^>>^>><^<^><<^v^^<v>>>>^<vv^<<^<<v^^^^v^<<^<><v^>><>><<<><vv<<<<^>^<<v<><><^>^>>v^^><^<^v^<>^vv<<v>^<<vv>^<^^<v^v^^^<<>v>vv>^>>v^<<v^v>^<^<>^<v><v<vv><vv><>^<v^v<^>vv^^vv>v>><^>>><<^^^vv^<^^<v^^<<^<^<><^<v>>^v>^<>^v><>^v^><>>^<<vv>vv<>vv<<<<^^vv<^<v^^><v>>^^>v^vv>^<<^v<^vv>v^^^^v^^v^vvvv>^><<^^>v^<^v<>>^^<>^v^<<<^>><>^vv^<v^^>v><v<<<^v><<>v<<v<^<vvv<^^^<>v><vv<<^>>>v^^v^<<vv<<>^><v^<^>v<^vvv<<v<v>^<<<><>>^<<<>v^vv^<^^^^>>>v^v<^vvvv>^<v>^^^^>vv^^v>vvvvv^<<<v<<v>^v^v<v>^<<<>^>^><^>>v^<v<>v^<><^<^vv>vv<v^vv^>>v<v<<><<<<<<>>>v^>^^>>^v<>v<v<>v^<><>^^^>v>v><<<<^<v^><<><v<><>>^v>>>v^v^^v<>><<vv^>><><v<^>`

const [rawMap, rawInstructions] = input.split('\n\n')

const robot = '@'
const oldBox = 'O'
const freeSpace = '.'
const wall = '#'
const boxL = '['
const boxR = ']'

const widenMap = (originalMap) => {
    const wideMap = []
    for (let y = 0; y < originalMap.length; y++) {
        wideMap.push([])
        for (let x = 0; x < originalMap[0].length; x++) {
            const referenceTile = originalMap[y][x]
            if (referenceTile === wall) wideMap[y].push(wall, wall)
            else if (referenceTile === oldBox) wideMap[y].push(boxL, boxR)
            else if (referenceTile === freeSpace) wideMap[y].push(freeSpace, freeSpace)
            else if (referenceTile === robot) wideMap[y].push(robot, freeSpace)
        }
    }
    return wideMap
}

let map = widenMap(stringTo2dArray(rawMap))
const instructions = rawInstructions.split('').filter(instruction => instruction !== `\n`)

const getNewCoords = (coords, instruction) => {
    let newCoords
    if (instruction === '^') newCoords = [coords[0] - 1, coords[1]]
    if (instruction === '>') newCoords = [coords[0], coords[1] + 1]
    if (instruction === '<') newCoords = [coords[0], coords[1] - 1]
    if (instruction === 'v') newCoords = [coords[0] + 1, coords[1]]
    return newCoords
}

const move = (oldCoords, newCoords) => {
    map[newCoords[0]][newCoords[1]] = map[oldCoords[0]][oldCoords[1]]
    map[oldCoords[0]][oldCoords[1]] = freeSpace
}

const isBox = (tile) => {
    return tile === boxL || tile === boxR
}

const attemptToMoveBox = (sideCoords, direction, side) => {
    if (direction === '^' || direction === 'v') {
        const boxCoords = {}
        if (side === boxL) {
            boxCoords[boxL] = sideCoords
            boxCoords[boxR] = [sideCoords[0], sideCoords[1] + 1]
        } else {
            boxCoords[boxL] = [sideCoords[0], sideCoords[1] - 1]
            boxCoords[boxR] = sideCoords
        }

        const nextCoordsL = getNewCoords(boxCoords[boxL], direction)
        let nextTileL = map[nextCoordsL[0]][nextCoordsL[1]]
        if (isBox(nextTileL)) attemptToMoveBox(nextCoordsL, direction, nextTileL)

        const nextCoordsR = getNewCoords(boxCoords[boxR], direction)
        let nextTileR = map[nextCoordsR[0]][nextCoordsR[1]]
        if (isBox(nextTileR)) attemptToMoveBox(nextCoordsR, direction, nextTileR)

        nextTileL = map[nextCoordsL[0]][nextCoordsL[1]]
        nextTileR = map[nextCoordsR[0]][nextCoordsR[1]]

        if (nextTileL === freeSpace && nextTileR === freeSpace) {
            move(boxCoords[boxL], nextCoordsL)
            move(boxCoords[boxR], nextCoordsR)
        }
    } else {
        const otherSideCoords = getNewCoords(sideCoords, direction)
        const nextCoords = getNewCoords(otherSideCoords, direction)
        let nextTile = map[nextCoords[0]][nextCoords[1]]
        if (nextTile === boxL || nextTile === boxR) attemptToMoveBox(nextCoords, direction, nextTile)
        nextTile = map[nextCoords[0]][nextCoords[1]]
        if (nextTile === freeSpace) {
            move(otherSideCoords, nextCoords)
            move(sideCoords, otherSideCoords)
        }
    }
}

const followInstruction = (instruction) => {
    const position = getCharCoords(robot, map)
    const newCoords = getNewCoords(position, instruction)
    const newTile = map[newCoords[0]][newCoords[1]]
    if (newTile === freeSpace) {
        move(position, newCoords)
    } else if (newTile === boxL || newTile === boxR) {
        const backupMap = map.map(row => [...row])
        attemptToMoveBox(newCoords, instruction, newTile)
        const isFreeNow = map[newCoords[0]][newCoords[1]] === freeSpace
        if (isFreeNow) move(position, newCoords)
        else map = backupMap
    }
}

instructions.forEach(instruction => {
    followInstruction(instruction)
})

const getSumOfGps = () => {
    const coords = []
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[0].length; x++) {
            if (map[y][x] === boxL) {
                coords.push([y, x])
            }
        }
    }

    let sum = 0;
    coords.forEach(coord => {
        sum += coord[0] * 100 + coord[1]
    })
    return sum
}

console.log(getSumOfGps())