const {Client, LocalAuth} = require('whatsapp-web.js');

const one = {
    '*מחלקה 1*': [{
        name: 'מ"מ 1 - רון עשור',
        status: '✅',
        reason: undefined,
        isCommander: true,
    }, {
        name: 'סמל 1',
        status: '🔲',
        reason: undefined,
        isCommander: true,
    },
    ],
    'כתה א׳': [{
        name: 'מ״כ 1א - ניסים איטח',
        status: '✅',
        reason: undefined,
        isCommander: true,
    }, {
        name: 'שיר לין',
        status: '❌',
        reason: 'סיים שמ״פ'
    }, {
        name: 'יוסף נחום',
        status: '✅',
        reason: undefined
    }, {
        name: 'אריאל יוסף',
        status: '✅',
        reason: undefined
    }, {
        name: 'אבישי טיבר',
        status: '✅',
        reason: undefined
    }, {
        name: 'יובל שושני',
        status: '✅',
        reason: undefined
    }, {
        name: 'אזריו יעקובוב',
        status: '✅',
        reason: undefined
    },
    ],
    'כתה ב׳': [{
        name: 'מ"כ 1ב - אלירן אחונוב',
        status: '✅',
        reason: undefined,
        isCommander: true,
    }, {
        name: 'אבי שוורץ',
        status: '✅',
        reason: undefined
    }, {
        name: 'צבי קנטרוביץ',
        status: '✅',
        reason: undefined
    }, {
        name: 'מאיר חביב',
        status: '✅',
        reason: undefined
    }, {
        name: 'אושרי בן דוד',
        status: '✅',
        reason: undefined
    }, {
        name: 'נפתלי קדוש',
        status: '✅',
        reason: undefined
    }, {
        name: 'נתנאל לבהר',
        status: '✅',
        reason: undefined
    }, {
        name: 'נועם בניטה',
        status: '✅',
        reason: undefined
    },
    ],
    'כתה ג׳': [{
        name: 'מ״כ 1ג - חי נגאוקר',
        status: '✅',
        reason: undefined,
        isCommander: true,
    }, {
        name: 'משה גלבך',
        status: '✅',
        reason: undefined
    }, {
        name: 'איתי דוגמא',
        status: '✅',
        reason: undefined
    }, {
        name: 'מיכאל וינדסנט',
        status: '✅',
        reason: undefined
    }, {
        name: 'סלומון דנאו',
        status: '✅',
        reason: undefined
    }, {
        name: 'גרשון פימה',
        status: '✅',
        reason: undefined
    }, {
        name: 'רחמים כהן צמח',
        status: '✅',
        reason: undefined
    }, {
        name: 'מסרט טרפה',
        status: '✅',
        reason: undefined
    },
    ],
};

const two = {
    '*מחלקה 2*': [{
        name: 'מ"מ 2 - ויטלי לברוב',
        status: '✅',
        reason: undefined,
        isCommander: true,
    }, {
        name: 'סמל 2',
        status: '🔲',
        reason: undefined,
        isCommander: true,
    },
    ],
    'כתה א׳': [{
        name: 'מ"כ 2א - הירש גראשעס',
        status: '✅',
        reason: undefined,
        isCommander: true,
    }, {
        name: 'אליהו מהלא',
        status: '✅',
        reason: undefined
    }, {
        name: 'נדב כהן',
        status: '✅',
        reason: 'נוכח'
    }, {
        name: 'מאור פילורזדה',
        status: '❌',
        reason: 'סיים שמ״פ'
    }, {
        name: 'יהונתן גולדשטיין',
        status: '✅',
        reason: undefined
    }, {
        name: 'דיין שמלה',
        status: '✅',
        reason: undefined
    }, {
        name: 'צבי בילייס',
        status: '✅',
        reason: undefined
    }, {
        name: 'נתנאל גוהרי',
        status: '❌',
        reason: 'פציעה'
    }, {
        name: 'אביעד שבת',
        status: '✅',
        reason: undefined
    }
    ],
    'כתה ב׳': [{
        name: 'מ"כ 2ב - נתן חדד',
        status: '✅',
        reason: undefined,
        isCommander: true,
    }, {
        name: 'הראל ויצמן',
        status: '✅',
        reason: undefined
    }, , {
        name: 'נדב חדרי',
        status: '❌',
        reason: 'סיים שמ״פ'
    }, {
        name: 'בראל מעטוף',
        status: '✅',
        reason: undefined
    }, {
        name: 'אליה זכריה',
        status: '❌',
        reason: 'סיים שמ״פ'
    },{
        name: 'יוסף ג׳ורנו',
        status: '✅',
        reason: undefined
    }, {
        name: 'יונתן ויסמן',
        status: '✅',
        reason: 'מגיע היום',
    }
    ],
    'כתה ג׳': [{
        name: 'מ"כ 2ג - אביתר מאיר',
        status: '✅',
        reason: undefined,
        isCommander: true,
    }, {
        name: 'איתמר שמחוביץ',
        status: '✅',
        reason: undefined
    }, {
        name: 'יהודה קופרמן',
        status: '✅',
        reason: undefined
    }, {
        name: 'נאור אלקיים',
        status: '✅',
        reason: undefined
    }, {
        name: 'עידו טרבלסי',
        status: '❌',
        reason: 'סיים שמ״פ'
    }, {
        name: 'דוד זגורי',
        status: '✅',
        reason: undefined
    }, {
        name: 'שלמה אנברם',
        status: '✅',
        reason: undefined
    }, {
        name: 'עומרי מזרחי',
        status: '❌',
        reason: 'שחרור מפקד'
    }, {
        name: 'שלמה זלמן אוירבך',
        status: '❌',
        reason: 'חו״ל'
    }, {
        name: 'אופק אסייג',
        status: '❌',
        reason: 'סיים שמ״פ'
    }, {
        name: 'אבי אבן צור',
        status: '✅',
        reason: undefined,
    },
    ],
};

