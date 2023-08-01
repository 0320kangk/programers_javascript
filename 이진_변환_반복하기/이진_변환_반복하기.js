/*
문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/70129
*/
function solution(s) {
  var transCount = 0; //변환 횟수
  var zeroCount = 0; //총 0 개수
  //1이 아니라면 무한 반복
  while (s !== "1") {
    const replaceS = s.replaceAll("0", "");
    zeroCount += s.length - replaceS.length;
    var length = replaceS.length;
    s = length.toString(2);
    transCount++;
  }
  const answer = [transCount, zeroCount];
  return answer;
}
// solution("110010101001");
