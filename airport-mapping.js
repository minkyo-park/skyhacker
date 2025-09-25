// 공항/도시 코드 매핑 테이블
// 각 공항의 IATA 코드, 공항명, 도시명, 국가명, 그리고 각 플랫폼에서 사용되는 코드들을 매핑

const AIRPORT_MAPPING = {
    // 한국
    'ICN': { 
        name: '인천', 
        city: '서울', 
        country: '한국', 
        codes: ['ICN', 'SEL', 'sel', 'sela'],
        timezone: 'Asia/Seoul'
    },
    'GMP': { 
        name: '김포', 
        city: '서울', 
        country: '한국', 
        codes: ['GMP', 'SEL', 'sel', 'sela'],
        timezone: 'Asia/Seoul'
    },
    'CJU': { 
        name: '제주', 
        city: '제주', 
        country: '한국', 
        codes: ['CJU', 'jeju'],
        timezone: 'Asia/Seoul'
    },
    'PUS': { 
        name: '김해', 
        city: '부산', 
        country: '한국', 
        codes: ['PUS', 'busan'],
        timezone: 'Asia/Seoul'
    },
    
    // 일본
    'NRT': { 
        name: '나리타', 
        city: '도쿄', 
        country: '일본', 
        codes: ['NRT', 'TYO', 'tyo', 'ctao'],
        timezone: 'Asia/Tokyo'
    },
    'HND': { 
        name: '하네다', 
        city: '도쿄', 
        country: '일본', 
        codes: ['HND', 'TYO', 'tyo'],
        timezone: 'Asia/Tokyo'
    },
    'KIX': { 
        name: '간사이', 
        city: '오사카', 
        country: '일본', 
        codes: ['KIX', 'OSA', 'osa'],
        timezone: 'Asia/Tokyo'
    },
    'FUK': { 
        name: '후쿠오카', 
        city: '후쿠오카', 
        country: '일본', 
        codes: ['FUK', 'fuk'],
        timezone: 'Asia/Tokyo'
    },
    'CTS': { 
        name: '신치토세', 
        city: '삿포로', 
        country: '일본', 
        codes: ['CTS', 'sapporo'],
        timezone: 'Asia/Tokyo'
    },
    
    // 태국
    'BKK': { 
        name: '수완나품', 
        city: '방콕', 
        country: '태국', 
        codes: ['BKK', 'bangkok'],
        timezone: 'Asia/Bangkok'
    },
    'DMK': { 
        name: '돈므앙', 
        city: '방콕', 
        country: '태국', 
        codes: ['DMK', 'bangkok'],
        timezone: 'Asia/Bangkok'
    },
    
    // 중국
    'PVG': { 
        name: '푸동', 
        city: '상하이', 
        country: '중국', 
        codes: ['PVG', 'SHA', 'shanghai'],
        timezone: 'Asia/Shanghai'
    },
    'PEK': { 
        name: '수도', 
        city: '베이징', 
        country: '중국', 
        codes: ['PEK', 'BJS', 'beijing'],
        timezone: 'Asia/Shanghai'
    },
    'CAN': { 
        name: '바이윈', 
        city: '광저우', 
        country: '중국', 
        codes: ['CAN', 'guangzhou'],
        timezone: 'Asia/Shanghai'
    },
    'SZX': { 
        name: '바오안', 
        city: '선전', 
        country: '중국', 
        codes: ['SZX', 'shenzhen'],
        timezone: 'Asia/Shanghai'
    },
    
    // 대만
    'TPE': { 
        name: '타오위안', 
        city: '타이베이', 
        country: '대만', 
        codes: ['TPE', 'taipei'],
        timezone: 'Asia/Taipei'
    },
    'KHH': { 
        name: '샤오강', 
        city: '가오슝', 
        country: '대만', 
        codes: ['KHH', 'kaohsiung'],
        timezone: 'Asia/Taipei'
    },
    
    // 싱가포르
    'SIN': { 
        name: '창이', 
        city: '싱가포르', 
        country: '싱가포르', 
        codes: ['SIN', 'singapore'],
        timezone: 'Asia/Singapore'
    },
    
    // 홍콩
    'HKG': { 
        name: '첵랍콕', 
        city: '홍콩', 
        country: '홍콩', 
        codes: ['HKG', 'hongkong'],
        timezone: 'Asia/Hong_Kong'
    },
    
    // 베트남
    'SGN': { 
        name: '떤선녓', 
        city: '호치민', 
        country: '베트남', 
        codes: ['SGN', 'hochiminh'],
        timezone: 'Asia/Ho_Chi_Minh'
    },
    'HAN': { 
        name: '노이바이', 
        city: '하노이', 
        country: '베트남', 
        codes: ['HAN', 'hanoi'],
        timezone: 'Asia/Ho_Chi_Minh'
    },
    
    // 필리핀
    'MNL': { 
        name: '니노이 아키노', 
        city: '마닐라', 
        country: '필리핀', 
        codes: ['MNL', 'manila'],
        timezone: 'Asia/Manila'
    },
    'CEB': { 
        name: '막탄세부', 
        city: '세부', 
        country: '필리핀', 
        codes: ['CEB', 'cebu'],
        timezone: 'Asia/Manila'
    },
    
    // 인도네시아
    'CGK': { 
        name: '수카르노 하타', 
        city: '자카르타', 
        country: '인도네시아', 
        codes: ['CGK', 'jakarta'],
        timezone: 'Asia/Jakarta'
    },
    'DPS': { 
        name: '응우라라이', 
        city: '덴파사르', 
        country: '인도네시아', 
        codes: ['DPS', 'bali'],
        timezone: 'Asia/Jakarta'
    },
    
    // 말레이시아
    'KUL': { 
        name: '쿠알라룸푸르', 
        city: '쿠알라룸푸르', 
        country: '말레이시아', 
        codes: ['KUL', 'kualalumpur'],
        timezone: 'Asia/Kuala_Lumpur'
    },
    'PEN': { 
        name: '페낭', 
        city: '페낭', 
        country: '말레이시아', 
        codes: ['PEN', 'penang'],
        timezone: 'Asia/Kuala_Lumpur'
    },
    
    // 미국
    'LAX': { 
        name: '로스앤젤레스', 
        city: '로스앤젤레스', 
        country: '미국', 
        codes: ['LAX', 'losangeles'],
        timezone: 'America/Los_Angeles'
    },
    'JFK': { 
        name: '존 F. 케네디', 
        city: '뉴욕', 
        country: '미국', 
        codes: ['JFK', 'newyork'],
        timezone: 'America/New_York'
    },
    'SFO': { 
        name: '샌프란시스코', 
        city: '샌프란시스코', 
        country: '미국', 
        codes: ['SFO', 'sanfrancisco'],
        timezone: 'America/Los_Angeles'
    },
    'LAS': { 
        name: '맥카란', 
        city: '라스베가스', 
        country: '미국', 
        codes: ['LAS', 'lasvegas'],
        timezone: 'America/Los_Angeles'
    },
    
    // 유럽
    'LHR': { 
        name: '히드로', 
        city: '런던', 
        country: '영국', 
        codes: ['LHR', 'london'],
        timezone: 'Europe/London'
    },
    'CDG': { 
        name: '샤를 드 골', 
        city: '파리', 
        country: '프랑스', 
        codes: ['CDG', 'paris'],
        timezone: 'Europe/Paris'
    },
    'FRA': { 
        name: '프랑크푸르트', 
        city: '프랑크푸르트', 
        country: '독일', 
        codes: ['FRA', 'frankfurt'],
        timezone: 'Europe/Berlin'
    },
    'AMS': { 
        name: '스키폴', 
        city: '암스테르담', 
        country: '네덜란드', 
        codes: ['AMS', 'amsterdam'],
        timezone: 'Europe/Amsterdam'
    },
    'FCO': { 
        name: '레오나르도 다 빈치', 
        city: '로마', 
        country: '이탈리아', 
        codes: ['FCO', 'rome'],
        timezone: 'Europe/Rome'
    },
    'MAD': { 
        name: '아돌포 수아레스', 
        city: '마드리드', 
        country: '스페인', 
        codes: ['MAD', 'madrid'],
        timezone: 'Europe/Madrid'
    },
    
    // 오세아니아
    'SYD': { 
        name: '킹스포드 스미스', 
        city: '시드니', 
        country: '호주', 
        codes: ['SYD', 'sydney'],
        timezone: 'Australia/Sydney'
    },
    'MEL': { 
        name: '멜버른', 
        city: '멜버른', 
        country: '호주', 
        codes: ['MEL', 'melbourne'],
        timezone: 'Australia/Melbourne'
    },
    'AKL': { 
        name: '오클랜드', 
        city: '오클랜드', 
        country: '뉴질랜드', 
        codes: ['AKL', 'auckland'],
        timezone: 'Pacific/Auckland'
    }
};