const three = {
    'מפקדים': [{
        name: 'מ"מ 3',
        status: '🔲',
        reason: undefined,
        isCommander: true,
    }, {
        name: 'סמל 3 - ישי בשירי',
        status: '✅',
        reason: undefined,
        isCommander: true,
    }],
    'כתה א׳': [{
        name: 'מ"כ 3א',
        status: '🔲',
        reason: undefined,
        isCommander: true,
    }, {
        name: 'גבריאל עזריה',
        status: '✅',
        reason: undefined
    }, {
        name: 'אביאל סמאי',
        status: '✅',
        reason: undefined
    }, {
        name: 'אלירן צרור',
        status: '✅',
        reason: undefined
    }, {
        name: 'זכרי בן שושן',
        status: '✅',
        reason: undefined
    }, {
        name: 'אלון ביסמוט',
        status: '✅',
        reason: undefined
    }, {
        name: 'בנימין לוי',
        status: '✅',
        reason: undefined
    },
    ],
    'כתה ב׳': [{
        name: 'מ"כ 3ב - שמאי אבליוטיס',
        status: '✅',
        reason: undefined,
        isCommander: true,
    }, {
        name: 'ניסן אלנקווה',
        status: '✅',
        reason: undefined
    }, {
        name: 'שמואל טלקר',
        status: '✅',
        reason: undefined
    }, {
        name: 'דביר סמדר',
        status: '✅',
        reason: undefined
    }, {
        name: 'חיים פרדה',
        status: '❌',
        reason: 'שבר ביד'
    }, {
        name: 'ג\'ונאס ביסמוט',
        status: '❌',
        reason: 'סיים שמ״פ'
    }, {
        name: 'מתניה לביא',
        status: '✅',
        reason: undefined
    }, {
        name: 'ליאור ברקבסקי',
        status: '❌',
        reason: 'נפקד'
    },{
        name: 'אליהו עזריאל',
        status: '✅',
        reason: undefined
    },
    ],
    'כתה ג׳': [{
        name: 'מ"כ 3ג - יוסף קמרליקר',
        status: '✅',
        reason: undefined,
        isCommander: true,
    }, {
        name: 'אליהו וסרמן',
        status: '✅',
        reason: undefined
    }, {
        name: 'אביאל מסיקה',
        status: '✅',
        reason: undefined
    }, {
        name: 'אליה יוחאי',
        status: '✅',
        reason: undefined
    }, {
        name: 'דוד דדון',
        status: '✅',
        reason: undefined
    }, {
        name: 'יעקב סופר',
        status: '✅',
        reason: undefined
    }, {
        name: 'אריאל מדאני',
        status: '✅',
        reason: undefined
    }, {
        name: 'ירין אשוש',
        status: '✅',
        reason: undefined
    }
    ],
};

const chapak = {
    'כח מ״פ': [{
        name: 'מ״פ - דובי יודקין',
        status: '❌',
        reason: 'רם 2',
        isCommander: true,
    }, {
        name: 'ע.מ״פ - אביאל דהאן',
        status: '❌',
        reason: 'סיים שמ״פ'
    }, {
        name: 'קשר מ״פ - איציק איפרגן',
        status: '✅',
        reason: undefined
    }, {
        name: 'חופ״ל - אליה הלוי',
        status: '✅',
        reason: undefined
    }, {
        name: 'נהג - צביקה שפיצר',
        status: '❌',
        reason: 'סיים שמ״פ'
    },{
        name: 'משה אלבז',
        status: '✅',
        reason: undefined
    },
    ],
    'כח סמ״פ': [{
        name: 'סמ״פ - ישי מעטוף',
        status: '✅',
        reason: undefined,
        isCommander: true,
    }, {
        name: 'קשר סמ״פ - אוראל פרסיה',
        status: '✅',
        reason: undefined
    }, {
        name: 'נהג - עומר עורקבי',
        status: '✅',
        reason: undefined
    },
    ],
};

