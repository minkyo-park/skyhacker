// 분리된 파일들을 사용합니다.
// airport-mapping.js, url-templates.js, form-options.js 파일이 로드되어야 합니다.

// 플랫폼 템플릿은 url-templates.js에서 가져옵니다.

// 전역 변수
let currentSuggestions = [];

// DOM 요소들
const form = document.getElementById('flightSearchForm');
const departureInput = document.getElementById('departure');
const arrivalInput = document.getElementById('arrival');
const departureSuggestions = document.getElementById('departureSuggestions');
const arrivalSuggestions = document.getElementById('arrivalSuggestions');
const searchBtn = document.querySelector('.search-btn');
const resultsSection = document.getElementById('searchResults');
const platformLinks = document.getElementById('platformLinks');

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 폼 기본값 설정 (form-options.js의 함수 사용)
    const defaults = initializeFormDefaults();
    document.getElementById('departureDate').value = defaults.departureDate;
    document.getElementById('returnDate').value = defaults.returnDate;
    document.getElementById('passengers').value = defaults.passengers;
    document.getElementById('cabinClass').value = defaults.cabinClass;
    
    // 이벤트 리스너 설정
    setupEventListeners();
    
});


// 이벤트 리스너 설정
function setupEventListeners() {
    // 폼 제출
    form.addEventListener('submit', handleFormSubmit);
    
    // 검색 버튼 직접 클릭 이벤트 (폼 제출과 별도로)
    const searchBtn = document.querySelector('.button');
    if (searchBtn) {
        console.log('검색 버튼 요소 찾음:', searchBtn);
        searchBtn.addEventListener('click', (e) => {
            console.log('버튼 클릭 이벤트 발생!');
            e.preventDefault();
            e.stopPropagation();
            console.log('검색 버튼 클릭됨 - 이벤트:', e);
            
            try {
                console.log('handleFormSubmit 호출 시작');
                handleFormSubmit(e);
                console.log('handleFormSubmit 호출 완료');
            } catch (error) {
                console.error('handleFormSubmit 오류:', error);
                alert('검색 중 오류가 발생했습니다: ' + error.message);
            }
        });
    } else {
        console.error('검색 버튼을 찾을 수 없습니다!');
    }
    
    // 추가: 폼 submit 이벤트도 확인
    if (form) {
        form.addEventListener('submit', (e) => {
            console.log('폼 submit 이벤트 발생!');
        });
    }
    
    
    // 출발지 입력 자동완성
    departureInput.addEventListener('input', (e) => handleInput(e, departureSuggestions));
    departureInput.addEventListener('focus', (e) => showSuggestions(e.target.value, departureSuggestions));
    
    // 도착지 입력 자동완성
    arrivalInput.addEventListener('input', (e) => handleInput(e, arrivalSuggestions));
    arrivalInput.addEventListener('focus', (e) => showSuggestions(e.target.value, arrivalSuggestions));
    
    // 인원 선택 피드백
    const passengersSelect = document.getElementById('passengers');
    if (passengersSelect) {
        passengersSelect.addEventListener('change', function() {
            this.classList.add('selected');
            setTimeout(() => {
                this.classList.remove('selected');
            }, 1000);
        });
    }
    
    // 좌석 클래스 선택 피드백
    const cabinClassSelect = document.getElementById('cabinClass');
    if (cabinClassSelect) {
        cabinClassSelect.addEventListener('change', function() {
            this.classList.add('selected');
            setTimeout(() => {
                this.classList.remove('selected');
            }, 1000);
        });
    }
    
    // 외부 클릭 시 자동완성 숨기기
    document.addEventListener('click', (e) => {
        // 자동완성 제안이 아닌 경우에만 숨기기
        if (!e.target.closest('.form-group') && !e.target.closest('.suggestion-item')) {
            hideSuggestions();
        }
    });
    
    // 배너 클릭 시 할인코드 페이지로 이동
    const searchBanner = document.querySelector('.search-banner-card');
    if (searchBanner) {
        searchBanner.addEventListener('click', function() {
            window.location.href = '/discount.html';
        });
    }
}

// 입력 처리
function handleInput(event, suggestionsContainer) {
    const value = event.target.value.trim();
    showSuggestions(value, suggestionsContainer);
}

