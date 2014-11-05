// TODO: Grunt-Minify
// TODO: keen($('a'))

(function($){

	var regions = [
		{
			region: { x: 1159, y: 479 },
			irgun: false,
			color: 'orange',

			name: 'חדר מצב',
			desc: ['ערוץ תקשורת אלטרנטיבי של המאבק החברתי.','הצטרפו לחדר המצב כדי לפקוח את העיניים ולראות את המציאות סביבכם מזווית שטרם הכרתם.','אנו מפעילים מרכז מידע והנעה לפעולה בזמן אמת. תוכלו למצוא בו חדשות ועדכונים חמים מרתקים מהשטח ובלי צנזורה!','חדר המצב מאויש על ידי קבוצת פעילים, כולם בהתנדבות מלאה, המהווים יחד צוות של חדשות המחאה - מקדמים ומפיצים את המתרחש ברשת.'],
			link: 'http://www.facebook.com/j14live'
		},{
			region: { x: 760, y: 344 },
			irgun: false,
			color: 'orange',

			name: 'מגפון',
			desc: ['עיתון העיתונאים. מיזם תוכן עיתונאי אינטרנטי. הוקם ומנוהל במתכונת של קואופרטיב - בבעלות משותפת של העובדים בו כתבים, כותבים ועורכים, צלמים ומעצבים, בעלי טורים, אנשי שטח ומשרד, אנשי מסחר ומודעות ועוד.'],
			link: 'http://www.megafon-news.co.il/'
		},{
			region: { x: 937, y: 142 },
			irgun: false,
			color: 'orange',

			name: 'רשת שידורים חיים מהשטח',
			desc: ['עיתונות אזרחית. ערוצי שידור ustream מרחבי הארץ'],
			link: 'http://j14.org.il/j14live'
		},{
			region: { x: 877, y: 71 },
			irgun: true,
			color: 'orange',

			name: 'הטלויזיה החברתית',
			desc: ['ארגון לשינוי חברתי הפועל כגוף תקשורת אזרחי - עצמאי לקידום סדר יום חברתי בישראל'],
			link: 'http://tv.social.org.il/'
		},{
			region: { x: 1021, y: 177 },
			irgun: false,
			color: 'orange',

			name: 'כנסת פתוחה',
			desc: ['אתר שנועד להעצים את האזרחים בישראל ולאפשר לכל אזרח להשתתף באורח פעיל יותר בפעילות הכנסת.','האתר מציג את המידע על מה שקורה בכנסת בצורה נוחה וברורה למשתמש ומאפשר דיון של גורמים מקצועיים ואזרחים מן השורה בנושאים של שולחן המחוקקים.','האתר מנגיש את המידע בכדי שכל אזרח ואזרחית יידעו על מה הם רוצים להשפיע ועוזר לאזרחים להשפיע על-ידי יצירת פלטפורמה לדיאלוג בין הציבור לנציגיו בכנסת'],
			link: 'http://oknesset.org/'
		},{
			region: { x: 735, y: 268 },
			irgun: false,
			color: 'orange',

			name: 'PolitiWatch',
			desc: ['פלטפורמה אינטרנטית העוקבת אחר הפעילות הפוליטית ומנגישה את המידע באופן ברור, אמין וחסר פניות לציבור'],
			link: 'http://www.politiwatch.co.il/'
		},{
			region: { x: 788, y: 93 },
			irgun: false,
			color: 'orange',

			name: 'העוקץ',
			desc: ['במה עצמאית לדיון ביקורתי בחברה בישראל, בה מאות כותבות וכותבים מפרסמים בו מאמרים מקצועיים ומקוריים בנושאי כלכלה, פוליטיקה, פילוסופיה, אמנות, מוזיקה, קולנוע, פמיניזם, אקטיביזם, זכויות אדם ועוד. ניסיון להוות אלטרנטיבה לתקשורת הממוסדת.'],
			link: 'http://www.haokets.org/'
		},{
			region: { x: 1183, y: 296 },
			irgun: false,
			color: 'orange',

			name: 'עבודה שחורה',
			desc: ['אתר אינטרנט הפועל למען שמירת אופיה של מדינת ישראל כמדינת רווחה סוציאל-דמוקרטית.'],
			link: 'http://www.blacklabor.org/'
		},{
			region: { x: 1112, y: 146 },
			irgun: true,
			color: 'orange',
			name: 'התנועה לחופש המידע',
			desc: ['תנועה הפועלת לקידום שקיפות במוסדות ציבוריים, להגברת הפיקוח על פעילותן של רשויות ציבוריות, ולעידוד הציבור לעשות שימוש בזכותו למידע.','אנו מאמינים כי קידומן של מטרות אלה יוביל ליצירתה של חברה פתוחה, דמוקרטית וצודקת יותר בישראל.'],
			link: 'http://www.meida.org.il/'
		},{
			region: { x: 1103, y: 334 },
			irgun: false,
			color: 'orange',

			name: 'הכלכלה האמיתית',
			desc: ['אתר א-פוליטי ועצמאי אשר שם לעצמו למטרה להעביר בצורה אוביקטיבית ככל האפשר את המתרחש בעולם הכלכלי בו אנו נמצאים.','המאמרים והעובדות שמוצגים באתר מובאים ללא פילטרים, הגבלות או הוראות מלמעלה תוך התמקדות בנושאים שהמדיה המרכזית נמנעת מלגעת בהם מסיבות השמורות עימה. כל המקורות שלנו חשופים ושקופים ככל הניתן ,תחת התנית אישור המקור.','פעילות האתר נעשית על בסיס התנדבותי בלבד ואינה קשורה או ממומנת על ידי אף מפלגה או ארגון.'],
			link: 'http://kalkala-amitit.blogspot.co.il/'
		},{
			region: { x: 759, y: 182 },
			irgun: false,
			color: 'orange',

			name: 'המקום הכי חם בגיהנום',
			desc: ['מגזין עיתונות הדבק בעקרונות של דמוקרטיה, שיוויון וצדק חברתי. עיתונות שלא מפחדת לקחת צד. ששומרת על פרופורציות, שאינה מתלהמת, שנצמדת לעובדות ולסטנדרטים מקצועיים, סקרנית וחוקרת, אבל אינה שקועה עד צוואר בביצת הנייטראליות הדביקה והמזויפת.','נביא כאן סיפורים שמוצנעים בתקשורת הממוסדת, או אינם מתפרסמים כלל, בגלל שאינם תואמים את האינטרס של המו"ל, או שאינם עונים על מדדי אטרקטיביות מלאכותיים שקבעו כלי תקשורת אחרים. נטפל בתופעות שקשורות ליחידים או לקבוצות, במאבקים ציבוריים, בסיפורים החברתיים, התרבותיים והפוליטיים. נפרסם פרופילים, ראיונות ודעות שונות ולא נפסיק לשאול שאלות על המקום שאנחנו חיים בו','.אולי קשה לשנות את העולם, אבל בעזרת הסיפור העיתונאי אפשר לעשות שינוי. בשביל זה אנחנו כאן. באנו להפר את השקט.'],
			link: 'http://www.ha-makom.co.il/'
		},{
			region: { x: 1180, y: 387 },
			irgun: false,
			color: 'orange',

			name: 'מרפסת',
			desc: ['מגזין תל אביבי אלטרנטיבי בקצב יומיומי, בנושאי תרבות, מעורבות והתפר ביניהם.'],
			link: 'http://mirpeset-tlv.com/'
		},{
			region: { x: 1087, y: 425 },
			irgun: false,
			color: 'orange',

			name: 'Mike & Natalie News',
			desc: ['מגזין חדשות חברתיות ביוטיוב.'],
			link: 'https://www.facebook.com/mikenatalinews'
		},{
			region: { x: 1071, y: 527 },
			irgun: false,
			color: 'orange',

			name: 'העולם אחרת',
			desc: ['מגזין חדשות הסוקר את המאבק החברתי העולמי עם ביקורת מזווית אחרת ופרשנות בועטת. הפגנות ענק, קריסת בנקים, חשיפת שחיתויות, שינויים חברתיים היסטוריים.'],
			link: 'https://www.facebook.com/HaolamAceret'
		},{
			region: { x: 996, y: 461 },
			irgun: false,
			color: 'orange',

			name: 'WeShare',
			desc: ['מגזין אלטרנטיבי על כלכלה שיתופית, פתרונות ירוקים חדשניים, צרכנות חברתית ועוד. נוסד ב-2014 כמגזין של קהילת מטבע o-share.'],
			link: 'http://www.weshare.org.il/weshare-media'
		},{
			region: { x: 1012, y: 80 },
			irgun: true,
			color: 'orange',

			name: 'החדשות מהירקון שבעים',
			desc: ['מהדורת חדשות עצמאית, הפועלת לצמצום הפערים החברתיים, הכלכליים, הסביבתיים והלאומיים בישראל. מדי יום א בערב בסינמטק תל אביב ובאינטרנט.','החדשות מהירקון שבעים מופקות באופן עצמאי על ידי קבוצת אנשי תקשורת ותרבות, במטרה להשפיע על השיח בישראל ולחתור לחברה שוויונית וצודקת.'],
			link: 'http://www.hayarkon70.org/'
		},{
			region: { x: 852, y: 190 },
			irgun: true,
			color: 'orange',

			name: 'אוטופיה שלי- תקשורת ומידע',
			desc: ['ערוץ תקשורת ומדיה באינטרנט הנותן מענה לאירועי חברה, תרבות ופנאי של הקהילה האתיופית בדגש מתן במה לאמנים יוצרים להתבטא בכל תחומים וכך לעשות שינוי בקרב צעירי הקהילה.'],
			link: 'http://www.myutopiachannel.com/'
		},{
			region: { x: 1269, y: 264 },
			irgun: false,
			color: 'orange',

			name: 'אנו',
			desc: ['מיזוג של שלושה ארגונים לשינוי חברתי אג\'נדה השדרה ועורו. אנו הוא ארגון לשינוי חברתי, הפועל לחיזוק הדמוקרטיה הישראלית, קידום סוגיות חברתיות וכלכליות והעשרת השיח הציבורי, באמצעות אקטיביזם תקשורתי ודיגיטלי'],
			link: 'http://www.anu.org.il/'
		},{
			region: { x: 836, y: 285 },
			irgun: false,
			color: 'orange',

			name: 'השעה ה-25',
			desc: ['השעה ה-25 מביאים אליכם הרצאות במקומות בילוי, ערבי ג\'ם ויצירה אומנותית פתוחים לכל האוכלוסייה, מתוך אהבה, רצון להנעה וראייה קדימה'],
			link: 'https://www.facebook.com/the25hour'
		},{
			region: { x: 853, y: 375 },
			irgun: false,
			color: 'orange',

			name: 'עמק השווה',
			desc: ['סדרת מפגשי עיון ודיון של קהילת הצדק החברתי ברחובות'],
			link: 'https://www.facebook.com/emekhashave'
		},{
			region: { x: 1022, y: 369 },
			irgun: false,
			color: 'orange',

			name: 'הסדנא לידע ציבורי',
			desc: ['עמותה פועלת להגברת השתתפות ציבורית בישראל, על ידי איסוף, פתיחה והנגשה של מידע שמצוי ברשותם של גופי ממשל ומגזר ציבורי. באמצעות טכנולוגיות מתקדמות וקוד פתוח, מפתחת קהילת המתנדבים והפעילים שלנו מגוון כלים המאפשרים להפוך את המידע לידע ובכך להעצים את החברה האזרחית ואת נציגי הציבור.'],
			link: 'http://www.hasadna.org.il/'
		},{
			region: { x: 1199, y: 202 },
			irgun: false,
			color: 'orange',

			name: 'קהילת יזמות חברתית',
			desc: ['קבוצה הפועלת במטרה לחבר בין יזמים חברתיים, מתנדבים, ומי שרוצה להיות כזה, וליצור מסגרת מעצימה ומחוללת השראה. קהילת יזמות חברתית שמה לה למטרה לחבר בין יזמים חברתיים, מתנדבים, ומי שרוצה להיות כזה, וליצור מסגרת מעצימה ומחוללת השראה.'],
			link: 'http://www.facebook.com/groups/yazmut'
		},{
			region: { x: 1110, y: 240 },
			irgun: false,
			color: 'orange',

			name: 'הכסא המתנדנד',
			desc: ['קבוצה ששמה לה למטרה להוסיף לאירועי מחאה פן יצירתי, הם לרב לא מארגנים אירועים משלהם אלא מגיעים לאירועים שארגנו אחרים מצוידים במסכות, שלטים שנונים, פסלים ועושים במקום מעין מיצג.'],
			link: 'http://www.facebook.com/pages/%D7%94%D7%9B%D7%A1%D7%90-%D7%94%D7%9E%D7%AA%D7%A0%D7%93%D7%A0%D7%93/116612265102476'
		},{
			region: { x: 1270, y: 561 },
			irgun: false,
			color: 'purple',

			name: 'המשמר החברתי בכנסת',
			desc: ['עמותה הפועלת  לקיום נוכחות אזרחית רציפה בכנסת, ולדיווח שוטף וביקורתי על תהליכי החקיקה בנושאי כלכלה צודקת ושוויון אזרחי לדאוג לנוכחות אזרחית רציפה ועיקשת בכנסת, כדי להזכיר לח"כים שהציבור לא שכח את תביעתו לצדק חברתי, ולחזק את בית הנבחרים אל מול לחצי ההון.'],
			link: 'http://hamishmar.org.il/'
		},{
			region: { x: 1258, y: 780 },
			irgun: false,
			color: 'purple',

			name: 'מתפקדים',
			desc: ['קבוצה המעודדת התפקדות למפלגות השונות מתוך אמונה כי לשנות אפשר רק מבפנים.'],
			link: 'http://mitpakdim.co.il/'
		},{
			region: { x: 1177, y: 564 },
			irgun: false,
			color: 'purple',

			name: 'המשמר החברתי המקומי',
			desc: ['עמותה המאפשרת פלטפורמה לשיתוף האזרחים ולהעלאת מעורבותם והשפעתם. היוזמה מקודמת על ידי פעילים חברתיים ברשת מוקדים ברחבי הארץ ומטרתה לייצר שקיפות ומנהל תקין בשלטון המקומי ולהפעיל לחץ רציף באמצעות פעילים ואזרחים מעורבים בדרישה למחויבות נבחרי הציבור לתושבים.'],
			link: 'http://www.facebook.com/groups/mishmarreg/'
		},{
			region: { x: 1330, y: 404 },
			irgun: false,
			color: 'purple',

			name: 'שינוי מוניטארי - מקדמים כלכלה מקיימת',
			desc: ['קבוצה הפועלת לצירת לחץ חברתי למען בנקאות הוגנת במחיר הוגן, לרבות: כנסים, הפגנות, פעילות הסברה בקרב הציבור ובקרב נבחרי ציבור למען חקיקה לשיפור מצב לקוחות הבנקים והקפדה על אכיפת החוק על הבנקים.'],
			link: 'https://www.facebook.com/monetary.change.he'
		},{
			region: { x: 1093, y: 622 },
			irgun: false,
			color: 'purple',

			name: 'בנקים - לא מעל החוק',
			desc: ['ארגון חוץ פרלמנטרי שמטרתו להביא לשינוי השיטה המוניטרית בישראל ולהכנסת מטבעות משלימים לחיזוק קהילות.'],
			link: 'http://www.facebook.com/groups/ibgwt123'
		},{
			region: { x: 1255, y: 462 },
			irgun: true,
			color: 'purple',

			name: 'האגודה לזכויות האזרח',
			desc: ['אגודה הפועלת מאז הקמתה בשנת 1972 להגנה על זכויות האדם ולקידומן, בכל מקום שבו הפגיעה בזכויות נעשית על ידי רשויות ישראליות או מטעמן. כיום אנו מוכּרים כארגון זכויות האדם הגדול, הוותיק והמוביל בישראל, ואנו גם הארגון היחיד העוסק בכל קשת זכויות האדם: משמירה על חופש הביטוי ועד מימוש הזכות לבריאות, מהגנה על זכויות האדם בשטחים הכבושים ועד לחופש הפולחן, ממאבק לשוויון אזרחי מלא ועד להגנה על הפרטיות שלנו באינטרנט. כל זאת, על מנת לחולל את השינויים המערכתיים והחברתיים הנדרשים, וכדי שנוכל לדבר, לחשוב ולחיות במציאות שמכבדת זכויות אדם, ששומרת על הזכויות שלנו, שמגנה עלינו.'],
			link: 'http://www.acri.org.il/he/'
		},{
			region: { x: 1122, y: 761 },
			irgun: true,
			color: 'purple',
		
			name: 'העמותה לדמוקרטיה מתקדמת',
			desc: ['עמותה הנאבקת מאז 2007 להגשמת חזון ארוך טווח של יצירת פתרונות לתחלואי קשרי הון-שלטון-עיתונות בישראל.'],
			link: 'http://progdemocracy.com/'
		},{
			region: { x: 1387, y: 679 },
			irgun: true,
			color: 'purple',

			name: 'התנועה לאיכות השלטון',
			desc: ['תנועה ששמה לה למטרה קידום ממשל איכותי יותר עבור אזרחי ישראל. התנועה רואה בדמוקרטיה אפקטיבית ומוגנת צורך חיוני, על אחת כמה וכמה במדינה צעירה כמדינת ישראל. במשך השנים התנועה הציבה עצמה כ"כלב השמירה" על שלטון החוק, על טוהר המידות ועל טובת הציבור.'],
			link: 'http://www.mqg.org.il/'
		},{
			region: { x: 1122, y: 494 },
			irgun: false,
			color: 'purple',
		
			name: 'פורום החוסכים לפנסיה בישראל (פ\' זה פנסיה)',
			desc: ['עמותה שנועדה להגן על זכויות החוסכים לפנסיה צוברת (לא תקציבית) בישראל. להבטיח שהרגולטורים, סוכנויות וחברות הביטוח ובתי ההשקעות ידאגו לטובתנו, ושנוכל גם לנהל את הפנסיה בעצמנו.'],
			link: 'http://www.pension.org.il/'
		},{
			region: { x: 1380, y: 326 },
			irgun: true,
			color: 'purple',

			name: 'מע"ש',
			desc: ['ארגון הפועל לחיזוק ולהתחדשות השירות הציבורי בישראל. הארגון פועל לקידום והכוונה של שינויי מדיניות בתחום ניהול ההון האנושי בשירות הציבורי ולבניית תשתית רחבה להשתלבותם של משרתי ציבור חדשים.','מעש מתמקדת בזיהוי וטיפול בחסמי כניסה למגזר הציבורי ובקידום תהליכי שינוי מול מקבלי החלטות. בנוסף, מפעיל הארגון את "המאתר" - מאגר מועמדים פתוח לציבור המאפשר לכל אזרח להציג מועמדותו לשירות הציבורי.'],
			link: 'http://maasgroup.org.il/'
		},{
			region: { x: 1351, y: 771 },
			irgun: false,
			color: 'purple',
		
			name: 'מכסחי הטייקונים',
			desc: ['קבוצה א-פוליטית שהוקמה במטרה לצאת מהמטריקס ול "ייבש את הביצות" (תזרים המזומנים של הטייקונים)!! לקדם מותגים ומוצרים של יצרנים קטנים ואיכותיים , לסייע בייעוץ ופתרון בעיות צרכנות ככל שניתן'],
			link: 'http://www.facebook.com/groups/240199489412790/'
		},{
			region: { x: 1366, y: 590 },
			irgun: false,
			color: 'purple',

			name: 'היוזמה לפירוק הריכוזיות',
			desc: ['ארגון חברתי-כלכלי הפועל למען צמצום הריכוזיות במשק והורדת יוקר המחיה.','הארגון פועל מנקודת מוצא לפיה הריכוזיות, על כל צורותיה (טייקונים, קרטלים, מונופולים...) היא שורש החולי של הכלכלה הישראלית.'],
			link: 'http://www.facebook.com/rikuziut'
		},{
			region: { x: 809, y: 543 },
			irgun: false,
			color: 'blue',
		
			name: 'צוות המאבק על הדיור הציבורי',
			desc: ['צוות הפועל למען שיקום הדיור הציבורי והשמירה על זכויות חסרי הדיור, שכל פתרון דיור אחר אינו בר השגה עבורם. בארגון פועלים יחד נפגעי/ות הדיור הציבורי, יהודים וערבים ופעילים ופעילות מסייעים. הפעילות מבוססת על עיקרון הסולידריות, בין הנפגעים לבין עצמם, תוך ניסיון לחזק את יכולת המאבק למען עצמם ולגייס את תמיכת השכנים והקהילות הרלבנטיות.'],
			link: 'http://diortzibury.wordpress.com/'
		},{
			region: { x: 702, y: 457 },
			irgun: false,
			color: 'blue',
		
			name: 'המאבק הירושלמי לדיור ציבורי המעברה',
			desc: ['קבוצה הנאבקת למען הדיור הציבורי בירושלים.  פועלים מתוך "בית המאבק" לדיור ציבורי הנמצא בבניין כלל בי-ם המהווה מטה להמשך המאבק ובו שוהות המשפחות המפונות מפינסקר, שטרן ופעילים נוספים. בשת"פ עם כוח לעובדים, פורום פריפריה ובית העם.'],
			link: 'http://hamaabara.wordpress.com/'
		},{
			region: { x: 731, y: 596 },
			irgun: false,
			color: 'blue',
		
			name: 'אד"ר - ארגון דרי רחוב',
			desc: ['התארגנות של פעילים חסרי בית הדרים ברחוב ופעילים חברתיים. מטרת הארגון הנה לתת מענה לצורך של ריכוז ותיאום ההתנהלות מול הרשיות בכל הנושאים שקשורים לחסרי הבית הדרים ברחוב וכן להוות מטריה לתאום בין היוזמות השונות שעוסקות בנושאים הללו. השם אינו מייצג את הגדרות הרשויות לשם "דר רחוב". מבחינתנו דרי רחוב הם כל האנשים חסרי הבית שמתגורים ברחוב או במיסתורים שונים שאינם מותרים להם על פי החוק.'],
			link: 'https://www.facebook.com/pages/%D7%90%D7%93%D7%A8-%D7%90%D7%A8%D7%92%D7%95%D7%9F-%D7%93%D7%A8%D7%99-%D7%A8%D7%97%D7%95%D7%91/292472980873851'
		},{
			region: { x: 802, y: 452 },
			irgun: false,
			color: 'blue',
		
			name: 'התנועה לחיים בכבוד',
			desc: ['תנועה היוזמת פעולות מחאה קבוצתיות לעצירת תהליכי פינוי של אזרחים מביתם ויוצרת לחץ על המוסדות הרלוונטיים למציאת פתרון הולם שיאפשר למשפחות אלו קורת–גג.']
		},{
			region: { x: 939, y: 550 },
			irgun: false,
			color: 'blue',
		
			name: 'ישראל יקרה לנו',
			desc: ['התנועה להורדת יוקר המחיה בישראל. קבוצה אקטיביסטית א-מפלגתית העוסקת בנושא יוקר המחיה עם דגש על יוקר מחירי המזון.'],
			link: 'http://www.facebook.com/groups/Israelforum/'
		},{
			region: { x: 859, y: 644 },
			irgun: false,
			color: 'blue',
		
			name: 'הגורם האנושי',
			desc: ['קבוצת מאבק נגד התאגידים להחזרת הכח אל הצרכנים.'],
			link: 'http://www.facebook.com/groups/gorem/'
		},{
			region: { x: 852, y: 863 },
			irgun: false,
			color: 'blue',

			name: 'תנועת המורים - מחנכים. מורים דרך',
			desc: ['תנועה שנועדה להיות גוף ציבורי, המורכב ממורות ומורי ישראל ומשמיע את קולנו בדרך להובלת שינוי ערכי ופדגוגי במערכת החינוך.'],
			link: 'http://www.morim-derech.org.il/'
		},{
			region: { x: 928, y: 921 },
			irgun: false,
			color: 'blue',
		
			name: 'מחאת ההורים - צעדת העגלות',
			desc: ['הדף הרשמי של מחאת ההורים בו מתעדכנים בין היתר מוקדי צעדות בכל הארץ.'],
			link: 'https://www.facebook.com/agalotrishmi/'
		},{
			region: { x: 1003, y: 705 },
			irgun: false,
			color: 'blue',
		
			name: 'הקואליציה להעסקה ישירה',
			desc: ['קואליציית ארגונים חברתיים שהתאגדו יחד למאבק למען שיבה להעסקה ישירה בישראל.','אפיקי הפעולה של הקואליציה: 1. מאבק ציבורי לקידום העסקה ישירה. 2. תמיכה בהתאגדויות עובדות ועובדים מופרטים. 3. לובי בכנסת. 4. קידום חקיקה.'],
			link: 'http://www.anu.org.il/fights/%D7%94%D7%A7%D7%95%D7%90%D7%9C%D7%99%D7%A6%D7%99%D7%94_%D7%94%D7%90%D7%A8%D7%A6%D7%99%D7%AA_%D7%9C%D7%94%D7%A2%D7%A1%D7%A7%D7%94_%D7%99%D7%A9%D7%99%D7%A8%D7%94-3.htm#.VDuTJfl_t8E'
		},{
			region: { x: 964, y: 817 },
			irgun: true,
			color: 'blue',
		
			name: 'כח לעובדים',
			desc: ['ארגון עובדים כללי המאגד עובדים ממגוון תחומים. הארגון מבוסס על מבנה דמוקרטי שבו הכוח נמצא בידי העובדים.'],
			link: 'http://workers.org.il/'
		},{
			region: { x: 500, y: 589 },
			irgun: false,
			color: 'blue',
		
			name: 'צדק משפטי',
			desc: ['קבוצת מחאה נגד עוולות מע\' המשפט.'],
			link: 'http://www.facebook.com/groups/254462454591199/'
		},{
			region: { x: 466, y: 698 },
			irgun: false,
			color: 'blue',
		
			name: 'ת\' זה תחבורה ציבורית',
			desc: ['קבוצה הפועלת לקידום תחבורה ציבורית ברו"ח המלצות דו"ח טרכטנברג ובתוספת הנושאים: סלילת מסלולים נפרדים לתח"צ בכל רחבי הארץ ואכיפתם.','שיתוף ציבור מלא בתכנון עירוני, הקמת מערך תלונות ומידע ארצי לתחבורה ציבורית'],
			link: 'http://www.facebook.com/groups/127475187347484/'
		},{
			region: { x: 563, y: 721 },
			irgun: true,
			color: 'blue',
		
			name: '15 דקות - ארגון צרכני תחבורה ציבורית בישראל',
			desc: ['ארגון הפועל לקיצור זמני הנסיעה בתחבורה הציבורית ולשיפור והוספת שירות בתחבורה הציבורית, כך שהיא תהווה חלופה ראויה לשימוש ברכב הפרטי.','הארגון פועל באמצעות מאבקים ציבוריים ותקשורתיים, בעזרת מתנדבים ואנשי מקצוע.'],
			link: 'http://www.15minutes.co.il/'
		},{
			region: { x: 619, y: 562 },
			irgun: false,
			color: 'blue',
		
			name: 'המטה הציבורי לשיוויון בבריאות',
			desc: ['רשת של ארגונים ופעילים השותפים בהחלטה הנחושה להביא לצמצום דרסטי של פערי הבריאות בישראל – בין תושבי המרכז לתושבי הפריפריה, בין העניים לעשירים, בין ערבים ליהודים, בין עולי אתיופיה לציבור הישראלי הותיק ועוד.','הארגונים והפעילים השותפים למטה מעורבים במאבקים וביוזמות מגוונות – כל אחד ואחת פועלים בדרכם שלהם – למען מטרה זו, ואולם כולנו יחד קוראים לממשלה לקבל החלטה אמיצה לכונן תכנית לאומית רב שנתית לצמצום הפערים בבריאות, תוך התבססות על יעדים כמותיים.'],
			link: 'http://www.equalhealth.org.il/'
		},{
			region: { x: 793, y: 992 },
			irgun: false,
			color: 'blue',
		
			name: 'תנועת עתידנו',
			desc: ['תנועה ששמה לה למטרות לקדם מאבק על שיפור תנאי השכר של העובדות/ים הסוציאליות/יים, לעצור את הפגיעה שגורמת הפרטת השירותים החברתיים בעובדות/ים ובלקוחות ולהילחם על מעמדו ועתידו של המקצוע.'],
			link: 'http://atidenu.co.il/'
		},{
			region: { x: 734, y: 843 },
			irgun: false,
			color: 'blue',
		
			name: 'עוסי"ם שינוי',
			desc: ['עמותה ארצית של סטודנטים לעבודה סוציאלית, אשר נוסדה במטרה לקחת אחריות כלפי מקצוע העבודה הסוציאלית. מתוך הבנה אודות חשיבותה של מדיניות רווחה נאותה בישראל.'],
			link: 'http://www.osimshinooy.com/'
		},{
			region: { x: 649, y: 807 },
			irgun: false,
			color: 'blue',
		
			name: 'רשת ביטחון חברתי',
			desc: ['עמותה שמטרתה להקים רשת קהילות סיוע מחוללות-שינוי ברחבי ישראל. זאת, באמצעות מודל ייחודי שפיתחה, המעניק סיוע רב-מערכתי, פרטני וקהילתי לאנשים שאיבדו את יכולת ההתמודדות עם המציאות החברתית והכלכלית בישראל'],
			link: 'https://www.facebook.com/SocialSafetyNet/'
		},{
			region: { x: 617, y: 988 },
			irgun: false,
			color: 'blue',
		
			name: 'תרומות ומעשים טובים',
			desc: ['קבוצת שנפתחה על מנת לעזור למשפחות נזקקות ולכאלה שידם אינה משגת.','זוהי לא קבוצת מסירות רגילה והמטרה שלה היא שהתרומות שנמסרות בה יועברו לנזקקים בלבד.'],
			link: 'https://www.facebook.com/groups/trumot/'
		},{
			region: { x: 567, y: 916 },
			irgun: false,
			color: 'blue',
		
			name: '"דברים שצריך" - ספריית חפצים שיתופית',
			desc: ['פרוייקט צרכנות שיתופי ליצירת ספריית חפצים קהילתית. הספרייה תעסוק ב-2 מערכי השאלות חפצים:','1. מערך שיתוף חפצים בין מנויים.','2. השאלת חפצים של הספרייה לציבור הרחב.','הקו המנחה את החשיבה בפרויקט הספרייה השיתופית "דברים שצריך" הוא "Strategic Access" - הנגשה אסטרטגיתמונח זה מכוון ליצירת נגישות מקסימלית למוצרים וחפצים על ידי בחינה של תדירות ופרק זמן הצריכה על פי צרכים ורצונות משתנים'],
			link: 'https://www.facebook.com/stuff2goil/'
		},{
			region: { x: 707, y: 1000 },
			irgun: false,
			color: 'blue',
		
			name: 'בנק הזמן',
			desc: ['בנק הזמן מושתת על הרעיון בו אנשים "מפקידים" את זמנם בבנק ע"י מתן עזרה לאחרים בתחומים מגוונים ו"פודים" את זמנם כאשר הם צריכים שמשהו ייעשה למענם. בבנק אין "מתנדבים" אלא "תורמי זמן" ו"מקבלי זמן".'],
			link: 'http://www.bankhazman.org.il/'
		},{
			region: { x: 562, y: 827 },
			irgun: false,
			color: 'blue',
		
			name: 'קיימנים - פעילים בסביבה',
			desc: ['תכנית קיימות חברתית במיקוד באורבניות, רשת וצרכנות לסטודנטים וקבוצות'],
			link: 'https://www.facebook.com/kaymanim/'
		},{
			region: { x: 482, y: 879 },
			irgun: false,
			color: 'blue',
		
			name: 'O-Share אושר‎',
			desc: ['פלטפורמה חינמית לשיתוף זמן, חפצים, מזון וידע בעזרת מטבע פנימי "שפע~"'],
			link: 'https://app.o-share.org/'
		},{
			region: { x: 1272, y: 1299 },
			irgun: false,
			color: 'green',
		
			name: 'הפורום הישראלי לשמירה על החופים',
			desc: ['התארגנות ארצית של מטות מאבקים מקומיים להצלת חופים מפני תכניות בנייה הרסניות.','הפורום פועל כרשת של חברים ובשיתוף פעולה עם הארגונים הסביבתיים-חברתיים: אדם טבע ודין, עמותת כחול וירוק, ארגון מגמה ירוקה, החברה להגנת הטבע, צלול, חיים וסביבה, גרינפיס ועוד.'],
			link: 'https://www.facebook.com/israelseaforum'
		},{
			region: { x: 876, y: 1142 },
			irgun: false,
			color: 'green',
		
			name: 'משאירים את הגז בישראל',
			desc: ['קבוצת מאבק נגד ייצוא הגז הטבעי שנמצא ליד חופי ישראל ובעד השבת משאבי הטבע לידי האזרחים'],
			link: 'http://www.gas4israel.org/'
		},{
			region: { x: 1005, y: 1277 },
			irgun: false,
			color: 'green',
		
			name: 'א\' זה אסדה - מעבירים את מפעלי הגז לים',
			desc: ['מאבק נגד  מתקני הגז היבשתיים ודרישה שאספקת הגז למדינה תעשה על ידי הזרמתו מאסדה צפה מרוחקת בלב הים לתוך מערכת ההולכה התת ימית הקיימת.'],
			link: 'http://www.facebook.com/pages/%D7%90-%D7%96%D7%94-%D7%90%D7%A1%D7%93%D7%94-%D7%9E%D7%A2%D7%91%D7%99%D7%A8%D7%99%D7%9D-%D7%90%D7%AA-%D7%9E%D7%A4%D7%A2%D7%9C%D7%99-%D7%94%D7%92%D7%96-%D7%9C%D7%99%D7%9D/113520718752945'
		},{
			region: { x: 1183, y: 1255 },
			irgun: true,
			color: 'green',
		
			name: 'מגמה ירוקה',
			desc: ['עמותת המתנדבים הסביבתית הגדולה בארץ, המקדמת שינוי סביבתי באמצעות אקטיביזם ופיתוח מנהיגות סביבתית.'],
			link: 'http://www.green.org.il/'
		},{
			region: { x: 1149, y: 1144 },
			irgun: false,
			color: 'green',
		
			name: 'אדממא',
			desc: ['מיזם העוסק באקולוגיה מעשית, בנייה מחומרים טבעיים, קומפוסט, אקולוגיה אנושית, מחזור נייר ופסולת, גינון אורגני וכיבוד האדמה ע’’פ עקרונות הטבע ואורח חיים הרמוני.','אנחנו מעבירים שלל רחב של קורסים בנושאי אקולוגיה, פסולת אורגנית, מחזור, מערכת מים אפורים, מלאכות מחומרים טבעיים, בנייה בבוץ, איך להכין קומפוסט בייתי, גינון אורגני של גינה אקולוגית ובמילה אחת- פרמקלצ’ר.'],
			link: 'http://www.adamama.org.il/'
		},{
			region: { x: 919, y: 1223 },
			irgun: false,
			color: 'green',
		
			name: '"שקט תעשייתי - אזרחים למען הסביבה"',
			desc: ['התארגנות המורכבת משני ארגונים: אזרחים למען הסביבה, והקואליציה לבריאות הציבור - שפועלים באזור חיפה והצפון כבר למעלה מ 10 שנים. בעקביות ובשיטתיות אנחנו אוספים מידע כדי להפחית את הזיהום הסביבתי בכלל ואת התעשייתי בפרט.','את המידע שאנחנו אוספים אנו מנתחים ומפרסמים בסדרת דו""חות תחת הכותרת שקט תעשייתי.'],
			link: 'http://cfenvironment.org.il/'
		},{
			region: { x: 964, y: 1003 },
			irgun: false,
			color: 'green',
		
			name: 'מצילים את חוף נחשולים וחופי הכרמל',
			desc: ['מחאה שהחלה בעקבות תוכנית לבניית כפר נופש לעשירים ליד חוף נחשולים ומהר מאוד התרחבה למחאה על כל חופי הכרמל הנמצאים כיום בסכנת פיתוח/בנייה'],
			link: 'http://www.facebook.com/pages/%D7%9E%D7%A6%D7%99%D7%9C%D7%99%D7%9D-%D7%90%D7%AA-%D7%97%D7%95%D7%A3-%D7%A0%D7%97%D7%A9%D7%95%D7%9C%D7%99%D7%9D/189324674471923'
		},{
			region: { x: 1088, y: 1229 },
			irgun: true,
			color: 'green',
		
			name: 'אנונימוס לזכויות בעלי חיים',
			desc: ['"עמותה ללא מטרות רווח, שנוסדה בשנת 1994, המבוססת בעיקר על מתנדבים. העמותה ממומנת מכספי תרומות – מאנשים פרטיים ומקרנות. ביכולתך לסייע לנו בארגון או במימון פעילות נרחבת יותר שתגדיל את כוח השפעתנו על מקבלי החלטות, צרכנים, כלי תקשורת - וגורמים נוספים שגורל מאות מיליוני בעלי-חיים נתון בידיהם.'],
			link: 'http://anonymous.org.il/'
		},{
			region: { x: 1084, y: 1326 },
			irgun: false,
			color: 'green',
		
			name: '269 life israel',
			desc: ['269life היא תנועה בינלאומית לשחרור בעלי חיים.','נקודת המוצא הבסיסית של התנועה היא הדרישה הבלתי מתפשרת לשחרור בעלי החיים –אין ולא יהיה כלוב גדול דיו, או להב חד מספיק, בכדי להצדיק כל תעשייה שהיא העושה רווח על גבם.'],
			link: 'http://www.269life.com/index-heb.html'
		}
	];

	var zoom = 0.1;
	var zoomingDevice = false;
	var offset_y = 0;
	var offset_x = 0;
	var mouse_x = 0;
	var mouse_y = 0;
	var is_dragging = false;
	var mouse_down = false;
	var over_link = false;

	function setContentEvents(toggle){

		if (toggle){

			interactElem = $(document);

			interactElem.on('mousewheel', function(event, delta){

				zoomingDevice = true;

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
			});
			interactElem.on('mousemove', function(e){
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
			interactElem.on('mousedown', function(e){
				mouse_down = true;
				$(document).css("cursor", "url('images/cursor/grab.cur'),move");

				e.preventDefault();
			});
			interactElem.on('mouseup', function(e){
				
				mouse_down = false;
				if (is_dragging){ is_dragging = false } else {

					if ($(e.toElement).is('img#map')){
						var eRegion = {};

						if (!zoomingDevice){
							var offset = $('img#map').offset();
							var x = e.clientX - offset.left;
							var y = e.clientY - offset.top;

							eRegion = get_hovered_region(x,y)
						} else {
							eRegion = get_hovered_region();
						}

						if (eRegion){

							var modalHTML = '<div class="close">סגור</div>';
							modalHTML += '<h3 class="' + eRegion.color + '">' + eRegion.name + '</h3>';
							modalHTML += '<div class="innerWrap">';

							$.each(eRegion.desc, function(){
								modalHTML += '<p class="desc">' + this + '</p>';
							});

							if (eRegion.link){
								var facebook = eRegion.link.indexOf('www.facebook') >= 0;
								var type = eRegion.irgun ? 'אירגון' : 'יוזמה';

								modalHTML += '<a href="' + eRegion.link + '" target="_blank" ';
								modalHTML += 'class="link ' + eRegion.color + ' ' + (facebook ? 'facebook' : 'homepage') + '">';
								modalHTML += (facebook ? 'לעמוד ה' : 'לאתר ה') + type;
								modalHTML += '</a>'
							}

							modalHTML += '</div>';

							var modalElem = $('.modal');

							setContentEvents(false);
							modalElem.html(modalHTML).modal(
								{
									fadeDuration: 500,
									fadeDelay: 0.5,
									escapeClose: false,
									clickClose: false,
									showClose: false
								}
							);

							modalElem.find('.close').on('click', function(){
								setContentEvents(true);
								$.modal.close();
							});
						}
					}
				}

			});
		} else {
			interactElem.off('mousewheel');
			interactElem.off('mousemove');
			interactElem.off('mousedown');
			interactElem.off('mouseup');
		}
	}

	function init()
	{
		// First - hide the content and move the "loading" tag to the center
		$("#content").css("visibility", "hidden");
		center_loading_tag();

		// Hide the scroll bars
		$("body").css("overflow", "hidden");

		// Set the cursor to be regular (IE again... arggggg...)
		$(document).css("cursor", "url('images/cursor/cursor.ico'),auto");

		setContentEvents(true);

		var img = $('<img />').attr({ 	'id': 'map',
			                            'src': 'images/map3.jpg',
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

	function get_hovered_region(x, y){
		var regionDefaults = { w: 70, h: 70 };

		if (x && y){

			var imgMap = $('img#map');
			var ratio = imgMap.data('original-width') / imgMap.width();

			var rationedX = x * ratio;
			var rationedY = y * ratio;

			var corespondingRegion = undefined;

			$.each(regions, function(){
				var sizedRegionX = this.region.x + regionDefaults.w;
				var sizedRegionY = this.region.y + regionDefaults.h;

				if (this.region.x < rationedX && rationedX < sizedRegionX){
					if (this.region.y < rationedY && rationedY < sizedRegionY){
						corespondingRegion = this;
						return false
					}
				}
			});

			return corespondingRegion || null

		} else {
			var relative_x = (mouse_x - offset_x
				                 )/zoom;
			var relative_y = (mouse_y - offset_y
				                 )/zoom;

			var factor = 1;

			for (var i = 0; i < regions.length; i++){
				var currentRegion = $.extend({}, regionDefaults, regions[i].region);

				if (relative_x > currentRegion.x*factor && relative_x < (currentRegion.x + currentRegion.w
					                                                        )*factor && relative_y > currentRegion.y*factor &&
				    relative_y < (currentRegion.y + currentRegion.h
					                 )*factor){
					return regions[i]
				}
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

})(jQuery);