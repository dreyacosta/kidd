var nock = require('nock');

nock('https://api.twitter.com:443')
  .get('/1.1/followers/ids.json')
  .query({"screen_name":"dreyacosta","cursor":"-1"})
  .reply(200, {"ids":[2946543660,3410106669,3114271948,3065695222,47746223,823214438,20391684,218481873,2891819333,80670854,3047706935,16130401,369333375,36980122,119749537,128955624,3195144415,28111142,2536121,14879896,23899270,133729814,3352954235,100339979,194164042,1028786712,82351998,2508144055,13897422,1498443764,2549655602,2913367203,2254753104,14542419,61429806,17496447,11938802,42596992,19262480,1477727130,3111769285,33680310,3152495554,55635779,1688026008,62632858,1459875000,275607020,21779975,2222976331,81199112,93318302,215419386,3098372402,84353859,405990601,1328006120,248690813,90755846,202114576,62055896,167372507,16739650,1956490195,1953663908,147870129,271833059,2178248406,3086506097,1962124207,433071345,1367604236,2926212139,31717449,2942710552,68433280,2917222738,120659167,154693034,1356828774,40210640,420339607,225248595,34924643,477963210,16141613,14068224,302668450,38474747,32993400,3020200265,89648624,109401781,2745823821,16725706,313442075,139797964,76645099,2963417633,1632963564,2527650241,477171381,2990156794,106468765,170829251,1602020455,2986343064,108947871,277512697,249237171,42983961,8182772,2972468567,152031735,2959791484,181000941,372042061,736983,1591222100,176731822,68934373,13685802,2232441,7920792,2877396697,66829942,124129046,33936280,968884388,564641736,723988717,2917467780,2916932498,33174237,241052395,100347157,808688623,283160186,21037257,101198215,1259434495,70793105,1127025558,43095088,2841826029,7641642,904223640,2864341006,2802725385,2791028808,112244797,204367663,908004260,1536311898,2818076130,2338446091,494956508,15295945,1446707504,2772535059,495733052,2848154246,57721392,2817080944,58396128,233888488,745912975,16403727,148121716,18212825,114576701,51214156,18202540,1055929392,248341405,2816724625,1039551,79322840,87018571,1650687218,50671792,248341059,5627432,157106904,370036779,2839513550,59502665,56339545,53088204,2809360600,246781643,2724442801,137756415,97027439,180804970,40527765,261329859,634683817,2237076564,6531692,2750795765,318200714,428520560,31831436,383748997,144693150,2491551828,91286740,8702412,2205948402,17225293,383795035,1092075865,48751543,1928332124,2413436575,90013359,16405243,427090883,182307406,70667300,76281998,221276204,86295849,1524470250,369413768,11339122,987558692,14657851,847584582,2258107626,45847538,424327960,151044789,200227919,70325233,2807412369,2801839090,37960356,2230293162,304289810,16556630,292729465,2530110063,331543539,866666282,91004412,420237115,2773601667,516882627,2825273341,158599726,144538540,2758830327,546249562,44272267,134253965,151660747,115944126,227517276,2241503844,14829567,57017110,49427249,775246189,360196805,188803948,2732535495,2796880751,2793654597,1192083714,2718516031,18318616,284068385,2792463198,92990518,1184348328,138636959,377557626,961652083,205249142,2269191953,185060402,302027364,15579925,2599954057,485281494,2292047900,1128229201,17833977,2446609626,186393142,98838160,211237037,373099045,2905461,74408921,2803526856,223865397,2505185390,2359567190,242723680,624995911,141028652,399526433,2491540399,2546660179,2805697158,2558174394,2808820728,95702853,16620222,145742783,2787074385,2773725985,14828224,635619936,729665173,2833555512,319998596,263901087,2182266553,2413308332,68759115,1100091649,2813759713,65266576,2718259556,2828173148,486310896,1716951661,2818606603,2748746675,247895721,8806132,270185875,34529134,179109567,2828672430,142893552,424512147,241616779,2832411457,302307564,66618127,816045968,144031923,66814125,87852697,2416215097,2596722369,96392207,2807791914,1626735997,414014292,848744180,1268333773,66562195,2788558928,2770395216,303712966,378403130,134887901,41730339,160012121,1161987032,126492504,59876977,440910058,2156829282,273666162,2355182072,1374352928,179454918,277019098,103634254,87234116,572325246,322150197,71933500,51561347,2784662516,1458741618,382852961,94725795,1123128440,323183621,564839943,253667819,486250228,128795793,517112274,425802936,119979534,2710664456,144154100,592784853,195060578,708395478,118795609,15844186,2743445246,354328143,243746368,2759816392,2369349421,79272910,2759821674,1328980267,378189897,624125097,137655595,70925293,1535201899,86278329,271771646,2567586141,15667690,179761781,135581470,2753146161,45153049,2598467502,1276437355,286518584,429385128,166138615,238271033,49785127,302075645,525932086,325059286,42927925,2435100517,206334065,2827176883,57311803,1390705944,21377989,60705809,118780210,2743119184,29770656,2771618662,807687787,2350515571,2471102148,87028317,25777538,8091222,41114864,130163569,46525468,27039207,2822397902,50282100,246302550,78623743,1858606123,2610662040,89831573,965790080,147557731,472243824,59785402,62672760,125549575,319453348,17490927,292677969,50478294,127932096,56713525,72179559,370359050,116290310,2789105863,2802258084,439570482,272634544,141804158,266905271,318954591,256129572,116552155,15816062,72631426,1436220277,2753898303,974579689,1060102093,39899832,51448706,205249291,229027154,925664887,90637410,332400756,9157922,552457192,407285643,306242176,87531599,560545790,178345899,2561864012,53394666,2602019677,198929892,2802345282,326682003,1536768636,124983499,547999155,2748604736,408776331,44538507,278234554,170583635,259290644,35657342,51874446,473994782,109290462,19587247,344235152,366716026,2591722885,282264723,235083589,575986039,108372505,29084934,318991634,20041786,296517966,624533227,544158231,98815612,16171658,94431817,2756921878,91891994,19649557,238410551,2529253030,231618301,107503284,489942486,2798166972,95832872,335626329,153336672,182851634,191417818,15941600,895494835,300556310,466764636,403131823,233416644,164082929,119919159,911052919,14118184,320399796,2750862803,298274794,288327078,386067444,1140992306,139761407,246629682,103531861,150069918,16425684,241065147,385047543,100392936,970145736,131751624,2755472033,2546040229,25643744,105843676,781212,223816781,2746765726,161834076,92025289,15349142,164478334,2590103744,85915516,1971949380,454380359,15666038,239542142,334608970,20810992,381157338,73170637,2588448640,102592230,1342570904,2484943461,2460774822,223274926,364216604,200227779,32170584,58468515,22231957,1053611167,956928990,364327427,3438901,64058620,130867889,2198750485,372444885,87691173,275557398,1400820576,278969672,167831772,59190499,553894915,441945493,44928393,118139362,309467142,280240237,20719571,6228222,196312399,210774386,114475002,599865946,20398808,2383409616,101027744,47982904,2162124683,201137423,6041462,9516452,95475071,56721731,300577451,263050677,313488687,19867745,136981980,275876793,7595582,22243934,126330660,249860566,268494030,1442278628,75145470,287432729,292006091,2731990697,110196348,2806499083,312894277,148061991,385710507,53167184,57744247,119943202,1432239416,1345605571,2654437468,2710009142,2760376625,1876027261,600058031,867287839,56838130,130295666,118869835,564769824,776709,14302901,14990814,2542640070,43166606,2606029286,2318382542,2789823068,2573207366,49040332,4018391,2539827386,1420762669,47373878,13024132,19446085,18355617,1964599771,64285624,354952785,844890894,2752841025,2496742856,647343,14892841,120279104,257529295,133794237,284189894,997940280,83965585,590757604,318343310,18575995,122577925,1543880395,19196015,16617546,22608657,291918056,2233257367,148051932,13732222,266296204,2163265875,202558383,13088482,60982926,403294463,775201243,631238863,1148029304,468626609,89607230,218079903,60598700,39032826,31682785,17461766,739975464,1457262482,18267995,63758455,6872082,21493014,402453209,18351798,16959864,2710536931,604872107,1943921886,49286763,2244875216,1114170990,9504382,5538762,3604801,21095019,2724793830,141061711,143548466,413947043,2689763406,58398546,353701149,358159054,18486555,25499914,14742151,277280697,145005670,556638375,183793361,202999865,2254897051,2476213664,2451743773,2661817568,303138069,45429619,2700900681,1692025514,105126983,245640062,2521887517,2711954528,360518609,871395517,17983446,1596003872,44132133,76667667,215469857,457745613,14605361,1734266394,155726755,17493392,36265318,882879194,73841962,364676489,11267422,135891897,753686862,815026,602838604,18141506,2599569282,130403062,546341619,74965247,86272125,60626678,103487191,2635189541,2718698381,260907949,26483441,226534922,975046818,19550820,1380026712,2468017652,2234121247,49944367,34017741,2664112879,2648333923,12705612,730728662,34870501,569023129,1193640554,2367277656,15658248,686913,155991599,207033967,84291900,594805064,85114816,212319091,67441652,65293879,720866257,239472286,15148392,2412993636,2354243882,9562732,65993054,557386975,541484217,71505234,304655715,44577334,1470811724,7286872,927977264,2359975454,15913704,23434249,28669089,2535504200,183548030,141477305,2704483228,43188880,2578505486,1145760361,302460481,1931109078,929834414,536391819,182075288,763599679,762198554,20434222,898700456,111525370,14148308,2486516629,263881174,266204595,3649181,100048752,15348684,2275180112,15144620,480315344,253966767,607591211,2196025858,619399985,14073654,55762182,2613645804,78769850,783704,1000544864,895850550,117270558,28593627,72739225,260043126,12088732,1240882286,123974622,147255980,108424913,260135215,380525224,17843271,378228481,2786971,833884704,14477533,47079858,147993698,1077637334,240001892,1609031,20453335,18904557,19340317,10782132,36412717,29841272,180848789,2306124475,5263221,86631489,258069853,15017935,15961323,17066860,2443438866,5832612,197407935,211727479,277946062,14070208,41797529,25274060,2334100832,1423926972,55101340,593699129,205757678,1376654629,58415180,2212239011,15375483,193521451,31388661,30900223,393297795,75746378,299226033,281207014,18512763,9043142,1026124117,258385679,1620049350,63385323,38536381,258180430,117945003,36637154,118507382,72741308,626767667,9121482,332142203,385710347,1868177372,3204511,9284152,343442966,260774014,1708021038,19282238,14842778,1883931595,1435627759,332926316,369680578,198826269,48307229,282802892,557983941,1328310998,421452697,1421098278,50573531,282996712,330904171,1012226635,22615440,169690296,14293457,166064436,1622497016,16130258,1547398016,16464993,867371,627652760,38632868,6440602,301674894,76596827,59641057,189982304,129374157,44098380,6294472,237298527,227138955,243812034,15533032,596256581,223849405,979881,60888381,916640190,941173045,423563078,1573135920,34573807,103806292,1041380468,17508750,9851872,54430401,239834929,314230328,623673339,17609423,233864119,127821062,320190379,98137160,1009937184,930074232,191506517,15643888,515646677,241022911,234930032,16185494,42400267,72704226,1101694530,1124778180,461023805,14175912,304075458,83030421,273292005,90665448,951503989,943211022,41491022,93817378,66637805,358758963,859597800,15562748,405863971,190177369,711127255,815725021,18632681,526726378,10590152,541171059,229128649,103546850,375430001,551985103,477121085,51544472,130278522,111890115,414615237,318947037,127787490,184471212,42003270,184212733,327584987,95766090,409179343,13934042,98445314,15452231,176854131,120021981,105158410,395253206,233301139,14447352,110792386,96279191,179105376,366832221,109525250,54875996,40387027,169009504,7204872,71796311,25991020,85962611,15116165,73125145,241085456,14321528,16100883,14094197,271116975,17959429,11154832,110391078,280992613,76150626,280492255,288711258,224893197,242645203,113875272,16113995,259235817,84623395,235547196,18939115,59896202,189672308,164989342,164859947,68653118,173560430,181530470,50318897,112923277],"next_cursor":0,"next_cursor_str":"0","previous_cursor":0,"previous_cursor_str":"0"}, { 'cache-control': 'no-cache, no-store, must-revalidate, pre-check=0, post-check=0',
  connection: 'close',
  'content-disposition': 'attachment; filename=json.json',
  'content-length': '11450',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 16 Aug 2015 22:07:37 GMT',
  expires: 'Tue, 31 Mar 1981 05:00:00 GMT',
  'last-modified': 'Sun, 16 Aug 2015 22:07:37 GMT',
  pragma: 'no-cache',
  server: 'tsa_f',
  'set-cookie': 
   [ 'lang=en; Path=/',
     'guest_id=v1%3A143976285727887074; Domain=.twitter.com; Path=/; Expires=Tue, 15-Aug-2017 22:07:37 UTC' ],
  status: '200 OK',
  'strict-transport-security': 'max-age=631138519',
  'x-access-level': 'read-write',
  'x-connection-hash': 'cb39c02c1574fa100d26fea64f12da98',
  'x-content-type-options': 'nosniff',
  'x-frame-options': 'SAMEORIGIN',
  'x-rate-limit-limit': '15',
  'x-rate-limit-remaining': '13',
  'x-rate-limit-reset': '1439763753',
  'x-response-time': '210',
  'x-transaction': '8a960d24badc1f22',
  'x-twitter-response-tags': 'BouncerCompliant',
  'x-xss-protection': '1; mode=block' });


