// 플랫폼별 URL 템플릿 정의
// 각 항공권 검색 플랫폼의 URL 구조와 파라미터 매핑 정보

const PLATFORM_TEMPLATES = {
    naver: {
        name: '네이버 항공권',
        icon: 'N',
        color: '#03c75a',
        domain: 'flight.naver.com',
        baseUrl: 'https://flight.naver.com/flights/international',
        template: '/{departureCode}-{arrivalCode}-{departureDateShort}/{arrivalCode}-{departureCode}-{returnDateShort}?adult={passengers}&fareType={fareType}',
        codeMapping: {
            'SEL': 'SEL', 'ICN': 'SEL', 'GMP': 'SEL',
            'TYO': 'NRT', 'NRT': 'NRT', 'HND': 'NRT',
            'OSA': 'KIX', 'KIX': 'KIX', 'FUK': 'FUK',
            'BKK': 'BKK', 'TPE': 'TPE', 'SIN': 'SIN',
            'HKG': 'HKG', 'PVG': 'PVG', 'PEK': 'PEK',
            'SGN': 'SGN', 'HAN': 'HAN', 'MNL': 'MNL',
            'CGK': 'CGK', 'DPS': 'DPS', 'KUL': 'KUL'
        },
        fareTypeMapping: {
            'economy': 'Y',
            'business': 'C',
            'first': 'F'
        },
        dateFormat: 'YYYYMMDD',
        description: '네이버 항공권 검색'
    },
    
    
    trip: {
        name: '트립닷컴',
        icon: 'T',
        color: '#ff6900',
        domain: 'kr.trip.com',
        baseUrl: 'https://kr.trip.com/flights',
        template: '/showfarefirst?dcity={departureCode}&acity={arrivalCode}&ddate={departureDate}&rdate={returnDate}&triptype=rt&class={classCode}&lowpricesource=searchform&quantity={passengers}&searchboxarg=t&nonstoponly=off&locale=ko-KR&curr=KRW',
        codeMapping: {
            'SEL': 'sel', 'ICN': 'sel', 'GMP': 'sel',
            'TYO': 'nrt', 'NRT': 'nrt', 'HND': 'nrt',
            'OSA': 'osa', 'KIX': 'osa', 'FUK': 'fuk',
            'BKK': 'bkk', 'TPE': 'tpe', 'SIN': 'sin',
            'HKG': 'hkg', 'PVG': 'sha', 'PEK': 'pek',
            'SGN': 'sgn', 'HAN': 'han', 'MNL': 'mnl',
            'CGK': 'cgk', 'DPS': 'dps', 'KUL': 'kul'
        },
        classMapping: {
            'economy': 'y',
            'business': 'c',
            'first': 'f'
        },
        dateFormat: 'YYYY-MM-DD',
        description: '트립닷컴 항공권 검색'
    },
    
    skyscanner: {
        name: '스카이스캐너',
        icon: 'S',
        color: '#0064e6',
        domain: 'www.skyscanner.co.kr',
        baseUrl: 'https://www.skyscanner.co.kr/transport/flights',
        template: '/{departureCode}/{arrivalCode}/{departureDateShort}/{returnDateShort}/?adultsv2={passengers}&cabinclass={cabinClass}&childrenv2=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false',
        codeMapping: {
            'SEL': 'sela', 'ICN': 'sela', 'GMP': 'sela',
            'TYO': 'ctao', 'NRT': 'ctao', 'HND': 'ctao',
            'OSA': 'osa', 'KIX': 'osa', 'FUK': 'fuk',
            'BKK': 'bkk', 'TPE': 'tpe', 'SIN': 'sin',
            'HKG': 'hkg', 'PVG': 'sha', 'PEK': 'pek',
            'SGN': 'sgn', 'HAN': 'han', 'MNL': 'mnl',
            'CGK': 'cgk', 'DPS': 'dps', 'KUL': 'kul'
        },
        cabinClassMapping: {
            'economy': 'economy',
            'business': 'business',
            'first': 'first'
        },
        dateFormat: 'DDMMYY',
        description: '스카이스캐너 항공권 검색'
    },
    
    myrealtrip: {
        name: '마이리얼트립',
        icon: 'M',
        color: '#ff6b35',
        domain: 'myrealtrip.com',
        baseUrl: 'https://flights.myrealtrip.com/air/b2c/AIR/INT/AIRINTSCH0100100010.k1',
        template: '?initform=RT&domintgubun=I&depctycd={departureCode}&depctycd={arrivalCode}&depctycd=&depctycd=&depctynm={departureName}&depctynm={arrivalName}&depctynm=&depctynm=&arrctycd={arrivalCode}&arrctycd={departureCode}&arrctycd=&arrctycd=&arrctynm={arrivalName}&arrctynm={departureName}&arrctynm=&arrctynm=&depdt={departureDate}&depdt={returnDate}&depdt=&depdt=&opencase=N&opencase=N&opencase=N&openday=&openday=&openday=&depdomintgbn=I&tasktype=B2C&servicecacheyn=Y&adtcount={passengers}&chdcount=0&infcount=0&cabinclass={classCode}&cabinsepflag=Y&KSESID=air%3Ab2c%3ASELK138RB%3ASELK138RB%3A%3A00&preferaircd=&secrchType=FARE&maxprice=&availcount=250',
        cityNameMapping: {
            'ICN': '인천', 'GMP': '서울', 'SEL': '서울',
            'NRT': '도쿄', 'HND': '도쿄', 'TYO': '도쿄',
            'KIX': '오사카', 'OSA': '오사카', 'FUK': '후쿠오카',
            'BKK': '방콕', 'DMK': '방콕', 'TPE': '타이베이',
            'SIN': '싱가포르', 'HKG': '홍콩', 'PVG': '상하이',
            'PEK': '베이징', 'SGN': '호치민', 'HAN': '하노이',
            'MNL': '마닐라', 'CGK': '자카르타', 'DPS': '발리',
            'KUL': '쿠알라룸푸르', 'LAX': '로스앤젤레스',
            'JFK': '뉴욕', 'SFO': '샌프란시스코',
            'LHR': '런던', 'CDG': '파리', 'FRA': '프랑크푸르트',
            'AMS': '암스테르담', 'SYD': '시드니', 'MEL': '멜버른'
        },
        classMapping: {
            'economy': 'Y',
            'business': 'C',
            'first': 'F'
        },
        dateFormat: 'YYYY-MM-DD',
        description: '마이리얼트립 항공권 검색'
    },
    
    agoda: {
        name: '아고다',
        icon: 'A',
        color: '#ff6900',
        domain: 'www.agoda.com',
        baseUrl: 'https://www.agoda.com/ko-kr/flights/results',
        template: '?cid=1924244&tag=416D594A47534178556F50535364246F377230446E51&departureFrom={departureCode}&departureFromType=1&arrivalTo={arrivalCode}&arrivalToType=1&departDate={departureDate}&returnDate={returnDate}&searchType=2&cabinType={cabinType}&adults={passengers}&sort=8',
        cabinTypeMapping: {
            'economy': 'Economy',
            'business': 'Business',
            'first': 'First'
        },
        dateFormat: 'YYYY-MM-DD',
        description: '아고다 항공권 검색'
    },
    
    expedia: {
        name: '익스피디아',
        icon: 'E',
        color: '#0078d2',
        domain: 'www.expedia.co.kr',
        baseUrl: 'https://www.expedia.co.kr/Flights-Search',
        template: '?leg1=from:{departureName},to:{arrivalName},departure:{departureDateExpedia}TANYT&leg2=from:{arrivalName},to:{departureName},departure:{returnDateExpedia}TANYT&trip=roundtrip&passengers=adults:{passengers},children:0,infantinlap:N&options=cabinClass:{cabinClass}&mode=search&pageId=0',
        cityNameMapping: {
            'ICN': '인천 (ICN)', 'GMP': '서울 (GMP)', 'SEL': '서울 (GMP)',
            'NRT': '도쿄 (NRT)', 'HND': '도쿄 (HND)', 'TYO': '도쿄 (NRT)',
            'KIX': '오사카 (KIX)', 'OSA': '오사카 (KIX)', 'FUK': '후쿠오카 (FUK)',
            'BKK': '방콕 (BKK)', 'DMK': '방콕 (DMK)',
            'TPE': '타이베이 (TPE)', 'SIN': '싱가포르 (SIN)', 'HKG': '홍콩 (HKG)',
            'PVG': '상하이 (PVG)', 'PEK': '베이징 (PEK)',
            'SGN': '호치민 (SGN)', 'HAN': '하노이 (HAN)',
            'MNL': '마닐라 (MNL)', 'CGK': '자카르타 (CGK)', 'DPS': '발리 (DPS)',
            'KUL': '쿠알라룸푸르 (KUL)', 'LAX': '로스앤젤레스 (LAX)',
            'JFK': '뉴욕 (JFK)', 'SFO': '샌프란시스코 (SFO)',
            'LHR': '런던 (LHR)', 'CDG': '파리 (CDG)', 'FRA': '프랑크푸르트 (FRA)',
            'AMS': '암스테르담 (AMS)', 'SYD': '시드니 (SYD)', 'MEL': '멜버른 (MEL)'
        },
        cabinClassMapping: {
            'economy': 'coach',
            'business': 'business',
            'first': 'first'
        },
        dateFormat: 'YYYY.MM.DD',
        description: '익스피디아 항공권 검색'
    },
    
    hotelscombined: {
        name: '호텔스컴바인',
        icon: 'H',
        color: '#ff6900',
        domain: 'www.hotelscombined.co.kr',
        baseUrl: 'https://www.hotelscombined.co.kr/flights',
        template: '/{departureCode}-{arrivalCode}/{departureDate}/{returnDate}/{passengers}adults?sort=bestflight_a',
        codeMapping: {
            'SEL': 'SEL', 'ICN': 'SEL', 'GMP': 'SEL',
            'TYO': 'TYO', 'NRT': 'TYO', 'HND': 'TYO',
            'OSA': 'OSA', 'KIX': 'OSA', 'FUK': 'FUK',
            'BKK': 'BKK', 'DMK': 'BKK', 'TPE': 'TPE', 
            'SIN': 'SIN', 'HKG': 'HKG', 'PVG': 'PVG',
            'PEK': 'PEK', 'SGN': 'SGN', 'HAN': 'HAN',
            'MNL': 'MNL', 'CGK': 'CGK', 'DPS': 'DPS',
            'KUL': 'KUL', 'LAX': 'LAX', 'JFK': 'JFK',
            'SFO': 'SFO', 'LHR': 'LHR', 'CDG': 'CDG',
            'FRA': 'FRA', 'AMS': 'AMS', 'SYD': 'SYD',
            'MEL': 'MEL', 'AKL': 'AKL'
        },
        dateFormat: 'YYYY-MM-DD',
        description: '호텔스컴바인 항공권 검색'
    },
    
    yanolja: {
        name: 'NOL',
        icon: 'Y',
        color: '#ff6b35',
        domain: 'NOL.COM',
        baseUrl: 'https://flight-web.yanolja.com/flights/list',
        template: '?departurePlaceTypeCode=CITY&departurePlaceCode={departureCode}&arrivalPlaceTypeCode=CITY&arrivalPlaceCode={arrivalCode}&cabinClasses={cabinClass}&adultsCount={passengers}&inboundDepartureDate={returnDate}&outboundDepartureDate={departureDate}',
        codeMapping: {
            'SEL': 'SEL', 'ICN': 'SEL', 'GMP': 'SEL',
            'TYO': 'TYO', 'NRT': 'TYO', 'HND': 'TYO',
            'OSA': 'OSA', 'KIX': 'OSA', 'FUK': 'FUK',
            'BKK': 'BKK', 'DMK': 'BKK', 'TPE': 'TPE',
            'SIN': 'SIN', 'HKG': 'HKG', 'PVG': 'PVG',
            'PEK': 'PEK', 'SGN': 'SGN', 'HAN': 'HAN',
            'MNL': 'MNL', 'CGK': 'CGK', 'DPS': 'DPS',
            'KUL': 'KUL', 'LAX': 'LAX', 'JFK': 'JFK',
            'SFO': 'SFO', 'LHR': 'LHR', 'CDG': 'CDG',
            'FRA': 'FRA', 'AMS': 'AMS', 'SYD': 'SYD',
            'MEL': 'MEL', 'AKL': 'AKL'
        },
        cabinClassMapping: {
            'economy': 'ECONOMY',
            'business': 'BUSINESS',
            'first': 'FIRST'
        },
        dateFormat: 'YYYY-MM-DD',
        description: '야놀자 항공권 검색'
    }
};

