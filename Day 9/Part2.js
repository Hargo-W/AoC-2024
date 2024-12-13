import {isEven} from "../sharedFunctions.js";

const input = `2529414994631170149953136311659836486767499011295895209013255645858553884990631239857180407026188318789536626883964672136355273919115442427552799046486996326836721848461142184774852462365260634524991545439574418977718911375256991472764810705999392318631748622830142133467261617273937356141415707425753674415292503537471415868114655290826112291685289736371370794189785878486831872016564126976522727423616247825525582235815348304183161672962553208063528051403895878511223754541942753550948843423236569890488336109548241119404580493982516632107654275399605468301782552884515594818174546445227869897726454296218318628664159728961325374033515263746610627048519411977781695595794535515064703636952079774826159321748816186679411826696063348134165468188023619726476382843216866261777484681339754899174368188722709816794137754761792646555351973887495359649411363814901253642493312614366531222370302156743751318251941645822081602872738751283687336339884876543218141359765134733663492093416431535012445097595649165971493028986240575597653688523974288772307034632638625633187731811281922665421327836218203214749354406959408680793080389496978212945419775978249165443961189137588895163095106088317084441298272395387540452384597822868485507235641120715625515459853525688110756198615289287578182442456417904668154987527729122473963550517916127294526771821425495935972610686448528932482912141732519954383661982334932650248353682615255120545729895022211147836848115341454584957926805633627964276847999330476526354279332512826717133230773157324347402953953927527665567153253315399378748818468678693837961867951860312379276017805343355247963052974232165110245254232287194847722340532410286385821556192322832743937519209173458985571983132531839983977272421739138970811391464140682379139824407889378619871180297441298829669070809895586794531431857864567433873076723053603435662419381934421712102617472739137385638576101831848842655652454165101290255871526232351950556852421166861327615244371495542266229753205035804540174131698192768395814389388644268086405515537752706254391829761337527891677215356747115182964429255822243039588914805260924016257466777195552352949478722191539771342551122847825532233481813754983169379785489050221270707365696021932483631432414437351963685012191132618360937331778186804479417765518124878796421456944742103810878239437117576013394324571182139571294073653266958694952196425926136893533164132575492817488096489046378492654888421055756213119857493249964822944119957868459016171356769871756326614598659835681980344267978612918689166116244890339182206315282146134018964798226159212449309744905320227743183143823029572839434660354034213549817535283713791522376277984037586413688061535089165885822732145890396647843158478710908866936938249064552772794146522586525741963899855122516857695592581647685180705089559981833535136560929145755880975051188152909463771689906499581149643227497130528722407033493481913346162338161479763710736884142797715949788465814349438278276580443850194834256818985090856559827988358562352513349995775225726210788843511763845149583787943127203914501053994685329347167183832489402915704644923353246710121286566284592170886447519167319529279269987190217074136145686633506883865816354097504356778652208815894272748631452119193048574123409114138145899637632260879694921946816524934021101560398222255429352486691681551047543735741549497410302274971744428279371337924012804528976512947630763820698984176515394115387633878375905835504237195317411954949167209227352725803951402765353945194611408966745723441976996218446199527123935043173695744261353026652837718730465094774015112912204943556343544443281354456239347083976280589560844610218264355879457283812993459560733867541611553150662275879650464596329710741282407824297149262230995875542027136495131087189327597974108634582334863989876019159315756949473828329795289481447823671037856645639327923091353712977682847527747453192825951029198856408367633596597492822338202150779572581027413328459951408278317191453930802581727739778818584413762281675934513970122072971459927778838048533780518220295897149947836136418279345115765461984365627774424287416673159950719867353137466421928859527059578264892347829281782530312247822394516573966472975576956366988127608160989564458910184313229420889926896085859813973174764072952774397898954466591163388550598972604976663611761341337996196531364142244786437084508236507637471411333734425822787974289912567133635377856417676855417510459720787516351248865028922683834152246383211823927644303075529444473819826470587213904655264647936061755076265634169417988091507859331696695769284314334936986135269574142089267669916879509927751857594745155933587016723848953951677257844971196014883326232861968441712070642663307777867467921814283324529951996933555279335439351793773832376425489790347097348422593969642852779022169223143874617495449982708614991877319989495996341617318379612350708842715884444940298963514595995861202572539578968229889314943042379386975825399714472598998896275717317789252230862580831911698693607072779348639733637062376388618751532446287461907975694698138498743674524764675433752075968423109396213318302547126063612015531374816351905283436220886375995812865645649141134191501727367893497583962867563365886828824519512052627638939237741386617227974759779067369889518684846439526033282876841617462042442269987069773717961312365584922658887661807898123591715763889589721296117827774775908347857384569976642759537833152357239422302577182823786591653840885394638914438832962054492810589492861554891063532026219355884515583221127034332875159922409584108748275365712893384120529451631561844113821693951354569460739871304131148640197459796332329932481346758171451932293326231949729390343088517175979578399524493432135176233172553180593570434837191336643916833176559150318999731314923242823710603792571853876371181271567758677297726678746261485567172587397114357927481587588546685557202136685993376096227650548253591779513552553924641735665178743045792684921252441476943956138343342153965395174258165333143368244033705373906479283944601437469850534960435315251028392311693555987024759239405319995026991252746572267189531323531240726621262588875681413577157821855759361879662876199816456269408159192440157511974546254551552112837961332772366597688970625124776783129518443867948213402053698231624310479198241337516740542547528657576074569664283634947780873287845510856376975280329234895920361046864061638397742281498357239959407484853642241734938160807663532164878623998830956790996098256839394229567714123932563931773235189019543369113372644947855499733915242264161245168769962351632553241194171382308165896772152271462743716484197248784950479730116542401564881257731654274033215711596287275930853493403887128663418582562837826832168965813950579887467061403834136842595975531188795065866894841959715210245747786292922145987543385430557218605063544754162850197295523292787872151070389787421074127480979667155282908461632832688958559343982661121567427116199232372744447250876255842217334096361787578921133673471226504829932937435162951056248417288221392613501749757484922179762626734566329696681235101999163642723350107832851532326160957591154631213496682013446738936344824599467110178333272612434182583726759394461671638880234884483742665765867162858753905079626655457570366587407816437486477441464926871135787479692260276680512056289567185812166261926597168235395791874272491337975719533018634929555681852889654725246766427836868339678299888070467361418118189185887849937415133033914434276167236373773242317889396972266762417210188295313421108175673291946914346531348630218711871325557857622725614288216914324142176149347966536219563474327432727315874397694491365159904382779931668771605155113377709491935019345329841640515393223388938398282814804018387757388269801688686119747960177369204228904719749989835059126010153088386468907469927142349124434852117714543516719911402832634829925120206332742825132621443526525038458970937574866527656658817482173683851272254888471587388799605651435266467029242546257288474665612035773117775755683493605435355451292552972838536749176269563218506210641949288225781671776376732626121854927620421599755763586241659734169460198471917986486743522513185299196496888657338493297625141871835456782744552777179870472819335930524451412227158567606324777065304544224274548895676217717154302827468454448617961547129915827072347777646166273473351079158780484188286332909954245091842872889126836863984182843435306389397411631977474322671629434756137663563618752317648357694644226485694945599174259688668187274661887191493082457995761881593446127225317165293022501952319497336932322767788699429262191752563263922892838047925172188196504853449214629551296665581145158670239512849396537147485663544045742782496673348490857554903925836698569925609944374774653511741831657175125137496038822182603950587691483262191235208463325762778839662856282217234530369627147973868822827010148030165632441653194425421050232513106040447451846676359089671531796362678717767988124162979694506496784054812360567782399784865135388690294642683171216974766986396576975490105318559373424698787437688557877158218371278457789860311029563277546383544892577698264626845017579266981747732354379074878361114767608950934590211375765721348048884340909970805539267593105416844391682494919095598134249119368133359819757379212389438096743567758051275829118265143278801797638476563062925356262417553725967577142813708467847887655547416511553757847121804935843837784184545722793051823734246648646452287876584949575494315249845695325028189443292761891979237563826779898665181091654818647159185643608485305387963626224565928489378619444981923468579667968346377691534172934755957294709524397313443796384252591052707013952490768483528934175481704189152762162211298817663343485942147260512852528849838755724259418851669671598937513426823917485262305387796586297250551618388512339573624195264377407617827265294187259151294042519881542927279134235990229478796182765494193011192529599466449484487736567431126378487357537211408016478927122161197418944499364646411439156188812657659057274751477567475479836151955744708965869356819072204223903818202714564693184141171455129739674233312746984353853673975679277422414589723884364055569015124470343548823363192038946382122535898741553564885030261230488670409813686864388051132153324436708452844556148980927437241868332788438436634578876696742551928297793057289492146014478268681653366058565496734095904157615382536916912880508895357980811744463551872854337213632877945616938728611968899069416832219319264918987045779598529743253653729623391460482983259834966541864633785212981315586379697984194168364339675053787966329947131876867391118287634731671236868794137657415848338165177860813946763329597892791846106916246165157787333462409543784419585539868247783516923034381310458279709742708571821071597884146240884743628171457667686192573119798348994886418635727348836793913966419121819538427523585050341284172143209454318938299629713522699382881471164623839496246929753762186223896414982817796548399273461731797862527790617851192259229068723173591179947263952488681098333066867061403077834543413647619652285790488368491330257022614855462914813418496334698360298890977253499690182691378151647998867282767275147356601673269337114933275033361763477777327319657889664111264293916799147973231610405711368633275341825337629973362314465218134291874541119265441641325965383489444932957497211982434423247696121722833394918883766470873350703970871023839028395037172370843315285469767290177132558647268362894144737545542038543444326848886920491119779813203419559399587340303127918720857376772641801270168616802661393363597267548380882130511796448246378086751479931092975214946844455177376047631427628232643039145923562453584976937176864628584340132716635333833468614764566940837086345727807372153256379129817956745919253421978943303191964484576435667240425071512984142417757658878650324473919977471882477144698189544341706848156784755021389523767151202493163382509560121311875219924649812452873976707628227820632820739257169016537896842144442495561161711243947054753082906874578195333626412299754020937251566533744223342995987474144817277213873632741755679846976852884229374282621294461537863047549490727134294218613747912747684785411267652467495199481996163375674940915462324184284088111423992371895230408480857930131266845763228223598440796634564969707066156452295089288777649277556013195871949271376495896088399085111576956820871784768372833888472937351118942457391847395757728767643727465020313980359554748836956333726494842729481765977351583238212696488790762185727885446331169472632080216273482057861829471778875450927772519954192552374349244223288897401148744834795092241162595178262946332893829021521296928856767232999222429392929724231276538533162498199713755661745720188685621372609635783747372243441353383311216763858812142622337755866549154717988836991149157056679744351490452357525326895036498352158193214564873889188822172336593194139584162523761462788035946956594849555358833582551834963214195228681216846935144898711024858025684423272687674547243741279359721575796724717376598366601669371589483213985131383414752627927723557070944997926173415173724037987866907042694413604737826114832744647489791567315380453572501087819757772371789536942057356056834340224775282111235470393566669227791979483123856082711161352084954631189797986652655943733985175613773658602334372343281879567914308267183638153184823726724566396110569430372769759269198217761169106040842690481473942285616714699962893391327592143644558856814994338618558544845832538562737478613796728913775260514678619912268081237650253842478140275339735790247579151915741082626354947213262785324994159099206320675914582810964666394819689639747759292899828544111124815030245345989832397773681057556125975939588428612540904269995936848226157958545165614127438731257823974789789811341898208715245826579965389778646581252045654084858253831882371812399318389060736043917199945624964579799041907783207825824399623327318161397052456683102527646058649444143050285876779192592564613330951083466466502517598764917022923845789672152239786235482764779660924680725767294573227498398795537592791385536149221689312957148544603085491049136359461311252913228854582995985553121163751021405540196625412868938130782435662350157030738948966344462633246063731083604516377127533931273840604693967751118249227536484769582931637926753549825338488847403822703910596122894485916477281041683480916174998749199321157023909665156323107760293576617787344728487416299641705594226185974385776878853444481736797141554985434667491845948847953989684619984662615950661342432494176354605213197243564389207529919259276511378044254880809886939188541479568484884436932410235652754259366920219999509354482025651582522873161276536036926662659835546646737470146247178441633174105497918161793946529556639276345920313138156847186466769956195522594258387664807758424387523222864982562133457388503184838382627283787760769617306330925889844668863338639486313032367972343946232599962147372284593149426277978221664943956749342273165518778795246230308036222172627794688092688374417660859628207682432230585335997646518451283753855632283563461248551782801478427171182044233235333689246344142349195527326218614546934096196395919249796094979048404911418569849992205723919588352868267022792715638089365555469933109745505983854555716754389359943836287587882385792117865937135819373743166117166634263438428256662492501874434630605897748134639549891548337076632976438735725457809789651163712698574923324917873193176394253438473564844581103495857314944695524838936319331387739355914148379720413456597618841520611034261711463157755783229893234042737345213852299940451380776112897760259714232379641391851693292843105245934282976949556542441355827670265534643431928527265926343029236454344667976639992684351387822888527390635595276038301338842760967882862050784988835946425019497961696974179371653976645268358674107934849749506388444356928590662862962050795631898627636338248381123892379795127315579693901181929965611971192592687949777296569359557275288711591621995840581068823650967232971011659247646069542710526291704853263490729512519956325623226321378177893166585121321844383090608885395624666032711317364698202572312567906283314163458748239810969511193451358948754518893542546920874788249278615074638584873548987858714494329655139886301026184321619953857896988815757599456453288089384482348062264715136844338148275555332016145254409076549132309660707222523960779157687563959995652343137132357989488445389210161565559326941817131277456063109683808335235724285164251890294027516524798351723588853355353337971087914066811666802940771578915136967538512688114939848293447517254942203619344534653241641455922596502420724020646461452575937427301251575826383828208412638471853768861468933955412839852493704967123787276736464624867167589648486712784155602554687837309060812180409563389019256718323094324035663674751022144535804524703362643625738220613356196193181182676491217180161232783738874760412587743291935496788956644846291471646968263250985566956040196438494715221043223627487440104551507183612184648040516627433067117696278659536799656067988833855035232022299588322565596270969486416635211995476318621946902994605967253960603347503394665843208333927524282996905694719826813772238273901570383296399220481911621780582786776577412022235016458129677157872539206116436944159412168664414826399628808910403233937791491571647325359066778280479961443674664081892572998374821221625140159133847469139499164637247539935712522260797025385033319534455526189365428960343483535542217665664726812024901773776917146114487248538687624319891318957441316967777576473049372764251177564480132356638412215697295025474413357622434690359746759335827523317492439392733713486952142988665231215292633669259725952646192054369364385068652199241664604763346882699186751576467924189378159018354145172419751388786241999187995825214531719054494111317922957862687780948371339841473610663867992514545614484648353581399073723231208154211012754251288542144223701493275358165119283458504117789158274734615196369367194387631995881697342191189572599029142212195690231476735929641029888887177840149796788522677992162737116597478484646056525174271255454122623685275569419714652921746041168099595295681399824887713226447050238817675317501956458571484291876187918049171175574175502991341121445870531814272148263064565282627514101123843723926654728619217784377581691964745248742935414089789490199119901853209347556262769030686033849925415671401323286071689986625384437097242386402070752539733644425362302761512360586910688334224486608461723197915563788036646327757479361026187821836868569836296615936497363657906673652749883673425570236496307020577955277693605582949958448529747175845572891755706137581334391327675010162978597060117322524120484736867193209235686848993575189277991753559513785257361183538376296615746462283343218369316121978319455552454193795487287969913691192354711363702111845346793736812589899096354127506081808036655441412958509547693761145119798696819510255490727798714511824497435990268786605521723282914729916771733149511360747625614267243964173121895462317598271534507061376766169942297795745526178562494180322753378246586130222089701041133920185272225395134511116953644349679488869173479735531687619476132528769768498069807465749939773067771825171055452073763268712329272937896090472378592133239775938085409573688062851627994874304318317862611643166961232498534730265757407912729619903682765224124977839280352358547098287921317341666922129894464337354928568038122378355225632276256715583670471355993855172746622825944376966233973757356911825260162871812592632559891117486347422347992529941697702017488464635678917868589612168269669537653857591035652857132315393832456797892133684196261957473754507416947165754330317062712830511914274558747584295780647492605119565668911332402960887396222241993596509063834636402284154381646485385868579153248445294622277948748137205831632555745583303493332`

