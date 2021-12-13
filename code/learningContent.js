/************************     הוראות חשובות      ***********************/

/**
 
 1.   במידה וזאת פעם ראשונה שלכם ממלאים תוכן בלומדה, קראו את **קובץ הוורד** המצורף בתקייה
 2.   בעמוד זה יש למלא את הפרטים לגבי כל המידע והתוכן המבוקש
 3.   [amountOfQuestions במשתנה] לשים לב שבכל נושא צריך לכתוב את *כמות השאלות המקסימלית* שתלקח ממנו
      **משתנה זה מתייחס רק לשאלות שיילקחו בשביל **המבחן
 */


/************************      הכנס כותרת ראשית שהיא שם הלומדה      ***********************/
const TITLE = "עגה עבריינית";

/****     הכנס כמות כוללת מקסימלית של שאלות למבחן. יש לשים לב לכמות השאלות הקיימות מהבהד - שלא כמות שלא קיימת   *******/
// const AMOUNT_EXAM_QUESTIONS = 10;

/************************      הכנס כמות זמן התחלתית של המבחן      ***********************/
const TIME_FOR_EXAM = "11:00";

// אובייקט המכיל את כל המידע של הלומדה הכולל את התוכן, השאלות לכל נושא וכמות השאלות שיילקח מכל נושא למבחן
const DATA = { 
    // שם נושא
    "סמים": {
        "icon": "../assets/images/learning/agaAvarianitImages/אייקון סמים.svg",
        // שאלות לנושא הזה
        "questionsExam": [
            {
                type: "multiple",
                question: "מהי אצבע?",
                ans1: "חתיכת חשיש",
                ans2: "חתיכת LSD",
                ans3: "חתיכת MD",
                ans4: "חתיכת פרח",
                correctAns: "ans1"
            },
            {
                type: "multiple",
                question: "מה זה ירושלמי?",
                ans1: "יח' הפצה של מריחואנה, כ-3 גרם",
                ans2: "יח' הפצה של חשיש, כ-3 גרם",
                ans3: "2 סיגריות ממולאות מריחואנה ומגולגלות יחד",
                ans4: "2 סיגריות ממולאות חשיש ומגולגלות יחד.",
                correctAns: "ans4"
            },
            {
                type: "multiple",
                question: "מה זה ביוקר?",
                ans1: "כינוי לקוקאין",
                ans2: "כינוי להוריאן",
                ans3: "כינוי לאקסטזי",
                ans4: "כינוי לMD",
                correctAns: "ans1"
            },
            {
                type: "multiple",
                question: "משתמש הינו...",
                ans1: "נרקומן או אדם הצורך סמים",
                ans2: "אדם המשמש כסוחר סמים",
                ans3: "אדם המשתמש בקנאביס רפואי מסיבות רפואיות",
                ans4: "אדם המתווך בסמים",
                correctAns: "ans1"
            },
            {
                type: "multiple",
                question: "עוגיית חשיש היא גם...",
                ans1: "עוגיית אמסטרדם",
                ans2: "עוגיית כיף",
                ans3: "עוגיית מזל",
                ans4: "עוגיית הנאה",
                correctAns: "ans2"
            },
            {
                type: "multiple",
                question: "באיזו צורה מגיע LSD?",
                ans1: "עוגיה, בולים, קרטונים",
                ans2: "קלקר, קרטונים, תמונות",
                ans3: "בולים, קרטונים, תמונות",
                ans4: "עוגיה, קרטונים, תמונות",
                correctAns: "ans3"
            },
            {
                type: "multiple",
                question: "מילים נרדפות למריחואנה...",
                ans1: "גראס, ירוק, חצץ",
                ans2: "גראס, מכבי חיפה, חסה",
                ans3: "ירוק, מכבי חיפה, חצץ",
                ans4: "גראס, פטרוזיליה, ירקת",
                correctAns: "ans2"
            },
            {
                type: "binary",
                sentence: "סוליה משמע יחידת אריזה של 400 גרם חשיש...",
                trueOrFalse: false
            },
            {
                type: "binary",
                sentence: "בוף משמע חתיכת חשיש קטנה מאצבע...",
                trueOrFalse: true
            },
            {
                type: "binary",
                sentence: "אוקה משמע חתיכה של אקסטזי...",
                trueOrFalse: false
            },
        ],
        "questionsPractice": [
            {
                type: "multiple",
                question: "מהי דלקה?",
                ans1: "מצב בו משתמש נמצא תחת השפעת אקסטזי",
                ans2: "מצב בו משתמש נמצא תחת השפעת LSD",
                ans3: "מצב שבו משתמש נמצא תחת השפעת קוקאין",
                ans4: "תשובות א'+ב' נכונות",
                correctAns: "ans4"
            },
            {
                type: "multiple",
                question: "מה זה צינגלה?",
                ans1: "כינוי לאדם תחת השפעת קוקאין",
                ans2: "סיגריה ממולאת בטבק ומריחואנה",
                ans3: "מקום מסתור לסמים",
                ans4: "כינוי לסוחר סמים זוטר",
                correctAns: "ans2"
            },
            {
                type: "multiple",
                question: "מהי קססה?",
                ans1: "טבק בלבד",
                ans2: "תערובת של מריחואנה עם טבק",
                ans3: "תערובת של טבק עם LSD",
                ans4: "תערובת של טבק עם קוקאין",
                correctAns: "ans2"
            },
            {
                type: "multiple",
                question: "מהי שאכטה?",
                ans1: "תערובת של טבק עם מריחואנה",
                ans2: "כלי לשימוש בסמים מסוכנים",
                ans3: "שאיפה מסיגריה",
                ans4: "הלשנה",
                correctAns: "ans3"
            },
            {
                type: "binary",
                sentence: "חום זה חשיש...",
                trueOrFalse: true
            },
            {
                type: "binary",
                sentence: "רייב משמע מסיבת קוק...",
                trueOrFalse: false
            },
            {
                type: "binary",
                sentence: "צ'רלי משמע קוקאין...",
                trueOrFalse: true
            },
            {
                type: "binary",
                sentence: "שיק משמע סתימה בבאנג...",
                trueOrFalse: true
            },
            {
                type: "binary",
                sentence: "האש משמע המים בבאנג...",
                trueOrFalse: false
            },
        ],
        "amountOfQuestions": 10,
        "learningContent": {
            "כללי": {
                "כללי": [
                    {
                        cardType: "listNumbers3",
                        numList: "2",
                        li1: "יובש- חוסר בסמים",
                        li2: "יש כיוון?- האם יש מאיפה להשיג חומר?",
                    }
                ],
                "כלים": [
                    {
                        cardType: "picAndText",
                        pic: "../assets/images/learning/agaAvarianitImages/כלים.jpg",
                        numList: "6",
                        li1: "באנג- כלי לעישון חשיש",
                        li2: "טיל- ג'ויינט גדול מאוד",
                        li3: "טילון- ג'ויינט ארוך דק בתחילתו עבה בסופו",
                        li4: "ירושלמי- 2 סיגריות ממלואות חשיש ומגולגלות יחד",
                        li5: "נייר גלגול- הנייר שבתוכו מכינים קססה",
                        li6: "שיקה- סתימה בבאנג",
                    }
                ],
                "השפעות": [
                    {
                        cardType: "listNumbers3",
                        numList: "9",
                        li1: "דודא- כמיהה לסם לצורך פיזיולוגי לסמים",
                        li2: "דלוק- תחת השפעת סם",
                        li3: "דלקה- משתמש תחת השפעת אקסטזי או LSD",
                        li4: "הפוך או מסטול- אדם הנמצא תחת השפעת סמים",
                        li5: "טריפ- השפעת הסם על מערכת התחושות והרגשות, טריפ טוב מעניק תחושות והזיות נעימות, טריפ רע מעניק תחושות והזיות שליליות.",
                        li6: "מאנץ'- תיאבון שמגיע לאחר שימוש בסמים (בדכ קנאביס), השתוקקות עזה למתוק ומלוח",
                        li7: "סוטול- השפעה נעימה של סם",
                        li8: "סרטים- הזיות בזמן סוטול",
                        li9: "שפיץ- רבע של טריפ",
                    }
                ],
                "מקומות": [
                    {
                        cardType: "listNumbers3",
                        numList: "3",
                        li1: "זולה- מקום מסתור לסם ונשק, מקום לצריכת סמים",
                        li2: "כספומט- נקודת מכירת סמים בה המוכר יושב בתוך מבנה נסתר מעיני הקונה והמכירה מתבצעת תוך הברת הכסף והחומר דרך חריץ.",
                        li3: "תחנה- מקום או אדם המשמשים מוקד למכירת סמים",
                    }
                ],
                "דרכי שימוש": [
                    {
                        cardType: "listNumbers3",
                        numList: "6",
                        li1: "לאכול- לקחת, לבלוע סמים (אקסטזי, טריפ)",
                        li2: "לגלגל- הכנת ג'וינט",
                        li3: "להפיל ראש- לעשן באנג",
                        li4: "לצלול- לצרוך סמים בצורה חזקה ולאבד את שיקול הדעת",
                        li5: "דופק ראש- מעשן סמים",
                        li6: "שאכטה- שאיפה אחת מסיגריות",
                    }
                ],
                "סחר": [
                    {
                        cardType: "picAndText",
                        pic: "../assets/images/learning/agaAvarianitImages/סחר.jpg",
                        numList: "3",
                        li1: "לתפקד- לסחור בסמים",
                        li2: "מנה- מנת סמים להפצה",
                        li3: "נגלה- ייבוא סמים לישראל",
                    }
                ],
                "אנשים": [
                    {
                        cardType: "listNumbers3",
                        numList: "8",
                        li1: "מזוודה- אדם שמעביר סם בפי הטבעת",
                        li2: "מעלית- אסיר, עציר שנהנה מחופש תנועה בין תאים ואגפים ותפקידו להעביר סמים בכלא",
                        li3: "משתמש- נרקומן או צרכן סמים",
                        li4: "מתודלק- רבוי באלכוהול או בסמי הזייה",
                        li5: "נרקו- כינוי לנרקומן",
                        li6: "סחי- צלול, לא מסטול",
                        li7: "ראש בראש- מעשנים ביחד",
                        li8: "שפוך או שפוך על הקטנים- נרקומן",
                    }
                ],
                "התנהגות": [
                    {
                        cardType: "picAndText",
                        pic: "../assets/images/learning/agaAvarianitImages/התנהגות.jpg",
                        numList: "2",
                        li1: "ישיבה- מנהג עישון המריחואנה או החשי בקבוצה",
                        li2: "ראש בראש- מעשנים ביחד",
                    }
                ],
            },
            "סוגי סמים": {
                "אקסטזי- MDMA": [
                    {
                        cardType: "picAndText",
                        pic: "../assets/images/learning/agaAvarianitImages/אקסטזי.jpg",
                        numList: "4",
                        li1: "אקסטה- תבנית אקסטזי",
                        li2: "סוכריות- אקסטזי",
                        li3: "אותיות- MD",
                        li4: "משה דץ- MD"
                    }
                ],
                "חשיש": [ 
                    {
                        cardType: "picAndText",
                        pic: "../assets/images/learning/agaAvarianitImages/חשיש.jpg",
                        numList: "7",
                        li1: "אוקה- חתיכה של חשיש",
                        li2: "אצבע- חתיכת חשיש",
                        li3: "בוף- חתיכת חשיש קטנה יותר מאצבע",
                        li4: "גוש- חצי עד רבע של סוליית חשיש",
                        li5: "חום, חינה, שוקולד, מרוקאי- חשיש (בשל צבעו)",
                        li6: "חשישה, עוגיות כיף- עוגיית חשיש",
                        li7: "סוליה- יחידת אריזה של 200 גרם חשיש"
                    }
                ],
                "LSD- אסיד": [
                    {
                        cardType: "picAndText",
                        pic: "../assets/images/learning/agaAvarianitImages/אסיד.jpg",
                        numList: "3",
                        li1: "בול- פיסת נייר הטבולה בLSD שלרוב מעלייה מצויירים ציורים שונים המכנים להם את שמם הופמן, סימפסון וכדו'",
                        li2: "תמונות, קרטונים- LSD",
                        li3: "רייב- כינוי למסיבות אסיד"
                    }
                ],
                "קוקאין": [
                    {
                        cardType: "picAndText",
                        pic: "../assets/images/learning/agaAvarianitImages/קוקאין.jpg",
                        numList: "4",
                        li1: "ביוקר, למעלה- קוקאין",
                        li2: "צ'ארלי- קוק",
                        li3: "קוק- כינוי לסם שיכול לשמש גם להרואין וגם לקוקאין",
                        li4: "קראק- קוקאין שעבר עיבוד נוסף",
                    }
                ],
                "מריחואנה": [
                    {
                        cardType: "picAndText",
                        pic: "../assets/images/learning/agaAvarianitImages/מריחואנה.jpg",
                        numList: "4",
                        li1: "בראש- סוטול",
                        li2: "ג'ויינט או פייסל-  סיגריה מגולגלת ובה חשיש ומריחואנה",
                        li3: "גראס, ירוק, ירק, עשב, חסה, מכבי חיפה- מריחואנה",
                        li4: "קססה- תערובת של טבק עם מריחואנה או חשיש",
                    },
                    {
                        cardType: "listNumbers3",
                        numList: "3",
                        li1: "בררה- הגרגירים והפירורים שנשארו בשקית שהכילה מריחואנה (החומר הפחות משובח)",
                        li2: "פארש- שאריות טבק של סיגריה לאחר מכניסים אליה מריחואנה או חשיש",
                        li3: "צינגלה- סיגריה ממולאת בטבק ומריחואנה",
                    }
                ],
                "גראס": [
                    {
                        cardType: "picAndText",
                        pic: "../assets/images/learning/agaAvarianitImages/גראס.jpg",
                        numList: "1",
                        li1: "האש- השמן של הגראס",
                    },
                ],
                "הרואין": [
                    {
                        cardType: "picAndText",
                        pic: "../assets/images/learning/agaAvarianitImages/הרואין.jpg",
                        numList: "3",
                        li1: "חומר, לבן, למטה- הרואין",
                        li2: "קוק פרסי, קוק קריסטל- הרואין",
                        li3: "שורה- כמות הרחה של קוק או הרואין (מנה מסודרת בשורה להרחה)",
                    }
                ],
                "קטמין": [
                    {
                        cardType: "picAndText",
                        pic: "../assets/images/learning/agaAvarianitImages/קטמין.jpg",
                        numList: "2",
                        li1: "סוס- קטמין",
                        li2: "קיי- קטמין",
                    }
                ],
            },
        },
    },
    // שם נושא
    "נשק": {
        "icon":  "../assets/images/learning/agaAvarianitImages/אייקון כלי נשק.svg",
        // שאלות לנושא הזה
        "questionsExam": [
            {
                type: "multiple",
                question: "מה זה נשק מלוכלך?",
                ans1: "נשק ששימש לרצח ולכן לא ניתן להשתמש בו שוב",
                ans2: "נשק שלא ניקו אותו זמן רב",
                ans3: "נשק ששימש לרצח או שוד והוא עלול להיות ראייה",
                ans4: "נשק גנוב",
                correctAns: "ans3"
            },
            {
                type: "binary",
                sentence: "קרלו זה כלי נשק מאולתר...",
                trueOrFalse: true
            },
            {
                type: "binary",
                sentence: "זולה משמע מצבור נשק...",
                trueOrFalse: true
            },
        ],
        "questionsPractice": [
            {
                type: "multiple",
                question: "מה זה פקפק?",
                ans1: "מלשין",
                ans2: "כלי נשק קצר",
                ans3: "רימון המשמש לאימונים",
                ans4: "כינוי לסוחר סמים זוטר",
                correctAns: "ans3"
            },
            {
                type: "binary",
                sentence: "מאג משמע כלי נשק קצר...",
                trueOrFalse: false
            },
        ],
        "amountOfQuestions": 3,
        "learningContent": {
            // סוג הכרטיסייה
            "כלי נשק": {
                "כלי נשק": [
                    {
                        cardType: "picAndText",
                        pic: "../assets/images/learning/agaAvarianitImages/כלי נשק.jpg",
                        numList: "6",
                        li1: "ארון- רובה",
                        li2: "כלי- כלי קצר(אקדח)",
                        li3: "מפתח- אקדח",
                        li4: "מאג- מקלע בלגי הנפוץ בצהל",
                        li5: "אמרל- אמצעי לראיית לילה",
                        li6: "פקפק- רימון אימונים",
                    }
                ],
                "תחמושת": [
                    {
                        cardType: "picAndText",
                        pic: "../assets/images/learning/agaAvarianitImages/תחמושת.jpg",
                        numList: "3",
                        li1: "ברוס- קופסת ברזל ובתוכה תחמושת (כדורים, רימונים)",
                        li2: `5.56- כדורי תחמושת שאורך הקליע שלהם הינו 5.56, משמשים לנשקים מסוג M16, M4`,
                        li3: `7.62- כדורי תחמושת שאורך הקליע שלהם הינו 7.62, משמשים לנשק מסוג מאג.`,
                    }
                ],
                "כוונות": [
                    {
                        cardType: "picAndText",
                        pic: "../assets/images/learning/agaAvarianitImages/כוונות.jpg",
                        numList: "3",
                        li1: "כוונת טלסקופית- מערכת עדשות המגדילה את האובייקטים ומציבה צל במקום אליו מכוון הנשק.",
                        li2: `כוונת השלכה- כוונת המשלבת עדשות עם סיב אופטי המרכז אור לנקודה במרכז הכוונת אליה מכוון הנשק.`,
                        li3: `כוונת פיגיון- מערכת אלקטרואופטית הכוללת מחשב ירי שמשפרת באופן ניכר את דיוק הירי המבצעי.`,
                    }
                ],
            },
            "כללי": {
                "כללי": [
                    {
                        cardType: "picAndText",
                        pic: "../assets/images/learning/agaAvarianitImages/כללי.jpg",
                        numList: "3",
                        li1: "זולה- מצבור כלי נשק וסתר",
                        li2: `צ'- חותמת צבאית הנמצאת על חפצים ברשות צה"ל (מימיות, רימונים וכו')`,
                        li3: `מסט"ב- מספר סידורי הכתוב על הנשק (ת"ז של הנשק, לכל נשק יש מסט"ב שונה)`,
                    }
                ],
                "כינויים": [
                    {
                        cardType: "picAndText",
                        pic: "../assets/images/learning/agaAvarianitImages/כינויים.jpg",
                        numList: "3",
                        li1: "נשק מלוכלך- כלי ששימש לרצח או שוד והוא עלול להיות ראיה",
                        li2: `קרלו- כלי נשק מאולתר`,
                        li3: `בוכטה- ערימה של סחורת נשקים או כסף.`,
                    }
                ],
            },
        },
        
    },
    // שם נושא
    "כללי": {
        "icon":  "../assets/images/learning/agaAvarianitImages/אייקון כללי.svg",
        // שאלות לנושא הזה
        "questionsExam": [
            {
                type: "binary",
                sentence: "אחד ארבע ארבע זה עבריין...",
                trueOrFalse: false
            },
            {
                type: "binary",
                sentence: "אוסול משמע סופי או מוחלט...",
                trueOrFalse: true
            },
        ],
        "questionsPractice": [
            {
                type: "multiple",
                question: "מהו בלש?",
                ans1: "שוטרים כחולים",
                ans2: "שוטרים בלי מדים",
                ans3: "שוטרי סיור",
                ans4: "בלשים",
                correctAns: "ans2"
            },
            {
                type: "binary",
                sentence: "קליבר משמע עבריין זוטר...",
                trueOrFalse: false
            },
            {
                type: "binary",
                sentence: "אנטנה משמע מלשין...",
                trueOrFalse: true
            },
            {
                type: "multiple",
                question: "מהי פאלטה?",
                ans1: "הצדקה",
                ans2: "באלגן",
                ans3: "טעות",
                ans4: "הלשנה",
                correctAns: "ans3"
            },
            {
                type: "binary",
                sentence: "תסתכל על רמזורים משמע מישהו הלשין עלינו...",
                trueOrFalse: false
            },
        ],
        "learningContent": {
            // סוג הכרטיסייה
            "כינויים": {
                "שוטרים": [
                    {
                        cardType: "picAndText",
                        pic: "../assets/images/learning/agaAvarianitImages/שוטרים.jpg",
                        numList: "3",
                        li1: "בלש- שוטר ללא מדים",
                        li2: `כחולים- שוטרים רגילים במדים`,
                        li3: `סמוי- שוטר`,
                    }
                ],
                "עבריינים": [
                    {
                        cardType: "picAndText",
                        pic: "../assets/images/learning/agaAvarianitImages/עבריינים.jpg",
                        numList: "2",
                        li1: "חיילים- עבריינים שהם עושי דברים של עבריינים גדולים יותר, מבצעים עבורם שליחויות ועבודות מלוכלכות. עבריינים שוטרים שקשורים לבוסים שלהם ומקבלים מהם פקודות.",
                        li2: `קליבר- בוס גדול`,
                    }
                ],
                "מלשינים": [
                    {
                        cardType: "picAndText",
                        pic: "../assets/images/learning/agaAvarianitImages/מלשינים.jpg",
                        numList: "3",
                        li1: "אנטנה- מעביר למשטרה, מלשין",
                        li2: `אחד ארבע ארבע- מלשין`,
                        li3: `זמיר- משתף פעולה עם משטרה או סוהרים, מלשים`,
                        li3: `סנג'ר- שפוט א עבד`,
                    }
                ],
            },
            "שונות": {
                "פעולות": [
                    {
                        cardType: "listNumbers3",
                        numList: "7",
                        li1: "שיחק לי אותה בפסיכולוגיה- שעטות החקירה של המשטרה.",
                        li2: "אכילת תיק- לקחת על עצמך תיק של מישהו אחר.",
                        li3: "בלע אותה- אכל אותה, האמין למה שסיפרו לו, סידרו אותו.",
                        li4: "התלכלך עליי- הלשין עליי.",
                        li5: "לזמר- להתוודות",
                        li6: "לכלך- הלשין, רימה בכסף",
                        li7: "תסתכל על רמזורים- סופי או מוחלט, האמת, מה שיהיה",
                    }
                ],
                "מושגים": [
                    {
                        cardType: "listNumbers3",
                        numList: "9",
                        li1: "בלגן- מעורבת בפשע",
                        li2: "זה אוכל- זה מקובל, זה הולך",
                        li3: "זה דופק- זה מקובל, זה הולך",
                        li4: "בחוב או בקרדיט- על החשבון",
                        li5: "מגלגל- סיגריות או קוביות",
                        li6: "פאדי- באוויר, לא רציני",
                        li7: "פאלטה- טעות, תקלה",
                        li8: "שאני לא יראה אור- אם אני משקר",
                        li9: "בוררות- מעשה של עשיית דין בעולם התחתון, מינוי עבריין בכיר שיכריע בסכסוך בין עבריינים. לעיתים, הבוררות נעשית מחוץ לגבולות המדינה. כשמדובר בסכומים גדולים הבורר זוכה לדמי בוררות. הבוררות נעשית בהסכמת שני הצדדים והיא מחייבת אותם.",
                    }
                ],
            },
        },
        "amountOfQuestions": 2
    },
};