// 날짜 포맷 변환 함수들
const DATE_FORMATTERS = {
    'YYYY-MM-DD': (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    },
    'YYYYMMDD': (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}${month}${day}`;
    },
    'DDMMYY': (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString().slice(2);
        return day + month + year;
    },
    'YYYY.MM.DD': (date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}.${month}.${day}`;
    }
};

// 플랫폼 URL 생성 함수
function generatePlatformURL(platformKey, platform, formData) {
    let url = platform.baseUrl;
    
    // 날짜 포맷 변환 (로컬 날짜 사용)
    const departureDate = new Date(formData.departureDate + 'T00:00:00');
    const returnDate = new Date(formData.returnDate + 'T00:00:00');
    
    const dateFormats = {
        standard: formData.departureDate, // YYYY-MM-DD
        short: formData.departureDate.replace(/-/g, ''), // YYYYMMDD
        skyscanner: DATE_FORMATTERS['DDMMYY'](departureDate), // DDMMYY
        expedia: DATE_FORMATTERS['YYYY.MM.DD'](departureDate), // YYYY.MM.DD
        returnShort: formData.returnDate.replace(/-/g, ''), // YYYYMMDD
        returnSkyscanner: DATE_FORMATTERS['DDMMYY'](returnDate), // DDMMYY
        returnExpedia: DATE_FORMATTERS['YYYY.MM.DD'](returnDate) // YYYY.MM.DD
    };
    
    // 코드 변환
    const departureCode = getMappedCode(formData.departure, platform.codeMapping);
    const arrivalCode = getMappedCode(formData.arrival, platform.codeMapping);
    
    if (!departureCode || !arrivalCode) {
        return null;
    }
    
    // URL 템플릿 변수 치환
    let template = platform.template;
    
    // 기본 변수들
    const variables = {
        departureCode: departureCode,
        arrivalCode: arrivalCode,
        departureDate: dateFormats.standard,
        returnDate: formData.returnDate,
        departureDateShort: dateFormats.short,
        returnDateShort: dateFormats.returnShort,
        departureDateSkyscanner: dateFormats.skyscanner,
        returnDateSkyscanner: dateFormats.returnSkyscanner,
        departureDateExpedia: dateFormats.expedia,
        returnDateExpedia: dateFormats.returnExpedia,
        passengers: formData.passengers,
        cabinClass: platform.cabinClassMapping ? platform.cabinClassMapping[formData.cabinClass] : formData.cabinClass,
        classCode: platform.classMapping ? platform.classMapping[formData.cabinClass] : formData.cabinClass,
        fareType: platform.fareTypeMapping ? platform.fareTypeMapping[formData.cabinClass] : formData.cabinClass,
        cabinType: platform.cabinTypeMapping ? platform.cabinTypeMapping[formData.cabinClass] : formData.cabinClass
    };
    
    // 특별한 처리가 필요한 플랫폼들
    if (platformKey === 'expedia') {
        // 익스피디아는 도시명 사용
        variables.departureName = platform.cityNameMapping[departureCode] || departureCode;
        variables.arrivalName = platform.cityNameMapping[arrivalCode] || arrivalCode;
    } else if (platformKey === 'myrealtrip') {
        // 마이리얼트립은 도시명 사용
        variables.departureName = platform.cityNameMapping[departureCode] || departureCode;
        variables.arrivalName = platform.cityNameMapping[arrivalCode] || arrivalCode;
    } else if (platformKey === 'yanolja') {
        // 야놀자는 정상적으로 처리됨
        // 변수들이 올바르게 설정되었는지 확인
        if (!departureCode || !arrivalCode) {
            console.warn('Yanolja: Missing airport codes', { departureCode, arrivalCode });
        }
    }
    
    // 템플릿 변수 치환
    Object.entries(variables).forEach(([key, value]) => {
        template = template.replace(new RegExp(`{${key}}`, 'g'), value);
    });
    
    return url + template;
}

// 코드 매핑 함수
function getMappedCode(originalCode, mapping) {
    if (mapping && mapping[originalCode]) {
        return mapping[originalCode];
    }
    return originalCode;
}


// 플랫폼 정보 가져오기
function getPlatformInfo(platformKey) {
    return PLATFORM_TEMPLATES[platformKey] || null;
}

// 모든 플랫폼 목록 가져오기
function getAllPlatforms() {
    return Object.keys(PLATFORM_TEMPLATES);
}

// 플랫폼별 URL 생성 및 검증
function generateAllPlatformURLs(formData) {
    const results = [];
    
    Object.entries(PLATFORM_TEMPLATES).forEach(([platformKey, platform]) => {
        try {
            const url = generatePlatformURL(platformKey, platform, formData);
            if (url) {
                results.push({
                    platform: platform,
                    url: url,
                    key: platformKey
                });
            }
        } catch (error) {
            console.warn(`Failed to generate URL for ${platform.name}:`, error);
        }
    });
    
    return results;
}
