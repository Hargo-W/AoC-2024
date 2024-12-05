import {pad2dArray, stringTo2dArray} from "../sharedFunctions.js";

const input = `SAXMASMMMASAMMMMXXMMXMMMSSMMMXSAAXMSSMSSSSSSSSXSASXMSMMMSASXSXMASXMSSSMXSSMXSMSSXMXXSXMXAMXMASXASXMSAMSSSMMAAXAMMXXSAMMSXSSSSMSMMSMSAXSAMXMX
MXXAAMAAMAMASXSSSMMSAMMSAMASMMSXSAMXAAMAAAAAAXSXAMMMAMAAXAMMAXXAXAAAXMAMMAMAMMAMXMAXSASXSAMXAXMSMAMMAAXSAMXSSXMMMAMMASAMXAAAXAAAXAAMAMXAMXAM
XSXMASXMMXSAMXAAXMASASMMXXAMAXXAMXXSMMMMMMMMMMXMXMAMASASMMMAMMMMXMMMMSAMSAMAXMAMAMMXSAMXMMXMASXAMXMSMMMSMXMXAXSAMSXSAMASMMMMMSMSMMSMAMSXMASA
SMAMASMAMAMASMMMMMASMMXAAMMSSMMMMMXAXXXAMAMASXAASXXSASAXAAASAAAMASAXMSXXSMMMMSASXSMAMXMAMXAMXMXMMAMXAAAMXSMMMXMAMMAMSSXMMMSMAMXXXAAMAAXASAMS
XMAMAXXAMSSXSMSAXMXSXSMSMMXAXAXMASAMXMMMSMSASXMXSAMMMMXSMMMMSSXSXSASAMXMMMSMMMAMAAMXMMSXSAXXAMAXASASXMSSXXAAXMXMMMMMASXAXAAMSSXXMXSSXSMMMAXX
SSXSXMMXSMMMSASAMSMSAXAAAXMXMSMSASAMAMAAAAMASXMASAMXASXAXAXMXMASAMXMASMSAAAAMMSMSMMAXAAAMMSSXMAMMMAXXAXAXMSMSSMXAMXMAMSAMSXSMMMXXAMXXMASXMMS
XAAAAMSMMMAAMMMSMAAMMMSMSMMMMMAMXSMXAXMSSSMAMXMASAMXMAASXSSMAMXMASASXMASMSSSMAMMXXSSSSMSMXXASASXMMXMMXMMMXMAAASXMMSMAXMXXMMSASMXSAMXSAAXAAAX
SMMMMMAAASMSMSAMMMSMXAXXXAAAAAXMMXMSAXMAMXMAXXMAXAMSXMXMAMXXAXSXMSMMSMMMMAAMMMSXMAXMAMAMXMMAXMXAMXAMXSXXMAMMMSMSMAXMSXMXSAMXMMAMXASAMMSXXMSM
MAAXMSXXMSAAAMMXAXAMMMSMSSMSMSMSAXMASAMAMXSXMMMMXSAMXXXMAMASXXSAMXMXAMAAMMMMAAXASXSMSMMAAMMAASXMMSSSMMMSSMSSMAAAMXMMXAMXSMMSSMXMSAMXXAMMSXMM
SAMMXAMSAMMMSMSSSXXXAXAMMXAXMAMXAXXAMXSXSAMXMSAXAXMMSSMSAMXMMMSAMAMSMMSMSXSSMSMMMAAXXAMSXXXMXSAAMXAAAAAXSXAMSMSMXAMXSAMASXAAAAXMMXAAMSSXMASX
MSSXAAMMASXSAXXAAMSSSSSSMMSMMXMMMMSXSAMAMAXAAAXMMXAAAMXSXMAMXAMAMXMAXMAXXAMXAMASMSMMSXMXMSAMASXMMMXMSMSSXMSXSXMASXSMSXMASMSMMMMXAMMXMAMAMAMS
MAXXMAMXAXXXXMMXMAMAAMXAMXXXMMAAAXXAMXSASMSMSMMXXSMMMMAXMMSSMMSAMXASMMSMSAXMASAMAAXMAMMMASAMXSAMSAMXAAXMXMMAMSSXAAAAXMMASAMSMAMXXSMAMASAMASX
MSSMXMSMMSSMMSMAMASMSMSMMSXAAXSMMSMAMASXSAAAMXAXMASXMMSSXAMAMXXASAMXXSAAXXMAXMAMSMXSAXMAXXAMASAMXMASMSMMAMMXMAXSMSMMMAMAMXMAMMXSXAMSSMSMSMAX
XAMAAAAAAAAAAAXXSASXMAXXAMMSMXXAMAXMMXSSMMMXSASMAMSMSAAAMXSAMXXAMAMAXSMSMAXMMXAMAMAXMSXSSSMMXSMMSAXSAMAMASMMMSXSXAASMXMASMSMXSAMSMSMMMMMSMAA
AMSSMSSSMMSMSSSXMMSMMSMMXSAMXMMAMMSMSMMAXXAMAXMMMMMAMMSSXMMMMSAMXSMXXMAMXMMSMSMSAMXXSMAAAAXSAMXAXMXSAXSSMSAAMXASMSSMASMMMXAAAMAXXXAAAXAAXMXS
SXAXMMXMAMXXMXMMAMXMAAXMAMXSXAXXMXAXAASXMSAMMMAXSXMMMMXMMXAAAXAMSAMXMMAMAMXAAAASXMMXMAXMMMMSXMAMMMASAMXAAXASAMAMAXXMAMAAXSMMMMSMMSSMMSMSSMAX
AMASXXAAXAMXAMXSAMMSMMMMASMXMSAMXSMSSMMAXMAMXMXXXAMSSMAMSSSMMMXMXAMXASASASMMSMMMXASXMASMXSAMASAXAMAMMSSMMMXMMMMMMMXMSSSMMXMAMMAAXXMAXXMMXMAM
MMMMMSMMSMSAXAMSASAAXXASXSAAAXAXMMMAMAMSASXMASMMSAMAAMASAXXMSSSXSXSXMXASMXXAAXAMSXAAXMAMXMASASAMSMSSMAAASXXMXAMAXAXMAXAXMXMASXSSMMMMAAAAMMSS
XXAAAAAXAAXXXMASAMMSSSMSAMMSSMXSAXMASAMAAAAMXSAASAMSSMSMMXXAAAXAAAXAXMMMMSMSMSAXXXSXMXSSMSMMASMMXAMAMSSMAMXXSASMSSMSMSMMASXAAXAAAXASMSMXSAAM
SSSSSSSMMSMXMAXMMMMMXMXMAMAXAAAMMMSXSAMMMSXMXMXMSAMAXXAASMSMMSMXMAXAMXSAAXAAAXXASXMXSAAAAXMMMMXSXASXMAXMAXAAMAMAAAXAAAMMAMMXXASMMMMSAAASMMSS
AAMAAAMXMAXAMXXAXAMXMMXSMMXXMMMXSAMXSAMXAAAMMMMXSAMMXXXXXAAAAMASMMASMMSMMSMMXSAMXAMAMMSMMMMAAMASXMMMMMXXMMAMXAMMSMMMSMXMASXMXMASXAAMMMMXASAM
MSMSMSMSSSSMXAMSMMXXASXSXSAMXAAMMASASAMMMSSMAMXMSAMXMSSXMSMMMSXMAXAAAAXMMAXXXSMXSXMAXAXXAASXSMAMXXAAMXMASMSXSXSXMXSAAMXSXMASMXMSSMSSXXASMMAS
XXAXAXAAAAAXMXSAASASMMAMAMXMSMSSSMMASXMXMAMMXSAMXAXXSAAMAMXMAXMSMMXSMMSXMAXSAMXAMMSXSXSSSXSMXMMSMSSMSASMXAXAXAMXXAMSMSXMXMAMSAMXXMAXMXXMXSMM
AMMMSMMMSMMAMSAXXMAMAMAMAMAXAMAXAMMMMMSXMASXASASXSMMAMMMSXAMSSMMXSAAAMAXXAMMXMAXMAMMAXXAMASAMMMAAMXAMXSAMSMSMSMSMMMXXMAMXMXSSMMMMMMSMSSMASXA
AAXAAXXXXASMMAAMSSMSAXAMASMSSXMSSMXAAAXAMSAMXXXMAXXXMXXXMAMSXAXXAMXSMMASXMMXMMMSMMSSXXMAMSMXMASXSSSSMAMAMMAXAMASXSASASMMAXMAMXAAAAMAAASMAMMS
SSMSSSXMAMMXXMSMXAASASXSMAMSASXAAMMSMMSAMXMASMMMMMMXXXSAMXXSMMMMMMAMXMXSAMAXXAAMAMAAAAMMMMAASAMAMMAMMASXMXSMXMAMAMASAMXMXMXAMSSMSSSMMMMMXMAM
XAAXXXMAXMAXXAAMMMMMMMMAMMSMMAMSSMAXAMXMAMMASAMMAAXMXMXMAMMMAXAMAMSSXMSMASASXSXSAMXSMMSAAMAMMASMMMAMXMMAAXMMXMMSAMXMAMSSSMAXMAMXAAXAMXSSSMSS
SMMMMMSMMSXSSSMSXMASXSSMMXXMXMMMAMASAMXMAMMASXMMMSSMMSSMMSASMMXMASMAMSMMASMSAMXSASAMAXSMSSMXSAMAASXSAMMXMMMASXAXAMXSAMXAAAAASAMMMMMSAMXAAAAX
SAMXXAAAMMAMAAAMXMXAAAAMAXMASXSSMMXSAMMSASMASMMSMAXXAXAAMXMAXSASMXMAMAAMASAMAMASMMXSAMXXAXMXMASMMMASAXSSMXXASMMSAMASMSMSMMMMMASAAAAXASMSMSMS
SAMXASMSMMAMSMMMAMMMMSMMXAXMMAMAXSAMXXAXASMMXXAAMMMMSMMMMSAMXMASAXSASMSMMMXMAMMMASAMAMXMMSAXMASAMMMMSMAASMMMSAXSAMXSASXAMXXXSMMMSMSSXMMMXXAA
MSAMXAAAXSSMXXASASAXAMXMXMXMMAMAXMXSAMMSXMASMMSMSASMXXSAASAMXMSMMMMASXXXMASXMXXXAMASXMXAXAMXAAMAMXXAMMSMMXXXSXMSMSMMAMSMSMSAMAAXMAXMASXSAMXM
XMMMMMSMMAXMASXMMSXMXSASASAMSMSMSMMSASAAAAAXAMXAMAXAXASMXSAMXXXAXAMSMMSMSXMASMMMASXMAAMMXSXSSSSSMMMAMAMASXAMMSMXAAMMAMAXXMAASXMMMMMSMXAMXSAS
MXAAAXAMMMXMASMSXMXMMSASAXAXAAAAAMASXMASMMXSAMMMMSMMMMMMMXXMSMSMMXMAAMAAAMMAMAMMAXAMMMSMAMAMAMAASAMSMXSAMXSAAAMMSMMXASMXXAMXMMAMXAAXXMXMXMAS
AXMSXMXXAXAMASAAMXASAMMMMSSMMMMSXMXSXMXXAMXAAXXXAXAMSXSMSSSXXAXMASMMMSMSMSSSSSSMMSMMXAAMAMAMAMXAXXXAAMMMSSMMSMXAAXSSMSASXSAXASMMMMXSAMASMMMM
SXMMMMMMMSSSMMXMAMXMMSXAAAXASMMMASAMXSAMAMXSXMXMMMAXMASAAASAMSMMMSAXMAAAXMAAAAXAAAMSMSSSXSXSXSMASXSXSMASMXXAXAMSMMMAXMXMAXXMXMASAAASXMAXAAXS
XSAAAXAMMAMAXAMXSAAMXMMMSSSMMAAMXMAXXXASXMAXAMXAMSSMMMMMMXMXMAXAXSASMMXMXMMMMMMMMMXAAMXMXMAMAXXMAMXAXXXMASMSSXMXASXMMXSMMMXAAMMMMMXSAMSSXMSM
SAMSMSSXMASAMMSMMSAMASAMXAAXSXMMSMSMMMMMMMASXMAXXAMASXXXSXSMSXSSXXAMAMASAMXXAASMMSSMSMAMMMAMAMSAMXMXMAXMSMAAMMSXMMAMSMSAAAMMSSXXMSASMMAAASAM
AMXAAMXAMXMAXAAAMMMXAXAMMSMMSMSMSAAXAXSAXMAXAXAMMASASMMMSAAAMMMMMMSMXSAMASXXXASAAXAXAXMXAMMXAXMMASXXAASXMMXMXAXAXSXMAAMXMMSAAXMSXMAXXMMSMSAS
MXSMSMSMMMSAMSSSMAAMXSXSXMAAXMAAMSMMSMSASMSSMMSXSAMMSASAMSMMMAMMMAAXMMMXAMASMASMMSMSSXMMSSSMMXAAMAAASXMMAMMMMSXMMMXSMSMASAMXSMMXXMMMMSXXAMAM
XASMAXAMXXMAXAAAXMSSMAASASMMSSMSMAXXMAXAMAAXMAMXMASXSAMSAXMAXMSSMSSMSASMASAXMAMAXXXMMAAXXAXAXSMMMMMMMAMSAMXSAMSSMSMSAAXXMAMMAMXXMASMAMXMAMXM
MXSAMSSXMXSMMMMMMXAXMMXSAMXMMAAAMXMSMSMXMXMXMAXAMAMXMXMMMMAXXXAMMXAXMAMSAMXSMMMMMMMASXMMMSMSMXMAXXXAMAMSASAAASAMASAMSMSXMAXXAMXMSASMSMMXAMAM
XMXAMXMASAMXSXSXXMMSXXAMMMSSSMMMMMMAAAAAMMSMSASMSSMXMAXAMMAMXMMSSMXMMMMMSMSMXSAMAASMMAXMAMAMAMSMMMSXMAMSMMMMMMMMAMAMMMMASASMMSSXMASAMXSSSSSS
MSMAXXSAMASAAMAMMAASAMXMAAAAXAXXMASMSMSXSAAMAAMXAMXASXSSMMASAAXAMAMXAXAXASXAASMSMXMASXMXXMAMAMAAAXXXSMMXAASXMXXMASXMMASAMAXXMAMXMXMMMXMAMAAM
AMXMMXMXMXMXMAAAXMMSXMAMMSSMSMMXSAMMAAXMMMSSMMMXMXSMSAMAXSASMSMXSXMXXSASMMMMMSXSXSSXMMMXMSAMXXMSMSAMMSSSSMSAMXSAAXMXSMMXSMSSMSSXMXMAAXMAMMMM
SMSMMAMMSXSAMSSSMSXMASXSAMAXSAAXMAMSMSMSAMXAAMMAMMMMMMMAMSAMXMXXMASMXSAMAAXMXSAXAXMMMAXMASXSXSAAXMAXAAMAAASXMAMMMXMASAMXSAAMAMXAMASAMXMAMAAX
ASAAMXSAAAMAXAAAAMXSAMMMASMMSMMSSSXAAAMAMMSSMMSAMAAAAXMAMMMMMMSASAMMAMASXMSXAMAMSMMASMSAMXXAAMSMMSMMMSXSSMMMMASAAASASAMAMMMMMMSXMASASASXSSSS
SSSSMXAXMSSSMMSMMMMXMASMXMAXXAAAAAMMMMSAMXMASXSXSSSSMSMXMASXXASMAMSMXMAMAMMMMSAAMAMASMAMXMXMXMAMAAAMAMMMAXAXMXSMMXMASXMXSAMMMMXAMXXMMXAAXAAX
AMAMXMMSXMAXAAMAAXSAMXMXXSMMSMMMMMXXAXSMSMSAAMMMMMAXASMMMAMXMASMAMXMAMMXSXAAMMMXSAMXSXMMXSMSASMSXSXMAXASAMXMMAXXXAMAMAMASAMAAXSSMMMXMSMXMMMM
MMAMXSAAAMAMMMSSMXSAMSAMXSXMXAXASXSSMXMASAMMMMAXXMAMMMASAXSAMXXMAXAMAMSAMSSSSXMASASASAMXXXAXASAAMMXMSSMMXMASMSASXXMASXMASAMSMXAAAXSAMAAASASM
XSMSAMSSSMASXAAAXAXMASXMXMAMSSMMSAAAXAMAMAMMXSASXMMSXMAMMXXXMAMXSSMSASMAMAMAXXMASXMASXMAXMSMAMMMXXAMXAXSAMXXAAAAMSSXXAMASAMAMMMMSMSASMSMMASA
MMAMAMAMXMASMMSSMMMSASASASAMXMASMMMMSMSASAMXAMAXXAAMMSMMXSMMXASAAAXMXSMSMAMSSMMMSAMXMMMXMAAMXMXMSAMXMMMXAMSMSSMMAXMMMMAMSXMASAXMAASXMAMAMSMM
AMAMXMMSMSAXAMAAASAMXMAXMXASXSXMAXSXSAXAXAXMSSMMSMMSAAAXAXAAXAXMSMMMASXMSXXMAASAMMXSAAASMSMXSASAXAAMAXMMSSXAAMAXSXSAAXAMMMSXSXSSMMMMMSMSMAAA
MMXSXSXMAMAMSMMXMMSSSMSMMSAMASXSAMMAMXMMSSMAAAAAMASMMXSMMSXMXSMMAAMMMSAMXSMSSMMASXXSMMMSAMAMMASMSMSSMXMAMAMXMSAMXXSSSSXSAAXMMAAMMMAMMMAMMSXM
XSXMMSAMMMSAMXSAXXAMAAXAMMMMMXASXSMAMMMMAAAMSSMMMXMASXXAAMAXAAASXMMAMMAMAMMAAASXMMMSASAMXMSMMAMXXAAAMSMMXSAMXXMXMMMMMAXXMMSAMXMMASAMXMAMAMMM
AXAMASAMXAMASAASAMXSSMMXMASMMMAMAAMMXSAASXMMAMASXMMAAXSMMXAMSXMMASXXSSMMSXMMSMMXMAAMXMXMXMMAMSSMMSMSMXAAAMMAMASAMAAAAMSXSXSASXMSMSASXMXSAMAM
SSMMXSAMXXSAMXMAXAAAAXSXSASMXMAMAMXXAMMXXAMMXSAXMAMAMMMSSMMMAASMMMMAMXAAMASAXXMASMSSXSSMXSSMMAAAAXXMAMMMMMSSMASASXSMSAMAMMMMMMMAXSAMXXXMASAM
XAMSXSASXAMXMSXMXMMMMXMXMAMAASXMXMAMMSMMSAMMMMMSSXMXXSAAXAXMXXMASAMSMSMMMAMASAXAXAAAMAMXAXAMSSSMXSXSASMSMMAAMASMMAXAAMMAMSSXXAXMMMAMSAMXXSAS
SMMXASAMMMMMAXAAXXAAXASMMSXSASXSAMAMMAXXSAMAAXXXAMXMMMMMSMMSMXSMMAAMASXSMSSMSXMSSSMMAMMMASMMMAXMAMAMASAAMMSXMMSAMSMXMXMASAAAMSSMMSMMASAXXSAM
XAAMXMSMAAAMMSAMXSSXSASAAXMMAMXSASASXMMMSASXSSMMSAAXXAMXXXAAXMXXMXMMAMMAAAAXXAXMAMXXMSSMASAAMMMMASAMMMXMMAMASMSXMXAXXAAXMMMMSAAMAAAMAMXMAMMM
SMMSAAAXSSSSMSAMXXAAXASMMMAXSMMSXMAMAXAASAMAMXMAXSSSSSSSSMMSAMMXMAMMMMAMMMXAMSMMAMMSMAAMASMMMAASXSASXAMXMASXMAMMMSMMSMSMXXXMAMMMSSXMMXAMSMAM
MAASMSMXMAAAMSAMXMMMMMMXMMXMAAXMMMMSMMMMSAMSMSMMXAMAXAAXXAAXMAAAMAMXMAMXMSMSMXASXMAAMSSMASXSSSXSXSMMMMSXMASMMAMXAMAMXMXMMXSAMXMXAMXMAXXXAAAS
SMMSAMMAMSSMMSXMAMAAAAAAMAAASAMXAAAAAAAMSXMAAAAXSAMXMMMMMMMSXMXXSASMXSXAAXAXXMXMMMSSXMXMASAMXXMXMMMSXSMMMXSXSASMASXMASAMMAMXXMASASMXMASXSSMS
XXSMAMSSMMAAXXAMXSSSSMSSSSXXMSXXMMSSSSSMXXMMSMSMXMASMSAXMAMSASAXMASMAMSSMMXMXSMXXAAMMMAMXMAMXMAAXAAMMSXAXASXSASMXMASMSMSAMXMASXMAMXAXASAMAAX
MMMMMMXMASXMMSXMXAMXAXXXAAXAAXMXSAMAAMMAMMSAMXAAXMXSASASMAXSAMMMSAMMSMAXMASMAAAXMMXSASXSXSAMAMMSSMXSAMSSMASMMMXXMSXMAXAMAMAMMXMMSMMXMXSAXMMM
SASAXMMSAMAAAAASMSSSMMXMMSAMXMAMMAMMMMSAMMAMASMSMMAMAMXMMMMMAMAAMAMSAMXSXAAMASMMXAAMXSAMASXSASAMXMXMMMAXMMMXSMMXXXAMXMXMASMSMXMAAXXAMXMAMSAM
SASAXSAMXXMMMSSMAAAMXASAAAMXSMSMSSMSXXXAMXASXSXAASASAMMSASASAMMSSMMMMMAXMXMSAMXAMMMSAMXMAMXAAMASASAMSMSXSASMSAASMSMAAAASXMMAASMMSAXAXAMAMXAX
MMMAMMASAMSAMXAMMMMMMSAAMSXMAAXXAAAXMSSSMSXSAMXMXSXSXSXSASMSASAAAMXSXMMSMSMSMSMXSAMXMSXMASAMAMXSASAAXAMXSASASMMMAAMSSSMMAASAMMASXMMXSASXSSSM
SSMMMSMMAMXAMXAMSAMMMMMAAXMSMSMMSAMXXAAAXSASMMAMMSMMASAMXMXXXMMSMMAAXMSXAAAMXXMAMXSMXXASAMASAMXMASXMMMMMMMMMMAXSSSMXAMXXSMXAAMXMASAMSAMXAAMX
XAAMXAMMSMSSMAXAXAXAAAXXXXAAAAXMMMXSMMXMXMAMSSXSASAMAMAMAMMSMSAXAMXSMMMXXMSMAMMXMAMAXSXMASAMASXSMMXMAAAASXSXSMMAMMMMAMMAMASMXMXSAMAMMXMMMMMS
SMMMSASAXMAMXAMMSMMSSSSMMSSMSMMMAMAXXMASMMAMXXAMASXMSSMSXSAAXMASMXAXAAMMMMMMSSMSMSXSAMASAMXSAMXMAAASXSSMXASMAMAMXAAXXMXXMAMXAAXMMSMMMAXAAXXA
MAAASMMMSMASXMAXAAAAAXAAMAAMMAXSAMMXMMXAAXASXSAMAMAXXAXAAMXSMMAMAMSSSXSAAXAAAAMMAAAXMSAMXSXMAMXSMMMAMMXXMAMXAMXXMSSSSMSXMMMMMMXAAXMASXSSMSSM
ASMXXASXXMASXAXSMSMSSSSMMXXMMMMSAXMASMSSSSXSASASXSMMSMMMMMMMAMXSMXXAMXMMSMMSSSMMMMSMXSAMXXMASXMMXMASMMAXMAMSSSSMAXMAAAMXSAAASXSMMMXMSXAAXAAX
XMMMMAMMAMXXXSXSAAAAXMAXXSXSASAMXXSASAAAAXAMASAMMMXMXSMXMAAMSSXMXSMAMXMAMXMAAAMXAAAXMMMSSMXAXMAMAMAXAMXMASAXAAAXMXMMMMMASMSSSMXMASAASMSMMSSM
MSASMSMXSMSXAXAMMMSMMSSMSAAXMXAXMAMXXMMSMMSMAMMMAXXXMASASMXSAMAXAMMMMXMASASMSMMSMSSSMAAAAAMXSXSSSSMMSMAXAMAAMSMMSMMXMAMAMAMAMAAMASMXSAAXAXAA
AMAMAMSMMASMMMMMAAXXAAAMXMMXSMMMSMMMMSAAXXXMSSXSSSMMXASMXAMMASMMMSAAXAMMSAMMAXAXMAXAMMMSSMXMMMAMXAAAMMSMXXMMXMMXAAXSSMMMSAMSXSMMAXXAMMMXMMMS
SMAMMMAMMAMAAAASMSSMMMMMXXXXXASASXSAAMMSMSXAXAMMXAMXSXMXSAXMXMXASMXSMMSAMXMXAMMXMSXSMXXXAMXMAXAMSMMMSAXXMMSAXASXMSMXAAAASAMXMXAMASMSSMMSAAMM
ASXSASXMMMMSMSMSAMMMSAMMXMXXSAMASXMMXSAXXMMXMAMXSMMAXAAAMMMMSMSSSMAMAAMMMXSMXXSAAAAXXSXSAMXSSSMMAMXXSAMASAMXMAMXXMXXMMMMSASXASXMMAXAAAASXMMM
MMMSMSASXMAXXXAMXMAAMASMAAAAMAMXMXMAMXAMAXSMSSSMAAMXSMMMMMAMAAMAMMAMMXMSMMMSAASMMMXMAAMSXSXMAAMSAMSAMASXMASAMSSSSXSMMAMXSAMXMAXMXXASMMMSMSAX
ASAMXSMMAMASAMXMMMMMSAMMSMMSSSMSXXMASMMMXMXAAAAXSMMMXMAAASMSMSMAXMXXXAAAAAAMMXMXAXAMMMAMMSAMSAMXMXMASXMASMMXSAAAMASMASXMMSXSMMXSAMMMXMMXAXXM
SSMSASXSMMAMAMAMASMAMXSAXAXMXMAXMAXAMAAAAMMMMSMXMXAXAMMXXSAAAMXMMMSMSSSSSMSSSSXSASMSAAXSASAMXMXASXSAMXMASXSXMMSMMAMXAXASAMXMAAAXAMMSXMSSMMSS
MMAMASAMXMXSMMXSAMMASMMMSMMSAMXMMSMASMMSXSAAMMXMASMSMXASXMMMAMAMAXAAAAAAMXMAXAMSAAASMSAMXSAMXAMSAMXAXAMAMAMSAMXXMASMSSMMASMSMMMSAMXMMMAAAAAA
SMAMMMMMAMXXMAMMASMXSAMXSAASAMAXAAAXXMAXAXMSMMAMMMMAXAAMXAXXXSAMXSMSMMMMMAMMMMAMMMXMXMASMSAMAXMAMASASMMMMAAAXMASXXXAXMAXAMMASMXXXAMXAMMMMMMM
MMMXSASXSSXMMMSMXMMASXMAMMXSAMAMMMMAMXMMMMAXXSAMAASAMXSXSAMSXMXSAAXXXAAMXMSMMXXXAXXMXSMSASAMMXMAXMAAAXAXXSSSXSAMXMMSMSMMSXXAMMXXMMMMMSASMSMS
MASMMASAMXXMAAAXMMMAMAMXMMXSMMAXMSSXAAXAXMXSASASMXMAMMXASXMXAAAMMMMSSSMSASAMXAMMXSXMAMXMAMMXXASMSSMMMSXMMAAXMAXSAAAMAXXSXAXSAMXMMASXMMAXAAAA
SASAMAMAMASMMSSXSAMSSMSXMSAMXSMSXAAAXMSXXSAMXMXAXXSXMAMXMASMMMMMAXMAXMASMSXSMASXAAAMASAMMMMMMXXMAMXAXAMSAMXMASMMAMSMAMXXMXMMAMXMSASASMSMSMMM
MASXMASAMXSXAMAASMMMAXAAXMASAAASMMSMAMAMXMMSAMASMMAAXSMMSAMAXXMSSSXMSMXMMXAXMAAMXMXMAXMMSAXAAMSMMMMASMAMSXMSXXXXAMXMAXSASXSSXMAXMMSAMXXAXXAS
MAMAMAXAAXSMSSMMMMSSMMMMMMASXMMMAXAXXMXSAAASASAAAMAXMAAAMASAMAAAAAMXAMASMMMXMMSMAMMMXMSASMSAXAAMXXMASXAXASAMXMMSMSXXAXSAMAMAMSSSMAMXMMMSMXMX
SMSSMMSXMASMMAXXAAMAAAXXSMMMASMSSSSSSMAMMMMSAMMXXMASMMMSMXMXASMMSMASASASXASAMXAMASAMAAMAXAXAXSASMMMASMMXMSMMMMAAAMAMSXMAMMMAMAAAMMXAXXAMMASM
AAAMAXAAXXSASXMSMMSMSXSAXAXSAMMXAAMAAMXSAMXMMXMSXMAAMSXXXXAMMMAMXXXSXMASMMMMSSMSXSASMSMSMMMMMMAAXAMMSASMXSASXMSSSMSMMASAMASXSMXAMXMSMMAXSAMA
MMMSMMSXMASAMXMASXMXMXMMSMMMXXAMMMMSMMMMAMXMSAASXMMMAMAMMMMMAXAMXXAMMMXMXSAAAAAAASAXAAAAXXXXXMXXMMSXSAMXAMAAXAAAAAXAMAMXSXSMXXMSXMAMMSMMMSSM
XMMSMAMMMXMXMMMSXXXAXMAAAAMMSAMXAAAMASXSAMXAMMXMAXMSMMAMAAXMASMMMSSMASXMASMMSSMMXMMMSMSMSXMMMSMMMASAMXMMXMAMMMMSMMMMMSMMSXMXSXMMASMMAXASAMXX
XSASMXSASMMMMSXMXSMMSAXSMSMAMAXXXMXSAMAMAXMAXMASXMMAXXSSSMSAMXXAAAASASXMASAMMAAXMXMAMAXXMMAXAAAMMXSAMSXMSXSXSAAAAXSXAMAMXAMAXSASMMMMSSMMSSMX
XMASXAMXMAAAASAMAXAAAXMXMMMMMSMMXXAMXMXMAXSSMSASAMSSSXXAAAXAAMSMMSMMXSXXASMMMXMMAAMXMXMXSASMSSSMXMSAMXAAAAAXSMSSMMSMXMAMSSMASMXXAAXSAAAMAMAM
MMMMMMSXMXMMXXAMASMMMSMMMMAAXMAMXSSSMMAMXXMAAMXMAMAAMMMMMMSXMAAXAAAAXMMMMMAAMASMSSSSMXSAMXXAXMAMMAMAMXMMMXMMSMMMMSXMMSXMXAMXMXMSSMMMXSMMASXX
AXSAXSAMMSSXMSAMXSASAMXAASMMMSAMXAMAMSASMMSMMMMSAMXSMAAXXAMMSSXMSXSAMMAAAXSMSASAAAAAAAMXXAMXMSAMASMMMXMMXAMAMAMXXSAMXAASMMMXMAAMASXAAMASASAM
SMSMXMASAAXAXMMSSXAMMSXSXXAXAMAMMMSAMSASAASAMAAMAMSMXSSMMMSAMAMMAXMASXSXSXMAMXMMMSMMMMSSMMXXAMAMXXAAMMMSMMMAMAMMMSAMMXMXAXAASXMSAMMMMXAMASXA
MAXMASAMMSMXMMAMAMMMMSAMMMMMMSMMAXMAMMXMMMMAMMXMASXMAMAXAXMXMASMMXSXMAMAXXMXMAXMAXAXSAAXAAAASMSSXSSMMAAXASXXMAMAASAMXMMSXMXMSAAMASMASMXMXMMS
SSMSMSASXXMAMMASAAAMASAMXASXMAMXMSSXMSMXXMSMMMSSMSAMSSSMXSAMSXMASAMAMAMMMSSMSMSXMSXMMMSSMMMSAAAAXXASMMSSXMASMSASMSMMXXMAXSXMMMMMAXMASMSXSAAA
SAAMXSASAASXSSMMXSASMSAMMXXAMXSAAMMMMAAAMMAAAAMAMMMMXAAAAMMMMXSAMXSXMASAAAAAMMMAMMXAMSMXXAMXMMMMMSAMXMMMMMMMAMMMAXAMMXAMMMASXMXMSXMMSAAASMMS
XMMMAMMMMXASAMSMXMMMXSXMMSSMMAXMXSAMSASMASXSMXSAMSXMASMMMMSAMMMMSXMASMSMSXMMMASMMSSMXAAMXMSMXXMXAMXMSXMAAAAMAMASXSAMSAMXXSAMAMSMMASXMMMXMMAX
XSAMAMAXXMMXXMAMAAAMXMMXXMASMMSXASAMXAXMXMAAAMSMXMAMMXXXXMSASAMXMMMAXXMAXXMXXXXAAAAXSMSMMMAAXAMMMSMAAASMSSSMXSXSXSAXMASAXMMMAMAAXAMAAXMASXAM
XSASMSMSXAXAMMASMXMXAASMXXAXXSAMXXMMMMXMAMMMMMMMXSAMXMAMMMSAXXXAXAMMSXMAMAMAMXSMMSXMXAAAASMSMXXAAAAMXMMAMAAXAAMMAMMMSAMXSMMSMSMSMSSSMMMSAMAS
XSXMAAASASMMSAMXMASMSSMAMSMMMXXAMXSXXMASXSAXASXAAMXSAMAMAMMMMMXMSXSASAMXSAMASMAXAXMSXSMSMSAAASMMMMXSXMMSMSMMMMAMAMAASAMXSAASXSAXXMAMXAXAAMXS
MMMMSMMSAMXAAXSSMXSAMXMXMAAAAXMSAMXAXSAMAMXMMSMMXSASXSASXXASXMAXMXMASMMASXSASXSMXSASAAXXAXMMSMASXSMMMAAMXMAMXASMMMMXSAMAMXMSAXMASXSMSSSSSMAX
XAAMAMMMMMMMMXMAMMMMMXSSSSSMXSAMXSAMXMMSSMAXSMMAXMAMXMASMSMSAMXSAAMAMAMAMAMXMXMAAMAMMMMMXMAXAMMMAAAASMSMSMMSSMMASXSASAMAXAMMMMSAMMXAXAXMAMMS
SSXMASAMXASMSMSAMMSMAMSAMAAAASAMMSAMXSMAAMXMXAMSXMAMAMAMXAASXMSXMXMAMXMASMSSSXSMMSXMXMXMSAMXMSMSSSMMXAAXXSAAAASXMASASXXXSMMAXAMAMAMAMMMMSMXM
XMMSMMMAXMXAAMMAMMAMASMAMSMMMSAMMSAMMAMXMMAMXXMAASAMSSMMAMXMMXMAMXSXSAMXAXAAXAMAMXXXXMXMXMMMXAAMAMXSMSMXMMMSSMMSMXMAMMXMAXXXMASMMSMMSASMMSAA
SMMAAXXSSMMSMXMAMSAXXXXMMXAAXSMMAMSAMXMAXXASMMSMMSASAMXSXXXXAAMAMAAXAMMMMMMMMXMASMSSMMSAMXAMXMSMSMAXXXXAXAMAAMSASXMSMAMMASMXMXMMAXAASASMASMS
XASXSMAXAAXXMXAMMSASMSAMXMAMXMAMMXMMSAMMMSASMAAXXMMAMXAAAXMASMSXSMSSSMAAXXAXXXSMSAXMAAAMASAXSAXAMMMSMMSXSAMSSMSASXMAMMSMAMAAXAAMAMMMMAMMASMA
SAMXAMXMXMMAMXSMAXXAASMMSSXMAMMAMAMXMAAAMAMXMMSSXSMMMXXMXMAMXXSASAAAASMSSSMXSAMXMMMSMMXXMSAXMAMMMAMAAXAMMXMAAAMAMXMASMXMASMXSXXMASMSMSMMAMMM
AAMSXMAMASMMMAMMXMMSAMXAASASXSAASXSXSSMSSXSXMMXMAAMASAMXMASMMAMAMMMSMMXXAXMASAMXAXAAXXXSMMMMMMMASASXMMASMMMSMXMSMAXASAAXASMXSMXXMAXAXAXMMSMX
SAMAMSASASAAMSSXMXXMSSMSSSXMASMMMXAXXXMXXXMASAMMMMSAMMAAXAAMMSMXMXAAAXMMAMMASAMSSSSMSSXSAMXAAASXSAMXASAMXAAAXAAXMMMXSMSMAMMASMXSMMSXMMXSAAXM
MMAMXMAMASXMMAMASXSMAMAMAMMMXMASXMMMMASAMXSAMMSAAXMASXSMSSXSAAMAMMSSMMMMSMMAXAMAAXXXAXXMAASXSMSAMXSAMMASXSSMSMSMAAAMMAXMAMMAXMAMAAAMSMAMMMSA
XASXSMSMMMMSMMSAMSMMASMMAMSAMXXMXMXAMAMMSAMXSXMXMXAXAMXAMXAMMSXXSAXAXAAAMXMSMMMMSMMMXSMSSMAMMMMXMAAAXSAMXAAXXXAMSXSAMAMMSSMMMMAMXMSAAMASXXXM
MXMASXXASAAXAAMAMAXMASAXXMXMASXXAASMXSSMMXMAXMMMSMMXSAMXSMXMXMMXMXSAMSMSSSXMAXAAAAAXXSAAAMXSAAXAMXXMMMAXMSMMASXXXMAXMASXAXAAAMMSXMXXXSASXMMM
AAMXMMSAMMXSSMSSMAMSASMMSSMSAMXSXMMMAXAMXSMASASAAAAMMAAMAMXMAXMXSXMAMXAAXMASMSMSSSMSASMSMMASMSMSMMMSXSMXMAMXXXMASMMXAAMMMMMSXSAAMSASXMASAXAA
SXMASXMMMXXMAAAAMAMMAMXMMAAMMSAMMAAMSSMMAXMXSAMSSMSMSASXMSXMAMSAMXSXMASMXMASAAMAAAAMAXXAXMXSAXAXMASAAASMXSAMSAMMMAXXMAMAAAAAAMMMSMASAMXMMXXM
MASASASXXXAMMMMMXAAMSMMSAMXMAMAXSMXMMAAMXSMAMAMAMAAASAXMXSXMMXMAXAMASAXAXMAMMSMMXMXMXMSASXAXAMXMSMSMSMSXAXAXSASMSMMMSXSSSMSSSMSXSMSMMMSSXSSS
SAMASXMMMSMMAAXXMMXXAAXMAXAMXSXMMXMMSSMMSAMASAXAMSMXMMXMAMAMXASMSMSMMSSMXMAMXAMMSSMSAAMASMMMXMAMAAXAAAXMASMMSAMXAMAXSMMMAAAMMMXAXXMAMAAXXAAS
MAMMMMSMAAXXSMSXAXMSSSMMMMXSAMXMMAMXAXAXXASAXXSXXXXMAXAMASAMXMMMAAXAAAXASXMSSMSASXASMSMAXAASMMXSMSMSMSMMAAAMMMMSXMSXMASXMMMMSXMXMXMAMMSSMMXM
SXMAAAAMXSSMXASMMAMXMMAAAASMMMAAMASMAMXXSXMXSAMXMASXXSMSASASMSSSMMMMMMSMXASAXAMXMMXMXXMXSAMXASAMXMAXXXXMASAMAXMAMXMXXAMASXSAMXSMMSSMMAAXASXS
MXSSMXXSXAXAMAXAMSASMSSMMMXAAXMMMMSMAMXAXAAASAMASMMSMAMMXSASAMMAAXXXAXMASMMMXMASMMAMXXSAMXSXMAMMMMXMASMSAXXSXSMMASMSMASXMAAXMXAAMAAAMMMXXMAA
SAMXSXASMMMXMAMSMAAMMAXAXMMSMSSXMSSXSXSASMXMXASMXMAAXAMXAMMMAMSSMMXMMSAMXXAXMSXMASASMXMASAMAMMSAXMAMMMAMASAMXMAMSAAXMAMMMSMMSMMAMSSMMASMSMXM
MASAMMMMAAAXXMAMXMXMMAMXMMMMAAAAXAXAMAAASXAMSMMMMMSSSSSMXSSSSMXAMXAAAMXXMSMMASASXSASAXSAMXSXMASMMSASASMMAMAMAXXMMMMMSASAAMXAAAXMMXMASASAMXAX
MMMAMAAMXMSSMSMXMMAMMMXAAXAMMMSMMMMSMSMMMXSMMAASAAXAAAMAMXAAXXXMASXSXSSMMASXMSAMAMAMXAMASXSXMXSXASASASXMXSXMMSSMXAMASASMASMSSSMXXAMXMMMAMSXS
SSSMSSSSXAXMMAMAASXSAAMSMMMSMXAAAXAAMASMXXMASMMSMMSAMSMSSMMMMMSMMAXMASAMSAMXXMAMAMXMSXMASMMMSAMMAMXMXMMAMXAMAAMASMMAMAMMXXAAXAMXSXMSXSXSMSMA
XMAAAAAMMMMMSASXXAMMMSMMAXXAXMSXMMSSSMAMXMMAMXXXXXMXXAAXAAXXAAAAMSAMXMAMMASMMSXSASAMMASAXAAAMSMMSXSAMXXMXSXMMSSMSAMXSMXMMMMMSSMXXMXSAMAMASAM
XSMMMSMAAMAASXSMSMMAXMAXSMSMSXXAMAAXAXMSMSMSSMMXSSSMSMXMMSMSMSSSMXXMMSXMSAMAXAASASMXSAMXSSMXSASXAAXXAMAMXMSXXAXXXMMXXAAMASXAAAMMMMAMAMSMAMSA
ASASXXMSSSMMSASAAXXAMSMMMXMXSAMAMMSXMMXAAAMMAMXXXAAMXSAAXAAAAAXAMXASAMXMMSSSMMMMXMXMMAMXXMAMSAMMMMMMAMASAAAMMMXSXMSSMSMSSSMMMMSAAMMSMMMMAMMM
XSAMXMAAAMXXMAMMMSASMXMASAAAXXMXMXXMAASMSMSSSMAAMSMMAMMXSMSMSMSMMXMMXSXMAMMAMXMMXSAMSSMMMMXMMAMXAXASXSASMSMSXMASMMAXAMAXAXMAMAMXXSMMAAMSSSMS
MMMMMMMMSMXMMXMASXAXAAMASXMAXSAMXAMXXMXAXMMAMXXSMXAMXMXAXXAXAXMASXSXMAXMAXSAMXSAXXAMAXAAAAAMSXSSMSMXXMXXAAXMAMXSAMASXMMMAMSAMXMAMSASMMMAAAAS
XMAMAAXMAMXXAAMXMMMMSXMASAXMASMSMXSSSSMXMXMAMXAXXSXMMXSAMMSXMSMASXAXAASXMMAASAMXSSSMSSSSSSMXAAAAMAXMSMSMSMSSXMASMMASXAXAXASMXSAMXSAMXMMMSMMM
MSSSSSSXSXSXSMSAMAXAMAMXSMMSMMXMMMAXAAASMSSSSMMMMXAXMAXAAMAASMMASXSXMASAAMSMMMMAXXXAAAXXAAXMASMMXMSXAAAAAAXMSMMSXMXMMAMSMMMSASXSAMXMAMXAMMMS
MMMAXAMAMAMXMAMXXAXSMSMAMXAXASMAAMXMMMMXAAAMXAAMMSAXMASMSMSSMAMAXMAASASMMMAAXSMSSMMMMSMXSMMMAMMSAMMMMSMMMXMAASAMXSMMMSAAXAAAMSAXXXASASMMMAAA
SAMXMMMAMAMMSAMSMSXMAAMMAMXSAMASMSAMSMSMMMSMXSMSAMXMSAXXAAMAMAMXXASAMAMMMXMSMXXMAXAAXMXMMXMMXMASMSAMXAAMSSMSMSMSAMAAAMSSSMSXAMMMSMASAMMASMSS
XSMXAXAAXXMAMAMXAMAMXMMXAAXMAMXMXSMSAAAXXMXXAAXMMSXMASXSMSMASMMMSMMMMSMSAASAMXSSMMSSSXMAXASXMMAMXMMMMMSMAAXXAMAMMSSMXXAXXXXMMXSAAMAMAXSMSMAA
SXXSAMMXXXMAMAMMAMXMSXMXAMXXAMMXASXSMSMXXSAMSSMMXMXMAMXMAMMMMXMAAXXAAXMMXMXAMAMAMAXAXMASMMMAASAMSMMSSMAMMSASAMXMAXMMSMMMSSXAXAMMMMXMMXMAXXMX
AXAAAMAASMSASXSMAMAMAASXSMMSASAMXSAXAMMSMMMMMAXMAMAMMMAMAMMMASMSMSSMSSMAMSSSMASXMSMSMMAXXMMMMMAXSAAAAXMSXXASXMAXMMMAASASAMXMMMSMSSMMSSMAMMXM
MMMMSMXXSAAAAAXXASASXXMAMAASXMASMMMMSMAAAASASMMSASASMSSMASXMAMAAXMASAXMAMXAASAMXAXAAAMSSSMAXXSXMSMMSSMXAAMAMXSXSXAMSSSSMASAXAMAXAAAAAAAMSAAA
XXXXMAMXMAMSMAMSXSMSXMMAMMMMXXMAMAXXXMSSSMSMSXMSASMSMXMAXSAMMSSMSSMMSSSMSMSMMSAMXMSMSMMAASXSAMXMXXMAXXSMSMSMMXXSMSXXAMXMASASMSSSSSMMSSMXAXSS`

const grid = pad2dArray(stringTo2dArray(input), '.')

const directions = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]]

const charArrayOfWordToMatch = ['X', 'M', 'A', 'S']

let count = 0;

const checkInDirection = (y, x, direction) => {
    for (let i = 0; i < charArrayOfWordToMatch.length; i++) {
        const letterToCheckFor = charArrayOfWordToMatch[i]
        if (grid[y][x] !== letterToCheckFor) return false
        y += direction[0]
        x +=direction[1]
    }
    return true
}

const checkInAllDirections = (y, x) => {
    directions.forEach((direction) => {
        if (checkInDirection(y, x, direction)) count++
    })
}

for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
        if (grid[y][x] !== charArrayOfWordToMatch[0]) continue
        checkInAllDirections(y, x)
    }
}

console.log(count)