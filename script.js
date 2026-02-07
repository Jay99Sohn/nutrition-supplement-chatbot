// 영양제 데이터베이스 - 증상별 추천 영양제 정보
const supplementDatabase = {
    '피로회복': [
        {
            name: '비타민 B 복합체',
            description: '에너지 대사를 도와 피로 해소에 효과적입니다.',
            dosage: '일일 1회, 식후 복용',
            caution: '고용량 복용 시 소변이 노랗게 변할 수 있습니다.'
        },
        {
            name: '마그네슘',
            description: '근육 이완과 에너지 생성을 도와줍니다.',
            dosage: '일일 300-400mg',
            caution: '과다 복용 시 설사가 발생할 수 있습니다.'
        },
        {
            name: '코엔자임 Q10',
            description: '세포 에너지 생성에 필수적인 영양소입니다.',
            dosage: '일일 100-200mg',
            caution: '항응고제 복용 시 주의가 필요합니다.'
        }
    ],
    '면역력 강화': [
        {
            name: '비타민 C',
            description: '항산화 작용으로 면역 기능을 강화합니다.',
            dosage: '일일 500-1000mg',
            caution: '과다 복용 시 복통이나 설사가 발생할 수 있습니다.'
        },
        {
            name: '비타민 D',
            description: '면역 세포 활성화에 중요한 역할을 합니다.',
            dosage: '일일 1000-2000 IU',
            caution: '과다 복용 시 칼슘 수치가 높아질 수 있습니다.'
        },
        {
            name: '아연',
            description: '면역 세포 생성과 기능 유지에 필수적입니다.',
            dosage: '일일 15-30mg',
            caution: '장기 고용량 복용 시 구리 결핍이 발생할 수 있습니다.'
        }
    ],
    '눈 건강': [
        {
            name: '루테인',
            description: '눈의 황반을 보호하고 시력 개선에 도움을 줍니다.',
            dosage: '일일 10-20mg',
            caution: '과다 복용 시 피부가 노랗게 변할 수 있습니다.'
        },
        {
            name: '오메가-3',
            description: '안구 건조증 완화와 망막 건강에 좋습니다.',
            dosage: '일일 1000-2000mg',
            caution: '혈액 응고에 영향을 줄 수 있어 수술 전 중단이 필요합니다.'
        },
        {
            name: '비타민 A',
            description: '야맹증 예방과 시력 유지에 필수적입니다.',
            dosage: '일일 700-900mcg',
            caution: '과다 복용 시 간 손상이 발생할 수 있습니다.'
        }
    ],
    '관절 건강': [
        {
            name: '글루코사민',
            description: '연골 생성을 도와 관절 통증을 완화합니다.',
            dosage: '일일 1500mg',
            caution: '갑각류 알레르기가 있는 경우 주의가 필요합니다.'
        },
        {
            name: '콘드로이틴',
            description: '연골의 수분 유지와 탄력성 향상에 도움을 줍니다.',
            dosage: '일일 800-1200mg',
            caution: '혈액 응고에 영향을 줄 수 있습니다.'
        },
        {
            name: 'MSM',
            description: '염증 감소와 관절 유연성 개선에 효과적입니다.',
            dosage: '일일 1000-3000mg',
            caution: '처음에는 소량부터 시작하는 것이 좋습니다.'
        }
    ],
    '스트레스 관리': [
        {
            name: '마그네슘',
            description: '신경 안정과 근육 이완에 도움을 줍니다.',
            dosage: '일일 300-400mg',
            caution: '과다 복용 시 설사가 발생할 수 있습니다.'
        },
        {
            name: '비타민 B 복합체',
            description: '신경 기능 유지와 스트레스 대응에 필수적입니다.',
            dosage: '일일 1회, 식후 복용',
            caution: '고용량 복용 시 소변이 노랗게 변할 수 있습니다.'
        },
        {
            name: '오메가-3',
            description: '뇌 건강과 기분 개선에 도움을 줍니다.',
            dosage: '일일 1000-2000mg',
            caution: '혈액 응고에 영향을 줄 수 있습니다.'
        }
    ]
};

