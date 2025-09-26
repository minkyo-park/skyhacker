// 공항/도시 코드 매핑 테이블
// 각 공항의 IATA 코드, 공항명, 도시명, 국가명, 그리고 각 플랫폼에서 사용되는 코드들을 매핑

const AIRPORT_MAPPING = {
    
        // 대한민국
        'ICN': { name: '인천', city: '서울', country: '한국', codes: ['ICN', 'SEL', 'sel', 'seoul', 'sela'], timezone: 'Asia/Seoul' },
        'GMP': { name: '김포', city: '서울', country: '한국', codes: ['GMP', 'SEL', 'sel', 'seoul', 'sela'], timezone: 'Asia/Seoul' },
        'CJU': { name: '제주', city: '제주', country: '한국', codes: ['CJU', 'jeju'], timezone: 'Asia/Seoul' },
        'PUS': { name: '김해', city: '부산', country: '한국', codes: ['PUS', 'busan'], timezone: 'Asia/Seoul' },
        'TAE': { name: '대구', city: '대구', country: '한국', codes: ['TAE', 'daegu'], timezone: 'Asia/Seoul' },
        'CJJ': { name: '청주', city: '청주', country: '한국', codes: ['CJJ', 'cheongju'], timezone: 'Asia/Seoul' },
        'MWX': { name: '무안', city: '광주', country: '한국', codes: ['MWX', 'gwangju'], timezone: 'Asia/Seoul' },
    
        // 일본
        'NRT': { name: '나리타', city: '도쿄', country: '일본', codes: ['NRT', 'TYO', 'tyo', 'tokyo'], timezone: 'Asia/Tokyo' },
        'HND': { name: '하네다', city: '도쿄', country: '일본', codes: ['HND', 'TYO', 'tyo', 'tokyo'], timezone: 'Asia/Tokyo' },
        'KIX': { name: '간사이', city: '오사카', country: '일본', codes: ['KIX', 'OSA', 'osa', 'osaka'], timezone: 'Asia/Tokyo' },
        'FUK': { name: '후쿠오카', city: '후쿠오카', country: '일본', codes: ['FUK', 'fukuoka'], timezone: 'Asia/Tokyo' },
        'CTS': { name: '신치토세', city: '삿포로', country: '일본', codes: ['CTS', 'sapporo'], timezone: 'Asia/Tokyo' },
        'OKA': { name: '나하', city: '오키나와', country: '일본', codes: ['OKA', 'okinawa'], timezone: 'Asia/Tokyo' },
        'NGO': { name: '주부', city: '나고야', country: '일본', codes: ['NGO', 'nagoya'], timezone: 'Asia/Tokyo' },
        'ITM': { name: '이타미', city: '오사카', country: '일본', codes: ['ITM', 'OSA', 'osa', 'osaka'], timezone: 'Asia/Tokyo' },
'SDJ': { name: '센다이', city: '센다이', country: '일본', codes: ['SDJ', 'sendai'], timezone: 'Asia/Tokyo' },
'HIJ': { name: '히로시마', city: '히로시마', country: '일본', codes: ['HIJ', 'hiroshima'], timezone: 'Asia/Tokyo' },
'KOJ': { name: '가고시마', city: '가고시마', country: '일본', codes: ['KOJ', 'kagoshima'], timezone: 'Asia/Tokyo' },
'UKB': { name: '고베', city: '오사카', country: '일본', codes: ['UKB', 'OSA', 'osa', 'osaka'], timezone: 'Asia/Tokyo' },

        // 중국
        'PEK': { name: '서우두', city: '베이징', country: '중국', codes: ['PEK', 'BJS', 'bjs', 'beijing'], timezone: 'Asia/Shanghai' },
        'PKX': { name: '다싱', city: '베이징', country: '중국', codes: ['PKX', 'BJS', 'bjs', 'beijing'], timezone: 'Asia/Shanghai' },
        'PVG': { name: '푸둥', city: '상하이', country: '중국', codes: ['PVG', 'SHA', 'sha', 'shanghai'], timezone: 'Asia/Shanghai' },
        'SHA': { name: '훙차오', city: '상하이', country: '중국', codes: ['SHA', 'sha', 'shanghai'], timezone: 'Asia/Shanghai' },
        'CAN': { name: '바이윈', city: '광저우', country: '중국', codes: ['CAN', 'guangzhou'], timezone: 'Asia/Shanghai' },
        'SZX': { name: '바오안', city: '선전', country: '중국', codes: ['SZX', 'shenzhen'], timezone: 'Asia/Shanghai' },
        'CTU': { name: '솽류', city: '청두', country: '중국', codes: ['CTU', 'TFU', 'tfu', 'chengdu'], timezone: 'Asia/Shanghai' },
'TFU': { name: '톈푸', city: '청두', country: '중국', codes: ['TFU', 'CTU', 'ctu', 'chengdu'], timezone: 'Asia/Shanghai' },
'CKG': { name: '장베이', city: '충칭', country: '중국', codes: ['CKG', 'chongqing'], timezone: 'Asia/Shanghai' },
'XIY': { name: '셴양', city: '시안', country: '중국', codes: ['XIY', 'xian'], timezone: 'Asia/Shanghai' },
'KMG': { name: '창수이', city: '쿤밍', country: '중국', codes: ['KMG', 'kunming'], timezone: 'Asia/Shanghai' },
'HGH': { name: '샤오산', city: '항저우', country: '중국', codes: ['HGH', 'hangzhou'], timezone: 'Asia/Shanghai' },
'NKG': { name: '루커우', city: '난징', country: '중국', codes: ['NKG', 'nanjing'], timezone: 'Asia/Shanghai' },
'WUH': { name: '톈허', city: '우한', country: '중국', codes: ['WUH', 'wuhan'], timezone: 'Asia/Shanghai' },
'CSX': { name: '황화', city: '창사', country: '중국', codes: ['CSX', 'changsha'], timezone: 'Asia/Shanghai' },
'XMN': { name: '가오치', city: '샤먼', country: '중국', codes: ['XMN', 'xiamen'], timezone: 'Asia/Shanghai' },
'TAO': { name: '자오둥', city: '칭다오', country: '중국', codes: ['TAO', 'qingdao'], timezone: 'Asia/Shanghai' },
        // 홍콩 / 마카오
        'HKG': { name: '첵랍콕', city: '홍콩', country: '홍콩', codes: ['HKG', 'hongkong'], timezone: 'Asia/Hong_Kong' },
        'MFM': { name: '마카오', city: '마카오', country: '마카오', codes: ['MFM', 'macau'], timezone: 'Asia/Macau' },
    
        // 대만
        'TPE': { name: '타오위안', city: '타이베이', country: '대만', codes: ['TPE', 'TSA', 'tsa', 'taipei'], timezone: 'Asia/Taipei' },
        'TSA': { name: '쑹산', city: '타이베이', country: '대만', codes: ['TSA', 'TPE', 'tpe', 'taipei'], timezone: 'Asia/Taipei' },
        'KHH': { name: '가오슝', city: '가오슝', country: '대만', codes: ['KHH', 'kaohsiung'], timezone: 'Asia/Taipei' },
        'RMQ': { name: '타이중', city: '타이중', country: '대만', codes: ['RMQ', 'taichung'], timezone: 'Asia/Taipei' },
        // 태국
        'BKK': { name: '수완나품', city: '방콕', country: '태국', codes: ['BKK', 'bangkok'], timezone: 'Asia/Bangkok' },
        'DMK': { name: '돈므앙', city: '방콕', country: '태국', codes: ['DMK', 'bangkok'], timezone: 'Asia/Bangkok' },
        'HKT': { name: '푸켓', city: '푸켓', country: '태국', codes: ['HKT', 'phuket'], timezone: 'Asia/Bangkok' },
        'CNX': { name: '치앙마이', city: '치앙마이', country: '태국', codes: ['CNX', 'chiangmai'], timezone: 'Asia/Bangkok' },
        'USM': { name: '사무이', city: '코사무이', country: '태국', codes: ['USM', 'samui'], timezone: 'Asia/Bangkok' },
        'KBV': { name: '끄라비', city: '끄라비', country: '태국', codes: ['KBV', 'krabi'], timezone: 'Asia/Bangkok' },

        // 베트남
        'HAN': { name: '노이바이', city: '하노이', country: '베트남', codes: ['HAN', 'hanoi'], timezone: 'Asia/Ho_Chi_Minh' },
        'SGN': { name: '탄손낫', city: '호치민', country: '베트남', codes: ['SGN', 'saigon', 'hochiminh'], timezone: 'Asia/Ho_Chi_Minh' },
        'DAD': { name: '다낭', city: '다낭', country: '베트남', codes: ['DAD', 'danang'], timezone: 'Asia/Ho_Chi_Minh' },
        'CXR': { name: '깜라인', city: '나트랑', country: '베트남', codes: ['CXR', 'nhatrang'], timezone: 'Asia/Ho_Chi_Minh' },
        'PQC': { name: '푸꾸옥', city: '푸꾸옥', country: '베트남', codes: ['PQC', 'phuquoc'], timezone: 'Asia/Ho_Chi_Minh' },
    
        // 필리핀
        'MNL': { name: '니노이 아키노', city: '마닐라', country: '필리핀', codes: ['MNL', 'manila'], timezone: 'Asia/Manila' },
        'CEB': { name: '막탄', city: '세부', country: '필리핀', codes: ['CEB', 'cebu'], timezone: 'Asia/Manila' },
        'KLO': { name: '칼리보', city: '보라카이', country: '필리핀', codes: ['KLO', 'boracay'], timezone: 'Asia/Manila' },
        'MPH': { name: '카티클란', city: '보라카이', country: '필리핀', codes: ['MPH', 'boracay'], timezone: 'Asia/Manila' },
    
        // 말레이시아
        'KUL': { name: '쿠알라룸푸르', city: '쿠알라룸푸르', country: '말레이시아', codes: ['KUL', 'kualalumpur'], timezone: 'Asia/Kuala_Lumpur' },
        'BKI': { name: '코타키나발루', city: '코타키나발루', country: '말레이시아', codes: ['BKI', 'kotakinabalu'], timezone: 'Asia/Kuala_Lumpur' },
    
        // 싱가포르
        'SIN': { name: '창이', city: '싱가포르', country: '싱가포르', codes: ['SIN', 'singapore'], timezone: 'Asia/Singapore' },
    
        // 인도네시아
        'CGK': { name: '수카르노하타', city: '자카르타', country: '인도네시아', codes: ['CGK', 'jakarta'], timezone: 'Asia/Jakarta' },
        'DPS': { name: '응우라라이', city: '발리', country: '인도네시아', codes: ['DPS', 'bali'], timezone: 'Asia/Makassar' },
        'SUB': { name: '주안다', city: '수라바야', country: '인도네시아', codes: ['SUB', 'surabaya'], timezone: 'Asia/Jakarta' },
'KNO': { name: '쿠알라나무', city: '메단', country: '인도네시아', codes: ['KNO', 'medan'], timezone: 'Asia/Jakarta' },
'UPG': { name: '하사누딘', city: '마카사르', country: '인도네시아', codes: ['UPG', 'makassar'], timezone: 'Asia/Makassar' },

        // 캄보디아
        'PNH': { name: '프놈펜', city: '프놈펜', country: '캄보디아', codes: ['PNH', 'phnompenh'], timezone: 'Asia/Phnom_Penh' },
        'REP': { name: '씨엠립', city: '씨엠립', country: '캄보디아', codes: ['REP', 'siemreap'], timezone: 'Asia/Phnom_Penh' },
    
        // 라오스
        'VTE': { name: '비엔티안', city: '비엔티안', country: '라오스', codes: ['VTE', 'vientiane'], timezone: 'Asia/Vientiane' },
    'LPQ': { name: '루앙프라방', city: '루앙프라방', country: '라오스', codes: ['LPQ', 'luangprabang'], timezone: 'Asia/Vientiane' },

        // 인도
        'DEL': { name: '인디라 간디', city: '뉴델리', country: '인도', codes: ['DEL', 'delhi'], timezone: 'Asia/Kolkata' },
        'BOM': { name: '차트라파티 시바지', city: '뭄바이', country: '인도', codes: ['BOM', 'mumbai'], timezone: 'Asia/Kolkata' },
    
        // 몽골
        'ULN': { name: '칭기즈 칸', city: '울란바토르', country: '몽골', codes: ['ULN', 'ulaanbaatar'], timezone: 'Asia/Ulaanbaatar' },
    
        // 몰디브
        'MLE': { name: '말레', city: '말레', country: '몰디브', codes: ['MLE', 'male'], timezone: 'Indian/Maldives' },
    
        // 호주
        'SYD': { name: '시드니', city: '시드니', country: '호주', codes: ['SYD', 'sydney'], timezone: 'Australia/Sydney' },
        'MEL': { name: '멜버른', city: '멜버른', country: '호주', codes: ['MEL', 'melbourne'], timezone: 'Australia/Melbourne' },
        'BNE': { name: '브리즈번', city: '브리즈번', country: '호주', codes: ['BNE', 'brisbane'], timezone: 'Australia/Brisbane' },
    'PER': { name: '퍼스', city: '퍼스', country: '호주', codes: ['PER', 'perth'], timezone: 'Australia/Perth' },
'ADL': { name: '애들레이드', city: '애들레이드', country: '호주', codes: ['ADL', 'adelaide'], timezone: 'Australia/Adelaide' },
'OOL': { name: '골드코스트', city: '골드코스트', country: '호주', codes: ['OOL', 'goldcoast'], timezone: 'Australia/Brisbane' },
'CNS': { name: '케언즈', city: '케언즈', country: '호주', codes: ['CNS', 'cairns'], timezone: 'Australia/Brisbane' },

        // 뉴질랜드
        'AKL': { name: '오클랜드', city: '오클랜드', country: '뉴질랜드', codes: ['AKL', 'auckland'], timezone: 'Pacific/Auckland' },
    
        // 미국 (본토)
        'LAX': { name: '로스앤젤레스', city: '로스앤젤레스', country: '미국', codes: ['LAX', 'losangeles'], timezone: 'America/Los_Angeles' },
        'SFO': { name: '샌프란시스코', city: '샌프란시스코', country: '미국', codes: ['SFO', 'sanfrancisco'], timezone: 'America/Los_Angeles' },
        'SEA': { name: '시애틀', city: '시애틀', country: '미국', codes: ['SEA', 'seattle'], timezone: 'America/Los_Angeles' },
        'LAS': { name: '해리 리드', city: '라스베이거스', country: '미국', codes: ['LAS', 'lasvegas'], timezone: 'America/Los_Angeles' },
        'HNL': { name: '호놀룰루', city: '호놀룰루', country: '미국', codes: ['HNL', 'honolulu'], timezone: 'Pacific/Honolulu' },
        'JFK': { name: '존 F 케네디', city: '뉴욕', country: '미국', codes: ['JFK', 'NYC', 'nyc', 'newyork'], timezone: 'America/New_York' },
        'EWR': { name: '뉴어크', city: '뉴욕', country: '미국', codes: ['EWR', 'NYC', 'nyc', 'newyork'], timezone: 'America/New_York' },
        'ORD': { name: '오헤어', city: '시카고', country: '미국', codes: ['ORD', 'chicago'], timezone: 'America/Chicago' },
        'ATL': { name: '하츠필드 잭슨', city: '애틀랜타', country: '미국', codes: ['ATL', 'atlanta'], timezone: 'America/New_York' },
        'IAD': { name: '덜레스', city: '워싱턴', country: '미국', codes: ['IAD', 'washington'], timezone: 'America/New_York' },
        'DFW': { name: '댈러스 포트워스', city: '댈러스', country: '미국', codes: ['DFW', 'dallas'], timezone: 'America/Chicago' },
'DEN': { name: '덴버', city: '덴버', country: '미국', codes: ['DEN', 'denver'], timezone: 'America/Denver' },
'MIA': { name: '마이애미', city: '마이애미', country: '미국', codes: ['MIA', 'miami'], timezone: 'America/New_York' },
'IAH': { name: '조지 부시', city: '휴스턴', country: '미국', codes: ['IAH', 'houston'], timezone: 'America/Chicago' },
'PHX': { name: '스카이 하버', city: '피닉스', country: '미국', codes: ['PHX', 'phoenix'], timezone: 'America/Phoenix' },
'BOS': { name: '로건', city: '보스턴', country: '미국', codes: ['BOS', 'boston'], timezone: 'America/New_York' },
'CLT': { name: '더글러스', city: '샬럿', country: '미국', codes: ['CLT', 'charlotte'], timezone: 'America/New_York' },
'MCO': { name: '올랜도', city: '올랜도', country: '미국', codes: ['MCO', 'orlando'], timezone: 'America/New_York' },
'LGA': { name: '라과디아', city: '뉴욕', country: '미국', codes: ['LGA', 'NYC', 'nyc', 'newyork'], timezone: 'America/New_York' },
'DCA': { name: '레이건', city: '워싱턴', country: '미국', codes: ['DCA', 'washington'], timezone: 'America/New_York' },

        // 미국 (태평양 지역)
        'GUM': { name: '괌', city: '괌', country: '미국', codes: ['GUM', 'guam'], timezone: 'Pacific/Guam' },
        'SPN': { name: '사이판', city: '사이판', country: '미국', codes: ['SPN', 'saipan'], timezone: 'Pacific/Guam' },
    
        // 캐나다
        'YVR': { name: '밴쿠버', city: '밴쿠버', country: '캐나다', codes: ['YVR', 'vancouver'], timezone: 'America/Vancouver' },
        'YYZ': { name: '피어슨', city: '토론토', country: '캐나다', codes: ['YYZ', 'toronto'], timezone: 'America/Toronto' },
    'YUL': { name: '트뤼도', city: '몬트리올', country: '캐나다', codes: ['YUL', 'montreal'], timezone: 'America/Toronto' },
'YYC': { name: '캘거리', city: '캘거리', country: '캐나다', codes: ['YYC', 'calgary'], timezone: 'America/Edmonton' },

        // 영국
        'LHR': { name: '히드로', city: '런던', country: '영국', codes: ['LHR', 'LON', 'lon', 'london'], timezone: 'Europe/London' },
        'LGW': { name: '개트윅', city: '런던', country: '영국', codes: ['LGW', 'LON', 'lon', 'london'], timezone: 'Europe/London' },
    'MAN': { name: '맨체스터', city: '맨체스터', country: '영국', codes: ['MAN', 'manchester'], timezone: 'Europe/London' },
'STN': { name: '스탠스테드', city: '런던', country: '영국', codes: ['STN', 'LON', 'lon', 'london'], timezone: 'Europe/London' },
'LTN': { name: '루턴', city: '런던', country: '영국', codes: ['LTN', 'LON', 'lon', 'london'], timezone: 'Europe/London' },
'LCY': { name: '시티', city: '런던', country: '영국', codes: ['LCY', 'LON', 'lon', 'london'], timezone: 'Europe/London' },

        // 프랑스
        'CDG': { name: '샤를 드골', city: '파리', country: '프랑스', codes: ['CDG', 'PAR', 'par', 'paris'], timezone: 'Europe/Paris' },
        'ORY': { name: '오를리', city: '파리', country: '프랑스', codes: ['ORY', 'PAR', 'par', 'paris'], timezone: 'Europe/Paris' },
    'NCE': { name: '니스', city: '니스', country: '프랑스', codes: ['NCE', 'nice'], timezone: 'Europe/Paris' },

        // 독일
        'FRA': { name: '프랑크푸르트', city: '프랑크푸르트', country: '독일', codes: ['FRA', 'frankfurt'], timezone: 'Europe/Berlin' },
        'MUC': { name: '뮌헨', city: '뮌헨', country: '독일', codes: ['MUC', 'munich'], timezone: 'Europe/Berlin' },
    'BER': { name: '브란덴부르크', city: '베를린', country: '독일', codes: ['BER', 'berlin'], timezone: 'Europe/Berlin' },
'DUS': { name: '뒤셀도르프', city: '뒤셀도르프', country: '독일', codes: ['DUS', 'dusseldorf'], timezone: 'Europe/Berlin' },
'HAM': { name: '함부르크', city: '함부르크', country: '독일', codes: ['HAM', 'hamburg'], timezone: 'Europe/Berlin' },

        // 네덜란드
        'AMS': { name: '스키폴', city: '암스테르담', country: '네덜란드', codes: ['AMS', 'amsterdam'], timezone: 'Europe/Amsterdam' },
    
        // 스위스
        'ZRH': { name: '취리히', city: '취리히', country: '스위스', codes: ['ZRH', 'zurich'], timezone: 'Europe/Zurich' },
    'GVA': { name: '제네바', city: '제네바', country: '스위스', codes: ['GVA', 'geneva'], timezone: 'Europe/Zurich' },
        // 오스트리아
        'VIE': { name: '빈', city: '빈', country: '오스트리아', codes: ['VIE', 'vienna'], timezone: 'Europe/Vienna' },
    
        // 체코
        'PRG': { name: '프라하', city: '프라하', country: '체코', codes: ['PRG', 'prague'], timezone: 'Europe/Prague' },
    
        // 이탈리아
        'FCO': { name: '피우미치노', city: '로마', country: '이탈리아', codes: ['FCO', 'ROM', 'rom', 'rome'], timezone: 'Europe/Rome' },
        'MXP': { name: '말펜사', city: '밀라노', country: '이탈리아', codes: ['MXP', 'MIL', 'mil', 'milan'], timezone: 'Europe/Rome' },
    'CIA': { name: '치암피노', city: '로마', country: '이탈리아', codes: ['CIA', 'ROM', 'rom', 'rome'], timezone: 'Europe/Rome' },
'LIN': { name: '리나테', city: '밀라노', country: '이탈리아', codes: ['LIN', 'MIL', 'mil', 'milan'], timezone: 'Europe/Rome' },
'BGY': { name: '오리오 알 세리오', city: '밀라노', country: '이탈리아', codes: ['BGY', 'MIL', 'mil', 'milan'], timezone: 'Europe/Rome' },
'VCE': { name: '마르코 폴로', city: '베네치아', country: '이탈리아', codes: ['VCE', 'venice'], timezone: 'Europe/Rome' },
'NAP': { name: '카포디키노', city: '나폴리', country: '이탈리아', codes: ['NAP', 'naples'], timezone: 'Europe/Rome' },

        // 스페인
        'MAD': { name: '바라하스', city: '마드리드', country: '스페인', codes: ['MAD', 'madrid'], timezone: 'Europe/Madrid' },
        'BCN': { name: '바르셀로나', city: '바르셀로나', country: '스페인', codes: ['BCN', 'barcelona'], timezone: 'Europe/Madrid' },
        'PMI': { name: '팔마 데 마요르카', city: '팔마 데 마요르카', country: '스페인', codes: ['PMI', 'mallorca'], timezone: 'Europe/Madrid' },
'AGP': { name: '말라가', city: '말라가', country: '스페인', codes: ['AGP', 'malaga'], timezone: 'Europe/Madrid' },
'ALC': { name: '알리칸테', city: '알리칸테', country: '스페인', codes: ['ALC', 'alicante'], timezone: 'Europe/Madrid' },
'LPA': { name: '그란 카나리아', city: '라스 팔마스', country: '스페인', codes: ['LPA', 'laspalmas', 'gran canaria'], timezone: 'Atlantic/Canary' },
        // 그리스
        'ATH': { name: '아테네', city: '아테네', country: '그리스', codes: ['ATH', 'athens'], timezone: 'Europe/Athens' },
    
        // 러시아
        'SVO': { name: '셰레메티예보', city: '모스크바', country: '러시아', codes: ['SVO', 'MOW', 'mow', 'moscow'], timezone: 'Europe/Moscow' },
    
        // 터키
        'IST': { name: '이스탄불', city: '이스탄불', country: '터키', codes: ['IST', 'istanbul'], timezone: 'Europe/Istanbul' },
    'SAW': { name: '사비하 괵첸', city: '이스탄불', country: '터키', codes: ['SAW', 'istanbul'], timezone: 'Europe/Istanbul' },
'ESB': { name: '에센보아', city: '앙카라', country: '터키', codes: ['ESB', 'ankara'], timezone: 'Europe/Istanbul' },
'AYT': { name: '안탈리아', city: '안탈리아', country: '터키', codes: ['AYT', 'antalya'], timezone: 'Europe/Istanbul' },
'ADB': { name: '아드난 멘데레스', city: '이즈미르', country: '터키', codes: ['ADB', 'izmir'], timezone: 'Europe/Istanbul' },

        // 아랍에미리트
        'DXB': { name: '두바이', city: '두바이', country: '아랍에미리트', codes: ['DXB', 'dubai'], timezone: 'Asia/Dubai' },
        'AUH': { name: '아부다비', city: '아부다비', country: '아랍에미리트', codes: ['AUH', 'abudhabi'], timezone: 'Asia/Dubai' },
    
        // 카타르
        'DOH': { name: '하마드', city: '도하', country: '카타르', codes: ['DOH', 'doha'], timezone: 'Asia/Qatar' },
    
        // 이집트
        'CAI': { name: '카이로', city: '카이로', country: '이집트', codes: ['CAI', 'cairo'], timezone: 'Africa/Cairo' },
    
        // 팔라우
        'ROR': { name: '코로르', city: '팔라우', country: '팔라우', codes: ['ROR', 'palau'], timezone: 'Pacific/Palau' }
    
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
    return results; // 모든 결과 반환
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
