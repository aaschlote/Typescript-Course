import { MatchData } from './MatchData';
import { WinsAnalysys } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportsTargets/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutPutTarget {
  print(report: string): void;
}

export class Sumarry {
  constructor(public analizer: Analyzer, public outputTarget: OutPutTarget) {}

  static winsAnalysisWithHtmlReport(team: string) {
    return new Sumarry(new WinsAnalysys(team), new HtmlReport());
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analizer.run(matches);
    this.outputTarget.print(output);
  }
}
