import fs from 'fs';
import {OutputTarget} from '../Summary';

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
      <div>
        <h2>Analysis Output</h2>
        <div>${report}</div>
      </div>
    `;
    
    fs.writeFileSync('report.html', html);
  }
}
