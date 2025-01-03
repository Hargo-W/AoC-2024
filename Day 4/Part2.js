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

let count = 0

const diagonalMatches = (letter1, letter2) => {
    if (letter1 === 'M' && letter2 === 'S') return true
    if (letter1 === 'S' && letter2 === 'M') return true
    return false
}

const isXmas = (y, x) => {
    const topLeftLetter = grid[y - 1][x - 1]
    const topRightLetter = grid[y - 1][x + 1]
    const bottomLeftLetter = grid[y + 1][x - 1]
    const bottomRightLetter = grid[y + 1][x + 1]

    return diagonalMatches(topLeftLetter, bottomRightLetter) && diagonalMatches(topRightLetter, bottomLeftLetter)
}

for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
        if (grid[y][x] !== 'A') continue
        if (isXmas(y, x)) count++
    }
}

console.log(count)