// 자동완성 제안 표시
function showSuggestions(query, container) {
    console.log('showSuggestions 호출됨:', { query, container });
    
    if (!query || query.length < 1) {
        hideSuggestions();
        return;
    }
    
    const suggestions = searchAirports(query);
    console.log('검색 결과:', suggestions);
    currentSuggestions = suggestions;
    
    if (suggestions.length === 0) {
        hideSuggestions();
        return;
    }
    
    container.innerHTML = suggestions.map(suggestion => `
        <div class="suggestion-item" data-code="${suggestion.code}" data-name="${suggestion.name}">
            <svg class="suggestion-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span class="suggestion-code">${suggestion.code}</span>
            <span class="suggestion-name">${suggestion.name} (${suggestion.city}, ${suggestion.country})</span>
        </div>
    `).join('');
    
    container.style.display = 'block';
    
    // 제안 클릭 이벤트
    container.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const code = item.dataset.code;
            const name = item.dataset.name;
            
            // 입력 필드 찾기 (더 안전한 방법)
            let input = null;
            if (container.id === 'departureSuggestions') {
                input = document.getElementById('departure');
            } else if (container.id === 'arrivalSuggestions') {
                input = document.getElementById('arrival');
            }
            
            console.log('제안 클릭됨:', { code, name, input, containerId: container.id });
            
            if (input && code && name) {
                input.value = name;
                input.dataset.code = code;
                console.log('입력 필드 업데이트됨:', input.value, input.dataset.code);
                
                // 선택 완료 시각적 피드백
                input.classList.add('selected');
                setTimeout(() => {
                    input.classList.remove('selected');
                }, 1000);
                
                // 입력 이벤트 발생시키기
                input.dispatchEvent(new Event('input', { bubbles: true }));
            } else {
                console.error('입력 필드 또는 데이터를 찾을 수 없음:', { input, code, name });
            }
            
            hideSuggestions();
        });
    });
}

// 공항 검색 함수는 airport-mapping.js에서 가져옵니다.

// 자동완성 숨기기
function hideSuggestions() {
    departureSuggestions.style.display = 'none';
    arrivalSuggestions.style.display = 'none';
}


// 폼 제출 처리
function handleFormSubmit(event) {
    console.log('폼 제출 이벤트 발생:', event);
    event.preventDefault();
    
    // 날짜 변경으로 인한 제출인지 확인
    if (event.target && event.target.type === 'date') {
        console.log('날짜 변경으로 인한 제출 - 무시');
        return;
    }
    
    console.log('1. 폼 데이터 수집 시작');
    const formData = getFormData();
    console.log('폼 데이터:', formData);
    
    // 즉시 날짜 검증 추가
    console.log('출발일 값:', formData.departureDate, '타입:', typeof formData.departureDate);
    console.log('귀국일 값:', formData.returnDate, '타입:', typeof formData.returnDate);
    
    if (!formData.departureDate || formData.departureDate === '' || formData.departureDate === '날짜 선택') {
        alert('출발일을 선택해주세요.');
        return;
    }
    
    if (!formData.returnDate || formData.returnDate === '' || formData.returnDate === '날짜 선택') {
        alert('귀국일을 선택해주세요.');
        return;
    }
    
    console.log('2. 폼 유효성 검사 시작');
    if (!validateForm(formData)) {
        console.log('폼 유효성 검사 실패');
        return;
    }
    console.log('폼 유효성 검사 통과');
    
    // 유효한 공항 코드로 변환된 데이터 가져오기
    console.log('3. 공항 코드 검증 시작');
    const validatedData = getValidatedFormData();
    console.log('검증된 데이터:', validatedData);
    
    if (!validatedData) {
        console.log('공항 코드 검증 실패');
        // 더 구체적인 오류 메시지 제공
        const formData = getFormData();
        if (!formData.departure) {
            alert('출발지를 입력해주세요.');
        } else if (!formData.arrival) {
            alert('도착지를 입력해주세요.');
        } else {
            alert('유효한 공항 코드를 입력해주세요.');
        }
        return;
    }
    
    console.log('4. 로딩 애니메이션 표시');
    // 로딩 애니메이션 표시
    showLoadingAnimation();
    
    console.log('5. URL 생성 및 표시 시작 (4.5초 후)');
    // 4-5초 후 결과 표시
    setTimeout(() => {
        console.log('6. URL 생성 중...');
        hideLoadingAnimation();
        console.log('7. 링크 생성 및 표시');
        generateAndDisplayLinks(validatedData);
        console.log('8. 검색 완료');
    }, 4500);
}

