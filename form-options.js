// 폼 옵션 및 설정 데이터
// 인원 수, 좌석 클래스, 날짜 옵션 등의 설정 정보

// 인원 수 옵션
const PASSENGER_OPTIONS = [
    { value: '1', label: '성인 1명', max: 9 },
    { value: '2', label: '성인 2명', max: 9 },
    { value: '3', label: '성인 3명', max: 9 },
    { value: '4', label: '성인 4명', max: 9 },
    { value: '5', label: '성인 5명', max: 9 },
    { value: '6', label: '성인 6명', max: 9 },
    { value: '7', label: '성인 7명', max: 9 },
    { value: '8', label: '성인 8명', max: 9 },
    { value: '9', label: '성인 9명', max: 9 }
];

// 좌석 클래스 옵션
const CABIN_CLASS_OPTIONS = [
    { 
        value: 'economy', 
        label: '이코노미', 
        description: '기본 좌석 클래스',
        icon: '✈️'
    },
    { 
        value: 'business', 
        label: '비즈니스', 
        description: '프리미엄 좌석 클래스',
        icon: '🛫'
    },
    { 
        value: 'first', 
        label: '퍼스트', 
        description: '최고급 좌석 클래스',
        icon: '✈️'
    }
];

// 여행 유형 옵션
const TRIP_TYPE_OPTIONS = [
    { value: 'roundtrip', label: '왕복', description: '출발지로 돌아오는 여행' },
    { value: 'oneway', label: '편도', description: '단방향 여행' },
    { value: 'multi', label: '다구간', description: '여러 구간을 포함한 여행' }
];

// 정렬 옵션
const SORT_OPTIONS = [
    { value: 'price', label: '가격순', description: '가장 저렴한 항공권부터' },
    { value: 'duration', label: '시간순', description: '가장 빠른 항공권부터' },
    { value: 'departure', label: '출발시간순', description: '출발 시간 순서대로' },
    { value: 'arrival', label: '도착시간순', description: '도착 시간 순서대로' }
];

// 날짜 관련 설정
const DATE_SETTINGS = {
    // 기본 날짜 설정 (오늘부터)
    defaultDaysFromToday: {
        departure: 1,    // 출발일: 내일
        return: 7        // 귀국일: 1주일 후
    },
    
    // 날짜 제한
    minDaysFromToday: 0,     // 최소: 오늘
    maxDaysFromToday: 365,   // 최대: 1년 후
    
    // 여행 기간 제한
    minTripDuration: 1,      // 최소 여행 기간: 1일
    maxTripDuration: 365,    // 최대 여행 기간: 1년
    
    // 인기 여행 기간 (일)
    popularDurations: [3, 5, 7, 10, 14, 21, 30]
};

// 폼 검증 규칙
const VALIDATION_RULES = {
    // 공항 코드 검증
    airport: {
        required: true,
        message: '출발지와 도착지를 올바르게 입력해주세요.',
        custom: (departure, arrival) => {
            // 공항 코드가 비어있는 경우 처리
            if (!departure || !arrival) {
                if (!departure) return '유효한 출발지를 입력해주세요.';
                if (!arrival) return '유효한 도착지를 입력해주세요.';
                return null;
            }
            
            // 공항 코드 유효성 검증
            const departureCode = extractAndValidateAirportCode(departure);
            const arrivalCode = extractAndValidateAirportCode(arrival);
            
            if (!departureCode) {
                return '유효한 출발지를 입력해주세요.';
            }
            if (!arrivalCode) {
                return '유효한 도착지를 입력해주세요.';
            }
            if (departureCode === arrivalCode) {
                return '출발지와 도착지는 같을 수 없습니다.';
            }
            return null;
        }
    },
    
    // 날짜 검증
    date: {
        required: true,
        message: '출발일과 귀국일을 선택해주세요.',
        custom: (departureDate, returnDate) => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            const depDate = new Date(departureDate);
            const retDate = new Date(returnDate);
            
            if (depDate < today) {
                return '출발일은 오늘 이후로 설정해주세요.';
            }
            
            if (retDate <= depDate) {
                return '귀국일은 출발일 이후로 설정해주세요.';
            }
            
            const diffDays = Math.ceil((retDate - depDate) / (1000 * 60 * 60 * 24));
            if (diffDays > DATE_SETTINGS.maxTripDuration) {
                return `여행 기간은 최대 ${DATE_SETTINGS.maxTripDuration}일까지 가능합니다.`;
            }
            
            return null;
        }
    },
    
    // 인원 검증
    passengers: {
        required: true,
        min: 1,
        max: 9,
        message: '인원은 1명 이상 9명 이하로 설정해주세요.'
    }
};

// 폼 기본값 설정
const DEFAULT_FORM_VALUES = {
    departure: '',
    arrival: '',
    departureDate: '',
    returnDate: '',
    passengers: '1',
    cabinClass: 'economy',
    tripType: 'roundtrip'
};

// 폼 상태 관리
class FormState {
    constructor() {
        this.reset();
    }
    
    reset() {
        this.values = { ...DEFAULT_FORM_VALUES };
        this.errors = {};
        this.isValid = false;
        this.isDirty = false;
    }
    