// 공항 검색 함수
function searchAirports(query) {
    console.log('searchAirports 호출됨:', query);
    const results = [];
    const lowerQuery = query.toLowerCase();
    
    Object.entries(AIRPORT_MAPPING).forEach(([code, info]) => {
        // 코드로 검색
        if (code.toLowerCase().includes(lowerQuery) || 
            info.codes.some(c => c.toLowerCase().includes(lowerQuery))) {
            results.push({
                code: code,
                name: info.name,
                city: info.city,
                country: info.country,
                timezone: info.timezone
            });
        }
        // 이름으로 검색
        else if (info.name.includes(query) || 
                 info.city.includes(query) ||
                 info.country.includes(query)) {
            results.push({
                code: code,
                name: info.name,
                city: info.city,
                country: info.country,
                timezone: info.timezone
            });
        }
    });
    
    console.log('searchAirports 결과:', results);
    return results.slice(0, 8); // 최대 8개 제안
}

// 공항 코드 검증 함수
function isValidAirportCode(code) {
    return AIRPORT_MAPPING.hasOwnProperty(code);
}

// 공항 정보 가져오기 함수
function getAirportInfo(code) {
    return AIRPORT_MAPPING[code] || null;
}

// 입력값에서 공항 코드 추출 및 유효성 검증
function extractAndValidateAirportCode(input) {
    if (!input || typeof input !== 'string') {
        console.log('extractAndValidateAirportCode: 입력값이 없거나 문자열이 아님', input);
        return null;
    }
    
    // 입력값 정리 (괄호 안의 코드 추출)
    const cleanInput = input.trim();
    console.log('extractAndValidateAirportCode: 정리된 입력값', cleanInput);
    
    // 괄호 안의 코드가 있는지 확인 (예: "서울 (ICN)")
    const codeMatch = cleanInput.match(/\(([A-Z]{3})\)$/);
    if (codeMatch) {
        const code = codeMatch[1].toUpperCase();
        console.log('extractAndValidateAirportCode: 괄호에서 추출한 코드', code);
        if (isValidAirportCode(code)) {
            console.log('extractAndValidateAirportCode: 유효한 코드 반환', code);
            return code;
        }
    }
    
    // 괄호가 없으면 전체 입력값을 코드로 간주
    if (cleanInput.length === 3 && /^[A-Z]{3}$/i.test(cleanInput)) {
        const code = cleanInput.toUpperCase();
        console.log('extractAndValidateAirportCode: 3자리 코드로 인식', code);
        if (isValidAirportCode(code)) {
            console.log('extractAndValidateAirportCode: 유효한 3자리 코드 반환', code);
            return code;
        }
    }
    
    // 검색을 통해 유효한 공항 찾기
    const suggestions = searchAirports(cleanInput);
    console.log('extractAndValidateAirportCode: 검색 결과', suggestions);
    if (suggestions.length > 0) {
        console.log('extractAndValidateAirportCode: 검색 결과에서 첫 번째 반환', suggestions[0].code);
        return suggestions[0].code;
    }
    
    console.log('extractAndValidateAirportCode: 유효하지 않은 입력', cleanInput);
    return null; // 유효하지 않은 입력
}