nock('https://api.twitter.com:443')
  .get('/1.1/friends/ids.json')
  .query({"screen_name":"dreyacosta","cursor":"-1"})
  .reply(200, {"ids":[3417192179,11339902,59815228,17055506,297518061,218481873,80670854,2251036376,262301866,5504992,725183,93734534,231831897,45515619,16130401,3021131637,1734851372,397988578,82611511,1027047974,14541776,594133716,3113992161,19352690,1400946476,9587042,682243,3019079528,36053147,1013755076,918614311,110588107,119140538,16672945,299058343,47746223,870518544,17287251,3131295561,121505360,24946457,434834126,2542067612,36207905,82135336,7641642,76701961,220766771,2807179597,18949241,36637154,1112775630,125399724,379322040,330926073,87322884,181357935,29270179,97482220,11938802,300757910,3946571,54186570,17270001,16522523,3286561,216630877,1258081,25103,20719205,18139160,13860742,1369545768,2532283758,21080436,1477727130,23254994,12153672,15738236,17210045,14554494,9329522,14979481,62632858,55635779,14678973,1547624833,512499307,21779975,49367845,18433784,6108292,38387473,5707622,33838007,2596623860,2222976331,238221051,2817514244,24914741,26576418,112796335,9881092,16484216,167372507,34039936,92915570,1305940272,14148308,19066261,16665197,217505532,384534865,361296282,125027291,15540222,15295945,1819511,17444309,14375110,8146272,14542419,74113211,58396128,16891384,49040332,33104659,67016603,767819,101198215,207033967,128955624,101025176,16686076,260135215,5944742,2006261,14356603,170686450,2201991409,46104948,36465878,9505092,15643888,63163,123974622,42039590,1290931,332926316,15030908,8038312,123323498,18080585,16130258,301674894,15759583,8414132,9980812,12078532,793830,11855482,6798592,14399709,63079717,423563078,9463382,147255980,806757,56992811,17633960,15629200,24765829,14261086,35432643,12806822,1671811,65845659,22199970,35761106,91333167,318947037,14666934,139909522,98445314,95664135,19491279,14942627,20100663,151921329,73339662,17230018],"next_cursor":0,"next_cursor_str":"0","previous_cursor":0,"previous_cursor_str":"0"}, { 'cache-control': 'no-cache, no-store, must-revalidate, pre-check=0, post-check=0',
  connection: 'close',
  'content-disposition': 'attachment; filename=json.json',
  'content-length': '1861',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 16 Aug 2015 22:07:37 GMT',
  expires: 'Tue, 31 Mar 1981 05:00:00 GMT',
  'last-modified': 'Sun, 16 Aug 2015 22:07:37 GMT',
  pragma: 'no-cache',
  server: 'tsa_f',
  'set-cookie': 
   [ 'lang=en; Path=/',
     'guest_id=v1%3A143976285777993311; Domain=.twitter.com; Path=/; Expires=Tue, 15-Aug-2017 22:07:37 UTC' ],
  status: '200 OK',
  'strict-transport-security': 'max-age=631138519',
  'x-access-level': 'read-write',
  'x-connection-hash': 'd5946b0514804de3a9fce5f4d4b2c333',
  'x-content-type-options': 'nosniff',
  'x-frame-options': 'SAMEORIGIN',
  'x-rate-limit-limit': '15',
  'x-rate-limit-remaining': '13',
  'x-rate-limit-reset': '1439763754',
  'x-response-time': '133',
  'x-transaction': '71e436dc60e6a63d',
  'x-twitter-response-tags': 'BouncerCompliant',
  'x-xss-protection': '1; mode=block' });