const maflag = {
    'מפל״ג': [{
        name: 'רס״פ - נתנאל עמרם',
        status: '✅',
        reason: undefined,
        isCommander: true,
    }, {
        name: 'נתן וינרוב',
        status: '✅',
        reason: undefined
    }, {
        name: 'נאור זהבי',
        status: '✅',
        reason: undefined,
    }, {
        name: 'אלישע אבישר',
        status: '✅',
        reason: undefined
    }, {
        name: 'דוד מגנזי',
        status: '✅',
        reason: undefined
    },{
        name: 'יעקב עמאר',
        status: '✅',
        reason: undefined
    },{
        name: 'יוחאי מנחם מנדל',
        status: '✅',
        reason: undefined
    },
    ],
};

const mivtzaim = {
    'מבצעים': [{
        name: 'קמב"צ - אוריה צאיג',
        status: '✅',
        reason: undefined,
        isCommander: true,
    }, {
        name: 'מפקד - יאיר שקדי',
        status: '✅',
        reason: undefined,
        isCommander: true,
    }, {
        name: 'סמואל סהלו',
        status: '✅',
        reason: undefined
    }, {
        name: 'יצחק גרבי',
        status: '✅',
        reason: undefined
    },
    ],
};

const tipulMp = {
    'יורדים ממצבצ המחלקות ודו״ח 1': [{
        name: 'רזיאל אביטן',
        status: '❌',
        reason: undefined,
    }, {
        name: 'יוסי שוורץ',
        status: '❌',
        reason: undefined
    }, {
        name: 'אלעד טביב',
        status: '❌',
        reason: undefined
    }, {
        name: 'אהרון הרטמן',
        status: '❌',
        reason: undefined
    }, {
        name: 'איויו יורקו',
        status: '❌',
        reason: undefined
    }, {
        name: 'יהודה קורדובה',
        status: '❌',
        reason: undefined
    }, {
        name: 'ינון ורדי',
        status: '❌',
        reason: undefined
    }, {
        name: 'אביתר דרור',
        status: '❌',
        reason: undefined
    }, {
        name: 'שלומי נדב',
        status: '❌',
        reason: undefined
    }, {
        name: 'דוד חי סבאן',
        status: '❌',
        reason: undefined
    },
    ],
    'נפקדים ונשארים על דו״ח 1 מחלקות': [{
        name: 'נדב כהן',
        status: '❌',
        reason: undefined,
    }, {
        name: 'ליאור ברקבסקי',
        status: '❗',
        reason: 'נפקד'
    },
    ],
    'רם 2/נשרד הבטחון, נשארים על המסגרות': [{
        name: 'מ״פ - דובי יודקין',
        status: '❌',
        reason: undefined,
    }, {
        name: 'רפאל אקונינה',
        status: '❌',
        reason: undefined
    }, {
        name: 'חיים פרדה',
        status: '❌',
        reason: undefined
    }, {
        name: 'נתנאל גוהרי',
        status: '❌',
        reason: undefined
    },
    ],
    'פצועים שלא נמצאים במסרת דו״ח 1': [{
        name: 'ראובן עזריה - נגרע זמנית',
        status: '❌',
        reason: undefined,
    },
    ],
};

const nespachim = {
    'מסופחים שלא מזינים עליהם דוח': [{
        name: 'סרגי וולדרסקי',
        status: '✅',
        reason: undefined
    }, {
        name: 'נמרוד אלמיש',
        status: '✅',
        reason: undefined
    },
    ],
};

function addShape(output, shape) {
    Object.entries(shape).forEach(([key, value]) => {
        output.push(key);
        value.forEach(({name, status, reason}) => output.push(`${status} ${name} ${!!reason ? `- ${reason}` : ''}`));
        output.push('');
    });
}

function addSummaryShape(output, current, actual) {
    output.push('מצבה - ' + current);
    output.push('נוכחים - ' + actual);
}

function addSummaryShape1(output, shape, current, actual) {
    output.push(`⚰️מצבה ${shape} - ${current}`);
    output.push(`✅נוכחים ${shape} - ${actual}`);
}

function addLastSummaryShape(output, current, actual) {
    output.push(`⚰️סה״כ מצבה פלוגה ${current} = ${eval(current)}`);
    output.push(`✅סה״כ נוכחים פלוגה ${actual} = ${eval(actual)}`);
}

function addBreak(output) {
    output.push('');
    output.push('🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱\n');
    output.push('');
}

