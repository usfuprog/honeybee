var lastWasClick=1;
var idCnt=2;
var circlesCnt=12;
var colorOfBorder="white";

function goNow(num)
{
	var str=num<10?"0"+num:num==undefined?"01":""+num;
	changeStyle(this);
	document.getElementById("honey"+str).click();

	setElementBlic();
}

function get_text(num)
{
	var info=getLorem(num);
	 return info;
}

function defaultNoneDone(num)
{
	if (Number(num) >= 0)
		window.location=encodeURI("readMore.html?key=" + num);
	else
		window.location="defaultNoneDone.html";
}

function getArticleNumber()
{
    var buttonSpan = document.querySelectorAll("#menuDiv .superButton");
    
    var res = 0;
    for (var i = 0; i < buttonSpan.length; i ++)
    {
        var elem = buttonSpan.item(i);
//        alert(elem.classList.contains("activated") + " " + i);
        if (elem.classList.contains("activated"))
            res = i + 1;
    }
    return res;
}

function changeStyle()
{
	var str=lastWasClick<10?"0"+lastWasClick:""+lastWasClick;
	var div_var=document.getElementById("honey"+str);
	div_var.style.color="green";
	div_var.style.backgroundColor="#e29903";
	div_var.style.borderColor="silver";
	div_var.style.borderRadius="200px";
	
	var idNow=this.id;
	
	var num=idNow==undefined?1:parseInt(idNow.charAt(idNow.length-2)+idNow.charAt(idNow.length-1));
	str=num<10?"0"+num:""+num;
	
	div_var=document.getElementById("honey"+str);
	div_var.style.color="white";
	div_var.style.backgroundColor="RGB(128, 16, 128)";
	div_var.style.borderColor=colorOfBorder;
	div_var.style.borderRadius="20px";
    var oldActivated = document.querySelector("#menuDiv .activated");
    if (oldActivated)
        oldActivated.classList.remove("activated");
    div_var.classList.add("activated");
	
	changeStyle3();
	idCnt=num+circlesCnt/2>circlesCnt?(num+circlesCnt/2)%circlesCnt:num+circlesCnt/2;
	changeStyle2();
	
	lastWasClick=num;
}

function changeStyle2()
{
	idCnt=lastWasClick==idCnt&&idCnt+1<=circlesCnt?idCnt+1:lastWasClick==idCnt?1:idCnt;	
	
	var str=idCnt<10?"0"+idCnt:""+idCnt;
	var div_var=document.getElementById("honey"+str);
	div_var.style.borderColor=colorOfBorder;
}

function changeStyle3()
{
	if (lastWasClick!=idCnt)
	{
		var str=idCnt<10?"0"+idCnt:""+idCnt;
		var div_var=document.getElementById("honey"+str);
		div_var.style.borderColor="silver";
	}
	
	idCnt=idCnt+1>circlesCnt?1:idCnt+1;
}

function setElementBlic()
{
		var timer1=setInterval("changeStyle2()", 400);
		var timer2=setInterval("changeStyle3()", 555);
}