// HTML 요소들을 변수에 저장
const chatContainer = document.getElementById('chatContainer');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const quickButtons = document.querySelectorAll('.quick-btn');

// 메시지를 채팅창에 추가하는 함수
function addMessage(content, isUser = false) {
    // 새로운 메시지 div 생성
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;

    // 발신자 라벨 생성
    const labelDiv = document.createElement('div');
    labelDiv.className = 'message-label';
    labelDiv.textContent = isUser ? '나' : '손약사';

    // 메시지 내용을 담는 div 생성
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = content;

    // 메시지를 채팅창에 추가
    messageDiv.appendChild(labelDiv);
    messageDiv.appendChild(contentDiv);
    chatContainer.appendChild(messageDiv);

    // 스크롤을 최신 메시지로 이동
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// 로딩 메시지를 표시하는 함수
function showLoading() {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'message bot-message';
    loadingDiv.id = 'loading-message';

    // 라벨 + 로딩 텍스트 조합
    const labelDiv = document.createElement('div');
    labelDiv.className = 'message-label';
    labelDiv.textContent = '손약사';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = '<p>확인 중<span class="loading"></span></p>';

    loadingDiv.appendChild(labelDiv);
    loadingDiv.appendChild(contentDiv);
    chatContainer.appendChild(loadingDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// 로딩 메시지를 제거하는 함수
function removeLoading() {
    const loadingMessage = document.getElementById('loading-message');
    if (loadingMessage) {
        loadingMessage.remove();
    }
}

// 영양제 추천 응답을 생성하는 함수
function getSupplementRecommendation(query) {
    // 입력된 키워드를 기반으로 데이터베이스 검색
    let recommendations = null;
    let foundKeyword = '';

    // 데이터베이스에서 일치하는 키워드 찾기
    for (let keyword in supplementDatabase) {
        if (query.includes(keyword)) {
            recommendations = supplementDatabase[keyword];
            foundKeyword = keyword;
            break;
        }
    }

    // 추천 영양제가 있으면 HTML 형식으로 반환
    if (recommendations) {
        let response = `<p><strong>${foundKeyword}</strong>에 도움이 되는 영양제입니다.</p>`;
        response += '<div class="supplement-list">';

        recommendations.forEach(supplement => {
            response += `
                <div class="supplement-item">
                    <h3>${supplement.name}</h3>
                    <p><strong>효능</strong> ${supplement.description}</p>
                    <p><strong>권장 용량</strong> ${supplement.dosage}</p>
                    <p><strong>주의사항</strong> ${supplement.caution}</p>
                </div>
            `;
        });

        response += '</div>';
        response += '<p class="info-text">개인의 건강 상태에 따라 적합한 영양제가 다를 수 있습니다.</p>';
        return response;
    } else {
        // 일치하는 키워드가 없을 경우
        return `
            <p>"<strong>${query}</strong>"에 대한 정보를 찾지 못했습니다.</p>
            <p>아래 키워드로 다시 질문해주세요.</p>
            <p class="info-text">피로회복 / 면역력 강화 / 눈 건강 / 관절 건강 / 스트레스 관리</p>
        `;
    }
}

// 사용자 메시지 처리 함수
function handleUserMessage(message) {
    // 빈 메시지는 무시
    if (!message.trim()) {
        return;
    }

    // 사용자 메시지를 채팅창에 추가
    addMessage(message, true);

    // 입력창 비우기
    userInput.value = '';

    // 로딩 메시지 표시
    showLoading();

    // 실제 상담 응답처럼 보이도록 1초 후 응답
    setTimeout(() => {
        removeLoading();
        const response = getSupplementRecommendation(message);
        addMessage(response, false);
    }, 1000);
}

// 전송 버튼 클릭 이벤트
sendButton.addEventListener('click', () => {
    handleUserMessage(userInput.value);
});

// Enter 키로 메시지 전송
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserMessage(userInput.value);
    }
});

// 빠른 질문 버튼 클릭 이벤트
quickButtons.forEach(button => {
    button.addEventListener('click', () => {
        const query = button.getAttribute('data-query');
        handleUserMessage(query);
    });
});

// 페이지 로드 시 입력창에 포커스
window.addEventListener('load', () => {
    userInput.focus();
});