function summaryShape(shape, filterFunc) {
    let commanderCount = 0;
    let soldierCount = 0;
    Object.entries(shape)
        .flatMap(entry => entry[1])
        .filter(filterFunc)
        .forEach(val => {
            if (!!val.isCommander) {
                commanderCount++;
            } else {
                soldierCount++;
            }
        })
    return `${commanderCount} + ${soldierCount}`;
}

function mergeJsonObjects(jsonObjects) {
    const result = {};
    jsonObjects.forEach(jsonObj => {
        for (const [key, value] of Object.entries(jsonObj)) {
            if (result[key]) {
                result[key] = result[key].concat(value);
            } else {
                result[key] = value;
            }
        }
    });

    return result;
}

const availableFilter = ({status}) => status === '✅';
const matzevaFilter = ({status}) => status !== '🔲';
const vacationFilter = ({reason}) => reason === 'חופשה';
const sickFilter = ({reason}) => reason === 'מחלה';
const nifkadFilter = ({reason}) => reason === 'נפקד';
const ramFilter = ({reason}) => reason === 'רם 2';
const holFilter = ({reason}) => reason === 'חו״ל';

function generateReport() {
    const output = [];
    const summaryOutput = [];
    addShape(output, one);
    addSummaryShape(output, summaryShape(one, matzevaFilter), summaryShape(one, availableFilter))
    addBreak(output)
    addShape(output, two);
    addSummaryShape(output, summaryShape(two, matzevaFilter), summaryShape(two, availableFilter));
    addBreak(output)
    addShape(output, three);
    addSummaryShape(output, summaryShape(three, matzevaFilter), summaryShape(three, availableFilter));
    addBreak(output)
    output.push('*חפ״קים*')
    addShape(output, chapak);
    addSummaryShape(output, summaryShape(chapak, matzevaFilter), summaryShape(chapak, availableFilter));
    addBreak(output)
    addShape(output, maflag);
    addSummaryShape(output, summaryShape(maflag, matzevaFilter), summaryShape(maflag, availableFilter));
    addBreak(output)
    addShape(output, mivtzaim);
    addSummaryShape(output, summaryShape(mivtzaim, matzevaFilter), summaryShape(mivtzaim, availableFilter));
    addBreak(output)
    //addShape(output, nespachim);
    //addBreak(output)

    function summaryMatzeva(output) {
        output.push('*סיכום מצבה*')
        addSummaryShape1(output, 'מחלקה 1', summaryShape(one, matzevaFilter), summaryShape(one, availableFilter));
        addSummaryShape1(output, 'מחלקה 2', summaryShape(two, matzevaFilter), summaryShape(two, availableFilter));
        addSummaryShape1(output, 'מחלקה 3', summaryShape(three, matzevaFilter), summaryShape(three, availableFilter));
        addSummaryShape1(output, 'חפ״ק', summaryShape(chapak, matzevaFilter), summaryShape(chapak, availableFilter));
        addSummaryShape1(output, 'מפל״ג', summaryShape(maflag, matzevaFilter), summaryShape(maflag, availableFilter));
        addSummaryShape1(output, 'מבצעים', summaryShape(mivtzaim, matzevaFilter), summaryShape(mivtzaim, availableFilter));
        const allValues = mergeJsonObjects([one, two, three, chapak, maflag, mivtzaim]);
        addLastSummaryShape(output, summaryShape(allValues, matzevaFilter), summaryShape(allValues, availableFilter));
        output.push('פירוט');
        output.push(`חופשה - ${summaryShape(allValues, vacationFilter)}`);
        output.push(`מחלה - ${summaryShape(allValues, sickFilter)}`);
        output.push(`נפקדים - ${summaryShape(allValues, nifkadFilter)}`);
        output.push(`רם 2 - ${summaryShape(allValues, ramFilter)}`);
        output.push(`חו״ל - ${summaryShape(allValues, holFilter)}`);
        output.push(`+ 2 נספחים`);
    }

    summaryMatzeva(output);
    summaryMatzeva(summaryOutput);
    //output.push('');
    //output.push('❌❌❌❌❌❌❌❌❌');
    //output.push('');
    //output.push('*טיפול מ״פ*');
    //addShape(output, tipulMp);
    console.log(output.join('\n'));
    return [output.join('\n'), summaryOutput.join('\n')];
}

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: false
    }
});

client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
});

client.on('ready', async () => {
    console.log('Client is ready!');
    //client.sendMessage('972545866235@c.us', generateReport())
    generateReport().forEach(val => client.sendMessage('120363303081578499@g.us', val)
        .catch(err => console.error(`error for ${val}`, err)));
})

client.on('message', msg => {
    if (msg.body == '!ping') {
        msg.reply('pong');
    }
});

console.log('Starting the app');
client.initialize();