    setValue(field, value) {
        this.values[field] = value;
        this.isDirty = true;
        this.validate();
    }
    
    getValue(field) {
        return this.values[field];
    }
    
    validate() {
        this.errors = {};
        
        // 공항 검증
        const airportError = VALIDATION_RULES.airport.custom(
            this.values.departure, 
            this.values.arrival
        );
        if (airportError) {
            this.errors.airport = airportError;
        }
        
        // 날짜 검증
        const dateError = VALIDATION_RULES.date.custom(
            this.values.departureDate,
            this.values.returnDate
        );
        if (dateError) {
            this.errors.date = dateError;
        }
        
        // 인원 검증
        const passengers = parseInt(this.values.passengers);
        if (passengers < VALIDATION_RULES.passengers.min || 
            passengers > VALIDATION_RULES.passengers.max) {
            this.errors.passengers = VALIDATION_RULES.passengers.message;
        }
        
        this.isValid = Object.keys(this.errors).length === 0;
        return this.isValid;
    }
    
    getErrors() {
        return this.errors;
    }
    
    hasError(field) {
        return !!this.errors[field];
    }
    
    getError(field) {
        return this.errors[field] || '';
    }
}

// 날짜 유틸리티 함수들
const DateUtils = {
    // 오늘 날짜
    today: () => new Date(),
    
    // N일 후 날짜
    daysFromToday: (days) => {
        const date = new Date();
        date.setDate(date.getDate() + days);
        return date;
    },
    
    // 날짜를 YYYY-MM-DD 형식으로 변환
    formatDate: (date) => {
        return date.toISOString().split('T')[0];
    },
    
    // 날짜 차이 계산 (일 단위)
    daysDifference: (date1, date2) => {
        const diffTime = Math.abs(date2 - date1);
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    },
    
    // 인기 여행 기간 날짜 생성
    getPopularReturnDates: (departureDate) => {
        const depDate = new Date(departureDate);
        return DATE_SETTINGS.popularDurations.map(days => {
            const returnDate = new Date(depDate);
            returnDate.setDate(returnDate.getDate() + days);
            return {
                days: days,
                date: this.formatDate(returnDate),
                label: `${days}일 후`
            };
        });
    }
};

// 폼 옵션 생성 함수들
function createPassengerOptions() {
    return PASSENGER_OPTIONS.map(option => 
        `<option value="${option.value}">${option.label}</option>`
    ).join('');
}

function createCabinClassOptions() {
    return CABIN_CLASS_OPTIONS.map(option => 
        `<option value="${option.value}">${option.icon} ${option.label}</option>`
    ).join('');
}

function createTripTypeOptions() {
    return TRIP_TYPE_OPTIONS.map(option => 
        `<option value="${option.value}">${option.label}</option>`
    ).join('');
}

function createSortOptions() {
    return SORT_OPTIONS.map(option => 
        `<option value="${option.value}">${option.label}</option>`
    ).join('');
}

// 폼 초기화 함수
function initializeFormDefaults() {
    const departureDate = DateUtils.formatDate(DateUtils.daysFromToday(DATE_SETTINGS.defaultDaysFromToday.departure));
    const returnDate = DateUtils.formatDate(DateUtils.daysFromToday(DATE_SETTINGS.defaultDaysFromToday.return));
    
    return {
        departureDate: departureDate,
        returnDate: returnDate,
        passengers: DEFAULT_FORM_VALUES.passengers,
        cabinClass: DEFAULT_FORM_VALUES.cabinClass
    };
}

// 폼 데이터 수집 함수
function collectFormData(formElement) {
    const formData = new FormData(formElement);
    return {
        departure: formElement.querySelector('#departure').dataset.code || formElement.querySelector('#departure').value,
        arrival: formElement.querySelector('#arrival').dataset.code || formElement.querySelector('#arrival').value,
        departureDate: formElement.querySelector('#departureDate').value,
        returnDate: formElement.querySelector('#returnDate').value,
        passengers: formElement.querySelector('#passengers').value,
        cabinClass: formElement.querySelector('#cabinClass').value
    };
}

// 폼 데이터 설정 함수
function setFormData(formElement, data) {
    const departureInput = formElement.querySelector('#departure');
    const arrivalInput = formElement.querySelector('#arrival');
    
    if (data.departure) {
        departureInput.value = AIRPORT_MAPPING[data.departure]?.name || data.departure;
        departureInput.dataset.code = data.departure;
    }
    
    if (data.arrival) {
        arrivalInput.value = AIRPORT_MAPPING[data.arrival]?.name || data.arrival;
        arrivalInput.dataset.code = data.arrival;
    }
    
    if (data.departureDate) {
        formElement.querySelector('#departureDate').value = data.departureDate;
    }
    
    if (data.returnDate) {
        formElement.querySelector('#returnDate').value = data.returnDate;
    }
    
    if (data.passengers) {
        formElement.querySelector('#passengers').value = data.passengers;
    }
    
    if (data.cabinClass) {
        formElement.querySelector('#cabinClass').value = data.cabinClass;
    }
}