// 폼 데이터 수집 (form-options.js의 함수 사용)
function getFormData() {
    return collectFormData(form);
}

// 폼 유효성 검사 (form-options.js의 검증 규칙 사용)
function validateForm(data) {
    // 필수 필드 검증
    if (!data.departure || data.departure.trim() === '') {
        alert('출발지를 입력해주세요.');
        return false;
    }
    
    if (!data.arrival || data.arrival.trim() === '') {
        alert('도착지를 입력해주세요.');
        return false;
    }
    
    if (!data.departureDate || data.departureDate.trim() === '' || data.departureDate === '날짜 선택') {
        alert('출발일을 선택해주세요.');
        return false;
    }
    
    if (!data.returnDate || data.returnDate.trim() === '' || data.returnDate === '날짜 선택') {
        alert('귀국일을 선택해주세요.');
        return false;
    }
    
    // 공항 검증
    const airportError = VALIDATION_RULES.airport.custom(data.departure, data.arrival);
    if (airportError) {
        alert(airportError);
        return false;
    }
    
    // 날짜 검증
    const dateError = VALIDATION_RULES.date.custom(data.departureDate, data.returnDate);
    if (dateError) {
        alert(dateError);
        return false;
    }
    
    // 인원 검증
    const passengers = parseInt(data.passengers);
    if (passengers < VALIDATION_RULES.passengers.min || 
        passengers > VALIDATION_RULES.passengers.max) {
        alert(VALIDATION_RULES.passengers.message);
        return false;
    }
    
    return true;
}

// 유효한 공항 코드로 변환된 폼 데이터 가져오기
function getValidatedFormData() {
    const formData = getFormData();
    
    // 공항 코드가 비어있거나 null인 경우 처리
    if (!formData.departure || !formData.arrival) {
        console.warn('공항 코드가 비어있음:', { departure: formData.departure, arrival: formData.arrival });
        return null; // 공항 코드가 없음
    }
    
    // 공항 코드 유효성 검증 및 변환
    const departureCode = extractAndValidateAirportCode(formData.departure);
    const arrivalCode = extractAndValidateAirportCode(formData.arrival);
    
    if (!departureCode || !arrivalCode) {
        console.warn('공항 코드 검증 실패:', { 
            departure: formData.departure, 
            arrival: formData.arrival,
            departureCode, 
            arrivalCode 
        });
        return null; // 유효하지 않은 데이터
    }
    
    // 유효한 코드로 변환된 데이터 반환
    return {
        ...formData,
        departure: departureCode,
        arrival: arrivalCode
    };
}

// URL 생성 및 표시 (url-templates.js의 함수 사용)
function generateAndDisplayLinks(formData) {
    const links = generateAllPlatformURLs(formData);
    displayLinks(links, formData);
}

// URL 생성 함수들은 url-templates.js에서 가져옵니다.

// 링크 표시
function displayLinks(links, formData = null) {
    if (links.length === 0) {
        platformLinks.innerHTML = '<p>검색 결과를 생성할 수 없습니다.</p>';
        resultsSection.style.display = 'block';
        return;
    }
    
    
    platformLinks.innerHTML = links.map(link => `
        <div class="search-result-item">
            <a href="${link.platform.redirectUrl || link.url}" target="_blank" class="platform-link-new" onclick="handlePlatformClick(event, '${link.url}', '${link.platform.redirectUrl || ''}')">
                <div class="success-icon">
                    <img src="https://www.google.com/s2/favicons?domain=${link.platform.domain}" alt="${link.platform.name}" class="platform-favicon-new">
                </div>
                <div class="platform-info-new">
                    <p class="platform-name">${link.platform.name}</p>
                    <p class="platform-desc">에서 콜드스타트(Pure Link)로 접속하기</p>
                </div>
                <div class="arrow-btn" onclick="copyToClipboard('${link.url}', this); event.preventDefault(); event.stopPropagation();">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                    </svg>
                </div>
            </a>
        </div>
    `).join('');
    
    // 검색 결과 배너 표시
    const searchBanner = document.getElementById('searchBanner');
    if (searchBanner) {
        searchBanner.style.display = 'block';
        // 배너로 부드럽게 스크롤
        searchBanner.scrollIntoView({ behavior: 'smooth' });
    }
    
    // 검색 결과 표시
    resultsSection.style.display = 'block';
    
    // 수수료 안내 섹션 표시
    const commissionNotice = document.getElementById('commissionNotice');
    if (commissionNotice) {
        commissionNotice.style.display = 'block';
    }
    
    // 성공 애니메이션
    platformLinks.classList.add('success-animation');
    setTimeout(() => {
        platformLinks.classList.remove('success-animation');
    }, 600);
}

