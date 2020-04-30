let thatBeatle = [];

function theBeatlesPlay(musicians, instruments) {
  for (let i = 0; i < musicians.length; i++) {
    thatBeatle.push(`${musicians[i]} plays ${instruments[i]}`)
    } return thatBeatle;
  }

function johnLennonFacts(facts) {
  return [...facts, '!!!']
}