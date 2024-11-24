export function tournamentWinner(competitions: string[][], results: number[]) {
  // 1 - the home team won
  // 0 - means that the away team won
  // a team received 3 points if it wins and 0 points if it loses
  let pointsMap = new Map<string, number>();

  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];
    const result = results[i];

    let matchWinner: string;
    if (result === 1) {
      matchWinner = homeTeam;
    } else {
      matchWinner = awayTeam;
    }

    let prevPoints = pointsMap.get(matchWinner);
    let newPoints: number = 0;

    if (prevPoints === undefined) {
      newPoints = 3;
    } else {
      newPoints = prevPoints + 3;
    }

    pointsMap.set(matchWinner, newPoints);
  }

  let winner = "";
  let pointsCount = 0;

  for (let [team, points] of pointsMap.entries()) {
    if (points > pointsCount) {
      winner = team;
      pointsCount = points;
    }
  }

  return winner;
}

const competitions: string[][] = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];

const results: number[] = [0, 0, 1];

const competitions1: string[][] = [
  ["HTML", "Java"],
  ["Java", "Python"],
  ["Python", "HTML"],
];

const results1: number[] = [0, 1, 1];

console.log(tournamentWinner(competitions, results));
console.log(tournamentWinner(competitions1, results1));