const decodeInput = (string) => {
    const arr = []
    for (let i = 0; i < string.length; i++) {
        if (isEven(i)) {
            for (let u = 0; u < string[i]; u++) {
                arr.push(i / 2)
            }
        } else {
            for (let u = 0; u < string[i]; u++) {
                arr.push('.')
            }
        }
    }
    return arr
}

const compress = (blockArr) => {
    for (let i = blockArr.length - 1; i > 0; i--) {
        const currentFileVal = blockArr[i]
        if (currentFileVal === '.' || blockArr[i + 1] === currentFileVal) continue

        let sizeOfFile = 0;
        for (let y = i;  y > 0; y--) {
            if (currentFileVal === blockArr[y]) sizeOfFile++
            else break
        }

        for (let u = 0; u < i; u++) {
            if (blockArr[u] !== '.') continue
            let amountOfFreeSpace = 0;

            for (let x = u;  x < i; x++) {
                if (blockArr[x] === '.') amountOfFreeSpace++
                else break
            }
            if (amountOfFreeSpace >= sizeOfFile) {
                for (let j = 0; j < sizeOfFile; j++) {
                    blockArr.splice(u + j, 1, currentFileVal)
                    blockArr.splice(i + 1 - sizeOfFile + j, 1, '.')
                }
                break
            }
        }
    }
    return blockArr
}

const checkSum = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '.') continue
        sum += arr[i] * i
    }
    return sum
}

const uncompressedInput = decodeInput(input.split(''))
const compressedInput = compress(uncompressedInput)

console.log(checkSum(compressedInput))