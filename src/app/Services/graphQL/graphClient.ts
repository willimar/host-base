import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Body } from './libs/body';

export class GraphClient {
    public body: Body[] = [];
    public timeOut: number = 1000 * 30;
    public result: any;

    public constructor(private _http: HttpClient) {
    }

    public resolve(uri: string) {
        const bodyValue: string = this.body.join(',');
        const body = `{"operationName":null,"variables":{},"query":"{${bodyValue}}"}`;
        this.submitPerson(body, uri);
    }

    private submitPerson(form: string, url: string) {
      const header = new Headers();
      header.append('Content-Type', 'application/json');

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

      this.result = this._http.post(url,
          form,
          httpOptions)
        .map(response => response);
    }

    public appendBody(name: string): Body {
        const body: Body = new Body(name);
        this.body.push(body);
        return body;
    }
}
