(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Project/NewTaskry/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/en-US/_lib/formatDistance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDistance",
    ()=>formatDistance
]);
const formatDistanceLocale = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
};
const formatDistance = (token, count, options)=>{
    let result;
    const tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
        result = tokenValue;
    } else if (count === 1) {
        result = tokenValue.one;
    } else {
        result = tokenValue.other.replace("{{count}}", count.toString());
    }
    if (options?.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "in " + result;
        } else {
            return result + " ago";
        }
    }
    return result;
};
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildFormatLongFn",
    ()=>buildFormatLongFn
]);
function buildFormatLongFn(args) {
    return (options = {})=>{
        // TODO: Remove String()
        const width = options.width ? String(options.width) : args.defaultWidth;
        const format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/en-US/_lib/formatLong.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatLong",
    ()=>formatLong
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-client] (ecmascript)");
;
const dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
};
const timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
const dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
const formatLong = {
    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/en-US/_lib/formatRelative.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatRelative",
    ()=>formatRelative
]);
const formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
};
const formatRelative = (token, _date, _baseDate, _options)=>formatRelativeLocale[token];
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/_lib/buildLocalizeFn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */ /**
 * The map of localized values for each width.
 */ /**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */ /**
 * Converts the unit value to the tuple of values.
 */ /**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */ /**
 * The tuple of localized quarter values. The first element represents Q1.
 */ /**
 * The tuple of localized day values. The first element represents Sunday.
 */ /**
 * The tuple of localized month values. The first element represents January.
 */ __turbopack_context__.s([
    "buildLocalizeFn",
    ()=>buildLocalizeFn
]);
function buildLocalizeFn(args) {
    return (value, options)=>{
        const context = options?.context ? String(options.context) : "standalone";
        let valuesArray;
        if (context === "formatting" && args.formattingValues) {
            const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            const width = options?.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            const defaultWidth = args.defaultWidth;
            const width = options?.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[width] || args.values[defaultWidth];
        }
        const index = args.argumentCallback ? args.argumentCallback(value) : value;
        // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
        return valuesArray[index];
    };
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/en-US/_lib/localize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "localize",
    ()=>localize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/_lib/buildLocalizeFn.js [app-client] (ecmascript)");
;
const eraValues = {
    narrow: [
        "B",
        "A"
    ],
    abbreviated: [
        "BC",
        "AD"
    ],
    wide: [
        "Before Christ",
        "Anno Domini"
    ]
};
const quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    wide: [
        "1st quarter",
        "2nd quarter",
        "3rd quarter",
        "4th quarter"
    ]
};
// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
    narrow: [
        "J",
        "F",
        "M",
        "A",
        "M",
        "J",
        "J",
        "A",
        "S",
        "O",
        "N",
        "D"
    ],
    abbreviated: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    wide: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
};
const dayValues = {
    narrow: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],
    short: [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ],
    abbreviated: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    wide: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
};
const dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
};
const formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
};
const ordinalNumber = (dirtyNumber, _options)=>{
    const number = Number(dirtyNumber);
    // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.
    const rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
        switch(rem100 % 10){
            case 1:
                return number + "st";
            case 2:
                return number + "nd";
            case 3:
                return number + "rd";
        }
    }
    return number + "th";
};
const localize = {
    ordinalNumber,
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/_lib/buildMatchFn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildMatchFn",
    ()=>buildMatchFn
]);
function buildMatchFn(args) {
    return (string, options = {})=>{
        const width = options.width;
        const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        const matchResult = string.match(matchPattern);
        if (!matchResult) {
            return null;
        }
        const matchedString = matchResult[0];
        const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern)=>pattern.test(matchedString)) : findKey(parsePatterns, (pattern)=>pattern.test(matchedString));
        let value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
function findKey(object, predicate) {
    for(const key in object){
        if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
            return key;
        }
    }
    return undefined;
}
function findIndex(array, predicate) {
    for(let key = 0; key < array.length; key++){
        if (predicate(array[key])) {
            return key;
        }
    }
    return undefined;
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildMatchPatternFn",
    ()=>buildMatchPatternFn
]);
function buildMatchPatternFn(args) {
    return (string, options = {})=>{
        const matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        const matchedString = matchResult[0];
        const parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        // [TODO] I challenge you to fix the type
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/en-US/_lib/match.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "match",
    ()=>match
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/_lib/buildMatchFn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js [app-client] (ecmascript)");
;
;
const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
const parseEraPatterns = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
const parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
const matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
const matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const parseDayPatterns = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
};
const matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
const match = {
    ordinalNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchPatternFn"])({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value, 10)
    }),
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/en-US.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "enUS",
    ()=>enUS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/en-US/_lib/formatDistance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/en-US/_lib/formatLong.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/en-US/_lib/formatRelative.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/en-US/_lib/localize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/en-US/_lib/match.js [app-client] (ecmascript)");
;
;
;
;
;
const enUS = {
    code: "en-US",
    formatDistance: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDistance"],
    formatLong: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLong"],
    formatRelative: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRelative"],
    localize: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localize"],
    match: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"],
    options: {
        weekStartsOn: 0 /* Sunday */ ,
        firstWeekContainsDate: 1
    }
};
const __TURBOPACK__default__export__ = enUS;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/en-US.js [app-client] (ecmascript) <export enUS as defaultLocale>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultLocale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enUS"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/en-US.js [app-client] (ecmascript)");
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/_lib/defaultOptions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultOptions",
    ()=>getDefaultOptions,
    "setDefaultOptions",
    ()=>setDefaultOptions
]);
let defaultOptions = {};
function getDefaultOptions() {
    return defaultOptions;
}
function setDefaultOptions(newOptions) {
    defaultOptions = newOptions;
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */ /**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */ __turbopack_context__.s([
    "constructFromSymbol",
    ()=>constructFromSymbol,
    "daysInWeek",
    ()=>daysInWeek,
    "daysInYear",
    ()=>daysInYear,
    "maxTime",
    ()=>maxTime,
    "millisecondsInDay",
    ()=>millisecondsInDay,
    "millisecondsInHour",
    ()=>millisecondsInHour,
    "millisecondsInMinute",
    ()=>millisecondsInMinute,
    "millisecondsInSecond",
    ()=>millisecondsInSecond,
    "millisecondsInWeek",
    ()=>millisecondsInWeek,
    "minTime",
    ()=>minTime,
    "minutesInDay",
    ()=>minutesInDay,
    "minutesInHour",
    ()=>minutesInHour,
    "minutesInMonth",
    ()=>minutesInMonth,
    "minutesInYear",
    ()=>minutesInYear,
    "monthsInQuarter",
    ()=>monthsInQuarter,
    "monthsInYear",
    ()=>monthsInYear,
    "quartersInYear",
    ()=>quartersInYear,
    "secondsInDay",
    ()=>secondsInDay,
    "secondsInHour",
    ()=>secondsInHour,
    "secondsInMinute",
    ()=>secondsInMinute,
    "secondsInMonth",
    ()=>secondsInMonth,
    "secondsInQuarter",
    ()=>secondsInQuarter,
    "secondsInWeek",
    ()=>secondsInWeek,
    "secondsInYear",
    ()=>secondsInYear
]);
const daysInWeek = 7;
const daysInYear = 365.2425;
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
const minTime = -maxTime;
const millisecondsInWeek = 604800000;
const millisecondsInDay = 86400000;
const millisecondsInMinute = 60000;
const millisecondsInHour = 3600000;
const millisecondsInSecond = 1000;
const minutesInYear = 525600;
const minutesInMonth = 43200;
const minutesInDay = 1440;
const minutesInHour = 60;
const monthsInQuarter = 3;
const monthsInYear = 12;
const quartersInYear = 4;
const secondsInHour = 3600;
const secondsInMinute = 60;
const secondsInDay = secondsInHour * 24;
const secondsInWeek = secondsInDay * 7;
const secondsInYear = secondsInDay * daysInYear;
const secondsInMonth = secondsInYear / 12;
const secondsInQuarter = secondsInMonth * 3;
const constructFromSymbol = Symbol.for("constructDateFrom");
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "constructFrom",
    ()=>constructFrom,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/constants.js [app-client] (ecmascript)");
;
function constructFrom(date, value) {
    if (typeof date === "function") return date(value);
    if (date && typeof date === "object" && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFromSymbol"] in date) return date[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFromSymbol"]](value);
    if (date instanceof Date) return new date.constructor(value);
    return new Date(value);
}
const __TURBOPACK__default__export__ = constructFrom;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/toDate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "toDate",
    ()=>toDate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
;
function toDate(argument, context) {
    // [TODO] Get rid of `toDate` or `constructFrom`?
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(context || argument, argument);
}
const __TURBOPACK__default__export__ = toDate;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTimezoneOffsetInMilliseconds",
    ()=>getTimezoneOffsetInMilliseconds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
function getTimezoneOffsetInMilliseconds(date) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date);
    const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
    utcDate.setUTCFullYear(_date.getFullYear());
    return +date - +utcDate;
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/_lib/normalizeDates.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeDates",
    ()=>normalizeDates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
;
function normalizeDates(context, ...dates) {
    const normalize = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"].bind(null, context || dates.find((date)=>typeof date === "object"));
    return dates.map(normalize);
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/startOfDay.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfDay",
    ()=>startOfDay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
function startOfDay(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
const __TURBOPACK__default__export__ = startOfDay;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/differenceInCalendarDays.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInCalendarDays",
    ()=>differenceInCalendarDays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/_lib/normalizeDates.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/startOfDay.js [app-client] (ecmascript)");
;
;
;
;
function differenceInCalendarDays(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeDates"])(options?.in, laterDate, earlierDate);
    const laterStartOfDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(laterDate_);
    const earlierStartOfDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(earlierDate_);
    const laterTimestamp = +laterStartOfDay - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(laterStartOfDay);
    const earlierTimestamp = +earlierStartOfDay - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(earlierStartOfDay);
    // Round the number of days to the nearest integer because the number of
    // milliseconds in a day is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round((laterTimestamp - earlierTimestamp) / __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsInDay"]);
}
const __TURBOPACK__default__export__ = differenceInCalendarDays;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/startOfYear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfYear",
    ()=>startOfYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
function startOfYear(date, options) {
    const date_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    date_.setFullYear(date_.getFullYear(), 0, 1);
    date_.setHours(0, 0, 0, 0);
    return date_;
}
const __TURBOPACK__default__export__ = startOfYear;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/getDayOfYear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getDayOfYear",
    ()=>getDayOfYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/differenceInCalendarDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/startOfYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
;
function getDayOfYear(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(_date, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfYear"])(_date));
    const dayOfYear = diff + 1;
    return dayOfYear;
}
const __TURBOPACK__default__export__ = getDayOfYear;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfWeek",
    ()=>startOfWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/_lib/defaultOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
function startOfWeek(date, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const day = _date.getDay();
    const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    _date.setDate(_date.getDate() - diff);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
const __TURBOPACK__default__export__ = startOfWeek;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/startOfISOWeek.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfISOWeek",
    ()=>startOfISOWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)");
;
function startOfISOWeek(date, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(date, {
        ...options,
        weekStartsOn: 1
    });
}
const __TURBOPACK__default__export__ = startOfISOWeek;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/getISOWeekYear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getISOWeekYear",
    ()=>getISOWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/startOfISOWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
;
function getISOWeekYear(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const year = _date.getFullYear();
    const fourthOfJanuaryOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(_date, 0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfISOWeek"])(fourthOfJanuaryOfNextYear);
    const fourthOfJanuaryOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(_date, 0);
    fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfISOWeek"])(fourthOfJanuaryOfThisYear);
    if (_date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
    } else if (_date.getTime() >= startOfThisYear.getTime()) {
        return year;
    } else {
        return year - 1;
    }
}
const __TURBOPACK__default__export__ = getISOWeekYear;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/startOfISOWeekYear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfISOWeekYear",
    ()=>startOfISOWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/getISOWeekYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/startOfISOWeek.js [app-client] (ecmascript)");
;
;
;
function startOfISOWeekYear(date, options) {
    const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getISOWeekYear"])(date, options);
    const fourthOfJanuary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    fourthOfJanuary.setFullYear(year, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfISOWeek"])(fourthOfJanuary);
}
const __TURBOPACK__default__export__ = startOfISOWeekYear;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/getISOWeek.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getISOWeek",
    ()=>getISOWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/startOfISOWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/startOfISOWeekYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
;
;
function getISOWeek(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const diff = +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfISOWeek"])(_date) - +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfISOWeekYear"])(_date);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsInWeek"]) + 1;
}
const __TURBOPACK__default__export__ = getISOWeek;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/getWeekYear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getWeekYear",
    ()=>getWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/_lib/defaultOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
;
;
function getWeekYear(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const year = _date.getFullYear();
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const firstWeekOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(firstWeekOfNextYear, options);
    const firstWeekOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(firstWeekOfThisYear, options);
    if (+_date >= +startOfNextYear) {
        return year + 1;
    } else if (+_date >= +startOfThisYear) {
        return year;
    } else {
        return year - 1;
    }
}
const __TURBOPACK__default__export__ = getWeekYear;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/startOfWeekYear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfWeekYear",
    ()=>startOfWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/_lib/defaultOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/getWeekYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)");
;
;
;
;
function startOfWeekYear(date, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeekYear"])(date, options);
    const firstWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    firstWeek.setFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setHours(0, 0, 0, 0);
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(firstWeek, options);
    return _date;
}
const __TURBOPACK__default__export__ = startOfWeekYear;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/getWeek.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getWeek",
    ()=>getWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/startOfWeekYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
;
;
function getWeek(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const diff = +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(_date, options) - +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeekYear"])(_date, options);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsInWeek"]) + 1;
}
const __TURBOPACK__default__export__ = getWeek;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/_lib/addLeadingZeros.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addLeadingZeros",
    ()=>addLeadingZeros
]);
function addLeadingZeros(number, targetLength) {
    const sign = number < 0 ? "-" : "";
    const output = Math.abs(number).toString().padStart(targetLength, "0");
    return sign + output;
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/_lib/format/lightFormatters.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lightFormatters",
    ()=>lightFormatters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/_lib/addLeadingZeros.js [app-client] (ecmascript)");
;
const lightFormatters = {
    // Year
    y (date, token) {
        // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
        // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
        // |----------|-------|----|-------|-------|-------|
        // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
        // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
        // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
        // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
        // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
        const signedYear = date.getFullYear();
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        const year = signedYear > 0 ? signedYear : 1 - signedYear;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(token === "yy" ? year % 100 : year, token.length);
    },
    // Month
    M (date, token) {
        const month = date.getMonth();
        return token === "M" ? String(month + 1) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(month + 1, 2);
    },
    // Day of the month
    d (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getDate(), token.length);
    },
    // AM or PM
    a (date, token) {
        const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return dayPeriodEnumValue.toUpperCase();
            case "aaa":
                return dayPeriodEnumValue;
            case "aaaaa":
                return dayPeriodEnumValue[0];
            case "aaaa":
            default:
                return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
        }
    },
    // Hour [1-12]
    h (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getHours(), token.length);
    },
    // Minute
    m (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getMinutes(), token.length);
    },
    // Second
    s (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getSeconds(), token.length);
    },
    // Fraction of second
    S (date, token) {
        const numberOfDigits = token.length;
        const milliseconds = date.getMilliseconds();
        const fractionalSeconds = Math.trunc(milliseconds * Math.pow(10, numberOfDigits - 3));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(fractionalSeconds, token.length);
    }
};
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/_lib/format/formatters.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatters",
    ()=>formatters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$getDayOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/getDayOfYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$getISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/getISOWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/getISOWeekYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$getWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/getWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/getWeekYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/_lib/addLeadingZeros.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/_lib/format/lightFormatters.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const dayPeriodEnum = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
};
const formatters = {
    // Era
    G: function(date, token, localize) {
        const era = date.getFullYear() > 0 ? 1 : 0;
        switch(token){
            // AD, BC
            case "G":
            case "GG":
            case "GGG":
                return localize.era(era, {
                    width: "abbreviated"
                });
            // A, B
            case "GGGGG":
                return localize.era(era, {
                    width: "narrow"
                });
            // Anno Domini, Before Christ
            case "GGGG":
            default:
                return localize.era(era, {
                    width: "wide"
                });
        }
    },
    // Year
    y: function(date, token, localize) {
        // Ordinal number
        if (token === "yo") {
            const signedYear = date.getFullYear();
            // Returns 1 for 1 BC (which is year 0 in JavaScript)
            const year = signedYear > 0 ? signedYear : 1 - signedYear;
            return localize.ordinalNumber(year, {
                unit: "year"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFormatters"].y(date, token);
    },
    // Local week-numbering year
    Y: function(date, token, localize, options) {
        const signedWeekYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeekYear"])(date, options);
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
        // Two digit year
        if (token === "YY") {
            const twoDigitYear = weekYear % 100;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(twoDigitYear, 2);
        }
        // Ordinal number
        if (token === "Yo") {
            return localize.ordinalNumber(weekYear, {
                unit: "year"
            });
        }
        // Padding
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function(date, token) {
        const isoWeekYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getISOWeekYear"])(date);
        // Padding
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function(date, token) {
        const year = date.getFullYear();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(year, token.length);
    },
    // Quarter
    Q: function(date, token, localize) {
        const quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "Q":
                return String(quarter);
            // 01, 02, 03, 04
            case "QQ":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "Qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "QQQ":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "QQQQQ":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "formatting"
                });
            // 1st quarter, 2nd quarter, ...
            case "QQQQ":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone quarter
    q: function(date, token, localize) {
        const quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "q":
                return String(quarter);
            // 01, 02, 03, 04
            case "qq":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "qqq":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "qqqqq":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "standalone"
                });
            // 1st quarter, 2nd quarter, ...
            case "qqqq":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Month
    M: function(date, token, localize) {
        const month = date.getMonth();
        switch(token){
            case "M":
            case "MM":
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFormatters"].M(date, token);
            // 1st, 2nd, ..., 12th
            case "Mo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "MMM":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // J, F, ..., D
            case "MMMMM":
                return localize.month(month, {
                    width: "narrow",
                    context: "formatting"
                });
            // January, February, ..., December
            case "MMMM":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone month
    L: function(date, token, localize) {
        const month = date.getMonth();
        switch(token){
            // 1, 2, ..., 12
            case "L":
                return String(month + 1);
            // 01, 02, ..., 12
            case "LL":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(month + 1, 2);
            // 1st, 2nd, ..., 12th
            case "Lo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "LLL":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // J, F, ..., D
            case "LLLLL":
                return localize.month(month, {
                    width: "narrow",
                    context: "standalone"
                });
            // January, February, ..., December
            case "LLLL":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Local week of year
    w: function(date, token, localize, options) {
        const week = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$getWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeek"])(date, options);
        if (token === "wo") {
            return localize.ordinalNumber(week, {
                unit: "week"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(week, token.length);
    },
    // ISO week of year
    I: function(date, token, localize) {
        const isoWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$getISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getISOWeek"])(date);
        if (token === "Io") {
            return localize.ordinalNumber(isoWeek, {
                unit: "week"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoWeek, token.length);
    },
    // Day of the month
    d: function(date, token, localize) {
        if (token === "do") {
            return localize.ordinalNumber(date.getDate(), {
                unit: "date"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFormatters"].d(date, token);
    },
    // Day of year
    D: function(date, token, localize) {
        const dayOfYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$getDayOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDayOfYear"])(date);
        if (token === "Do") {
            return localize.ordinalNumber(dayOfYear, {
                unit: "dayOfYear"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(dayOfYear, token.length);
    },
    // Day of week
    E: function(date, token, localize) {
        const dayOfWeek = date.getDay();
        switch(token){
            // Tue
            case "E":
            case "EE":
            case "EEE":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "EEEEE":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "EEEEEE":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "EEEE":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Local day of week
    e: function(date, token, localize, options) {
        const dayOfWeek = date.getDay();
        const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (Nth day of week with current locale or weekStartsOn)
            case "e":
                return String(localDayOfWeek);
            // Padded numerical value
            case "ee":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(localDayOfWeek, 2);
            // 1st, 2nd, ..., 7th
            case "eo":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "eee":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "eeeee":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "eeeeee":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "eeee":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone local day of week
    c: function(date, token, localize, options) {
        const dayOfWeek = date.getDay();
        const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (same as in `e`)
            case "c":
                return String(localDayOfWeek);
            // Padded numerical value
            case "cc":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(localDayOfWeek, token.length);
            // 1st, 2nd, ..., 7th
            case "co":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "ccc":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // T
            case "ccccc":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "standalone"
                });
            // Tu
            case "cccccc":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "standalone"
                });
            // Tuesday
            case "cccc":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // ISO day of week
    i: function(date, token, localize) {
        const dayOfWeek = date.getDay();
        const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch(token){
            // 2
            case "i":
                return String(isoDayOfWeek);
            // 02
            case "ii":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoDayOfWeek, token.length);
            // 2nd
            case "io":
                return localize.ordinalNumber(isoDayOfWeek, {
                    unit: "day"
                });
            // Tue
            case "iii":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "iiiii":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "iiiiii":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "iiii":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM or PM
    a: function(date, token, localize) {
        const hours = date.getHours();
        const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "aaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "aaaaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaa":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM, PM, midnight, noon
    b: function(date, token, localize) {
        const hours = date.getHours();
        let dayPeriodEnumValue;
        if (hours === 12) {
            dayPeriodEnumValue = dayPeriodEnum.noon;
        } else if (hours === 0) {
            dayPeriodEnumValue = dayPeriodEnum.midnight;
        } else {
            dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        }
        switch(token){
            case "b":
            case "bb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "bbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "bbbbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbb":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function(date, token, localize) {
        const hours = date.getHours();
        let dayPeriodEnumValue;
        if (hours >= 17) {
            dayPeriodEnumValue = dayPeriodEnum.evening;
        } else if (hours >= 12) {
            dayPeriodEnumValue = dayPeriodEnum.afternoon;
        } else if (hours >= 4) {
            dayPeriodEnumValue = dayPeriodEnum.morning;
        } else {
            dayPeriodEnumValue = dayPeriodEnum.night;
        }
        switch(token){
            case "B":
            case "BB":
            case "BBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "BBBBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBB":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Hour [1-12]
    h: function(date, token, localize) {
        if (token === "ho") {
            let hours = date.getHours() % 12;
            if (hours === 0) hours = 12;
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFormatters"].h(date, token);
    },
    // Hour [0-23]
    H: function(date, token, localize) {
        if (token === "Ho") {
            return localize.ordinalNumber(date.getHours(), {
                unit: "hour"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFormatters"].H(date, token);
    },
    // Hour [0-11]
    K: function(date, token, localize) {
        const hours = date.getHours() % 12;
        if (token === "Ko") {
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(hours, token.length);
    },
    // Hour [1-24]
    k: function(date, token, localize) {
        let hours = date.getHours();
        if (hours === 0) hours = 24;
        if (token === "ko") {
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(hours, token.length);
    },
    // Minute
    m: function(date, token, localize) {
        if (token === "mo") {
            return localize.ordinalNumber(date.getMinutes(), {
                unit: "minute"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFormatters"].m(date, token);
    },
    // Second
    s: function(date, token, localize) {
        if (token === "so") {
            return localize.ordinalNumber(date.getSeconds(), {
                unit: "second"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFormatters"].s(date, token);
    },
    // Fraction of second
    S: function(date, token) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFormatters"].S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        if (timezoneOffset === 0) {
            return "Z";
        }
        switch(token){
            // Hours and optional minutes
            case "X":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XX`
            case "XXXX":
            case "XX":
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XXX`
            case "XXXXX":
            case "XXX":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Hours and optional minutes
            case "x":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xx`
            case "xxxx":
            case "xx":
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xxx`
            case "xxxxx":
            case "xxx":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (GMT)
    O: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Short
            case "O":
            case "OO":
            case "OOO":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "OOOO":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (specific non-location)
    z: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Short
            case "z":
            case "zz":
            case "zzz":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "zzzz":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Seconds timestamp
    t: function(date, token, _localize) {
        const timestamp = Math.trunc(+date / 1000);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function(date, token, _localize) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(+date, token.length);
    }
};
function formatTimezoneShort(offset, delimiter = "") {
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = Math.trunc(absOffset / 60);
    const minutes = absOffset % 60;
    if (minutes === 0) {
        return sign + String(hours);
    }
    return sign + String(hours) + delimiter + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
    if (offset % 60 === 0) {
        const sign = offset > 0 ? "-" : "+";
        return sign + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(Math.trunc(absOffset / 60), 2);
    const minutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/_lib/format/longFormatters.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "longFormatters",
    ()=>longFormatters
]);
const dateLongFormatter = (pattern, formatLong)=>{
    switch(pattern){
        case "P":
            return formatLong.date({
                width: "short"
            });
        case "PP":
            return formatLong.date({
                width: "medium"
            });
        case "PPP":
            return formatLong.date({
                width: "long"
            });
        case "PPPP":
        default:
            return formatLong.date({
                width: "full"
            });
    }
};
const timeLongFormatter = (pattern, formatLong)=>{
    switch(pattern){
        case "p":
            return formatLong.time({
                width: "short"
            });
        case "pp":
            return formatLong.time({
                width: "medium"
            });
        case "ppp":
            return formatLong.time({
                width: "long"
            });
        case "pppp":
        default:
            return formatLong.time({
                width: "full"
            });
    }
};
const dateTimeLongFormatter = (pattern, formatLong)=>{
    const matchResult = pattern.match(/(P+)(p+)?/) || [];
    const datePattern = matchResult[1];
    const timePattern = matchResult[2];
    if (!timePattern) {
        return dateLongFormatter(pattern, formatLong);
    }
    let dateTimeFormat;
    switch(datePattern){
        case "P":
            dateTimeFormat = formatLong.dateTime({
                width: "short"
            });
            break;
        case "PP":
            dateTimeFormat = formatLong.dateTime({
                width: "medium"
            });
            break;
        case "PPP":
            dateTimeFormat = formatLong.dateTime({
                width: "long"
            });
            break;
        case "PPPP":
        default:
            dateTimeFormat = formatLong.dateTime({
                width: "full"
            });
            break;
    }
    return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};
const longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
};
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/_lib/protectedTokens.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isProtectedDayOfYearToken",
    ()=>isProtectedDayOfYearToken,
    "isProtectedWeekYearToken",
    ()=>isProtectedWeekYearToken,
    "warnOrThrowProtectedError",
    ()=>warnOrThrowProtectedError
]);
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;
const throwTokens = [
    "D",
    "DD",
    "YY",
    "YYYY"
];
function isProtectedDayOfYearToken(token) {
    return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
    return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format, input) {
    const _message = message(token, format, input);
    console.warn(_message);
    if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format, input) {
    const subject = token[0] === "Y" ? "years" : "days of the month";
    return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/isDate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isDate",
    ()=>isDate
]);
function isDate(value) {
    return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
const __TURBOPACK__default__export__ = isDate;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/isValid.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isValid",
    ()=>isValid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/isDate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
function isValid(date) {
    return !(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDate"])(date) && typeof date !== "number" || isNaN(+(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date)));
}
const __TURBOPACK__default__export__ = isValid;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "format",
    ()=>format,
    "formatDate",
    ()=>format
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/en-US.js [app-client] (ecmascript) <export enUS as defaultLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/_lib/defaultOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/_lib/format/formatters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$longFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/_lib/format/longFormatters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/_lib/protectedTokens.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/isValid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;
;
function format(date, formatStr, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const locale = options?.locale ?? defaultOptions.locale ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__["defaultLocale"];
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const originalDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValid"])(originalDate)) {
        throw new RangeError("Invalid time value");
    }
    let parts = formatStr.match(longFormattingTokensRegExp).map((substring)=>{
        const firstCharacter = substring[0];
        if (firstCharacter === "p" || firstCharacter === "P") {
            const longFormatter = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$longFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["longFormatters"][firstCharacter];
            return longFormatter(substring, locale.formatLong);
        }
        return substring;
    }).join("").match(formattingTokensRegExp).map((substring)=>{
        // Replace two single quote characters with one single quote character
        if (substring === "''") {
            return {
                isToken: false,
                value: "'"
            };
        }
        const firstCharacter = substring[0];
        if (firstCharacter === "'") {
            return {
                isToken: false,
                value: cleanEscapedString(substring)
            };
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatters"][firstCharacter]) {
            return {
                isToken: true,
                value: substring
            };
        }
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
            throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        }
        return {
            isToken: false,
            value: substring
        };
    });
    // invoke localize preprocessor (only for french locales at the moment)
    if (locale.localize.preprocessor) {
        parts = locale.localize.preprocessor(originalDate, parts);
    }
    const formatterOptions = {
        firstWeekContainsDate,
        weekStartsOn,
        locale
    };
    return parts.map((part)=>{
        if (!part.isToken) return part.value;
        const token = part.value;
        if (!options?.useAdditionalWeekYearTokens && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProtectedWeekYearToken"])(token) || !options?.useAdditionalDayOfYearTokens && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProtectedDayOfYearToken"])(token)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnOrThrowProtectedError"])(token, formatStr, String(date));
        }
        const formatter = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatters"][token[0]];
        return formatter(originalDate, token, locale.localize, formatterOptions);
    }).join("");
}
function cleanEscapedString(input) {
    const matched = input.match(escapedStringRegExp);
    if (!matched) {
        return input;
    }
    return matched[1].replace(doubleQuoteRegExp, "'");
}
const __TURBOPACK__default__export__ = format;
}),
"[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp,
    "mergeClasses",
    ()=>mergeClasses,
    "toCamelCase",
    ()=>toCamelCase,
    "toKebabCase",
    ()=>toKebabCase,
    "toPascalCase",
    ()=>toPascalCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Clock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("clock", __iconNode);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)");
}),
"[project]/Documents/Project/NewTaskry/node_modules/mimic-function/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>mimicFunction
]);
const copyProperty = (to, from, property, ignoreNonConfigurable)=>{
    // `Function#length` should reflect the parameters of `to` not `from` since we keep its body.
    // `Function#prototype` is non-writable and non-configurable so can never be modified.
    if (property === 'length' || property === 'prototype') {
        return;
    }
    // `Function#arguments` and `Function#caller` should not be copied. They were reported to be present in `Reflect.ownKeys` for some devices in React Native (#41), so we explicitly ignore them here.
    if (property === 'arguments' || property === 'caller') {
        return;
    }
    const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
    const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);
    if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
        return;
    }
    Object.defineProperty(to, property, fromDescriptor);
};
// `Object.defineProperty()` throws if the property exists, is not configurable and either:
// - one its descriptors is changed
// - it is non-writable and its value is changed
const canCopyProperty = function(toDescriptor, fromDescriptor) {
    return toDescriptor === undefined || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
};
const changePrototype = (to, from)=>{
    const fromPrototype = Object.getPrototypeOf(from);
    if (fromPrototype === Object.getPrototypeOf(to)) {
        return;
    }
    Object.setPrototypeOf(to, fromPrototype);
};
const wrappedToString = (withName, fromBody)=>`/* Wrapped ${withName}*/\n${fromBody}`;
const toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, 'toString');
const toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, 'name');
// We call `from.toString()` early (not lazily) to ensure `from` can be garbage collected.
// We use `bind()` instead of a closure for the same reason.
// Calling `from.toString()` early also allows caching it in case `to.toString()` is called several times.
const changeToString = (to, from, name)=>{
    const withName = name === '' ? '' : `with ${name.trim()}() `;
    const newToString = wrappedToString.bind(null, withName, from.toString());
    // Ensure `to.toString.toString` is non-enumerable and has the same `same`
    Object.defineProperty(newToString, 'name', toStringName);
    const { writable, enumerable, configurable } = toStringDescriptor; // We destructue to avoid a potential `get` descriptor.
    Object.defineProperty(to, 'toString', {
        value: newToString,
        writable,
        enumerable,
        configurable
    });
};
function mimicFunction(to, from, { ignoreNonConfigurable = false } = {}) {
    const { name } = to;
    for (const property of Reflect.ownKeys(from)){
        copyProperty(to, from, property, ignoreNonConfigurable);
    }
    changePrototype(to, from);
    changeToString(to, from, name);
    return to;
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/memoize/distribution/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>memoize,
    "memoizeClear",
    ()=>memoizeClear,
    "memoizeDecorator",
    ()=>memoizeDecorator,
    "memoizeIsCached",
    ()=>memoizeIsCached
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$mimic$2d$function$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/mimic-function/index.js [app-client] (ecmascript)");
;
const maxTimeoutValue = 2_147_483_647;
const cacheStore = new WeakMap();
const cacheTimerStore = new WeakMap();
const cacheKeyStore = new WeakMap();
function getValidCacheItem(cache, key) {
    const item = cache.get(key);
    if (!item) {
        return undefined;
    }
    if (item.maxAge <= Date.now()) {
        cache.delete(key);
        return undefined;
    }
    return item;
}
function memoize(function_, { cacheKey, cache = new Map(), maxAge } = {}) {
    if (maxAge === 0) {
        return function_;
    }
    if (typeof maxAge === 'number' && Number.isFinite(maxAge)) {
        if (maxAge > maxTimeoutValue) {
            throw new TypeError(`The \`maxAge\` option cannot exceed ${maxTimeoutValue}.`);
        }
        if (maxAge < 0) {
            throw new TypeError('The `maxAge` option should not be a negative number.');
        }
    }
    const memoized = function(...arguments_) {
        const key = cacheKey ? cacheKey(arguments_) : arguments_[0];
        const cacheItem = getValidCacheItem(cache, key);
        if (cacheItem) {
            return cacheItem.data;
        }
        const result = function_.apply(this, arguments_);
        const computedMaxAge = typeof maxAge === 'function' ? maxAge(...arguments_) : maxAge;
        if (computedMaxAge !== undefined && computedMaxAge !== Number.POSITIVE_INFINITY) {
            if (!Number.isFinite(computedMaxAge)) {
                throw new TypeError('The `maxAge` function must return a finite number, `0`, or `Infinity`.');
            }
            if (computedMaxAge <= 0) {
                return result; // Do not cache
            }
            if (computedMaxAge > maxTimeoutValue) {
                throw new TypeError(`The \`maxAge\` function result cannot exceed ${maxTimeoutValue}.`);
            }
        }
        cache.set(key, {
            data: result,
            maxAge: computedMaxAge === undefined || computedMaxAge === Number.POSITIVE_INFINITY ? Number.POSITIVE_INFINITY : Date.now() + computedMaxAge
        });
        if (computedMaxAge !== undefined && computedMaxAge !== Number.POSITIVE_INFINITY) {
            const timer = setTimeout(()=>{
                cache.delete(key);
                cacheTimerStore.get(memoized)?.delete(timer);
            }, computedMaxAge);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            timer.unref?.();
            const timers = cacheTimerStore.get(memoized) ?? new Set();
            timers.add(timer);
            cacheTimerStore.set(memoized, timers);
        }
        return result;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$mimic$2d$function$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(memoized, function_, {
        ignoreNonConfigurable: true
    });
    cacheStore.set(memoized, cache);
    cacheKeyStore.set(memoized, cacheKey ?? ((arguments_)=>arguments_[0]));
    return memoized;
}
function memoizeDecorator(options = {}) {
    const instanceMap = new WeakMap();
    return (target, propertyKey, descriptor)=>{
        const input = target[propertyKey]; // eslint-disable-line @typescript-eslint/no-unsafe-assignment
        if (typeof input !== 'function') {
            throw new TypeError('The decorated value must be a function');
        }
        delete descriptor.value;
        delete descriptor.writable;
        descriptor.get = function() {
            if (!instanceMap.has(this)) {
                const value = memoize(input, options);
                instanceMap.set(this, value);
                return value;
            }
            return instanceMap.get(this);
        };
    };
}
function memoizeClear(function_) {
    const cache = cacheStore.get(function_);
    if (!cache) {
        throw new TypeError('Can\'t clear a function that was not memoized!');
    }
    if (typeof cache.clear !== 'function') {
        throw new TypeError('The cache Map can\'t be cleared!');
    }
    cache.clear();
    for (const timer of cacheTimerStore.get(function_) ?? []){
        clearTimeout(timer);
    }
    cacheTimerStore.delete(function_);
}
function memoizeIsCached(function_, ...arguments_) {
    const cacheKey = cacheKeyStore.get(function_);
    if (!cacheKey) {
        return false;
    }
    const cache = cacheStore.get(function_);
    const key = cacheKey(arguments_);
    const item = getValidCacheItem(cache, key);
    return item !== undefined;
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/get-user-locale/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getUserLocale",
    ()=>getUserLocale,
    "getUserLocales",
    ()=>getUserLocales
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$memoize$2f$distribution$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/memoize/distribution/index.js [app-client] (ecmascript)");
;
function isString(el) {
    return typeof el === 'string';
}
function isUnique(el, index, arr) {
    return arr.indexOf(el) === index;
}
function isAllLowerCase(el) {
    return el.toLowerCase() === el;
}
function fixCommas(el) {
    return el.indexOf(',') === -1 ? el : el.split(',');
}
function normalizeLocale(locale) {
    if (!locale) {
        return locale;
    }
    if (locale === 'C' || locale === 'posix' || locale === 'POSIX') {
        return 'en-US';
    }
    // If there's a dot (.) in the locale, it's likely in the format of "en-US.UTF-8", so we only take the first part
    if (locale.indexOf('.') !== -1) {
        var _a = locale.split('.')[0], actualLocale = _a === void 0 ? '' : _a;
        return normalizeLocale(actualLocale);
    }
    // If there's an at sign (@) in the locale, it's likely in the format of "en-US@posix", so we only take the first part
    if (locale.indexOf('@') !== -1) {
        var _b = locale.split('@')[0], actualLocale = _b === void 0 ? '' : _b;
        return normalizeLocale(actualLocale);
    }
    // If there's a dash (-) in the locale and it's not all lower case, it's already in the format of "en-US", so we return it
    if (locale.indexOf('-') === -1 || !isAllLowerCase(locale)) {
        return locale;
    }
    var _c = locale.split('-'), splitEl1 = _c[0], _d = _c[1], splitEl2 = _d === void 0 ? '' : _d;
    return "".concat(splitEl1, "-").concat(splitEl2.toUpperCase());
}
function getUserLocalesInternal(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.useFallbackLocale, useFallbackLocale = _c === void 0 ? true : _c, _d = _b.fallbackLocale, fallbackLocale = _d === void 0 ? 'en-US' : _d;
    var languageList = [];
    if (typeof navigator !== 'undefined') {
        var rawLanguages = navigator.languages || [];
        var languages = [];
        for(var _i = 0, rawLanguages_1 = rawLanguages; _i < rawLanguages_1.length; _i++){
            var rawLanguagesItem = rawLanguages_1[_i];
            languages = languages.concat(fixCommas(rawLanguagesItem));
        }
        var rawLanguage = navigator.language;
        var language = rawLanguage ? fixCommas(rawLanguage) : rawLanguage;
        languageList = languageList.concat(languages, language);
    }
    if (useFallbackLocale) {
        languageList.push(fallbackLocale);
    }
    return languageList.filter(isString).map(normalizeLocale).filter(isUnique);
}
var getUserLocales = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$memoize$2f$distribution$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(getUserLocalesInternal, {
    cacheKey: JSON.stringify
});
function getUserLocaleInternal(options) {
    return getUserLocales(options)[0] || null;
}
var getUserLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$memoize$2f$distribution$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(getUserLocaleInternal, {
    cacheKey: JSON.stringify
});
const __TURBOPACK__default__export__ = getUserLocale;
}),
"[project]/Documents/Project/NewTaskry/node_modules/@wojtekmaj/date-utils/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utils
 */ __turbopack_context__.s([
    "getCenturyEnd",
    ()=>getCenturyEnd,
    "getCenturyRange",
    ()=>getCenturyRange,
    "getCenturyStart",
    ()=>getCenturyStart,
    "getDate",
    ()=>getDate,
    "getDayEnd",
    ()=>getDayEnd,
    "getDayRange",
    ()=>getDayRange,
    "getDayStart",
    ()=>getDayStart,
    "getDaysInMonth",
    ()=>getDaysInMonth,
    "getDecadeEnd",
    ()=>getDecadeEnd,
    "getDecadeRange",
    ()=>getDecadeRange,
    "getDecadeStart",
    ()=>getDecadeStart,
    "getHours",
    ()=>getHours,
    "getHoursMinutes",
    ()=>getHoursMinutes,
    "getHoursMinutesSeconds",
    ()=>getHoursMinutesSeconds,
    "getISOLocalDate",
    ()=>getISOLocalDate,
    "getISOLocalDateTime",
    ()=>getISOLocalDateTime,
    "getISOLocalMonth",
    ()=>getISOLocalMonth,
    "getMilliseconds",
    ()=>getMilliseconds,
    "getMinutes",
    ()=>getMinutes,
    "getMonth",
    ()=>getMonth,
    "getMonthEnd",
    ()=>getMonthEnd,
    "getMonthHuman",
    ()=>getMonthHuman,
    "getMonthRange",
    ()=>getMonthRange,
    "getMonthStart",
    ()=>getMonthStart,
    "getNextCenturyEnd",
    ()=>getNextCenturyEnd,
    "getNextCenturyStart",
    ()=>getNextCenturyStart,
    "getNextDayEnd",
    ()=>getNextDayEnd,
    "getNextDayStart",
    ()=>getNextDayStart,
    "getNextDecadeEnd",
    ()=>getNextDecadeEnd,
    "getNextDecadeStart",
    ()=>getNextDecadeStart,
    "getNextMonthEnd",
    ()=>getNextMonthEnd,
    "getNextMonthStart",
    ()=>getNextMonthStart,
    "getNextYearEnd",
    ()=>getNextYearEnd,
    "getNextYearStart",
    ()=>getNextYearStart,
    "getPreviousCenturyEnd",
    ()=>getPreviousCenturyEnd,
    "getPreviousCenturyStart",
    ()=>getPreviousCenturyStart,
    "getPreviousDayEnd",
    ()=>getPreviousDayEnd,
    "getPreviousDayStart",
    ()=>getPreviousDayStart,
    "getPreviousDecadeEnd",
    ()=>getPreviousDecadeEnd,
    "getPreviousDecadeStart",
    ()=>getPreviousDecadeStart,
    "getPreviousMonthEnd",
    ()=>getPreviousMonthEnd,
    "getPreviousMonthStart",
    ()=>getPreviousMonthStart,
    "getPreviousYearEnd",
    ()=>getPreviousYearEnd,
    "getPreviousYearStart",
    ()=>getPreviousYearStart,
    "getSeconds",
    ()=>getSeconds,
    "getYear",
    ()=>getYear,
    "getYearEnd",
    ()=>getYearEnd,
    "getYearRange",
    ()=>getYearRange,
    "getYearStart",
    ()=>getYearStart
]);
function makeGetEdgeOfNeighbor(getPeriod, getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborInternal(date, offset = defaultOffset) {
        const previousPeriod = getPeriod(date) + offset;
        return getEdgeOfPeriod(previousPeriod);
    };
}
function makeGetEnd(getBeginOfNextPeriod) {
    return function makeGetEndInternal(date) {
        return new Date(getBeginOfNextPeriod(date).getTime() - 1);
    };
}
function makeGetRange(getStart, getEnd) {
    return function makeGetRangeInternal(date) {
        return [
            getStart(date),
            getEnd(date)
        ];
    };
}
function getYear(date) {
    if (date instanceof Date) {
        return date.getFullYear();
    }
    if (typeof date === 'number') {
        return date;
    }
    const year = Number.parseInt(date, 10);
    if (typeof date === 'string' && !Number.isNaN(year)) {
        return year;
    }
    throw new Error(`Failed to get year from date: ${date}.`);
}
function getMonth(date) {
    if (date instanceof Date) {
        return date.getMonth();
    }
    throw new Error(`Failed to get month from date: ${date}.`);
}
function getMonthHuman(date) {
    if (date instanceof Date) {
        return date.getMonth() + 1;
    }
    throw new Error(`Failed to get human-readable month from date: ${date}.`);
}
function getDate(date) {
    if (date instanceof Date) {
        return date.getDate();
    }
    throw new Error(`Failed to get year from date: ${date}.`);
}
function getHours(date) {
    if (date instanceof Date) {
        return date.getHours();
    }
    if (typeof date === 'string') {
        const datePieces = date.split(':');
        if (datePieces.length >= 2) {
            const hoursString = datePieces[0];
            if (hoursString) {
                const hours = Number.parseInt(hoursString, 10);
                if (!Number.isNaN(hours)) {
                    return hours;
                }
            }
        }
    }
    throw new Error(`Failed to get hours from date: ${date}.`);
}
function getMinutes(date) {
    if (date instanceof Date) {
        return date.getMinutes();
    }
    if (typeof date === 'string') {
        const datePieces = date.split(':');
        if (datePieces.length >= 2) {
            const minutesString = datePieces[1] || '0';
            const minutes = Number.parseInt(minutesString, 10);
            if (!Number.isNaN(minutes)) {
                return minutes;
            }
        }
    }
    throw new Error(`Failed to get minutes from date: ${date}.`);
}
function getSeconds(date) {
    if (date instanceof Date) {
        return date.getSeconds();
    }
    if (typeof date === 'string') {
        const datePieces = date.split(':');
        if (datePieces.length >= 2) {
            const secondsWithMillisecondsString = datePieces[2] || '0';
            const seconds = Number.parseInt(secondsWithMillisecondsString, 10);
            if (!Number.isNaN(seconds)) {
                return seconds;
            }
        }
    }
    throw new Error(`Failed to get seconds from date: ${date}.`);
}
function getMilliseconds(date) {
    if (date instanceof Date) {
        return date.getMilliseconds();
    }
    if (typeof date === 'string') {
        const datePieces = date.split(':');
        if (datePieces.length >= 2) {
            const secondsWithMillisecondsString = datePieces[2] || '0';
            const millisecondsString = secondsWithMillisecondsString.split('.')[1] || '0';
            const milliseconds = Number.parseInt(millisecondsString, 10);
            if (!Number.isNaN(milliseconds)) {
                return milliseconds;
            }
        }
    }
    throw new Error(`Failed to get seconds from date: ${date}.`);
}
function getCenturyStart(date) {
    const year = getYear(date);
    const centuryStartYear = year + (-year + 1) % 100;
    const centuryStartDate = new Date();
    centuryStartDate.setFullYear(centuryStartYear, 0, 1);
    centuryStartDate.setHours(0, 0, 0, 0);
    return centuryStartDate;
}
const getPreviousCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, -100);
const getNextCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, 100);
const getCenturyEnd = makeGetEnd(getNextCenturyStart);
const getPreviousCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, -100);
const getNextCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, 100);
const getCenturyRange = makeGetRange(getCenturyStart, getCenturyEnd);
function getDecadeStart(date) {
    const year = getYear(date);
    const decadeStartYear = year + (-year + 1) % 10;
    const decadeStartDate = new Date();
    decadeStartDate.setFullYear(decadeStartYear, 0, 1);
    decadeStartDate.setHours(0, 0, 0, 0);
    return decadeStartDate;
}
const getPreviousDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, -10);
const getNextDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, 10);
const getDecadeEnd = makeGetEnd(getNextDecadeStart);
const getPreviousDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, -10);
const getNextDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, 10);
const getDecadeRange = makeGetRange(getDecadeStart, getDecadeEnd);
function getYearStart(date) {
    const year = getYear(date);
    const yearStartDate = new Date();
    yearStartDate.setFullYear(year, 0, 1);
    yearStartDate.setHours(0, 0, 0, 0);
    return yearStartDate;
}
const getPreviousYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, -1);
const getNextYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, 1);
const getYearEnd = makeGetEnd(getNextYearStart);
const getPreviousYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, -1);
const getNextYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, 1);
const getYearRange = makeGetRange(getYearStart, getYearEnd);
/**
 * Month
 */ function makeGetEdgeOfNeighborMonth(getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborMonthInternal(date, offset = defaultOffset) {
        const year = getYear(date);
        const month = getMonth(date) + offset;
        const previousPeriod = new Date();
        previousPeriod.setFullYear(year, month, 1);
        previousPeriod.setHours(0, 0, 0, 0);
        return getEdgeOfPeriod(previousPeriod);
    };
}
function getMonthStart(date) {
    const year = getYear(date);
    const month = getMonth(date);
    const monthStartDate = new Date();
    monthStartDate.setFullYear(year, month, 1);
    monthStartDate.setHours(0, 0, 0, 0);
    return monthStartDate;
}
const getPreviousMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, -1);
const getNextMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, 1);
const getMonthEnd = makeGetEnd(getNextMonthStart);
const getPreviousMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, -1);
const getNextMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, 1);
const getMonthRange = makeGetRange(getMonthStart, getMonthEnd);
/**
 * Day
 */ function makeGetEdgeOfNeighborDay(getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborDayInternal(date, offset = defaultOffset) {
        const year = getYear(date);
        const month = getMonth(date);
        const day = getDate(date) + offset;
        const previousPeriod = new Date();
        previousPeriod.setFullYear(year, month, day);
        previousPeriod.setHours(0, 0, 0, 0);
        return getEdgeOfPeriod(previousPeriod);
    };
}
function getDayStart(date) {
    const year = getYear(date);
    const month = getMonth(date);
    const day = getDate(date);
    const dayStartDate = new Date();
    dayStartDate.setFullYear(year, month, day);
    dayStartDate.setHours(0, 0, 0, 0);
    return dayStartDate;
}
const getPreviousDayStart = makeGetEdgeOfNeighborDay(getDayStart, -1);
const getNextDayStart = makeGetEdgeOfNeighborDay(getDayStart, 1);
const getDayEnd = makeGetEnd(getNextDayStart);
const getPreviousDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, -1);
const getNextDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, 1);
const getDayRange = makeGetRange(getDayStart, getDayEnd);
function getDaysInMonth(date) {
    return getDate(getMonthEnd(date));
}
function padStart(num, val = 2) {
    const numStr = `${num}`;
    if (numStr.length >= val) {
        return num;
    }
    return `0000${numStr}`.slice(-val);
}
function getHoursMinutes(date) {
    const hours = padStart(getHours(date));
    const minutes = padStart(getMinutes(date));
    return `${hours}:${minutes}`;
}
function getHoursMinutesSeconds(date) {
    const hours = padStart(getHours(date));
    const minutes = padStart(getMinutes(date));
    const seconds = padStart(getSeconds(date));
    return `${hours}:${minutes}:${seconds}`;
}
function getISOLocalMonth(date) {
    const year = padStart(getYear(date), 4);
    const month = padStart(getMonthHuman(date));
    return `${year}-${month}`;
}
function getISOLocalDate(date) {
    const year = padStart(getYear(date), 4);
    const month = padStart(getMonthHuman(date));
    const day = padStart(getDate(date));
    return `${year}-${month}-${day}`;
}
function getISOLocalDateTime(date) {
    return `${getISOLocalDate(date)}T${getHoursMinutesSeconds(date)}`;
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/shared/const.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CALENDAR_TYPES",
    ()=>CALENDAR_TYPES,
    "CALENDAR_TYPE_LOCALES",
    ()=>CALENDAR_TYPE_LOCALES,
    "WEEKDAYS",
    ()=>WEEKDAYS
]);
var CALENDAR_TYPES = {
    GREGORY: 'gregory',
    HEBREW: 'hebrew',
    ISLAMIC: 'islamic',
    ISO_8601: 'iso8601'
};
var CALENDAR_TYPE_LOCALES = {
    gregory: [
        'en-CA',
        'en-US',
        'es-AR',
        'es-BO',
        'es-CL',
        'es-CO',
        'es-CR',
        'es-DO',
        'es-EC',
        'es-GT',
        'es-HN',
        'es-MX',
        'es-NI',
        'es-PA',
        'es-PE',
        'es-PR',
        'es-SV',
        'es-VE',
        'pt-BR'
    ],
    hebrew: [
        'he',
        'he-IL'
    ],
    islamic: [
        // ar-LB, ar-MA intentionally missing
        'ar',
        'ar-AE',
        'ar-BH',
        'ar-DZ',
        'ar-EG',
        'ar-IQ',
        'ar-JO',
        'ar-KW',
        'ar-LY',
        'ar-OM',
        'ar-QA',
        'ar-SA',
        'ar-SD',
        'ar-SY',
        'ar-YE',
        'dv',
        'dv-MV',
        'ps',
        'ps-AR'
    ]
};
var WEEKDAYS = [
    0,
    1,
    2,
    3,
    4,
    5,
    6
];
}),
"[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/shared/dateFormatter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDate",
    ()=>formatDate,
    "formatDay",
    ()=>formatDay,
    "formatLongDate",
    ()=>formatLongDate,
    "formatMonth",
    ()=>formatMonth,
    "formatMonthYear",
    ()=>formatMonthYear,
    "formatShortWeekday",
    ()=>formatShortWeekday,
    "formatWeekday",
    ()=>formatWeekday,
    "formatYear",
    ()=>formatYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/get-user-locale/dist/index.js [app-client] (ecmascript)");
;
var formatterCache = new Map();
function getFormatter(options) {
    return function formatter(locale, date) {
        var localeWithDefault = locale || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
        if (!formatterCache.has(localeWithDefault)) {
            formatterCache.set(localeWithDefault, new Map());
        }
        var formatterCacheLocale = formatterCache.get(localeWithDefault);
        if (!formatterCacheLocale.has(options)) {
            formatterCacheLocale.set(options, new Intl.DateTimeFormat(localeWithDefault || undefined, options).format);
        }
        return formatterCacheLocale.get(options)(date);
    };
}
/**
 * Changes the hour in a Date to ensure right date formatting even if DST is messed up.
 * Workaround for bug in WebKit and Firefox with historical dates.
 * For more details, see:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=750465
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1385643
 *
 * @param {Date} date Date.
 * @returns {Date} Date with hour set to 12.
 */ function toSafeHour(date) {
    var safeDate = new Date(date);
    return new Date(safeDate.setHours(12));
}
function getSafeFormatter(options) {
    return function(locale, date) {
        return getFormatter(options)(locale, toSafeHour(date));
    };
}
var formatDateOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
};
var formatDayOptions = {
    day: 'numeric'
};
var formatLongDateOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
var formatMonthOptions = {
    month: 'long'
};
var formatMonthYearOptions = {
    month: 'long',
    year: 'numeric'
};
var formatShortWeekdayOptions = {
    weekday: 'short'
};
var formatWeekdayOptions = {
    weekday: 'long'
};
var formatYearOptions = {
    year: 'numeric'
};
var formatDate = getSafeFormatter(formatDateOptions);
var formatDay = getSafeFormatter(formatDayOptions);
var formatLongDate = getSafeFormatter(formatLongDateOptions);
var formatMonth = getSafeFormatter(formatMonthOptions);
var formatMonthYear = getSafeFormatter(formatMonthYearOptions);
var formatShortWeekday = getSafeFormatter(formatShortWeekdayOptions);
var formatWeekday = getSafeFormatter(formatWeekdayOptions);
var formatYear = getSafeFormatter(formatYearOptions);
}),
"[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/shared/dates.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBegin",
    ()=>getBegin,
    "getBeginNext",
    ()=>getBeginNext,
    "getBeginNext2",
    ()=>getBeginNext2,
    "getBeginOfCenturyYear",
    ()=>getBeginOfCenturyYear,
    "getBeginOfDecadeYear",
    ()=>getBeginOfDecadeYear,
    "getBeginOfWeek",
    ()=>getBeginOfWeek,
    "getBeginPrevious",
    ()=>getBeginPrevious,
    "getBeginPrevious2",
    ()=>getBeginPrevious2,
    "getCenturyLabel",
    ()=>getCenturyLabel,
    "getDayOfWeek",
    ()=>getDayOfWeek,
    "getDecadeLabel",
    ()=>getDecadeLabel,
    "getEnd",
    ()=>getEnd,
    "getEndPrevious",
    ()=>getEndPrevious,
    "getEndPrevious2",
    ()=>getEndPrevious2,
    "getRange",
    ()=>getRange,
    "getValueRange",
    ()=>getValueRange,
    "getWeekNumber",
    ()=>getWeekNumber,
    "isCurrentDayOfWeek",
    ()=>isCurrentDayOfWeek,
    "isWeekend",
    ()=>isWeekend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/@wojtekmaj/date-utils/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/shared/const.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/shared/dateFormatter.js [app-client] (ecmascript)");
;
;
;
var SUNDAY = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEEKDAYS"][0];
var FRIDAY = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEEKDAYS"][5];
var SATURDAY = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEEKDAYS"][6];
function getDayOfWeek(date, calendarType) {
    if (calendarType === void 0) {
        calendarType = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601;
    }
    var weekday = date.getDay();
    switch(calendarType){
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601:
            // Shifts days of the week so that Monday is 0, Sunday is 6
            return (weekday + 6) % 7;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISLAMIC:
            return (weekday + 1) % 7;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].HEBREW:
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].GREGORY:
            return weekday;
        default:
            throw new Error('Unsupported calendar type.');
    }
}
function getBeginOfCenturyYear(date) {
    var beginOfCentury = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCenturyStart"])(date);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(beginOfCentury);
}
function getBeginOfDecadeYear(date) {
    var beginOfDecade = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDecadeStart"])(date);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(beginOfDecade);
}
function getBeginOfWeek(date, calendarType) {
    if (calendarType === void 0) {
        calendarType = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601;
    }
    var year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(date);
    var monthIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonth"])(date);
    var day = date.getDate() - getDayOfWeek(date, calendarType);
    return new Date(year, monthIndex, day);
}
function getWeekNumber(date, calendarType) {
    if (calendarType === void 0) {
        calendarType = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601;
    }
    var calendarTypeForWeekNumber = calendarType === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].GREGORY ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].GREGORY : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601;
    var beginOfWeek = getBeginOfWeek(date, calendarType);
    var year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(date) + 1;
    var dayInWeekOne;
    var beginOfFirstWeek;
    // Look for the first week one that does not come after a given date
    do {
        dayInWeekOne = new Date(year, 0, calendarTypeForWeekNumber === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601 ? 4 : 1);
        beginOfFirstWeek = getBeginOfWeek(dayInWeekOne, calendarType);
        year -= 1;
    }while (date < beginOfFirstWeek)
    return Math.round((beginOfWeek.getTime() - beginOfFirstWeek.getTime()) / (8.64e7 * 7)) + 1;
}
function getBegin(rangeType, date) {
    switch(rangeType){
        case 'century':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCenturyStart"])(date);
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDecadeStart"])(date);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYearStart"])(date);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthStart"])(date);
        case 'day':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDayStart"])(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getBeginPrevious(rangeType, date) {
    switch(rangeType){
        case 'century':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreviousCenturyStart"])(date);
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreviousDecadeStart"])(date);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreviousYearStart"])(date);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreviousMonthStart"])(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getBeginNext(rangeType, date) {
    switch(rangeType){
        case 'century':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextCenturyStart"])(date);
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextDecadeStart"])(date);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextYearStart"])(date);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextMonthStart"])(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getBeginPrevious2(rangeType, date) {
    switch(rangeType){
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreviousDecadeStart"])(date, -100);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreviousYearStart"])(date, -10);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreviousMonthStart"])(date, -12);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getBeginNext2(rangeType, date) {
    switch(rangeType){
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextDecadeStart"])(date, 100);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextYearStart"])(date, 10);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextMonthStart"])(date, 12);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getEnd(rangeType, date) {
    switch(rangeType){
        case 'century':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCenturyEnd"])(date);
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDecadeEnd"])(date);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYearEnd"])(date);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthEnd"])(date);
        case 'day':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDayEnd"])(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getEndPrevious(rangeType, date) {
    switch(rangeType){
        case 'century':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreviousCenturyEnd"])(date);
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreviousDecadeEnd"])(date);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreviousYearEnd"])(date);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreviousMonthEnd"])(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getEndPrevious2(rangeType, date) {
    switch(rangeType){
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreviousDecadeEnd"])(date, -100);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreviousYearEnd"])(date, -10);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreviousMonthEnd"])(date, -12);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getRange(rangeType, date) {
    switch(rangeType){
        case 'century':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCenturyRange"])(date);
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDecadeRange"])(date);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYearRange"])(date);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthRange"])(date);
        case 'day':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDayRange"])(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getValueRange(rangeType, date1, date2) {
    var rawNextValue = [
        date1,
        date2
    ].sort(function(a, b) {
        return a.getTime() - b.getTime();
    });
    return [
        getBegin(rangeType, rawNextValue[0]),
        getEnd(rangeType, rawNextValue[1])
    ];
}
function toYearLabel(locale, formatYear, dates) {
    return dates.map(function(date) {
        return (formatYear || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatYear"])(locale, date);
    }).join(' – ');
}
function getCenturyLabel(locale, formatYear, date) {
    return toYearLabel(locale, formatYear, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCenturyRange"])(date));
}
function getDecadeLabel(locale, formatYear, date) {
    return toYearLabel(locale, formatYear, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDecadeRange"])(date));
}
function isCurrentDayOfWeek(date) {
    return date.getDay() === new Date().getDay();
}
function isWeekend(date, calendarType) {
    if (calendarType === void 0) {
        calendarType = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601;
    }
    var weekday = date.getDay();
    switch(calendarType){
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISLAMIC:
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].HEBREW:
            return weekday === FRIDAY || weekday === SATURDAY;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601:
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].GREGORY:
            return weekday === SATURDAY || weekday === SUNDAY;
        default:
            throw new Error('Unsupported calendar type.');
    }
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/Calendar/Navigation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/get-user-locale/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/shared/dates.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/shared/dateFormatter.js [app-client] (ecmascript)");
'use client';
;
;
;
;
var className = 'react-calendar__navigation';
function Navigation(_a) {
    var activeStartDate = _a.activeStartDate, drillUp = _a.drillUp, _b = _a.formatMonthYear, formatMonthYear = _b === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMonthYear"] : _b, _c = _a.formatYear, formatYear = _c === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatYear"] : _c, locale = _a.locale, maxDate = _a.maxDate, minDate = _a.minDate, _d = _a.navigationAriaLabel, navigationAriaLabel = _d === void 0 ? '' : _d, navigationAriaLive = _a.navigationAriaLive, navigationLabel = _a.navigationLabel, _e = _a.next2AriaLabel, next2AriaLabel = _e === void 0 ? '' : _e, _f = _a.next2Label, next2Label = _f === void 0 ? '»' : _f, _g = _a.nextAriaLabel, nextAriaLabel = _g === void 0 ? '' : _g, _h = _a.nextLabel, nextLabel = _h === void 0 ? '›' : _h, _j = _a.prev2AriaLabel, prev2AriaLabel = _j === void 0 ? '' : _j, _k = _a.prev2Label, prev2Label = _k === void 0 ? '«' : _k, _l = _a.prevAriaLabel, prevAriaLabel = _l === void 0 ? '' : _l, _m = _a.prevLabel, prevLabel = _m === void 0 ? '‹' : _m, setActiveStartDate = _a.setActiveStartDate, showDoubleView = _a.showDoubleView, view = _a.view, views = _a.views;
    var drillUpAvailable = views.indexOf(view) > 0;
    var shouldShowPrevNext2Buttons = view !== 'century';
    var previousActiveStartDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBeginPrevious"])(view, activeStartDate);
    var previousActiveStartDate2 = shouldShowPrevNext2Buttons ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBeginPrevious2"])(view, activeStartDate) : undefined;
    var nextActiveStartDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBeginNext"])(view, activeStartDate);
    var nextActiveStartDate2 = shouldShowPrevNext2Buttons ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBeginNext2"])(view, activeStartDate) : undefined;
    var prevButtonDisabled = function() {
        if (previousActiveStartDate.getFullYear() < 0) {
            return true;
        }
        var previousActiveEndDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEndPrevious"])(view, activeStartDate);
        return minDate && minDate >= previousActiveEndDate;
    }();
    var prev2ButtonDisabled = shouldShowPrevNext2Buttons && function() {
        if (previousActiveStartDate2.getFullYear() < 0) {
            return true;
        }
        var previousActiveEndDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEndPrevious2"])(view, activeStartDate);
        return minDate && minDate >= previousActiveEndDate;
    }();
    var nextButtonDisabled = maxDate && maxDate < nextActiveStartDate;
    var next2ButtonDisabled = shouldShowPrevNext2Buttons && maxDate && maxDate < nextActiveStartDate2;
    function onClickPrevious() {
        setActiveStartDate(previousActiveStartDate, 'prev');
    }
    function onClickPrevious2() {
        setActiveStartDate(previousActiveStartDate2, 'prev2');
    }
    function onClickNext() {
        setActiveStartDate(nextActiveStartDate, 'next');
    }
    function onClickNext2() {
        setActiveStartDate(nextActiveStartDate2, 'next2');
    }
    function renderLabel(date) {
        var label = function() {
            switch(view){
                case 'century':
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCenturyLabel"])(locale, formatYear, date);
                case 'decade':
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDecadeLabel"])(locale, formatYear, date);
                case 'year':
                    return formatYear(locale, date);
                case 'month':
                    return formatMonthYear(locale, date);
                default:
                    throw new Error("Invalid view: ".concat(view, "."));
            }
        }();
        return navigationLabel ? navigationLabel({
            date: date,
            label: label,
            locale: locale || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserLocale"])() || undefined,
            view: view
        }) : label;
    }
    function renderButton() {
        var labelClassName = "".concat(className, "__label");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("button", {
            "aria-label": navigationAriaLabel,
            "aria-live": navigationAriaLive,
            className: labelClassName,
            disabled: !drillUpAvailable,
            onClick: drillUp,
            style: {
                flexGrow: 1
            },
            type: "button",
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                    className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--from"),
                    children: renderLabel(activeStartDate)
                }),
                showDoubleView ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                            className: "".concat(labelClassName, "__divider"),
                            children: " \u2013 "
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                            className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--to"),
                            children: renderLabel(nextActiveStartDate)
                        })
                    ]
                }) : null
            ]
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: className,
        children: [
            prev2Label !== null && shouldShowPrevNext2Buttons ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                "aria-label": prev2AriaLabel,
                className: "".concat(className, "__arrow ").concat(className, "__prev2-button"),
                disabled: prev2ButtonDisabled,
                onClick: onClickPrevious2,
                type: "button",
                children: prev2Label
            }) : null,
            prevLabel !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                "aria-label": prevAriaLabel,
                className: "".concat(className, "__arrow ").concat(className, "__prev-button"),
                disabled: prevButtonDisabled,
                onClick: onClickPrevious,
                type: "button",
                children: prevLabel
            }),
            renderButton(),
            nextLabel !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                "aria-label": nextAriaLabel,
                className: "".concat(className, "__arrow ").concat(className, "__next-button"),
                disabled: nextButtonDisabled,
                onClick: onClickNext,
                type: "button",
                children: nextLabel
            }),
            next2Label !== null && shouldShowPrevNext2Buttons ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                "aria-label": next2AriaLabel,
                className: "".concat(className, "__arrow ").concat(className, "__next2-button"),
                disabled: next2ButtonDisabled,
                onClick: onClickNext2,
                type: "button",
                children: next2Label
            }) : null
        ]
    });
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/Flex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Flex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
function toPercent(num) {
    return "".concat(num, "%");
}
function Flex(_a) {
    var children = _a.children, className = _a.className, count = _a.count, direction = _a.direction, offset = _a.offset, style = _a.style, wrap = _a.wrap, otherProps = __rest(_a, [
        "children",
        "className",
        "count",
        "direction",
        "offset",
        "style",
        "wrap"
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", __assign({
        className: className,
        style: __assign({
            display: 'flex',
            flexDirection: direction,
            flexWrap: wrap ? 'wrap' : 'nowrap'
        }, style)
    }, otherProps, {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(children, function(child, index) {
            var marginInlineStart = offset && index === 0 ? toPercent(100 * offset / count) : null;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, __assign(__assign({}, child.props), {
                style: {
                    flexBasis: toPercent(100 / count),
                    flexShrink: 0,
                    flexGrow: 0,
                    overflow: 'hidden',
                    marginLeft: marginInlineStart,
                    marginInlineStart: marginInlineStart,
                    marginInlineEnd: 0
                }
            }));
        })
    }));
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/shared/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "between",
    ()=>between,
    "doRangesOverlap",
    ()=>doRangesOverlap,
    "getTileClasses",
    ()=>getTileClasses,
    "isRangeWithinRange",
    ()=>isRangeWithinRange,
    "isValueWithinRange",
    ()=>isValueWithinRange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/shared/dates.js [app-client] (ecmascript)");
;
function between(value, min, max) {
    if (min && min > value) {
        return min;
    }
    if (max && max < value) {
        return max;
    }
    return value;
}
function isValueWithinRange(value, range) {
    return range[0] <= value && range[1] >= value;
}
function isRangeWithinRange(greaterRange, smallerRange) {
    return greaterRange[0] <= smallerRange[0] && greaterRange[1] >= smallerRange[1];
}
function doRangesOverlap(range1, range2) {
    return isValueWithinRange(range1[0], range2) || isValueWithinRange(range1[1], range2);
}
function getRangeClassNames(valueRange, dateRange, baseClassName) {
    var isRange = doRangesOverlap(dateRange, valueRange);
    var classes = [];
    if (isRange) {
        classes.push(baseClassName);
        var isRangeStart = isValueWithinRange(valueRange[0], dateRange);
        var isRangeEnd = isValueWithinRange(valueRange[1], dateRange);
        if (isRangeStart) {
            classes.push("".concat(baseClassName, "Start"));
        }
        if (isRangeEnd) {
            classes.push("".concat(baseClassName, "End"));
        }
        if (isRangeStart && isRangeEnd) {
            classes.push("".concat(baseClassName, "BothEnds"));
        }
    }
    return classes;
}
function isCompleteValue(value) {
    if (Array.isArray(value)) {
        return value[0] !== null && value[1] !== null;
    }
    return value !== null;
}
function getTileClasses(args) {
    if (!args) {
        throw new Error('args is required');
    }
    var value = args.value, date = args.date, hover = args.hover;
    var className = 'react-calendar__tile';
    var classes = [
        className
    ];
    if (!date) {
        return classes;
    }
    var now = new Date();
    var dateRange = function() {
        if (Array.isArray(date)) {
            return date;
        }
        var dateType = args.dateType;
        if (!dateType) {
            throw new Error('dateType is required when date is not an array of two dates');
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRange"])(dateType, date);
    }();
    if (isValueWithinRange(now, dateRange)) {
        classes.push("".concat(className, "--now"));
    }
    if (!value || !isCompleteValue(value)) {
        return classes;
    }
    var valueRange = function() {
        if (Array.isArray(value)) {
            return value;
        }
        var valueType = args.valueType;
        if (!valueType) {
            throw new Error('valueType is required when value is not an array of two dates');
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRange"])(valueType, value);
    }();
    if (isRangeWithinRange(valueRange, dateRange)) {
        classes.push("".concat(className, "--active"));
    } else if (doRangesOverlap(valueRange, dateRange)) {
        classes.push("".concat(className, "--hasActive"));
    }
    var valueRangeClassNames = getRangeClassNames(valueRange, dateRange, "".concat(className, "--range"));
    classes.push.apply(classes, valueRangeClassNames);
    var valueArray = Array.isArray(value) ? value : [
        value
    ];
    if (hover && valueArray.length === 1) {
        var hoverRange = hover > valueRange[0] ? [
            valueRange[0],
            hover
        ] : [
            hover,
            valueRange[0]
        ];
        var hoverRangeClassNames = getRangeClassNames(hoverRange, dateRange, "".concat(className, "--hover"));
        classes.push.apply(classes, hoverRangeClassNames);
    }
    return classes;
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/TileGroup.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TileGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/Flex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/shared/utils.js [app-client] (ecmascript)");
;
;
;
function TileGroup(_a) {
    var className = _a.className, _b = _a.count, count = _b === void 0 ? 3 : _b, dateTransform = _a.dateTransform, dateType = _a.dateType, end = _a.end, hover = _a.hover, offset = _a.offset, renderTile = _a.renderTile, start = _a.start, _c = _a.step, step = _c === void 0 ? 1 : _c, value = _a.value, valueType = _a.valueType;
    var tiles = [];
    for(var point = start; point <= end; point += step){
        var date = dateTransform(point);
        tiles.push(renderTile({
            classes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTileClasses"])({
                date: date,
                dateType: dateType,
                hover: hover,
                value: value,
                valueType: valueType
            }),
            date: date
        }));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: className,
        count: count,
        offset: offset,
        wrap: true,
        children: tiles
    });
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/Tile.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Tile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
;
function Tile(props) {
    var activeStartDate = props.activeStartDate, children = props.children, classes = props.classes, date = props.date, formatAbbr = props.formatAbbr, locale = props.locale, maxDate = props.maxDate, maxDateTransform = props.maxDateTransform, minDate = props.minDate, minDateTransform = props.minDateTransform, onClick = props.onClick, onMouseOver = props.onMouseOver, style = props.style, tileClassNameProps = props.tileClassName, tileContentProps = props.tileContent, tileDisabled = props.tileDisabled, view = props.view;
    var tileClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Tile.useMemo[tileClassName]": function() {
            var args = {
                activeStartDate: activeStartDate,
                date: date,
                view: view
            };
            return typeof tileClassNameProps === 'function' ? tileClassNameProps(args) : tileClassNameProps;
        }
    }["Tile.useMemo[tileClassName]"], [
        activeStartDate,
        date,
        tileClassNameProps,
        view
    ]);
    var tileContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Tile.useMemo[tileContent]": function() {
            var args = {
                activeStartDate: activeStartDate,
                date: date,
                view: view
            };
            return typeof tileContentProps === 'function' ? tileContentProps(args) : tileContentProps;
        }
    }["Tile.useMemo[tileContent]"], [
        activeStartDate,
        date,
        tileContentProps,
        view
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes, tileClassName),
        disabled: minDate && minDateTransform(minDate) > date || maxDate && maxDateTransform(maxDate) < date || (tileDisabled === null || tileDisabled === void 0 ? void 0 : tileDisabled({
            activeStartDate: activeStartDate,
            date: date,
            view: view
        })),
        onClick: onClick ? function(event) {
            return onClick(date, event);
        } : undefined,
        onFocus: onMouseOver ? function() {
            return onMouseOver(date);
        } : undefined,
        onMouseOver: onMouseOver ? function() {
            return onMouseOver(date);
        } : undefined,
        style: style,
        type: "button",
        children: [
            formatAbbr ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("abbr", {
                "aria-label": formatAbbr(locale, date),
                children: children
            }) : children,
            tileContent
        ]
    });
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/CenturyView/Decade.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Decade
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/@wojtekmaj/date-utils/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Tile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/Tile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/shared/dates.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/shared/dateFormatter.js [app-client] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
;
;
var className = 'react-calendar__century-view__decades__decade';
function Decade(_a) {
    var _b = _a.classes, classes = _b === void 0 ? [] : _b, currentCentury = _a.currentCentury, _c = _a.formatYear, formatYear = _c === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatYear"] : _c, otherProps = __rest(_a, [
        "classes",
        "currentCentury",
        "formatYear"
    ]);
    var date = otherProps.date, locale = otherProps.locale;
    var classesProps = [];
    if (classes) {
        classesProps.push.apply(classesProps, classes);
    }
    if ("TURBOPACK compile-time truthy", 1) {
        classesProps.push(className);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCenturyStart"])(date).getFullYear() !== currentCentury) {
        classesProps.push("".concat(className, "--neighboringCentury"));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Tile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __assign({}, otherProps, {
        classes: classesProps,
        maxDateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDecadeEnd"],
        minDateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDecadeStart"],
        view: "century",
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDecadeLabel"])(locale, formatYear, date)
    }));
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/CenturyView/Decades.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Decades
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/@wojtekmaj/date-utils/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$TileGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/TileGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$CenturyView$2f$Decade$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/CenturyView/Decade.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/shared/dates.js [app-client] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
;
;
function Decades(props) {
    var activeStartDate = props.activeStartDate, hover = props.hover, showNeighboringCentury = props.showNeighboringCentury, value = props.value, valueType = props.valueType, otherProps = __rest(props, [
        "activeStartDate",
        "hover",
        "showNeighboringCentury",
        "value",
        "valueType"
    ]);
    var start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBeginOfCenturyYear"])(activeStartDate);
    var end = start + (showNeighboringCentury ? 119 : 99);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$TileGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "react-calendar__century-view__decades",
        dateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDecadeStart"],
        dateType: "decade",
        end: end,
        hover: hover,
        renderTile: function(_a) {
            var date = _a.date, otherTileProps = __rest(_a, [
                "date"
            ]);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$CenturyView$2f$Decade$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __assign({}, otherProps, otherTileProps, {
                activeStartDate: activeStartDate,
                currentCentury: start,
                date: date
            }), date.getTime());
        },
        start: start,
        step: 10,
        value: value,
        valueType: valueType
    });
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/CenturyView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CenturyView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$CenturyView$2f$Decades$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/CenturyView/Decades.js [app-client] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
;
;
function CenturyView(props) {
    function renderDecades() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$CenturyView$2f$Decades$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __assign({}, props));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "react-calendar__century-view",
        children: renderDecades()
    });
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/DecadeView/Year.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Year
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/@wojtekmaj/date-utils/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Tile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/Tile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/shared/dateFormatter.js [app-client] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
;
var className = 'react-calendar__decade-view__years__year';
function Year(_a) {
    var _b = _a.classes, classes = _b === void 0 ? [] : _b, currentDecade = _a.currentDecade, _c = _a.formatYear, formatYear = _c === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatYear"] : _c, otherProps = __rest(_a, [
        "classes",
        "currentDecade",
        "formatYear"
    ]);
    var date = otherProps.date, locale = otherProps.locale;
    var classesProps = [];
    if (classes) {
        classesProps.push.apply(classesProps, classes);
    }
    if ("TURBOPACK compile-time truthy", 1) {
        classesProps.push(className);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDecadeStart"])(date).getFullYear() !== currentDecade) {
        classesProps.push("".concat(className, "--neighboringDecade"));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Tile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __assign({}, otherProps, {
        classes: classesProps,
        maxDateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYearEnd"],
        minDateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYearStart"],
        view: "decade",
        children: formatYear(locale, date)
    }));
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/DecadeView/Years.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Years
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/@wojtekmaj/date-utils/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$TileGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/TileGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$DecadeView$2f$Year$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/DecadeView/Year.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/shared/dates.js [app-client] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
;
;
function Years(props) {
    var activeStartDate = props.activeStartDate, hover = props.hover, showNeighboringDecade = props.showNeighboringDecade, value = props.value, valueType = props.valueType, otherProps = __rest(props, [
        "activeStartDate",
        "hover",
        "showNeighboringDecade",
        "value",
        "valueType"
    ]);
    var start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBeginOfDecadeYear"])(activeStartDate);
    var end = start + (showNeighboringDecade ? 11 : 9);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$TileGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "react-calendar__decade-view__years",
        dateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYearStart"],
        dateType: "year",
        end: end,
        hover: hover,
        renderTile: function(_a) {
            var date = _a.date, otherTileProps = __rest(_a, [
                "date"
            ]);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$DecadeView$2f$Year$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __assign({}, otherProps, otherTileProps, {
                activeStartDate: activeStartDate,
                currentDecade: start,
                date: date
            }), date.getTime());
        },
        start: start,
        value: value,
        valueType: valueType
    });
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/DecadeView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DecadeView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$DecadeView$2f$Years$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/DecadeView/Years.js [app-client] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
;
;
function DecadeView(props) {
    function renderYears() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$DecadeView$2f$Years$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __assign({}, props));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "react-calendar__decade-view",
        children: renderYears()
    });
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/YearView/Month.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Month
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/@wojtekmaj/date-utils/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Tile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/Tile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/shared/dateFormatter.js [app-client] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var __spreadArray = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
;
;
;
;
var className = 'react-calendar__year-view__months__month';
function Month(_a) {
    var _b = _a.classes, classes = _b === void 0 ? [] : _b, _c = _a.formatMonth, formatMonth = _c === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMonth"] : _c, _d = _a.formatMonthYear, formatMonthYear = _d === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMonthYear"] : _d, otherProps = __rest(_a, [
        "classes",
        "formatMonth",
        "formatMonthYear"
    ]);
    var date = otherProps.date, locale = otherProps.locale;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Tile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __assign({}, otherProps, {
        classes: __spreadArray(__spreadArray([], classes, true), [
            className
        ], false),
        formatAbbr: formatMonthYear,
        maxDateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthEnd"],
        minDateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthStart"],
        view: "year",
        children: formatMonth(locale, date)
    }));
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/YearView/Months.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Months
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/@wojtekmaj/date-utils/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$TileGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/TileGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$YearView$2f$Month$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/YearView/Month.js [app-client] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
;
function Months(props) {
    var activeStartDate = props.activeStartDate, hover = props.hover, value = props.value, valueType = props.valueType, otherProps = __rest(props, [
        "activeStartDate",
        "hover",
        "value",
        "valueType"
    ]);
    var start = 0;
    var end = 11;
    var year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(activeStartDate);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$TileGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "react-calendar__year-view__months",
        dateTransform: function(monthIndex) {
            var date = new Date();
            date.setFullYear(year, monthIndex, 1);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthStart"])(date);
        },
        dateType: "month",
        end: end,
        hover: hover,
        renderTile: function(_a) {
            var date = _a.date, otherTileProps = __rest(_a, [
                "date"
            ]);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$YearView$2f$Month$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __assign({}, otherProps, otherTileProps, {
                activeStartDate: activeStartDate,
                date: date
            }), date.getTime());
        },
        start: start,
        value: value,
        valueType: valueType
    });
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/YearView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>YearView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$YearView$2f$Months$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/YearView/Months.js [app-client] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
;
;
function YearView(props) {
    function renderMonths() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$YearView$2f$Months$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __assign({}, props));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "react-calendar__year-view",
        children: renderMonths()
    });
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/MonthView/Day.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Day
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/@wojtekmaj/date-utils/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Tile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/Tile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/shared/dates.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/shared/dateFormatter.js [app-client] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
;
;
var className = 'react-calendar__month-view__days__day';
function Day(_a) {
    var calendarType = _a.calendarType, _b = _a.classes, classes = _b === void 0 ? [] : _b, currentMonthIndex = _a.currentMonthIndex, _c = _a.formatDay, formatDay = _c === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDay"] : _c, _d = _a.formatLongDate, formatLongDate = _d === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLongDate"] : _d, otherProps = __rest(_a, [
        "calendarType",
        "classes",
        "currentMonthIndex",
        "formatDay",
        "formatLongDate"
    ]);
    var date = otherProps.date, locale = otherProps.locale;
    var classesProps = [];
    if (classes) {
        classesProps.push.apply(classesProps, classes);
    }
    if ("TURBOPACK compile-time truthy", 1) {
        classesProps.push(className);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWeekend"])(date, calendarType)) {
        classesProps.push("".concat(className, "--weekend"));
    }
    if (date.getMonth() !== currentMonthIndex) {
        classesProps.push("".concat(className, "--neighboringMonth"));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Tile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __assign({}, otherProps, {
        classes: classesProps,
        formatAbbr: formatLongDate,
        maxDateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDayEnd"],
        minDateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDayStart"],
        view: "month",
        children: formatDay(locale, date)
    }));
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/MonthView/Days.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Days
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/@wojtekmaj/date-utils/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$TileGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/TileGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$Day$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/MonthView/Day.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/shared/dates.js [app-client] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
;
;
function Days(props) {
    var activeStartDate = props.activeStartDate, calendarType = props.calendarType, hover = props.hover, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks, showNeighboringMonth = props.showNeighboringMonth, value = props.value, valueType = props.valueType, otherProps = __rest(props, [
        "activeStartDate",
        "calendarType",
        "hover",
        "showFixedNumberOfWeeks",
        "showNeighboringMonth",
        "value",
        "valueType"
    ]);
    var year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(activeStartDate);
    var monthIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonth"])(activeStartDate);
    var hasFixedNumberOfWeeks = showFixedNumberOfWeeks || showNeighboringMonth;
    var dayOfWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDayOfWeek"])(activeStartDate, calendarType);
    var offset = hasFixedNumberOfWeeks ? 0 : dayOfWeek;
    /**
     * Defines on which day of the month the grid shall start. If we simply show current
     * month, we obviously start on day one, but if showNeighboringMonth is set to
     * true, we need to find the beginning of the week the first day of the month is in.
     */ var start = (hasFixedNumberOfWeeks ? -dayOfWeek : 0) + 1;
    /**
     * Defines on which day of the month the grid shall end. If we simply show current
     * month, we need to stop on the last day of the month, but if showNeighboringMonth
     * is set to true, we need to find the end of the week the last day of the month is in.
     */ var end = function() {
        if (showFixedNumberOfWeeks) {
            // Always show 6 weeks
            return start + 6 * 7 - 1;
        }
        var daysInMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDaysInMonth"])(activeStartDate);
        if (showNeighboringMonth) {
            var activeEndDate = new Date();
            activeEndDate.setFullYear(year, monthIndex, daysInMonth);
            activeEndDate.setHours(0, 0, 0, 0);
            var daysUntilEndOfTheWeek = 7 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDayOfWeek"])(activeEndDate, calendarType) - 1;
            return daysInMonth + daysUntilEndOfTheWeek;
        }
        return daysInMonth;
    }();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$TileGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "react-calendar__month-view__days",
        count: 7,
        dateTransform: function(day) {
            var date = new Date();
            date.setFullYear(year, monthIndex, day);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDayStart"])(date);
        },
        dateType: "day",
        hover: hover,
        end: end,
        renderTile: function(_a) {
            var date = _a.date, otherTileProps = __rest(_a, [
                "date"
            ]);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$Day$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __assign({}, otherProps, otherTileProps, {
                activeStartDate: activeStartDate,
                calendarType: calendarType,
                currentMonthIndex: monthIndex,
                date: date
            }), date.getTime());
        },
        offset: offset,
        start: start,
        value: value,
        valueType: valueType
    });
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/MonthView/Weekdays.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Weekdays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/@wojtekmaj/date-utils/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/Flex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/shared/dates.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/shared/dateFormatter.js [app-client] (ecmascript)");
;
;
;
;
;
;
var className = 'react-calendar__month-view__weekdays';
var weekdayClassName = "".concat(className, "__weekday");
function Weekdays(props) {
    var calendarType = props.calendarType, _a = props.formatShortWeekday, formatShortWeekday = _a === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatShortWeekday"] : _a, _b = props.formatWeekday, formatWeekday = _b === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatWeekday"] : _b, locale = props.locale, onMouseLeave = props.onMouseLeave;
    var anyDate = new Date();
    var beginOfMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthStart"])(anyDate);
    var year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(beginOfMonth);
    var monthIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonth"])(beginOfMonth);
    var weekdays = [];
    for(var weekday = 1; weekday <= 7; weekday += 1){
        var weekdayDate = new Date(year, monthIndex, weekday - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDayOfWeek"])(beginOfMonth, calendarType));
        var abbr = formatWeekday(locale, weekdayDate);
        weekdays.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(weekdayClassName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCurrentDayOfWeek"])(weekdayDate) && "".concat(weekdayClassName, "--current"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWeekend"])(weekdayDate, calendarType) && "".concat(weekdayClassName, "--weekend")),
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("abbr", {
                "aria-label": abbr,
                title: abbr,
                children: formatShortWeekday(locale, weekdayDate).replace('.', '')
            })
        }, weekday));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: className,
        count: 7,
        onFocus: onMouseLeave,
        onMouseOver: onMouseLeave,
        children: weekdays
    });
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/MonthView/WeekNumber.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WeekNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
var className = 'react-calendar__tile';
function WeekNumber(props) {
    var onClickWeekNumber = props.onClickWeekNumber, weekNumber = props.weekNumber;
    var children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
        children: weekNumber
    });
    if (onClickWeekNumber) {
        var date_1 = props.date, onClickWeekNumber_1 = props.onClickWeekNumber, weekNumber_1 = props.weekNumber, otherProps = __rest(props, [
            "date",
            "onClickWeekNumber",
            "weekNumber"
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", __assign({}, otherProps, {
            className: className,
            onClick: function(event) {
                return onClickWeekNumber_1(weekNumber_1, date_1, event);
            },
            type: "button",
            children: children
        }));
    // biome-ignore lint/style/noUselessElse: TypeScript is unhappy if we remove this else
    } else {
        var date = props.date, onClickWeekNumber_2 = props.onClickWeekNumber, weekNumber_2 = props.weekNumber, otherProps = __rest(props, [
            "date",
            "onClickWeekNumber",
            "weekNumber"
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", __assign({}, otherProps, {
            className: className,
            children: children
        }));
    }
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/MonthView/WeekNumbers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WeekNumbers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/@wojtekmaj/date-utils/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$WeekNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/MonthView/WeekNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/Flex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/shared/dates.js [app-client] (ecmascript)");
;
;
;
;
;
function WeekNumbers(props) {
    var activeStartDate = props.activeStartDate, calendarType = props.calendarType, onClickWeekNumber = props.onClickWeekNumber, onMouseLeave = props.onMouseLeave, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
    var numberOfWeeks = function() {
        if (showFixedNumberOfWeeks) {
            return 6;
        }
        var numberOfDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDaysInMonth"])(activeStartDate);
        var startWeekday = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDayOfWeek"])(activeStartDate, calendarType);
        var days = numberOfDays - (7 - startWeekday);
        return 1 + Math.ceil(days / 7);
    }();
    var dates = function() {
        var year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(activeStartDate);
        var monthIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonth"])(activeStartDate);
        var day = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDate"])(activeStartDate);
        var result = [];
        for(var index = 0; index < numberOfWeeks; index += 1){
            result.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBeginOfWeek"])(new Date(year, monthIndex, day + index * 7), calendarType));
        }
        return result;
    }();
    var weekNumbers = dates.map(function(date) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeekNumber"])(date, calendarType);
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "react-calendar__month-view__weekNumbers",
        count: numberOfWeeks,
        direction: "column",
        onFocus: onMouseLeave,
        onMouseOver: onMouseLeave,
        style: {
            flexBasis: 'calc(100% * (1 / 8)',
            flexShrink: 0
        },
        children: weekNumbers.map(function(weekNumber, weekIndex) {
            var date = dates[weekIndex];
            if (!date) {
                throw new Error('date is not defined');
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$WeekNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                date: date,
                onClickWeekNumber: onClickWeekNumber,
                weekNumber: weekNumber
            }, weekNumber);
        })
    });
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/MonthView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MonthView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$Days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/MonthView/Days.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$Weekdays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/MonthView/Weekdays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$WeekNumbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/MonthView/WeekNumbers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/shared/const.js [app-client] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
;
;
;
function getCalendarTypeFromLocale(locale) {
    if (locale) {
        for(var _i = 0, _a = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CALENDAR_TYPE_LOCALES"]); _i < _a.length; _i++){
            var _b = _a[_i], calendarType = _b[0], locales = _b[1];
            if (locales.includes(locale)) {
                return calendarType;
            }
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601;
}
function MonthView(props) {
    var activeStartDate = props.activeStartDate, locale = props.locale, onMouseLeave = props.onMouseLeave, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
    var _a = props.calendarType, calendarType = _a === void 0 ? getCalendarTypeFromLocale(locale) : _a, formatShortWeekday = props.formatShortWeekday, formatWeekday = props.formatWeekday, onClickWeekNumber = props.onClickWeekNumber, showWeekNumbers = props.showWeekNumbers, childProps = __rest(props, [
        "calendarType",
        "formatShortWeekday",
        "formatWeekday",
        "onClickWeekNumber",
        "showWeekNumbers"
    ]);
    function renderWeekdays() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$Weekdays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            calendarType: calendarType,
            formatShortWeekday: formatShortWeekday,
            formatWeekday: formatWeekday,
            locale: locale,
            onMouseLeave: onMouseLeave
        });
    }
    function renderWeekNumbers() {
        if (!showWeekNumbers) {
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$WeekNumbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            activeStartDate: activeStartDate,
            calendarType: calendarType,
            onClickWeekNumber: onClickWeekNumber,
            onMouseLeave: onMouseLeave,
            showFixedNumberOfWeeks: showFixedNumberOfWeeks
        });
    }
    function renderDays() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$Days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __assign({
            calendarType: calendarType
        }, childProps));
    }
    var className = 'react-calendar__month-view';
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, showWeekNumbers ? "".concat(className, "--weekNumbers") : ''),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            style: {
                display: 'flex',
                alignItems: 'flex-end'
            },
            children: [
                renderWeekNumbers(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    style: {
                        flexGrow: 1,
                        width: '100%'
                    },
                    children: [
                        renderWeekdays(),
                        renderDays()
                    ]
                })
            ]
        })
    });
}
}),
"[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/Calendar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Calendar$2f$Navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/Calendar/Navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$CenturyView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/CenturyView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$DecadeView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/DecadeView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$YearView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/YearView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/MonthView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/shared/dates.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/shared/utils.js [app-client] (ecmascript)");
'use client';
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
;
;
;
;
;
;
;
;
;
;
var baseClassName = 'react-calendar';
var allViews = [
    'century',
    'decade',
    'year',
    'month'
];
var allValueTypes = [
    'decade',
    'year',
    'month',
    'day'
];
var defaultMinDate = new Date();
defaultMinDate.setFullYear(1, 0, 1);
defaultMinDate.setHours(0, 0, 0, 0);
var defaultMaxDate = new Date(8.64e15);
function toDate(value) {
    if (value instanceof Date) {
        return value;
    }
    return new Date(value);
}
/**
 * Returns views array with disallowed values cut off.
 */ function getLimitedViews(minDetail, maxDetail) {
    return allViews.slice(allViews.indexOf(minDetail), allViews.indexOf(maxDetail) + 1);
}
/**
 * Determines whether a given view is allowed with currently applied settings.
 */ function isViewAllowed(view, minDetail, maxDetail) {
    var views = getLimitedViews(minDetail, maxDetail);
    return views.indexOf(view) !== -1;
}
/**
 * Gets either provided view if allowed by minDetail and maxDetail, or gets
 * the default view if not allowed.
 */ function getView(view, minDetail, maxDetail) {
    if (!view) {
        return maxDetail;
    }
    if (isViewAllowed(view, minDetail, maxDetail)) {
        return view;
    }
    return maxDetail;
}
/**
 * Returns value type that can be returned with currently applied settings.
 */ function getValueType(view) {
    var index = allViews.indexOf(view);
    return allValueTypes[index];
}
function getValue(value, index) {
    var rawValue = Array.isArray(value) ? value[index] : value;
    if (!rawValue) {
        return null;
    }
    var valueDate = toDate(rawValue);
    if (Number.isNaN(valueDate.getTime())) {
        throw new Error("Invalid date: ".concat(value));
    }
    return valueDate;
}
function getDetailValue(_a, index) {
    var value = _a.value, minDate = _a.minDate, maxDate = _a.maxDate, maxDetail = _a.maxDetail;
    var valuePiece = getValue(value, index);
    if (!valuePiece) {
        return null;
    }
    var valueType = getValueType(maxDetail);
    var detailValueFrom = function() {
        switch(index){
            case 0:
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBegin"])(valueType, valuePiece);
            case 1:
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnd"])(valueType, valuePiece);
            default:
                throw new Error("Invalid index value: ".concat(index));
        }
    }();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["between"])(detailValueFrom, minDate, maxDate);
}
var getDetailValueFrom = function(args) {
    return getDetailValue(args, 0);
};
var getDetailValueTo = function(args) {
    return getDetailValue(args, 1);
};
var getDetailValueArray = function(args) {
    return [
        getDetailValueFrom,
        getDetailValueTo
    ].map(function(fn) {
        return fn(args);
    });
};
function getActiveStartDate(_a) {
    var maxDate = _a.maxDate, maxDetail = _a.maxDetail, minDate = _a.minDate, minDetail = _a.minDetail, value = _a.value, view = _a.view;
    var rangeType = getView(view, minDetail, maxDetail);
    var valueFrom = getDetailValueFrom({
        value: value,
        minDate: minDate,
        maxDate: maxDate,
        maxDetail: maxDetail
    }) || new Date();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBegin"])(rangeType, valueFrom);
}
function getInitialActiveStartDate(_a) {
    var activeStartDate = _a.activeStartDate, defaultActiveStartDate = _a.defaultActiveStartDate, defaultValue = _a.defaultValue, defaultView = _a.defaultView, maxDate = _a.maxDate, maxDetail = _a.maxDetail, minDate = _a.minDate, minDetail = _a.minDetail, value = _a.value, view = _a.view;
    var rangeType = getView(view, minDetail, maxDetail);
    var valueFrom = activeStartDate || defaultActiveStartDate;
    if (valueFrom) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBegin"])(rangeType, valueFrom);
    }
    return getActiveStartDate({
        maxDate: maxDate,
        maxDetail: maxDetail,
        minDate: minDate,
        minDetail: minDetail,
        value: value || defaultValue,
        view: view || defaultView
    });
}
function getIsSingleValue(value) {
    return value && (!Array.isArray(value) || value.length === 1);
}
function areDatesEqual(date1, date2) {
    return date1 instanceof Date && date2 instanceof Date && date1.getTime() === date2.getTime();
}
var Calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function Calendar(props, ref) {
    var activeStartDateProps = props.activeStartDate, allowPartialRange = props.allowPartialRange, calendarType = props.calendarType, className = props.className, defaultActiveStartDate = props.defaultActiveStartDate, defaultValue = props.defaultValue, defaultView = props.defaultView, formatDay = props.formatDay, formatLongDate = props.formatLongDate, formatMonth = props.formatMonth, formatMonthYear = props.formatMonthYear, formatShortWeekday = props.formatShortWeekday, formatWeekday = props.formatWeekday, formatYear = props.formatYear, _a = props.goToRangeStartOnSelect, goToRangeStartOnSelect = _a === void 0 ? true : _a, inputRef = props.inputRef, locale = props.locale, _b = props.maxDate, maxDate = _b === void 0 ? defaultMaxDate : _b, _c = props.maxDetail, maxDetail = _c === void 0 ? 'month' : _c, _d = props.minDate, minDate = _d === void 0 ? defaultMinDate : _d, _e = props.minDetail, minDetail = _e === void 0 ? 'century' : _e, navigationAriaLabel = props.navigationAriaLabel, navigationAriaLive = props.navigationAriaLive, navigationLabel = props.navigationLabel, next2AriaLabel = props.next2AriaLabel, next2Label = props.next2Label, nextAriaLabel = props.nextAriaLabel, nextLabel = props.nextLabel, onActiveStartDateChange = props.onActiveStartDateChange, onChangeProps = props.onChange, onClickDay = props.onClickDay, onClickDecade = props.onClickDecade, onClickMonth = props.onClickMonth, onClickWeekNumber = props.onClickWeekNumber, onClickYear = props.onClickYear, onDrillDown = props.onDrillDown, onDrillUp = props.onDrillUp, onViewChange = props.onViewChange, prev2AriaLabel = props.prev2AriaLabel, prev2Label = props.prev2Label, prevAriaLabel = props.prevAriaLabel, prevLabel = props.prevLabel, _f = props.returnValue, returnValue = _f === void 0 ? 'start' : _f, selectRange = props.selectRange, showDoubleView = props.showDoubleView, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks, _g = props.showNavigation, showNavigation = _g === void 0 ? true : _g, showNeighboringCentury = props.showNeighboringCentury, showNeighboringDecade = props.showNeighboringDecade, _h = props.showNeighboringMonth, showNeighboringMonth = _h === void 0 ? true : _h, showWeekNumbers = props.showWeekNumbers, tileClassName = props.tileClassName, tileContent = props.tileContent, tileDisabled = props.tileDisabled, valueProps = props.value, viewProps = props.view;
    var _j = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultActiveStartDate), activeStartDateState = _j[0], setActiveStartDateState = _j[1];
    var _k = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), hoverState = _k[0], setHoverState = _k[1];
    var _l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array.isArray(defaultValue) ? defaultValue.map({
        "Calendar.Calendar.useState[_l]": function(el) {
            return el !== null ? toDate(el) : null;
        }
    }["Calendar.Calendar.useState[_l]"]) : defaultValue !== null && defaultValue !== undefined ? toDate(defaultValue) : null), valueState = _l[0], setValueState = _l[1];
    var _m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultView), viewState = _m[0], setViewState = _m[1];
    var activeStartDate = activeStartDateProps || activeStartDateState || getInitialActiveStartDate({
        activeStartDate: activeStartDateProps,
        defaultActiveStartDate: defaultActiveStartDate,
        defaultValue: defaultValue,
        defaultView: defaultView,
        maxDate: maxDate,
        maxDetail: maxDetail,
        minDate: minDate,
        minDetail: minDetail,
        value: valueProps,
        view: viewProps
    });
    var value = function() {
        var rawValue = function() {
            // In the middle of range selection, use value from state
            if (selectRange && getIsSingleValue(valueState)) {
                return valueState;
            }
            return valueProps !== undefined ? valueProps : valueState;
        }();
        if (!rawValue) {
            return null;
        }
        return Array.isArray(rawValue) ? rawValue.map(function(el) {
            return el !== null ? toDate(el) : null;
        }) : rawValue !== null ? toDate(rawValue) : null;
    }();
    var valueType = getValueType(maxDetail);
    var view = getView(viewProps || viewState, minDetail, maxDetail);
    var views = getLimitedViews(minDetail, maxDetail);
    var hover = selectRange ? hoverState : null;
    var drillDownAvailable = views.indexOf(view) < views.length - 1;
    var drillUpAvailable = views.indexOf(view) > 0;
    var getProcessedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Calendar.Calendar.useCallback[getProcessedValue]": function(value) {
            var processFunction = ({
                "Calendar.Calendar.useCallback[getProcessedValue].processFunction": function() {
                    switch(returnValue){
                        case 'start':
                            return getDetailValueFrom;
                        case 'end':
                            return getDetailValueTo;
                        case 'range':
                            return getDetailValueArray;
                        default:
                            throw new Error('Invalid returnValue.');
                    }
                }
            })["Calendar.Calendar.useCallback[getProcessedValue].processFunction"]();
            return processFunction({
                maxDate: maxDate,
                maxDetail: maxDetail,
                minDate: minDate,
                value: value
            });
        }
    }["Calendar.Calendar.useCallback[getProcessedValue]"], [
        maxDate,
        maxDetail,
        minDate,
        returnValue
    ]);
    var setActiveStartDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Calendar.Calendar.useCallback[setActiveStartDate]": function(nextActiveStartDate, action) {
            setActiveStartDateState(nextActiveStartDate);
            var args = {
                action: action,
                activeStartDate: nextActiveStartDate,
                value: value,
                view: view
            };
            if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
                onActiveStartDateChange(args);
            }
        }
    }["Calendar.Calendar.useCallback[setActiveStartDate]"], [
        activeStartDate,
        onActiveStartDateChange,
        value,
        view
    ]);
    var onClickTile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Calendar.Calendar.useCallback[onClickTile]": function(value, event) {
            var callback = ({
                "Calendar.Calendar.useCallback[onClickTile].callback": function() {
                    switch(view){
                        case 'century':
                            return onClickDecade;
                        case 'decade':
                            return onClickYear;
                        case 'year':
                            return onClickMonth;
                        case 'month':
                            return onClickDay;
                        default:
                            throw new Error("Invalid view: ".concat(view, "."));
                    }
                }
            })["Calendar.Calendar.useCallback[onClickTile].callback"]();
            if (callback) callback(value, event);
        }
    }["Calendar.Calendar.useCallback[onClickTile]"], [
        onClickDay,
        onClickDecade,
        onClickMonth,
        onClickYear,
        view
    ]);
    var drillDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Calendar.Calendar.useCallback[drillDown]": function(nextActiveStartDate, event) {
            if (!drillDownAvailable) {
                return;
            }
            onClickTile(nextActiveStartDate, event);
            var nextView = views[views.indexOf(view) + 1];
            if (!nextView) {
                throw new Error('Attempted to drill down from the lowest view.');
            }
            setActiveStartDateState(nextActiveStartDate);
            setViewState(nextView);
            var args = {
                action: 'drillDown',
                activeStartDate: nextActiveStartDate,
                value: value,
                view: nextView
            };
            if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
                onActiveStartDateChange(args);
            }
            if (onViewChange && view !== nextView) {
                onViewChange(args);
            }
            if (onDrillDown) {
                onDrillDown(args);
            }
        }
    }["Calendar.Calendar.useCallback[drillDown]"], [
        activeStartDate,
        drillDownAvailable,
        onActiveStartDateChange,
        onClickTile,
        onDrillDown,
        onViewChange,
        value,
        view,
        views
    ]);
    var drillUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Calendar.Calendar.useCallback[drillUp]": function() {
            if (!drillUpAvailable) {
                return;
            }
            var nextView = views[views.indexOf(view) - 1];
            if (!nextView) {
                throw new Error('Attempted to drill up from the highest view.');
            }
            var nextActiveStartDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBegin"])(nextView, activeStartDate);
            setActiveStartDateState(nextActiveStartDate);
            setViewState(nextView);
            var args = {
                action: 'drillUp',
                activeStartDate: nextActiveStartDate,
                value: value,
                view: nextView
            };
            if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
                onActiveStartDateChange(args);
            }
            if (onViewChange && view !== nextView) {
                onViewChange(args);
            }
            if (onDrillUp) {
                onDrillUp(args);
            }
        }
    }["Calendar.Calendar.useCallback[drillUp]"], [
        activeStartDate,
        drillUpAvailable,
        onActiveStartDateChange,
        onDrillUp,
        onViewChange,
        value,
        view,
        views
    ]);
    var onChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Calendar.Calendar.useCallback[onChange]": function(rawNextValue, event) {
            var previousValue = value;
            onClickTile(rawNextValue, event);
            var isFirstValueInRange = selectRange && !getIsSingleValue(previousValue);
            var nextValue;
            if (selectRange) {
                // Range selection turned on
                if (isFirstValueInRange) {
                    // Value has 0 or 2 elements - either way we're starting a new array
                    // First value
                    nextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBegin"])(valueType, rawNextValue);
                } else {
                    if (!previousValue) {
                        throw new Error('previousValue is required');
                    }
                    if (Array.isArray(previousValue)) {
                        throw new Error('previousValue must not be an array');
                    }
                    // Second value
                    nextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueRange"])(valueType, previousValue, rawNextValue);
                }
            } else {
                // Range selection turned off
                nextValue = getProcessedValue(rawNextValue);
            }
            var nextActiveStartDate = // Range selection turned off
            !selectRange || // Range selection turned on, first value
            isFirstValueInRange || // Range selection turned on, second value, goToRangeStartOnSelect toggled on
            goToRangeStartOnSelect ? getActiveStartDate({
                maxDate: maxDate,
                maxDetail: maxDetail,
                minDate: minDate,
                minDetail: minDetail,
                value: nextValue,
                view: view
            }) : null;
            event.persist();
            setActiveStartDateState(nextActiveStartDate);
            setValueState(nextValue);
            var args = {
                action: 'onChange',
                activeStartDate: nextActiveStartDate,
                value: nextValue,
                view: view
            };
            if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
                onActiveStartDateChange(args);
            }
            if (onChangeProps) {
                if (selectRange) {
                    var isSingleValue = getIsSingleValue(nextValue);
                    if (!isSingleValue) {
                        onChangeProps(nextValue || null, event);
                    } else if (allowPartialRange) {
                        if (Array.isArray(nextValue)) {
                            throw new Error('value must not be an array');
                        }
                        onChangeProps([
                            nextValue || null,
                            null
                        ], event);
                    }
                } else {
                    onChangeProps(nextValue || null, event);
                }
            }
        }
    }["Calendar.Calendar.useCallback[onChange]"], [
        activeStartDate,
        allowPartialRange,
        getProcessedValue,
        goToRangeStartOnSelect,
        maxDate,
        maxDetail,
        minDate,
        minDetail,
        onActiveStartDateChange,
        onChangeProps,
        onClickTile,
        selectRange,
        value,
        valueType,
        view
    ]);
    function onMouseOver(nextHover) {
        setHoverState(nextHover);
    }
    function onMouseLeave() {
        setHoverState(null);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "Calendar.Calendar.useImperativeHandle": function() {
            return {
                activeStartDate: activeStartDate,
                drillDown: drillDown,
                drillUp: drillUp,
                onChange: onChange,
                setActiveStartDate: setActiveStartDate,
                value: value,
                view: view
            };
        }
    }["Calendar.Calendar.useImperativeHandle"], [
        activeStartDate,
        drillDown,
        drillUp,
        onChange,
        setActiveStartDate,
        value,
        view
    ]);
    function renderContent(next) {
        var currentActiveStartDate = next ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBeginNext"])(view, activeStartDate) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBegin"])(view, activeStartDate);
        var onClick = drillDownAvailable ? drillDown : onChange;
        var commonProps = {
            activeStartDate: currentActiveStartDate,
            hover: hover,
            locale: locale,
            maxDate: maxDate,
            minDate: minDate,
            onClick: onClick,
            onMouseOver: selectRange ? onMouseOver : undefined,
            tileClassName: tileClassName,
            tileContent: tileContent,
            tileDisabled: tileDisabled,
            value: value,
            valueType: valueType
        };
        switch(view){
            case 'century':
                {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$CenturyView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __assign({
                        formatYear: formatYear,
                        showNeighboringCentury: showNeighboringCentury
                    }, commonProps));
                }
            case 'decade':
                {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$DecadeView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __assign({
                        formatYear: formatYear,
                        showNeighboringDecade: showNeighboringDecade
                    }, commonProps));
                }
            case 'year':
                {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$YearView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __assign({
                        formatMonth: formatMonth,
                        formatMonthYear: formatMonthYear
                    }, commonProps));
                }
            case 'month':
                {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __assign({
                        calendarType: calendarType,
                        formatDay: formatDay,
                        formatLongDate: formatLongDate,
                        formatShortWeekday: formatShortWeekday,
                        formatWeekday: formatWeekday,
                        onClickWeekNumber: onClickWeekNumber,
                        onMouseLeave: selectRange ? onMouseLeave : undefined,
                        showFixedNumberOfWeeks: typeof showFixedNumberOfWeeks !== 'undefined' ? showFixedNumberOfWeeks : showDoubleView,
                        showNeighboringMonth: showNeighboringMonth,
                        showWeekNumbers: showWeekNumbers
                    }, commonProps));
                }
            default:
                throw new Error("Invalid view: ".concat(view, "."));
        }
    }
    function renderNavigation() {
        if (!showNavigation) {
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Calendar$2f$Navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            activeStartDate: activeStartDate,
            drillUp: drillUp,
            formatMonthYear: formatMonthYear,
            formatYear: formatYear,
            locale: locale,
            maxDate: maxDate,
            minDate: minDate,
            navigationAriaLabel: navigationAriaLabel,
            navigationAriaLive: navigationAriaLive,
            navigationLabel: navigationLabel,
            next2AriaLabel: next2AriaLabel,
            next2Label: next2Label,
            nextAriaLabel: nextAriaLabel,
            nextLabel: nextLabel,
            prev2AriaLabel: prev2AriaLabel,
            prev2Label: prev2Label,
            prevAriaLabel: prevAriaLabel,
            prevLabel: prevLabel,
            setActiveStartDate: setActiveStartDate,
            showDoubleView: showDoubleView,
            view: view,
            views: views
        });
    }
    var valueArray = Array.isArray(value) ? value : [
        value
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(baseClassName, selectRange && valueArray.length === 1 && "".concat(baseClassName, "--selectRange"), showDoubleView && "".concat(baseClassName, "--doubleView"), className),
        ref: inputRef,
        children: [
            renderNavigation(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: "".concat(baseClassName, "__viewContainer"),
                onBlur: selectRange ? onMouseLeave : undefined,
                onMouseLeave: selectRange ? onMouseLeave : undefined,
                children: [
                    renderContent(),
                    showDoubleView ? renderContent(true) : null
                ]
            })
        ]
    });
});
const __TURBOPACK__default__export__ = Calendar;
}),
"[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/Calendar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$CenturyView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/CenturyView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$DecadeView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/DecadeView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/MonthView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Calendar$2f$Navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/Calendar/Navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$YearView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-calendar/dist/YearView.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/image-blur-svg.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * A shared function, used on both client and server, to generate a SVG blur placeholder.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getImageBlurSvg", {
    enumerable: true,
    get: function() {
        return getImageBlurSvg;
    }
});
function getImageBlurSvg({ widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit }) {
    const std = 20;
    const svgWidth = blurWidth ? blurWidth * 40 : widthInt;
    const svgHeight = blurHeight ? blurHeight * 40 : heightInt;
    const viewBox = svgWidth && svgHeight ? `viewBox='0 0 ${svgWidth} ${svgHeight}'` : '';
    const preserveAspectRatio = viewBox ? 'none' : objectFit === 'contain' ? 'xMidYMid' : objectFit === 'cover' ? 'xMidYMid slice' : 'none';
    return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${viewBox}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='${std}'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='${std}'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${preserveAspectRatio}' style='filter: url(%23b);' href='${blurDataURL}'/%3E%3C/svg%3E`;
} //# sourceMappingURL=image-blur-svg.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    VALID_LOADERS: null,
    imageConfigDefault: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VALID_LOADERS: function() {
        return VALID_LOADERS;
    },
    imageConfigDefault: function() {
        return imageConfigDefault;
    }
});
const VALID_LOADERS = [
    'default',
    'imgix',
    'cloudinary',
    'akamai',
    'custom'
];
const imageConfigDefault = {
    deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
    ],
    imageSizes: [
        32,
        48,
        64,
        96,
        128,
        256,
        384
    ],
    path: '/_next/image',
    loader: 'default',
    loaderFile: '',
    /**
   * @deprecated Use `remotePatterns` instead to protect your application from malicious users.
   */ domains: [],
    disableStaticImages: false,
    minimumCacheTTL: 14400,
    formats: [
        'image/webp'
    ],
    maximumRedirects: 3,
    dangerouslyAllowLocalIP: false,
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: `script-src 'none'; frame-src 'none'; sandbox;`,
    contentDispositionType: 'attachment',
    localPatterns: undefined,
    remotePatterns: [],
    qualities: [
        75
    ],
    unoptimized: false
}; //# sourceMappingURL=image-config.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getImgProps", {
    enumerable: true,
    get: function() {
        return getImgProps;
    }
});
const _warnonce = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _imageblursvg = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/image-blur-svg.js [app-client] (ecmascript)");
const _imageconfig = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)");
const VALID_LOADING_VALUES = [
    'lazy',
    'eager',
    undefined
];
// Object-fit values that are not valid background-size values
const INVALID_BACKGROUND_SIZE_VALUES = [
    '-moz-initial',
    'fill',
    'none',
    'scale-down',
    undefined
];
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return !!src && typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}
const allImgs = new Map();
let perfObserver;
function getInt(x) {
    if (typeof x === 'undefined') {
        return x;
    }
    if (typeof x === 'number') {
        return Number.isFinite(x) ? x : NaN;
    }
    if (typeof x === 'string' && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
function getWidths({ deviceSizes, allSizes }, width, sizes) {
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: 'w'
            };
        }
        return {
            widths: allSizes,
            kind: 'w'
        };
    }
    if (typeof width !== 'number') {
        return {
            widths: deviceSizes,
            kind: 'w'
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: 'x'
    };
}
function generateImgAttrs({ config, src, unoptimized, width, quality, sizes, loader }) {
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths, kind } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === 'w' ? '100vw' : sizes,
        srcSet: widths.map((w, i)=>`${loader({
                config,
                src,
                quality,
                width: w
            })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getImgProps({ src, sizes, unoptimized = false, priority = false, preload = false, loading, className, quality, width, height, fill = false, style, overrideSrc, onLoad, onLoadingComplete, placeholder = 'empty', blurDataURL, fetchPriority, decoding = 'async', layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest }, _state) {
    const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
    let config;
    let c = imgConf || _imageconfig.imageConfigDefault;
    if ('allSizes' in c) {
        config = c;
    } else {
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        const qualities = c.qualities?.sort((a, b)=>a - b);
        config = {
            ...c,
            allSizes,
            deviceSizes,
            qualities
        };
    }
    if (typeof defaultLoader === 'undefined') {
        throw Object.defineProperty(new Error('images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config'), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: false,
            configurable: true
        });
    }
    let loader = rest.loader || defaultLoader;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    delete rest.srcSet;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = '__next_img_default' in loader;
    if (isDefaultLoader) {
        if (config.loader === 'custom') {
            throw Object.defineProperty(new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: false,
                configurable: true
            });
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        loader = (obj)=>{
            const { config: _, ...opts } = obj;
            return customImageLoader(opts);
        };
    }
    if (layout) {
        if (layout === 'fill') {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: '100%',
                height: 'auto'
            },
            responsive: {
                width: '100%',
                height: 'auto'
            }
        };
        const layoutToSizes = {
            responsive: '100vw',
            fill: '100vw'
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = {
                ...style,
                ...layoutStyle
            };
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = '';
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw Object.defineProperty(new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: false,
                configurable: true
            });
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw Object.defineProperty(new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: false,
                configurable: true
            });
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === 'string' ? src : staticSrc;
    let isLazy = !priority && !preload && (loading === 'lazy' || typeof loading === 'undefined');
    if (!src || src.startsWith('data:') || src.startsWith('blob:')) {
        // https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && !config.dangerouslyAllowSVG && src.split('?', 1)[0].endsWith('.svg')) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    const qualityInt = getInt(quality);
    if ("TURBOPACK compile-time truthy", 1) {
        if (config.output === 'export' && isDefaultLoader && !unoptimized) {
            throw Object.defineProperty(new Error(`Image Optimization using the default loader is not compatible with \`{ output: 'export' }\`.
  Possible solutions:
    - Remove \`{ output: 'export' }\` and run "next start" to run server mode including the Image Optimization API.
    - Configure \`{ images: { unoptimized: true } }\` in \`next.config.js\` to disable the Image Optimization API.
  Read more: https://nextjs.org/docs/messages/export-image-api`), "__NEXT_ERROR_CODE", {
                value: "E500",
                enumerable: false,
                configurable: true
            });
        }
        if (!src) {
            // React doesn't show the stack trace and there's
            // no `src` to help identify which image, so we
            // instead console.error(ref) during mount.
            unoptimized = true;
        } else {
            if (fill) {
                if (width) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "width" and "fill" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                        value: "E96",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (height) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "height" and "fill" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                        value: "E115",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.position && style.position !== 'absolute') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.position" properties. Images with "fill" always use position absolute - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E216",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.width && style.width !== '100%') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.width" properties. Images with "fill" always use width 100% - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E73",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.height && style.height !== '100%') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.height" properties. Images with "fill" always use height 100% - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E404",
                        enumerable: false,
                        configurable: true
                    });
                }
            } else {
                if (typeof widthInt === 'undefined') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" is missing required "width" property.`), "__NEXT_ERROR_CODE", {
                        value: "E451",
                        enumerable: false,
                        configurable: true
                    });
                } else if (isNaN(widthInt)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "width" property. Expected a numeric value in pixels but received "${width}".`), "__NEXT_ERROR_CODE", {
                        value: "E66",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (typeof heightInt === 'undefined') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" is missing required "height" property.`), "__NEXT_ERROR_CODE", {
                        value: "E397",
                        enumerable: false,
                        configurable: true
                    });
                } else if (isNaN(heightInt)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "height" property. Expected a numeric value in pixels but received "${height}".`), "__NEXT_ERROR_CODE", {
                        value: "E444",
                        enumerable: false,
                        configurable: true
                    });
                }
                // eslint-disable-next-line no-control-regex
                if (/^[\x00-\x20]/.test(src)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" cannot start with a space or control character. Use src.trimStart() to remove it or encodeURIComponent(src) to keep it.`), "__NEXT_ERROR_CODE", {
                        value: "E176",
                        enumerable: false,
                        configurable: true
                    });
                }
                // eslint-disable-next-line no-control-regex
                if (/[\x00-\x20]$/.test(src)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" cannot end with a space or control character. Use src.trimEnd() to remove it or encodeURIComponent(src) to keep it.`), "__NEXT_ERROR_CODE", {
                        value: "E21",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
        if (!VALID_LOADING_VALUES.includes(loading)) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`), "__NEXT_ERROR_CODE", {
                value: "E357",
                enumerable: false,
                configurable: true
            });
        }
        if (priority && loading === 'lazy') {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                value: "E218",
                enumerable: false,
                configurable: true
            });
        }
        if (preload && loading === 'lazy') {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "preload" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                value: "E803",
                enumerable: false,
                configurable: true
            });
        }
        if (preload && priority) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "preload" and "priority" properties. Only "preload" should be used.`), "__NEXT_ERROR_CODE", {
                value: "E802",
                enumerable: false,
                configurable: true
            });
        }
        if (placeholder !== 'empty' && placeholder !== 'blur' && !placeholder.startsWith('data:image/')) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "placeholder" property "${placeholder}".`), "__NEXT_ERROR_CODE", {
                value: "E431",
                enumerable: false,
                configurable: true
            });
        }
        if (placeholder !== 'empty') {
            if (widthInt && heightInt && widthInt * heightInt < 1600) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder" property to improve performance.`);
            }
        }
        if (qualityInt && config.qualities && !config.qualities.includes(qualityInt)) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using quality "${qualityInt}" which is not configured in images.qualities [${config.qualities.join(', ')}]. Please update your config to [${[
                ...config.qualities,
                qualityInt
            ].sort().join(', ')}].` + `\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-qualities`);
        }
        if (placeholder === 'blur' && !blurDataURL) {
            const VALID_BLUR_EXT = [
                'jpeg',
                'png',
                'webp',
                'avif'
            ] // should match next-image-loader
            ;
            throw Object.defineProperty(new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
        Possible solutions:
          - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
          - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')} (animated images not supported)
          - Remove the "placeholder" property, effectively no blur effect
        Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`), "__NEXT_ERROR_CODE", {
                value: "E371",
                enumerable: false,
                configurable: true
            });
        }
        if ('ref' in rest) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoad" property instead.`);
        }
        if (!unoptimized && !isDefaultLoader) {
            const urlStr = loader({
                config,
                src,
                width: widthInt || 400,
                quality: qualityInt || 75
            });
            let url;
            try {
                url = new URL(urlStr);
            } catch (err) {}
            if (urlStr === src || url && url.pathname === src && !url.search) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
            }
        }
        if (onLoadingComplete) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using deprecated "onLoadingComplete" property. Please use the "onLoad" property instead.`);
        }
        for (const [legacyKey, legacyValue] of Object.entries({
            layout,
            objectFit,
            objectPosition,
            lazyBoundary,
            lazyRoot
        })){
            if (legacyValue) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" has legacy prop "${legacyKey}". Did you forget to run the codemod?` + `\nRead more: https://nextjs.org/docs/messages/next-image-upgrade-to-13`);
            }
        }
        if (typeof window !== 'undefined' && !perfObserver && window.PerformanceObserver) {
            perfObserver = new PerformanceObserver((entryList)=>{
                for (const entry of entryList.getEntries()){
                    // @ts-ignore - missing "LargestContentfulPaint" class with "element" prop
                    const imgSrc = entry?.element?.src || '';
                    const lcpImage = allImgs.get(imgSrc);
                    if (lcpImage && lcpImage.loading === 'lazy' && lcpImage.placeholder === 'empty' && !lcpImage.src.startsWith('data:') && !lcpImage.src.startsWith('blob:')) {
                        // https://web.dev/lcp/#measure-lcp-in-javascript
                        (0, _warnonce.warnOnce)(`Image with src "${lcpImage.src}" was detected as the Largest Contentful Paint (LCP). Please add the \`loading="eager"\` property if this image is above the fold.` + `\nRead more: https://nextjs.org/docs/app/api-reference/components/image#loading`);
                    }
                }
            });
            try {
                perfObserver.observe({
                    type: 'largest-contentful-paint',
                    buffered: true
                });
            } catch (err) {
                // Log error but don't crash the app
                console.error(err);
            }
        }
    }
    const imgStyle = Object.assign(fill ? {
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: 'transparent'
    }, style);
    const backgroundImage = !blurComplete && placeholder !== 'empty' ? placeholder === 'blur' ? `url("data:image/svg+xml;charset=utf-8,${(0, _imageblursvg.getImageBlurSvg)({
        widthInt,
        heightInt,
        blurWidth,
        blurHeight,
        blurDataURL: blurDataURL || '',
        objectFit: imgStyle.objectFit
    })}")` : `url("${placeholder}")` // assume `data:image/`
     : null;
    const backgroundSize = !INVALID_BACKGROUND_SIZE_VALUES.includes(imgStyle.objectFit) ? imgStyle.objectFit : imgStyle.objectFit === 'fill' ? '100% 100%' // the background-size equivalent of `fill`
     : 'cover';
    let placeholderStyle = backgroundImage ? {
        backgroundSize,
        backgroundPosition: imgStyle.objectPosition || '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundImage
    } : {};
    if ("TURBOPACK compile-time truthy", 1) {
        if (placeholderStyle.backgroundImage && placeholder === 'blur' && blurDataURL?.startsWith('/')) {
            // During `next dev`, we don't want to generate blur placeholders with webpack
            // because it can delay starting the dev server. Instead, `next-image-loader.js`
            // will inline a special url to lazily generate the blur placeholder at request time.
            placeholderStyle.backgroundImage = `url("${blurDataURL}")`;
        }
    }
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    const loadingFinal = isLazy ? 'lazy' : loading;
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof window !== 'undefined') {
            let fullUrl;
            try {
                fullUrl = new URL(imgAttributes.src);
            } catch (e) {
                fullUrl = new URL(imgAttributes.src, window.location.href);
            }
            allImgs.set(fullUrl.href, {
                src,
                loading: loadingFinal,
                placeholder
            });
        }
    }
    const props = {
        ...rest,
        loading: loadingFinal,
        fetchPriority,
        width: widthInt,
        height: heightInt,
        decoding,
        className,
        style: {
            ...imgStyle,
            ...placeholderStyle
        },
        sizes: imgAttributes.sizes,
        srcSet: imgAttributes.srcSet,
        src: overrideSrc || imgAttributes.src
    };
    const meta = {
        unoptimized,
        preload: preload || priority,
        placeholder,
        fill
    };
    return {
        props,
        meta
    };
} //# sourceMappingURL=get-img-props.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/side-effect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SideEffect;
    }
});
const _react = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const isServer = typeof window === 'undefined';
const useClientOnlyLayoutEffect = isServer ? ()=>{} : _react.useLayoutEffect;
const useClientOnlyEffect = isServer ? ()=>{} : _react.useEffect;
function SideEffect(props) {
    const { headManager, reduceComponentsToState } = props;
    function emitChange() {
        if (headManager && headManager.mountedInstances) {
            const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
            headManager.updateHead(reduceComponentsToState(headElements));
        }
    }
    if (isServer) {
        headManager?.mountedInstances?.add(props.children);
        emitChange();
    }
    useClientOnlyLayoutEffect({
        "SideEffect.useClientOnlyLayoutEffect": ()=>{
            headManager?.mountedInstances?.add(props.children);
            return ({
                "SideEffect.useClientOnlyLayoutEffect": ()=>{
                    headManager?.mountedInstances?.delete(props.children);
                }
            })["SideEffect.useClientOnlyLayoutEffect"];
        }
    }["SideEffect.useClientOnlyLayoutEffect"]);
    // We need to call `updateHead` method whenever the `SideEffect` is trigger in all
    // life-cycles: mount, update, unmount. However, if there are multiple `SideEffect`s
    // being rendered, we only trigger the method from the last one.
    // This is ensured by keeping the last unflushed `updateHead` in the `_pendingUpdate`
    // singleton in the layout effect pass, and actually trigger it in the effect pass.
    useClientOnlyLayoutEffect({
        "SideEffect.useClientOnlyLayoutEffect": ()=>{
            if (headManager) {
                headManager._pendingUpdate = emitChange;
            }
            return ({
                "SideEffect.useClientOnlyLayoutEffect": ()=>{
                    if (headManager) {
                        headManager._pendingUpdate = emitChange;
                    }
                }
            })["SideEffect.useClientOnlyLayoutEffect"];
        }
    }["SideEffect.useClientOnlyLayoutEffect"]);
    useClientOnlyEffect({
        "SideEffect.useClientOnlyEffect": ()=>{
            if (headManager && headManager._pendingUpdate) {
                headManager._pendingUpdate();
                headManager._pendingUpdate = null;
            }
            return ({
                "SideEffect.useClientOnlyEffect": ()=>{
                    if (headManager && headManager._pendingUpdate) {
                        headManager._pendingUpdate();
                        headManager._pendingUpdate = null;
                    }
                }
            })["SideEffect.useClientOnlyEffect"];
        }
    }["SideEffect.useClientOnlyEffect"]);
    return null;
} //# sourceMappingURL=side-effect.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/head.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    defaultHead: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    defaultHead: function() {
        return defaultHead;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _sideeffect = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/side-effect.js [app-client] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
function defaultHead() {
    const head = [
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"),
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")
    ];
    return head;
}
function onlyReactElement(list, child) {
    // React children can be "string" or "number" in this case we ignore them for backwards compat
    if (typeof child === 'string' || typeof child === 'number') {
        return list;
    }
    // Adds support for React.Fragment
    if (child.type === _react.default.Fragment) {
        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{
            if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
                return fragmentList;
            }
            return fragmentList.concat(fragmentChild);
        }, []));
    }
    return list.concat(child);
}
const METATYPES = [
    'name',
    'httpEquiv',
    'charSet',
    'itemProp'
];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/ function unique() {
    const keys = new Set();
    const tags = new Set();
    const metaTypes = new Set();
    const metaCategories = {};
    return (h)=>{
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
            hasKey = true;
            const key = h.key.slice(h.key.indexOf('$') + 1);
            if (keys.has(key)) {
                isUnique = false;
            } else {
                keys.add(key);
            }
        }
        // eslint-disable-next-line default-case
        switch(h.type){
            case 'title':
            case 'base':
                if (tags.has(h.type)) {
                    isUnique = false;
                } else {
                    tags.add(h.type);
                }
                break;
            case 'meta':
                for(let i = 0, len = METATYPES.length; i < len; i++){
                    const metatype = METATYPES[i];
                    if (!h.props.hasOwnProperty(metatype)) continue;
                    if (metatype === 'charSet') {
                        if (metaTypes.has(metatype)) {
                            isUnique = false;
                        } else {
                            metaTypes.add(metatype);
                        }
                    } else {
                        const category = h.props[metatype];
                        const categories = metaCategories[metatype] || new Set();
                        if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
                            isUnique = false;
                        } else {
                            categories.add(category);
                            metaCategories[metatype] = categories;
                        }
                    }
                }
                break;
        }
        return isUnique;
    };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */ function reduceComponents(headChildrenElements) {
    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead().reverse()).filter(unique()).reverse().map((c, i)=>{
        const key = c.key || i;
        if ("TURBOPACK compile-time truthy", 1) {
            // omit JSON-LD structured data snippets from the warning
            if (c.type === 'script' && c.props['type'] !== 'application/ld+json') {
                const srcMessage = c.props['src'] ? `<script> tag with src="${c.props['src']}"` : `inline <script>`;
                (0, _warnonce.warnOnce)(`Do not add <script> tags using next/head (see ${srcMessage}). Use next/script instead. \nSee more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component`);
            } else if (c.type === 'link' && c.props['rel'] === 'stylesheet') {
                (0, _warnonce.warnOnce)(`Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="${c.props['href']}"). Use Document instead. \nSee more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component`);
            }
        }
        return /*#__PURE__*/ _react.default.cloneElement(c, {
            key
        });
    });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */ function Head({ children }) {
    const headManager = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_sideeffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager: headManager,
        children: children
    });
}
const _default = Head;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ImageConfigContext", {
    enumerable: true,
    get: function() {
        return ImageConfigContext;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _imageconfig = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)");
const ImageConfigContext = _react.default.createContext(_imageconfig.imageConfigDefault);
if ("TURBOPACK compile-time truthy", 1) {
    ImageConfigContext.displayName = 'ImageConfigContext';
} //# sourceMappingURL=image-config-context.shared-runtime.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RouterContext", {
    enumerable: true,
    get: function() {
        return RouterContext;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const RouterContext = _react.default.createContext(null);
if ("TURBOPACK compile-time truthy", 1) {
    RouterContext.displayName = 'RouterContext';
} //# sourceMappingURL=router-context.shared-runtime.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/find-closest-quality.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findClosestQuality", {
    enumerable: true,
    get: function() {
        return findClosestQuality;
    }
});
function findClosestQuality(quality, config) {
    const q = quality || 75;
    if (!config?.qualities?.length) {
        return q;
    }
    return config.qualities.reduce((prev, cur)=>Math.abs(cur - q) < Math.abs(prev - q) ? cur : prev, 0);
} //# sourceMappingURL=find-closest-quality.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/picomatch/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
(()=>{
    "use strict";
    var t = {
        170: (t, e, u)=>{
            const n = u(510);
            const isWindows = ()=>{
                if (typeof navigator !== "undefined" && navigator.platform) {
                    const t = navigator.platform.toLowerCase();
                    return t === "win32" || t === "windows";
                }
                if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].platform) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].platform === "win32";
                }
                return false;
            };
            function picomatch(t, e, u = false) {
                if (e && (e.windows === null || e.windows === undefined)) {
                    e = {
                        ...e,
                        windows: isWindows()
                    };
                }
                return n(t, e, u);
            }
            Object.assign(picomatch, n);
            t.exports = picomatch;
        },
        154: (t)=>{
            const e = "\\\\/";
            const u = `[^${e}]`;
            const n = "\\.";
            const o = "\\+";
            const s = "\\?";
            const r = "\\/";
            const a = "(?=.)";
            const i = "[^/]";
            const c = `(?:${r}|$)`;
            const p = `(?:^|${r})`;
            const l = `${n}{1,2}${c}`;
            const f = `(?!${n})`;
            const A = `(?!${p}${l})`;
            const _ = `(?!${n}{0,1}${c})`;
            const R = `(?!${l})`;
            const E = `[^.${r}]`;
            const h = `${i}*?`;
            const g = "/";
            const b = {
                DOT_LITERAL: n,
                PLUS_LITERAL: o,
                QMARK_LITERAL: s,
                SLASH_LITERAL: r,
                ONE_CHAR: a,
                QMARK: i,
                END_ANCHOR: c,
                DOTS_SLASH: l,
                NO_DOT: f,
                NO_DOTS: A,
                NO_DOT_SLASH: _,
                NO_DOTS_SLASH: R,
                QMARK_NO_DOT: E,
                STAR: h,
                START_ANCHOR: p,
                SEP: g
            };
            const C = {
                ...b,
                SLASH_LITERAL: `[${e}]`,
                QMARK: u,
                STAR: `${u}*?`,
                DOTS_SLASH: `${n}{1,2}(?:[${e}]|$)`,
                NO_DOT: `(?!${n})`,
                NO_DOTS: `(?!(?:^|[${e}])${n}{1,2}(?:[${e}]|$))`,
                NO_DOT_SLASH: `(?!${n}{0,1}(?:[${e}]|$))`,
                NO_DOTS_SLASH: `(?!${n}{1,2}(?:[${e}]|$))`,
                QMARK_NO_DOT: `[^.${e}]`,
                START_ANCHOR: `(?:^|[${e}])`,
                END_ANCHOR: `(?:[${e}]|$)`,
                SEP: "\\"
            };
            const y = {
                alnum: "a-zA-Z0-9",
                alpha: "a-zA-Z",
                ascii: "\\x00-\\x7F",
                blank: " \\t",
                cntrl: "\\x00-\\x1F\\x7F",
                digit: "0-9",
                graph: "\\x21-\\x7E",
                lower: "a-z",
                print: "\\x20-\\x7E ",
                punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
                space: " \\t\\r\\n\\v\\f",
                upper: "A-Z",
                word: "A-Za-z0-9_",
                xdigit: "A-Fa-f0-9"
            };
            t.exports = {
                MAX_LENGTH: 1024 * 64,
                POSIX_REGEX_SOURCE: y,
                REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
                REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
                REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
                REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
                REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
                REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
                REPLACEMENTS: {
                    "***": "*",
                    "**/**": "**",
                    "**/**/**": "**"
                },
                CHAR_0: 48,
                CHAR_9: 57,
                CHAR_UPPERCASE_A: 65,
                CHAR_LOWERCASE_A: 97,
                CHAR_UPPERCASE_Z: 90,
                CHAR_LOWERCASE_Z: 122,
                CHAR_LEFT_PARENTHESES: 40,
                CHAR_RIGHT_PARENTHESES: 41,
                CHAR_ASTERISK: 42,
                CHAR_AMPERSAND: 38,
                CHAR_AT: 64,
                CHAR_BACKWARD_SLASH: 92,
                CHAR_CARRIAGE_RETURN: 13,
                CHAR_CIRCUMFLEX_ACCENT: 94,
                CHAR_COLON: 58,
                CHAR_COMMA: 44,
                CHAR_DOT: 46,
                CHAR_DOUBLE_QUOTE: 34,
                CHAR_EQUAL: 61,
                CHAR_EXCLAMATION_MARK: 33,
                CHAR_FORM_FEED: 12,
                CHAR_FORWARD_SLASH: 47,
                CHAR_GRAVE_ACCENT: 96,
                CHAR_HASH: 35,
                CHAR_HYPHEN_MINUS: 45,
                CHAR_LEFT_ANGLE_BRACKET: 60,
                CHAR_LEFT_CURLY_BRACE: 123,
                CHAR_LEFT_SQUARE_BRACKET: 91,
                CHAR_LINE_FEED: 10,
                CHAR_NO_BREAK_SPACE: 160,
                CHAR_PERCENT: 37,
                CHAR_PLUS: 43,
                CHAR_QUESTION_MARK: 63,
                CHAR_RIGHT_ANGLE_BRACKET: 62,
                CHAR_RIGHT_CURLY_BRACE: 125,
                CHAR_RIGHT_SQUARE_BRACKET: 93,
                CHAR_SEMICOLON: 59,
                CHAR_SINGLE_QUOTE: 39,
                CHAR_SPACE: 32,
                CHAR_TAB: 9,
                CHAR_UNDERSCORE: 95,
                CHAR_VERTICAL_LINE: 124,
                CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
                extglobChars (t) {
                    return {
                        "!": {
                            type: "negate",
                            open: "(?:(?!(?:",
                            close: `))${t.STAR})`
                        },
                        "?": {
                            type: "qmark",
                            open: "(?:",
                            close: ")?"
                        },
                        "+": {
                            type: "plus",
                            open: "(?:",
                            close: ")+"
                        },
                        "*": {
                            type: "star",
                            open: "(?:",
                            close: ")*"
                        },
                        "@": {
                            type: "at",
                            open: "(?:",
                            close: ")"
                        }
                    };
                },
                globChars (t) {
                    return t === true ? C : b;
                }
            };
        },
        697: (t, e, u)=>{
            const n = u(154);
            const o = u(96);
            const { MAX_LENGTH: s, POSIX_REGEX_SOURCE: r, REGEX_NON_SPECIAL_CHARS: a, REGEX_SPECIAL_CHARS_BACKREF: i, REPLACEMENTS: c } = n;
            const expandRange = (t, e)=>{
                if (typeof e.expandRange === "function") {
                    return e.expandRange(...t, e);
                }
                t.sort();
                const u = `[${t.join("-")}]`;
                try {
                    new RegExp(u);
                } catch (e) {
                    return t.map((t)=>o.escapeRegex(t)).join("..");
                }
                return u;
            };
            const syntaxError = (t, e)=>`Missing ${t}: "${e}" - use "\\\\${e}" to match literal characters`;
            const parse = (t, e)=>{
                if (typeof t !== "string") {
                    throw new TypeError("Expected a string");
                }
                t = c[t] || t;
                const u = {
                    ...e
                };
                const p = typeof u.maxLength === "number" ? Math.min(s, u.maxLength) : s;
                let l = t.length;
                if (l > p) {
                    throw new SyntaxError(`Input length: ${l}, exceeds maximum allowed length: ${p}`);
                }
                const f = {
                    type: "bos",
                    value: "",
                    output: u.prepend || ""
                };
                const A = [
                    f
                ];
                const _ = u.capture ? "" : "?:";
                const R = n.globChars(u.windows);
                const E = n.extglobChars(R);
                const { DOT_LITERAL: h, PLUS_LITERAL: g, SLASH_LITERAL: b, ONE_CHAR: C, DOTS_SLASH: y, NO_DOT: $, NO_DOT_SLASH: x, NO_DOTS_SLASH: S, QMARK: H, QMARK_NO_DOT: v, STAR: d, START_ANCHOR: L } = R;
                const globstar = (t)=>`(${_}(?:(?!${L}${t.dot ? y : h}).)*?)`;
                const T = u.dot ? "" : $;
                const O = u.dot ? H : v;
                let k = u.bash === true ? globstar(u) : d;
                if (u.capture) {
                    k = `(${k})`;
                }
                if (typeof u.noext === "boolean") {
                    u.noextglob = u.noext;
                }
                const m = {
                    input: t,
                    index: -1,
                    start: 0,
                    dot: u.dot === true,
                    consumed: "",
                    output: "",
                    prefix: "",
                    backtrack: false,
                    negated: false,
                    brackets: 0,
                    braces: 0,
                    parens: 0,
                    quotes: 0,
                    globstar: false,
                    tokens: A
                };
                t = o.removePrefix(t, m);
                l = t.length;
                const w = [];
                const N = [];
                const I = [];
                let B = f;
                let G;
                const eos = ()=>m.index === l - 1;
                const D = m.peek = (e = 1)=>t[m.index + e];
                const M = m.advance = ()=>t[++m.index] || "";
                const remaining = ()=>t.slice(m.index + 1);
                const consume = (t = "", e = 0)=>{
                    m.consumed += t;
                    m.index += e;
                };
                const append = (t)=>{
                    m.output += t.output != null ? t.output : t.value;
                    consume(t.value);
                };
                const negate = ()=>{
                    let t = 1;
                    while(D() === "!" && (D(2) !== "(" || D(3) === "?")){
                        M();
                        m.start++;
                        t++;
                    }
                    if (t % 2 === 0) {
                        return false;
                    }
                    m.negated = true;
                    m.start++;
                    return true;
                };
                const increment = (t)=>{
                    m[t]++;
                    I.push(t);
                };
                const decrement = (t)=>{
                    m[t]--;
                    I.pop();
                };
                const push = (t)=>{
                    if (B.type === "globstar") {
                        const e = m.braces > 0 && (t.type === "comma" || t.type === "brace");
                        const u = t.extglob === true || w.length && (t.type === "pipe" || t.type === "paren");
                        if (t.type !== "slash" && t.type !== "paren" && !e && !u) {
                            m.output = m.output.slice(0, -B.output.length);
                            B.type = "star";
                            B.value = "*";
                            B.output = k;
                            m.output += B.output;
                        }
                    }
                    if (w.length && t.type !== "paren") {
                        w[w.length - 1].inner += t.value;
                    }
                    if (t.value || t.output) append(t);
                    if (B && B.type === "text" && t.type === "text") {
                        B.output = (B.output || B.value) + t.value;
                        B.value += t.value;
                        return;
                    }
                    t.prev = B;
                    A.push(t);
                    B = t;
                };
                const extglobOpen = (t, e)=>{
                    const n = {
                        ...E[e],
                        conditions: 1,
                        inner: ""
                    };
                    n.prev = B;
                    n.parens = m.parens;
                    n.output = m.output;
                    const o = (u.capture ? "(" : "") + n.open;
                    increment("parens");
                    push({
                        type: t,
                        value: e,
                        output: m.output ? "" : C
                    });
                    push({
                        type: "paren",
                        extglob: true,
                        value: M(),
                        output: o
                    });
                    w.push(n);
                };
                const extglobClose = (t)=>{
                    let n = t.close + (u.capture ? ")" : "");
                    let o;
                    if (t.type === "negate") {
                        let s = k;
                        if (t.inner && t.inner.length > 1 && t.inner.includes("/")) {
                            s = globstar(u);
                        }
                        if (s !== k || eos() || /^\)+$/.test(remaining())) {
                            n = t.close = `)$))${s}`;
                        }
                        if (t.inner.includes("*") && (o = remaining()) && /^\.[^\\/.]+$/.test(o)) {
                            const u = parse(o, {
                                ...e,
                                fastpaths: false
                            }).output;
                            n = t.close = `)${u})${s})`;
                        }
                        if (t.prev.type === "bos") {
                            m.negatedExtglob = true;
                        }
                    }
                    push({
                        type: "paren",
                        extglob: true,
                        value: G,
                        output: n
                    });
                    decrement("parens");
                };
                if (u.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(t)) {
                    let n = false;
                    let s = t.replace(i, (t, e, u, o, s, r)=>{
                        if (o === "\\") {
                            n = true;
                            return t;
                        }
                        if (o === "?") {
                            if (e) {
                                return e + o + (s ? H.repeat(s.length) : "");
                            }
                            if (r === 0) {
                                return O + (s ? H.repeat(s.length) : "");
                            }
                            return H.repeat(u.length);
                        }
                        if (o === ".") {
                            return h.repeat(u.length);
                        }
                        if (o === "*") {
                            if (e) {
                                return e + o + (s ? k : "");
                            }
                            return k;
                        }
                        return e ? t : `\\${t}`;
                    });
                    if (n === true) {
                        if (u.unescape === true) {
                            s = s.replace(/\\/g, "");
                        } else {
                            s = s.replace(/\\+/g, (t)=>t.length % 2 === 0 ? "\\\\" : t ? "\\" : "");
                        }
                    }
                    if (s === t && u.contains === true) {
                        m.output = t;
                        return m;
                    }
                    m.output = o.wrapOutput(s, m, e);
                    return m;
                }
                while(!eos()){
                    G = M();
                    if (G === "\0") {
                        continue;
                    }
                    if (G === "\\") {
                        const t = D();
                        if (t === "/" && u.bash !== true) {
                            continue;
                        }
                        if (t === "." || t === ";") {
                            continue;
                        }
                        if (!t) {
                            G += "\\";
                            push({
                                type: "text",
                                value: G
                            });
                            continue;
                        }
                        const e = /^\\+/.exec(remaining());
                        let n = 0;
                        if (e && e[0].length > 2) {
                            n = e[0].length;
                            m.index += n;
                            if (n % 2 !== 0) {
                                G += "\\";
                            }
                        }
                        if (u.unescape === true) {
                            G = M();
                        } else {
                            G += M();
                        }
                        if (m.brackets === 0) {
                            push({
                                type: "text",
                                value: G
                            });
                            continue;
                        }
                    }
                    if (m.brackets > 0 && (G !== "]" || B.value === "[" || B.value === "[^")) {
                        if (u.posix !== false && G === ":") {
                            const t = B.value.slice(1);
                            if (t.includes("[")) {
                                B.posix = true;
                                if (t.includes(":")) {
                                    const t = B.value.lastIndexOf("[");
                                    const e = B.value.slice(0, t);
                                    const u = B.value.slice(t + 2);
                                    const n = r[u];
                                    if (n) {
                                        B.value = e + n;
                                        m.backtrack = true;
                                        M();
                                        if (!f.output && A.indexOf(B) === 1) {
                                            f.output = C;
                                        }
                                        continue;
                                    }
                                }
                            }
                        }
                        if (G === "[" && D() !== ":" || G === "-" && D() === "]") {
                            G = `\\${G}`;
                        }
                        if (G === "]" && (B.value === "[" || B.value === "[^")) {
                            G = `\\${G}`;
                        }
                        if (u.posix === true && G === "!" && B.value === "[") {
                            G = "^";
                        }
                        B.value += G;
                        append({
                            value: G
                        });
                        continue;
                    }
                    if (m.quotes === 1 && G !== '"') {
                        G = o.escapeRegex(G);
                        B.value += G;
                        append({
                            value: G
                        });
                        continue;
                    }
                    if (G === '"') {
                        m.quotes = m.quotes === 1 ? 0 : 1;
                        if (u.keepQuotes === true) {
                            push({
                                type: "text",
                                value: G
                            });
                        }
                        continue;
                    }
                    if (G === "(") {
                        increment("parens");
                        push({
                            type: "paren",
                            value: G
                        });
                        continue;
                    }
                    if (G === ")") {
                        if (m.parens === 0 && u.strictBrackets === true) {
                            throw new SyntaxError(syntaxError("opening", "("));
                        }
                        const t = w[w.length - 1];
                        if (t && m.parens === t.parens + 1) {
                            extglobClose(w.pop());
                            continue;
                        }
                        push({
                            type: "paren",
                            value: G,
                            output: m.parens ? ")" : "\\)"
                        });
                        decrement("parens");
                        continue;
                    }
                    if (G === "[") {
                        if (u.nobracket === true || !remaining().includes("]")) {
                            if (u.nobracket !== true && u.strictBrackets === true) {
                                throw new SyntaxError(syntaxError("closing", "]"));
                            }
                            G = `\\${G}`;
                        } else {
                            increment("brackets");
                        }
                        push({
                            type: "bracket",
                            value: G
                        });
                        continue;
                    }
                    if (G === "]") {
                        if (u.nobracket === true || B && B.type === "bracket" && B.value.length === 1) {
                            push({
                                type: "text",
                                value: G,
                                output: `\\${G}`
                            });
                            continue;
                        }
                        if (m.brackets === 0) {
                            if (u.strictBrackets === true) {
                                throw new SyntaxError(syntaxError("opening", "["));
                            }
                            push({
                                type: "text",
                                value: G,
                                output: `\\${G}`
                            });
                            continue;
                        }
                        decrement("brackets");
                        const t = B.value.slice(1);
                        if (B.posix !== true && t[0] === "^" && !t.includes("/")) {
                            G = `/${G}`;
                        }
                        B.value += G;
                        append({
                            value: G
                        });
                        if (u.literalBrackets === false || o.hasRegexChars(t)) {
                            continue;
                        }
                        const e = o.escapeRegex(B.value);
                        m.output = m.output.slice(0, -B.value.length);
                        if (u.literalBrackets === true) {
                            m.output += e;
                            B.value = e;
                            continue;
                        }
                        B.value = `(${_}${e}|${B.value})`;
                        m.output += B.value;
                        continue;
                    }
                    if (G === "{" && u.nobrace !== true) {
                        increment("braces");
                        const t = {
                            type: "brace",
                            value: G,
                            output: "(",
                            outputIndex: m.output.length,
                            tokensIndex: m.tokens.length
                        };
                        N.push(t);
                        push(t);
                        continue;
                    }
                    if (G === "}") {
                        const t = N[N.length - 1];
                        if (u.nobrace === true || !t) {
                            push({
                                type: "text",
                                value: G,
                                output: G
                            });
                            continue;
                        }
                        let e = ")";
                        if (t.dots === true) {
                            const t = A.slice();
                            const n = [];
                            for(let e = t.length - 1; e >= 0; e--){
                                A.pop();
                                if (t[e].type === "brace") {
                                    break;
                                }
                                if (t[e].type !== "dots") {
                                    n.unshift(t[e].value);
                                }
                            }
                            e = expandRange(n, u);
                            m.backtrack = true;
                        }
                        if (t.comma !== true && t.dots !== true) {
                            const u = m.output.slice(0, t.outputIndex);
                            const n = m.tokens.slice(t.tokensIndex);
                            t.value = t.output = "\\{";
                            G = e = "\\}";
                            m.output = u;
                            for (const t of n){
                                m.output += t.output || t.value;
                            }
                        }
                        push({
                            type: "brace",
                            value: G,
                            output: e
                        });
                        decrement("braces");
                        N.pop();
                        continue;
                    }
                    if (G === "|") {
                        if (w.length > 0) {
                            w[w.length - 1].conditions++;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (G === ",") {
                        let t = G;
                        const e = N[N.length - 1];
                        if (e && I[I.length - 1] === "braces") {
                            e.comma = true;
                            t = "|";
                        }
                        push({
                            type: "comma",
                            value: G,
                            output: t
                        });
                        continue;
                    }
                    if (G === "/") {
                        if (B.type === "dot" && m.index === m.start + 1) {
                            m.start = m.index + 1;
                            m.consumed = "";
                            m.output = "";
                            A.pop();
                            B = f;
                            continue;
                        }
                        push({
                            type: "slash",
                            value: G,
                            output: b
                        });
                        continue;
                    }
                    if (G === ".") {
                        if (m.braces > 0 && B.type === "dot") {
                            if (B.value === ".") B.output = h;
                            const t = N[N.length - 1];
                            B.type = "dots";
                            B.output += G;
                            B.value += G;
                            t.dots = true;
                            continue;
                        }
                        if (m.braces + m.parens === 0 && B.type !== "bos" && B.type !== "slash") {
                            push({
                                type: "text",
                                value: G,
                                output: h
                            });
                            continue;
                        }
                        push({
                            type: "dot",
                            value: G,
                            output: h
                        });
                        continue;
                    }
                    if (G === "?") {
                        const t = B && B.value === "(";
                        if (!t && u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            extglobOpen("qmark", G);
                            continue;
                        }
                        if (B && B.type === "paren") {
                            const t = D();
                            let e = G;
                            if (B.value === "(" && !/[!=<:]/.test(t) || t === "<" && !/<([!=]|\w+>)/.test(remaining())) {
                                e = `\\${G}`;
                            }
                            push({
                                type: "text",
                                value: G,
                                output: e
                            });
                            continue;
                        }
                        if (u.dot !== true && (B.type === "slash" || B.type === "bos")) {
                            push({
                                type: "qmark",
                                value: G,
                                output: v
                            });
                            continue;
                        }
                        push({
                            type: "qmark",
                            value: G,
                            output: H
                        });
                        continue;
                    }
                    if (G === "!") {
                        if (u.noextglob !== true && D() === "(") {
                            if (D(2) !== "?" || !/[!=<:]/.test(D(3))) {
                                extglobOpen("negate", G);
                                continue;
                            }
                        }
                        if (u.nonegate !== true && m.index === 0) {
                            negate();
                            continue;
                        }
                    }
                    if (G === "+") {
                        if (u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            extglobOpen("plus", G);
                            continue;
                        }
                        if (B && B.value === "(" || u.regex === false) {
                            push({
                                type: "plus",
                                value: G,
                                output: g
                            });
                            continue;
                        }
                        if (B && (B.type === "bracket" || B.type === "paren" || B.type === "brace") || m.parens > 0) {
                            push({
                                type: "plus",
                                value: G
                            });
                            continue;
                        }
                        push({
                            type: "plus",
                            value: g
                        });
                        continue;
                    }
                    if (G === "@") {
                        if (u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            push({
                                type: "at",
                                extglob: true,
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (G !== "*") {
                        if (G === "$" || G === "^") {
                            G = `\\${G}`;
                        }
                        const t = a.exec(remaining());
                        if (t) {
                            G += t[0];
                            m.index += t[0].length;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (B && (B.type === "globstar" || B.star === true)) {
                        B.type = "star";
                        B.star = true;
                        B.value += G;
                        B.output = k;
                        m.backtrack = true;
                        m.globstar = true;
                        consume(G);
                        continue;
                    }
                    let e = remaining();
                    if (u.noextglob !== true && /^\([^?]/.test(e)) {
                        extglobOpen("star", G);
                        continue;
                    }
                    if (B.type === "star") {
                        if (u.noglobstar === true) {
                            consume(G);
                            continue;
                        }
                        const n = B.prev;
                        const o = n.prev;
                        const s = n.type === "slash" || n.type === "bos";
                        const r = o && (o.type === "star" || o.type === "globstar");
                        if (u.bash === true && (!s || e[0] && e[0] !== "/")) {
                            push({
                                type: "star",
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        const a = m.braces > 0 && (n.type === "comma" || n.type === "brace");
                        const i = w.length && (n.type === "pipe" || n.type === "paren");
                        if (!s && n.type !== "paren" && !a && !i) {
                            push({
                                type: "star",
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        while(e.slice(0, 3) === "/**"){
                            const u = t[m.index + 4];
                            if (u && u !== "/") {
                                break;
                            }
                            e = e.slice(3);
                            consume("/**", 3);
                        }
                        if (n.type === "bos" && eos()) {
                            B.type = "globstar";
                            B.value += G;
                            B.output = globstar(u);
                            m.output = B.output;
                            m.globstar = true;
                            consume(G);
                            continue;
                        }
                        if (n.type === "slash" && n.prev.type !== "bos" && !r && eos()) {
                            m.output = m.output.slice(0, -(n.output + B.output).length);
                            n.output = `(?:${n.output}`;
                            B.type = "globstar";
                            B.output = globstar(u) + (u.strictSlashes ? ")" : "|$)");
                            B.value += G;
                            m.globstar = true;
                            m.output += n.output + B.output;
                            consume(G);
                            continue;
                        }
                        if (n.type === "slash" && n.prev.type !== "bos" && e[0] === "/") {
                            const t = e[1] !== void 0 ? "|$" : "";
                            m.output = m.output.slice(0, -(n.output + B.output).length);
                            n.output = `(?:${n.output}`;
                            B.type = "globstar";
                            B.output = `${globstar(u)}${b}|${b}${t})`;
                            B.value += G;
                            m.output += n.output + B.output;
                            m.globstar = true;
                            consume(G + M());
                            push({
                                type: "slash",
                                value: "/",
                                output: ""
                            });
                            continue;
                        }
                        if (n.type === "bos" && e[0] === "/") {
                            B.type = "globstar";
                            B.value += G;
                            B.output = `(?:^|${b}|${globstar(u)}${b})`;
                            m.output = B.output;
                            m.globstar = true;
                            consume(G + M());
                            push({
                                type: "slash",
                                value: "/",
                                output: ""
                            });
                            continue;
                        }
                        m.output = m.output.slice(0, -B.output.length);
                        B.type = "globstar";
                        B.output = globstar(u);
                        B.value += G;
                        m.output += B.output;
                        m.globstar = true;
                        consume(G);
                        continue;
                    }
                    const n = {
                        type: "star",
                        value: G,
                        output: k
                    };
                    if (u.bash === true) {
                        n.output = ".*?";
                        if (B.type === "bos" || B.type === "slash") {
                            n.output = T + n.output;
                        }
                        push(n);
                        continue;
                    }
                    if (B && (B.type === "bracket" || B.type === "paren") && u.regex === true) {
                        n.output = G;
                        push(n);
                        continue;
                    }
                    if (m.index === m.start || B.type === "slash" || B.type === "dot") {
                        if (B.type === "dot") {
                            m.output += x;
                            B.output += x;
                        } else if (u.dot === true) {
                            m.output += S;
                            B.output += S;
                        } else {
                            m.output += T;
                            B.output += T;
                        }
                        if (D() !== "*") {
                            m.output += C;
                            B.output += C;
                        }
                    }
                    push(n);
                }
                while(m.brackets > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
                    m.output = o.escapeLast(m.output, "[");
                    decrement("brackets");
                }
                while(m.parens > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
                    m.output = o.escapeLast(m.output, "(");
                    decrement("parens");
                }
                while(m.braces > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
                    m.output = o.escapeLast(m.output, "{");
                    decrement("braces");
                }
                if (u.strictSlashes !== true && (B.type === "star" || B.type === "bracket")) {
                    push({
                        type: "maybe_slash",
                        value: "",
                        output: `${b}?`
                    });
                }
                if (m.backtrack === true) {
                    m.output = "";
                    for (const t of m.tokens){
                        m.output += t.output != null ? t.output : t.value;
                        if (t.suffix) {
                            m.output += t.suffix;
                        }
                    }
                }
                return m;
            };
            parse.fastpaths = (t, e)=>{
                const u = {
                    ...e
                };
                const r = typeof u.maxLength === "number" ? Math.min(s, u.maxLength) : s;
                const a = t.length;
                if (a > r) {
                    throw new SyntaxError(`Input length: ${a}, exceeds maximum allowed length: ${r}`);
                }
                t = c[t] || t;
                const { DOT_LITERAL: i, SLASH_LITERAL: p, ONE_CHAR: l, DOTS_SLASH: f, NO_DOT: A, NO_DOTS: _, NO_DOTS_SLASH: R, STAR: E, START_ANCHOR: h } = n.globChars(u.windows);
                const g = u.dot ? _ : A;
                const b = u.dot ? R : A;
                const C = u.capture ? "" : "?:";
                const y = {
                    negated: false,
                    prefix: ""
                };
                let $ = u.bash === true ? ".*?" : E;
                if (u.capture) {
                    $ = `(${$})`;
                }
                const globstar = (t)=>{
                    if (t.noglobstar === true) return $;
                    return `(${C}(?:(?!${h}${t.dot ? f : i}).)*?)`;
                };
                const create = (t)=>{
                    switch(t){
                        case "*":
                            return `${g}${l}${$}`;
                        case ".*":
                            return `${i}${l}${$}`;
                        case "*.*":
                            return `${g}${$}${i}${l}${$}`;
                        case "*/*":
                            return `${g}${$}${p}${l}${b}${$}`;
                        case "**":
                            return g + globstar(u);
                        case "**/*":
                            return `(?:${g}${globstar(u)}${p})?${b}${l}${$}`;
                        case "**/*.*":
                            return `(?:${g}${globstar(u)}${p})?${b}${$}${i}${l}${$}`;
                        case "**/.*":
                            return `(?:${g}${globstar(u)}${p})?${i}${l}${$}`;
                        default:
                            {
                                const e = /^(.*?)\.(\w+)$/.exec(t);
                                if (!e) return;
                                const u = create(e[1]);
                                if (!u) return;
                                return u + i + e[2];
                            }
                    }
                };
                const x = o.removePrefix(t, y);
                let S = create(x);
                if (S && u.strictSlashes !== true) {
                    S += `${p}?`;
                }
                return S;
            };
            t.exports = parse;
        },
        510: (t, e, u)=>{
            const n = u(716);
            const o = u(697);
            const s = u(96);
            const r = u(154);
            const isObject = (t)=>t && typeof t === "object" && !Array.isArray(t);
            const picomatch = (t, e, u = false)=>{
                if (Array.isArray(t)) {
                    const n = t.map((t)=>picomatch(t, e, u));
                    const arrayMatcher = (t)=>{
                        for (const e of n){
                            const u = e(t);
                            if (u) return u;
                        }
                        return false;
                    };
                    return arrayMatcher;
                }
                const n = isObject(t) && t.tokens && t.input;
                if (t === "" || typeof t !== "string" && !n) {
                    throw new TypeError("Expected pattern to be a non-empty string");
                }
                const o = e || {};
                const s = o.windows;
                const r = n ? picomatch.compileRe(t, e) : picomatch.makeRe(t, e, false, true);
                const a = r.state;
                delete r.state;
                let isIgnored = ()=>false;
                if (o.ignore) {
                    const t = {
                        ...e,
                        ignore: null,
                        onMatch: null,
                        onResult: null
                    };
                    isIgnored = picomatch(o.ignore, t, u);
                }
                const matcher = (u, n = false)=>{
                    const { isMatch: i, match: c, output: p } = picomatch.test(u, r, e, {
                        glob: t,
                        posix: s
                    });
                    const l = {
                        glob: t,
                        state: a,
                        regex: r,
                        posix: s,
                        input: u,
                        output: p,
                        match: c,
                        isMatch: i
                    };
                    if (typeof o.onResult === "function") {
                        o.onResult(l);
                    }
                    if (i === false) {
                        l.isMatch = false;
                        return n ? l : false;
                    }
                    if (isIgnored(u)) {
                        if (typeof o.onIgnore === "function") {
                            o.onIgnore(l);
                        }
                        l.isMatch = false;
                        return n ? l : false;
                    }
                    if (typeof o.onMatch === "function") {
                        o.onMatch(l);
                    }
                    return n ? l : true;
                };
                if (u) {
                    matcher.state = a;
                }
                return matcher;
            };
            picomatch.test = (t, e, u, { glob: n, posix: o } = {})=>{
                if (typeof t !== "string") {
                    throw new TypeError("Expected input to be a string");
                }
                if (t === "") {
                    return {
                        isMatch: false,
                        output: ""
                    };
                }
                const r = u || {};
                const a = r.format || (o ? s.toPosixSlashes : null);
                let i = t === n;
                let c = i && a ? a(t) : t;
                if (i === false) {
                    c = a ? a(t) : t;
                    i = c === n;
                }
                if (i === false || r.capture === true) {
                    if (r.matchBase === true || r.basename === true) {
                        i = picomatch.matchBase(t, e, u, o);
                    } else {
                        i = e.exec(c);
                    }
                }
                return {
                    isMatch: Boolean(i),
                    match: i,
                    output: c
                };
            };
            picomatch.matchBase = (t, e, u)=>{
                const n = e instanceof RegExp ? e : picomatch.makeRe(e, u);
                return n.test(s.basename(t));
            };
            picomatch.isMatch = (t, e, u)=>picomatch(e, u)(t);
            picomatch.parse = (t, e)=>{
                if (Array.isArray(t)) return t.map((t)=>picomatch.parse(t, e));
                return o(t, {
                    ...e,
                    fastpaths: false
                });
            };
            picomatch.scan = (t, e)=>n(t, e);
            picomatch.compileRe = (t, e, u = false, n = false)=>{
                if (u === true) {
                    return t.output;
                }
                const o = e || {};
                const s = o.contains ? "" : "^";
                const r = o.contains ? "" : "$";
                let a = `${s}(?:${t.output})${r}`;
                if (t && t.negated === true) {
                    a = `^(?!${a}).*$`;
                }
                const i = picomatch.toRegex(a, e);
                if (n === true) {
                    i.state = t;
                }
                return i;
            };
            picomatch.makeRe = (t, e = {}, u = false, n = false)=>{
                if (!t || typeof t !== "string") {
                    throw new TypeError("Expected a non-empty string");
                }
                let s = {
                    negated: false,
                    fastpaths: true
                };
                if (e.fastpaths !== false && (t[0] === "." || t[0] === "*")) {
                    s.output = o.fastpaths(t, e);
                }
                if (!s.output) {
                    s = o(t, e);
                }
                return picomatch.compileRe(s, e, u, n);
            };
            picomatch.toRegex = (t, e)=>{
                try {
                    const u = e || {};
                    return new RegExp(t, u.flags || (u.nocase ? "i" : ""));
                } catch (t) {
                    if (e && e.debug === true) throw t;
                    return /$^/;
                }
            };
            picomatch.constants = r;
            t.exports = picomatch;
        },
        716: (t, e, u)=>{
            const n = u(96);
            const { CHAR_ASTERISK: o, CHAR_AT: s, CHAR_BACKWARD_SLASH: r, CHAR_COMMA: a, CHAR_DOT: i, CHAR_EXCLAMATION_MARK: c, CHAR_FORWARD_SLASH: p, CHAR_LEFT_CURLY_BRACE: l, CHAR_LEFT_PARENTHESES: f, CHAR_LEFT_SQUARE_BRACKET: A, CHAR_PLUS: _, CHAR_QUESTION_MARK: R, CHAR_RIGHT_CURLY_BRACE: E, CHAR_RIGHT_PARENTHESES: h, CHAR_RIGHT_SQUARE_BRACKET: g } = u(154);
            const isPathSeparator = (t)=>t === p || t === r;
            const depth = (t)=>{
                if (t.isPrefix !== true) {
                    t.depth = t.isGlobstar ? Infinity : 1;
                }
            };
            const scan = (t, e)=>{
                const u = e || {};
                const b = t.length - 1;
                const C = u.parts === true || u.scanToEnd === true;
                const y = [];
                const $ = [];
                const x = [];
                let S = t;
                let H = -1;
                let v = 0;
                let d = 0;
                let L = false;
                let T = false;
                let O = false;
                let k = false;
                let m = false;
                let w = false;
                let N = false;
                let I = false;
                let B = false;
                let G = false;
                let D = 0;
                let M;
                let P;
                let K = {
                    value: "",
                    depth: 0,
                    isGlob: false
                };
                const eos = ()=>H >= b;
                const peek = ()=>S.charCodeAt(H + 1);
                const advance = ()=>{
                    M = P;
                    return S.charCodeAt(++H);
                };
                while(H < b){
                    P = advance();
                    let t;
                    if (P === r) {
                        N = K.backslashes = true;
                        P = advance();
                        if (P === l) {
                            w = true;
                        }
                        continue;
                    }
                    if (w === true || P === l) {
                        D++;
                        while(eos() !== true && (P = advance())){
                            if (P === r) {
                                N = K.backslashes = true;
                                advance();
                                continue;
                            }
                            if (P === l) {
                                D++;
                                continue;
                            }
                            if (w !== true && P === i && (P = advance()) === i) {
                                L = K.isBrace = true;
                                O = K.isGlob = true;
                                G = true;
                                if (C === true) {
                                    continue;
                                }
                                break;
                            }
                            if (w !== true && P === a) {
                                L = K.isBrace = true;
                                O = K.isGlob = true;
                                G = true;
                                if (C === true) {
                                    continue;
                                }
                                break;
                            }
                            if (P === E) {
                                D--;
                                if (D === 0) {
                                    w = false;
                                    L = K.isBrace = true;
                                    G = true;
                                    break;
                                }
                            }
                        }
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === p) {
                        y.push(H);
                        $.push(K);
                        K = {
                            value: "",
                            depth: 0,
                            isGlob: false
                        };
                        if (G === true) continue;
                        if (M === i && H === v + 1) {
                            v += 2;
                            continue;
                        }
                        d = H + 1;
                        continue;
                    }
                    if (u.noext !== true) {
                        const t = P === _ || P === s || P === o || P === R || P === c;
                        if (t === true && peek() === f) {
                            O = K.isGlob = true;
                            k = K.isExtglob = true;
                            G = true;
                            if (P === c && H === v) {
                                B = true;
                            }
                            if (C === true) {
                                while(eos() !== true && (P = advance())){
                                    if (P === r) {
                                        N = K.backslashes = true;
                                        P = advance();
                                        continue;
                                    }
                                    if (P === h) {
                                        O = K.isGlob = true;
                                        G = true;
                                        break;
                                    }
                                }
                                continue;
                            }
                            break;
                        }
                    }
                    if (P === o) {
                        if (M === o) m = K.isGlobstar = true;
                        O = K.isGlob = true;
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === R) {
                        O = K.isGlob = true;
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === A) {
                        while(eos() !== true && (t = advance())){
                            if (t === r) {
                                N = K.backslashes = true;
                                advance();
                                continue;
                            }
                            if (t === g) {
                                T = K.isBracket = true;
                                O = K.isGlob = true;
                                G = true;
                                break;
                            }
                        }
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (u.nonegate !== true && P === c && H === v) {
                        I = K.negated = true;
                        v++;
                        continue;
                    }
                    if (u.noparen !== true && P === f) {
                        O = K.isGlob = true;
                        if (C === true) {
                            while(eos() !== true && (P = advance())){
                                if (P === f) {
                                    N = K.backslashes = true;
                                    P = advance();
                                    continue;
                                }
                                if (P === h) {
                                    G = true;
                                    break;
                                }
                            }
                            continue;
                        }
                        break;
                    }
                    if (O === true) {
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                }
                if (u.noext === true) {
                    k = false;
                    O = false;
                }
                let U = S;
                let X = "";
                let F = "";
                if (v > 0) {
                    X = S.slice(0, v);
                    S = S.slice(v);
                    d -= v;
                }
                if (U && O === true && d > 0) {
                    U = S.slice(0, d);
                    F = S.slice(d);
                } else if (O === true) {
                    U = "";
                    F = S;
                } else {
                    U = S;
                }
                if (U && U !== "" && U !== "/" && U !== S) {
                    if (isPathSeparator(U.charCodeAt(U.length - 1))) {
                        U = U.slice(0, -1);
                    }
                }
                if (u.unescape === true) {
                    if (F) F = n.removeBackslashes(F);
                    if (U && N === true) {
                        U = n.removeBackslashes(U);
                    }
                }
                const Q = {
                    prefix: X,
                    input: t,
                    start: v,
                    base: U,
                    glob: F,
                    isBrace: L,
                    isBracket: T,
                    isGlob: O,
                    isExtglob: k,
                    isGlobstar: m,
                    negated: I,
                    negatedExtglob: B
                };
                if (u.tokens === true) {
                    Q.maxDepth = 0;
                    if (!isPathSeparator(P)) {
                        $.push(K);
                    }
                    Q.tokens = $;
                }
                if (u.parts === true || u.tokens === true) {
                    let e;
                    for(let n = 0; n < y.length; n++){
                        const o = e ? e + 1 : v;
                        const s = y[n];
                        const r = t.slice(o, s);
                        if (u.tokens) {
                            if (n === 0 && v !== 0) {
                                $[n].isPrefix = true;
                                $[n].value = X;
                            } else {
                                $[n].value = r;
                            }
                            depth($[n]);
                            Q.maxDepth += $[n].depth;
                        }
                        if (n !== 0 || r !== "") {
                            x.push(r);
                        }
                        e = s;
                    }
                    if (e && e + 1 < t.length) {
                        const n = t.slice(e + 1);
                        x.push(n);
                        if (u.tokens) {
                            $[$.length - 1].value = n;
                            depth($[$.length - 1]);
                            Q.maxDepth += $[$.length - 1].depth;
                        }
                    }
                    Q.slashes = y;
                    Q.parts = x;
                }
                return Q;
            };
            t.exports = scan;
        },
        96: (t, e, u)=>{
            const { REGEX_BACKSLASH: n, REGEX_REMOVE_BACKSLASH: o, REGEX_SPECIAL_CHARS: s, REGEX_SPECIAL_CHARS_GLOBAL: r } = u(154);
            e.isObject = (t)=>t !== null && typeof t === "object" && !Array.isArray(t);
            e.hasRegexChars = (t)=>s.test(t);
            e.isRegexChar = (t)=>t.length === 1 && e.hasRegexChars(t);
            e.escapeRegex = (t)=>t.replace(r, "\\$1");
            e.toPosixSlashes = (t)=>t.replace(n, "/");
            e.removeBackslashes = (t)=>t.replace(o, (t)=>t === "\\" ? "" : t);
            e.escapeLast = (t, u, n)=>{
                const o = t.lastIndexOf(u, n);
                if (o === -1) return t;
                if (t[o - 1] === "\\") return e.escapeLast(t, u, o - 1);
                return `${t.slice(0, o)}\\${t.slice(o)}`;
            };
            e.removePrefix = (t, e = {})=>{
                let u = t;
                if (u.startsWith("./")) {
                    u = u.slice(2);
                    e.prefix = "./";
                }
                return u;
            };
            e.wrapOutput = (t, e = {}, u = {})=>{
                const n = u.contains ? "" : "^";
                const o = u.contains ? "" : "$";
                let s = `${n}(?:${t})${o}`;
                if (e.negated === true) {
                    s = `(?:^(?!${s}).*$)`;
                }
                return s;
            };
            e.basename = (t, { windows: e } = {})=>{
                const u = t.split(e ? /[\\/]/ : "/");
                const n = u[u.length - 1];
                if (n === "") {
                    return u[u.length - 2];
                }
                return n;
            };
        }
    };
    var e = {};
    function __nccwpck_require__(u) {
        var n = e[u];
        if (n !== undefined) {
            return n.exports;
        }
        var o = e[u] = {
            exports: {}
        };
        var s = true;
        try {
            t[u](o, o.exports, __nccwpck_require__);
            s = false;
        } finally{
            if (s) delete e[u];
        }
        return o.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Documents/Project/NewTaskry/node_modules/next/dist/compiled/picomatch") + "/";
    var u = __nccwpck_require__(170);
    module.exports = u;
})();
}),
"[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/match-local-pattern.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    hasLocalMatch: null,
    matchLocalPattern: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    hasLocalMatch: function() {
        return hasLocalMatch;
    },
    matchLocalPattern: function() {
        return matchLocalPattern;
    }
});
const _picomatch = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/picomatch/index.js [app-client] (ecmascript)");
function matchLocalPattern(pattern, url) {
    if (pattern.search !== undefined) {
        if (pattern.search !== url.search) {
            return false;
        }
    }
    if (!(0, _picomatch.makeRe)(pattern.pathname ?? '**', {
        dot: true
    }).test(url.pathname)) {
        return false;
    }
    return true;
}
function hasLocalMatch(localPatterns, urlPathAndQuery) {
    if (!localPatterns) {
        // if the user didn't define "localPatterns", we allow all local images
        return true;
    }
    const url = new URL(urlPathAndQuery, 'http://n');
    return localPatterns.some((p)=>matchLocalPattern(p, url));
} //# sourceMappingURL=match-local-pattern.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/match-remote-pattern.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    hasRemoteMatch: null,
    matchRemotePattern: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    hasRemoteMatch: function() {
        return hasRemoteMatch;
    },
    matchRemotePattern: function() {
        return matchRemotePattern;
    }
});
const _picomatch = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/picomatch/index.js [app-client] (ecmascript)");
function matchRemotePattern(pattern, url) {
    if (pattern.protocol !== undefined) {
        if (pattern.protocol.replace(/:$/, '') !== url.protocol.replace(/:$/, '')) {
            return false;
        }
    }
    if (pattern.port !== undefined) {
        if (pattern.port !== url.port) {
            return false;
        }
    }
    if (pattern.hostname === undefined) {
        throw Object.defineProperty(new Error(`Pattern should define hostname but found\n${JSON.stringify(pattern)}`), "__NEXT_ERROR_CODE", {
            value: "E410",
            enumerable: false,
            configurable: true
        });
    } else {
        if (!(0, _picomatch.makeRe)(pattern.hostname).test(url.hostname)) {
            return false;
        }
    }
    if (pattern.search !== undefined) {
        if (pattern.search !== url.search) {
            return false;
        }
    }
    // Should be the same as writeImagesManifest()
    if (!(0, _picomatch.makeRe)(pattern.pathname ?? '**', {
        dot: true
    }).test(url.pathname)) {
        return false;
    }
    return true;
}
function hasRemoteMatch(domains, remotePatterns, url) {
    return domains.some((domain)=>url.hostname === domain) || remotePatterns.some((p)=>matchRemotePattern(p, url));
} //# sourceMappingURL=match-remote-pattern.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _findclosestquality = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/find-closest-quality.js [app-client] (ecmascript)");
function defaultLoader({ config, src, width, quality }) {
    if (src.startsWith('/') && src.includes('?') && config.localPatterns?.length === 1 && config.localPatterns[0].pathname === '**' && config.localPatterns[0].search === '') {
        throw Object.defineProperty(new Error(`Image with src "${src}" is using a query string which is not configured in images.localPatterns.` + `\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        const missingValues = [];
        // these should always be provided but make sure they are
        if (!src) missingValues.push('src');
        if (!width) missingValues.push('width');
        if (missingValues.length > 0) {
            throw Object.defineProperty(new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
                src,
                width,
                quality
            })}`), "__NEXT_ERROR_CODE", {
                value: "E188",
                enumerable: false,
                configurable: true
            });
        }
        if (src.startsWith('//')) {
            throw Object.defineProperty(new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`), "__NEXT_ERROR_CODE", {
                value: "E360",
                enumerable: false,
                configurable: true
            });
        }
        if (src.startsWith('/') && config.localPatterns) {
            if ("TURBOPACK compile-time truthy", 1) {
                // We use dynamic require because this should only error in development
                const { hasLocalMatch } = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/match-local-pattern.js [app-client] (ecmascript)");
                if (!hasLocalMatch(config.localPatterns, src)) {
                    throw Object.defineProperty(new Error(`Invalid src prop (${src}) on \`next/image\` does not match \`images.localPatterns\` configured in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
                        value: "E426",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
        if (!src.startsWith('/') && (config.domains || config.remotePatterns)) {
            let parsedSrc;
            try {
                parsedSrc = new URL(src);
            } catch (err) {
                console.error(err);
                throw Object.defineProperty(new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`), "__NEXT_ERROR_CODE", {
                    value: "E63",
                    enumerable: false,
                    configurable: true
                });
            }
            if ("TURBOPACK compile-time truthy", 1) {
                // We use dynamic require because this should only error in development
                const { hasRemoteMatch } = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/match-remote-pattern.js [app-client] (ecmascript)");
                if (!hasRemoteMatch(config.domains, config.remotePatterns, parsedSrc)) {
                    throw Object.defineProperty(new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`), "__NEXT_ERROR_CODE", {
                        value: "E231",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const q = (0, _findclosestquality.findClosestQuality)(quality, config);
    return `${config.path}?url=${encodeURIComponent(src)}&w=${width}&q=${q}${src.startsWith('/_next/static/media/') && ("TURBOPACK compile-time value", false) ? "TURBOPACK unreachable" : ''}`;
}
// We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js
defaultLoader.__next_img_default = true;
const _default = defaultLoader; //# sourceMappingURL=image-loader.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Image", {
    enumerable: true,
    get: function() {
        return Image;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
const _head = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/head.js [app-client] (ecmascript)"));
const _getimgprops = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)");
const _imageconfig = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)");
const _imageconfigcontextsharedruntime = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _routercontextsharedruntime = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [app-client] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)"));
const _usemergedref = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
// This is replaced by webpack define plugin
const configEnv = ("TURBOPACK compile-time value", {
    "deviceSizes": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", 640),
        ("TURBOPACK compile-time value", 750),
        ("TURBOPACK compile-time value", 828),
        ("TURBOPACK compile-time value", 1080),
        ("TURBOPACK compile-time value", 1200),
        ("TURBOPACK compile-time value", 1920),
        ("TURBOPACK compile-time value", 2048),
        ("TURBOPACK compile-time value", 3840)
    ]),
    "imageSizes": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", 32),
        ("TURBOPACK compile-time value", 48),
        ("TURBOPACK compile-time value", 64),
        ("TURBOPACK compile-time value", 96),
        ("TURBOPACK compile-time value", 128),
        ("TURBOPACK compile-time value", 256),
        ("TURBOPACK compile-time value", 384)
    ]),
    "qualities": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", 75)
    ]),
    "path": ("TURBOPACK compile-time value", "/_next/image"),
    "loader": ("TURBOPACK compile-time value", "default"),
    "dangerouslyAllowSVG": ("TURBOPACK compile-time value", false),
    "unoptimized": ("TURBOPACK compile-time value", false),
    "domains": ("TURBOPACK compile-time value", []),
    "remotePatterns": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", {
            "protocol": ("TURBOPACK compile-time value", "https"),
            "hostname": ("TURBOPACK compile-time value", "lh3.googleusercontent.com")
        })
    ]),
    "localPatterns": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", {
            "pathname": ("TURBOPACK compile-time value", "**"),
            "search": ("TURBOPACK compile-time value", "")
        })
    ])
});
if (typeof window === 'undefined') {
    ;
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput) {
    const src = img?.src;
    if (!img || img['data-loaded-src'] === src) {
        return;
    }
    img['data-loaded-src'] = src;
    const p = 'decode' in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder !== 'empty') {
            setBlurComplete(true);
        }
        if (onLoadRef?.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event('load');
            Object.defineProperty(event, 'target', {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current({
                ...event,
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            });
        }
        if (onLoadingCompleteRef?.current) {
            onLoadingCompleteRef.current(img);
        }
        if ("TURBOPACK compile-time truthy", 1) {
            const origSrc = new URL(src, 'http://n').searchParams.get('url') || src;
            if (img.getAttribute('data-nimg') === 'fill') {
                if (!unoptimized && (!sizesInput || sizesInput === '100vw')) {
                    let widthViewportRatio = img.getBoundingClientRect().width / window.innerWidth;
                    if (widthViewportRatio < 0.6) {
                        if (sizesInput === '100vw') {
                            (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" prop and "sizes" prop of "100vw", but image is not rendered at full viewport width. Please adjust "sizes" to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes`);
                        } else {
                            (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" but is missing "sizes" prop. Please add it to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes`);
                        }
                    }
                }
                if (img.parentElement) {
                    const { position } = window.getComputedStyle(img.parentElement);
                    const valid = [
                        'absolute',
                        'fixed',
                        'relative'
                    ];
                    if (!valid.includes(position)) {
                        (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" and parent element with invalid "position". Provided "${position}" should be one of ${valid.map(String).join(',')}.`);
                    }
                }
                if (img.height === 0) {
                    (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" and a height value of 0. This is likely because the parent element of the image has not been styled to have a set height.`);
                }
            }
            const heightModified = img.height.toString() !== img.getAttribute('height');
            const widthModified = img.width.toString() !== img.getAttribute('width');
            if (heightModified && !widthModified || !heightModified && widthModified) {
                (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles 'width: "auto"' or 'height: "auto"' to maintain the aspect ratio.`);
            }
        }
    });
}
function getDynamicProps(fetchPriority) {
    if (Boolean(_react.use)) {
        // In React 19.0.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)(({ src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, sizesInput, onLoad, onError, ...rest }, forwardedRef)=>{
    const ownRef = (0, _react.useCallback)((img)=>{
        if (!img) {
            return;
        }
        if (onError) {
            // If the image has an error before react hydrates, then the error is lost.
            // The workaround is to wait until the image is mounted which is after hydration,
            // then we set the src again to trigger the error handler (if there was an error).
            // eslint-disable-next-line no-self-assign
            img.src = img.src;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (!src) {
                console.error(`Image is missing required "src" property:`, img);
            }
            if (img.getAttribute('alt') === null) {
                console.error(`Image is missing required "alt" property. Please add Alternative Text to describe the image for screen readers and search engines.`);
            }
        }
        if (img.complete) {
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        }
    }, [
        src,
        placeholder,
        onLoadRef,
        onLoadingCompleteRef,
        setBlurComplete,
        onError,
        unoptimized,
        sizesInput
    ]);
    const ref = (0, _usemergedref.useMergedRef)(forwardedRef, ownRef);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        // It's intended to keep `loading` before `src` because React updates
        // props in order which causes Safari/Firefox to not lazy load properly.
        // See https://github.com/facebook/react/issues/25883
        loading: loading,
        width: width,
        height: height,
        decoding: decoding,
        "data-nimg": fill ? 'fill' : '1',
        className: className,
        style: style,
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        sizes: sizes,
        srcSet: srcSet,
        src: src,
        ref: ref,
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder !== 'empty') {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    });
});
function ImagePreload({ isAppRouter, imgAttributes }) {
    const opts = {
        as: 'image',
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: imgAttributes.crossOrigin,
        referrerPolicy: imgAttributes.referrerPolicy,
        ...getDynamicProps(imgAttributes.fetchPriority)
    };
    if (isAppRouter && _reactdom.default.preload) {
        _reactdom.default.preload(imgAttributes.src, opts);
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_head.default, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
            rel: "preload",
            // Note how we omit the `href` attribute, as it would only be relevant
            // for browsers that do not support `imagesrcset`, and in those cases
            // it would cause the incorrect image to be preloaded.
            //
            // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
            href: imgAttributes.srcSet ? undefined : imgAttributes.src,
            ...opts
        }, '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes)
    });
}
const Image = /*#__PURE__*/ (0, _react.forwardRef)((props, forwardedRef)=>{
    const pagesRouter = (0, _react.useContext)(_routercontextsharedruntime.RouterContext);
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const configContext = (0, _react.useContext)(_imageconfigcontextsharedruntime.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        const qualities = c.qualities?.sort((a, b)=>a - b);
        return {
            ...c,
            allSizes,
            deviceSizes,
            qualities,
            // During the SSR, configEnv (__NEXT_IMAGE_OPTS) does not include
            // security sensitive configs like `localPatterns`, which is needed
            // during the server render to ensure it's validated. Therefore use
            // configContext, which holds the config from the server for validation.
            localPatterns: typeof window === 'undefined' ? configContext?.localPatterns : c.localPatterns
        };
    }, [
        configContext
    ]);
    const { onLoad, onLoadingComplete } = props;
    const onLoadRef = (0, _react.useRef)(onLoad);
    (0, _react.useEffect)(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
    (0, _react.useEffect)(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
    const [showAltText, setShowAltText] = (0, _react.useState)(false);
    const { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
        defaultLoader: _imageloader.default,
        imgConf: config,
        blurComplete,
        showAltText
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(ImageElement, {
                ...imgAttributes,
                unoptimized: imgMeta.unoptimized,
                placeholder: imgMeta.placeholder,
                fill: imgMeta.fill,
                onLoadRef: onLoadRef,
                onLoadingCompleteRef: onLoadingCompleteRef,
                setBlurComplete: setBlurComplete,
                setShowAltText: setShowAltText,
                sizesInput: props.sizes,
                ref: forwardedRef
            }),
            imgMeta.preload ? /*#__PURE__*/ (0, _jsxruntime.jsx)(ImagePreload, {
                isAppRouter: isAppRouter,
                imgAttributes: imgAttributes
            }) : null
        ]
    });
});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image-component.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getImageProps: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _getimgprops = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)");
const _imagecomponent = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)"));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: ("TURBOPACK compile-time value", {
            "deviceSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 640),
                ("TURBOPACK compile-time value", 750),
                ("TURBOPACK compile-time value", 828),
                ("TURBOPACK compile-time value", 1080),
                ("TURBOPACK compile-time value", 1200),
                ("TURBOPACK compile-time value", 1920),
                ("TURBOPACK compile-time value", 2048),
                ("TURBOPACK compile-time value", 3840)
            ]),
            "imageSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 32),
                ("TURBOPACK compile-time value", 48),
                ("TURBOPACK compile-time value", 64),
                ("TURBOPACK compile-time value", 96),
                ("TURBOPACK compile-time value", 128),
                ("TURBOPACK compile-time value", 256),
                ("TURBOPACK compile-time value", 384)
            ]),
            "qualities": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 75)
            ]),
            "path": ("TURBOPACK compile-time value", "/_next/image"),
            "loader": ("TURBOPACK compile-time value", "default"),
            "dangerouslyAllowSVG": ("TURBOPACK compile-time value", false),
            "unoptimized": ("TURBOPACK compile-time value", false),
            "domains": ("TURBOPACK compile-time value", []),
            "remotePatterns": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", {
                    "protocol": ("TURBOPACK compile-time value", "https"),
                    "hostname": ("TURBOPACK compile-time value", "lh3.googleusercontent.com")
                })
            ]),
            "localPatterns": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", {
                    "pathname": ("TURBOPACK compile-time value", "**"),
                    "search": ("TURBOPACK compile-time value", "")
                })
            ])
        })
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/next/image.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Documents/Project/NewTaskry/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)");
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/ko/_lib/formatDistance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDistance",
    ()=>formatDistance
]);
const formatDistanceLocale = {
    lessThanXSeconds: {
        one: "1초 미만",
        other: "{{count}}초 미만"
    },
    xSeconds: {
        one: "1초",
        other: "{{count}}초"
    },
    halfAMinute: "30초",
    lessThanXMinutes: {
        one: "1분 미만",
        other: "{{count}}분 미만"
    },
    xMinutes: {
        one: "1분",
        other: "{{count}}분"
    },
    aboutXHours: {
        one: "약 1시간",
        other: "약 {{count}}시간"
    },
    xHours: {
        one: "1시간",
        other: "{{count}}시간"
    },
    xDays: {
        one: "1일",
        other: "{{count}}일"
    },
    aboutXWeeks: {
        one: "약 1주",
        other: "약 {{count}}주"
    },
    xWeeks: {
        one: "1주",
        other: "{{count}}주"
    },
    aboutXMonths: {
        one: "약 1개월",
        other: "약 {{count}}개월"
    },
    xMonths: {
        one: "1개월",
        other: "{{count}}개월"
    },
    aboutXYears: {
        one: "약 1년",
        other: "약 {{count}}년"
    },
    xYears: {
        one: "1년",
        other: "{{count}}년"
    },
    overXYears: {
        one: "1년 이상",
        other: "{{count}}년 이상"
    },
    almostXYears: {
        one: "거의 1년",
        other: "거의 {{count}}년"
    }
};
const formatDistance = (token, count, options)=>{
    let result;
    const tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
        result = tokenValue;
    } else if (count === 1) {
        result = tokenValue.one;
    } else {
        result = tokenValue.other.replace("{{count}}", count.toString());
    }
    if (options?.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return result + " 후";
        } else {
            return result + " 전";
        }
    }
    return result;
};
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/ko/_lib/formatLong.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatLong",
    ()=>formatLong
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-client] (ecmascript)");
;
const dateFormats = {
    full: "y년 M월 d일 EEEE",
    long: "y년 M월 d일",
    medium: "y.MM.dd",
    short: "y.MM.dd"
};
const timeFormats = {
    full: "a H시 mm분 ss초 zzzz",
    long: "a H:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
const dateTimeFormats = {
    full: "{{date}} {{time}}",
    long: "{{date}} {{time}}",
    medium: "{{date}} {{time}}",
    short: "{{date}} {{time}}"
};
const formatLong = {
    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/ko/_lib/formatRelative.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatRelative",
    ()=>formatRelative
]);
const formatRelativeLocale = {
    lastWeek: "'지난' eeee p",
    yesterday: "'어제' p",
    today: "'오늘' p",
    tomorrow: "'내일' p",
    nextWeek: "'다음' eeee p",
    other: "P"
};
const formatRelative = (token, _date, _baseDate, _options)=>formatRelativeLocale[token];
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/ko/_lib/localize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "localize",
    ()=>localize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/_lib/buildLocalizeFn.js [app-client] (ecmascript)");
;
const eraValues = {
    narrow: [
        "BC",
        "AD"
    ],
    abbreviated: [
        "BC",
        "AD"
    ],
    wide: [
        "기원전",
        "서기"
    ]
};
const quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    wide: [
        "1분기",
        "2분기",
        "3분기",
        "4분기"
    ]
};
const monthValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12"
    ],
    abbreviated: [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월"
    ],
    wide: [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월"
    ]
};
const dayValues = {
    narrow: [
        "일",
        "월",
        "화",
        "수",
        "목",
        "금",
        "토"
    ],
    short: [
        "일",
        "월",
        "화",
        "수",
        "목",
        "금",
        "토"
    ],
    abbreviated: [
        "일",
        "월",
        "화",
        "수",
        "목",
        "금",
        "토"
    ],
    wide: [
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일"
    ]
};
const dayPeriodValues = {
    narrow: {
        am: "오전",
        pm: "오후",
        midnight: "자정",
        noon: "정오",
        morning: "아침",
        afternoon: "오후",
        evening: "저녁",
        night: "밤"
    },
    abbreviated: {
        am: "오전",
        pm: "오후",
        midnight: "자정",
        noon: "정오",
        morning: "아침",
        afternoon: "오후",
        evening: "저녁",
        night: "밤"
    },
    wide: {
        am: "오전",
        pm: "오후",
        midnight: "자정",
        noon: "정오",
        morning: "아침",
        afternoon: "오후",
        evening: "저녁",
        night: "밤"
    }
};
const formattingDayPeriodValues = {
    narrow: {
        am: "오전",
        pm: "오후",
        midnight: "자정",
        noon: "정오",
        morning: "아침",
        afternoon: "오후",
        evening: "저녁",
        night: "밤"
    },
    abbreviated: {
        am: "오전",
        pm: "오후",
        midnight: "자정",
        noon: "정오",
        morning: "아침",
        afternoon: "오후",
        evening: "저녁",
        night: "밤"
    },
    wide: {
        am: "오전",
        pm: "오후",
        midnight: "자정",
        noon: "정오",
        morning: "아침",
        afternoon: "오후",
        evening: "저녁",
        night: "밤"
    }
};
const ordinalNumber = (dirtyNumber, options)=>{
    const number = Number(dirtyNumber);
    const unit = String(options?.unit);
    switch(unit){
        case "minute":
        case "second":
            return String(number);
        case "date":
            return number + "일";
        default:
            return number + "번째";
    }
};
const localize = {
    ordinalNumber,
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/ko/_lib/match.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "match",
    ()=>match
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/_lib/buildMatchFn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js [app-client] (ecmascript)");
;
;
const matchOrdinalNumberPattern = /^(\d+)(일|번째)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(기원전|서기)/i
};
const parseEraPatterns = {
    any: [
        /^(bc|기원전)/i,
        /^(ad|서기)/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234]사?분기/i
};
const parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
const matchMonthPatterns = {
    narrow: /^(1[012]|[123456789])/,
    abbreviated: /^(1[012]|[123456789])월/i,
    wide: /^(1[012]|[123456789])월/i
};
const parseMonthPatterns = {
    any: [
        /^1월?$/,
        /^2/,
        /^3/,
        /^4/,
        /^5/,
        /^6/,
        /^7/,
        /^8/,
        /^9/,
        /^10/,
        /^11/,
        /^12/
    ]
};
const matchDayPatterns = {
    narrow: /^[일월화수목금토]/,
    short: /^[일월화수목금토]/,
    abbreviated: /^[일월화수목금토]/,
    wide: /^[일월화수목금토]요일/
};
const parseDayPatterns = {
    any: [
        /^일/,
        /^월/,
        /^화/,
        /^수/,
        /^목/,
        /^금/,
        /^토/
    ]
};
const matchDayPeriodPatterns = {
    any: /^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^(am|오전)/i,
        pm: /^(pm|오후)/i,
        midnight: /^자정/i,
        noon: /^정오/i,
        morning: /^아침/i,
        afternoon: /^오후/i,
        evening: /^저녁/i,
        night: /^밤/i
    }
};
const match = {
    ordinalNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchPatternFn"])({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value, 10)
    }),
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/ko.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "ko",
    ()=>ko
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$ko$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/ko/_lib/formatDistance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$ko$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/ko/_lib/formatLong.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$ko$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/ko/_lib/formatRelative.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$ko$2f$_lib$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/ko/_lib/localize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$ko$2f$_lib$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/locale/ko/_lib/match.js [app-client] (ecmascript)");
;
;
;
;
;
const ko = {
    code: "ko",
    formatDistance: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$ko$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDistance"],
    formatLong: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$ko$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLong"],
    formatRelative: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$ko$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRelative"],
    localize: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$ko$2f$_lib$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localize"],
    match: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$locale$2f$ko$2f$_lib$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"],
    options: {
        weekStartsOn: 0 /* Sunday */ ,
        firstWeekContainsDate: 1
    }
};
const __TURBOPACK__default__export__ = ko;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/addDays.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addDays",
    ()=>addDays,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
function addDays(date, amount, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    if (isNaN(amount)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, NaN);
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    if (!amount) return _date;
    _date.setDate(_date.getDate() + amount);
    return _date;
}
const __TURBOPACK__default__export__ = addDays;
}),
"[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TriangleAlert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
            key: "wmoenq"
        }
    ],
    [
        "path",
        {
            d: "M12 9v4",
            key: "juzpu7"
        }
    ],
    [
        "path",
        {
            d: "M12 17h.01",
            key: "p32p05"
        }
    ]
];
const TriangleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("triangle-alert", __iconNode);
;
 //# sourceMappingURL=triangle-alert.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertTriangle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript)");
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/addWeeks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addWeeks",
    ()=>addWeeks,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/addDays.js [app-client] (ecmascript)");
;
function addWeeks(date, amount, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(date, amount * 7, options);
}
const __TURBOPACK__default__export__ = addWeeks;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/subWeeks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "subWeeks",
    ()=>subWeeks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/addWeeks.js [app-client] (ecmascript)");
;
function subWeeks(date, amount, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addWeeks"])(date, -amount, options);
}
const __TURBOPACK__default__export__ = subWeeks;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/addMonths.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addMonths",
    ()=>addMonths,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
function addMonths(date, amount, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    if (isNaN(amount)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, NaN);
    if (!amount) {
        // If 0 months, no-op to avoid changing times in the hour before end of DST
        return _date;
    }
    const dayOfMonth = _date.getDate();
    // The JS Date object supports date math by accepting out-of-bounds values for
    // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
    // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
    // want except that dates will wrap around the end of a month, meaning that
    // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
    // we'll default to the end of the desired month by adding 1 to the desired
    // month and using a date of 0 to back up one day to the end of the desired
    // month.
    const endOfDesiredMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, _date.getTime());
    endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
    const daysInMonth = endOfDesiredMonth.getDate();
    if (dayOfMonth >= daysInMonth) {
        // If we're already at the end of the month, then this is the correct date
        // and we're done.
        return endOfDesiredMonth;
    } else {
        // Otherwise, we now know that setting the original day-of-month value won't
        // cause an overflow, so set the desired day-of-month. Note that we can't
        // just set the date of `endOfDesiredMonth` because that object may have had
        // its time changed in the unusual case where where a DST transition was on
        // the last day of the month and its local time was in the hour skipped or
        // repeated next to a DST transition.  So we use `date` instead which is
        // guaranteed to still have the original time.
        _date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
        return _date;
    }
}
const __TURBOPACK__default__export__ = addMonths;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/subMonths.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "subMonths",
    ()=>subMonths
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/addMonths.js [app-client] (ecmascript)");
;
function subMonths(date, amount, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMonths"])(date, -amount, options);
}
const __TURBOPACK__default__export__ = subMonths;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/subDays.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "subDays",
    ()=>subDays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/addDays.js [app-client] (ecmascript)");
;
function subDays(date, amount, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(date, -amount, options);
}
const __TURBOPACK__default__export__ = subDays;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/isSameDay.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isSameDay",
    ()=>isSameDay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/_lib/normalizeDates.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/startOfDay.js [app-client] (ecmascript)");
;
;
function isSameDay(laterDate, earlierDate, options) {
    const [dateLeft_, dateRight_] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeDates"])(options?.in, laterDate, earlierDate);
    return +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(dateLeft_) === +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(dateRight_);
}
const __TURBOPACK__default__export__ = isSameDay;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/startOfMonth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfMonth",
    ()=>startOfMonth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
function startOfMonth(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    _date.setDate(1);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
const __TURBOPACK__default__export__ = startOfMonth;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/endOfMonth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "endOfMonth",
    ()=>endOfMonth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
function endOfMonth(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const month = _date.getMonth();
    _date.setFullYear(_date.getFullYear(), month + 1, 0);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
const __TURBOPACK__default__export__ = endOfMonth;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/endOfWeek.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "endOfWeek",
    ()=>endOfWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/_lib/defaultOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
function endOfWeek(date, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const day = _date.getDay();
    const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
    _date.setDate(_date.getDate() + diff);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
const __TURBOPACK__default__export__ = endOfWeek;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/isSameMonth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isSameMonth",
    ()=>isSameMonth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/_lib/normalizeDates.js [app-client] (ecmascript)");
;
function isSameMonth(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeDates"])(options?.in, laterDate, earlierDate);
    return laterDate_.getFullYear() === earlierDate_.getFullYear() && laterDate_.getMonth() === earlierDate_.getMonth();
}
const __TURBOPACK__default__export__ = isSameMonth;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/endOfDay.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "endOfDay",
    ()=>endOfDay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
function endOfDay(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
const __TURBOPACK__default__export__ = endOfDay;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/constructNow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "constructNow",
    ()=>constructNow,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
;
function constructNow(date) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(date, Date.now());
}
const __TURBOPACK__default__export__ = constructNow;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/isToday.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isToday",
    ()=>isToday
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constructNow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/constructNow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/isSameDay.js [app-client] (ecmascript)");
;
;
;
function isToday(date, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameDay"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, date), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$constructNow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructNow"])(options?.in || date));
}
const __TURBOPACK__default__export__ = isToday;
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/isBefore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isBefore",
    ()=>isBefore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
function isBefore(date, dateToCompare) {
    return +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date) < +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(dateToCompare);
}
const __TURBOPACK__default__export__ = isBefore;
}),
"[project]/Documents/Project/NewTaskry/node_modules/@dnd-kit/utilities/dist/utilities.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CSS",
    ()=>CSS,
    "add",
    ()=>add,
    "canUseDOM",
    ()=>canUseDOM,
    "findFirstFocusableNode",
    ()=>findFirstFocusableNode,
    "getEventCoordinates",
    ()=>getEventCoordinates,
    "getOwnerDocument",
    ()=>getOwnerDocument,
    "getWindow",
    ()=>getWindow,
    "hasViewportRelativeCoordinates",
    ()=>hasViewportRelativeCoordinates,
    "isDocument",
    ()=>isDocument,
    "isHTMLElement",
    ()=>isHTMLElement,
    "isKeyboardEvent",
    ()=>isKeyboardEvent,
    "isNode",
    ()=>isNode,
    "isSVGElement",
    ()=>isSVGElement,
    "isTouchEvent",
    ()=>isTouchEvent,
    "isWindow",
    ()=>isWindow,
    "subtract",
    ()=>subtract,
    "useCombinedRefs",
    ()=>useCombinedRefs,
    "useEvent",
    ()=>useEvent,
    "useInterval",
    ()=>useInterval,
    "useIsomorphicLayoutEffect",
    ()=>useIsomorphicLayoutEffect,
    "useLatestValue",
    ()=>useLatestValue,
    "useLazyMemo",
    ()=>useLazyMemo,
    "useNodeRef",
    ()=>useNodeRef,
    "usePrevious",
    ()=>usePrevious,
    "useUniqueId",
    ()=>useUniqueId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useCombinedRefs() {
    for(var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++){
        refs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCombinedRefs.useMemo": ()=>({
                "useCombinedRefs.useMemo": (node)=>{
                    refs.forEach({
                        "useCombinedRefs.useMemo": (ref)=>ref(node)
                    }["useCombinedRefs.useMemo"]);
                }
            })["useCombinedRefs.useMemo"]
    }["useCombinedRefs.useMemo"], refs);
}
// https://github.com/facebook/react/blob/master/packages/shared/ExecutionEnvironment.js
const canUseDOM = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';
function isWindow(element) {
    const elementString = Object.prototype.toString.call(element);
    return elementString === '[object Window]' || // In Electron context the Window object serializes to [object global]
    elementString === '[object global]';
}
function isNode(node) {
    return 'nodeType' in node;
}
function getWindow(target) {
    var _target$ownerDocument, _target$ownerDocument2;
    if (!target) {
        return window;
    }
    if (isWindow(target)) {
        return target;
    }
    if (!isNode(target)) {
        return window;
    }
    return (_target$ownerDocument = (_target$ownerDocument2 = target.ownerDocument) == null ? void 0 : _target$ownerDocument2.defaultView) != null ? _target$ownerDocument : window;
}
function isDocument(node) {
    const { Document } = getWindow(node);
    return node instanceof Document;
}
function isHTMLElement(node) {
    if (isWindow(node)) {
        return false;
    }
    return node instanceof getWindow(node).HTMLElement;
}
function isSVGElement(node) {
    return node instanceof getWindow(node).SVGElement;
}
function getOwnerDocument(target) {
    if (!target) {
        return document;
    }
    if (isWindow(target)) {
        return target.document;
    }
    if (!isNode(target)) {
        return document;
    }
    if (isDocument(target)) {
        return target;
    }
    if (isHTMLElement(target) || isSVGElement(target)) {
        return target.ownerDocument;
    }
    return document;
}
/**
 * A hook that resolves to useEffect on the server and useLayoutEffect on the client
 * @param callback {function} Callback function that is invoked when the dependencies of the hook change
 */ const useIsomorphicLayoutEffect = canUseDOM ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
function useEvent(handler) {
    const handlerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(handler);
    useIsomorphicLayoutEffect({
        "useEvent.useIsomorphicLayoutEffect": ()=>{
            handlerRef.current = handler;
        }
    }["useEvent.useIsomorphicLayoutEffect"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEvent.useCallback": function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return handlerRef.current == null ? void 0 : handlerRef.current(...args);
        }
    }["useEvent.useCallback"], []);
}
function useInterval() {
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const set = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInterval.useCallback[set]": (listener, duration)=>{
            intervalRef.current = setInterval(listener, duration);
        }
    }["useInterval.useCallback[set]"], []);
    const clear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInterval.useCallback[clear]": ()=>{
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
    }["useInterval.useCallback[clear]"], []);
    return [
        set,
        clear
    ];
}
function useLatestValue(value, dependencies) {
    if (dependencies === void 0) {
        dependencies = [
            value
        ];
    }
    const valueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value);
    useIsomorphicLayoutEffect({
        "useLatestValue.useIsomorphicLayoutEffect": ()=>{
            if (valueRef.current !== value) {
                valueRef.current = value;
            }
        }
    }["useLatestValue.useIsomorphicLayoutEffect"], dependencies);
    return valueRef;
}
function useLazyMemo(callback, dependencies) {
    const valueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useLazyMemo.useMemo": ()=>{
            const newValue = callback(valueRef.current);
            valueRef.current = newValue;
            return newValue;
        }
    }["useLazyMemo.useMemo"], [
        ...dependencies
    ]);
}
function useNodeRef(onChange) {
    const onChangeHandler = useEvent(onChange);
    const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const setNodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNodeRef.useCallback[setNodeRef]": (element)=>{
            if (element !== node.current) {
                onChangeHandler == null ? void 0 : onChangeHandler(element, node.current);
            }
            node.current = element;
        }
    }["useNodeRef.useCallback[setNodeRef]"], []);
    return [
        node,
        setNodeRef
    ];
}
function usePrevious(value) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePrevious.useEffect": ()=>{
            ref.current = value;
        }
    }["usePrevious.useEffect"], [
        value
    ]);
    return ref.current;
}
let ids = {};
function useUniqueId(prefix, value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useUniqueId.useMemo": ()=>{
            if (value) {
                return value;
            }
            const id = ids[prefix] == null ? 0 : ids[prefix] + 1;
            ids[prefix] = id;
            return prefix + "-" + id;
        }
    }["useUniqueId.useMemo"], [
        prefix,
        value
    ]);
}
function createAdjustmentFn(modifier) {
    return function(object) {
        for(var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            adjustments[_key - 1] = arguments[_key];
        }
        return adjustments.reduce((accumulator, adjustment)=>{
            const entries = Object.entries(adjustment);
            for (const [key, valueAdjustment] of entries){
                const value = accumulator[key];
                if (value != null) {
                    accumulator[key] = value + modifier * valueAdjustment;
                }
            }
            return accumulator;
        }, {
            ...object
        });
    };
}
const add = /*#__PURE__*/ createAdjustmentFn(1);
const subtract = /*#__PURE__*/ createAdjustmentFn(-1);
function hasViewportRelativeCoordinates(event) {
    return 'clientX' in event && 'clientY' in event;
}
function isKeyboardEvent(event) {
    if (!event) {
        return false;
    }
    const { KeyboardEvent } = getWindow(event.target);
    return KeyboardEvent && event instanceof KeyboardEvent;
}
function isTouchEvent(event) {
    if (!event) {
        return false;
    }
    const { TouchEvent } = getWindow(event.target);
    return TouchEvent && event instanceof TouchEvent;
}
/**
 * Returns the normalized x and y coordinates for mouse and touch events.
 */ function getEventCoordinates(event) {
    if (isTouchEvent(event)) {
        if (event.touches && event.touches.length) {
            const { clientX: x, clientY: y } = event.touches[0];
            return {
                x,
                y
            };
        } else if (event.changedTouches && event.changedTouches.length) {
            const { clientX: x, clientY: y } = event.changedTouches[0];
            return {
                x,
                y
            };
        }
    }
    if (hasViewportRelativeCoordinates(event)) {
        return {
            x: event.clientX,
            y: event.clientY
        };
    }
    return null;
}
const CSS = /*#__PURE__*/ Object.freeze({
    Translate: {
        toString (transform) {
            if (!transform) {
                return;
            }
            const { x, y } = transform;
            return "translate3d(" + (x ? Math.round(x) : 0) + "px, " + (y ? Math.round(y) : 0) + "px, 0)";
        }
    },
    Scale: {
        toString (transform) {
            if (!transform) {
                return;
            }
            const { scaleX, scaleY } = transform;
            return "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
        }
    },
    Transform: {
        toString (transform) {
            if (!transform) {
                return;
            }
            return [
                CSS.Translate.toString(transform),
                CSS.Scale.toString(transform)
            ].join(' ');
        }
    },
    Transition: {
        toString (_ref) {
            let { property, duration, easing } = _ref;
            return property + " " + duration + "ms " + easing;
        }
    }
});
const SELECTOR = 'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]';
function findFirstFocusableNode(element) {
    if (element.matches(SELECTOR)) {
        return element;
    }
    return element.querySelector(SELECTOR);
}
;
 //# sourceMappingURL=utilities.esm.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HiddenText",
    ()=>HiddenText,
    "LiveRegion",
    ()=>LiveRegion,
    "useAnnouncement",
    ()=>useAnnouncement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const hiddenStyles = {
    display: 'none'
};
function HiddenText(_ref) {
    let { id, value } = _ref;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        id: id,
        style: hiddenStyles
    }, value);
}
function LiveRegion(_ref) {
    let { id, announcement, ariaLiveType = "assertive" } = _ref;
    // Hide element visually but keep it readable by screen readers
    const visuallyHidden = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        margin: -1,
        border: 0,
        padding: 0,
        overflow: 'hidden',
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(100%)',
        whiteSpace: 'nowrap'
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        id: id,
        style: visuallyHidden,
        role: "status",
        "aria-live": ariaLiveType,
        "aria-atomic": true
    }, announcement);
}
function useAnnouncement() {
    const [announcement, setAnnouncement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const announce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnnouncement.useCallback[announce]": (value)=>{
            if (value != null) {
                setAnnouncement(value);
            }
        }
    }["useAnnouncement.useCallback[announce]"], []);
    return {
        announce,
        announcement
    };
}
;
 //# sourceMappingURL=accessibility.esm.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/@dnd-kit/core/dist/core.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AutoScrollActivator",
    ()=>AutoScrollActivator,
    "DndContext",
    ()=>DndContext,
    "DragOverlay",
    ()=>DragOverlay,
    "KeyboardCode",
    ()=>KeyboardCode,
    "KeyboardSensor",
    ()=>KeyboardSensor,
    "MeasuringFrequency",
    ()=>MeasuringFrequency,
    "MeasuringStrategy",
    ()=>MeasuringStrategy,
    "MouseSensor",
    ()=>MouseSensor,
    "PointerSensor",
    ()=>PointerSensor,
    "TouchSensor",
    ()=>TouchSensor,
    "TraversalOrder",
    ()=>TraversalOrder,
    "applyModifiers",
    ()=>applyModifiers,
    "closestCenter",
    ()=>closestCenter,
    "closestCorners",
    ()=>closestCorners,
    "defaultAnnouncements",
    ()=>defaultAnnouncements,
    "defaultCoordinates",
    ()=>defaultCoordinates,
    "defaultDropAnimation",
    ()=>defaultDropAnimationConfiguration,
    "defaultDropAnimationSideEffects",
    ()=>defaultDropAnimationSideEffects,
    "defaultKeyboardCoordinateGetter",
    ()=>defaultKeyboardCoordinateGetter,
    "defaultScreenReaderInstructions",
    ()=>defaultScreenReaderInstructions,
    "getClientRect",
    ()=>getClientRect,
    "getFirstCollision",
    ()=>getFirstCollision,
    "getScrollableAncestors",
    ()=>getScrollableAncestors,
    "pointerWithin",
    ()=>pointerWithin,
    "rectIntersection",
    ()=>rectIntersection,
    "useDndContext",
    ()=>useDndContext,
    "useDndMonitor",
    ()=>useDndMonitor,
    "useDraggable",
    ()=>useDraggable,
    "useDroppable",
    ()=>useDroppable,
    "useSensor",
    ()=>useSensor,
    "useSensors",
    ()=>useSensors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/@dnd-kit/utilities/dist/utilities.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$accessibility$2f$dist$2f$accessibility$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js [app-client] (ecmascript)");
;
;
;
;
const DndMonitorContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useDndMonitor(listener) {
    const registerListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(DndMonitorContext);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDndMonitor.useEffect": ()=>{
            if (!registerListener) {
                throw new Error('useDndMonitor must be used within a children of <DndContext>');
            }
            const unsubscribe = registerListener(listener);
            return unsubscribe;
        }
    }["useDndMonitor.useEffect"], [
        listener,
        registerListener
    ]);
}
function useDndMonitorProvider() {
    const [listeners] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useDndMonitorProvider.useState": ()=>new Set()
    }["useDndMonitorProvider.useState"]);
    const registerListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDndMonitorProvider.useCallback[registerListener]": (listener)=>{
            listeners.add(listener);
            return ({
                "useDndMonitorProvider.useCallback[registerListener]": ()=>listeners.delete(listener)
            })["useDndMonitorProvider.useCallback[registerListener]"];
        }
    }["useDndMonitorProvider.useCallback[registerListener]"], [
        listeners
    ]);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDndMonitorProvider.useCallback[dispatch]": (_ref)=>{
            let { type, event } = _ref;
            listeners.forEach({
                "useDndMonitorProvider.useCallback[dispatch]": (listener)=>{
                    var _listener$type;
                    return (_listener$type = listener[type]) == null ? void 0 : _listener$type.call(listener, event);
                }
            }["useDndMonitorProvider.useCallback[dispatch]"]);
        }
    }["useDndMonitorProvider.useCallback[dispatch]"], [
        listeners
    ]);
    return [
        dispatch,
        registerListener
    ];
}
const defaultScreenReaderInstructions = {
    draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "
};
const defaultAnnouncements = {
    onDragStart (_ref) {
        let { active } = _ref;
        return "Picked up draggable item " + active.id + ".";
    },
    onDragOver (_ref2) {
        let { active, over } = _ref2;
        if (over) {
            return "Draggable item " + active.id + " was moved over droppable area " + over.id + ".";
        }
        return "Draggable item " + active.id + " is no longer over a droppable area.";
    },
    onDragEnd (_ref3) {
        let { active, over } = _ref3;
        if (over) {
            return "Draggable item " + active.id + " was dropped over droppable area " + over.id;
        }
        return "Draggable item " + active.id + " was dropped.";
    },
    onDragCancel (_ref4) {
        let { active } = _ref4;
        return "Dragging was cancelled. Draggable item " + active.id + " was dropped.";
    }
};
function Accessibility(_ref) {
    let { announcements = defaultAnnouncements, container, hiddenTextDescribedById, screenReaderInstructions = defaultScreenReaderInstructions } = _ref;
    const { announce, announcement } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$accessibility$2f$dist$2f$accessibility$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnnouncement"])();
    const liveRegionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUniqueId"])("DndLiveRegion");
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Accessibility.useEffect": ()=>{
            setMounted(true);
        }
    }["Accessibility.useEffect"], []);
    useDndMonitor((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Accessibility.useDndMonitor.useMemo": ()=>({
                onDragStart (_ref2) {
                    let { active } = _ref2;
                    announce(announcements.onDragStart({
                        active
                    }));
                },
                onDragMove (_ref3) {
                    let { active, over } = _ref3;
                    if (announcements.onDragMove) {
                        announce(announcements.onDragMove({
                            active,
                            over
                        }));
                    }
                },
                onDragOver (_ref4) {
                    let { active, over } = _ref4;
                    announce(announcements.onDragOver({
                        active,
                        over
                    }));
                },
                onDragEnd (_ref5) {
                    let { active, over } = _ref5;
                    announce(announcements.onDragEnd({
                        active,
                        over
                    }));
                },
                onDragCancel (_ref6) {
                    let { active, over } = _ref6;
                    announce(announcements.onDragCancel({
                        active,
                        over
                    }));
                }
            })
    }["Accessibility.useDndMonitor.useMemo"], [
        announce,
        announcements
    ]));
    if (!mounted) {
        return null;
    }
    const markup = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$accessibility$2f$dist$2f$accessibility$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiddenText"], {
        id: hiddenTextDescribedById,
        value: screenReaderInstructions.draggable
    }), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$accessibility$2f$dist$2f$accessibility$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveRegion"], {
        id: liveRegionId,
        announcement: announcement
    }));
    return container ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(markup, container) : markup;
}
var Action;
(function(Action) {
    Action["DragStart"] = "dragStart";
    Action["DragMove"] = "dragMove";
    Action["DragEnd"] = "dragEnd";
    Action["DragCancel"] = "dragCancel";
    Action["DragOver"] = "dragOver";
    Action["RegisterDroppable"] = "registerDroppable";
    Action["SetDroppableDisabled"] = "setDroppableDisabled";
    Action["UnregisterDroppable"] = "unregisterDroppable";
})(Action || (Action = {}));
function noop() {}
function useSensor(sensor, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSensor.useMemo": ()=>({
                sensor,
                options: options != null ? options : {}
            })
    }["useSensor.useMemo"], [
        sensor,
        options
    ]);
}
function useSensors() {
    for(var _len = arguments.length, sensors = new Array(_len), _key = 0; _key < _len; _key++){
        sensors[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSensors.useMemo": ()=>[
                ...sensors
            ].filter({
                "useSensors.useMemo": (sensor)=>sensor != null
            }["useSensors.useMemo"])
    }["useSensors.useMemo"], [
        ...sensors
    ]);
}
const defaultCoordinates = /*#__PURE__*/ Object.freeze({
    x: 0,
    y: 0
});
/**
 * Returns the distance between two points
 */ function distanceBetween(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}
function getRelativeTransformOrigin(event, rect) {
    const eventCoordinates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventCoordinates"])(event);
    if (!eventCoordinates) {
        return '0 0';
    }
    const transformOrigin = {
        x: (eventCoordinates.x - rect.left) / rect.width * 100,
        y: (eventCoordinates.y - rect.top) / rect.height * 100
    };
    return transformOrigin.x + "% " + transformOrigin.y + "%";
}
/**
 * Sort collisions from smallest to greatest value
 */ function sortCollisionsAsc(_ref, _ref2) {
    let { data: { value: a } } = _ref;
    let { data: { value: b } } = _ref2;
    return a - b;
}
/**
 * Sort collisions from greatest to smallest value
 */ function sortCollisionsDesc(_ref3, _ref4) {
    let { data: { value: a } } = _ref3;
    let { data: { value: b } } = _ref4;
    return b - a;
}
/**
 * Returns the coordinates of the corners of a given rectangle:
 * [TopLeft {x, y}, TopRight {x, y}, BottomLeft {x, y}, BottomRight {x, y}]
 */ function cornersOfRectangle(_ref5) {
    let { left, top, height, width } = _ref5;
    return [
        {
            x: left,
            y: top
        },
        {
            x: left + width,
            y: top
        },
        {
            x: left,
            y: top + height
        },
        {
            x: left + width,
            y: top + height
        }
    ];
}
function getFirstCollision(collisions, property) {
    if (!collisions || collisions.length === 0) {
        return null;
    }
    const [firstCollision] = collisions;
    return property ? firstCollision[property] : firstCollision;
}
/**
 * Returns the coordinates of the center of a given ClientRect
 */ function centerOfRectangle(rect, left, top) {
    if (left === void 0) {
        left = rect.left;
    }
    if (top === void 0) {
        top = rect.top;
    }
    return {
        x: left + rect.width * 0.5,
        y: top + rect.height * 0.5
    };
}
/**
 * Returns the closest rectangles from an array of rectangles to the center of a given
 * rectangle.
 */ const closestCenter = (_ref)=>{
    let { collisionRect, droppableRects, droppableContainers } = _ref;
    const centerRect = centerOfRectangle(collisionRect, collisionRect.left, collisionRect.top);
    const collisions = [];
    for (const droppableContainer of droppableContainers){
        const { id } = droppableContainer;
        const rect = droppableRects.get(id);
        if (rect) {
            const distBetween = distanceBetween(centerOfRectangle(rect), centerRect);
            collisions.push({
                id,
                data: {
                    droppableContainer,
                    value: distBetween
                }
            });
        }
    }
    return collisions.sort(sortCollisionsAsc);
};
/**
 * Returns the closest rectangles from an array of rectangles to the corners of
 * another rectangle.
 */ const closestCorners = (_ref)=>{
    let { collisionRect, droppableRects, droppableContainers } = _ref;
    const corners = cornersOfRectangle(collisionRect);
    const collisions = [];
    for (const droppableContainer of droppableContainers){
        const { id } = droppableContainer;
        const rect = droppableRects.get(id);
        if (rect) {
            const rectCorners = cornersOfRectangle(rect);
            const distances = corners.reduce((accumulator, corner, index)=>{
                return accumulator + distanceBetween(rectCorners[index], corner);
            }, 0);
            const effectiveDistance = Number((distances / 4).toFixed(4));
            collisions.push({
                id,
                data: {
                    droppableContainer,
                    value: effectiveDistance
                }
            });
        }
    }
    return collisions.sort(sortCollisionsAsc);
};
/**
 * Returns the intersecting rectangle area between two rectangles
 */ function getIntersectionRatio(entry, target) {
    const top = Math.max(target.top, entry.top);
    const left = Math.max(target.left, entry.left);
    const right = Math.min(target.left + target.width, entry.left + entry.width);
    const bottom = Math.min(target.top + target.height, entry.top + entry.height);
    const width = right - left;
    const height = bottom - top;
    if (left < right && top < bottom) {
        const targetArea = target.width * target.height;
        const entryArea = entry.width * entry.height;
        const intersectionArea = width * height;
        const intersectionRatio = intersectionArea / (targetArea + entryArea - intersectionArea);
        return Number(intersectionRatio.toFixed(4));
    } // Rectangles do not overlap, or overlap has an area of zero (edge/corner overlap)
    return 0;
}
/**
 * Returns the rectangles that has the greatest intersection area with a given
 * rectangle in an array of rectangles.
 */ const rectIntersection = (_ref)=>{
    let { collisionRect, droppableRects, droppableContainers } = _ref;
    const collisions = [];
    for (const droppableContainer of droppableContainers){
        const { id } = droppableContainer;
        const rect = droppableRects.get(id);
        if (rect) {
            const intersectionRatio = getIntersectionRatio(rect, collisionRect);
            if (intersectionRatio > 0) {
                collisions.push({
                    id,
                    data: {
                        droppableContainer,
                        value: intersectionRatio
                    }
                });
            }
        }
    }
    return collisions.sort(sortCollisionsDesc);
};
/**
 * Check if a given point is contained within a bounding rectangle
 */ function isPointWithinRect(point, rect) {
    const { top, left, bottom, right } = rect;
    return top <= point.y && point.y <= bottom && left <= point.x && point.x <= right;
}
/**
 * Returns the rectangles that the pointer is hovering over
 */ const pointerWithin = (_ref)=>{
    let { droppableContainers, droppableRects, pointerCoordinates } = _ref;
    if (!pointerCoordinates) {
        return [];
    }
    const collisions = [];
    for (const droppableContainer of droppableContainers){
        const { id } = droppableContainer;
        const rect = droppableRects.get(id);
        if (rect && isPointWithinRect(pointerCoordinates, rect)) {
            /* There may be more than a single rectangle intersecting
       * with the pointer coordinates. In order to sort the
       * colliding rectangles, we measure the distance between
       * the pointer and the corners of the intersecting rectangle
       */ const corners = cornersOfRectangle(rect);
            const distances = corners.reduce((accumulator, corner)=>{
                return accumulator + distanceBetween(pointerCoordinates, corner);
            }, 0);
            const effectiveDistance = Number((distances / 4).toFixed(4));
            collisions.push({
                id,
                data: {
                    droppableContainer,
                    value: effectiveDistance
                }
            });
        }
    }
    return collisions.sort(sortCollisionsAsc);
};
function adjustScale(transform, rect1, rect2) {
    return {
        ...transform,
        scaleX: rect1 && rect2 ? rect1.width / rect2.width : 1,
        scaleY: rect1 && rect2 ? rect1.height / rect2.height : 1
    };
}
function getRectDelta(rect1, rect2) {
    return rect1 && rect2 ? {
        x: rect1.left - rect2.left,
        y: rect1.top - rect2.top
    } : defaultCoordinates;
}
function createRectAdjustmentFn(modifier) {
    return function adjustClientRect(rect) {
        for(var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            adjustments[_key - 1] = arguments[_key];
        }
        return adjustments.reduce((acc, adjustment)=>({
                ...acc,
                top: acc.top + modifier * adjustment.y,
                bottom: acc.bottom + modifier * adjustment.y,
                left: acc.left + modifier * adjustment.x,
                right: acc.right + modifier * adjustment.x
            }), {
            ...rect
        });
    };
}
const getAdjustedRect = /*#__PURE__*/ createRectAdjustmentFn(1);
function parseTransform(transform) {
    if (transform.startsWith('matrix3d(')) {
        const transformArray = transform.slice(9, -1).split(/, /);
        return {
            x: +transformArray[12],
            y: +transformArray[13],
            scaleX: +transformArray[0],
            scaleY: +transformArray[5]
        };
    } else if (transform.startsWith('matrix(')) {
        const transformArray = transform.slice(7, -1).split(/, /);
        return {
            x: +transformArray[4],
            y: +transformArray[5],
            scaleX: +transformArray[0],
            scaleY: +transformArray[3]
        };
    }
    return null;
}
function inverseTransform(rect, transform, transformOrigin) {
    const parsedTransform = parseTransform(transform);
    if (!parsedTransform) {
        return rect;
    }
    const { scaleX, scaleY, x: translateX, y: translateY } = parsedTransform;
    const x = rect.left - translateX - (1 - scaleX) * parseFloat(transformOrigin);
    const y = rect.top - translateY - (1 - scaleY) * parseFloat(transformOrigin.slice(transformOrigin.indexOf(' ') + 1));
    const w = scaleX ? rect.width / scaleX : rect.width;
    const h = scaleY ? rect.height / scaleY : rect.height;
    return {
        width: w,
        height: h,
        top: y,
        right: x + w,
        bottom: y + h,
        left: x
    };
}
const defaultOptions = {
    ignoreTransform: false
};
/**
 * Returns the bounding client rect of an element relative to the viewport.
 */ function getClientRect(element, options) {
    if (options === void 0) {
        options = defaultOptions;
    }
    let rect = element.getBoundingClientRect();
    if (options.ignoreTransform) {
        const { transform, transformOrigin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element).getComputedStyle(element);
        if (transform) {
            rect = inverseTransform(rect, transform, transformOrigin);
        }
    }
    const { top, left, width, height, bottom, right } = rect;
    return {
        top,
        left,
        width,
        height,
        bottom,
        right
    };
}
/**
 * Returns the bounding client rect of an element relative to the viewport.
 *
 * @remarks
 * The ClientRect returned by this method does not take into account transforms
 * applied to the element it measures.
 *
 */ function getTransformAgnosticClientRect(element) {
    return getClientRect(element, {
        ignoreTransform: true
    });
}
function getWindowClientRect(element) {
    const width = element.innerWidth;
    const height = element.innerHeight;
    return {
        top: 0,
        left: 0,
        right: width,
        bottom: height,
        width,
        height
    };
}
function isFixed(node, computedStyle) {
    if (computedStyle === void 0) {
        computedStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(node).getComputedStyle(node);
    }
    return computedStyle.position === 'fixed';
}
function isScrollable(element, computedStyle) {
    if (computedStyle === void 0) {
        computedStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element).getComputedStyle(element);
    }
    const overflowRegex = /(auto|scroll|overlay)/;
    const properties = [
        'overflow',
        'overflowX',
        'overflowY'
    ];
    return properties.some((property)=>{
        const value = computedStyle[property];
        return typeof value === 'string' ? overflowRegex.test(value) : false;
    });
}
function getScrollableAncestors(element, limit) {
    const scrollParents = [];
    function findScrollableAncestors(node) {
        if (limit != null && scrollParents.length >= limit) {
            return scrollParents;
        }
        if (!node) {
            return scrollParents;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDocument"])(node) && node.scrollingElement != null && !scrollParents.includes(node.scrollingElement)) {
            scrollParents.push(node.scrollingElement);
            return scrollParents;
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(node) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGElement"])(node)) {
            return scrollParents;
        }
        if (scrollParents.includes(node)) {
            return scrollParents;
        }
        const computedStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element).getComputedStyle(node);
        if (node !== element) {
            if (isScrollable(node, computedStyle)) {
                scrollParents.push(node);
            }
        }
        if (isFixed(node, computedStyle)) {
            return scrollParents;
        }
        return findScrollableAncestors(node.parentNode);
    }
    if (!element) {
        return scrollParents;
    }
    return findScrollableAncestors(element);
}
function getFirstScrollableAncestor(node) {
    const [firstScrollableAncestor] = getScrollableAncestors(node, 1);
    return firstScrollableAncestor != null ? firstScrollableAncestor : null;
}
function getScrollableElement(element) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseDOM"] || !element) {
        return null;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWindow"])(element)) {
        return element;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNode"])(element)) {
        return null;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDocument"])(element) || element === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(element).scrollingElement) {
        return window;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element)) {
        return element;
    }
    return null;
}
function getScrollXCoordinate(element) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWindow"])(element)) {
        return element.scrollX;
    }
    return element.scrollLeft;
}
function getScrollYCoordinate(element) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWindow"])(element)) {
        return element.scrollY;
    }
    return element.scrollTop;
}
function getScrollCoordinates(element) {
    return {
        x: getScrollXCoordinate(element),
        y: getScrollYCoordinate(element)
    };
}
var Direction;
(function(Direction) {
    Direction[Direction["Forward"] = 1] = "Forward";
    Direction[Direction["Backward"] = -1] = "Backward";
})(Direction || (Direction = {}));
function isDocumentScrollingElement(element) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseDOM"] || !element) {
        return false;
    }
    return element === document.scrollingElement;
}
function getScrollPosition(scrollingContainer) {
    const minScroll = {
        x: 0,
        y: 0
    };
    const dimensions = isDocumentScrollingElement(scrollingContainer) ? {
        height: window.innerHeight,
        width: window.innerWidth
    } : {
        height: scrollingContainer.clientHeight,
        width: scrollingContainer.clientWidth
    };
    const maxScroll = {
        x: scrollingContainer.scrollWidth - dimensions.width,
        y: scrollingContainer.scrollHeight - dimensions.height
    };
    const isTop = scrollingContainer.scrollTop <= minScroll.y;
    const isLeft = scrollingContainer.scrollLeft <= minScroll.x;
    const isBottom = scrollingContainer.scrollTop >= maxScroll.y;
    const isRight = scrollingContainer.scrollLeft >= maxScroll.x;
    return {
        isTop,
        isLeft,
        isBottom,
        isRight,
        maxScroll,
        minScroll
    };
}
const defaultThreshold = {
    x: 0.2,
    y: 0.2
};
function getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, _ref, acceleration, thresholdPercentage) {
    let { top, left, right, bottom } = _ref;
    if (acceleration === void 0) {
        acceleration = 10;
    }
    if (thresholdPercentage === void 0) {
        thresholdPercentage = defaultThreshold;
    }
    const { isTop, isBottom, isLeft, isRight } = getScrollPosition(scrollContainer);
    const direction = {
        x: 0,
        y: 0
    };
    const speed = {
        x: 0,
        y: 0
    };
    const threshold = {
        height: scrollContainerRect.height * thresholdPercentage.y,
        width: scrollContainerRect.width * thresholdPercentage.x
    };
    if (!isTop && top <= scrollContainerRect.top + threshold.height) {
        // Scroll Up
        direction.y = Direction.Backward;
        speed.y = acceleration * Math.abs((scrollContainerRect.top + threshold.height - top) / threshold.height);
    } else if (!isBottom && bottom >= scrollContainerRect.bottom - threshold.height) {
        // Scroll Down
        direction.y = Direction.Forward;
        speed.y = acceleration * Math.abs((scrollContainerRect.bottom - threshold.height - bottom) / threshold.height);
    }
    if (!isRight && right >= scrollContainerRect.right - threshold.width) {
        // Scroll Right
        direction.x = Direction.Forward;
        speed.x = acceleration * Math.abs((scrollContainerRect.right - threshold.width - right) / threshold.width);
    } else if (!isLeft && left <= scrollContainerRect.left + threshold.width) {
        // Scroll Left
        direction.x = Direction.Backward;
        speed.x = acceleration * Math.abs((scrollContainerRect.left + threshold.width - left) / threshold.width);
    }
    return {
        direction,
        speed
    };
}
function getScrollElementRect(element) {
    if (element === document.scrollingElement) {
        const { innerWidth, innerHeight } = window;
        return {
            top: 0,
            left: 0,
            right: innerWidth,
            bottom: innerHeight,
            width: innerWidth,
            height: innerHeight
        };
    }
    const { top, left, right, bottom } = element.getBoundingClientRect();
    return {
        top,
        left,
        right,
        bottom,
        width: element.clientWidth,
        height: element.clientHeight
    };
}
function getScrollOffsets(scrollableAncestors) {
    return scrollableAncestors.reduce((acc, node)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"])(acc, getScrollCoordinates(node));
    }, defaultCoordinates);
}
function getScrollXOffset(scrollableAncestors) {
    return scrollableAncestors.reduce((acc, node)=>{
        return acc + getScrollXCoordinate(node);
    }, 0);
}
function getScrollYOffset(scrollableAncestors) {
    return scrollableAncestors.reduce((acc, node)=>{
        return acc + getScrollYCoordinate(node);
    }, 0);
}
function scrollIntoViewIfNeeded(element, measure) {
    if (measure === void 0) {
        measure = getClientRect;
    }
    if (!element) {
        return;
    }
    const { top, left, bottom, right } = measure(element);
    const firstScrollableAncestor = getFirstScrollableAncestor(element);
    if (!firstScrollableAncestor) {
        return;
    }
    if (bottom <= 0 || right <= 0 || top >= window.innerHeight || left >= window.innerWidth) {
        element.scrollIntoView({
            block: 'center',
            inline: 'center'
        });
    }
}
const properties = [
    [
        'x',
        [
            'left',
            'right'
        ],
        getScrollXOffset
    ],
    [
        'y',
        [
            'top',
            'bottom'
        ],
        getScrollYOffset
    ]
];
class Rect {
    constructor(rect, element){
        this.rect = void 0;
        this.width = void 0;
        this.height = void 0;
        this.top = void 0;
        this.bottom = void 0;
        this.right = void 0;
        this.left = void 0;
        const scrollableAncestors = getScrollableAncestors(element);
        const scrollOffsets = getScrollOffsets(scrollableAncestors);
        this.rect = {
            ...rect
        };
        this.width = rect.width;
        this.height = rect.height;
        for (const [axis, keys, getScrollOffset] of properties){
            for (const key of keys){
                Object.defineProperty(this, key, {
                    get: ()=>{
                        const currentOffsets = getScrollOffset(scrollableAncestors);
                        const scrollOffsetsDeltla = scrollOffsets[axis] - currentOffsets;
                        return this.rect[key] + scrollOffsetsDeltla;
                    },
                    enumerable: true
                });
            }
        }
        Object.defineProperty(this, 'rect', {
            enumerable: false
        });
    }
}
class Listeners {
    constructor(target){
        this.target = void 0;
        this.listeners = [];
        this.removeAll = ()=>{
            this.listeners.forEach((listener)=>{
                var _this$target;
                return (_this$target = this.target) == null ? void 0 : _this$target.removeEventListener(...listener);
            });
        };
        this.target = target;
    }
    add(eventName, handler, options) {
        var _this$target2;
        (_this$target2 = this.target) == null ? void 0 : _this$target2.addEventListener(eventName, handler, options);
        this.listeners.push([
            eventName,
            handler,
            options
        ]);
    }
}
function getEventListenerTarget(target) {
    // If the `event.target` element is removed from the document events will still be targeted
    // at it, and hence won't always bubble up to the window or document anymore.
    // If there is any risk of an element being removed while it is being dragged,
    // the best practice is to attach the event listeners directly to the target.
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
    const { EventTarget } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(target);
    return target instanceof EventTarget ? target : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(target);
}
function hasExceededDistance(delta, measurement) {
    const dx = Math.abs(delta.x);
    const dy = Math.abs(delta.y);
    if (typeof measurement === 'number') {
        return Math.sqrt(dx ** 2 + dy ** 2) > measurement;
    }
    if ('x' in measurement && 'y' in measurement) {
        return dx > measurement.x && dy > measurement.y;
    }
    if ('x' in measurement) {
        return dx > measurement.x;
    }
    if ('y' in measurement) {
        return dy > measurement.y;
    }
    return false;
}
var EventName;
(function(EventName) {
    EventName["Click"] = "click";
    EventName["DragStart"] = "dragstart";
    EventName["Keydown"] = "keydown";
    EventName["ContextMenu"] = "contextmenu";
    EventName["Resize"] = "resize";
    EventName["SelectionChange"] = "selectionchange";
    EventName["VisibilityChange"] = "visibilitychange";
})(EventName || (EventName = {}));
function preventDefault(event) {
    event.preventDefault();
}
function stopPropagation(event) {
    event.stopPropagation();
}
var KeyboardCode;
(function(KeyboardCode) {
    KeyboardCode["Space"] = "Space";
    KeyboardCode["Down"] = "ArrowDown";
    KeyboardCode["Right"] = "ArrowRight";
    KeyboardCode["Left"] = "ArrowLeft";
    KeyboardCode["Up"] = "ArrowUp";
    KeyboardCode["Esc"] = "Escape";
    KeyboardCode["Enter"] = "Enter";
    KeyboardCode["Tab"] = "Tab";
})(KeyboardCode || (KeyboardCode = {}));
const defaultKeyboardCodes = {
    start: [
        KeyboardCode.Space,
        KeyboardCode.Enter
    ],
    cancel: [
        KeyboardCode.Esc
    ],
    end: [
        KeyboardCode.Space,
        KeyboardCode.Enter,
        KeyboardCode.Tab
    ]
};
const defaultKeyboardCoordinateGetter = (event, _ref)=>{
    let { currentCoordinates } = _ref;
    switch(event.code){
        case KeyboardCode.Right:
            return {
                ...currentCoordinates,
                x: currentCoordinates.x + 25
            };
        case KeyboardCode.Left:
            return {
                ...currentCoordinates,
                x: currentCoordinates.x - 25
            };
        case KeyboardCode.Down:
            return {
                ...currentCoordinates,
                y: currentCoordinates.y + 25
            };
        case KeyboardCode.Up:
            return {
                ...currentCoordinates,
                y: currentCoordinates.y - 25
            };
    }
    return undefined;
};
class KeyboardSensor {
    constructor(props){
        this.props = void 0;
        this.autoScrollEnabled = false;
        this.referenceCoordinates = void 0;
        this.listeners = void 0;
        this.windowListeners = void 0;
        this.props = props;
        const { event: { target } } = props;
        this.props = props;
        this.listeners = new Listeners((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(target));
        this.windowListeners = new Listeners((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(target));
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.attach();
    }
    attach() {
        this.handleStart();
        this.windowListeners.add(EventName.Resize, this.handleCancel);
        this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
        setTimeout(()=>this.listeners.add(EventName.Keydown, this.handleKeyDown));
    }
    handleStart() {
        const { activeNode, onStart } = this.props;
        const node = activeNode.node.current;
        if (node) {
            scrollIntoViewIfNeeded(node);
        }
        onStart(defaultCoordinates);
    }
    handleKeyDown(event) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeyboardEvent"])(event)) {
            const { active, context, options } = this.props;
            const { keyboardCodes = defaultKeyboardCodes, coordinateGetter = defaultKeyboardCoordinateGetter, scrollBehavior = 'smooth' } = options;
            const { code } = event;
            if (keyboardCodes.end.includes(code)) {
                this.handleEnd(event);
                return;
            }
            if (keyboardCodes.cancel.includes(code)) {
                this.handleCancel(event);
                return;
            }
            const { collisionRect } = context.current;
            const currentCoordinates = collisionRect ? {
                x: collisionRect.left,
                y: collisionRect.top
            } : defaultCoordinates;
            if (!this.referenceCoordinates) {
                this.referenceCoordinates = currentCoordinates;
            }
            const newCoordinates = coordinateGetter(event, {
                active,
                context: context.current,
                currentCoordinates
            });
            if (newCoordinates) {
                const coordinatesDelta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subtract"])(newCoordinates, currentCoordinates);
                const scrollDelta = {
                    x: 0,
                    y: 0
                };
                const { scrollableAncestors } = context.current;
                for (const scrollContainer of scrollableAncestors){
                    const direction = event.code;
                    const { isTop, isRight, isLeft, isBottom, maxScroll, minScroll } = getScrollPosition(scrollContainer);
                    const scrollElementRect = getScrollElementRect(scrollContainer);
                    const clampedCoordinates = {
                        x: Math.min(direction === KeyboardCode.Right ? scrollElementRect.right - scrollElementRect.width / 2 : scrollElementRect.right, Math.max(direction === KeyboardCode.Right ? scrollElementRect.left : scrollElementRect.left + scrollElementRect.width / 2, newCoordinates.x)),
                        y: Math.min(direction === KeyboardCode.Down ? scrollElementRect.bottom - scrollElementRect.height / 2 : scrollElementRect.bottom, Math.max(direction === KeyboardCode.Down ? scrollElementRect.top : scrollElementRect.top + scrollElementRect.height / 2, newCoordinates.y))
                    };
                    const canScrollX = direction === KeyboardCode.Right && !isRight || direction === KeyboardCode.Left && !isLeft;
                    const canScrollY = direction === KeyboardCode.Down && !isBottom || direction === KeyboardCode.Up && !isTop;
                    if (canScrollX && clampedCoordinates.x !== newCoordinates.x) {
                        const newScrollCoordinates = scrollContainer.scrollLeft + coordinatesDelta.x;
                        const canScrollToNewCoordinates = direction === KeyboardCode.Right && newScrollCoordinates <= maxScroll.x || direction === KeyboardCode.Left && newScrollCoordinates >= minScroll.x;
                        if (canScrollToNewCoordinates && !coordinatesDelta.y) {
                            // We don't need to update coordinates, the scroll adjustment alone will trigger
                            // logic to auto-detect the new container we are over
                            scrollContainer.scrollTo({
                                left: newScrollCoordinates,
                                behavior: scrollBehavior
                            });
                            return;
                        }
                        if (canScrollToNewCoordinates) {
                            scrollDelta.x = scrollContainer.scrollLeft - newScrollCoordinates;
                        } else {
                            scrollDelta.x = direction === KeyboardCode.Right ? scrollContainer.scrollLeft - maxScroll.x : scrollContainer.scrollLeft - minScroll.x;
                        }
                        if (scrollDelta.x) {
                            scrollContainer.scrollBy({
                                left: -scrollDelta.x,
                                behavior: scrollBehavior
                            });
                        }
                        break;
                    } else if (canScrollY && clampedCoordinates.y !== newCoordinates.y) {
                        const newScrollCoordinates = scrollContainer.scrollTop + coordinatesDelta.y;
                        const canScrollToNewCoordinates = direction === KeyboardCode.Down && newScrollCoordinates <= maxScroll.y || direction === KeyboardCode.Up && newScrollCoordinates >= minScroll.y;
                        if (canScrollToNewCoordinates && !coordinatesDelta.x) {
                            // We don't need to update coordinates, the scroll adjustment alone will trigger
                            // logic to auto-detect the new container we are over
                            scrollContainer.scrollTo({
                                top: newScrollCoordinates,
                                behavior: scrollBehavior
                            });
                            return;
                        }
                        if (canScrollToNewCoordinates) {
                            scrollDelta.y = scrollContainer.scrollTop - newScrollCoordinates;
                        } else {
                            scrollDelta.y = direction === KeyboardCode.Down ? scrollContainer.scrollTop - maxScroll.y : scrollContainer.scrollTop - minScroll.y;
                        }
                        if (scrollDelta.y) {
                            scrollContainer.scrollBy({
                                top: -scrollDelta.y,
                                behavior: scrollBehavior
                            });
                        }
                        break;
                    }
                }
                this.handleMove(event, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subtract"])(newCoordinates, this.referenceCoordinates), scrollDelta));
            }
        }
    }
    handleMove(event, coordinates) {
        const { onMove } = this.props;
        event.preventDefault();
        onMove(coordinates);
    }
    handleEnd(event) {
        const { onEnd } = this.props;
        event.preventDefault();
        this.detach();
        onEnd();
    }
    handleCancel(event) {
        const { onCancel } = this.props;
        event.preventDefault();
        this.detach();
        onCancel();
    }
    detach() {
        this.listeners.removeAll();
        this.windowListeners.removeAll();
    }
}
KeyboardSensor.activators = [
    {
        eventName: 'onKeyDown',
        handler: (event, _ref, _ref2)=>{
            let { keyboardCodes = defaultKeyboardCodes, onActivation } = _ref;
            let { active } = _ref2;
            const { code } = event.nativeEvent;
            if (keyboardCodes.start.includes(code)) {
                const activator = active.activatorNode.current;
                if (activator && event.target !== activator) {
                    return false;
                }
                event.preventDefault();
                onActivation == null ? void 0 : onActivation({
                    event: event.nativeEvent
                });
                return true;
            }
            return false;
        }
    }
];
function isDistanceConstraint(constraint) {
    return Boolean(constraint && 'distance' in constraint);
}
function isDelayConstraint(constraint) {
    return Boolean(constraint && 'delay' in constraint);
}
class AbstractPointerSensor {
    constructor(props, events, listenerTarget){
        var _getEventCoordinates;
        if (listenerTarget === void 0) {
            listenerTarget = getEventListenerTarget(props.event.target);
        }
        this.props = void 0;
        this.events = void 0;
        this.autoScrollEnabled = true;
        this.document = void 0;
        this.activated = false;
        this.initialCoordinates = void 0;
        this.timeoutId = null;
        this.listeners = void 0;
        this.documentListeners = void 0;
        this.windowListeners = void 0;
        this.props = props;
        this.events = events;
        const { event } = props;
        const { target } = event;
        this.props = props;
        this.events = events;
        this.document = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(target);
        this.documentListeners = new Listeners(this.document);
        this.listeners = new Listeners(listenerTarget);
        this.windowListeners = new Listeners((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(target));
        this.initialCoordinates = (_getEventCoordinates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventCoordinates"])(event)) != null ? _getEventCoordinates : defaultCoordinates;
        this.handleStart = this.handleStart.bind(this);
        this.handleMove = this.handleMove.bind(this);
        this.handleEnd = this.handleEnd.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
        this.removeTextSelection = this.removeTextSelection.bind(this);
        this.attach();
    }
    attach() {
        const { events, props: { options: { activationConstraint, bypassActivationConstraint } } } = this;
        this.listeners.add(events.move.name, this.handleMove, {
            passive: false
        });
        this.listeners.add(events.end.name, this.handleEnd);
        if (events.cancel) {
            this.listeners.add(events.cancel.name, this.handleCancel);
        }
        this.windowListeners.add(EventName.Resize, this.handleCancel);
        this.windowListeners.add(EventName.DragStart, preventDefault);
        this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
        this.windowListeners.add(EventName.ContextMenu, preventDefault);
        this.documentListeners.add(EventName.Keydown, this.handleKeydown);
        if (activationConstraint) {
            if (bypassActivationConstraint != null && bypassActivationConstraint({
                event: this.props.event,
                activeNode: this.props.activeNode,
                options: this.props.options
            })) {
                return this.handleStart();
            }
            if (isDelayConstraint(activationConstraint)) {
                this.timeoutId = setTimeout(this.handleStart, activationConstraint.delay);
                this.handlePending(activationConstraint);
                return;
            }
            if (isDistanceConstraint(activationConstraint)) {
                this.handlePending(activationConstraint);
                return;
            }
        }
        this.handleStart();
    }
    detach() {
        this.listeners.removeAll();
        this.windowListeners.removeAll(); // Wait until the next event loop before removing document listeners
        // This is necessary because we listen for `click` and `selection` events on the document
        setTimeout(this.documentListeners.removeAll, 50);
        if (this.timeoutId !== null) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
    }
    handlePending(constraint, offset) {
        const { active, onPending } = this.props;
        onPending(active, constraint, this.initialCoordinates, offset);
    }
    handleStart() {
        const { initialCoordinates } = this;
        const { onStart } = this.props;
        if (initialCoordinates) {
            this.activated = true; // Stop propagation of click events once activation constraints are met
            this.documentListeners.add(EventName.Click, stopPropagation, {
                capture: true
            }); // Remove any text selection from the document
            this.removeTextSelection(); // Prevent further text selection while dragging
            this.documentListeners.add(EventName.SelectionChange, this.removeTextSelection);
            onStart(initialCoordinates);
        }
    }
    handleMove(event) {
        var _getEventCoordinates2;
        const { activated, initialCoordinates, props } = this;
        const { onMove, options: { activationConstraint } } = props;
        if (!initialCoordinates) {
            return;
        }
        const coordinates = (_getEventCoordinates2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventCoordinates"])(event)) != null ? _getEventCoordinates2 : defaultCoordinates;
        const delta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subtract"])(initialCoordinates, coordinates); // Constraint validation
        if (!activated && activationConstraint) {
            if (isDistanceConstraint(activationConstraint)) {
                if (activationConstraint.tolerance != null && hasExceededDistance(delta, activationConstraint.tolerance)) {
                    return this.handleCancel();
                }
                if (hasExceededDistance(delta, activationConstraint.distance)) {
                    return this.handleStart();
                }
            }
            if (isDelayConstraint(activationConstraint)) {
                if (hasExceededDistance(delta, activationConstraint.tolerance)) {
                    return this.handleCancel();
                }
            }
            this.handlePending(activationConstraint, delta);
            return;
        }
        if (event.cancelable) {
            event.preventDefault();
        }
        onMove(coordinates);
    }
    handleEnd() {
        const { onAbort, onEnd } = this.props;
        this.detach();
        if (!this.activated) {
            onAbort(this.props.active);
        }
        onEnd();
    }
    handleCancel() {
        const { onAbort, onCancel } = this.props;
        this.detach();
        if (!this.activated) {
            onAbort(this.props.active);
        }
        onCancel();
    }
    handleKeydown(event) {
        if (event.code === KeyboardCode.Esc) {
            this.handleCancel();
        }
    }
    removeTextSelection() {
        var _this$document$getSel;
        (_this$document$getSel = this.document.getSelection()) == null ? void 0 : _this$document$getSel.removeAllRanges();
    }
}
const events = {
    cancel: {
        name: 'pointercancel'
    },
    move: {
        name: 'pointermove'
    },
    end: {
        name: 'pointerup'
    }
};
class PointerSensor extends AbstractPointerSensor {
    constructor(props){
        const { event } = props; // Pointer events stop firing if the target is unmounted while dragging
        // Therefore we attach listeners to the owner document instead
        const listenerTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(event.target);
        super(props, events, listenerTarget);
    }
}
PointerSensor.activators = [
    {
        eventName: 'onPointerDown',
        handler: (_ref, _ref2)=>{
            let { nativeEvent: event } = _ref;
            let { onActivation } = _ref2;
            if (!event.isPrimary || event.button !== 0) {
                return false;
            }
            onActivation == null ? void 0 : onActivation({
                event
            });
            return true;
        }
    }
];
const events$1 = {
    move: {
        name: 'mousemove'
    },
    end: {
        name: 'mouseup'
    }
};
var MouseButton;
(function(MouseButton) {
    MouseButton[MouseButton["RightClick"] = 2] = "RightClick";
})(MouseButton || (MouseButton = {}));
class MouseSensor extends AbstractPointerSensor {
    constructor(props){
        super(props, events$1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(props.event.target));
    }
}
MouseSensor.activators = [
    {
        eventName: 'onMouseDown',
        handler: (_ref, _ref2)=>{
            let { nativeEvent: event } = _ref;
            let { onActivation } = _ref2;
            if (event.button === MouseButton.RightClick) {
                return false;
            }
            onActivation == null ? void 0 : onActivation({
                event
            });
            return true;
        }
    }
];
const events$2 = {
    cancel: {
        name: 'touchcancel'
    },
    move: {
        name: 'touchmove'
    },
    end: {
        name: 'touchend'
    }
};
class TouchSensor extends AbstractPointerSensor {
    constructor(props){
        super(props, events$2);
    }
    static setup() {
        // Adding a non-capture and non-passive `touchmove` listener in order
        // to force `event.preventDefault()` calls to work in dynamically added
        // touchmove event handlers. This is required for iOS Safari.
        window.addEventListener(events$2.move.name, noop, {
            capture: false,
            passive: false
        });
        return function teardown() {
            window.removeEventListener(events$2.move.name, noop);
        }; // We create a new handler because the teardown function of another sensor
        //TURBOPACK unreachable
        ;
        // could remove our event listener if we use a referentially equal listener.
        function noop() {}
    }
}
TouchSensor.activators = [
    {
        eventName: 'onTouchStart',
        handler: (_ref, _ref2)=>{
            let { nativeEvent: event } = _ref;
            let { onActivation } = _ref2;
            const { touches } = event;
            if (touches.length > 1) {
                return false;
            }
            onActivation == null ? void 0 : onActivation({
                event
            });
            return true;
        }
    }
];
var AutoScrollActivator;
(function(AutoScrollActivator) {
    AutoScrollActivator[AutoScrollActivator["Pointer"] = 0] = "Pointer";
    AutoScrollActivator[AutoScrollActivator["DraggableRect"] = 1] = "DraggableRect";
})(AutoScrollActivator || (AutoScrollActivator = {}));
var TraversalOrder;
(function(TraversalOrder) {
    TraversalOrder[TraversalOrder["TreeOrder"] = 0] = "TreeOrder";
    TraversalOrder[TraversalOrder["ReversedTreeOrder"] = 1] = "ReversedTreeOrder";
})(TraversalOrder || (TraversalOrder = {}));
function useAutoScroller(_ref) {
    let { acceleration, activator = AutoScrollActivator.Pointer, canScroll, draggingRect, enabled, interval = 5, order = TraversalOrder.TreeOrder, pointerCoordinates, scrollableAncestors, scrollableAncestorRects, delta, threshold } = _ref;
    const scrollIntent = useScrollIntent({
        delta,
        disabled: !enabled
    });
    const [setAutoScrollInterval, clearAutoScrollInterval] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInterval"])();
    const scrollSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const scrollDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useAutoScroller.useMemo[rect]": ()=>{
            switch(activator){
                case AutoScrollActivator.Pointer:
                    return pointerCoordinates ? {
                        top: pointerCoordinates.y,
                        bottom: pointerCoordinates.y,
                        left: pointerCoordinates.x,
                        right: pointerCoordinates.x
                    } : null;
                case AutoScrollActivator.DraggableRect:
                    return draggingRect;
            }
        }
    }["useAutoScroller.useMemo[rect]"], [
        activator,
        draggingRect,
        pointerCoordinates
    ]);
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const autoScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAutoScroller.useCallback[autoScroll]": ()=>{
            const scrollContainer = scrollContainerRef.current;
            if (!scrollContainer) {
                return;
            }
            const scrollLeft = scrollSpeed.current.x * scrollDirection.current.x;
            const scrollTop = scrollSpeed.current.y * scrollDirection.current.y;
            scrollContainer.scrollBy(scrollLeft, scrollTop);
        }
    }["useAutoScroller.useCallback[autoScroll]"], []);
    const sortedScrollableAncestors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useAutoScroller.useMemo[sortedScrollableAncestors]": ()=>order === TraversalOrder.TreeOrder ? [
                ...scrollableAncestors
            ].reverse() : scrollableAncestors
    }["useAutoScroller.useMemo[sortedScrollableAncestors]"], [
        order,
        scrollableAncestors
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAutoScroller.useEffect": ()=>{
            if (!enabled || !scrollableAncestors.length || !rect) {
                clearAutoScrollInterval();
                return;
            }
            for (const scrollContainer of sortedScrollableAncestors){
                if ((canScroll == null ? void 0 : canScroll(scrollContainer)) === false) {
                    continue;
                }
                const index = scrollableAncestors.indexOf(scrollContainer);
                const scrollContainerRect = scrollableAncestorRects[index];
                if (!scrollContainerRect) {
                    continue;
                }
                const { direction, speed } = getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, rect, acceleration, threshold);
                for (const axis of [
                    'x',
                    'y'
                ]){
                    if (!scrollIntent[axis][direction[axis]]) {
                        speed[axis] = 0;
                        direction[axis] = 0;
                    }
                }
                if (speed.x > 0 || speed.y > 0) {
                    clearAutoScrollInterval();
                    scrollContainerRef.current = scrollContainer;
                    setAutoScrollInterval(autoScroll, interval);
                    scrollSpeed.current = speed;
                    scrollDirection.current = direction;
                    return;
                }
            }
            scrollSpeed.current = {
                x: 0,
                y: 0
            };
            scrollDirection.current = {
                x: 0,
                y: 0
            };
            clearAutoScrollInterval();
        }
    }["useAutoScroller.useEffect"], [
        acceleration,
        autoScroll,
        canScroll,
        clearAutoScrollInterval,
        enabled,
        interval,
        JSON.stringify(rect),
        JSON.stringify(scrollIntent),
        setAutoScrollInterval,
        scrollableAncestors,
        sortedScrollableAncestors,
        scrollableAncestorRects,
        JSON.stringify(threshold)
    ]);
}
const defaultScrollIntent = {
    x: {
        [Direction.Backward]: false,
        [Direction.Forward]: false
    },
    y: {
        [Direction.Backward]: false,
        [Direction.Forward]: false
    }
};
function useScrollIntent(_ref2) {
    let { delta, disabled } = _ref2;
    const previousDelta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrevious"])(delta);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLazyMemo"])({
        "useScrollIntent.useLazyMemo": (previousIntent)=>{
            if (disabled || !previousDelta || !previousIntent) {
                // Reset scroll intent tracking when auto-scrolling is disabled
                return defaultScrollIntent;
            }
            const direction = {
                x: Math.sign(delta.x - previousDelta.x),
                y: Math.sign(delta.y - previousDelta.y)
            }; // Keep track of the user intent to scroll in each direction for both axis
            return {
                x: {
                    [Direction.Backward]: previousIntent.x[Direction.Backward] || direction.x === -1,
                    [Direction.Forward]: previousIntent.x[Direction.Forward] || direction.x === 1
                },
                y: {
                    [Direction.Backward]: previousIntent.y[Direction.Backward] || direction.y === -1,
                    [Direction.Forward]: previousIntent.y[Direction.Forward] || direction.y === 1
                }
            };
        }
    }["useScrollIntent.useLazyMemo"], [
        disabled,
        delta,
        previousDelta
    ]);
}
function useCachedNode(draggableNodes, id) {
    const draggableNode = id != null ? draggableNodes.get(id) : undefined;
    const node = draggableNode ? draggableNode.node.current : null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLazyMemo"])({
        "useCachedNode.useLazyMemo": (cachedNode)=>{
            var _ref;
            if (id == null) {
                return null;
            } // In some cases, the draggable node can unmount while dragging
            // This is the case for virtualized lists. In those situations,
            // we fall back to the last known value for that node.
            return (_ref = node != null ? node : cachedNode) != null ? _ref : null;
        }
    }["useCachedNode.useLazyMemo"], [
        node,
        id
    ]);
}
function useCombineActivators(sensors, getSyntheticHandler) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCombineActivators.useMemo": ()=>sensors.reduce({
                "useCombineActivators.useMemo": (accumulator, sensor)=>{
                    const { sensor: Sensor } = sensor;
                    const sensorActivators = Sensor.activators.map({
                        "useCombineActivators.useMemo.sensorActivators": (activator)=>({
                                eventName: activator.eventName,
                                handler: getSyntheticHandler(activator.handler, sensor)
                            })
                    }["useCombineActivators.useMemo.sensorActivators"]);
                    return [
                        ...accumulator,
                        ...sensorActivators
                    ];
                }
            }["useCombineActivators.useMemo"], [])
    }["useCombineActivators.useMemo"], [
        sensors,
        getSyntheticHandler
    ]);
}
var MeasuringStrategy;
(function(MeasuringStrategy) {
    MeasuringStrategy[MeasuringStrategy["Always"] = 0] = "Always";
    MeasuringStrategy[MeasuringStrategy["BeforeDragging"] = 1] = "BeforeDragging";
    MeasuringStrategy[MeasuringStrategy["WhileDragging"] = 2] = "WhileDragging";
})(MeasuringStrategy || (MeasuringStrategy = {}));
var MeasuringFrequency;
(function(MeasuringFrequency) {
    MeasuringFrequency["Optimized"] = "optimized";
})(MeasuringFrequency || (MeasuringFrequency = {}));
const defaultValue = /*#__PURE__*/ new Map();
function useDroppableMeasuring(containers, _ref) {
    let { dragging, dependencies, config } = _ref;
    const [queue, setQueue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { frequency, measure, strategy } = config;
    const containersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(containers);
    const disabled = isDisabled();
    const disabledRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])(disabled);
    const measureDroppableContainers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDroppableMeasuring.useCallback[measureDroppableContainers]": function(ids) {
            if (ids === void 0) {
                ids = [];
            }
            if (disabledRef.current) {
                return;
            }
            setQueue({
                "useDroppableMeasuring.useCallback[measureDroppableContainers]": (value)=>{
                    if (value === null) {
                        return ids;
                    }
                    return value.concat(ids.filter({
                        "useDroppableMeasuring.useCallback[measureDroppableContainers]": (id)=>!value.includes(id)
                    }["useDroppableMeasuring.useCallback[measureDroppableContainers]"]));
                }
            }["useDroppableMeasuring.useCallback[measureDroppableContainers]"]);
        }
    }["useDroppableMeasuring.useCallback[measureDroppableContainers]"], [
        disabledRef
    ]);
    const timeoutId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const droppableRects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLazyMemo"])({
        "useDroppableMeasuring.useLazyMemo[droppableRects]": (previousValue)=>{
            if (disabled && !dragging) {
                return defaultValue;
            }
            if (!previousValue || previousValue === defaultValue || containersRef.current !== containers || queue != null) {
                const map = new Map();
                for (let container of containers){
                    if (!container) {
                        continue;
                    }
                    if (queue && queue.length > 0 && !queue.includes(container.id) && container.rect.current) {
                        // This container does not need to be re-measured
                        map.set(container.id, container.rect.current);
                        continue;
                    }
                    const node = container.node.current;
                    const rect = node ? new Rect(measure(node), node) : null;
                    container.rect.current = rect;
                    if (rect) {
                        map.set(container.id, rect);
                    }
                }
                return map;
            }
            return previousValue;
        }
    }["useDroppableMeasuring.useLazyMemo[droppableRects]"], [
        containers,
        queue,
        dragging,
        disabled,
        measure
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDroppableMeasuring.useEffect": ()=>{
            containersRef.current = containers;
        }
    }["useDroppableMeasuring.useEffect"], [
        containers
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDroppableMeasuring.useEffect": ()=>{
            if (disabled) {
                return;
            }
            measureDroppableContainers();
        }
    }["useDroppableMeasuring.useEffect"], [
        dragging,
        disabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDroppableMeasuring.useEffect": ()=>{
            if (queue && queue.length > 0) {
                setQueue(null);
            }
        }
    }["useDroppableMeasuring.useEffect"], [
        JSON.stringify(queue)
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDroppableMeasuring.useEffect": ()=>{
            if (disabled || typeof frequency !== 'number' || timeoutId.current !== null) {
                return;
            }
            timeoutId.current = setTimeout({
                "useDroppableMeasuring.useEffect": ()=>{
                    measureDroppableContainers();
                    timeoutId.current = null;
                }
            }["useDroppableMeasuring.useEffect"], frequency);
        }
    }["useDroppableMeasuring.useEffect"], [
        frequency,
        disabled,
        measureDroppableContainers,
        ...dependencies
    ]);
    return {
        droppableRects,
        measureDroppableContainers,
        measuringScheduled: queue != null
    };
    //TURBOPACK unreachable
    ;
    function isDisabled() {
        switch(strategy){
            case MeasuringStrategy.Always:
                return false;
            case MeasuringStrategy.BeforeDragging:
                return dragging;
            default:
                return !dragging;
        }
    }
}
function useInitialValue(value, computeFn) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLazyMemo"])({
        "useInitialValue.useLazyMemo": (previousValue)=>{
            if (!value) {
                return null;
            }
            if (previousValue) {
                return previousValue;
            }
            return typeof computeFn === 'function' ? computeFn(value) : value;
        }
    }["useInitialValue.useLazyMemo"], [
        computeFn,
        value
    ]);
}
function useInitialRect(node, measure) {
    return useInitialValue(node, measure);
}
/**
 * Returns a new MutationObserver instance.
 * If `MutationObserver` is undefined in the execution environment, returns `undefined`.
 */ function useMutationObserver(_ref) {
    let { callback, disabled } = _ref;
    const handleMutations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(callback);
    const mutationObserver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useMutationObserver.useMemo[mutationObserver]": ()=>{
            if (disabled || typeof window === 'undefined' || typeof window.MutationObserver === 'undefined') {
                return undefined;
            }
            const { MutationObserver } = window;
            return new MutationObserver(handleMutations);
        }
    }["useMutationObserver.useMemo[mutationObserver]"], [
        handleMutations,
        disabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMutationObserver.useEffect": ()=>{
            return ({
                "useMutationObserver.useEffect": ()=>mutationObserver == null ? void 0 : mutationObserver.disconnect()
            })["useMutationObserver.useEffect"];
        }
    }["useMutationObserver.useEffect"], [
        mutationObserver
    ]);
    return mutationObserver;
}
/**
 * Returns a new ResizeObserver instance bound to the `onResize` callback.
 * If `ResizeObserver` is undefined in the execution environment, returns `undefined`.
 */ function useResizeObserver(_ref) {
    let { callback, disabled } = _ref;
    const handleResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(callback);
    const resizeObserver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useResizeObserver.useMemo[resizeObserver]": ()=>{
            if (disabled || typeof window === 'undefined' || typeof window.ResizeObserver === 'undefined') {
                return undefined;
            }
            const { ResizeObserver } = window;
            return new ResizeObserver(handleResize);
        }
    }["useResizeObserver.useMemo[resizeObserver]"], [
        disabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useResizeObserver.useEffect": ()=>{
            return ({
                "useResizeObserver.useEffect": ()=>resizeObserver == null ? void 0 : resizeObserver.disconnect()
            })["useResizeObserver.useEffect"];
        }
    }["useResizeObserver.useEffect"], [
        resizeObserver
    ]);
    return resizeObserver;
}
function defaultMeasure(element) {
    return new Rect(getClientRect(element), element);
}
function useRect(element, measure, fallbackRect) {
    if (measure === void 0) {
        measure = defaultMeasure;
    }
    const [rect, setRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    function measureRect() {
        setRect((currentRect)=>{
            if (!element) {
                return null;
            }
            if (element.isConnected === false) {
                var _ref;
                // Fall back to last rect we measured if the element is
                // no longer connected to the DOM.
                return (_ref = currentRect != null ? currentRect : fallbackRect) != null ? _ref : null;
            }
            const newRect = measure(element);
            if (JSON.stringify(currentRect) === JSON.stringify(newRect)) {
                return currentRect;
            }
            return newRect;
        });
    }
    const mutationObserver = useMutationObserver({
        callback (records) {
            if (!element) {
                return;
            }
            for (const record of records){
                const { type, target } = record;
                if (type === 'childList' && target instanceof HTMLElement && target.contains(element)) {
                    measureRect();
                    break;
                }
            }
        }
    });
    const resizeObserver = useResizeObserver({
        callback: measureRect
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useRect.useIsomorphicLayoutEffect": ()=>{
            measureRect();
            if (element) {
                resizeObserver == null ? void 0 : resizeObserver.observe(element);
                mutationObserver == null ? void 0 : mutationObserver.observe(document.body, {
                    childList: true,
                    subtree: true
                });
            } else {
                resizeObserver == null ? void 0 : resizeObserver.disconnect();
                mutationObserver == null ? void 0 : mutationObserver.disconnect();
            }
        }
    }["useRect.useIsomorphicLayoutEffect"], [
        element
    ]);
    return rect;
}
function useRectDelta(rect) {
    const initialRect = useInitialValue(rect);
    return getRectDelta(rect, initialRect);
}
const defaultValue$1 = [];
function useScrollableAncestors(node) {
    const previousNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(node);
    const ancestors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLazyMemo"])({
        "useScrollableAncestors.useLazyMemo[ancestors]": (previousValue)=>{
            if (!node) {
                return defaultValue$1;
            }
            if (previousValue && previousValue !== defaultValue$1 && node && previousNode.current && node.parentNode === previousNode.current.parentNode) {
                return previousValue;
            }
            return getScrollableAncestors(node);
        }
    }["useScrollableAncestors.useLazyMemo[ancestors]"], [
        node
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollableAncestors.useEffect": ()=>{
            previousNode.current = node;
        }
    }["useScrollableAncestors.useEffect"], [
        node
    ]);
    return ancestors;
}
function useScrollOffsets(elements) {
    const [scrollCoordinates, setScrollCoordinates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const prevElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(elements); // To-do: Throttle the handleScroll callback
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScrollOffsets.useCallback[handleScroll]": (event)=>{
            const scrollingElement = getScrollableElement(event.target);
            if (!scrollingElement) {
                return;
            }
            setScrollCoordinates({
                "useScrollOffsets.useCallback[handleScroll]": (scrollCoordinates)=>{
                    if (!scrollCoordinates) {
                        return null;
                    }
                    scrollCoordinates.set(scrollingElement, getScrollCoordinates(scrollingElement));
                    return new Map(scrollCoordinates);
                }
            }["useScrollOffsets.useCallback[handleScroll]"]);
        }
    }["useScrollOffsets.useCallback[handleScroll]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollOffsets.useEffect": ()=>{
            const previousElements = prevElements.current;
            if (elements !== previousElements) {
                cleanup(previousElements);
                const entries = elements.map({
                    "useScrollOffsets.useEffect.entries": (element)=>{
                        const scrollableElement = getScrollableElement(element);
                        if (scrollableElement) {
                            scrollableElement.addEventListener('scroll', handleScroll, {
                                passive: true
                            });
                            return [
                                scrollableElement,
                                getScrollCoordinates(scrollableElement)
                            ];
                        }
                        return null;
                    }
                }["useScrollOffsets.useEffect.entries"]).filter({
                    "useScrollOffsets.useEffect.entries": (entry)=>entry != null
                }["useScrollOffsets.useEffect.entries"]);
                setScrollCoordinates(entries.length ? new Map(entries) : null);
                prevElements.current = elements;
            }
            return ({
                "useScrollOffsets.useEffect": ()=>{
                    cleanup(elements);
                    cleanup(previousElements);
                }
            })["useScrollOffsets.useEffect"];
            //TURBOPACK unreachable
            ;
            function cleanup(elements) {
                elements.forEach({
                    "useScrollOffsets.useEffect.cleanup": (element)=>{
                        const scrollableElement = getScrollableElement(element);
                        scrollableElement == null ? void 0 : scrollableElement.removeEventListener('scroll', handleScroll);
                    }
                }["useScrollOffsets.useEffect.cleanup"]);
            }
        }
    }["useScrollOffsets.useEffect"], [
        handleScroll,
        elements
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useScrollOffsets.useMemo": ()=>{
            if (elements.length) {
                return scrollCoordinates ? Array.from(scrollCoordinates.values()).reduce({
                    "useScrollOffsets.useMemo": (acc, coordinates)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"])(acc, coordinates)
                }["useScrollOffsets.useMemo"], defaultCoordinates) : getScrollOffsets(elements);
            }
            return defaultCoordinates;
        }
    }["useScrollOffsets.useMemo"], [
        elements,
        scrollCoordinates
    ]);
}
function useScrollOffsetsDelta(scrollOffsets, dependencies) {
    if (dependencies === void 0) {
        dependencies = [];
    }
    const initialScrollOffsets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollOffsetsDelta.useEffect": ()=>{
            initialScrollOffsets.current = null;
        }
    }["useScrollOffsetsDelta.useEffect"], dependencies);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollOffsetsDelta.useEffect": ()=>{
            const hasScrollOffsets = scrollOffsets !== defaultCoordinates;
            if (hasScrollOffsets && !initialScrollOffsets.current) {
                initialScrollOffsets.current = scrollOffsets;
            }
            if (!hasScrollOffsets && initialScrollOffsets.current) {
                initialScrollOffsets.current = null;
            }
        }
    }["useScrollOffsetsDelta.useEffect"], [
        scrollOffsets
    ]);
    return initialScrollOffsets.current ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subtract"])(scrollOffsets, initialScrollOffsets.current) : defaultCoordinates;
}
function useSensorSetup(sensors) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSensorSetup.useEffect": ()=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseDOM"]) {
                return;
            }
            const teardownFns = sensors.map({
                "useSensorSetup.useEffect.teardownFns": (_ref)=>{
                    let { sensor } = _ref;
                    return sensor.setup == null ? void 0 : sensor.setup();
                }
            }["useSensorSetup.useEffect.teardownFns"]);
            return ({
                "useSensorSetup.useEffect": ()=>{
                    for (const teardown of teardownFns){
                        teardown == null ? void 0 : teardown();
                    }
                }
            })["useSensorSetup.useEffect"];
        }
    }["useSensorSetup.useEffect"], // eslint-disable-next-line react-hooks/exhaustive-deps
    sensors.map({
        "useSensorSetup.useEffect": (_ref2)=>{
            let { sensor } = _ref2;
            return sensor;
        }
    }["useSensorSetup.useEffect"]));
}
function useSyntheticListeners(listeners, id) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSyntheticListeners.useMemo": ()=>{
            return listeners.reduce({
                "useSyntheticListeners.useMemo": (acc, _ref)=>{
                    let { eventName, handler } = _ref;
                    acc[eventName] = ({
                        "useSyntheticListeners.useMemo": (event)=>{
                            handler(event, id);
                        }
                    })["useSyntheticListeners.useMemo"];
                    return acc;
                }
            }["useSyntheticListeners.useMemo"], {});
        }
    }["useSyntheticListeners.useMemo"], [
        listeners,
        id
    ]);
}
function useWindowRect(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useWindowRect.useMemo": ()=>element ? getWindowClientRect(element) : null
    }["useWindowRect.useMemo"], [
        element
    ]);
}
const defaultValue$2 = [];
function useRects(elements, measure) {
    if (measure === void 0) {
        measure = getClientRect;
    }
    const [firstElement] = elements;
    const windowRect = useWindowRect(firstElement ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(firstElement) : null);
    const [rects, setRects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultValue$2);
    function measureRects() {
        setRects(()=>{
            if (!elements.length) {
                return defaultValue$2;
            }
            return elements.map((element)=>isDocumentScrollingElement(element) ? windowRect : new Rect(measure(element), element));
        });
    }
    const resizeObserver = useResizeObserver({
        callback: measureRects
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useRects.useIsomorphicLayoutEffect": ()=>{
            resizeObserver == null ? void 0 : resizeObserver.disconnect();
            measureRects();
            elements.forEach({
                "useRects.useIsomorphicLayoutEffect": (element)=>resizeObserver == null ? void 0 : resizeObserver.observe(element)
            }["useRects.useIsomorphicLayoutEffect"]);
        }
    }["useRects.useIsomorphicLayoutEffect"], [
        elements
    ]);
    return rects;
}
function getMeasurableNode(node) {
    if (!node) {
        return null;
    }
    if (node.children.length > 1) {
        return node;
    }
    const firstChild = node.children[0];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(firstChild) ? firstChild : node;
}
function useDragOverlayMeasuring(_ref) {
    let { measure } = _ref;
    const [rect, setRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDragOverlayMeasuring.useCallback[handleResize]": (entries)=>{
            for (const { target } of entries){
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(target)) {
                    setRect({
                        "useDragOverlayMeasuring.useCallback[handleResize]": (rect)=>{
                            const newRect = measure(target);
                            return rect ? {
                                ...rect,
                                width: newRect.width,
                                height: newRect.height
                            } : newRect;
                        }
                    }["useDragOverlayMeasuring.useCallback[handleResize]"]);
                    break;
                }
            }
        }
    }["useDragOverlayMeasuring.useCallback[handleResize]"], [
        measure
    ]);
    const resizeObserver = useResizeObserver({
        callback: handleResize
    });
    const handleNodeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDragOverlayMeasuring.useCallback[handleNodeChange]": (element)=>{
            const node = getMeasurableNode(element);
            resizeObserver == null ? void 0 : resizeObserver.disconnect();
            if (node) {
                resizeObserver == null ? void 0 : resizeObserver.observe(node);
            }
            setRect(node ? measure(node) : null);
        }
    }["useDragOverlayMeasuring.useCallback[handleNodeChange]"], [
        measure,
        resizeObserver
    ]);
    const [nodeRef, setRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNodeRef"])(handleNodeChange);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDragOverlayMeasuring.useMemo": ()=>({
                nodeRef,
                rect,
                setRef
            })
    }["useDragOverlayMeasuring.useMemo"], [
        rect,
        nodeRef,
        setRef
    ]);
}
const defaultSensors = [
    {
        sensor: PointerSensor,
        options: {}
    },
    {
        sensor: KeyboardSensor,
        options: {}
    }
];
const defaultData = {
    current: {}
};
const defaultMeasuringConfiguration = {
    draggable: {
        measure: getTransformAgnosticClientRect
    },
    droppable: {
        measure: getTransformAgnosticClientRect,
        strategy: MeasuringStrategy.WhileDragging,
        frequency: MeasuringFrequency.Optimized
    },
    dragOverlay: {
        measure: getClientRect
    }
};
class DroppableContainersMap extends Map {
    get(id) {
        var _super$get;
        return id != null ? (_super$get = super.get(id)) != null ? _super$get : undefined : undefined;
    }
    toArray() {
        return Array.from(this.values());
    }
    getEnabled() {
        return this.toArray().filter((_ref)=>{
            let { disabled } = _ref;
            return !disabled;
        });
    }
    getNodeFor(id) {
        var _this$get$node$curren, _this$get;
        return (_this$get$node$curren = (_this$get = this.get(id)) == null ? void 0 : _this$get.node.current) != null ? _this$get$node$curren : undefined;
    }
}
const defaultPublicContext = {
    activatorEvent: null,
    active: null,
    activeNode: null,
    activeNodeRect: null,
    collisions: null,
    containerNodeRect: null,
    draggableNodes: /*#__PURE__*/ new Map(),
    droppableRects: /*#__PURE__*/ new Map(),
    droppableContainers: /*#__PURE__*/ new DroppableContainersMap(),
    over: null,
    dragOverlay: {
        nodeRef: {
            current: null
        },
        rect: null,
        setRef: noop
    },
    scrollableAncestors: [],
    scrollableAncestorRects: [],
    measuringConfiguration: defaultMeasuringConfiguration,
    measureDroppableContainers: noop,
    windowRect: null,
    measuringScheduled: false
};
const defaultInternalContext = {
    activatorEvent: null,
    activators: [],
    active: null,
    activeNodeRect: null,
    ariaDescribedById: {
        draggable: ''
    },
    dispatch: noop,
    draggableNodes: /*#__PURE__*/ new Map(),
    over: null,
    measureDroppableContainers: noop
};
const InternalContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(defaultInternalContext);
const PublicContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(defaultPublicContext);
function getInitialState() {
    return {
        draggable: {
            active: null,
            initialCoordinates: {
                x: 0,
                y: 0
            },
            nodes: new Map(),
            translate: {
                x: 0,
                y: 0
            }
        },
        droppable: {
            containers: new DroppableContainersMap()
        }
    };
}
function reducer(state, action) {
    switch(action.type){
        case Action.DragStart:
            return {
                ...state,
                draggable: {
                    ...state.draggable,
                    initialCoordinates: action.initialCoordinates,
                    active: action.active
                }
            };
        case Action.DragMove:
            if (state.draggable.active == null) {
                return state;
            }
            return {
                ...state,
                draggable: {
                    ...state.draggable,
                    translate: {
                        x: action.coordinates.x - state.draggable.initialCoordinates.x,
                        y: action.coordinates.y - state.draggable.initialCoordinates.y
                    }
                }
            };
        case Action.DragEnd:
        case Action.DragCancel:
            return {
                ...state,
                draggable: {
                    ...state.draggable,
                    active: null,
                    initialCoordinates: {
                        x: 0,
                        y: 0
                    },
                    translate: {
                        x: 0,
                        y: 0
                    }
                }
            };
        case Action.RegisterDroppable:
            {
                const { element } = action;
                const { id } = element;
                const containers = new DroppableContainersMap(state.droppable.containers);
                containers.set(id, element);
                return {
                    ...state,
                    droppable: {
                        ...state.droppable,
                        containers
                    }
                };
            }
        case Action.SetDroppableDisabled:
            {
                const { id, key, disabled } = action;
                const element = state.droppable.containers.get(id);
                if (!element || key !== element.key) {
                    return state;
                }
                const containers = new DroppableContainersMap(state.droppable.containers);
                containers.set(id, {
                    ...element,
                    disabled
                });
                return {
                    ...state,
                    droppable: {
                        ...state.droppable,
                        containers
                    }
                };
            }
        case Action.UnregisterDroppable:
            {
                const { id, key } = action;
                const element = state.droppable.containers.get(id);
                if (!element || key !== element.key) {
                    return state;
                }
                const containers = new DroppableContainersMap(state.droppable.containers);
                containers.delete(id);
                return {
                    ...state,
                    droppable: {
                        ...state.droppable,
                        containers
                    }
                };
            }
        default:
            {
                return state;
            }
    }
}
function RestoreFocus(_ref) {
    let { disabled } = _ref;
    const { active, activatorEvent, draggableNodes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(InternalContext);
    const previousActivatorEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrevious"])(activatorEvent);
    const previousActiveId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrevious"])(active == null ? void 0 : active.id); // Restore keyboard focus on the activator node
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RestoreFocus.useEffect": ()=>{
            if (disabled) {
                return;
            }
            if (!activatorEvent && previousActivatorEvent && previousActiveId != null) {
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeyboardEvent"])(previousActivatorEvent)) {
                    return;
                }
                if (document.activeElement === previousActivatorEvent.target) {
                    // No need to restore focus
                    return;
                }
                const draggableNode = draggableNodes.get(previousActiveId);
                if (!draggableNode) {
                    return;
                }
                const { activatorNode, node } = draggableNode;
                if (!activatorNode.current && !node.current) {
                    return;
                }
                requestAnimationFrame({
                    "RestoreFocus.useEffect": ()=>{
                        for (const element of [
                            activatorNode.current,
                            node.current
                        ]){
                            if (!element) {
                                continue;
                            }
                            const focusableNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findFirstFocusableNode"])(element);
                            if (focusableNode) {
                                focusableNode.focus();
                                break;
                            }
                        }
                    }
                }["RestoreFocus.useEffect"]);
            }
        }
    }["RestoreFocus.useEffect"], [
        activatorEvent,
        disabled,
        draggableNodes,
        previousActiveId,
        previousActivatorEvent
    ]);
    return null;
}
function applyModifiers(modifiers, _ref) {
    let { transform, ...args } = _ref;
    return modifiers != null && modifiers.length ? modifiers.reduce((accumulator, modifier)=>{
        return modifier({
            transform: accumulator,
            ...args
        });
    }, transform) : transform;
}
function useMeasuringConfiguration(config) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useMeasuringConfiguration.useMemo": ()=>({
                draggable: {
                    ...defaultMeasuringConfiguration.draggable,
                    ...config == null ? void 0 : config.draggable
                },
                droppable: {
                    ...defaultMeasuringConfiguration.droppable,
                    ...config == null ? void 0 : config.droppable
                },
                dragOverlay: {
                    ...defaultMeasuringConfiguration.dragOverlay,
                    ...config == null ? void 0 : config.dragOverlay
                }
            })
    }["useMeasuringConfiguration.useMemo"], [
        config == null ? void 0 : config.draggable,
        config == null ? void 0 : config.droppable,
        config == null ? void 0 : config.dragOverlay
    ]);
}
function useLayoutShiftScrollCompensation(_ref) {
    let { activeNode, measure, initialRect, config = true } = _ref;
    const initialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const { x, y } = typeof config === 'boolean' ? {
        x: config,
        y: config
    } : config;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useLayoutShiftScrollCompensation.useIsomorphicLayoutEffect": ()=>{
            const disabled = !x && !y;
            if (disabled || !activeNode) {
                initialized.current = false;
                return;
            }
            if (initialized.current || !initialRect) {
                // Return early if layout shift scroll compensation was already attempted
                // or if there is no initialRect to compare to.
                return;
            } // Get the most up to date node ref for the active draggable
            const node = activeNode == null ? void 0 : activeNode.node.current;
            if (!node || node.isConnected === false) {
                // Return early if there is no attached node ref or if the node is
                // disconnected from the document.
                return;
            }
            const rect = measure(node);
            const rectDelta = getRectDelta(rect, initialRect);
            if (!x) {
                rectDelta.x = 0;
            }
            if (!y) {
                rectDelta.y = 0;
            } // Only perform layout shift scroll compensation once
            initialized.current = true;
            if (Math.abs(rectDelta.x) > 0 || Math.abs(rectDelta.y) > 0) {
                const firstScrollableAncestor = getFirstScrollableAncestor(node);
                if (firstScrollableAncestor) {
                    firstScrollableAncestor.scrollBy({
                        top: rectDelta.y,
                        left: rectDelta.x
                    });
                }
            }
        }
    }["useLayoutShiftScrollCompensation.useIsomorphicLayoutEffect"], [
        activeNode,
        x,
        y,
        initialRect,
        measure
    ]);
}
const ActiveDraggableContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    ...defaultCoordinates,
    scaleX: 1,
    scaleY: 1
});
var Status;
(function(Status) {
    Status[Status["Uninitialized"] = 0] = "Uninitialized";
    Status[Status["Initializing"] = 1] = "Initializing";
    Status[Status["Initialized"] = 2] = "Initialized";
})(Status || (Status = {}));
const DndContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(function DndContext(_ref) {
    var _sensorContext$curren, _dragOverlay$nodeRef$, _dragOverlay$rect, _over$rect;
    let { id, accessibility, autoScroll = true, children, sensors = defaultSensors, collisionDetection = rectIntersection, measuring, modifiers, ...props } = _ref;
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(reducer, undefined, getInitialState);
    const [state, dispatch] = store;
    const [dispatchMonitorEvent, registerMonitorListener] = useDndMonitorProvider();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Status.Uninitialized);
    const isInitialized = status === Status.Initialized;
    const { draggable: { active: activeId, nodes: draggableNodes, translate }, droppable: { containers: droppableContainers } } = state;
    const node = activeId != null ? draggableNodes.get(activeId) : null;
    const activeRects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        initial: null,
        translated: null
    });
    const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DndContext.DndContext.useMemo[active]": ()=>{
            var _node$data;
            return activeId != null ? {
                id: activeId,
                // It's possible for the active node to unmount while dragging
                data: (_node$data = node == null ? void 0 : node.data) != null ? _node$data : defaultData,
                rect: activeRects
            } : null;
        }
    }["DndContext.DndContext.useMemo[active]"], [
        activeId,
        node
    ]);
    const activeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeSensor, setActiveSensor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activatorEvent, setActivatorEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const latestProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])(props, Object.values(props));
    const draggableDescribedById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUniqueId"])("DndDescribedBy", id);
    const enabledDroppableContainers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DndContext.DndContext.useMemo[enabledDroppableContainers]": ()=>droppableContainers.getEnabled()
    }["DndContext.DndContext.useMemo[enabledDroppableContainers]"], [
        droppableContainers
    ]);
    const measuringConfiguration = useMeasuringConfiguration(measuring);
    const { droppableRects, measureDroppableContainers, measuringScheduled } = useDroppableMeasuring(enabledDroppableContainers, {
        dragging: isInitialized,
        dependencies: [
            translate.x,
            translate.y
        ],
        config: measuringConfiguration.droppable
    });
    const activeNode = useCachedNode(draggableNodes, activeId);
    const activationCoordinates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DndContext.DndContext.useMemo[activationCoordinates]": ()=>activatorEvent ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventCoordinates"])(activatorEvent) : null
    }["DndContext.DndContext.useMemo[activationCoordinates]"], [
        activatorEvent
    ]);
    const autoScrollOptions = getAutoScrollerOptions();
    const initialActiveNodeRect = useInitialRect(activeNode, measuringConfiguration.draggable.measure);
    useLayoutShiftScrollCompensation({
        activeNode: activeId != null ? draggableNodes.get(activeId) : null,
        config: autoScrollOptions.layoutShiftCompensation,
        initialRect: initialActiveNodeRect,
        measure: measuringConfiguration.draggable.measure
    });
    const activeNodeRect = useRect(activeNode, measuringConfiguration.draggable.measure, initialActiveNodeRect);
    const containerNodeRect = useRect(activeNode ? activeNode.parentElement : null);
    const sensorContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        activatorEvent: null,
        active: null,
        activeNode,
        collisionRect: null,
        collisions: null,
        droppableRects,
        draggableNodes,
        draggingNode: null,
        draggingNodeRect: null,
        droppableContainers,
        over: null,
        scrollableAncestors: [],
        scrollAdjustedTranslate: null
    });
    const overNode = droppableContainers.getNodeFor((_sensorContext$curren = sensorContext.current.over) == null ? void 0 : _sensorContext$curren.id);
    const dragOverlay = useDragOverlayMeasuring({
        measure: measuringConfiguration.dragOverlay.measure
    }); // Use the rect of the drag overlay if it is mounted
    const draggingNode = (_dragOverlay$nodeRef$ = dragOverlay.nodeRef.current) != null ? _dragOverlay$nodeRef$ : activeNode;
    const draggingNodeRect = isInitialized ? (_dragOverlay$rect = dragOverlay.rect) != null ? _dragOverlay$rect : activeNodeRect : null;
    const usesDragOverlay = Boolean(dragOverlay.nodeRef.current && dragOverlay.rect); // The delta between the previous and new position of the draggable node
    // is only relevant when there is no drag overlay
    const nodeRectDelta = useRectDelta(usesDragOverlay ? null : activeNodeRect); // Get the window rect of the dragging node
    const windowRect = useWindowRect(draggingNode ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(draggingNode) : null); // Get scrollable ancestors of the dragging node
    const scrollableAncestors = useScrollableAncestors(isInitialized ? overNode != null ? overNode : activeNode : null);
    const scrollableAncestorRects = useRects(scrollableAncestors); // Apply modifiers
    const modifiedTranslate = applyModifiers(modifiers, {
        transform: {
            x: translate.x - nodeRectDelta.x,
            y: translate.y - nodeRectDelta.y,
            scaleX: 1,
            scaleY: 1
        },
        activatorEvent,
        active,
        activeNodeRect,
        containerNodeRect,
        draggingNodeRect,
        over: sensorContext.current.over,
        overlayNodeRect: dragOverlay.rect,
        scrollableAncestors,
        scrollableAncestorRects,
        windowRect
    });
    const pointerCoordinates = activationCoordinates ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"])(activationCoordinates, translate) : null;
    const scrollOffsets = useScrollOffsets(scrollableAncestors); // Represents the scroll delta since dragging was initiated
    const scrollAdjustment = useScrollOffsetsDelta(scrollOffsets); // Represents the scroll delta since the last time the active node rect was measured
    const activeNodeScrollDelta = useScrollOffsetsDelta(scrollOffsets, [
        activeNodeRect
    ]);
    const scrollAdjustedTranslate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"])(modifiedTranslate, scrollAdjustment);
    const collisionRect = draggingNodeRect ? getAdjustedRect(draggingNodeRect, modifiedTranslate) : null;
    const collisions = active && collisionRect ? collisionDetection({
        active,
        collisionRect,
        droppableRects,
        droppableContainers: enabledDroppableContainers,
        pointerCoordinates
    }) : null;
    const overId = getFirstCollision(collisions, 'id');
    const [over, setOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // When there is no drag overlay used, we need to account for the
    // window scroll delta
    const appliedTranslate = usesDragOverlay ? modifiedTranslate : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"])(modifiedTranslate, activeNodeScrollDelta);
    const transform = adjustScale(appliedTranslate, (_over$rect = over == null ? void 0 : over.rect) != null ? _over$rect : null, activeNodeRect);
    const activeSensorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const instantiateSensor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DndContext.DndContext.useCallback[instantiateSensor]": (event, _ref2)=>{
            let { sensor: Sensor, options } = _ref2;
            if (activeRef.current == null) {
                return;
            }
            const activeNode = draggableNodes.get(activeRef.current);
            if (!activeNode) {
                return;
            }
            const activatorEvent = event.nativeEvent;
            const sensorInstance = new Sensor({
                active: activeRef.current,
                activeNode,
                event: activatorEvent,
                options,
                // Sensors need to be instantiated with refs for arguments that change over time
                // otherwise they are frozen in time with the stale arguments
                context: sensorContext,
                onAbort (id) {
                    const draggableNode = draggableNodes.get(id);
                    if (!draggableNode) {
                        return;
                    }
                    const { onDragAbort } = latestProps.current;
                    const event = {
                        id
                    };
                    onDragAbort == null ? void 0 : onDragAbort(event);
                    dispatchMonitorEvent({
                        type: 'onDragAbort',
                        event
                    });
                },
                onPending (id, constraint, initialCoordinates, offset) {
                    const draggableNode = draggableNodes.get(id);
                    if (!draggableNode) {
                        return;
                    }
                    const { onDragPending } = latestProps.current;
                    const event = {
                        id,
                        constraint,
                        initialCoordinates,
                        offset
                    };
                    onDragPending == null ? void 0 : onDragPending(event);
                    dispatchMonitorEvent({
                        type: 'onDragPending',
                        event
                    });
                },
                onStart (initialCoordinates) {
                    const id = activeRef.current;
                    if (id == null) {
                        return;
                    }
                    const draggableNode = draggableNodes.get(id);
                    if (!draggableNode) {
                        return;
                    }
                    const { onDragStart } = latestProps.current;
                    const event = {
                        activatorEvent,
                        active: {
                            id,
                            data: draggableNode.data,
                            rect: activeRects
                        }
                    };
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstable_batchedUpdates"])({
                        "DndContext.DndContext.useCallback[instantiateSensor]": ()=>{
                            onDragStart == null ? void 0 : onDragStart(event);
                            setStatus(Status.Initializing);
                            dispatch({
                                type: Action.DragStart,
                                initialCoordinates,
                                active: id
                            });
                            dispatchMonitorEvent({
                                type: 'onDragStart',
                                event
                            });
                            setActiveSensor(activeSensorRef.current);
                            setActivatorEvent(activatorEvent);
                        }
                    }["DndContext.DndContext.useCallback[instantiateSensor]"]);
                },
                onMove (coordinates) {
                    dispatch({
                        type: Action.DragMove,
                        coordinates
                    });
                },
                onEnd: createHandler(Action.DragEnd),
                onCancel: createHandler(Action.DragCancel)
            });
            activeSensorRef.current = sensorInstance;
            function createHandler(type) {
                return async function handler() {
                    const { active, collisions, over, scrollAdjustedTranslate } = sensorContext.current;
                    let event = null;
                    if (active && scrollAdjustedTranslate) {
                        const { cancelDrop } = latestProps.current;
                        event = {
                            activatorEvent,
                            active: active,
                            collisions,
                            delta: scrollAdjustedTranslate,
                            over
                        };
                        if (type === Action.DragEnd && typeof cancelDrop === 'function') {
                            const shouldCancel = await Promise.resolve(cancelDrop(event));
                            if (shouldCancel) {
                                type = Action.DragCancel;
                            }
                        }
                    }
                    activeRef.current = null;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstable_batchedUpdates"])({
                        "DndContext.DndContext.useCallback[instantiateSensor].createHandler.handler": ()=>{
                            dispatch({
                                type
                            });
                            setStatus(Status.Uninitialized);
                            setOver(null);
                            setActiveSensor(null);
                            setActivatorEvent(null);
                            activeSensorRef.current = null;
                            const eventName = type === Action.DragEnd ? 'onDragEnd' : 'onDragCancel';
                            if (event) {
                                const handler = latestProps.current[eventName];
                                handler == null ? void 0 : handler(event);
                                dispatchMonitorEvent({
                                    type: eventName,
                                    event
                                });
                            }
                        }
                    }["DndContext.DndContext.useCallback[instantiateSensor].createHandler.handler"]);
                };
            }
        }
    }["DndContext.DndContext.useCallback[instantiateSensor]"], [
        draggableNodes
    ]);
    const bindActivatorToSensorInstantiator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DndContext.DndContext.useCallback[bindActivatorToSensorInstantiator]": (handler, sensor)=>{
            return ({
                "DndContext.DndContext.useCallback[bindActivatorToSensorInstantiator]": (event, active)=>{
                    const nativeEvent = event.nativeEvent;
                    const activeDraggableNode = draggableNodes.get(active);
                    if (activeRef.current !== null || // No active draggable
                    !activeDraggableNode || // Event has already been captured
                    nativeEvent.dndKit || nativeEvent.defaultPrevented) {
                        return;
                    }
                    const activationContext = {
                        active: activeDraggableNode
                    };
                    const shouldActivate = handler(event, sensor.options, activationContext);
                    if (shouldActivate === true) {
                        nativeEvent.dndKit = {
                            capturedBy: sensor.sensor
                        };
                        activeRef.current = active;
                        instantiateSensor(event, sensor);
                    }
                }
            })["DndContext.DndContext.useCallback[bindActivatorToSensorInstantiator]"];
        }
    }["DndContext.DndContext.useCallback[bindActivatorToSensorInstantiator]"], [
        draggableNodes,
        instantiateSensor
    ]);
    const activators = useCombineActivators(sensors, bindActivatorToSensorInstantiator);
    useSensorSetup(sensors);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "DndContext.DndContext.useIsomorphicLayoutEffect": ()=>{
            if (activeNodeRect && status === Status.Initializing) {
                setStatus(Status.Initialized);
            }
        }
    }["DndContext.DndContext.useIsomorphicLayoutEffect"], [
        activeNodeRect,
        status
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DndContext.DndContext.useEffect": ()=>{
            const { onDragMove } = latestProps.current;
            const { active, activatorEvent, collisions, over } = sensorContext.current;
            if (!active || !activatorEvent) {
                return;
            }
            const event = {
                active,
                activatorEvent,
                collisions,
                delta: {
                    x: scrollAdjustedTranslate.x,
                    y: scrollAdjustedTranslate.y
                },
                over
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstable_batchedUpdates"])({
                "DndContext.DndContext.useEffect": ()=>{
                    onDragMove == null ? void 0 : onDragMove(event);
                    dispatchMonitorEvent({
                        type: 'onDragMove',
                        event
                    });
                }
            }["DndContext.DndContext.useEffect"]);
        }
    }["DndContext.DndContext.useEffect"], [
        scrollAdjustedTranslate.x,
        scrollAdjustedTranslate.y
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DndContext.DndContext.useEffect": ()=>{
            const { active, activatorEvent, collisions, droppableContainers, scrollAdjustedTranslate } = sensorContext.current;
            if (!active || activeRef.current == null || !activatorEvent || !scrollAdjustedTranslate) {
                return;
            }
            const { onDragOver } = latestProps.current;
            const overContainer = droppableContainers.get(overId);
            const over = overContainer && overContainer.rect.current ? {
                id: overContainer.id,
                rect: overContainer.rect.current,
                data: overContainer.data,
                disabled: overContainer.disabled
            } : null;
            const event = {
                active,
                activatorEvent,
                collisions,
                delta: {
                    x: scrollAdjustedTranslate.x,
                    y: scrollAdjustedTranslate.y
                },
                over
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstable_batchedUpdates"])({
                "DndContext.DndContext.useEffect": ()=>{
                    setOver(over);
                    onDragOver == null ? void 0 : onDragOver(event);
                    dispatchMonitorEvent({
                        type: 'onDragOver',
                        event
                    });
                }
            }["DndContext.DndContext.useEffect"]);
        }
    }["DndContext.DndContext.useEffect"], [
        overId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "DndContext.DndContext.useIsomorphicLayoutEffect": ()=>{
            sensorContext.current = {
                activatorEvent,
                active,
                activeNode,
                collisionRect,
                collisions,
                droppableRects,
                draggableNodes,
                draggingNode,
                draggingNodeRect,
                droppableContainers,
                over,
                scrollableAncestors,
                scrollAdjustedTranslate
            };
            activeRects.current = {
                initial: draggingNodeRect,
                translated: collisionRect
            };
        }
    }["DndContext.DndContext.useIsomorphicLayoutEffect"], [
        active,
        activeNode,
        collisions,
        collisionRect,
        draggableNodes,
        draggingNode,
        draggingNodeRect,
        droppableRects,
        droppableContainers,
        over,
        scrollableAncestors,
        scrollAdjustedTranslate
    ]);
    useAutoScroller({
        ...autoScrollOptions,
        delta: translate,
        draggingRect: collisionRect,
        pointerCoordinates,
        scrollableAncestors,
        scrollableAncestorRects
    });
    const publicContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DndContext.DndContext.useMemo[publicContext]": ()=>{
            const context = {
                active,
                activeNode,
                activeNodeRect,
                activatorEvent,
                collisions,
                containerNodeRect,
                dragOverlay,
                draggableNodes,
                droppableContainers,
                droppableRects,
                over,
                measureDroppableContainers,
                scrollableAncestors,
                scrollableAncestorRects,
                measuringConfiguration,
                measuringScheduled,
                windowRect
            };
            return context;
        }
    }["DndContext.DndContext.useMemo[publicContext]"], [
        active,
        activeNode,
        activeNodeRect,
        activatorEvent,
        collisions,
        containerNodeRect,
        dragOverlay,
        draggableNodes,
        droppableContainers,
        droppableRects,
        over,
        measureDroppableContainers,
        scrollableAncestors,
        scrollableAncestorRects,
        measuringConfiguration,
        measuringScheduled,
        windowRect
    ]);
    const internalContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DndContext.DndContext.useMemo[internalContext]": ()=>{
            const context = {
                activatorEvent,
                activators,
                active,
                activeNodeRect,
                ariaDescribedById: {
                    draggable: draggableDescribedById
                },
                dispatch,
                draggableNodes,
                over,
                measureDroppableContainers
            };
            return context;
        }
    }["DndContext.DndContext.useMemo[internalContext]"], [
        activatorEvent,
        activators,
        active,
        activeNodeRect,
        dispatch,
        draggableDescribedById,
        draggableNodes,
        over,
        measureDroppableContainers
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(DndMonitorContext.Provider, {
        value: registerMonitorListener
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(InternalContext.Provider, {
        value: internalContext
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(PublicContext.Provider, {
        value: publicContext
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ActiveDraggableContext.Provider, {
        value: transform
    }, children)), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(RestoreFocus, {
        disabled: (accessibility == null ? void 0 : accessibility.restoreFocus) === false
    })), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Accessibility, {
        ...accessibility,
        hiddenTextDescribedById: draggableDescribedById
    }));
    //TURBOPACK unreachable
    ;
    function getAutoScrollerOptions() {
        const activeSensorDisablesAutoscroll = (activeSensor == null ? void 0 : activeSensor.autoScrollEnabled) === false;
        const autoScrollGloballyDisabled = typeof autoScroll === 'object' ? autoScroll.enabled === false : autoScroll === false;
        const enabled = isInitialized && !activeSensorDisablesAutoscroll && !autoScrollGloballyDisabled;
        if (typeof autoScroll === 'object') {
            return {
                ...autoScroll,
                enabled
            };
        }
        return {
            enabled
        };
    }
});
const NullContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const defaultRole = 'button';
const ID_PREFIX = 'Draggable';
function useDraggable(_ref) {
    let { id, data, disabled = false, attributes } = _ref;
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUniqueId"])(ID_PREFIX);
    const { activators, activatorEvent, active, activeNodeRect, ariaDescribedById, draggableNodes, over } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(InternalContext);
    const { role = defaultRole, roleDescription = 'draggable', tabIndex = 0 } = attributes != null ? attributes : {};
    const isDragging = (active == null ? void 0 : active.id) === id;
    const transform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(isDragging ? ActiveDraggableContext : NullContext);
    const [node, setNodeRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNodeRef"])();
    const [activatorNode, setActivatorNodeRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNodeRef"])();
    const listeners = useSyntheticListeners(activators, id);
    const dataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])(data);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useDraggable.useIsomorphicLayoutEffect": ()=>{
            draggableNodes.set(id, {
                id,
                key,
                node,
                activatorNode,
                data: dataRef
            });
            return ({
                "useDraggable.useIsomorphicLayoutEffect": ()=>{
                    const node = draggableNodes.get(id);
                    if (node && node.key === key) {
                        draggableNodes.delete(id);
                    }
                }
            })["useDraggable.useIsomorphicLayoutEffect"];
        }
    }["useDraggable.useIsomorphicLayoutEffect"], [
        draggableNodes,
        id
    ]);
    const memoizedAttributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDraggable.useMemo[memoizedAttributes]": ()=>({
                role,
                tabIndex,
                'aria-disabled': disabled,
                'aria-pressed': isDragging && role === defaultRole ? true : undefined,
                'aria-roledescription': roleDescription,
                'aria-describedby': ariaDescribedById.draggable
            })
    }["useDraggable.useMemo[memoizedAttributes]"], [
        disabled,
        role,
        tabIndex,
        isDragging,
        roleDescription,
        ariaDescribedById.draggable
    ]);
    return {
        active,
        activatorEvent,
        activeNodeRect,
        attributes: memoizedAttributes,
        isDragging,
        listeners: disabled ? undefined : listeners,
        node,
        over,
        setNodeRef,
        setActivatorNodeRef,
        transform
    };
}
function useDndContext() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PublicContext);
}
const ID_PREFIX$1 = 'Droppable';
const defaultResizeObserverConfig = {
    timeout: 25
};
function useDroppable(_ref) {
    let { data, disabled = false, id, resizeObserverConfig } = _ref;
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUniqueId"])(ID_PREFIX$1);
    const { active, dispatch, over, measureDroppableContainers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(InternalContext);
    const previous = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        disabled
    });
    const resizeObserverConnected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const callbackId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { disabled: resizeObserverDisabled, updateMeasurementsFor, timeout: resizeObserverTimeout } = {
        ...defaultResizeObserverConfig,
        ...resizeObserverConfig
    };
    const ids = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])(updateMeasurementsFor != null ? updateMeasurementsFor : id);
    const handleResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDroppable.useCallback[handleResize]": ()=>{
            if (!resizeObserverConnected.current) {
                // ResizeObserver invokes the `handleResize` callback as soon as `observe` is called,
                // assuming the element is rendered and displayed.
                resizeObserverConnected.current = true;
                return;
            }
            if (callbackId.current != null) {
                clearTimeout(callbackId.current);
            }
            callbackId.current = setTimeout({
                "useDroppable.useCallback[handleResize]": ()=>{
                    measureDroppableContainers(Array.isArray(ids.current) ? ids.current : [
                        ids.current
                    ]);
                    callbackId.current = null;
                }
            }["useDroppable.useCallback[handleResize]"], resizeObserverTimeout);
        }
    }["useDroppable.useCallback[handleResize]"], [
        resizeObserverTimeout
    ]);
    const resizeObserver = useResizeObserver({
        callback: handleResize,
        disabled: resizeObserverDisabled || !active
    });
    const handleNodeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDroppable.useCallback[handleNodeChange]": (newElement, previousElement)=>{
            if (!resizeObserver) {
                return;
            }
            if (previousElement) {
                resizeObserver.unobserve(previousElement);
                resizeObserverConnected.current = false;
            }
            if (newElement) {
                resizeObserver.observe(newElement);
            }
        }
    }["useDroppable.useCallback[handleNodeChange]"], [
        resizeObserver
    ]);
    const [nodeRef, setNodeRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNodeRef"])(handleNodeChange);
    const dataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])(data);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDroppable.useEffect": ()=>{
            if (!resizeObserver || !nodeRef.current) {
                return;
            }
            resizeObserver.disconnect();
            resizeObserverConnected.current = false;
            resizeObserver.observe(nodeRef.current);
        }
    }["useDroppable.useEffect"], [
        nodeRef,
        resizeObserver
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDroppable.useEffect": ()=>{
            dispatch({
                type: Action.RegisterDroppable,
                element: {
                    id,
                    key,
                    disabled,
                    node: nodeRef,
                    rect,
                    data: dataRef
                }
            });
            return ({
                "useDroppable.useEffect": ()=>dispatch({
                        type: Action.UnregisterDroppable,
                        key,
                        id
                    })
            })["useDroppable.useEffect"];
        }
    }["useDroppable.useEffect"], [
        id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDroppable.useEffect": ()=>{
            if (disabled !== previous.current.disabled) {
                dispatch({
                    type: Action.SetDroppableDisabled,
                    id,
                    key,
                    disabled
                });
                previous.current.disabled = disabled;
            }
        }
    }["useDroppable.useEffect"], [
        id,
        key,
        disabled,
        dispatch
    ]);
    return {
        active,
        rect,
        isOver: (over == null ? void 0 : over.id) === id,
        node: nodeRef,
        over,
        setNodeRef
    };
}
function AnimationManager(_ref) {
    let { animation, children } = _ref;
    const [clonedChildren, setClonedChildren] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [element, setElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const previousChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrevious"])(children);
    if (!children && !clonedChildren && previousChildren) {
        setClonedChildren(previousChildren);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "AnimationManager.useIsomorphicLayoutEffect": ()=>{
            if (!element) {
                return;
            }
            const key = clonedChildren == null ? void 0 : clonedChildren.key;
            const id = clonedChildren == null ? void 0 : clonedChildren.props.id;
            if (key == null || id == null) {
                setClonedChildren(null);
                return;
            }
            Promise.resolve(animation(id, element)).then({
                "AnimationManager.useIsomorphicLayoutEffect": ()=>{
                    setClonedChildren(null);
                }
            }["AnimationManager.useIsomorphicLayoutEffect"]);
        }
    }["AnimationManager.useIsomorphicLayoutEffect"], [
        animation,
        clonedChildren,
        element
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, children, clonedChildren ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(clonedChildren, {
        ref: setElement
    }) : null);
}
const defaultTransform = {
    x: 0,
    y: 0,
    scaleX: 1,
    scaleY: 1
};
function NullifiedContextProvider(_ref) {
    let { children } = _ref;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(InternalContext.Provider, {
        value: defaultInternalContext
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ActiveDraggableContext.Provider, {
        value: defaultTransform
    }, children));
}
const baseStyles = {
    position: 'fixed',
    touchAction: 'none'
};
const defaultTransition = (activatorEvent)=>{
    const isKeyboardActivator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeyboardEvent"])(activatorEvent);
    return isKeyboardActivator ? 'transform 250ms ease' : undefined;
};
const PositionedOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((_ref, ref)=>{
    let { as, activatorEvent, adjustScale, children, className, rect, style, transform, transition = defaultTransition } = _ref;
    if (!rect) {
        return null;
    }
    const scaleAdjustedTransform = adjustScale ? transform : {
        ...transform,
        scaleX: 1,
        scaleY: 1
    };
    const styles = {
        ...baseStyles,
        width: rect.width,
        height: rect.height,
        top: rect.top,
        left: rect.left,
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CSS"].Transform.toString(scaleAdjustedTransform),
        transformOrigin: adjustScale && activatorEvent ? getRelativeTransformOrigin(activatorEvent, rect) : undefined,
        transition: typeof transition === 'function' ? transition(activatorEvent) : transition,
        ...style
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(as, {
        className,
        style: styles,
        ref
    }, children);
});
const defaultDropAnimationSideEffects = (options)=>(_ref)=>{
        let { active, dragOverlay } = _ref;
        const originalStyles = {};
        const { styles, className } = options;
        if (styles != null && styles.active) {
            for (const [key, value] of Object.entries(styles.active)){
                if (value === undefined) {
                    continue;
                }
                originalStyles[key] = active.node.style.getPropertyValue(key);
                active.node.style.setProperty(key, value);
            }
        }
        if (styles != null && styles.dragOverlay) {
            for (const [key, value] of Object.entries(styles.dragOverlay)){
                if (value === undefined) {
                    continue;
                }
                dragOverlay.node.style.setProperty(key, value);
            }
        }
        if (className != null && className.active) {
            active.node.classList.add(className.active);
        }
        if (className != null && className.dragOverlay) {
            dragOverlay.node.classList.add(className.dragOverlay);
        }
        return function cleanup() {
            for (const [key, value] of Object.entries(originalStyles)){
                active.node.style.setProperty(key, value);
            }
            if (className != null && className.active) {
                active.node.classList.remove(className.active);
            }
        };
    };
const defaultKeyframeResolver = (_ref2)=>{
    let { transform: { initial, final } } = _ref2;
    return [
        {
            transform: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CSS"].Transform.toString(initial)
        },
        {
            transform: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CSS"].Transform.toString(final)
        }
    ];
};
const defaultDropAnimationConfiguration = {
    duration: 250,
    easing: 'ease',
    keyframes: defaultKeyframeResolver,
    sideEffects: /*#__PURE__*/ defaultDropAnimationSideEffects({
        styles: {
            active: {
                opacity: '0'
            }
        }
    })
};
function useDropAnimation(_ref3) {
    let { config, draggableNodes, droppableContainers, measuringConfiguration } = _ref3;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])({
        "useDropAnimation.useEvent": (id, node)=>{
            if (config === null) {
                return;
            }
            const activeDraggable = draggableNodes.get(id);
            if (!activeDraggable) {
                return;
            }
            const activeNode = activeDraggable.node.current;
            if (!activeNode) {
                return;
            }
            const measurableNode = getMeasurableNode(node);
            if (!measurableNode) {
                return;
            }
            const { transform } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(node).getComputedStyle(node);
            const parsedTransform = parseTransform(transform);
            if (!parsedTransform) {
                return;
            }
            const animation = typeof config === 'function' ? config : createDefaultDropAnimation(config);
            scrollIntoViewIfNeeded(activeNode, measuringConfiguration.draggable.measure);
            return animation({
                active: {
                    id,
                    data: activeDraggable.data,
                    node: activeNode,
                    rect: measuringConfiguration.draggable.measure(activeNode)
                },
                draggableNodes,
                dragOverlay: {
                    node,
                    rect: measuringConfiguration.dragOverlay.measure(measurableNode)
                },
                droppableContainers,
                measuringConfiguration,
                transform: parsedTransform
            });
        }
    }["useDropAnimation.useEvent"]);
}
function createDefaultDropAnimation(options) {
    const { duration, easing, sideEffects, keyframes } = {
        ...defaultDropAnimationConfiguration,
        ...options
    };
    return (_ref4)=>{
        let { active, dragOverlay, transform, ...rest } = _ref4;
        if (!duration) {
            // Do not animate if animation duration is zero.
            return;
        }
        const delta = {
            x: dragOverlay.rect.left - active.rect.left,
            y: dragOverlay.rect.top - active.rect.top
        };
        const scale = {
            scaleX: transform.scaleX !== 1 ? active.rect.width * transform.scaleX / dragOverlay.rect.width : 1,
            scaleY: transform.scaleY !== 1 ? active.rect.height * transform.scaleY / dragOverlay.rect.height : 1
        };
        const finalTransform = {
            x: transform.x - delta.x,
            y: transform.y - delta.y,
            ...scale
        };
        const animationKeyframes = keyframes({
            ...rest,
            active,
            dragOverlay,
            transform: {
                initial: transform,
                final: finalTransform
            }
        });
        const [firstKeyframe] = animationKeyframes;
        const lastKeyframe = animationKeyframes[animationKeyframes.length - 1];
        if (JSON.stringify(firstKeyframe) === JSON.stringify(lastKeyframe)) {
            // The start and end keyframes are the same, infer that there is no animation needed.
            return;
        }
        const cleanup = sideEffects == null ? void 0 : sideEffects({
            active,
            dragOverlay,
            ...rest
        });
        const animation = dragOverlay.node.animate(animationKeyframes, {
            duration,
            easing,
            fill: 'forwards'
        });
        return new Promise((resolve)=>{
            animation.onfinish = ()=>{
                cleanup == null ? void 0 : cleanup();
                resolve();
            };
        });
    };
}
let key = 0;
function useKey(id) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useKey.useMemo": ()=>{
            if (id == null) {
                return;
            }
            key++;
            return key;
        }
    }["useKey.useMemo"], [
        id
    ]);
}
const DragOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo((_ref)=>{
    let { adjustScale = false, children, dropAnimation: dropAnimationConfig, style, transition, modifiers, wrapperElement = 'div', className, zIndex = 999 } = _ref;
    const { activatorEvent, active, activeNodeRect, containerNodeRect, draggableNodes, droppableContainers, dragOverlay, over, measuringConfiguration, scrollableAncestors, scrollableAncestorRects, windowRect } = useDndContext();
    const transform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ActiveDraggableContext);
    const key = useKey(active == null ? void 0 : active.id);
    const modifiedTransform = applyModifiers(modifiers, {
        activatorEvent,
        active,
        activeNodeRect,
        containerNodeRect,
        draggingNodeRect: dragOverlay.rect,
        over,
        overlayNodeRect: dragOverlay.rect,
        scrollableAncestors,
        scrollableAncestorRects,
        transform,
        windowRect
    });
    const initialRect = useInitialValue(activeNodeRect);
    const dropAnimation = useDropAnimation({
        config: dropAnimationConfig,
        draggableNodes,
        droppableContainers,
        measuringConfiguration
    }); // We need to wait for the active node to be measured before connecting the drag overlay ref
    // otherwise collisions can be computed against a mispositioned drag overlay
    const ref = initialRect ? dragOverlay.setRef : undefined;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(NullifiedContextProvider, null, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(AnimationManager, {
        animation: dropAnimation
    }, active && key ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(PositionedOverlay, {
        key: key,
        id: active.id,
        ref: ref,
        as: wrapperElement,
        activatorEvent: activatorEvent,
        adjustScale: adjustScale,
        className: className,
        transition: transition,
        rect: initialRect,
        style: {
            zIndex,
            ...style
        },
        transform: modifiedTransform
    }, children) : null));
});
;
 //# sourceMappingURL=core.esm.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SortableContext",
    ()=>SortableContext,
    "arrayMove",
    ()=>arrayMove,
    "arraySwap",
    ()=>arraySwap,
    "defaultAnimateLayoutChanges",
    ()=>defaultAnimateLayoutChanges,
    "defaultNewIndexGetter",
    ()=>defaultNewIndexGetter,
    "hasSortableData",
    ()=>hasSortableData,
    "horizontalListSortingStrategy",
    ()=>horizontalListSortingStrategy,
    "rectSortingStrategy",
    ()=>rectSortingStrategy,
    "rectSwappingStrategy",
    ()=>rectSwappingStrategy,
    "sortableKeyboardCoordinates",
    ()=>sortableKeyboardCoordinates,
    "useSortable",
    ()=>useSortable,
    "verticalListSortingStrategy",
    ()=>verticalListSortingStrategy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/@dnd-kit/core/dist/core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/@dnd-kit/utilities/dist/utilities.esm.js [app-client] (ecmascript)");
;
;
;
/**
 * Move an array item to a different position. Returns a new array with the item moved to the new position.
 */ function arrayMove(array, from, to) {
    const newArray = array.slice();
    newArray.splice(to < 0 ? newArray.length + to : to, 0, newArray.splice(from, 1)[0]);
    return newArray;
}
/**
 * Swap an array item to a different position. Returns a new array with the item swapped to the new position.
 */ function arraySwap(array, from, to) {
    const newArray = array.slice();
    newArray[from] = array[to];
    newArray[to] = array[from];
    return newArray;
}
function getSortedRects(items, rects) {
    return items.reduce((accumulator, id, index)=>{
        const rect = rects.get(id);
        if (rect) {
            accumulator[index] = rect;
        }
        return accumulator;
    }, Array(items.length));
}
function isValidIndex(index) {
    return index !== null && index >= 0;
}
function itemsEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (a.length !== b.length) {
        return false;
    }
    for(let i = 0; i < a.length; i++){
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
function normalizeDisabled(disabled) {
    if (typeof disabled === 'boolean') {
        return {
            draggable: disabled,
            droppable: disabled
        };
    }
    return disabled;
}
// To-do: We should be calculating scale transformation
const defaultScale = {
    scaleX: 1,
    scaleY: 1
};
const horizontalListSortingStrategy = (_ref)=>{
    var _rects$activeIndex;
    let { rects, activeNodeRect: fallbackActiveRect, activeIndex, overIndex, index } = _ref;
    const activeNodeRect = (_rects$activeIndex = rects[activeIndex]) != null ? _rects$activeIndex : fallbackActiveRect;
    if (!activeNodeRect) {
        return null;
    }
    const itemGap = getItemGap(rects, index, activeIndex);
    if (index === activeIndex) {
        const newIndexRect = rects[overIndex];
        if (!newIndexRect) {
            return null;
        }
        return {
            x: activeIndex < overIndex ? newIndexRect.left + newIndexRect.width - (activeNodeRect.left + activeNodeRect.width) : newIndexRect.left - activeNodeRect.left,
            y: 0,
            ...defaultScale
        };
    }
    if (index > activeIndex && index <= overIndex) {
        return {
            x: -activeNodeRect.width - itemGap,
            y: 0,
            ...defaultScale
        };
    }
    if (index < activeIndex && index >= overIndex) {
        return {
            x: activeNodeRect.width + itemGap,
            y: 0,
            ...defaultScale
        };
    }
    return {
        x: 0,
        y: 0,
        ...defaultScale
    };
};
function getItemGap(rects, index, activeIndex) {
    const currentRect = rects[index];
    const previousRect = rects[index - 1];
    const nextRect = rects[index + 1];
    if (!currentRect || !previousRect && !nextRect) {
        return 0;
    }
    if (activeIndex < index) {
        return previousRect ? currentRect.left - (previousRect.left + previousRect.width) : nextRect.left - (currentRect.left + currentRect.width);
    }
    return nextRect ? nextRect.left - (currentRect.left + currentRect.width) : currentRect.left - (previousRect.left + previousRect.width);
}
const rectSortingStrategy = (_ref)=>{
    let { rects, activeIndex, overIndex, index } = _ref;
    const newRects = arrayMove(rects, overIndex, activeIndex);
    const oldRect = rects[index];
    const newRect = newRects[index];
    if (!newRect || !oldRect) {
        return null;
    }
    return {
        x: newRect.left - oldRect.left,
        y: newRect.top - oldRect.top,
        scaleX: newRect.width / oldRect.width,
        scaleY: newRect.height / oldRect.height
    };
};
const rectSwappingStrategy = (_ref)=>{
    let { activeIndex, index, rects, overIndex } = _ref;
    let oldRect;
    let newRect;
    if (index === activeIndex) {
        oldRect = rects[index];
        newRect = rects[overIndex];
    }
    if (index === overIndex) {
        oldRect = rects[index];
        newRect = rects[activeIndex];
    }
    if (!newRect || !oldRect) {
        return null;
    }
    return {
        x: newRect.left - oldRect.left,
        y: newRect.top - oldRect.top,
        scaleX: newRect.width / oldRect.width,
        scaleY: newRect.height / oldRect.height
    };
};
// To-do: We should be calculating scale transformation
const defaultScale$1 = {
    scaleX: 1,
    scaleY: 1
};
const verticalListSortingStrategy = (_ref)=>{
    var _rects$activeIndex;
    let { activeIndex, activeNodeRect: fallbackActiveRect, index, rects, overIndex } = _ref;
    const activeNodeRect = (_rects$activeIndex = rects[activeIndex]) != null ? _rects$activeIndex : fallbackActiveRect;
    if (!activeNodeRect) {
        return null;
    }
    if (index === activeIndex) {
        const overIndexRect = rects[overIndex];
        if (!overIndexRect) {
            return null;
        }
        return {
            x: 0,
            y: activeIndex < overIndex ? overIndexRect.top + overIndexRect.height - (activeNodeRect.top + activeNodeRect.height) : overIndexRect.top - activeNodeRect.top,
            ...defaultScale$1
        };
    }
    const itemGap = getItemGap$1(rects, index, activeIndex);
    if (index > activeIndex && index <= overIndex) {
        return {
            x: 0,
            y: -activeNodeRect.height - itemGap,
            ...defaultScale$1
        };
    }
    if (index < activeIndex && index >= overIndex) {
        return {
            x: 0,
            y: activeNodeRect.height + itemGap,
            ...defaultScale$1
        };
    }
    return {
        x: 0,
        y: 0,
        ...defaultScale$1
    };
};
function getItemGap$1(clientRects, index, activeIndex) {
    const currentRect = clientRects[index];
    const previousRect = clientRects[index - 1];
    const nextRect = clientRects[index + 1];
    if (!currentRect) {
        return 0;
    }
    if (activeIndex < index) {
        return previousRect ? currentRect.top - (previousRect.top + previousRect.height) : nextRect ? nextRect.top - (currentRect.top + currentRect.height) : 0;
    }
    return nextRect ? nextRect.top - (currentRect.top + currentRect.height) : previousRect ? currentRect.top - (previousRect.top + previousRect.height) : 0;
}
const ID_PREFIX = 'Sortable';
const Context = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({
    activeIndex: -1,
    containerId: ID_PREFIX,
    disableTransforms: false,
    items: [],
    overIndex: -1,
    useDragOverlay: false,
    sortedRects: [],
    strategy: rectSortingStrategy,
    disabled: {
        draggable: false,
        droppable: false
    }
});
function SortableContext(_ref) {
    let { children, id, items: userDefinedItems, strategy = rectSortingStrategy, disabled: disabledProp = false } = _ref;
    const { active, dragOverlay, droppableRects, over, measureDroppableContainers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDndContext"])();
    const containerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUniqueId"])(ID_PREFIX, id);
    const useDragOverlay = Boolean(dragOverlay.rect !== null);
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SortableContext.useMemo[items]": ()=>userDefinedItems.map({
                "SortableContext.useMemo[items]": (item)=>typeof item === 'object' && 'id' in item ? item.id : item
            }["SortableContext.useMemo[items]"])
    }["SortableContext.useMemo[items]"], [
        userDefinedItems
    ]);
    const isDragging = active != null;
    const activeIndex = active ? items.indexOf(active.id) : -1;
    const overIndex = over ? items.indexOf(over.id) : -1;
    const previousItemsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(items);
    const itemsHaveChanged = !itemsEqual(items, previousItemsRef.current);
    const disableTransforms = overIndex !== -1 && activeIndex === -1 || itemsHaveChanged;
    const disabled = normalizeDisabled(disabledProp);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "SortableContext.useIsomorphicLayoutEffect": ()=>{
            if (itemsHaveChanged && isDragging) {
                measureDroppableContainers(items);
            }
        }
    }["SortableContext.useIsomorphicLayoutEffect"], [
        itemsHaveChanged,
        items,
        isDragging,
        measureDroppableContainers
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SortableContext.useEffect": ()=>{
            previousItemsRef.current = items;
        }
    }["SortableContext.useEffect"], [
        items
    ]);
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SortableContext.useMemo[contextValue]": ()=>({
                activeIndex,
                containerId,
                disabled,
                disableTransforms,
                items,
                overIndex,
                useDragOverlay,
                sortedRects: getSortedRects(items, droppableRects),
                strategy
            })
    }["SortableContext.useMemo[contextValue]"], [
        activeIndex,
        containerId,
        disabled.draggable,
        disabled.droppable,
        disableTransforms,
        items,
        overIndex,
        droppableRects,
        useDragOverlay,
        strategy
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Context.Provider, {
        value: contextValue
    }, children);
}
const defaultNewIndexGetter = (_ref)=>{
    let { id, items, activeIndex, overIndex } = _ref;
    return arrayMove(items, activeIndex, overIndex).indexOf(id);
};
const defaultAnimateLayoutChanges = (_ref2)=>{
    let { containerId, isSorting, wasDragging, index, items, newIndex, previousItems, previousContainerId, transition } = _ref2;
    if (!transition || !wasDragging) {
        return false;
    }
    if (previousItems !== items && index === newIndex) {
        return false;
    }
    if (isSorting) {
        return true;
    }
    return newIndex !== index && containerId === previousContainerId;
};
const defaultTransition = {
    duration: 200,
    easing: 'ease'
};
const transitionProperty = 'transform';
const disabledTransition = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CSS"].Transition.toString({
    property: transitionProperty,
    duration: 0,
    easing: 'linear'
});
const defaultAttributes = {
    roleDescription: 'sortable'
};
/*
 * When the index of an item changes while sorting,
 * we need to temporarily disable the transforms
 */ function useDerivedTransform(_ref) {
    let { disabled, index, node, rect } = _ref;
    const [derivedTransform, setDerivedtransform] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const previousIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(index);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useDerivedTransform.useIsomorphicLayoutEffect": ()=>{
            if (!disabled && index !== previousIndex.current && node.current) {
                const initial = rect.current;
                if (initial) {
                    const current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClientRect"])(node.current, {
                        ignoreTransform: true
                    });
                    const delta = {
                        x: initial.left - current.left,
                        y: initial.top - current.top,
                        scaleX: initial.width / current.width,
                        scaleY: initial.height / current.height
                    };
                    if (delta.x || delta.y) {
                        setDerivedtransform(delta);
                    }
                }
            }
            if (index !== previousIndex.current) {
                previousIndex.current = index;
            }
        }
    }["useDerivedTransform.useIsomorphicLayoutEffect"], [
        disabled,
        index,
        node,
        rect
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDerivedTransform.useEffect": ()=>{
            if (derivedTransform) {
                setDerivedtransform(null);
            }
        }
    }["useDerivedTransform.useEffect"], [
        derivedTransform
    ]);
    return derivedTransform;
}
function useSortable(_ref) {
    let { animateLayoutChanges = defaultAnimateLayoutChanges, attributes: userDefinedAttributes, disabled: localDisabled, data: customData, getNewIndex = defaultNewIndexGetter, id, strategy: localStrategy, resizeObserverConfig, transition = defaultTransition } = _ref;
    const { items, containerId, activeIndex, disabled: globalDisabled, disableTransforms, sortedRects, overIndex, useDragOverlay, strategy: globalStrategy } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Context);
    const disabled = normalizeLocalDisabled(localDisabled, globalDisabled);
    const index = items.indexOf(id);
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSortable.useMemo[data]": ()=>({
                sortable: {
                    containerId,
                    index,
                    items
                },
                ...customData
            })
    }["useSortable.useMemo[data]"], [
        containerId,
        customData,
        index,
        items
    ]);
    const itemsAfterCurrentSortable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSortable.useMemo[itemsAfterCurrentSortable]": ()=>items.slice(items.indexOf(id))
    }["useSortable.useMemo[itemsAfterCurrentSortable]"], [
        items,
        id
    ]);
    const { rect, node, isOver, setNodeRef: setDroppableNodeRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDroppable"])({
        id,
        data,
        disabled: disabled.droppable,
        resizeObserverConfig: {
            updateMeasurementsFor: itemsAfterCurrentSortable,
            ...resizeObserverConfig
        }
    });
    const { active, activatorEvent, activeNodeRect, attributes, setNodeRef: setDraggableNodeRef, listeners, isDragging, over, setActivatorNodeRef, transform } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDraggable"])({
        id,
        data,
        attributes: {
            ...defaultAttributes,
            ...userDefinedAttributes
        },
        disabled: disabled.draggable
    });
    const setNodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCombinedRefs"])(setDroppableNodeRef, setDraggableNodeRef);
    const isSorting = Boolean(active);
    const displaceItem = isSorting && !disableTransforms && isValidIndex(activeIndex) && isValidIndex(overIndex);
    const shouldDisplaceDragSource = !useDragOverlay && isDragging;
    const dragSourceDisplacement = shouldDisplaceDragSource && displaceItem ? transform : null;
    const strategy = localStrategy != null ? localStrategy : globalStrategy;
    const finalTransform = displaceItem ? dragSourceDisplacement != null ? dragSourceDisplacement : strategy({
        rects: sortedRects,
        activeNodeRect,
        activeIndex,
        overIndex,
        index
    }) : null;
    const newIndex = isValidIndex(activeIndex) && isValidIndex(overIndex) ? getNewIndex({
        id,
        items,
        activeIndex,
        overIndex
    }) : index;
    const activeId = active == null ? void 0 : active.id;
    const previous = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        activeId,
        items,
        newIndex,
        containerId
    });
    const itemsHaveChanged = items !== previous.current.items;
    const shouldAnimateLayoutChanges = animateLayoutChanges({
        active,
        containerId,
        isDragging,
        isSorting,
        id,
        index,
        items,
        newIndex: previous.current.newIndex,
        previousItems: previous.current.items,
        previousContainerId: previous.current.containerId,
        transition,
        wasDragging: previous.current.activeId != null
    });
    const derivedTransform = useDerivedTransform({
        disabled: !shouldAnimateLayoutChanges,
        index,
        node,
        rect
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSortable.useEffect": ()=>{
            if (isSorting && previous.current.newIndex !== newIndex) {
                previous.current.newIndex = newIndex;
            }
            if (containerId !== previous.current.containerId) {
                previous.current.containerId = containerId;
            }
            if (items !== previous.current.items) {
                previous.current.items = items;
            }
        }
    }["useSortable.useEffect"], [
        isSorting,
        newIndex,
        containerId,
        items
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSortable.useEffect": ()=>{
            if (activeId === previous.current.activeId) {
                return;
            }
            if (activeId != null && previous.current.activeId == null) {
                previous.current.activeId = activeId;
                return;
            }
            const timeoutId = setTimeout({
                "useSortable.useEffect.timeoutId": ()=>{
                    previous.current.activeId = activeId;
                }
            }["useSortable.useEffect.timeoutId"], 50);
            return ({
                "useSortable.useEffect": ()=>clearTimeout(timeoutId)
            })["useSortable.useEffect"];
        }
    }["useSortable.useEffect"], [
        activeId
    ]);
    return {
        active,
        activeIndex,
        attributes,
        data,
        rect,
        index,
        newIndex,
        items,
        isOver,
        isSorting,
        isDragging,
        listeners,
        node,
        overIndex,
        over,
        setNodeRef,
        setActivatorNodeRef,
        setDroppableNodeRef,
        setDraggableNodeRef,
        transform: derivedTransform != null ? derivedTransform : finalTransform,
        transition: getTransition()
    };
    //TURBOPACK unreachable
    ;
    function getTransition() {
        if (derivedTransform || // Or to prevent items jumping to back to their "new" position when items change
        itemsHaveChanged && previous.current.newIndex === index) {
            return disabledTransition;
        }
        if (shouldDisplaceDragSource && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeyboardEvent"])(activatorEvent) || !transition) {
            return undefined;
        }
        if (isSorting || shouldAnimateLayoutChanges) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CSS"].Transition.toString({
                ...transition,
                property: transitionProperty
            });
        }
        return undefined;
    }
}
function normalizeLocalDisabled(localDisabled, globalDisabled) {
    var _localDisabled$dragga, _localDisabled$droppa;
    if (typeof localDisabled === 'boolean') {
        return {
            draggable: localDisabled,
            // Backwards compatibility
            droppable: false
        };
    }
    return {
        draggable: (_localDisabled$dragga = localDisabled == null ? void 0 : localDisabled.draggable) != null ? _localDisabled$dragga : globalDisabled.draggable,
        droppable: (_localDisabled$droppa = localDisabled == null ? void 0 : localDisabled.droppable) != null ? _localDisabled$droppa : globalDisabled.droppable
    };
}
function hasSortableData(entry) {
    if (!entry) {
        return false;
    }
    const data = entry.data.current;
    if (data && 'sortable' in data && typeof data.sortable === 'object' && 'containerId' in data.sortable && 'items' in data.sortable && 'index' in data.sortable) {
        return true;
    }
    return false;
}
const directions = [
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyboardCode"].Down,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyboardCode"].Right,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyboardCode"].Up,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyboardCode"].Left
];
const sortableKeyboardCoordinates = (event, _ref)=>{
    let { context: { active, collisionRect, droppableRects, droppableContainers, over, scrollableAncestors } } = _ref;
    if (directions.includes(event.code)) {
        event.preventDefault();
        if (!active || !collisionRect) {
            return;
        }
        const filteredContainers = [];
        droppableContainers.getEnabled().forEach((entry)=>{
            if (!entry || entry != null && entry.disabled) {
                return;
            }
            const rect = droppableRects.get(entry.id);
            if (!rect) {
                return;
            }
            switch(event.code){
                case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyboardCode"].Down:
                    if (collisionRect.top < rect.top) {
                        filteredContainers.push(entry);
                    }
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyboardCode"].Up:
                    if (collisionRect.top > rect.top) {
                        filteredContainers.push(entry);
                    }
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyboardCode"].Left:
                    if (collisionRect.left > rect.left) {
                        filteredContainers.push(entry);
                    }
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyboardCode"].Right:
                    if (collisionRect.left < rect.left) {
                        filteredContainers.push(entry);
                    }
                    break;
            }
        });
        const collisions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closestCorners"])({
            active,
            collisionRect: collisionRect,
            droppableRects,
            droppableContainers: filteredContainers,
            pointerCoordinates: null
        });
        let closestId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirstCollision"])(collisions, 'id');
        if (closestId === (over == null ? void 0 : over.id) && collisions.length > 1) {
            closestId = collisions[1].id;
        }
        if (closestId != null) {
            const activeDroppable = droppableContainers.get(active.id);
            const newDroppable = droppableContainers.get(closestId);
            const newRect = newDroppable ? droppableRects.get(newDroppable.id) : null;
            const newNode = newDroppable == null ? void 0 : newDroppable.node.current;
            if (newNode && newRect && activeDroppable && newDroppable) {
                const newScrollAncestors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScrollableAncestors"])(newNode);
                const hasDifferentScrollAncestors = newScrollAncestors.some((element, index)=>scrollableAncestors[index] !== element);
                const hasSameContainer = isSameContainer(activeDroppable, newDroppable);
                const isAfterActive = isAfter(activeDroppable, newDroppable);
                const offset = hasDifferentScrollAncestors || !hasSameContainer ? {
                    x: 0,
                    y: 0
                } : {
                    x: isAfterActive ? collisionRect.width - newRect.width : 0,
                    y: isAfterActive ? collisionRect.height - newRect.height : 0
                };
                const rectCoordinates = {
                    x: newRect.left,
                    y: newRect.top
                };
                const newCoordinates = offset.x && offset.y ? rectCoordinates : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subtract"])(rectCoordinates, offset);
                return newCoordinates;
            }
        }
    }
    return undefined;
};
function isSameContainer(a, b) {
    if (!hasSortableData(a) || !hasSortableData(b)) {
        return false;
    }
    return a.data.current.sortable.containerId === b.data.current.sortable.containerId;
}
function isAfter(a, b) {
    if (!hasSortableData(a) || !hasSortableData(b)) {
        return false;
    }
    if (!isSameContainer(a, b)) {
        return false;
    }
    return a.data.current.sortable.index < b.data.current.sortable.index;
}
;
 //# sourceMappingURL=sortable.esm.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Check
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }
    ]
];
const Check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("check", __iconNode);
;
 //# sourceMappingURL=check.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Check",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript)");
}),
"[project]/Documents/Project/NewTaskry/node_modules/date-fns/differenceInDays.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInDays",
    ()=>differenceInDays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/_lib/normalizeDates.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/differenceInCalendarDays.js [app-client] (ecmascript)");
;
;
function differenceInDays(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeDates"])(options?.in, laterDate, earlierDate);
    const sign = compareLocalAsc(laterDate_, earlierDate_);
    const difference = Math.abs((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(laterDate_, earlierDate_));
    laterDate_.setDate(laterDate_.getDate() - sign * difference);
    // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
    // If so, result must be decreased by 1 in absolute value
    const isLastDayNotFull = Number(compareLocalAsc(laterDate_, earlierDate_) === -sign);
    const result = sign * (difference - isLastDayNotFull);
    // Prevent negative zero
    return result === 0 ? 0 : result;
}
// Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.
function compareLocalAsc(laterDate, earlierDate) {
    const diff = laterDate.getFullYear() - earlierDate.getFullYear() || laterDate.getMonth() - earlierDate.getMonth() || laterDate.getDate() - earlierDate.getDate() || laterDate.getHours() - earlierDate.getHours() || laterDate.getMinutes() - earlierDate.getMinutes() || laterDate.getSeconds() - earlierDate.getSeconds() || laterDate.getMilliseconds() - earlierDate.getMilliseconds();
    if (diff < 0) return -1;
    if (diff > 0) return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
    return diff;
}
const __TURBOPACK__default__export__ = differenceInDays;
}),
"[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>X
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
];
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x", __iconNode);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)");
}),
"[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Calendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ]
];
const Calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("calendar", __iconNode);
;
 //# sourceMappingURL=calendar.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Calendar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript)");
}),
"[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Users
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "path",
        {
            d: "M16 3.128a4 4 0 0 1 0 7.744",
            key: "16gr8j"
        }
    ],
    [
        "path",
        {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ]
];
const Users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("users", __iconNode);
;
 //# sourceMappingURL=users.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Users",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript)");
}),
"[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleCheck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
];
const CircleCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-check", __iconNode);
;
 //# sourceMappingURL=circle-check.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript)");
}),
"[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Circle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
const Circle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle", __iconNode);
;
 //# sourceMappingURL=circle.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Circle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript)");
}),
"[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CirclePlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
            key: "kmsa83"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
const CirclePlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-play", __iconNode);
;
 //# sourceMappingURL=circle-play.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-client] (ecmascript) <export default as PlayCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlayCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-client] (ecmascript)");
}),
"[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Info
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M12 16v-4",
            key: "1dtifu"
        }
    ],
    [
        "path",
        {
            d: "M12 8h.01",
            key: "e9boi3"
        }
    ]
];
const Info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("info", __iconNode);
;
 //# sourceMappingURL=info.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Info",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript)");
}),
"[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Crown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
            key: "1vdc57"
        }
    ],
    [
        "path",
        {
            d: "M5 21h14",
            key: "11awu3"
        }
    ]
];
const Crown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("crown", __iconNode);
;
 //# sourceMappingURL=crown.js.map
}),
"[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Crown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=41557_7dc27660._.js.map