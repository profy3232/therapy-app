export const getCountryFlag = (countryName: string): string => {
	const flagMap: Record<string, string> = {
		Ukraine: "🇺🇦",
		"United States": "🇺🇸",
		"United Kingdom": "🇬🇧",
		Canada: "🇨🇦",
		Australia: "🇦🇺",
		Germany: "🇩🇪",
		France: "🇫🇷",
		Italy: "🇮🇹",
		Spain: "🇪🇸",
		Netherlands: "🇳🇱",
		Belgium: "🇧🇪",
		Switzerland: "🇨🇭",
		Austria: "🇦🇹",
		Sweden: "🇸🇪",
		Norway: "🇳🇴",
		Denmark: "🇩🇰",
		Finland: "🇫🇮",
		Poland: "🇵🇱",
		"Czech Republic": "🇨🇿",
		Slovakia: "🇸🇰",
		Hungary: "🇭🇺",
		Romania: "🇷🇴",
		Bulgaria: "🇧🇬",
		Croatia: "🇭🇷",
		Slovenia: "🇸🇮",
		Estonia: "🇪🇪",
		Latvia: "🇱🇻",
		Lithuania: "🇱🇹",
		Ireland: "🇮🇪",
		Portugal: "🇵🇹",
		Greece: "🇬🇷",
		Cyprus: "🇨🇾",
		Malta: "🇲🇹",
		Luxembourg: "🇱🇺",
		Iceland: "🇮🇸",
		"New Zealand": "🇳🇿",
		Japan: "🇯🇵",
		"South Korea": "🇰🇷",
		China: "🇨🇳",
		India: "🇮🇳",
		Brazil: "🇧🇷",
		Argentina: "🇦🇷",
		Mexico: "🇲🇽",
		Chile: "🇨🇱",
		Peru: "🇵🇪",
		Colombia: "🇨🇴",
		Venezuela: "🇻🇪",
		Ecuador: "🇪🇨",
		Uruguay: "🇺🇾",
		Paraguay: "🇵🇾",
		Bolivia: "🇧🇴",
		Guyana: "🇬🇾",
		Suriname: "🇸🇷",
		"French Guiana": "🇬🇫",
		"South Africa": "🇿🇦",
		Egypt: "🇪🇬",
		Nigeria: "🇳🇬",
		Kenya: "🇰🇪",
		Ethiopia: "🇪🇹",
		Morocco: "🇲🇦",
		Algeria: "🇩🇿",
		Tunisia: "🇹🇳",
		Libya: "🇱🇾",
		Sudan: "🇸🇩",
		Somalia: "🇸🇴",
		Djibouti: "🇩🇯",
		Eritrea: "🇪🇷",
		Chad: "🇹🇩",
		Niger: "🇳🇪",
		Mali: "🇲🇱",
		"Burkina Faso": "🇧🇫",
		Senegal: "🇸🇳",
		Gambia: "🇬🇲",
		"Guinea-Bissau": "🇬🇼",
		Guinea: "🇬🇳",
		"Sierra Leone": "🇸🇱",
		Liberia: "🇱🇷",
		"Ivory Coast": "🇨🇮",
		Ghana: "🇬🇭",
		Togo: "🇹🇬",
		Benin: "🇧🇯",
		Cameroon: "🇨🇲",
		"Central African Republic": "🇨🇫",
		Gabon: "🇬🇦",
		Congo: "🇨🇬",
		"Democratic Republic of the Congo": "🇨🇩",
		Angola: "🇦🇴",
		Zambia: "🇿🇲",
		Zimbabwe: "🇿🇼",
		Botswana: "🇧🇼",
		Namibia: "🇳🇦",
		Lesotho: "🇱🇸",
		Eswatini: "🇸🇿",
		Madagascar: "🇲🇬",
		Mauritius: "🇲🇺",
		Seychelles: "🇸🇨",
		Comoros: "🇰🇲",
		"Cape Verde": "🇨🇻",
		"Sao Tome and Principe": "🇸🇹",
		"Equatorial Guinea": "🇬🇶",
		Rwanda: "🇷🇼",
		Burundi: "🇧🇮",
		Tanzania: "🇹🇿",
		Uganda: "🇺🇬",
		Malawi: "🇲🇼",
		Mozambique: "🇲🇿",
		Russia: "🇷🇺",
		Belarus: "🇧🇾",
		Moldova: "🇲🇩",
		Georgia: "🇬🇪",
		Armenia: "🇦🇲",
		Azerbaijan: "🇦🇿",
		Kazakhstan: "🇰🇿",
		Uzbekistan: "🇺🇿",
		Turkmenistan: "🇹🇲",
		Kyrgyzstan: "🇰🇬",
		Tajikistan: "🇹🇯",
		Afghanistan: "🇦🇫",
		Pakistan: "🇵🇰",
		Nepal: "🇳🇵",
		Bhutan: "🇧🇹",
		Bangladesh: "🇧🇩",
		"Sri Lanka": "🇱🇰",
		Maldives: "🇲🇻",
		Myanmar: "🇲🇲",
		Thailand: "🇹🇭",
		Laos: "🇱🇦",
		Cambodia: "🇰🇭",
		Vietnam: "🇻🇳",
		Malaysia: "🇲🇾",
		Singapore: "🇸🇬",
		Brunei: "🇧🇳",
		Philippines: "🇵🇭",
		Indonesia: "🇮🇩",
		"East Timor": "🇹🇱",
		"Papua New Guinea": "🇵🇬",
		Fiji: "🇫🇯",
		Vanuatu: "🇻🇺",
		"New Caledonia": "🇳🇨",
		"Solomon Islands": "🇸🇧",
		Kiribati: "🇰🇮",
		Tuvalu: "🇹🇻",
		Nauru: "🇳🇷",
		Palau: "🇵🇼",
		"Marshall Islands": "🇲🇭",
		Micronesia: "🇫🇲",
		Samoa: "🇼🇸",
		Tonga: "🇹🇴",
		"Cook Islands": "🇨🇰",
		Niue: "🇳🇺",
		Tokelau: "🇹🇰",
		Israel: "🇮🇱",
		Palestine: "🇵🇸",
		Jordan: "🇯🇴",
		Lebanon: "🇱🇧",
		Syria: "🇸🇾",
		Iraq: "🇮🇶",
		Iran: "🇮🇷",
		Kuwait: "🇰🇼",
		"Saudi Arabia": "🇸🇦",
		Yemen: "🇾🇪",
		Oman: "🇴🇲",
		"United Arab Emirates": "🇦🇪",
		Qatar: "🇶🇦",
		Bahrain: "🇧🇭",
		Turkey: "🇹🇷",
	};
	return flagMap[countryName] || "🌍";
};