// 키보드 네비게이션 지원
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        hideSuggestions();
    }
});

// 페이지 로드 시 포커스
window.addEventListener('load', function() {
    departureInput.focus();
});


// URL 복사 기능
function addCopyToClipboard() {
    const copyButtons = document.querySelectorAll('.platform-link');
    copyButtons.forEach(link => {
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.innerHTML = '→';
        copyBtn.title = 'URL 복사';
        copyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            navigator.clipboard.writeText(link.href).then(() => {
                copyBtn.innerHTML = '✅';
                setTimeout(() => {
                    copyBtn.innerHTML = '📋';
                }, 2000);
            });
        });
        link.appendChild(copyBtn);
    });
}

// 기존 복사 기능은 새로운 디자인에서 제거됨






// OriginUI Style Calendar 구현
let currentDepartureDate = null;
let currentReturnDate = null;
let currentDepartureMonth = new Date().getMonth();
let currentDepartureYear = new Date().getFullYear();
let currentReturnMonth = new Date().getMonth();
let currentReturnYear = new Date().getFullYear();

// 날짜 입력 필드 초기화
function initializeDateInputs() {
    setupCalendar('departure');
    setupCalendar('return');
}

// 캘린더 설정
function setupCalendar(type) {
    const input = document.getElementById(type + 'CalendarInput');
    const popup = document.getElementById(type + 'CalendarPopup');
    const display = document.getElementById(type + 'DateDisplay');
    const hiddenInput = document.getElementById(type + 'Date');
    const title = document.getElementById(type + 'CalendarTitle');
    const daysContainer = document.getElementById(type + 'CalendarDays');
    const navBtns = popup.querySelectorAll('.calendar-nav');
    
    if (!input || !popup || !display || !hiddenInput || !title || !daysContainer) {
        console.warn(`Calendar elements not found for ${type}`);
        return;
    }
    
    // 입력 필드 클릭 이벤트
    input.addEventListener('click', (e) => {
        e.preventDefault();
        toggleCalendar(type);
    });
    
    // 키보드 이벤트
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleCalendar(type);
        } else if (e.key === 'Escape') {
            closeCalendar(type);
        }
    });
    
    // 네비게이션 버튼
    navBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const action = btn.dataset.action;
            if (type === 'departure') {
                if (action === 'prev') {
                    currentDepartureMonth--;
                    if (currentDepartureMonth < 0) {
                        currentDepartureMonth = 11;
                        currentDepartureYear--;
                    }
                } else {
                    currentDepartureMonth++;
                    if (currentDepartureMonth > 11) {
                        currentDepartureMonth = 0;
                        currentDepartureYear++;
                    }
                }
            } else {
                if (action === 'prev') {
                    currentReturnMonth--;
                    if (currentReturnMonth < 0) {
                        currentReturnMonth = 11;
                        currentReturnYear--;
                    }
                } else {
                    currentReturnMonth++;
                    if (currentReturnMonth > 11) {
                        currentReturnMonth = 0;
                        currentReturnYear++;
                    }
                }
            }
            renderCalendar(type);
        });
    });
    
    // 외부 클릭 시 닫기
    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !popup.contains(e.target)) {
            closeCalendar(type);
        }
    });
    
    // 초기 렌더링
    renderCalendar(type);
}

// 캘린더 토글
function toggleCalendar(type) {
    const popup = document.getElementById(type + 'CalendarPopup');
    const input = document.getElementById(type + 'CalendarInput');
    
    // 다른 캘린더 닫기
    const otherType = type === 'departure' ? 'return' : 'departure';
    closeCalendar(otherType);
    
    const isOpen = popup.style.display === 'block';
    if (isOpen) {
        closeCalendar(type);
    } else {
        openCalendar(type);
    }
}

// 캘린더 열기
function openCalendar(type) {
    const popup = document.getElementById(type + 'CalendarPopup');
    const input = document.getElementById(type + 'CalendarInput');
    
    popup.style.display = 'block';
    popup.setAttribute('aria-hidden', 'false');
    input.setAttribute('aria-expanded', 'true');
    
    renderCalendar(type);
}

