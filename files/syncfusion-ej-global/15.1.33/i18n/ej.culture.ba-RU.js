ej.addCulture( "ba-RU", {
	name: "ba-RU",
	englishName: "Bashkir (Russia)",
	nativeName: "Башҡорт (Рәсәй)",
	language: "ba",
	numberFormat: {
		",": " ",
		".": ",",
		negativeInfinity: "-бесконечность",
		positiveInfinity: "бесконечность",
		percent: {
			pattern: ["-n%","n%"],
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": " ",
			".": ",",
			symbol: "һ."
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["Йәкшәмбе","Дүшәмбе","Шишәмбе","Шаршамбы","Кесаҙна","Йома","Шәмбе"],
				namesAbbr: ["Йш","Дш","Шш","Шр","Кс","Йм","Шб"],
				namesShort: ["Йш","Дш","Шш","Шр","Кс","Йм","Шб"]
			},
			months: {
				names: ["ғинуар","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь",""],
				namesAbbr: ["ғин","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd.MM.yy",
				D: "d MMMM yyyy 'й'",
				t: "H:mm",
				T: "H:mm:ss",
				f: "d MMMM yyyy 'й' H:mm",
				F: "d MMMM yyyy 'й' H:mm:ss",
				M: "d MMMM"
			}
		}
	}
});