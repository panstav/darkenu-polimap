// TODO: Grunt-Minify

(function($){

	var regions = [
		{ "region": {"x": 1717, "y": 1442}, "link": "http://uti.org.il/", "orgname": "UTI"},
		{ "region": {"x": 1768, "y": 1614}, "link": "https://www.facebook.com/groups/104843316297576/", "orgname": "תגידו את האמת!"},
		{ "region": {"x": 1990, "y": 2032}, "link": "http://www.kvish40.co.il/", "orgname": "כביש 40"},
		{ "region": {"x": 1918, "y": 1898}, "link": "http://www.haokets.org/", "orgname": "העוקץ"},
		{ "region": {"x": 2046, "y": 1746}, "link": "http://www.icast.co.il/default.aspx?p=Podcast&id=340979", "orgname": "רדיו קול העם"},
		{ "region": {"x": 2111, "y": 1895}, "link": "http://www.megafon-news.co.il/", "orgname": "מגאפון"},
		{ "region": {"x": 2207, "y": 1697}, "link": "http://civilpress.tv/", "orgname": "עיתונאות אזרחית"},
		{ "region": {"x": 2211, "y": 1543}, "link": "http://tv.social.org.il/", "orgname": "הטלביזיה החברתית"},
		{ "region": {"x": 2168, "y": 1392}, "link": "http://www.facebook.com/J14INFO?fref=ts", "orgname": "רוטשילד מרכז מידע"},
		{ "region": {"x": 2013, "y": 1239}, "link": "http://j14.org.il/", "orgname": "j14"},
		{ "region": {"x": 1788, "y": 1261}, "link": "http://www.facebook.com/j14live", "orgname": "צדק חברתי - חדר המצב"},
		{ "region": {"x": 1564, "y": 1163}, "link": "http://www.facebook.com/IsraelIndependentPress?fref=ts", "orgname": "Israel Independent Press"},
		{ "region": {"x": 1432, "y": 1415}, "link": "http://www.facebook.com/groups/Israelforum/?ref=ts&fref=ts", "orgname": "ישראל יקרה לנו"},
		{ "region": {"x": 1591, "y": 1369}, "link": "http://www.facebook.com/Babushka.IL?sk=wall", "orgname": "בבושקה"},
		{ "region": {"x": 1626, "y": 1565}, "link": "http://www.facebook.com/ILvote2013", "orgname": "בחירות 2013 - הפעם כולם מצביעים"},
		{ "region": {"x": 1843, "y": 1752}, "link": "http://www.facebook.com/pages/%D7%94%D7%9B%D7%A1%D7%90-%D7%94%D7%9E%D7%AA%D7%A0%D7%93%D7%A0%D7%93/116612265102476", "orgname": "הכסא המתנדנד"},
		{ "region": {"x": 1761, "y": 1884}, "link": "https://www.facebook.com/the25hour", "orgname": "השעה ה-25"},
		{ "region": {"x": 1787, "y": 2037}, "link": "http://anonymous.org.il/", "orgname": "אנונימוס"},
		{ "region": {"x": 1598, "y": 1992}, "link": "http://www.facebook.com/pages/%D7%A9%D7%99%D7%A9%D7%99%D7%9D-%D7%95%D7%90%D7%97%D7%AA/555898814436639", "orgname": "61"},
		{ "region": {"x": 1443, "y": 2043}, "link": "http://www.facebook.com/BlueCollarGroup?fref=ts", "orgname": "Blue Collar"},
		{ "region": {"x": 1132, "y": 2091}, "link": "http://hamishmar.org.il/", "orgname": "המשמר"},
		{ "region": {"x": 1277, "y": 2029}, "link": "http://www.politiwatch.co.il/", "orgname": "מתפקדים"},
		{ "region": {"x": 1338, "y": 1874}, "link": "http://mitpakdim.co.il/", "orgname": "מתפקדים"},
		{ "region": {"x": 1338, "y": 1658}, "link": "", "orgname": ""},
		{ "region": {"x": 1183, "y": 1489}, "link": "http://oknesset.org/", "orgname": "כנסת פתוחה"},
		{ "region": {"x": 985, "y": 2042}, "link": "http://www.sandtalks.co.il/", "orgname": "כחול - דיבורים כמו חול"},
		{ "region": {"x": 479, "y": 1673}, "link": "http://www.achoti.org.il/", "orgname": "אחותי"},
		{ "region": {"x": 357, "y": 1766}, "link": "http://www.equalhealth.org.il/", "orgname": "המטה הציבורי לשווין בבריאות"},
		{ "region": {"x": 342, "y": 2090}, "link": "http://www.phr.org.il/", "orgname": "עמותת רופאים לזכויות"},
		{ "region": {"x": 422, "y": 1957}, "link": "http://atidenu.co.il/", "orgname": "עתידנו"},
		{ "region": {"x": 507, "y": 2090}, "link": "http://www.yedid.org.il/", "orgname": "ידיד"},
		{ "region": {"x": 587, "y": 1957}, "link": "http://www.green.org.il/", "orgname": "מגמה ירוקה"},
		{ "region": {"x": 671, "y": 2090}, "link": "http://workers.org.il/", "orgname": "כוח לעובדים"},
		{ "region": {"x": 748, "y": 1950}, "link": "http://www.drorisrael.org.il/", "orgname": "דרור ישראל"},
		{ "region": {"x": 836, "y": 2090}, "link": "http://www.sea.org.il/", "orgname": "המכללה החברתית כלכלית"},
		{ "region": {"x": 908, "y": 1898}, "link": "http://www.acri.org.il/he/", "orgname": "האגודה לזכויות האזרח"},
		{ "region": {"x": 868, "y": 1750}, "link": "http://www.ha-keshet.org.il/", "orgname": "הקשת הדמוקרטית המזרחית"},
		{ "region": {"x": 934, "y": 1600}, "link": "http://www.mqg.org.il/", "orgname": "התנועה לאיכות השלטון"},
		{ "region": {"x": 861, "y": 1282}, "link": "http://www.shatil.org.il/", "orgname": "שתיל"},
		{ "region": {"x": 426, "y": 758}, "link": "http://diortzibury.wordpress.com/", "orgname": "מאבק הדיור הציבורי"},
		{ "region": {"x": 342, "y": 879}, "link": "http://www.facebook.com/pages/%D7%A8%D7%A9%D7%AA-%D7%91%D7%99%D7%98%D7%97%D7%95%D7%9F-%D7%97%D7%91%D7%A8%D7%AA%D7%99/270544346393843?fref=ts", "orgname": "רשת בטחון חברתי"},
		{ "region": {"x": 481, "y": 914}, "link": "http://www.facebook.com/groups/290075724414129/?fref=ts", "orgname": ""},
		{ "region": {"x": 381, "y": 1019}, "link": "http://www.facebook.com/groups/294300657253420/", "orgname": ""},
		{ "region": {"x": 540, "y": 1375}, "link": "http://www.facebook.com/pages/%D7%90-%D7%96%D7%94-%D7%90%D7%A1%D7%93%D7%94-%D7%9E%D7%A2%D7%91%D7%99%D7%A8%D7%99%D7%9D-%D7%90%D7%AA-%D7%9E%D7%A4%D7%A2%D7%9C%D7%99-%D7%94%D7%92%D7%96-%D7%9C%D7%99%D7%9D/113520718752945", "orgname": ""},
		{ "region": {"x": 516, "y": 1526}, "link": "http://www.facebook.com/pages/%D7%9E%D7%A6%D7%99%D7%9C%D7%99%D7%9D-%D7%90%D7%AA-%D7%97%D7%95%D7%A3-%D7%A0%D7%97%D7%A9%D7%95%D7%9C%D7%99%D7%9D/189324674471923", "orgname": ""},
		{ "region": {"x": 342, "y": 1615}, "link": "http://www.facebook.com/groups/127475187347484/?fref=ts", "orgname": "צדק חברתי לגיל השלישי"},
		{ "region": {"x": 342, "y": 1464}, "link": "http://www.facebook.com/israelseaforum", "orgname": "העם דורש צדק סביבתי! המאבק על החופים"},
		{ "region": {"x": 342, "y": 1314}, "link": "http://www.tarabut.info/he/home/", "orgname": "תרבות"},
		{ "region": {"x": 342, "y": 1163}, "link": "http://www.facebook.com/groups/gorem/?fref=ts", "orgname": "הגורם האנושי"},
		{ "region": {"x": 621, "y": 1118}, "link": "http://www.facebook.com/pages/%D7%97-%D7%96%D7%94-%D7%97%D7%99%D7%A0%D7%95%D7%9A/128204713939186", "orgname": "ח' זה חינוך"},
		{ "region": {"x": 689, "y": 1251}, "link": "http://www.morim-derech.org.il/", "orgname": "תנועת המורים"},
		{ "region": {"x": 978, "y": 1439}, "link": "http://www.uru.org.il/", "orgname": "עורו"},
		{ "region": {"x": 1066, "y": 1276}, "link": "http://www.gerila.co.il/he/?iid=929&p=1", "orgname": "גרילה"},
		{ "region": {"x": 1016, "y": 1133}, "link": "http://www.facebook.com/groups/yazmut/?fref=ts", "orgname": "קהילת יזמות חברתית"},
		{ "region": {"x": 1156, "y": 1055}, "link": "http://www.hasdera.org.il/fights/%D7%94%D7%A7%D7%95%D7%90%D7%9C%D7%99%D7%A6%D7%99%D7%94_%D7%94%D7%90%D7%A8%D7%A6%D7%99%D7%AA_%D7%9C%D7%94%D7%A2%D7%A1%D7%A7%D7%94_%D7%99%D7%A9%D7%99%D7%A8%D7%94-3.htm", "orgname": "השדרה - קואלציה ארצית להעסקה ישירה"},
		{ "region": {"x": 985, "y": 937}, "link": "http://www.facebook.com/groups/232526163462343/?fref=ts", "orgname": "אסיפת העם - אשדוד"},
		{ "region": {"x": 922, "y": 785}, "link": "http://www.facebook.com/groups/252295654822076", "orgname": "פורום גוש הפריפריה"},
		{ "region": {"x": 846, "y": 650}, "link": "http://j14.org.il/spivak/", "orgname": "ספיבק"},
		{ "region": {"x": 558, "y": 636}, "link": "http://www.facebook.com/groups/331420325709/?fref=ts", "orgname": "עוסי''ם שינוי"},
		{ "region": {"x": 342, "y": 639}, "link": "http://www.facebook.com/arnondanieli", "orgname": "ר' זה רווחה"},
		{ "region": {"x": 652, "y": 489}, "link": "https://www.facebook.com/groups/rikuziut/", "orgname": "היוזמה לפירוק הריכוזיות"},
		{ "region": {"x": 497, "y": 488}, "link": "http://www.facebook.com/groups/134290003341000/", "orgname": "השדולה החברתית-כלכלית"},
		{ "region": {"x": 342, "y": 490}, "link": "http://www.facebook.com/groups/alefzeaba/?fref=ts", "orgname": "א' זה אבא"},
		{ "region": {"x": 652, "y": 329}, "link": "", "orgname": ""},
		{ "region": {"x": 497, "y": 328}, "link": "http://www.facebook.com/groups/254462454591199/", "orgname": "צדק משפטי"},
		{ "region": {"x": 342, "y": 328}, "link": "http://www.facebook.com/groups/399291080088651/?fref=ts", "orgname": "צוות אסטרטגיה וגישור"},
		{ "region": {"x": 808, "y": 488}, "link": "http://www.facebook.com/bankhevrati", "orgname": "בנק חברתי"},
		{ "region": {"x": 1368, "y": 806}, "link": "http://www.facebook.com/QphHbrwtBytHmBqryytSmwnh?fref=ts", "orgname": "קפה חברותא"},
		{ "region": {"x": 1318, "y": 491}, "link": "http://barkayma.co.il/", "orgname": "בר קיימא"},
		{ "region": {"x": 1273, "y": 328}, "link": "http://shelanoo.co.il/", "orgname": "שלנו"},
		{ "region": {"x": 1108, "y": 328}, "link": "http://www.facebook.com/agalacoop?fref=ts", "orgname": "העגלה"},
		{ "region": {"x": 962, "y": 398}, "link": "https://www.facebook.com/groups/130897117061638/", "orgname": "באר שבע גרופ"},
		{ "region": {"x": 808, "y": 328}, "link": "https://www.facebook.com/groups/531473386867477/", "orgname": "נתיבות גרופ"},
		{ "region": {"x": 1337, "y": 646}, "link": "http://www.bankhazman.org.il/", "orgname": "בנק הזמן"},
		{ "region": {"x": 1455, "y": 396}, "link": "https://www.facebook.com/aplaceforthetribe?fref=ts", "orgname": "מקום לשבט"},
		{ "region": {"x": 1646, "y": 396}, "link": "http://discovervenus.com/", "orgname": "ונוס"},
		{ "region": {"x": 1875, "y": 467}, "link": "http://www.facebook.com/Conspiralla?fref=ts", "orgname": "הקונספירלה"},
		{ "region": {"x": 1756, "y": 558}, "link": "http://www.loverevolution.co.il/", "orgname": "מהפכה של אהבה"},
		{ "region": {"x": 1709, "y": 1092}, "link": "http://www.facebook.com/beithaam", "orgname": "בית העם"},
		{ "region": {"x": 1471, "y": 921}, "link": "http://www.facebook.com/israelmahar?fref=ts", "orgname": "ישראל מחר"},
		{ "region": {"x": 1609, "y": 858}, "link": "http://www.facebook.com/lo.nechmadim?fref=ts", "orgname": "הלא נחמדים"},
		{ "region": {"x": 1746, "y": 714}, "link": "http://www.facebook.com/j14.ta.1", "orgname": "תא מספר 1"},
		{ "region": {"x": 1906, "y": 656}, "link": "http://hamaabara.wordpress.com/", "orgname": "המעברה"},
		{ "region": {"x": 2023, "y": 534}, "link": "https://www.facebook.com/pages/%D7%90%D7%93%D7%A8-%D7%90%D7%A8%D7%92%D7%95%D7%9F-%D7%93%D7%A8%D7%99-%D7%A8%D7%97%D7%95%D7%91/292472980873851", "orgname": "ארגון דרי רחוב"},
		{ "region": {"x": 2087, "y": 709}, "link": "https://www.google.com/calendar/embed?src=j14k8.revolution@gmail.com&ctz=Asia/Jerusalem", "orgname": "מאהל קריית שמונה"},
		{ "region": {"x": 2157, "y": 918}, "link": "", "orgname": ""},
		{ "region": {"x": 1889, "y": 1146}, "link": "http://www.facebook.com/negevawake?sk=wall", "orgname": "הנגב מתעורר"},
		{ "region": {"x": 2163, "y": 1239}, "link": "http://j14.org.il/j14live", "orgname": "צדק חברתי - שידור חי"},
		{ "region": {"x": 2322, "y": 1955}, "link": "http://www.facebook.com/HaMeyHam?fref=ts", "orgname": "משמר חברתי מקומי ירושלים"},
		{ "region": {"x": 2483, "y": 1952}, "link": "http://supersaba.org/?page_id=87", "orgname": "סופר סבא"},
		{ "region": {"x": 2344, "y": 1793}, "link": "http://www.facebook.com/mishmar.bs?fref=ts", "orgname": "משמר חברתי באר שבע"},
		{ "region": {"x": 2529, "y": 1791}, "link": "", "orgname": ""},
		{ "region": {"x": 2529, "y": 1630}, "link": "", "orgname": ""},
		{ "region": {"x": 2344, "y": 1631}, "link": "", "orgname": ""},
		{ "region": {"x": 2344, "y": 1468}, "link": "http://www.facebook.com/hodhshrone", "orgname": "מאהל הוד השרון"},
		{ "region": {"x": 2529, "y": 1468}, "link": "http://www.facebook.com/HamishmarRishonlezion", "orgname": "המשמר ראשון לציון"},
		{ "region": {"x": 2432, "y": 1322}, "link": "http://www.facebook.com/groups/mishmarreg/?fref=ts", "orgname": ""},
		{ "region": {"x": 2344, "y": 1175}, "link": "", "orgname": ""},
		{ "region": {"x": 2529, "y": 1175}, "link": "http://www.facebook.com/pages/%D7%91-%D7%96%D7%94-%D7%90%D7%95%D7%94%D7%9C-%D7%94%D7%97%D7%96%D7%99%D7%AA-%D7%94%D7%A6%D7%A4%D7%95%D7%A0%D7%99%D7%AA/240433082657311?sk=wall", "orgname": ""},
		{ "region": {"x": 2344, "y": 1005}, "link": "http://www.facebook.com/groups/224215580955137/?fref=ts", "orgname": "המשמר החברתי המקומי"},
		{ "region": {"x": 2529, "y": 1005}, "link": "http://www.facebook.com/fronthaifa.page", "orgname": "מאהל חיפה"},
		{ "region": {"x": 2344, "y": 840}, "link": "", "orgname": ""},
		{ "region": {"x": 2529, "y": 840}, "link": "", "orgname": ""},
		{ "region": {"x": 2344, "y": 675}, "link": "https://www.facebook.com/tedekherati.kg?ref=ts&fref=t", "orgname": "מאהל קריית גת"},
		{ "region": {"x": 2529, "y": 675}, "link": "http://www.facebook.com/pages/%D7%91-%D7%96%D7%94-%D7%90%D7%95%D7%94%D7%9C-%D7%92%D7%91%D7%A2%D7%AA-%D7%90%D7%95%D7%9C%D7%92%D7%94-%D7%9E%D7%AA%D7%A2%D7%95%D7%A8%D7%A8%D7%AA/256697804361262?sk=wall", "orgname": "מאהל גבעת אולגה"},
		{ "region": {"x": 2344, "y": 510}, "link": "http://www.facebook.com/groups/243356button_size_px698716/?fref=ts", "orgname": "כפר הסטודנטים דימונה"},
		{ "region": {"x": 2529, "y": 510}, "link": "https://www.facebook.com/SaveHarish", "orgname": "שחררו את חריש"},
		{ "region": {"x": 1795, "y": 328}, "link": "http://www.facebook.com/nordaurevolution?fref=ts", "orgname": "מאהל נורדאו"},
		{ "region": {"x": 2004, "y": 328}, "link": "http://www.facebook.com/pages/%D7%9E%D7%90%D7%94%D7%9C-%D7%90%D7%A8%D7%9C%D7%95%D7%96%D7%95%D7%A8%D7%95%D7%91-%D7%A9%D7%A2%D7%A8-%D7%94%D7%9E%D7%97%D7%90%D7%94/131346603671190", "orgname": "מאהל ארלוזורוב"},
		{ "region": {"x": 2174, "y": 328}, "link": "http://www.facebook.com/groups/roshpinatent/?fref=ts", "orgname": "מאהל ראש פינה"},
		{ "region": {"x": 2344, "y": 328}, "link": "http://www.facebook.com/pages/%D7%A9%D7%90%D7%92%D7%AA-%D7%94%D7%93%D7%A8%D7%95%D7%9D-%D7%A0%D7%90%D7%91%D7%A7%D7%95%D7%AA-%D7%95%D7%A0%D7%90%D7%91%D7%A7%D7%99%D7%9D-%D7%A2%D7%9C-%D7%94%D7%91%D7%99%D7%AA-%D7%91%D7%93%D7%A8%D7%95%D7%9D-%D7%AA%D7%9C-%D7%90%D7%91%D7%99%D7%91/233849079981377", "orgname": "שאגת הדרום"},
		{ "region": {"x": 2529, "y": 328}, "link": "http://www.facebook.com/pardashanakarkur", "orgname": "מאהל פרדס חנה כרכור"},
		{ "region": {"x": 1324, "y": 2760}, "link": "", "orgname": ""},

		{ "region": {"x": 1150, "y": 2600}, "link": "http://www.facebook.com/pages/%D7%94%D7%9B%D7%A1%D7%90-%D7%94%D7%9E%D7%AA%D7%A0%D7%93%D7%A0%D7%93/116612265102476?fref=ts", "orgname": "הכסא המתנדנד"},
		{ "region": {"x": 1320, "y": 2600}, "link": "mailto:yozmot2013@gmail.com", "orgname": "send email"}
	];

	var zoom = 0.1;
	var offset_y = 0;
	var offset_x = 0;
	var mouse_x = 0;
	var mouse_y = 0;
	var is_dragging = false;
	var mouse_down = false;
	var over_link = false;

	function init()
	{
		// First - hide the content and move the "loading" tag to the center
		$("#content").css("visibility", "hidden");
		center_loading_tag();

		// Hide the scroll bars
		$("body").css("overflow", "hidden");

		// Set the scroll handlers
		$(document).mousewheel(
			function(event, delta)
			{
				// Set the zoom factor
				var zoom_factor = 1.09;
				if (delta < 0) zoom_factor = 1 / zoom_factor;

				if (zoom * zoom_factor > 1.5 ||
				    zoom * zoom_factor < 0.1)
					return;

				// Calculate new view paramters
				offset_x = mouse_x * (1 - zoom_factor) + zoom_factor * offset_x;
				offset_y = mouse_y * (1 - zoom_factor) + zoom_factor * offset_y;
				zoom *= zoom_factor;

				// Redraw
				zoom_images();
				event.preventDefault();
			}
		);

		// Set the cursor to be regular (IE again... arggggg...)
		$(document).css("cursor", "url('images/cursor/cursor.ico'),auto");

		// Set the function to save the last mouse x,y
		$(document).on("mousemove", function(e)
		{
			if (mouse_down)
			{
				is_dragging = true;
				offset_x += e.pageX - mouse_x;
				offset_y += e.pageY - mouse_y;
				move_images();
			}
			mouse_x = e.pageX;
			mouse_y = e.pageY;

			var link = get_link();
			if ((link == null || link == "") && (over_link))
			{
				over_link = false;
				$("body").css("cursor", "default");
			}
			else if (link != null && link != "" && !over_link)
			{
				over_link = true;
				$("body").css("cursor", "pointer");
			}
		});
		$(document).on("mousedown", function(e)
		{
			mouse_down = true;
			$(document).css("cursor", "url('images/cursor/grab.cur'),move");

			e.preventDefault();
		});
		$(document).on("mouseup", function(e){

			mouse_down = false;
			if (is_dragging){ is_dragging = false } else {
				console.log('Hovered Region:');
				console.log(get_hovered_region());
			}

		});

		var img = $('<img />').attr({ 	'id': 'map',
			                            'src': 'images/map2.png',
																	'usemap': '#a',
			                            'data-x': 0,
			                            'data-y': 0
		                            }).appendTo($('#content'));
		$("#map").css("position", "absolute");

		$("#map").on("load", function()
		{
			$(this).attr({ 'data-original-width':  $(this).width(),
				             'data-original-height': $(this).height() });
			complete_init();
		});
	}

	function get_hovered_region(){
		var relative_x = (mouse_x - offset_x) / zoom;
		var relative_y = (mouse_y - offset_y) / zoom;

		var factor = 1;

		var regionDefaults = { w: 140, h: 140 };

		for (var i = 0; i < regions.length; i++){
			var currentRegion = $.extend({}, regionDefaults, regions[i].region);

			if (relative_x > currentRegion.x * factor &&
			    relative_x < (currentRegion.x + currentRegion.w) * factor &&
			    relative_y > currentRegion.y * factor &&
			    relative_y < (currentRegion.y + currentRegion.h) * factor)
			{
				return regions[i]
			}
		}
	}

	function get_link(){
		var hovered = get_hovered_region();

		// $("#debug").html(relative_x + ", " + relative_y + "<br>" + ((hovered_region == null) ? "&lt;none&gt" : hovered_region.orgname));

		return (hovered == null) ? null : hovered.link;
	}

	function complete_init()
	{
		var viewport_width = $("#map").data("original-width");
		var viewport_height = $("#map").data("original-height");

		// Set parameters to center the viewport
		zoom = Math.min($(window).width() / viewport_width,
		                $(window).height() / viewport_height);

		offset_x = ($(window).width() - (viewport_width * zoom)) / 2;
		offset_y = ($(window).height() - (viewport_height * zoom)) / 2;

		// We're done initializing - prepare display
		relocate_images();

		// Now - we are only left to remove the "loading" and show our content!
		$("#loading").remove();
	}

	function zoom_images()
	{
		var image_object = $("#map");
		image_object.stop();
		image_object.animate( {	left: image_object.data("x") * zoom + offset_x,
			                      top:  image_object.data("y") * zoom + offset_y,
			                      width: zoom * image_object.data("original-width"),
			                      height: zoom * image_object.data("original-height") } );
	}

	function move_images()
	{
		var image_object = $("#map");
		image_object.offset({left: image_object.data("x") * zoom + offset_x,
			                    top:  image_object.data("y") * zoom + offset_y});
	}

	function relocate_images()
	{
		var image_object = $("#map");

		image_object.offset({left: image_object.data("x") * zoom + offset_x,
			                    top:  image_object.data("y") * zoom + offset_y});
		image_object.width(zoom * image_object.data("original-width"));
		image_object.height(zoom * image_object.data("original-height"));

		$("#content").css("visibility", "visible");

	}

	function center_loading_tag()
	{
		$("#loading").offset({ top:  ($(document).height() - $("#loading").height()) / 2,
			                     left: ($(document).width() - $("#loading").width()) / 2 });
	}


	$(document).ready(init);

	$('[data-role="linker"]').children().on('click', function(){

		alert(this)

	})

})(jQuery);