// 캘린더 닫기
function closeCalendar(type) {
    const popup = document.getElementById(type + 'CalendarPopup');
    const input = document.getElementById(type + 'CalendarInput');
    
    popup.style.display = 'none';
    popup.setAttribute('aria-hidden', 'true');
    input.setAttribute('aria-expanded', 'false');
}

// 캘린더 렌더링
function renderCalendar(type) {
    const title = document.getElementById(type + 'CalendarTitle');
    const daysContainer = document.getElementById(type + 'CalendarDays');
    
    if (!title || !daysContainer) {
        console.warn(`Calendar render elements not found for ${type}`);
        return;
    }
    
    let month, year;
    if (type === 'departure') {
        month = currentDepartureMonth;
        year = currentDepartureYear;
    } else {
        month = currentReturnMonth;
        year = currentReturnYear;
    }
    
    // 제목 업데이트
    const monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
    title.textContent = `${year}년 ${monthNames[month]}`;
    
    // 날짜 그리드 생성
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    // 일요일(0)부터 시작하도록 수정
    const dayOfWeek = firstDay.getDay();
    startDate.setDate(startDate.getDate() - dayOfWeek);
    
    daysContainer.innerHTML = '';
    
    for (let i = 0; i < 49; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        
        const dayElement = document.createElement('button');
        dayElement.className = 'calendar-day';
        dayElement.textContent = date.getDate();
        dayElement.setAttribute('role', 'gridcell');
        
        // 이번 달이 아닌 날
        if (date.getMonth() !== month) {
            dayElement.setAttribute('data-outside-month', 'true');
        }
        
        // 오늘
        const today = new Date();
        if (date.toDateString() === today.toDateString()) {
            dayElement.setAttribute('aria-current', 'date');
        }
        
        // 선택된 날
        let selectedDate;
        if (type === 'departure') {
            selectedDate = currentDepartureDate;
        } else {
            selectedDate = currentReturnDate;
        }
        
        if (selectedDate && date.toDateString() === selectedDate.toDateString()) {
            dayElement.setAttribute('aria-selected', 'true');
        }
        
        // 과거 날짜 비활성화 - 오늘 날짜와 정확히 비교
        const now = new Date();
        const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        
        if (date < todayStart) {
            dayElement.setAttribute('aria-disabled', 'true');
            dayElement.style.color = '#4b5563';
            dayElement.style.cursor = 'not-allowed';
            dayElement.style.opacity = '0.3';
            dayElement.style.pointerEvents = 'none';
            // 클릭 이벤트를 절대 추가하지 않음
            console.log('이전 날짜 차단:', date.toDateString(), 'vs', todayStart.toDateString());
        } else {
            dayElement.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                selectDate(type, date);
            });
        }
        
        daysContainer.appendChild(dayElement);
    }
}

// 날짜 선택
function selectDate(type, date) {
    const display = document.getElementById(type + 'DateDisplay');
    const hiddenInput = document.getElementById(type + 'Date');
    
    if (!display || !hiddenInput) {
        console.warn(`Date selection elements not found for ${type}`);
        return;
    }
    
    // 귀국일 선택 시 출발일보다 이전인지 확인
    if (type === 'return' && currentDepartureDate) {
        const departureDate = new Date(currentDepartureDate);
        const returnDate = new Date(date);
        if (returnDate <= departureDate) {
            alert('귀국일은 출발일보다 이후여야 합니다.');
            return; // 선택 방지
        }
    }
    
    if (type === 'departure') {
        currentDepartureDate = date;
    } else {
        currentReturnDate = date;
    }
    
    const formattedDate = date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    display.textContent = formattedDate;
    // 로컬 날짜 사용 (시간대 문제 해결)
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    hiddenInput.value = `${year}-${month}-${day}`;
    
    // 날짜 선택 시각적 피드백
    display.classList.add('selected');
    const calendarInput = document.getElementById(type + 'CalendarInput');
    if (calendarInput) {
        calendarInput.classList.add('selected');
    }
    setTimeout(() => {
        display.classList.remove('selected');
        if (calendarInput) {
            calendarInput.classList.remove('selected');
        }
    }, 1000);
    
    closeCalendar(type);
    renderCalendar(type);
    
    // 출발일 변경 시 귀국일 검증 (폼 검증 없이)
    if (type === 'departure' && currentReturnDate) {
        const departureDate = new Date(date);
        const returnDate = new Date(currentReturnDate);
        if (returnDate <= departureDate) {
            // 귀국일이 출발일보다 이전이면 초기화
            currentReturnDate = null;
            const returnDisplay = document.getElementById('returnDateDisplay');
            const returnHiddenInput = document.getElementById('returnDate');
            if (returnDisplay && returnHiddenInput) {
                returnDisplay.textContent = '날짜 선택';
                returnHiddenInput.value = '';
            }
            renderCalendar('return');
        }
    }
}