function getLorem(num)
{
//alert(num);
var textStart1=
"Tempor eram esse ad culpa. Ea enim quamquam. Cillum officia fabulas, ea id "+
"cohaerescant, ex a reprehenderit id nam aute doctrina quamquam. Qui tamen "+
"occaecat concursionibus sed velit quo litteris, eram laboris, laboris "+
"quis litteris fabulas, ab irure doctrina, proident imitarentur ne senserit ex "+
"nam probant e vidisse, deserunt varias cillum voluptate quae. Amet relinqueret "+
"deserunt tamen ex fabulas dolore anim eu anim. Senserit aute officia, ullamco "+
"ubi quid iudicem ut o nulla fore quis ullamco iis pariatur te noster. Pariatur "+
"praesentibus ab eram hic ut aliqua fabulas, si commodo sed laboris, varias "+
"vidisse ne amet tamen, nescius tamen fabulas quibusdam ita enim voluptate "+
"mandaremus duis laboris ex ea elit deserunt pariatur. Anim litteris incididunt. "+
"Probant culpa officia laborum et ita ab aliqua sint veniam, eram offendit. "+
"Eu illum hic amet, probant fugiat culpa litteris quae, cernantur ipsum ex ";
var textStart2=
"De possumus in eiusmod hic aut sint illustriora, veniam hic ullamco sed enim ut "+
"hic ne irure ullamco do legam vidisse eu imitarentur, admodum despicationes o "+
"pariatur, de non sunt dolore fore, e ita distinguantur. Irure ea quibusdam, "+
"quibusdam eram nam fabulas consectetur. Laboris a occaecat ubi ullamco in "+
"enim. Litteris te labore vidisse, culpa incurreret ad exercitation, litteris "+
"malis malis mentitum anim, est legam aute enim possumus. Te ad dolore fore "+
"summis ad ea in relinqueret et ingeniis ne legam o ab amet laborum occaecat, "+
"fore quibusdam aliquip a ut quis nescius adipisicing, possumus aute legam "+
"eiusmod, excepteur dolor arbitror aliquip, fore est eu duis laboris sed fore "+
"singulis iis multos anim eu consequat iis consequat, aut probant ut ullamco, "+
"nulla quamquam o praetermissum. Quibusdam ne iudicem, varias relinqueret. "+
"Quorum incididunt et excepteur, est dolore fore te laboris in esse illustriora "+
"cupidatat illum possumus in aliquip eu probant, fabulas sint amet et anim et "+
"pariatur ut sunt, singulis enim dolor a varias, proident graviterque in "+
"mandaremus. Ea duis consequat quamquam ne multos laboris ab amet aliqua. "+
"Expetendis malis vidisse. Id fore aut legam, lorem ex ex nisi arbitror. Pariatur "+
"praesentibus do mandaremus, irure quamquam doctrina, e labore ea quis, fore "+
"commodo ex arbitrantur. Quo culpa vidisse philosophari. Sed esse hic culpa ut a "+
"laborum an consequat."+
"Pariatur lorem probant hic voluptate labore laborum, incididunt arbitrantur sed ";
var textStart3=
"Veniam quo offendit sed sed sunt distinguantur, vidisse varias velit deserunt "+
"lorem, o id labore magna fore. Vidisse aliqua illum ea anim te nulla "+
"praetermissum commodo minim vidisse, o offendit nam cupidatat, minim e ut nisi "+
"quamquam sed probant nisi labore expetendis velit, ut fabulas aut fabulas, irure "+
"deserunt amet hic iudicem praetermissum qui aliquip quorum an arbitror "+
"admodum. Ipsum voluptate firmissimum. Laborum eram quamquam, aliquip non "+
"litteris se nulla quamquam admodum, non culpa quorum a cupidatat si ut ipsum "+
"ullamco ita dolore quem, ab laboris graviterque, qui quo magna quamquam iis te "+
"nostrud iis deserunt, do cillum praesentibus. Quid domesticarum tempor fugiat "+
"probant. Enim quo cupidatat, excepteur noster quis o tamen. Si lorem fore non "+
"tempor, irure pariatur despicationes. Dolor senserit eu minim labore ut pariatur "+
"Nisi firmissimum incididunt sunt admodum. Se commodo hic ingeniis de probant "+
"labore noster ea quorum id ad anim cupidatat fabulas, illum illustriora ingeniis "+
"veniam pariatur. Ut aliqua admodum praesentibus. Dolor est cupidatat et nostrud "+
"lorem commodo, est e illum quorum ipsum ita iis quae tempor. O quis dolore "+
"veniam consequat, enim tractavissent expetendis malis voluptate sed quamquam "+
"enim senserit, ut nam aliqua noster dolore nam probant transferrem ut probant "+
"non ne quorum exercitation, senserit hic eram probant, o lorem elit aute "+
"litteris. Incididunt ut culpa ad si quamquam ne doctrina, deserunt sunt ne "+
"eiusmod voluptatibus, non dolor nostrud tractavissent. Eram distinguantur "+
"proident dolor probant, do id illum vidisse do officia esse tempor qui quamquam "+
"enim iis occaecat concursionibus in aut malis illum de litteris quo quorum "+
"laboris probant e expetendis fore eram o minim si enim exquisitaque appellat "+
"varias proident."+
"Fugiat incurreret nescius, in velit ea velit, ipsum ingeniis ab distinguantur, ";
var textStart4=
"Id amet proident relinqueret aut ipsum an admodum in summis sed esse ita "+
"mandaremus o lorem, eu amet proident familiaritatem. Ad velit ingeniis "+
"domesticarum, quibusdam noster admodum probant. Quibusdam anim occaecat "+
"mentitum, labore nam ne esse tempor hic nulla ab e culpa eiusmod, quo varias "+
"expetendis laboris. Litteris nisi proident de quo aute doctrina litteris ubi in "+
"quem e quibusdam ex quae quamquam instituendarum. An ut noster fore malis. O "+
"an nostrud. Sint o admodum, magna commodo an cohaerescant. Fabulas quo probant "+
"ab fabulas aut cillum de senserit e labore vidisse, eram te senserit id quae, "+
"velit sed quo fore laboris do noster ne se sunt litteris. Quae arbitror an "+
"labore amet, te consequat do probant, et ut quorum expetendis qui officia non "+
"quae comprehenderit, commodo irure malis ea quorum ex admodum do irure proident "+
"nam nam lorem anim lorem nostrud, in eu dolor arbitror e id e minim cupidatat. "+
"Ut elit sed nulla, arbitror tamen fabulas. Est fore possumus "+
"incurreret, consequat non admodum id fabulas quorum et appellat distinguantur ea "+
"litteris a amet in est esse dolor multos aliquip non vidisse legam malis fabulas "+
"malis quo quid hic proident ea enim hic a de enim incididunt. Si anim "+
"consectetur, te nulla est tamen, fabulas dolor doctrina tempor ut id sint ad "+
"anim hic vidisse minim quem ita aute ab ita laboris praesentibus, qui non irure "+
"elit velit in aut dolor anim sed aliquip. Sint nostrud cupidatat, quae aliquip "+
"sed transferrem, est multos quamquam tractavissent aut consequat magna ipsum "+
"nescius amet. De legam nescius si in vidisse se mentitum do se consequat "+
"distinguantur e ex culpa eiusmod reprehenderit. Deserunt exquisitaque do officia "+
"ne ad noster eiusmod reprehenderit ita incurreret culpa laboris mentitum, te "+
"nisi quibusdam graviterque."+
"Varias sed expetendis in lorem, ea an quae cernantur, ita magna irure dolor ";
var textStart5=
"Velit incididunt litteris, dolore proident transferrem, doctrina eram offendit e "+
"iis nulla tempor, de cillum ex eram, cernantur fore aute ubi nisi, sint aliquip "+
"mentitum, culpa laborum incididunt. Nam ingeniis relinqueret. Tamen ut a anim "+
"doctrina exquisitaque de probant tamen irure vidisse labore, commodo anim quo "+
"cernantur efflorescere, doctrina de illum arbitror, et fabulas praetermissum te "+
"arbitror, singulis nisi cernantur quibusdam, senserit nisi deserunt laborum. Hic "+
"fugiat illustriora, in sint dolore irure laboris ad non dolore ita lorem et quid "+
"consequat, dolor de qui amet quamquam, se varias cillum de aliquip, se elit "+
"adipisicing qui summis deserunt singulis te amet litteris voluptatibus ubi ita "+
"quid expetendis, te si sint officia. Quorum in ex malis pariatur ut vidisse "+
"legam nostrud. Nisi quamquam laborum, in velit summis nulla expetendis te. "+
"Iis hic lorem singulis, ipsum consectetur pariatur quis arbitror, offendit "+
"veniam cernantur ubi nam varias expetendis sed nostrud adipisicing ut mentitum, "+
"nulla incididunt cupidatat ubi incurreret exercitation a appellat, voluptate "+
"quorum ubi ingeniis voluptatibus. Ad possumus a cupidatat. Mandaremus tamen amet "+
"vidisse quis, fugiat aliquip hic adipisicing o anim laborum expetendis, e eu "+
"adipisicing. Tamen in ea magna appellat. Summis ingeniis exquisitaque ea anim "+
"incurreret laborum ne proident culpa lorem voluptate labore, minim consequat "+
"illustriora ita minim laboris non voluptate do qui quae ita legam, excepteur "+
"sunt ne incurreret illustriora, ne excepteur aut arbitror. Singulis anim "+
"proident singulis ex se do irure duis ipsum, o noster iis sint, quid ullamco "+
"reprehenderit."+
"Admodum illum nam quamquam firmissimum se summis excepteur ab transferrem et ";
var textStart6=
"Quis litteris exquisitaque iis summis sempiternum arbitror illum voluptate, qui"+ 
"sunt quis an nescius qui quo quae familiaritatem. Est malis enim noster "+
"consequat ea probant labore nisi arbitror amet, eu quis proident eruditionem et "+
"an lorem quis aut incurreret. In labore malis multos quibusdam do quem eiusmod "+
"cupidatat, excepteur amet noster possumus tamen aut occaecat qui duis, o iis "+
"noster fabulas, hic velit ubi irure, ab voluptate in voluptate, qui in "+
"nostrud ex te qui coniunctione, minim id mentitum a veniam quo appellat iis "+
"incididunt. Si expetendis ubi pariatur in te sed duis quae nulla sed esse est "+
"occaecat sed fugiat, commodo philosophari do quibusdam. Ipsum incurreret e "+
"fidelissimae o magna cernantur ita reprehenderit te laborum labore incididunt "+
"ullamco, occaecat se fugiat, cillum incididunt et sint eram, e non lorem "+
"familiaritatem. Irure mandaremus est instituendarum. Offendit ubi eiusmod do "+
"Quae despicationes singulis minim mentitum sed in excepteur si consequat. "+
"Doctrina efflorescere non possumus, nam in velit deserunt, nam an graviterque eu "+
"quibusdam ipsum legam incurreret esse. Ad nulla aliquip, o non tractavissent, "+
"magna senserit e nisi nulla o senserit velit quorum a aute. Ita minim incurreret "+
"exquisitaque et aut summis coniunctione, ubi appellat ex offendit, id lorem ad "+
"legam. Nulla ea probant quo minim, fugiat si eu esse excepteur. De multos aute "+
"te ingeniis te ullamco quorum deserunt, et quis in labore, quo expetendis ne "+
"fabulas."+
"Incurreret labore elit sed elit aut laboris exquisitaque iis senserit ubi iis ";
var textStart7=
"Hic expetendis exercitation, sint senserit ne ipsum irure ea fugiat e nostrud ne "+
"amet de a quae aut amet aut non elit praetermissum, pariatur ab consequat, duis "+
"singulis comprehenderit, sed quae deserunt. Quem deserunt ne sint eram, enim. "+
"Quorum incididunt et excepteur, est dolore fore te laboris in esse illustriora "+
"cupidatat illum possumus in aliquip eu probant, fabulas sint amet et anim et "+
"pariatur ut sunt, singulis enim dolor a varias, proident graviterque in "+
"mandaremus. Ea duis consequat quamquam ne multos laboris ab amet aliqua. "+
"Expetendis malis vidisse. Id fore aut legam, lorem ex ex nisi arbitror. Pariatur "+
"praesentibus do mandaremus, irure quamquam doctrina, e labore ea quis, fore "+
"commodo ex arbitrantur. Quo culpa vidisse philosophari. Sed esse hic culpa ut a "+
"laborum an consequat."+
"Efflorescere, aute ingeniis id litteris o possumus dolore aut fabulas "+
"efflorescere qui de dolore multos de senserit, iudicem aliqua consequat "+
"mandaremus, admodum concursionibus o admodum. Expetendis legam amet ut quid. "+
"Laborum fugiat aliquip mentitum, arbitror comprehenderit si possumus. Veniam "+
"admodum instituendarum, voluptate sunt se voluptate comprehenderit ab quid "+
"voluptate ad iudicem an in fore quid duis commodo se proident a excepteur, legam "+
"consequat graviterque, est multos hic multos. Quis nescius ea eruditionem est "+
"labore et proident, et labore incurreret sempiternum, cillum voluptate ad "+
"fabulas. Minim fidelissimae nescius fore incurreret si arbitror enim nisi ea ";
var textStart8=
"Ea a summis quamquam ad ex deserunt te excepteur, ingeniis comprehenderit de "+
"pariatur se noster a officia te summis, aut magna quid ut consequat id cupidatat "+
"an excepteur, elit in quo nisi senserit ita elit incididunt te laborum. Lorem "+
"nescius fabulas, se velit incurreret adipisicing. Ex aliqua domesticarum, se "+
"multos veniam labore ingeniis. Offendit aute aliquip, illum ne ne sunt deserunt "+
"e occaecat ad sint offendit iis id nam quae varias varias se ab nostrud o "+
"an sed transferrem, voluptate et lorem occaecat, aliqua aliquip imitarentur in "+
"mentitum an sunt in doctrina firmissimum de litteris. Irure pariatur iis "+
"graviterque, nostrud ne enim probant, commodo tamen hic pariatur adipisicing, "+
"vidisse sint dolor aliquip nisi an ut summis comprehenderit a hic sint appellat "+
"cernantur, ne ne culpa tempor, elit an proident aut proident summis si excepteur "+
"Aut multos quamquam voluptate, qui minim esse dolor possumus id nisi eu fabulas "+
"se si litteris arbitrantur de id doctrina aut quibusdam ita minim non doctrina "+
"hic qui eu multos quae tamen an deserunt legam sunt est summis. Summis aliquip "+
"adipisicing eu quibusdam consectetur quo eiusmod. Duis eu ad duis consequat eu "+
"eu ut quae velit culpa. Ut fore doctrina, appellat cillum doctrina occaecat aut "+
"cillum philosophari tempor lorem cupidatat est voluptate enim incurreret. "+
"Nescius distinguantur ea mandaremus, summis consectetur aliquip aute consequat, "+
"quis iis de labore pariatur, fore offendit philosophari. Nostrud ita duis quo "+
"admodum nisi aliquip hic malis voluptate id graviterque ita a velit arbitror, "+
"incurreret a laborum, ut enim cillum lorem nescius nam ullamco do sunt appellat, "+
"a elit an irure. Si excepteur aut pariatur in nulla cernantur quo enim quem, "+
"sunt nescius in illum esse, est quid ex ipsum, deserunt enim magna e amet est te "+
"fugiat nam quid qui e dolor in malis, aut do sempiternum. Quamquam veniam "+
"consequat commodo"+
"despicationes. Nisi mentitum tractavissent. Tamen te possumus eu dolor ab aut ";
var textStart9=
"Hic veniam an minim te tempor qui duis doctrina, minim in quamquam iis tamen qui "+
"non quorum aute o eiusmod si ullamco ne aliqua commodo, et mentitum "+
"praesentibus, aliquip amet sint litteris eram, ullamco an irure. Se et lorem "+
"dolor tamen sed dolore quo vidisse, est nostrud cohaerescant, ad aute magna "+
"qui possumus te velit, ita iudicem ubi deserunt in laboris hic ipsum. Ab nulla "+
"cupidatat mentitum, legam doctrina do excepteur est multos probant offendit, hic "+
"anim distinguantur. Aut eu multos amet lorem. Nisi probant probant, quem excepteur. "+
"Summis est cupidatat ex legam eu ingeniis ex vidisse, te enim fugiat ex ingeniis "+
"illum cupidatat. Sint occaecat aliquip ne nulla quibusdam excepteur nam dolor "+
"excepteur offendit, iis a transferrem, quis ne mentitum quo lorem ut summis "+
"Offendit magna minim occaecat lorem, ad ipsum veniam ubi aliquip, enim probant "+
"nam reprehenderit e multos cupidatat ad fidelissimae. Non nostrud firmissimum eu "+
"culpa ab senserit. Possumus o expetendis se dolor occaecat ita cillum multos ex "+
"ullamco quis sint fabulas tamen, ubi iis varias enim culpa. Litteris relinqueret "+
"ne expetendis, hic non illustriora. E culpa domesticarum an lorem quamquam "+
"laborum. Proident dolore quibusdam, varias probant ab fugiat elit qui pariatur "+
"quis senserit, cernantur exquisitaque iis consequat. Duis eu senserit, et "+
"deserunt graviterque."+
"Incurreret ne tractavissent, commodo illum tamen quamquam magna ne admodum sed "+
"labore. E sunt admodum instituendarum ut consequat nisi si appellat transferrem ";
var textStart10=
"Possumus aut probant. Ut lorem consequat possumus a an multos eram si quamquam "+
"est se nescius qui vidisse, ad incididunt concursionibus. Enim eu cernantur, "+
"aliqua ingeniis de praesentibus, litteris veniam noster mandaremus dolore, "+
"probant veniam nulla cernantur minim. Nulla de eu velit ullamco. Excepteur "+
"ingeniis praetermissum ne quae se laborum ubi quem. Lorem an cupidatat te "+
"fugiat, ne consequat de excepteur, officia dolore quo appellat illustriora, si "+
"voluptate quo offendit. Non fore quamquam fidelissimae e an sunt consequat, "+
"deserunt elit varias litteris summis, culpa instituendarum expetendis enim "+
"concursionibus an mandaremus. Veniam tempor id dolore labore, aliquip culpa "+
"noster quo quae. Nam nulla noster ubi excepteur, ita officia o admodum e "+
"offendit multos laborum admodum, est ea coniunctione te o litteris qui "+
"Ex duis praetermissum, elit praesentibus possumus aliqua "+
"proident qui illum sed occaecat iis multos se noster an vidisse, te summis "+
"imitarentur, si ea elit cillum veniam, aut dolor aliquip fabulas qui proident "+
"quid quid aliquip dolor. Admodum ubi enim eiusmod e quis an singulis e fore qui "+
"te summis ea quae, ubi quis arbitror, est hic minim aliquip se mentitum nam "+
"aliqua laboris ita sed e tractavissent, nulla possumus ita instituendarum. Lorem "+
"tempor cohaerescant ad anim tempor aut pariatur. Nam dolor proident offendit sed "+
"non nulla aliquip adipisicing. Sed ab summis culpa lorem id si iis graviterque "+
"nam nescius anim aliqua mentitum aute id ab aliquip despicationes."
"Sunt ubi ipsum mentitum est transferrem eu fabulas arbitrantur ne occaecat. "+
"Cupidatat. De fugiat probant despicationes, esse comprehenderit voluptate sint "+
"ingeniis quorum aute voluptate quae ne qui fugiat qui culpa, summis officia et "+
"cupidatat, se eram esse quis commodo, non velit legam hic senserit ab amet ";
var textStart11=
"Si esse summis varias admodum ad fugiat ingeniis concursionibus, iudicem malis "+
"eu nostrud domesticarum, iudicem quem laborum possumus aut veniam vidisse "+
"reprehenderit qui tamen cohaerescant cernantur enim laboris ea si minim tamen "+
"quo ingeniis a fugiat proident voluptate. Commodo efflorescere hic cupidatat, "+
"sunt ubi ipsum mentitum est transferrem eu fabulas arbitrantur ne occaecat. "+
"Magna et ea quorum quamquam, laborum reprehenderit est incididunt, quibusdam ab "+
"elit mandaremus, varias sempiternum deserunt eram laboris. Offendit sunt "+
"cupidatat. De fugiat probant despicationes, esse comprehenderit voluptate sint "+
"ingeniis quorum aute voluptate quae ne qui fugiat qui culpa, summis officia et "+
"cohaerescant. Hic varias consequat adipisicing, nostrud eruditionem est "+
"singulis. A nam dolore commodo. Eiusmod ea proident, incididunt ita senserit, te "+
"Ut fugiat hic eram. O dolor vidisse incurreret do probant minim anim quamquam "+
"velit. A fabulas arbitrantur. Quae ea mentitum qui enim commodo graviterque eu "+
"aute admodum eruditionem de duis coniunctione pariatur multos pariatur. "+
"Cupidatat culpa incididunt, dolore laboris sed quis lorem quo nam an eram "+
"vidisse iis proident multos sint iis sunt. Veniam occaecat e consequat. E quis "+
"iis cillum. Si quis occaecat, officia eram fore non aute "+
"excepteur quo doctrina, in do sempiternum, mentitum tamen fore appellat esse ";
var textStart12=
"O incididunt de admodum, arbitror malis voluptate pariatur. Iudicem magna "+
"laboris ullamco. Mandaremus esse incurreret iis ab lorem tempor arbitrantur, ne "+
"anim ullamco instituendarum in expetendis ad summis aliquip. Mandaremus dolore "+
"eiusmod ab aute consequat se fidelissimae. Laboris varias appellat laborum te "+
"iudicem imitarentur ea ne illum concursionibus. Iudicem cillum irure quo dolore "+
"comprehenderit, ingeniis sint est singulis arbitrantur. Occaecat varias proident "+
"mentitum lorem quamquam, doctrina do dolore ut sunt nam ne dolore proident, ab "+
"veniam anim ea voluptate a id aliqua lorem iis arbitror nam o multos cillum ita "+
"singulis, iudicem minim admodum. Pariatur elit fabulas, cillum voluptatibus "+
"culpa litteris cernantur si in eu despicationes, et esse eram ex probant, magna "+
"a de quo quem singulis. Pariatur e culpa, sed aut imitarentur, do quis admodum "+
"Excepteur distinguantur an cernantur, an velit iudicem firmissimum id sed te "+
"ipsum pariatur a e sunt appellat. Senserit aute velit quo veniam a si aut esse "+
"eram multos. Si ingeniis eruditionem qui e sunt quae se appellat, enim excepteur "+
"arbitrantur hic dolore pariatur arbitrantur e ad dolore singulis mandaremus aut "+
"laborum minim veniam incurreret summis hic sint singulis graviterque hic eiusmod "+
"varias in mentitum instituendarum. Litteris iis nulla offendit id quid ad ex "+
"nulla pariatur. An nisi quae ipsum iudicem qui noster laborum incididunt, quorum "+
"aut aliquip est sint o elit non arbitror. Senserit quem anim ita ipsum. Ut "+
"dolore elit sint pariatur, aut se concursionibus "+
"admodum lorem ullamco, anim eiusmod vidisse ex in malis cernantur voluptate, hic ";


var toPlus="";
if (num==1)
	toPlus+=textStart1;
if (num==2)
	toPlus+=textStart2;
if (num==3)
	toPlus+=textStart3;
if (num==4)
	toPlus+=textStart4;
if (num==5)
	toPlus+=textStart5;
if (num==6)
	toPlus+=textStart6;
if (num==7)
	toPlus+=textStart7;
if (num==8)
	toPlus+=textStart8;
if (num==9)
	toPlus+=textStart9;
if (num==10)
	toPlus+=textStart10;
if (num==11)
	toPlus+=textStart11;
if (num==12)
	toPlus+=textStart12;


var textFinish=
"senserit. Nam multos litteris, non esse pariatur. Varias pariatur ubi "+
"consectetur. Irure nescius qui sunt quem, esse nostrud tempor a irure id "+
"litteris qui quid, tamen ne an eram possumus ad duis o doctrina si nam aute quis "+
"veniam singulis iis quamquam concursionibus ut excepteur nam malis e quamquam. "+
"Eram ullamco te fidelissimae. Cernantur si tamen, qui culpa praetermissum, "+
"excepteur ad laborum ea offendit o quid quamquam, o dolore minim a incurreret, "+
"arbitror ab lorem si officia non fore possumus. Velit mentitum pariatur ita ubi "+
"eu distinguantur si ubi dolor noster id tempor ne illum do voluptate, quae "+
"voluptatibus laborum nulla cernantur do ita cillum fore illum arbitror, an anim "+
"voluptate. Ita officia eruditionem o admodum illum legam sed multos. Illum "+
"litteris relinqueret est ea anim cupidatat voluptate, deserunt de commodo quo "+
"fore comprehenderit appellat duis quamquam qui quo cernantur ea voluptate, "+
"ita aliqua officia quo veniam officia non laboris. Vidisse iis legam, appellat a "+
"fabulas. Cillum incididunt illustriora sed lorem mentitum o illustriora. Velit "+
"cupidatat ita fabulas. Consequat praesentibus ut nostrud. Iis duis ad ipsum, ut "+
"nisi officia cupidatat iis tamen nam aliquip ne malis in eiusmod ad enim officia "+
"quo arbitror eruditionem nam vidisse, voluptate sint ubi nostrud cohaerescant, "+
"legam expetendis ubi quibusdam, iis admodum despicationes. Ipsum litteris ea "+
"concursionibus, dolore ab doctrina se quis. Singulis ne voluptate, dolor ad "+
"proident e sint iudicem comprehenderit a non nulla malis tamen incididunt. Ita "+
"hic arbitrantur, proident veniam incurreret vidisse, elit fabulas in. Offendit "+
"quo malis laborum est do sint se magna se eram imitarentur quamquam dolore "+
"laborum dolore sint litteris velit. Nam iis fore fugiat nisi sed possumus sunt "+
"sed doctrina relinqueret, summis iis appellat id sed cillum a noster. A legam "+
"lorem nostrud efflorescere, malis aliquip ea fidelissimae a te ad aute appellat "+
"de ut in illustriora e sed commodo ne offendit. Quo fore minim ab proident, "+
"cupidatat quid appellat probant, an e comprehenderit an fugiat ita iis eram "+
"incurreret. Se ea quorum dolore dolor. Ab tamen exquisitaque, eu si tamen anim "+
"incurreret, quem iudicem sed culpa fugiat, nulla incurreret de exquisitaque. Qui "+
"quis noster elit occaecat et eram nescius ad cohaerescant. Id malis admodum, "+
"senserit ut irure. Elit appellat et tractavissent ex amet quamquam ita "+
"familiaritatem aut qui amet expetendis praetermissum ubi labore ullamco "+
"despicationes non ut amet officia quibusdam ab laboris varias pariatur, eram "+
"consectetur quibusdam quis possumus, quorum relinqueret aliquip nulla fabulas. "+
"Lorem appellat ea officia, ita veniam appellat arbitrantur. Aute aut cupidatat "+
"ubi labore familiaritatem sed fabulas dolor incurreret, est anim dolore se "+
"incurreret, id quis laboris singulis, fabulas cillum incurreret commodo. "+
"Mentitum in aliqua quamquam. Cillum cupidatat e imitarentur hic commodo o "+
"senserit, summis ullamco a graviterque sed ipsum qui ita quorum incididunt. Eu "+
"admodum de commodo. Litteris te probant. Officia o offendit ita aliqua eiusmod "+
"do quid aute, ubi in minim minim anim te ne probant est quibusdam ex nulla "+
"commodo concursionibus, e legam iudicem tempor aut magna excepteur eiusmod ita "+
"eram aut incididunt ea illum. Quid a ingeniis est elit eu non in eruditionem de "+
"ipsum ita est quorum admodum se doctrina noster fugiat iudicem quorum, ita non "+
"quae quem anim nam admodum instituendarum si cernantur iis offendit de probant, "+
"ut sunt esse quis probant. Non velit possumus incurreret, ab esse fugiat lorem "+
"ingeniis, irure ut nostrud ad noster. Quem ingeniis si mentitum, hic sed multos "+
"magna fore aut et varias laborum ubi quamquam fore cillum litteris malis. Summis "+
"comprehenderit cupidatat labore cupidatat, an cillum singulis. Sunt mentitum aut "+
"firmissimum eu non dolore consequat praesentibus nam ut minim elit te laborum, "+
"velit te aut anim excepteur. Quo quae tempor mentitum, offendit do quem, aliquip "+
"malis cernantur do anim quibusdam ne sint velit. Commodo se aute, a a noster "+
"anim magna ita illum fabulas expetendis, probant arbitrantur se aliquip.";

toPlus+=textFinish;
	
return toPlus;
}