export const getWebsiteUrl = (therapyType: string): string => {
	const urlMap: Record<string, string> = {
		Counselling: "https://www.oliptherapy.co.uk/counselling",
		"Couples Counselling": "https://www.oliptherapy.co.uk/couples-counselling",
		EMDR: "https://www.oliptherapy.co.uk/emdr",
		Hypnotherapy: "https://www.oliptherapy.co.uk/hypnotherapy",
		CBT: "https://www.oliptherapy.co.uk/cbtpage",
	};
	return urlMap[therapyType] || "https://www.oliptherapy.co.uk";
};

export const navigateToUrl = (url: string): void => {
	// Always open links in new tabs for better user experience
	// Check if we're in an iframe
	if (window.self !== window.top) {
		// We're in an iframe - try to communicate with parent or use top-level navigation
		try {
			// Try to send message to parent window with new tab preference
			window.parent.postMessage({ 
				type: 'NAVIGATE', 
				url: url,
				target: '_blank' // Specify that we want new tab
			}, '*');
			
			// Also try to open in new tab as a fallback
			// This will work if the parent doesn't handle the message
			setTimeout(() => {
				try {
					window.open(url, '_blank');
				} catch (e) {
					console.warn('Could not open new tab:', e);
					// Final fallback - try to navigate the top window
					window.top.location.href = url;
				}
			}, 100);
		} catch (e) {
			console.warn('Could not send message to parent:', e);
			// Fallback: try to open in new tab
			try {
				window.open(url, '_blank');
			} catch (e2) {
				console.warn('Could not open new tab:', e2);
				// Final fallback - try to navigate the top window
				window.top.location.href = url;
			}
		}
	} else {
		// We're not in an iframe - always open in new tab
		window.open(url, '_blank');
	}
}; 