// 로딩 애니메이션 제어 함수들
function showLoadingAnimation() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.style.display = 'flex';
    }
}

function hideLoadingAnimation() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.style.display = 'none';
    }
}

// 햄버거 메뉴 초기화 함수
function initHamburgerMenu() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const verticalNav = document.getElementById('verticalNav');
    
    if (hamburgerMenu && verticalNav) {
        hamburgerMenu.addEventListener('click', function() {
            hamburgerMenu.classList.toggle('active');
            verticalNav.classList.toggle('open');
        });
        
        // 사이드바 외부 클릭 시 닫기
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 768 && 
                !hamburgerMenu.contains(e.target) && 
                !verticalNav.contains(e.target) &&
                !e.target.closest('.logo-link')) { // 헤더 로고 링크 제외
                hamburgerMenu.classList.remove('active');
                verticalNav.classList.remove('open');
            }
        });
        
        // 화면 크기 변경 시 사이드바 상태 조정
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                hamburgerMenu.classList.remove('active');
                verticalNav.classList.remove('open');
            }
        });
    }
}

// DOM 로드 후 날짜 입력 초기화
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM 로드 완료');
    
    // arrival 필드 디버깅
    setTimeout(() => {
        const departure = document.getElementById('departure');
        const arrival = document.getElementById('arrival');
        if (departure && arrival) {
            const depStyles = window.getComputedStyle(departure);
            const arrStyles = window.getComputedStyle(arrival);
            console.log('Departure width:', depStyles.width, 'padding:', depStyles.padding);
            console.log('Arrival width:', arrStyles.width, 'padding:', arrStyles.padding);
        }
    }, 1000);
    
    // 햄버거 메뉴 토글 기능
    initHamburgerMenu();
    initializeDateInputs();
    
    // 추가 디버깅: 버튼이 실제로 존재하는지 확인
    setTimeout(() => {
        const button = document.querySelector('.button');
        const form = document.getElementById('flightSearchForm');
        console.log('버튼 존재 여부:', !!button);
        console.log('폼 존재 여부:', !!form);
        if (button) {
            console.log('버튼 타입:', button.type);
            console.log('버튼 클래스:', button.className);
        }
    }, 1000);
});


// 플랫폼 클릭 처리 함수 (리다이렉트 로직)
function handlePlatformClick(event, flightUrl, redirectUrl) {
    event.preventDefault();
    
    if (redirectUrl && redirectUrl !== '') {
        // 리다이렉트 URL이 있는 경우: 지정된 URL로 먼저 이동 후 0.1~0.2초 뒤 항공권 URL로 이동
        const newWindow = window.open(redirectUrl, '_blank');
        
        // 0.7초 후 새로 열린 창에서 항공권 URL로 이동
        setTimeout(() => {
            if (newWindow && !newWindow.closed) {
                newWindow.location.href = flightUrl;
            }
        }, 700);
    } else {
        // 리다이렉트 URL이 없는 경우: 바로 항공권 URL로 이동
        window.open(flightUrl, '_blank');
    }
}

// URL 복사 함수
function copyToClipboard(url, element) {
    navigator.clipboard.writeText(url).then(() => {
        // 복사 성공 시 시각적 피드백
        const originalHTML = element.innerHTML;
        element.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" style="color: #10b981;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
            </svg>
        `;
        
        setTimeout(() => {
            element.innerHTML = originalHTML;
        }, 2000);
    }).catch(err => {
        console.error('복사 실패:', err);
        // 복사 실패 시 대체 방법
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        // 시각적 피드백
        const originalHTML = element.innerHTML;
        element.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" style="color: #10b981;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
            </svg>
        `;
        
        setTimeout(() => {
            element.innerHTML = originalHTML;
        }, 2000);
    });
}

