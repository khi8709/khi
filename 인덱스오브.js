/*indexOf메소드 : 특정 문자열이 있는지 확인, 위치를 리턴함 문자열이 포함되어 있지 않을 떄는 -1을 리턴 */

let string ='안녕하세요 좋은 아침입니다';
// 문자열 내부에 아침이 있는지 확인 
if (string.indexOf('아침')>=0){
	console.log('좋은 아침이에요');
}