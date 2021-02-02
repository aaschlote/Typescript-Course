import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';
import { Sumarry } from './Summarry';
import { WinsAnalysys } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportsTargets/ConsoleReport';
import { HtmlReport } from './reportsTargets/HtmlReport';

/*const reader = new MatchReader('football.csv');
reader.read();

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won  ${manUnitedWins} games`);
*/

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const sumarry = Sumarry.winsAnalysisWithHtmlReport('Man United');
sumarry.buildAndPrintReport(matchReader.matches);
