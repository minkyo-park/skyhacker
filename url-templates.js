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
        fareTypeMapping: {
            'economy': 'Y',
            'business': 'C',
            'first': 'F'
        },
        dateFormat: 'YYYYMMDD',
        description: '네이버 항공권 검색',
        redirectUrl: null
    },
    
    
    trip: {
        name: '트립닷컴',
        icon: 'T',
        color: '#ff6900',
        domain: 'kr.trip.com',
        baseUrl: 'https://kr.trip.com/flights',
        template: '/showfarefirst?dcity={departureCode}&acity={arrivalCode}&ddate={departureDate}&rdate={returnDate}&triptype=rt&class={classCode}&lowpricesource=searchform&quantity={passengers}&searchboxarg=t&nonstoponly=off&locale=ko-KR&curr=KRW&sid=2908853&allianceid=664610&ouid=A100692912%7C293189231UWsAf%7C9999%7C3%7C0',
        classMapping: {
            'economy': 'y',
            'business': 'c',
            'first': 'f'
        },
        dateFormat: 'YYYY-MM-DD',
        description: '트립닷컴 항공권 검색',
        redirectUrl: 'http://app.ac/tErYxpS43'
    },
    
    skyscanner: {
        name: '스카이스캐너',
        icon: 'S',
        color: '#0064e6',
        domain: 'www.skyscanner.co.kr',
        baseUrl: 'https://www.skyscanner.co.kr/transport/flights',
        template: '/{departureCode}/{arrivalCode}/{departureDateShort}/{returnDateShort}/?adultsv2={passengers}&cabinclass={cabinClass}&childrenv2=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false&irclickid=_xxdjc0z9jwkaxw62inxyn2yxw3222c2ugvbv1que00&associateid=AFF_TRA_19354_00001&utm_medium=affiliate&utm_source=6008601-mrpark&utm_campaign=&campaign_id=6008601&utm_content=Online%20Tracking%20Link&adid=1027991&click_timestamp=1759135077776&irmweb=&irgwc=1',
        cabinClassMapping: {
            'economy': 'economy',
            'business': 'business',
            'first': 'first'
        },
        dateFormat: 'DDMMYY',
        description: '스카이스캐너 항공권 검색',
        redirectUrl: 'https://skyscanner.pxf.io/dOLEVK'
    },
    
    myrealtrip: {
        name: '마이리얼트립',
        icon: 'M',
        color: '#ff6b35',
        domain: 'myrealtrip.com',
        baseUrl: 'https://flights.myrealtrip.com/air/b2c/AIR/INT/AIRINTSCH0100100010.k1',
        template: '?initform=RT&domintgubun=I&depctycd={departureCode}&depctycd={arrivalCode}&depctycd=&depctycd=&depctynm={departureName}&depctynm={arrivalName}&depctynm=&depctynm=&arrctycd={arrivalCode}&arrctycd={departureCode}&arrctycd=&arrctycd=&arrctynm={arrivalName}&arrctynm={departureName}&arrctynm=&arrctynm=&depdt={departureDate}&depdt={returnDate}&depdt=&depdt=&opencase=N&opencase=N&opencase=N&openday=&openday=&openday=&depdomintgbn=I&tasktype=B2C&servicecacheyn=Y&adtcount={passengers}&chdcount=0&infcount=0&cabinclass={classCode}&cabinsepflag=Y&KSESID=air%3Ab2c%3ASELK138RB%3ASELK138RB%3A%3A00&preferaircd=&secrchType=FARE&maxprice=&availcount=250&mylink_id=1060146&t_scope=86400&utm_source=mktpartner',
        classMapping: {
            'economy': 'Y',
            'business': 'C',
            'first': 'F'
        },
        dateFormat: 'YYYY-MM-DD',
                                                                                                                                                                                description: '마이리얼트립 항공권 검색',
        redirectUrl: 'https://myrealt.rip/MKUt88'
    },
    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        agoda: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        name: '아고다',
        icon: 'A',
        color: '#ff6900',
        domain: 'www.agoda.com',
        baseUrl: 'https://www.agoda.com/ko-kr/flights/results',
        template: '?cid=1729890&tag=29318879hoQ2sg68da3c574b&departureFrom={departureCode}&departureFromType=1&arrivalTo={arrivalCode}&arrivalToType=1&departDate={departureDate}&returnDate={returnDate}&searchType=2&cabinType={cabinType}&adults={passengers}&sort=8',
        cabinTypeMapping: {
            'economy': 'Economy',
            'business': 'Business',
            'first': 'First'
        },
        dateFormat: 'YYYY-MM-DD',
        description: '아고다 항공권 검색',
        redirectUrl: 'http://app.ac/9bCcVgl23'
    },
    
    expedia: {
        name: '익스피디아',
        icon: 'E',
        color: '#0078d2',
        domain: 'www.expedia.co.kr',
        baseUrl: 'https://www.expedia.co.kr/Flights-Search',
        template: '?leg1=from:{departureName},to:{arrivalName},departure:{departureDateExpedia}TANYT&leg2=from:{arrivalName},to:{departureName},departure:{returnDateExpedia}TANYT&trip=roundtrip&passengers=adults:{passengers},children:0,infantinlap:N&options=cabinClass:{cabinClass}&mode=search&pageId=0&siteid=100240&langid=1042&affcid=kr.network.linkprice.A100699161&afflid=A100699161|293188891UUcVf|9999|3|0',
        cabinClassMapping: {
            'economy': 'coach',
            'business': 'business',
            'first': 'first'
        },
        dateFormat: 'YYYY.MM.DD',
        description: '익스피디아 항공권 검색',
        redirectUrl: 'http://app.ac/P3rewXJ93'
    },
    
    hotelscombined: {
        name: '호텔스컴바인',
        icon: 'H',
        color: '#ff6900',
        domain: 'www.hotelscombined.co.kr',
        baseUrl: 'https://www.hotelscombined.co.kr/flights',
        template: '/{departureCode}-{arrivalCode}/{departureDate}/{returnDate}/{passengers}adults?sort=bestflight_a&end_cid=293188911UUdGX68da3f3665&skipapp=true',
        dateFormat: 'YYYY-MM-DD',
        description: '호텔스컴바인 항공권 검색',
        redirectUrl: 'http://app.ac/b3rewiJ33'
    },
    
    yanolja: {
        name: 'NOL',
        icon: 'Y',
        color: '#ff6b35',
        domain: 'NOL.COM',
        baseUrl: 'https://flight-web.yanolja.com/flights/list',
        template: '?departurePlaceTypeCode=CITY&departurePlaceCode={departureCode}&arrivalPlaceTypeCode=CITY&arrivalPlaceCode={arrivalCode}&cabinClasses={cabinClass}&adultsCount={passengers}&inboundDepartureDate={returnDate}&outboundDepartureDate={departureDate}',
        cabinClassMapping: {
            'economy': 'ECONOMY',
            'business': 'BUSINESS',
            'first': 'FIRST'
        },
        dateFormat: 'YYYY-MM-DD',
        description: '야놀자 항공권 검색',
        redirectUrl: 'http://app.ac/yjMf3aa23'
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
    
    // 동적 코드 변환
    const departureCode = getMappedCode(formData.departure, platformKey);
    const arrivalCode = getMappedCode(formData.arrival, platformKey);
    
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
        // 익스피디아는 도시명 사용 - 동적으로 생성
        variables.departureName = getCityNameForExpedia(formData.departure);
        variables.arrivalName = getCityNameForExpedia(formData.arrival);
    } else if (platformKey === 'myrealtrip') {
        // 마이리얼트립은 도시명 사용 - 동적으로 생성
        variables.departureName = getCityNameForMyrealtrip(formData.departure);
        variables.arrivalName = getCityNameForMyrealtrip(formData.arrival);
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

// 플랫폼별 코드 변환 규칙
const PLATFORM_CODE_RULES = {
    naver: {
        // 네이버는 대문자 IATA 코드 사용, 특별한 통합 코드만 매핑
        transform: (code) => code.toUpperCase(),
        specialMappings: {
            'SEL': 'SEL',  // 서울 통합
            'TYO': 'NRT',  // 도쿄 통합
            'OSA': 'KIX'   // 오사카 통합
        }
    },
    trip: {
        // 트립닷컴은 소문자 사용
        transform: (code) => code.toLowerCase(),
        specialMappings: {
            'SEL': 'sel',  // 서울 통합
            'TYO': 'nrt',  // 도쿄 통합
            'OSA': 'osa',  // 오사카 통합
            'PVG': 'sha'   // 상하이 특별 매핑
        }
    },
    skyscanner: {
        // 스카이스캐너는 소문자 사용, 특별한 코드들
        transform: (code) => code.toLowerCase(),
        specialMappings: {
            'SEL': 'sela',  // 서울 통합
            'TYO': 'ctao',  // 도쿄 통합
            'PVG': 'sha'    // 상하이 특별 매핑
        }
    },
    myrealtrip: {
        // 마이리얼트립은 코드 매핑 불필요 (도시명 사용)
        transform: (code) => code,
        specialMappings: {}
    },
    expedia: {
        // 익스피디아는 코드 매핑 불필요 (도시명 사용)
        transform: (code) => code,
        specialMappings: {}
    },
    agoda: {
        // 아고다는 대문자 IATA 코드 사용
        transform: (code) => code.toUpperCase(),
        specialMappings: {}
    },
    hotelscombined: {
        // 호텔스컴바인은 대문자 IATA 코드 사용
        transform: (code) => code.toUpperCase(),
        specialMappings: {
            'SEL': 'SEL',  // 서울 통합
            'TYO': 'TYO',  // 도쿄 통합
            'OSA': 'OSA'   // 오사카 통합
        }
    },
    yanolja: {
        // 야놀자는 대문자 IATA 코드 사용
        transform: (code) => code.toUpperCase(),
        specialMappings: {
            'SEL': 'SEL',  // 서울 통합
            'TYO': 'TYO',  // 도쿄 통합
            'OSA': 'OSA'   // 오사카 통합
        }
    }
};

// 동적 코드 매핑 함수
function getMappedCode(originalCode, platformKey) {
    // airport mapping에서 해당 코드의 모든 codes 배열 가져오기
    const airportInfo = getAirportInfo(originalCode);
    if (!airportInfo || !airportInfo.codes) {
        return originalCode;
    }
    
    // 플랫폼별 변환 규칙 가져오기
    const rules = PLATFORM_CODE_RULES[platformKey];
    if (!rules) {
        return originalCode;
    }
    
    // 특별한 매핑이 있는지 먼저 확인
    if (rules.specialMappings[originalCode]) {
        return rules.specialMappings[originalCode];
    }
    
    // airport mapping의 codes 배열에서 적절한 코드 찾기
    for (const code of airportInfo.codes) {
        // 원본 코드와 동일한 경우 (IATA 코드 우선)
        if (code === originalCode) {
            const transformedCode = rules.transform(code);
            return transformedCode;
        }
    }
    
    // 원본 코드가 없으면 다른 코드들 중에서 찾기
    for (const code of airportInfo.codes) {
        const transformedCode = rules.transform(code);
        
        // 원본 코드와 변환된 코드가 다르면 (소문자/대문자 변환 등) 사용
        if (code !== transformedCode) {
            return transformedCode;
        }
    }
    
    // 변환이 필요없으면 첫 번째 코드 사용
    return airportInfo.codes[0];
}

// 익스피디아용 도시명 생성 함수
function getCityNameForExpedia(originalCode) {
    const airportInfo = getAirportInfo(originalCode);
    if (!airportInfo) {
        return originalCode;
    }
    return `${airportInfo.city} (${originalCode})`;
}

// 마이리얼트립용 도시명 생성 함수
function getCityNameForMyrealtrip(originalCode) {
    const airportInfo = getAirportInfo(originalCode);
    if (!airportInfo) {
        return originalCode;
    }
    return airportInfo.city;
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