/********************************************************************************************************/
/********************************************************************************************************/
/********************************************************************************************************/
/*****  אובייקטים לפי סוג הכרטיסייה המכניסים את התוכן של כל כרטיסייה אל תוך הכרטיסייה  ********/

/**
 * @type {{[index: string]: {init: (card: HTMLElement, json: any) => void}}}
 */
let CARD_TYPES = {};

CARD_TYPES.text = {
    init(card, json) {
        card.querySelector(".content").innerHTML = json.content;
    }
}

CARD_TYPES.textTwoParagraphs = {
    init(card, json) {
        card.querySelector(".text1").innerHTML = json.text1;
        card.querySelector(".text2").innerHTML = json.text2;
    }
}

CARD_TYPES.textThreeParagraphs = {
    init(card, json) {
        card.querySelector(".text1").innerHTML = json.text1;
        card.querySelector(".text2").innerHTML = json.text2;
        card.querySelector(".text3").innerHTML = json.text3;
    }
}

CARD_TYPES.picAndText = {
    init(card, json) {
        card.querySelector(".pic").src = json.pic;
        // card.querySelector(".content").innerHTML = json.content;
        for (let num = 1; num <= Number(json.numList); num++) {
            card.querySelector(".list").innerHTML += `<li>${json["li"+num]}</li>`;
        }
    }
}
CARD_TYPES.twoPics = {
    init(card, json) {
        card.querySelector(".pic1").src = json.pic1;
        card.querySelector(".content1").innerHTML = json.content1;
        card.querySelector(".pic2").src = json.pic2;
        card.querySelector(".content2").innerHTML = json.content2;
    }
}
CARD_TYPES.video = {
    init(card, json) {
        card.querySelector(".video").src = json.video;
    }
}
CARD_TYPES.videoAndText = {
    init(card, json) {
        card.querySelector(".video").src = json.video;
        card.querySelector(".content").innerHTML = json.content;
    }
}
CARD_TYPES.pic_4titles_4text = {
    init(card, json) {
        card.querySelector(".pic").src = json.pic;
        card.querySelector(".sub-title1").innerHTML = json.subTitle1;
        card.querySelector(".content1").innerHTML = json.content1;
        card.querySelector(".sub-title2").innerHTML = json.subTitle2;
        card.querySelector(".content2").innerHTML = json.content2;
        card.querySelector(".sub-title3").innerHTML = json.subTitle3;
        card.querySelector(".content3").innerHTML = json.content3;
        card.querySelector(".sub-title4").innerHTML = json.subTitle4;
        card.querySelector(".content4").innerHTML = json.content4;
    }
}
CARD_TYPES._3titles_3text = {
    init(card, json) {
        card.querySelector(".sub-title1").innerHTML = json.subTitle1;
        card.querySelector(".content1").innerHTML = json.content1;
        card.querySelector(".sub-title2").innerHTML = json.subTitle2;
        card.querySelector(".content2").innerHTML = json.content2;
        card.querySelector(".sub-title3").innerHTML = json.subTitle3;
        card.querySelector(".content3").innerHTML = json.content3;
    }
}

CARD_TYPES.list3 = {
    init(card, json) {
        card.querySelector(".sub-title").innerHTML = json.subTitle;
        card.querySelector(".li1").innerHTML = json.li1;
        card.querySelector(".li2").innerHTML = json.li2;
        card.querySelector(".li3").innerHTML = json.li3;
    }
}

CARD_TYPES.listNumbers3 = {
    init(card, json) {
        for (let num = 1; num <= Number(json.numList); num++) {
            card.querySelector(".list").innerHTML += `<li>${json["li"+num]}</li>`;
        }
    }
}

// CARD_TYPES.youtubeVideo = {
//     init(card, json) {
//         card.querySelector(".video").innerHTML = json.video;
//     }
// }

