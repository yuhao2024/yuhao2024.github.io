(function(){"use strict";var t={4669:function(t,e,x){var n=x(5098),r=function(){var t=this,e=t.$createElement,x=t._self._c||e;return x("div",{attrs:{id:"app"}},[x("IndexPage")],1)},o=[],i=function(){var t=this,e=t.$createElement,x=t._self._c||e;return x("div",{attrs:{id:"index"}},[x("HeaderBox"),x("div",{attrs:{id:"head-intro"}},[t._v(" 渣豪 "),x("span",{staticClass:"tagText"},[t._v("与你相遇："+t._s(t.formatTime))])]),x("HeadImg"),x("ContentBox"),x("FootBox")],1)},a=[],s=function(){var t=this,e=t.$createElement,x=t._self._c||e;return x("div",{attrs:{id:"foot-box"}},[x("hr"),x("div",{attrs:{id:"foot-text"}},[t._v(" Copyright © 2023 渣豪. 保留所有权利。 "),x("span",{attrs:{id:"tagText-foot"}},[t._v("热烈欢迎"),x("span",{staticStyle:{color:"red",margin:"0 5px"}},[t._v(t._s(t.visitCount))]),t._v("号大爷莅临本站")])])])},c=[],l={name:"FootBox",data(){return{visitCount:1}},mounted(){this.visitCount=this.getVisitCount(),this.saveVisitCount(this.visitCount+1)},methods:{getVisitCount(){const t=localStorage.getItem("visitCount");return t?parseInt(t,10):0},saveVisitCount(t){localStorage.setItem("visitCount",t)}}},f=l,u=x(7361),d=(0,u.Z)(f,s,c,!1,null,"f07dd79a",null),v=d.exports,m=function(){var t=this,e=t.$createElement,x=t._self._c||e;return x("div",[x("div",{attrs:{id:"head_text"}},[t._v(" "+t._s(t.poemsList[t.randomNumber].text)+" ")])])},p=[],h=JSON.parse('[{"text":"天地有万古，此身不再得；人生只百年，此日最易过。"},{"text":"居逆境中，周身皆针砭药石，砥节砺行而不觉；处顺境内，眼前尽兵刃戈矛，销膏靡骨而不知。"},{"text":"人情反复，世路崎岖。"},{"text":"遇沉沉不语之士，且莫输心；见悻悻自好之人，应须防口。"},{"text":"文章做到极处，无有他奇，只是恰好；人品做到极处，无有他异，只是本然。"},{"text":"心体光明，暗室中有青天；念头暗昧，白日下有厉鬼。"},{"text":"我有功于人不可念，而过则不可不念；人有恩于我不可忘，而怨则不可不忘。"},{"text":"淡薄之士，必为浓艳者所疑"},{"text":"不责人小过，不发人阴私，不念人旧恶"},{"text":"小处不渗漏，暗处不欺隐，末路不怠荒，才是真正英雄。"},{"text":"涉世无一段圆活的机趣，便是个木人，处处有碍。"},{"text":"处世不必邀功，无过便是功；与人不求感德，无怨便是德。"},{"text":"老来疾病都是壮时招得；衰时罪孽都是盛时作得。"},{"text":"忧勤是美德，太苦则无以适性怡情；淡泊是高风，太枯则无以济人利物。"},{"text":"盖世的功劳，当不得一个矜字；弥天的罪过，当不得一个悔字。"},{"text":"立身不高一步立，如尘里振衣、泥中濯足，如何超达？"},{"text":"为恶而畏人知，恶中犹有善路；为善而急人知，善处即是恶根。"},{"text":"盖世的功劳，当不得一个矜字；弥天的罪过，当不得一个悔字。"},{"text":"一苦一乐相磨练，练极而成福者，其福始久"},{"text":"若言言悦耳，事事快心，便把此生埋在鸩毒中矣。"},{"text":"事事要留个有余不尽的意思，便造物不能忌我，鬼神不能损我。"},{"text":"事穷势蹙之人，当原其初心；功成行满之士，要观其末路。"},{"text":"德者才之主，才者德之奴。"},{"text":"志以淡泊明，而节从肥甘丧矣。"},{"text":"恩仇不可太明，明则人起携贰之志。"},{"text":"恩里由来生害，故快意时须早回头；败后或反成功，故拂心处切莫放手。"},{"text":"处世让一步为高，退步即进步的张本"},{"text":"居轩冕之中，不可无山林的气味；处林泉之下，须要怀廊庙的经纶。"},{"text":"害人之心不可有，防人之心不可无，此戒疏于虑者。"},{"text":"事业文章随身销毁，而精神万古如新"},{"text":"醲肥辛甘非真味，真味只是淡"},{"text":"君子之心事，天青日白，不可使人不知"},{"text":"处世不退一步处，如飞蛾投烛、羝羊触藩，如何安乐？"},{"text":"情欲意识，尽属妄心消杀得，妄心尽而后真心现。"},{"text":"无善而致人誉，不如无恶而致人毁。"},{"text":"待小人不难于严，而难于不恶；待君子不难于恭，而难于有礼。"},{"text":"功名富贵逐世转移，而气节千载一时。"},{"text":"图未就之功，不如保已成之业"},{"text":"攻人之恶毋太严，要思其堪受；教人以善毋过高，当使其可从。"},{"text":"有才无德，如家无主而奴用事矣，几何不魍魉猖狂。"},{"text":"能者劳而俯怨，何如拙者逸而全真。"},{"text":"悔既往之失，亦要防将来之非。"},{"text":"神奇卓异非至人，至人只是常。"},{"text":"矜高倨傲，无非客气；降伏得客气下，而后正气伸"},{"text":"生长富贵丛中的，嗜欲如猛火、权势似烈焰。"},{"text":"作人无一点真恳的念头，便成个花子，事事皆虚"},{"text":"功过不宜少混，混则人怀惰隳之心"},{"text":"惊奇喜异者，终无远大之识；苦节独行者，要有恒久之操。"},{"text":"奢者富而不足，何如俭者贫而有余。"},{"text":"待人宽一分是福，利人实利己的根基。"},{"text":"自知者不怨人，知命者不怨天；怨人者穷，怨天者无志。"},{"text":"岁不寒无以知松柏，事不难无以知君子"},{"text":"道虽迩，不行不至；事虽小，不为不成。"},{"text":"无冥冥之志者，无昭昭之明；无惛惛之事者，无赫赫之功。"},{"text":"蓬生麻中，不扶而直；白沙在涅，与之俱黑。"},{"text":"君子耳不听淫声，目不视邪色，口不出恶言"},{"text":"天不为人之恶寒也辍冬，地不为人之恶辽远也辍广，君子不为小人之匈匈也辍行。"},{"text":"天地合而万物生，阴阳接而变化起，性伪合而天下治。"},{"text":"不知则问，不能则学，虽能必让，然后为德。"},{"text":"君子敬其在己者，而不慕其在天者，是以日进也"},{"text":"天行有常，不为尧存，不为桀亡。应之以治则吉，应之以乱则凶。"},{"text":"言而当，知也；默而当，亦知也。"},{"text":"君子耻不修，不耻见污"},{"text":"玉在山而草木润，渊生珠而崖不枯。"},{"text":"不闻不若闻之，闻之不若见之，见之不若知之，知之不若行之。"},{"text":"人之性恶，其善者伪也。"},{"text":"非我而当者，吾师也；是我而当者，吾友也；谄谀我者，吾贼也。"},{"text":"锲而舍之，朽木不折；锲而不舍，金石可镂。"},{"text":"天行有常，不为尧存，不为桀亡。"},{"text":"怒不过夺，喜不过予。"},{"text":"流丸止于瓯臾，流言止于知者"},{"text":"浅不足与测深，愚不足与谋智，坎井之蛙，不可与语东海之乐。"},{"text":"不诱于誉，不恐于诽，率道而行，端然正己"},{"text":"精于物者以物物，精于道者兼物物。"},{"text":"君子之学也，以美其身；小人之学也，以为禽犊。"},{"text":"多知而无亲，博学而无方，好多而无定者，君子不与。"},{"text":"不登高山，不知天之高也；不临深溪，不知地之厚也"},{"text":"君子赠人以言，庶人赠人以财。"},{"text":"青，取之于蓝而青于蓝；冰，水为之而寒于水。"},{"text":"人之生不能无群"},{"text":"与人善言，暖于布帛；伤人之言，深于矛戟。"},{"text":"目不能两视而明，耳不能两听而聪。"},{"text":"不知其子视其友，不知其君视其左右。"},{"text":"自知者不怨人，知命者不怨天"},{"text":"知莫大乎弃疑，行莫大乎无过，事莫大乎无悔"},{"text":"笃志而体，君子也"},{"text":"凡流言、流说、流事、流谋、流誉、流愬，不官而衡至者，君子慎之"},{"text":"凡斗者，必自以为是而以人为非也。"},{"text":"跬步而不休，跛鳖千里；累土而不辍，丘山崇成。"},{"text":"巧而好度，必节；勇而好同，必胜；知而好谦，必贤。"},{"text":"君子养心莫善于诚"},{"text":"声无小而不闻，行无隐而不形。"},{"text":"故非我而当者，吾师也；是我而当者，吾友也；谄谀我者，吾贼也。"},{"text":"凡百事之成也，必在敬之；其败也，必在慢之。"},{"text":"公生明，偏生暗"},{"text":"天地生君子，君子理天地。"},{"text":"饥而欲食，寒而欲暖，劳而欲息，好利而恶害，是人之所生而有也"},{"text":"君子务修其内而让之于外"},{"text":"赠人以言，重于金石珠玉；观人以言，美于黼黻、文章；听人以言，乐于钟鼓琴瑟。"},{"text":"闻之而不见，虽博必谬；见之而不知，虽识必妄；知之而不行，虽敦必困。"},{"text":"故天将降大任于是人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为"},{"text":"穷则独善其身，达则兼善天下。"},{"text":"人之忌，在好为人师。"},{"text":"无为其所不为，无欲其所不欲，如此而已矣。"},{"text":"行有不得者，皆反求诸己，其身正而天下归之。"},{"text":"君子不怨天，不尤人。"},{"text":"富贵不能淫，贫贱不能移，威武不能屈。"},{"text":"劳心者治人，劳力者治于人"},{"text":"贤者以其昭昭，使人昭昭；今以其昏昏，使人昭昭。"},{"text":"自暴者，不可与有言也；自弃者，不可与有为也。"},{"text":"穷不失义，达不离道。"},{"text":"尽信书，则不如无书。"},{"text":"古之人，得志，泽加于民；不得志，修身见于世。穷则独善其身，达则兼善天下。"},{"text":"人有不为也，而后可以有为。"},{"text":"爱人者人恒爱之，敬人者人恒敬之。"},{"text":"天时不如地利，地利不如人和。"},{"text":"恻隐之心，仁之端也；羞恶之心，义之端也；辞让之心，礼之端也；是非之心，智之端也。"},{"text":"仁者如射，射者正己而后发。发而不中，不怨胜己者，反求诸己而已矣。"},{"text":"人不可以无耻。无耻之耻，无耻矣。"},{"text":"权，然后知轻重；度，然后知长短。"},{"text":"出于其类，拔乎其萃"},{"text":"恭者不侮人，俭者不夺人。"},{"text":"人有不为也，而后可以有为。"},{"text":"其进锐者，其退速。"},{"text":"老吾老，以及人之老；幼吾幼，以及人之幼。"},{"text":"我善养吾浩然之气。"},{"text":"如欲平治天下，当今之世，舍我其谁也？"},{"text":"生于忧患而死于安乐"},{"text":"民为贵，社稷次之，君为轻。"},{"text":"得道者多助，失道者寡助。"},{"text":"登泰山而小天下。"},{"text":"夫人必自侮，然后人侮之；家必自毁，而后人毁之；国必自伐，而后人伐之。"},{"text":"有不虞之誉，有求全之毁。"},{"text":"道在迩而求诸远，事在易而求之难。"},{"text":"大人者，不失其赤子之心者也。"},{"text":"君子有终身之忧，无一朝之患也。"},{"text":"资之深，则取之左右逢其原"},{"text":"富贵不能淫，贫贱不能移，威武不能屈。"},{"text":"君子之泽，五世而斩。"},{"text":"以若所为，求若所欲，犹缘木而求鱼也。"},{"text":"听其言也，观其眸子，人焉廋哉？"},{"text":"不孝有三，无后为大。"},{"text":"以力服人者，非心服也，力不赡也；以德服人者，中心悦而诚服也"},{"text":"故声闻过情，君子耻之。"},{"text":"诚者，天之道也；思诚者，人之道也。至诚而不动者，未之有也；不诚，未有能动者也。"},{"text":"君之视臣如手足；则臣视君如腹心；君之视臣如犬马，则臣视君如国人；君之视臣如土芥，则臣视君如寇雠。"},{"text":"不耻不若人，何若人有？"},{"text":"苟得其养，无物不长；苟失其养，无物不消。"},{"text":"上有好者，下必有甚焉者矣。"},{"text":"居移气，养移体，大哉居乎！"},{"text":"毋意、毋必、毋固、毋我。"},{"text":"君子有九思：视思明，听思聪，色思温，貌思恭，言思忠，事思敬，疑思问，忿思难，见得思义。"},{"text":"成事不说，遂事不谏，既往不咎。"},{"text":"往者不可谏，来者犹可追。"},{"text":"君子和而不同，小人同而不和。"},{"text":"君子不器。"},{"text":"质胜文则野，文胜质则史。文质彬彬，然后君子。"},{"text":"巧笑倩兮，美目盼兮，素以为绚兮"},{"text":"君子求诸己，小人求诸人。"},{"text":"不患莫己知，求为可知也。"},{"text":"见贤思齐焉，见不贤而内自省也。"},{"text":"君子坦荡荡，小人长戚戚。"},{"text":"吾十有五而志于学，三十而立，四十而不惑，五十而知天命，六十而耳顺，七十而从心所欲，不逾矩。"},{"text":"益者三友，损者三友。友直、友谅、友多闻，益矣；友便辟、友善柔、友便佞，损矣。"},{"text":"未知生，焉知死？"},{"text":"鸟之将死，其鸣也哀；人之将死，其言也善。"},{"text":"知者乐水，仁者乐山。知者动，仁者静。知者乐，仁者寿。"},{"text":"君子欲讷于言而敏于行。"},{"text":"名不正，则言不顺；言不顺，则事不成"},{"text":"其身正，不令而行；其身不正，虽令不从。"},{"text":"学而不思则罔，思而不学则殆。"},{"text":"德不孤，必有邻。"},{"text":"我非生而知之者，好古，敏以求之者也。"},{"text":"可与言而不与之言，失人；不可与言而与之言，失言。知者不失人亦不失言。"},{"text":"君子怀德，小人怀土；君子怀刑，小人怀惠。"},{"text":"逝者如斯夫！不舍昼夜。"},{"text":"君子周而不比，小人比而不周。"},{"text":"父母在，不远游，游必有方。"},{"text":"父母之年，不可不知也。一则以喜，一则以惧。"},{"text":"朝闻道，夕死可矣。"},{"text":"言必信，行必果，硁硁然小人哉！"},{"text":"不在其位，不谋其政。"},{"text":"不愤不启，不悱不发，举一隅不以三隅反，则不复也。"},{"text":"己所不欲，勿施于人。"},{"text":"君子成人之美，不成人之恶；小人反是。"},{"text":"忠告而善道之，不可则止，毋自辱焉。"},{"text":"岁寒，然后知松柏之后凋也。"},{"text":"君子泰而不骄，小人骄而不泰。"},{"text":"不患人之不己知，患不知人也。"},{"text":"知之者不如好之者，好之者不如乐之者。"},{"text":"躬自厚而薄责于人，则远怨矣。"},{"text":"道不同，不相为谋。"},{"text":"君子食无求饱，居无求安，敏于事而慎于言，就有道而正焉。可谓好学也已。"},{"text":"君子耻其言而过其行。"},{"text":"吾日三省吾身：为人谋而不忠乎？与朋友交而不信乎？传不习乎？”"},{"text":"欲速则不达"},{"text":"生而知之者上也，学而知之者次也；困而学之又其次也。困而不学，民斯为下矣。"},{"text":"一箪食，一瓢饮，在陋巷，人不堪其忧，回也不改其乐。"},{"text":"朽木不可雕也，粪土之墙不可圬也，于予与何诛？"},{"text":"己欲立而立人，己欲达而达人。"},{"text":"志不强者智不达；言不信者行不果。"},{"text":"良马难乘，然可以任重致远；良才难令，然可以致君见尊。"},{"text":"君子不镜于水，而镜于人。镜于水，见面之容；镜于人，则知吉与凶。"},{"text":"甘井近竭，招木近伐"},{"text":"是故天地不昭昭，大水不潦潦，大火不燎燎，王德不尧尧者，乃千人之长也。"},{"text":"良弓难张，然可以及高入深；良马难乘，然可以任重致远；良才难令，然可以致君见尊。"},{"text":"事无终始，无务多业；举物而暗，无务博闻。"},{"text":"名不徒生，而誉不自长。功成名遂"},{"text":"钓者之恭，非为鱼赐也；饵鼠以虫，非爱之也。"},{"text":"士虽有学，而行为本焉。"},{"text":"民有三患，饥者不得食，寒者不得衣，劳者不得息"},{"text":"江河之水，非一水之源也；千镒之裘，非一狐之白也。"},{"text":"慧者心辩而不繁说，多力而不伐功，此以名誉扬天下。"},{"text":"言不信者行不果。"},{"text":"治于神者，众人不知其功；争于明者，众人知之。"},{"text":"亲戚不附，无务外交；事无终始，无务多业；举物而暗，无务博闻。"},{"text":"举物而暗，无务博闻。"},{"text":"心无备虑，不可以应卒"},{"text":"俭节则昌，淫佚则亡，此五者不可不节。"},{"text":"故君子力事日强，愿欲日逾，设壮日盛。"},{"text":"原浊者，流不清；行不信者，名必耗。"},{"text":"善无主于心者不留，行莫辩于身者不立；名不可简而成也，誉不可巧而立也，君子以身戴行者也。"},{"text":"贫家而学富家之衣食多用，则速亡必矣。"},{"text":"天下从事者，不可以无法仪。无法仪而其事能成者，无有。"},{"text":"利之中取大，害之中取小也。"},{"text":"以兼相爱、交相利之法易之。"},{"text":"口言之，身必行之。"},{"text":"子不能治子之身，恶能治国政？"},{"text":"爱人利人者，天必福之；恶人贼人者，天必祸之。"},{"text":"不义不富，不义不贵，不义不亲，不义不近。"},{"text":"兴天下之利，除天下之害"},{"text":"仓无备粟，不可以待凶饥"},{"text":"法不仁，不可以为法。"},{"text":"库无备兵，虽有义，不能征无义"},{"text":"万事莫贵于义。"},{"text":"爱人者必见爱也，而恶人者必见恶也。"},{"text":"勇，志之所以敢也。"},{"text":"上之为政，得下之情则治，不得下之情则乱。"},{"text":"今士之用身，不若商人之用一布之慎也。"},{"text":"世俗之君子，贫而谓之富则怒，无义而谓之有义则喜。"},{"text":"国无三年之食者，国非其国也"},{"text":"是故置本不安者，无务丰末"},{"text":"丧虽有礼，而哀为本焉"},{"text":"有力者疾以助人，有财者勉以分人，有道者劝以教人。"},{"text":"以卵投石也。尽天下之卵，其石犹是也，不可毁也"},{"text":"听其言，迹其行，察其所能而慎予官"},{"text":"利人乎即为，不利人乎即止。"},{"text":"为其所难者，必得其所欲焉；未闻为其所欲，而免其所恶者也。"},{"text":"贤者举而上之，富而贵之，以为官长，不肖者抑而废之"},{"text":"官无常贵而民无终贱。有能则举之，无能则下之。"},{"text":"上善若水，水善利万物而不争。"},{"text":"合抱之木，生于毫末；九层之台，起于累土；千里之行，始于足下。"},{"text":"大方无隅；大器免成；大音希声；大象无形"},{"text":"慎终如始，则无败事。"},{"text":"知人者智，自知者明。胜人者有力，自胜者强。"},{"text":"夫轻诺必寡信，多易必多难。"},{"text":"天地不仁，以万物为刍狗；圣人不仁，以百姓为刍狗。"},{"text":"不自见，故明；不自是，故彰；不自伐，故有功；不自矜，故长。"},{"text":"多言数穷，不如守中。"},{"text":"善者不辩，辩者不善。"},{"text":"天下难事，必作于易；天下大事，必作于细。"},{"text":"大直若屈，大巧若拙，大辩若讷。"},{"text":"将欲歙之，必固张之；将欲弱之，必固强之；将欲废之，必固兴之；将欲取之，必固与之。"},{"text":"人法地，地法天，天法道，道法自然。"},{"text":"五色令人目盲；五音令人耳聋；五味令人口爽；驰骋畋猎，令人心发狂；难得之货，令人行妨。"},{"text":"知者不言，言者不知。"},{"text":"道生一，一生二，二生三，三生万物。"},{"text":"方而不割，廉而不刿，直而不肆，光而不耀。"},{"text":"天下之至柔，驰骋天下之至坚。"},{"text":"信言不美，美言不信。善者不辩，辩者不善。知者不博，博者不知。"},{"text":"我有三宝，持而保之。一曰慈，二曰俭，三曰不敢为天下先。"},{"text":"圣人自知不自见；自爱不自贵。"},{"text":"天下皆知美之为美，斯恶已。皆知善之为善，斯不善已。"},{"text":"大丈夫处其厚，不居其薄；处其实，不居其华。"},{"text":"曲则全，枉则直，洼则盈，敝则新，少则得，多则惑。"},{"text":"见素抱朴，少私寡欲，绝学无忧。"},{"text":"为无为，事无事，味无味。"},{"text":"持而盈之，不如其已。揣而锐之，不可长保。"},{"text":"上士闻道，勤而行之；中士闻道，若存若亡；下士闻道，大笑之。"},{"text":"天之道，利而不害；圣人之道，为而不争。"},{"text":"甚爱必大费；多藏必厚亡。故知足不辱，知止不殆，可以长久。"},{"text":"天地尚不能久，而况於人乎？"},{"text":"知人者智，自知者明。胜人者有力，自胜者强。知足者富。强行者有志。"},{"text":"人之生也柔弱，其死也坚强。草木之生也柔脆，其死也枯槁。故坚强者死之徒，柔弱者生之徒。"},{"text":"致虚极；守静篤。万物并作，吾以观复。"},{"text":"知人者智，自知者明。胜人者有力，自胜者强。知足者富。强行者有志。不失其所者久。死而不亡者寿。"},{"text":"大器晚成；大音希声"},{"text":"善为士者，不武；善战者，不怒；善胜敌者，不与；善用人者，为之下。"},{"text":"天道无亲，常与善人。"},{"text":"众人皆有以，而我独顽似鄙。"},{"text":"图难于其易，为大于其细"},{"text":"知者不博，博者不知。"},{"text":"大成若缺，其用不弊。大盈若冲，其用不穷。"},{"text":"挫其锐，解其纷，和其光，同其尘。湛兮，似或存。"},{"text":"飘风不终朝，骤雨不终日。"},{"text":"上善若水。"},{"text":"千里之行，始于足下。"},{"text":"金玉满堂，莫之能守。富贵而骄，自遗其咎。"},{"text":"和大怨，必有余怨；报怨以德，安可以为善？"},{"text":"将欲歙之，必故张之；将欲弱之，必故强之；将欲废之，必故兴之；将欲取之，必故与之。是谓微明。"},{"text":"天下熙熙，皆为利来；天下攘攘，皆为利往。"},{"text":"桃李不言，下自成蹊"},{"text":"积羽沉舟，群轻折轴，众口铄金，积毁销骨"},{"text":"祸不妄至，福不徒来。"},{"text":"千羊之皮，不如一狐之腋；千人之诺诺，不如一士之谔谔。"},{"text":"得不为喜，去不为恨"},{"text":"当断不断，反受其乱"},{"text":"毛羽未成，不可以高蜚"},{"text":"人弃我取，人取我与。"},{"text":"反听之谓聪，内视之谓明，自胜之谓强。"},{"text":"智者千虑，必有一失；愚者千虑，必有一得。"},{"text":"相马失之瘦，相士失之贫。"},{"text":"能行之者未必能言，能言之者未必能行。"},{"text":"千金之裘，非一狐之腋也；台榭之榱，非一木之枝也；三代之际，非一士之智也"},{"text":"飞鸟尽，良弓藏；狡兔死，走狗烹。"},{"text":"酒极则乱，乐极则悲"},{"text":"论至德者不和于俗，成大功者不谋于众。"},{"text":"贵上极则反贱，贱下极则反贵。贵出如粪土，贱取如珠玉。"},{"text":"千羊之皮不如一狐之腋。"},{"text":"前虑不定，後有大患"},{"text":"燕雀安知鸿鹄之志哉！"},{"text":"用贫求富，农不如工，工不如商"},{"text":"浴不必江海，要之去垢；马不必骐骥，要之善走"},{"text":"运筹帷幄之中，制胜於无形"},{"text":"顾小而忘大，後必有害；狐疑犹豫，後必有悔。"},{"text":"王侯将相宁有种乎！"},{"text":"运筹策帷帐之中，决胜於千里之外"},{"text":"规小节者不能成荣名，恶小耻者不能立大功。"},{"text":"疑行无名，疑事无功。"},{"text":"家贫则思良妻，国乱则思良相"},{"text":"良贾深藏若虚，君子盛德容貌若愚。"},{"text":"好学深思，心知其意"},{"text":"力田不如逢年，善仕不如遇合"},{"text":"见人不正，虽贵不敬也；见人有污，虽尊不下也"},{"text":"人方为刀俎，我为鱼肉"},{"text":"富而不骄，贵而不舒。"},{"text":"聪以知远，明以察微。"},{"text":"贵出如粪土，贱取如珠玉。"},{"text":"彊弩之极，矢不能穿鲁缟；冲风之末，力不能漂鸿毛。"},{"text":"其言必信，其行必果，已诺必诚"},{"text":"以三寸之舌，彊於百万之师。"},{"text":"败军之将，不可以言勇"},{"text":"以权利合者，权利尽而交疏"},{"text":"功者难成而易败，时者难得而易失也。"},{"text":"仁者爱万物而智者备祸於未形，不仁不智，何以为国？"},{"text":"一沐三捉发，一饭三吐哺，起以待士，犹恐失天下之贤人。"},{"text":"同恶相助，同好相留，同情相成，同欲相趋，同利相死。"},{"text":"貌言华也，至言实也，苦言药也，甘言疾也。"},{"text":"贵上极则反贱，贱下极则反贵。"},{"text":"为人臣者不可以不知春秋，守经事而不知其宜，遭变事而不知其权。"},{"text":"博学之，审问之，慎思之，明辨之，笃行之。"},{"text":"好学近乎知。力行近乎仁。知耻近乎勇。"},{"text":"正己而不求于人则无怨。上不怨天，下不尤人。"},{"text":"君子之道，暗然而日章；小人之道，明然而日亡。"},{"text":"人一能之，己百之。人十能之，己千之。"},{"text":"天命之谓性；率性之谓道；修道之谓教。"},{"text":"万物并育而不相害。道并行而不相悖。小德川流；大德敦化。"},{"text":"有弗学，学之弗能，弗措也。有弗问，问之弗知，弗措也。有弗思，思之弗得，弗措也。有弗辨，辨之弗明，弗措也。"},{"text":"天地之道，博也、厚也、高也、明也、悠也、久也。"},{"text":"或生而知之；或学而知之；或困而知之：及其知之，一也。"},{"text":"愚而好自用，贱而好自专。"},{"text":"唯天下至诚，方能经纶天下之大经，立天下之大本，知天地之化育。"},{"text":"君子居易以俟命，小人行险以徼幸。"},{"text":"君子和而不流；强哉矫。中立而不倚；强哉矫。国有道，不变塞焉；强哉矫。国无道，至死不变；强哉矫。"},{"text":"诚者，天之道也。诚之者，人之道也。诚者，不勉而中不思而得：从容中道，圣人也。诚之者，择善而固执之者也"},{"text":"居上不骄，为下不倍。国有道，其言足以兴；国无道，其默足以容。"},{"text":"君子戒慎乎其所不睹，恐惧乎其所不闻。"},{"text":"国家将兴，必有祯祥；国家将亡，必有妖孽。"},{"text":"君子，不可以不修身。思修身，不可以不事亲。思事亲，不可以不知人。思知人，不可以不知天。"},{"text":"君子不动而敬，不言而信。"},{"text":"道不远人。人之为道而远人，不可以为道。"},{"text":"诚者自成也，而道自道也。"},{"text":"自诚明，谓之性；自明诚，谓之教。"},{"text":"博厚，所以载物也。高明，所以覆物也。悠久，所以成物也。"},{"text":"君子素其位而行，不愿乎其外。"},{"text":"庸德之行，庸言之谨；有所不足，不敢不勉；有余，不敢尽。"},{"text":"君子之道，暗然而日章；小人之道，的然而日亡。"},{"text":"诚者，不勉而中不思而得：从容中道，圣人也。"},{"text":"万物并育而不相害。道并行而不相悖。"},{"text":"君子尊德性，而道问学，致广大，而尽精微，极高明，而道中庸。温故，而知新，敦厚以崇礼。"},{"text":"君子动而世为天下道，行而世为天下法，言而世为天下则。"},{"text":"素富贵，行乎富贵；素贫贱，行乎贫贱"},{"text":"君子无入而不自得焉。"},{"text":"射有似乎君子。失诸正鹄，反求诸其身。"},{"text":"祸福将至，善必先知之；不善，必先知之。故至诚如神。"},{"text":"苟不至德，至道不凝焉。"},{"text":"可以赞天地之化育，则可以与天地参矣。"},{"text":"道也者，不可须臾离也；可离，非道也。是故君子戒慎乎其所不睹，恐惧乎其所不闻。"},{"text":"戒慎乎其所不睹，恐惧乎其所不闻。"},{"text":"仁者，人也，亲亲为大。义者，宜也，尊贤为大。"},{"text":"愚而好自用，贱而好自专。生乎今之世，反古之道。如此者灾及其身者也。"},{"text":"素富贵，行乎富贵；素贫贱，行乎贫贱；素夷狄，行乎夷狄；素患难，行乎患难。君子无入而不自得焉。"},{"text":"天之生物必因其材而笃焉。故栽者培之，倾者覆之。"},{"text":"诚之者，择善而固执之者也。"},{"text":"天地之道，可一言而尽也。其为物不贰，则其生物不测。"},{"text":"君子内省不疚，无恶于志。君子之所不可及者，其唯人之所不见乎。"},{"text":"其次致曲。曲能有诚。诚则形。形则著。著则明。明则动。动则变。变则化。唯天下至诚为能化。"},{"text":"为政在人。取人以身。修身以道。修道以仁。"},{"text":"好人之所恶，恶人之所好，是谓拂人之性，灾必逮夫身。"},{"text":"忠恕违道不远。施诸己而不愿，亦勿施于人。"},{"text":"玩人丧德，玩物丧志。"},{"text":"人心惟危，道心惟微，惟精惟一，允执厥中。"},{"text":"好问则裕，自用则小"},{"text":"不矜细行，终累大德。为山九仞，功亏一篑。"},{"text":"满招损，谦受益"},{"text":"宽而栗，柔而立，愿而恭，乱而敬，扰而毅，直而温，简而廉，刚而实，强而义。"},{"text":"若升高，必自下，若陟遐，必自迩。"},{"text":"与人不求备，检身若不及"},{"text":"惟德动天，无远弗届。满招损，谦受益，时乃天道。"},{"text":"非知之艰，行之惟艰。"},{"text":"民惟邦本，本固邦宁。"},{"text":"慎厥身，修思永。"},{"text":"心之忧危，若蹈虎尾，涉于春冰。"},{"text":"诗言志，歌永言，声依永，律和声。"},{"text":"罔游于逸，罔淫于乐。"},{"text":"静言庸违，像恭滔天。"},{"text":"不作无益害有益，功乃成；不贵异物贱用物，民乃足。"},{"text":"任贤勿贰，去邪勿疑。"},{"text":"思其艰以图其易"},{"text":"树德务滋，除恶务本"},{"text":"君子所，其无逸"},{"text":"抚我则后，虐我则仇。"},{"text":"木从绳则正，后从谏则圣。"},{"text":"惟德动天，无远弗届。"},{"text":"知之曰明哲，明哲实作则。"},{"text":"惟天地万物父母，惟人万物之灵。"},{"text":"建官惟贤，位事惟能。"},{"text":"诗言志，歌永言"},{"text":"牝鸡无晨；牝鸡之晨，惟家之索。"},{"text":"临下以简，御众以宽；罚弗及嗣，赏延于世。"},{"text":"蓄疑败谋，怠忽荒政，不学墙面，莅事惟烦。"},{"text":"允恭克让，光被四表，格于上下。"},{"text":"人之有能有为，使羞其行，而邦其昌。"},{"text":"好问则裕，自用则小。"},{"text":"稽于众，舍己从人，不虐无告，不废困穷，惟帝时克。"},{"text":"若农服田力穑，乃亦有秋。"},{"text":"满招损，谦受益，时乃天道。"},{"text":"必有忍，其乃有济；有容，德乃大。"},{"text":"功崇惟志，业广惟勤，惟克果断，乃罔后艰。"},{"text":"克勤于邦，克俭于家"},{"text":"尔身克正，罔敢弗正，民心罔中，惟尔之中。"},{"text":"与国咸休，永世无穷。"},{"text":"夙夜惟寅，直哉惟清。"},{"text":"民可近，不可下"},{"text":"不迩声色，不殖货利。"},{"text":"慎乃俭德，惟怀永图。"},{"text":"德懋懋官，功懋懋赏。"},{"text":"用人惟己，改过不吝。"},{"text":"终始惟一，时乃日新。"},{"text":"百姓昭明，协和万邦。"},{"text":"情由忆生，不忆故无情。"},{"text":"积善三年，知之者少，为恶一日，闻于天下。"},{"text":"高词迥映，如朗月之悬光；叠意回舒，若重岩之积秀。"},{"text":"杜渐防萌，慎之在始。"},{"text":"全一人者德之轻，拯天下者功之重"},{"text":"不忘故乡，仁也；不恋本土，达也。"},{"text":"穷猿投林，岂暇择木！"},{"text":"动人以行不以言，应天以实不以文，故我清静而人自正。"},{"text":"自损者有余，自益者弥昏。"},{"text":"时无英雄，使竖子成名！"},{"text":"学之染人，甚于丹青。"},{"text":"人有不及，可以情恕；非意相干，可以理遣"},{"text":"一轨九州，同风天下"},{"text":"飞龙御天，故资云雨之势；帝王兴运，必俟股肱之力。"},{"text":"喜怒不形于色。"},{"text":"兵者诡道，善因事变。"},{"text":"正其末者端其本，善其后者慎其先。"},{"text":"修身以敬，勿托以尊。"},{"text":"谈虚语玄，不觉日之将夕； 登涉山水，不知老之将至。"},{"text":"不自贵于物而物宗焉，不自重于人而人敬焉。"},{"text":"安上在于悦下，为己存乎利人。"},{"text":"从善如顺流，去恶如探汤。"},{"text":"貂不足，狗尾续。"},{"text":"掷地，当作金石声"},{"text":"饥则附人， 饱便高飏"},{"text":"桂林之一枝，昆山之片玉。"},{"text":"未知鹿死谁手"},{"text":"非得贤之难，用之难。非用之难，信之难。"},{"text":"令之有渐，轨之有度，宠之有节"},{"text":"闻风声鹤唳，皆以为王师已至"},{"text":"欲安时兴化，不先富而教之，其道无由。"},{"text":"非意相干，可以理遣"},{"text":"发言玄远，口不臧否人物。"},{"text":"勿以己才而笑不才。"},{"text":"庆父不死，鲁难未已。"},{"text":"图匮于丰，防俭于逸"},{"text":"并官省事，静事息役，上下用心，惟农是务也。"},{"text":"定国之术在于强兵足食"},{"text":"备预不虞，古之善教；安不忘危，圣人常诫。"},{"text":"本乘兴而行， 兴尽而反，何必见安道邪！"},{"text":"人心所归，惟道与义。"},{"text":"学者不患才不及，而患志不立"},{"text":"思危所以求安，虑退所以能进"},{"text":"安身莫尚乎存正，存正莫重乎无私，无私莫深乎寡欲。"},{"text":"吾枕戈待旦，志枭逆虏，常恐祖生先吾著鞭。"},{"text":"生于乱世，贵而能贫，乃可以免。"},{"text":"太刚则折，至察无徒"},{"text":"吾不能为五斗米折腰，拳拳事乡里小人邪！"},{"text":"义感君子，利动小人。"},{"text":"积一勺以成江河，累微尘以崇峻极"},{"text":"凡有血气，皆有争心"},{"text":"冬无愆阳，夏无伏阴，春无凄风，秋无苦雨"},{"text":"筚路蓝缕，以启山林。"},{"text":"欲加之罪，其无辞乎？"},{"text":"人谁无过？过而能改，善莫大焉。"},{"text":"思则有备，有备无患"},{"text":"非我族类，其心必异。"},{"text":"皮之不存，毛将安傅？"},{"text":"祸福无门，唯人所召。"},{"text":"『居安思危。』思则有备，有备无患"},{"text":"度德而处之，量力而行之"},{"text":"君子务知大者、远者，小人务知小者、近者。"},{"text":"修己而不责人，则免于难。"},{"text":"夫有尤物，足以移人"},{"text":"止戈为武。"},{"text":"骄奢淫逸，所自邪也。"},{"text":"天道远，人道迩，非所及也，何以知之？"},{"text":"一鼓作气，再而衰，三而竭。"},{"text":"夫宠而不骄，骄而能降，降而不憾，憾而能眕者鲜矣。"},{"text":"礼，经国家，定社稷，序民人，利后嗣"},{"text":"修己而不责人"},{"text":"清浊，小大，短长，疾徐，哀乐，刚柔，迟速，高下，出入，周疏，以相济也。"},{"text":"言以足志，文以足言。"},{"text":"信，国之宝也，民之所庇也"},{"text":"君子贵其身而后能及人，是以有礼。"},{"text":"唯器与名，不可以假人"},{"text":"举棋不定，不胜其耦。"},{"text":"见可而进，知难而退，军之善政也。兼弱攻昧，武之善经也。"},{"text":"礼以行义，义以生利，利以平民，政之大节也。"},{"text":"卜以决疑，不疑何卜。"},{"text":"不义不昵，厚将崩。"},{"text":"除腹心之疾，而置诸股肱，何益？"},{"text":"使能，国之利也。"},{"text":"不让则不和，不和不可以远征。"},{"text":"川泽纳污，山薮藏疾，瑾瑜匿瑕"},{"text":"量力而行之，相时而动"},{"text":"太上有立德，其次有立功，其次有立言，虽久不废，此之谓不朽。"},{"text":"居利思义，在约思纯"},{"text":"心苟无瑕，何恤乎无家。"},{"text":"我无尔诈，尔无我虞。"},{"text":"怀必贪，贪必谋人。"},{"text":"树德莫如滋，去疾莫如尽。"},{"text":"多行不义必自毙"},{"text":"辅车相依，唇亡齿寒"},{"text":"不以一眚掩大德。"},{"text":"怀与安，实败名。"},{"text":"末大必折，尾大不掉，君所知也。"},{"text":"一日纵敌，数世之患也。"},{"text":"数典而忘其祖。"},{"text":"我闻忠善以损怨，不闻作威以防怨。"},{"text":"知屋漏者在宇下，知政失者在草野"},{"text":"才有浅深，无有古今；文有伪真，无有故新。"},{"text":"学之乃知，不问不识。"},{"text":"人不博览者，不闻古今，不见事类，不知然否，犹目盲、耳聋、鼻痈者也。"},{"text":"不学自知，不问自晓，古今行事，未之有也。"},{"text":"曲妙人不能尽和，言是人不能皆信。"},{"text":"君子不畏虎，独畏谗夫之口。"},{"text":"衰世好信鬼，愚人好求福。"},{"text":"德不优者，不能怀远，才不大者，不能博见。"},{"text":"人有所优，固有所劣；人有所工，固有所拙。"},{"text":"处颠者危，势丰者亏"},{"text":"知古不知今，谓之陆沉，然则儒生，所谓陆沉者也。"},{"text":"牛刀可以割鸡，鸡刀难以屠牛。"},{"text":"文人之笔，劝善惩恶也。"},{"text":"河冰结合，非一日之寒；积土成山，非斯须之作。"},{"text":"屋漏在上，知者在下。"},{"text":"事莫明於有效，论莫定於有证。"},{"text":"美色不同面，皆佳於目；悲音不共声，皆快於耳。"},{"text":"两刃相割，利钝乃知；二论相订，是非乃见。"},{"text":"誉人不增其美，则闻者不快其意；毁人不益其恶，则听者不惬於心。"},{"text":"人间之水污浊，在野外者清洁，俱为一水，源从天涯，或浊或清，所在之势使之然也。"},{"text":"譬犹练丝，染之蓝则青，染之丹则赤。"},{"text":"为世用者，百篇无害；不为用者，一章无补。"},{"text":"闭心塞意，不高瞻览者，死人之徒也哉！"},{"text":"足不强则迹不远，锋不銛，则割不深。"},{"text":"精诚由中，故其文语感动人深。"},{"text":"太平之世多长寿人。"},{"text":"外内表里，自相副称。"},{"text":"德弥盛者文弥缛，德弥彰者人弥明。"},{"text":"物有华而不实，有实而不华者。"},{"text":"贤不贤，才也；遇不遇，时也。"},{"text":"比不应事，未可谓喻；文不称实，未可谓是也。"},{"text":"经传之文，贤圣之语，古今言殊，四方谈异也。"},{"text":"死人无知，厚葬无益"},{"text":"大器晚成，宝货难售也。"},{"text":"不目见口问，不能尽知也。"},{"text":"采善不逾其美，贬恶不溢其过。"},{"text":"不清不见尘，不高不见危，不广不见削，不盈不见亏。"},{"text":"马效千里，不必骥；人期贤知，不必孔、墨。"},{"text":"志有所存，顾不见泰山；思有所至，有身不暇徇也。"},{"text":"凿不休则沟深，斧不止则薪多"},{"text":"寒不累时，则霜不降，温不兼日，则冰不释。"},{"text":"物之相胜，或以筋力，或以气势，或以巧便。"},{"text":"处尊居显，未必贤，遇也；位卑在下，未必愚，不遇也。"},{"text":"豆麦之种，与稻梁殊，然食能去饥。"},{"text":"命有贵贱，性有善恶。"},{"text":"夫天者，体也，与地同。"},{"text":"处逸乐而欲不放，居贫苦而志不倦。"},{"text":"力作不求富，富自到矣。"},{"text":"雷电迅疾，击折树木，坏败室屋，时犯杀人。"},{"text":"仓廪实，则知礼节；衣食足，则知荣辱"},{"text":"一年之计，莫如树谷；十年之计，莫如树木；终身之计，莫如树人。"},{"text":"天道之数，至则反，盛则衰。"},{"text":"谋无主则困，事无备则废。"},{"text":"形不正者，德不来；中不精者，心不冶。正形饰德，万物毕得"},{"text":"天下不患无财，患无人以分之。"},{"text":"政之所兴，在顺民心。政之所废，在逆民心。"},{"text":"乌鸟之狡，虽善不亲。不重之结，虽固必解"},{"text":"必得之事，不足赖也；必诺之言，不足信也。"},{"text":"得众而不得其心，则与独行者同实。"},{"text":"诚信者，天下之结也。"},{"text":"今日不为，明日忘货。昔之日已往而不来矣。"},{"text":"利之所在，虽千仞之山无所不上，深源之下，无所不入焉。"},{"text":"喜无以赏，怒无以杀；喜以赏，怒以杀，怨乃起，令乃废，骤令不行，民心乃外。"},{"text":"观其交游，则其贤不肖可察也"},{"text":"野芜旷，则民乃菅，上无量，则民乃妄。"},{"text":"冬日之不滥，非爱冰也；夏日之不炀，非爱火也，为不适于身便于体也。"},{"text":"俭则金贱，金贱则事不成，故伤事。"},{"text":"水波而上，尽其摇而复下，其势固然者也。"},{"text":"霸王之所始也，以人为本。本理则国固，本乱则国危。"},{"text":"闻贤而不举，殆；闻善而不索，殆；见能而不使，殆"},{"text":"货尽而后知不足，是不知量也，事已，而后知货之有余，是不知节也"},{"text":"海不辞水，故能成其大；山不辞土石，故能成其高"},{"text":"独王之国，劳而多祸"},{"text":"治国常富，而乱国常贫。"},{"text":"兵不完利，与无操者同实"},{"text":"国大而政小者，国从其政；国小而政大者，国益大。"},{"text":"知者善谋，不如当时。"},{"text":"犹傶则疏之，毋使人图之，犹疏则数之，毋使人曲之"},{"text":"积于不涸之仓者，务五谷也"},{"text":"多言而不当，不如其寡也。"},{"text":"事者生于虑，成于务，失于傲。"},{"text":"圣人畏微，而愚人畏明"},{"text":"凡令之行也，必待近者之胜也，而令乃行。"},{"text":"骄倨傲暴之人，不可与交。"},{"text":"朝忘其事，夕失其功。"},{"text":"凡将举事，令必先出"},{"text":"不能兆其端者菑及之。"},{"text":"善气迎人，亲如弟兄；恶气迎人，害于戈兵。"},{"text":"堂上远于百里，堂下远于千里，门庭远于万里。"},{"text":"微邪者，大邪之所生也"},{"text":"人之生也，必以其欢。"},{"text":"务为不久，盖虚不长。"},{"text":"善人者人亦善之。"},{"text":"量力而知攻，攻得而知时。"},{"text":"以天下之心虑则无不知也。"},{"text":"霸王之所始也，以人为本。"},{"text":"金与粟争贵，乡与朝争治"},{"text":"凡治国之道，必先富民。"},{"text":"名进而身退，天之道也。"},{"text":"与善人居，如入兰芷之室，久而不闻其香，则与之化矣；与恶人居，如入鲍鱼之肆，久而不闻其臭，亦与之化矣。"},{"text":"得其所利，必虑其所害；乐其所成，必顾其所败。"},{"text":"君子之言寡而实，小人之言多而虚"},{"text":"力胜贫，谨胜祸，慎胜害，戒胜灾。"},{"text":"草木秋死，松柏独在"},{"text":"谋先事则昌，事先谋则亡。"},{"text":"麋鹿成群，虎豹避之；飞鸟成列，鹰鹫不击；众人成聚，圣人不犯。"},{"text":"金刚则折，革刚则裂"},{"text":"屋漏者民去之，水浅者鱼逃之，树高者鸟宿之，德厚者士趋之"},{"text":"干将为利，名闻天下，匠以治木，不如斤斧。"},{"text":"将治大者不治小，成大功者不小苛，此之谓也。"},{"text":"鲍鱼兰芷不同箧而藏"},{"text":"小快害义，小慧害道，小辨害治，苟心伤德，大政不险。"},{"text":"一节见则百节知矣。"},{"text":"士不以利移，不为患改"},{"text":"食必常饱，然后求美；衣必常暖，然后求丽； 居必常安，然后求乐。"},{"text":"刑戮之民，不从君之政，言疾之难行。"},{"text":"高议而不可及，不若卑论之有功也。"},{"text":"水浊则鱼困，令苛则民乱"},{"text":"食必常饱，然后求美；衣必常暖，然后求丽； 居必常安，然后求乐。"},{"text":"水激则悍，矢激则远"},{"text":"树曲木者恶得直景"},{"text":"思得贤佐，日中忘饭，可谓明君矣。"},{"text":"王国富民，霸国富士；仅存之国，富大夫；亡道之国，富仓府；是谓上溢而下漏。"},{"text":"夫君子爱口，孔雀爱羽，虎豹爱爪，此皆所以治身法也。"},{"text":"非其地而树之，不生也"},{"text":"随侯之珠，国宝也，然用之弹，曾不如泥丸"},{"text":"临官莫如平，临财莫如廉"},{"text":"为者常成，行者常至"},{"text":"鱼乘于水，鸟乘于风，草木乘于时。"},{"text":"治国之道，爱民而已。"},{"text":"和氏之璧乎？价重千金，然以之间纺，曾不如瓦砖"},{"text":"大事不得，小事不为者必贫"},{"text":"以财为草，以身为宝。"},{"text":"耳闻之不如目见之，目见之不如足践之"},{"text":"德无细，怨无小"},{"text":"先忧事者后乐，先傲事者后忧。"},{"text":"时不至，不可强生也；事不究，不可强求也。"},{"text":"骐骥虽疾，不遇 伯乐，不致千里"},{"text":"福生于隐约，而祸生于得意"},{"text":"将治大者不治小，成大功者不小苛"},{"text":"防事之未萌，避难于无形"},{"text":"天将与之，必先苦之"},{"text":"水倍源则川竭，人倍信则名不达"},{"text":"丹之所藏者赤，乌之所藏者黑。君子慎所藏。"},{"text":"众人之智，可以测天"},{"text":"辞不可不修而说不可不善。"},{"text":"江河长百谷者，以其卑下也；天道无亲，常与善人"},{"text":"求道者不以目而以心，取道者不以手而以耳。"},{"text":"问讯者知之本，念虑者知之道也。"},{"text":"生无一日之欢，死有万世之名。"},{"text":"理无常是，事无常非。"},{"text":"生生死死，非物非我，皆命也，智之所无奈何。"},{"text":"见出以知入，观往以知来"},{"text":"信命者，亡寿夭；信理者，亡是非；信心者，亡逆顺；信性者，亡安危。"},{"text":"独往独来，独出独入，孰能碍之？"},{"text":"天地无全功，圣人无全能，万物无全用。故天职生覆，地职形载，圣职教化，物职所宜。"},{"text":"行善不以为名，而名从之；名不与利期，而利归之；利不与争期，而争及之：故君子必慎为善。"},{"text":"察见渊鱼者不祥，智料隐匿者有殃。"},{"text":"生非贵之所能存，身非爱之所能厚；生亦非贱之所能夭，身亦非轻之所能薄。"},{"text":"贫者士之常也，死者人之终也，处常得终，当何忧哉？"},{"text":"天地无全功，圣人无全能，万物无全用。"},{"text":"不逆命，何羡寿？不矜贵，何羡名？不要势，何羡位？不贪富，何羡货？"},{"text":"死生惊惧不入乎其胸，是故忤物而不慑。"},{"text":"外游者，求备于物；内观者，取足于身。"},{"text":"夫浅知之所争者，末矣。"},{"text":"治大者不治细，成大功者不成小"},{"text":"睢睢而盱盱，而谁与居？大白若辱，盛德若不足。"},{"text":"利出者实及，怨往者害来。"},{"text":"枉直随形而不在影，屈申任物而不在我，此之谓持后而处先。"},{"text":"智之所贵，存我为贵；力之所贱，侵物为贱。然身非我有也，既生，不得不全之"},{"text":"迎天意，揣利害，不如其已。"},{"text":"圣人恃道化而不恃智巧。"},{"text":"圣人以智笼群愚，亦犹狙公之以智笼众狙也。名实不亏，使其喜怒哉。"},{"text":"公天下之身，公天下之物，其唯至人矣！"},{"text":"喜怒岂妄发哉？皆逆之所犯也。"},{"text":"醉者之坠于车也，虽疾不死。骨节与人同，而犯害与人异，其神全也。"},{"text":"吞舟之鱼，不游枝流；鸿鹄高飞，不集污池。"},{"text":"人不尊己，则危辱及之矣。"},{"text":"治国之难在于知贤而不在自贤。"},{"text":"形枉则影曲，形直则影正。"},{"text":"欲刚，必以柔守之；欲强，必以弱保之。"},{"text":"先日所用，今或弃之；今之所弃，后或用之。"},{"text":"天下理无常是，事无常非。"},{"text":"得时者昌，失时者亡。"},{"text":"言美则响美，言恶则响恶"},{"text":"色盛者骄，力盛者奋，未可以语道也。"},{"text":"至言去言，至为无为。"},{"text":"昼想夜梦，神形所遇。"},{"text":"余音绕梁欐，三日不绝"},{"text":"生者不能不生，化者不能不化，故常生常化。"},{"text":"汝心之固，固不可彻"},{"text":"良弓之子，必先为箕；良冶之子，必先为裘。"},{"text":"人爱我，我必爱之；人恶我，我必恶之。"},{"text":"轻则寡谋，骄则无礼。"},{"text":"得时无怠，时不再来，天予不取，反为之灾。"},{"text":"从善如登，从恶如崩。"},{"text":"华而不实，耻也。"},{"text":"声一无听，物一无文，味一无果，物一不讲。"},{"text":"动莫若敬，居莫若俭，德莫若让，事莫若咨。"},{"text":"君以为易，其难也将至矣。"},{"text":"防民之口，甚于防川。"},{"text":"时不可失，丧不可久"},{"text":"上医医国，其次疾人，固医官也。"},{"text":"盛而不骄，劳而不矜其功。"},{"text":"不厚其栋，不能任重。重莫如国，栋莫如德。"},{"text":"夫民劳则思，思则善心生；逸则淫，淫则忘善，忘善之恶心生。"},{"text":"败不可处，时不可失，忠不可弃，怀不可从，子必速行。"},{"text":"为川者决之使导，为民者宣之使言。"},{"text":"夫见乱而不惕，所残必多，其饰弥章。"},{"text":"夫谋必素见成事焉，而后履之"},{"text":"拱木不生危，松柏不生埤。"},{"text":"口之宣言也，善败于是乎兴"},{"text":"狐埋之而狐搰之，是以无成功。"},{"text":"有过必悛，有不善必惧"},{"text":"戚施不可使仰"},{"text":"过而能改者，民之上也。"},{"text":"祸不好，不能为祸。"},{"text":"一人善射，百夫决拾"},{"text":"从时者，犹救火、追亡人也，蹶而趋之，唯恐弗及。"},{"text":"恶有衅，虽贵罚也。"},{"text":"欲人之爱己也，必先爱人。欲人之从己也，必先从人。"},{"text":"伐木不自其本，必复生；塞水不自其源，必复流；灭祸不自其基，必复乱。"},{"text":"夫和实生物，同则不继。"},{"text":"婚姻，祸福之阶也。"},{"text":"量力而进，不能则退"},{"text":"唯善人能受尽言，齐其有乎？"},{"text":"教不善则政不治"},{"text":"信，民之所庇也，不可失。"},{"text":"民可近也，而不可上也。"},{"text":"言之大甘，其中必苦。"},{"text":"时不至，不可强生；事不究，不可强成。"},{"text":"无德于人，而求用于人，罪也。"},{"text":"夫美也者，上下、内外、小大、远近皆无害焉，故曰美。"},{"text":"无夺民时，则百姓富"},{"text":"人之有学也，犹木之有枝叶也。木有枝叶，犹庇荫人，而况君子之学乎？"},{"text":"国家将败，必用奸人"},{"text":"旱则资舟，水则资车，以待乏也。"},{"text":"兄弟谗阋，侮人百里。"},{"text":"防民之口，甚于防川。川壅而溃，伤人必多，民亦如之。"},{"text":"衣贵洁，不贵华。上循分，下称家。"},{"text":"见未真，勿轻言。知未的，勿轻传。"},{"text":"人不闲，勿事搅。人不安，勿话扰。"},{"text":"父母教，须敬听。父母责，须顺承。"},{"text":"冠必正，纽必结。袜与履，俱紧切。"},{"text":"才大者，望自大。人所服，非言大。"},{"text":"读书法，有三到。心眼口，信皆要。"},{"text":"凡是人，皆须爱。天同覆，地同载。"},{"text":"人有短，切莫揭。人有私，切莫说。"},{"text":"同是人，类不齐，流俗众，仁者希。"},{"text":"道人善，即是善。人知之，愈思勉。"},{"text":"年方少，勿饮酒。饮酒醉，最为丑。"},{"text":"勿自暴，勿自弃。圣与贤，可驯致。"},{"text":"无心非，名为错。有心非，名为恶。"},{"text":"己有能，勿自私。人所能，勿轻訾。"},{"text":"彼说长，此说短。不关己，莫闲管。"},{"text":"奸巧语，秽污词。市井气，切戒之。"},{"text":"称尊长，勿呼名。对尊长，勿见能。"},{"text":"冬则温，夏则凊。晨则省，昏则定。"},{"text":"话说多，不如少。惟其是，勿佞巧。"},{"text":"用人物，须明求。倘不问，即为偷。"},{"text":"见人善，即思齐。纵去远，以渐跻。"},{"text":"扬人恶，即是恶。疾之甚，祸且作。"},{"text":"心有疑，随札记。就人问，求确义。"},{"text":"财物轻，怨何生。言语忍，忿自泯。"},{"text":"不力行，但学文。长浮华，成何人。"},{"text":"见人恶，即内省。有则改，无加警。"},{"text":"凡出言，信为先。诈与妄，奚可焉？"},{"text":"父母呼，应勿缓。父母命，行勿懒。"},{"text":"对饮食，勿拣择。食适可，勿过则。"},{"text":"事非宜，勿轻诺。苟轻诺，进退错。"},{"text":"行高者，名自高。人所重，非貌高。"},{"text":"凡道字，重且舒。勿急疾，勿模糊。"},{"text":"置冠服，有定位。勿乱顿，致污秽。"},{"text":"出必告，反必面。居有常，业无变。"},{"text":"物虽小，勿私藏。苟私藏，亲心伤。"},{"text":"亲所好，力为具。亲所恶，谨为去。"},{"text":"借人物，及时还。后有急，借不难。"},{"text":"步从容，立端正。揖深圆，拜恭敬。"},{"text":"果仁者，人多畏，言不讳，色不媚。"},{"text":"能亲仁，无限好，德日进，过日少。"},{"text":"不亲仁，无限害，小人进，百事坏。"},{"text":"过能改，归于无。倘掩饰，增一辜。"},{"text":"晨必盥，兼漱口。便溺回，辄净手。"},{"text":"亲爱我，孝何难。亲憎我，孝方贤。"},{"text":"尊长前，声要低。低不闻，却非宜。"},{"text":"事诸父，如事父。事诸兄，如事兄。"},{"text":"身有伤，贻亲忧。德有伤，贻亲羞。"},{"text":"事虽小，勿擅为。苟擅为，子道亏。"},{"text":"或饮食，或坐走。长者先，幼者后。"},{"text":"士为知己者死，女为悦己者容。"},{"text":"日中则移，月满则亏。"},{"text":"同欲者相憎，同忧者相亲。"},{"text":"见兔而顾犬，未为晚也；亡羊而补牢，未为迟也。"},{"text":"不蔽人之善，不言人之恶"},{"text":"晚食以当肉，安步以当车"},{"text":"前事之不忘，后事之师。"},{"text":"将欲败之，必姑辅之；将欲取之，必姑与之。"},{"text":"弗知而言为不智，知而不言为不忠。"},{"text":"世有无妄之福，又有无妄之祸。"},{"text":"毛羽不丰满者不可以高飞"},{"text":"善作者，不必善成；善始者，不必善终。"},{"text":"事有所出，功有所止。"},{"text":"厚者不毁人以自益也，仁者不危人以要名。"},{"text":"谋泄者事无功，计不决者名不成。"},{"text":"有生之乐，无死之心"},{"text":"祸与福相贯，生与亡为邻，不偏于死，不偏于生，不足以载大名。"},{"text":"布衣之怒，亦免冠徒跣，以头抢地尔。"},{"text":"争名者于朝，争利者于市。"},{"text":"宁为鸡口，无为牛后。"},{"text":"积薄而为厚，聚少而为多"},{"text":"天子之怒，伏尸百万，流血千里。"},{"text":"其言一也，言者异，则人心变矣。"},{"text":"于安思危，危则虑安。"},{"text":"覆巢毁卵，而凤皇不翔；刳胎焚夭，而麒麟不至。"},{"text":"转祸而为福，因败而为功。"},{"text":"圣人不能为时，时至而弗失。"},{"text":"狡兔有三窟，仅得免其死耳。"},{"text":"物舍其所长，之其所短，尧亦有所不及矣"},{"text":"以地事秦，譬犹抱薪而救火也，薪不尽，则火不止。"},{"text":"虽有高世之名，无咫尺之功者不赏。"},{"text":"赏必加于有功，刑必断于有罪。"},{"text":"道不拾遗，民不妄取，兵革大强，诸侯畏惧。"},{"text":"智者不倍时而弃利，勇士不怯死而灭名，忠臣不先身而后君。"},{"text":"以财交者，财尽而交绝；以色交者，华落而爱渝。"},{"text":"臣无隐忠，君无蔽言，国之禄也。"},{"text":"子用私道者家必乱，臣用私义者国必危。"},{"text":"父母之爱子，则为之计深远。"},{"text":"得寸则王之寸，得尺亦王之尺也。"},{"text":"行百里者半于九十。"},{"text":"君臣无礼，而上下无别。"},{"text":"国必有诽誉，忠臣令诽在己，誉在上。"},{"text":"法令至行，公平无私"},{"text":"数战则民劳，久师则兵弊。"},{"text":"睹貌而相悦者，人之情也"},{"text":"委肉当饿虎之蹊，祸必不振矣！"},{"text":"市，朝则满，夕则虚，非朝爱市而夕憎之也，求存故往，亡故去。"},{"text":"夜行者能无为奸，不能禁狗使无吠己也。"},{"text":"圣人从事，必藉于权而务兴于时。"},{"text":"夫宵行者能无为奸，而不能令狗无吠己。"},{"text":"昭昭若日月之明，离离如星辰之行"},{"text":"操千曲而后晓声，观千剑而后识器。"},{"text":"登山则情满于山，观海则意溢于海"},{"text":"鉴悬日月，辞富山海。百龄影徂，千载心在。"},{"text":"义典则弘，文约为美。"},{"text":"意得则舒怀以命笔，理伏则投笔以卷怀"},{"text":"繁采寡情，味之必厌。"},{"text":"积学以储宝，酌理以富才"},{"text":"夸而有节，饰而不诬"},{"text":"形在江海之上，心存魏阙之下"},{"text":"逍遥以针劳，谈笑以药倦"},{"text":"春秋代序，阴阳惨舒，物色之动，心亦摇焉。"},{"text":"练于骨者，析辞必精；深乎风者，述情必显。"},{"text":"将赡才力，务在博见"},{"text":"句有可削，足见其疏；字不得减，乃知其密。"},{"text":"谈欢则字与笑并，论戚则声共泣偕"},{"text":"或理在方寸而求之域表，或义在咫尺而思隔山河。"},{"text":"情往似赠，兴来如答。"},{"text":"心生而言立，言立而文明，自然之道也"},{"text":"缀文者情动而辞发，观文者披文以入情"},{"text":"意少一字则义阙，句长一言则辞妨"},{"text":"人禀七情，应物斯感，感物吟志，莫非自然。"},{"text":"夫缀文者情动而辞发，观文者披文以入情，沿波讨源，虽幽必显。"},{"text":"善删者字去而意留，善敷者辞殊而义显。"},{"text":"心既托声于言，言亦寄形于字"},{"text":"妙极生知，睿哲惟宰。精理为文，秀气成采。"},{"text":"改章难于造篇，易字艰于代句，此已然之验也。"},{"text":"志足而言文，情信而辞巧，乃含章之玉牒，秉文之金科矣。"},{"text":"论如析薪，贵能破理。"},{"text":"善附者异旨如肝胆，拙会者同音如胡越。"},{"text":"论山水，则循声而得貌；言节侯，则披文而见时。"},{"text":"以少总多，情貌无遗矣。"},{"text":"辞之待骨，如体之树骸；情之含风，犹形之包气。"},{"text":"性灵熔匠，文章奥府。渊哉铄乎，群言之祖。"},{"text":"夫情动而言形，理发而文见，盖沿隐以至显，因内而符外者也。"},{"text":"文之英蕤，有秀有隐。隐也者，文外之重旨者也；秀也者，篇中之独拔者也。"},{"text":"理郁者苦贫，辞溺者伤乱"},{"text":"情者文之经，辞者理之纬；经正而后纬成，理定而后辞畅：此立文之本源也。"},{"text":"权衡损益，斟酌浓淡。芟繁剪秽，弛于负担。"},{"text":"声转于吻，玲玲如振玉；辞靡于耳，累累如贯珠矣。"},{"text":"篇之彪炳，章无疵也；章之明靡，句无玷也；句之清英，字不妄也。"},{"text":"搜句忌于颠倒，裁章贵于顺序"},{"text":"箴者，针也，所以攻疾防患，喻针石也。"},{"text":"惊才风逸，壮志烟高。"},{"text":"斟酌乎质文之间，而隐括乎雅俗之际，可与言通变矣。"},{"text":"三极彝训，训深稽古。致化归一，分教斯五。"},{"text":"吟咏之间，吐纳珠玉之声；眉睫之前，卷舒风云之色"},{"text":"善为文者，富于万篇，贫于一字"},{"text":"慷慨以任气，磊落以使才"},{"text":"生也有涯，无涯惟智。"},{"text":"人无千日好，花无百日红。"},{"text":"人有逆天之时，天无绝人之路。"},{"text":"观棋不语真君子，把酒多言是小人。"},{"text":"焚琴煮鹤从来有，惜玉怜香几个知！"},{"text":"不是一番寒彻骨，怎得梅花扑鼻香！"},{"text":"药医不死病，佛度有缘人。"},{"text":"人情若比初相识，到底终无怨恨心。"},{"text":"人逢喜事精神爽，月到中秋分外明。"},{"text":"事不三思终有悔"},{"text":"不如意事常八九，可与人言无二三。"},{"text":"笔落惊风雨，书成泣鬼神。"},{"text":"衣冠未必皆男子，巾帼如何定妇人？"},{"text":"踏破铁鞋无觅处，得来全不费工夫。"},{"text":"任你官清似水，难逃吏滑如油。"},{"text":"世上万般哀苦事，无非死别与生离。"},{"text":"得闭口时须闭口，得放手时须放手。"},{"text":"不恋故乡生处好，受恩深处便为家。"},{"text":"宁为太平犬，莫作乱离人！"},{"text":"命里无时，求之不来。"},{"text":"眼孔浅时无大量，心田偏处有奸谋。"},{"text":"忙忙如丧家之狗，急急如漏网之鱼。"},{"text":"机不密，祸先行。"},{"text":"人不可貌相，海水不可斗量。"},{"text":"种田不熟不如荒，养儿不肖不如无。"},{"text":"货无大小，缺者便贵。"},{"text":"舌为利害本，口是祸福门。"},{"text":"只因一着错，满盘俱是空。"},{"text":"运退黄金失色，时来铁也生光。"},{"text":"分明久旱逢甘雨，赛过他乡遇故知。"},{"text":"富贵本无根，尽从勤里得。"},{"text":"理直千人必往，心亏寸步难移。"},{"text":"救人须救急，施人须当厄。"},{"text":"钱财如粪土，仁义值千金。"},{"text":"闭门家里坐，祸从天上来。"},{"text":"目前贫富非为准，久后穷通未可知。"},{"text":"刻薄不赚钱，忠厚不折本。"},{"text":"风水人间不可无，也须阴骘两相扶。"},{"text":"但存夫子三分礼，不犯萧何六尺条。"},{"text":"言可省时休便说，步宜留处莫胡行。"},{"text":"辛勤好似蚕成茧，茧老成丝蚕命休。"},{"text":"佛在心头坐，酒肉穿肠过。"},{"text":"一事真，百事真。"},{"text":"人面相似，人心不同"},{"text":"三百六十病，唯有相思苦。"},{"text":"江山易改，禀性难移。"},{"text":"神仙本是凡人做，只为凡人不肯修。"},{"text":"世无百岁人，枉作千年调。"},{"text":"富家一席酒，穷汉半年粮。"},{"text":"乱点鸳鸯谱"},{"text":"不将辛苦意，难近世间财。"}]'),_=Math.floor(990*Math.random()),w={name:"HeaderBox",data(){return{randomNumber:_,poemsList:h}}},g=w,C=(0,u.Z)(g,m,p,!1,null,"7661fd95",null),b=C.exports,T=function(){var t=this,e=t.$createElement,x=t._self._c||e;return x("div",{attrs:{id:"content-box"}},[x("ContentRow1"),x("ContentRow2"),x("ContentRow3")],1)},y=[],$=function(){var t=this,e=t.$createElement,x=t._self._c||e;return x("div",{attrs:{id:"content-row1"}},[x("div",{directives:[{name:"scroll-effect",rawName:"v-scroll-effect"}],staticClass:"scroll-effect",attrs:{id:"row-box1"}},[t._v("tech")]),x("div",{directives:[{name:"scroll-effect",rawName:"v-scroll-effect"}],staticClass:"scroll-effect",attrs:{id:"row-box2"}},[t._v("blog")]),x("div",{directives:[{name:"scroll-effect",rawName:"v-scroll-effect"}],staticClass:"scroll-effect",attrs:{id:"row-box3"}},[t._v("github")])])},E=[],B={name:"ContentBox"},O=B,Z=(0,u.Z)(O,$,E,!1,null,"b98b8b76",null),I=Z.exports,N=function(){var t=this,e=t.$createElement,x=t._self._c||e;return x("div",{attrs:{id:"content-row2"}},[x("div",{directives:[{name:"scroll-effect",rawName:"v-scroll-effect"}],staticClass:"scroll-effect",attrs:{id:"row-box1"}},[t._v("other")]),x("div",{directives:[{name:"scroll-effect",rawName:"v-scroll-effect"}],staticClass:"scroll-effect",attrs:{id:"row-box2"}},[t._v("other")])])},S=[],M={name:"ContentBox"},j=M,H=(0,u.Z)(j,N,S,!1,null,"12df667f",null),R=H.exports,k=function(){var t=this,e=t.$createElement,x=t._self._c||e;return x("div",{attrs:{id:"content-row3"}},[x("div",{directives:[{name:"scroll-effect",rawName:"v-scroll-effect"}],staticClass:"scroll-effect",attrs:{id:"row-box1"}},[t._v("introduce")]),x("div",{directives:[{name:"scroll-effect",rawName:"v-scroll-effect"}],staticClass:"scroll-effect",attrs:{id:"row-box2"}},[t._v("three.js")])])},P=[],F={name:"ContentBox"},V=F,L=(0,u.Z)(V,k,P,!1,null,"8f04a07e",null),D=L.exports,A={name:"ContentBox",components:{ContentRow1:I,ContentRow2:R,ContentRow3:D}},J=A,q=(0,u.Z)(J,T,y,!1,null,"31b4bfac",null),z=q.exports,G=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"head-img"}},[n("img",{attrs:{src:x(9132),alt:""}})])}],Q={name:"HeadImg"},U=Q,W=(0,u.Z)(U,G,K,!1,null,"d7f0e956",null),X=W.exports,Y={name:"IndexPage",components:{HeaderBox:b,HeadImg:X,ContentBox:z,FootBox:v},data(){return{startTime:0,currentTime:0}},computed:{formatTime(){const t=String(Math.floor(this.currentTime/3600)).padStart(2,"0"),e=String(Math.floor(this.currentTime%3600/60)).padStart(2,"0"),x=String(Math.floor(this.currentTime%60)).padStart(2,"0");return`${t}:${e}:${x}`}},mounted(){this.startTime=Math.floor(Date.now()/1e3),setInterval((()=>{const t=Math.floor(Date.now()/1e3);this.currentTime=t-this.startTime}),1e3)}},tt=Y,et=(0,u.Z)(tt,i,a,!1,null,"dded6a26",null),xt=et.exports,nt={name:"App",components:{IndexPage:xt}},rt=nt,ot=(0,u.Z)(rt,r,o,!1,null,null,null),it=ot.exports;n.Z.directive("scroll-effect",{inserted(t){let e=!1;function x(){const x=document.documentElement.scrollTop,n=t.offsetTop;n<=x+.7*window.innerHeight?e||(t.style.opacity=1,e=!0):e&&(t.style.opacity=0,e=!1)}window.addEventListener("scroll",x)}}),n.Z.config.productionTip=!1,new n.Z({render:t=>t(it)}).$mount("#app")},9132:function(t,e,x){t.exports=x.p+"img/img.71fd6b3f.png"}},e={};function x(n){var r=e[n];if(void 0!==r)return r.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,x),o.exports}x.m=t,function(){var t=[];x.O=function(e,n,r,o){if(!n){var i=1/0;for(l=0;l<t.length;l++){n=t[l][0],r=t[l][1],o=t[l][2];for(var a=!0,s=0;s<n.length;s++)(!1&o||i>=o)&&Object.keys(x.O).every((function(t){return x.O[t](n[s])}))?n.splice(s--,1):(a=!1,o<i&&(i=o));if(a){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[n,r,o]}}(),function(){x.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return x.d(e,{a:e}),e}}(),function(){x.d=function(t,e){for(var n in e)x.o(e,n)&&!x.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){x.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){x.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){x.p="/"}(),function(){var t={143:0};x.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,o,i=n[0],a=n[1],s=n[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in a)x.o(a,r)&&(x.m[r]=a[r]);if(s)var l=s(x)}for(e&&e(n);c<i.length;c++)o=i[c],x.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return x.O(l)},n=self["webpackChunkmy_page"]=self["webpackChunkmy_page"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=x.O(void 0,[998],(function(){return x(4669)}));n=x.O(n)})();
//# sourceMappingURL=app.6e8f1d94.js.map