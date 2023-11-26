/*
  cookie는 사용자의 컴퓨터에 물리적인 파일 형태로 남기는 경량의 텍스트 자료
  name=value 형식으로 저장됨;
  쿠키 생성시 쿠기의 생성주기를 설정가능
  name=value; path=/; expires=만료시간;
  문자열.indexOf(찾을 문자열) : 전체 문자열에서 해당 문자열의 위치순서값 반환
  전체문자열에서 찾을 문자열이 없으면 -1을 반환
*/
const [open, view, del] = document.querySelectorAll('nav button');
const popup = document.querySelector('aside');
const ck = popup.querySelector('#ck');
const close = popup.querySelector('button');

//쿠키 확인
view.addEventListener('click', () => console.log(document.cookie));
//팝업 열기
open.addEventListener('click', () => {
	popup.style.display = 'block';
});
//팝업 닫기
close.addEventListener('click', () => {
	if (ck.checked) setCookie('today', 'done', 1);
	popup.style.display = 'none';
});
//쿠키 생성함수
function setCookie(name, value, expires) {
	let today = new Date();
	let duedate = today.getDate() + expires;
	today.setDate(duedate);
	document.cookie = `${name}=${value}; path=/; expires=${today.toString()}`;
}
