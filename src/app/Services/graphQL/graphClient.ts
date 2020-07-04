import { Body } from './libs/body';

export class GraphClient {
    public body: Body[] = [];
    public timeOut: number = 1000 * 30;
    public Result: any;

    public resolve(uri: string) {
        // using (var navigator = new HttpClient())
        // {
        //     var bodyValue = string.Join(",", this.Body);

        //     var body = $"{{\"operationName\":null,\"variables\":{{}},\"query\":\"{{{bodyValue}}}\"}}";
        //     var content = new StringContent(body, Encoding.UTF8, "application/json");
        //     var post = navigator.PostAsync(uri, content);
        //     post.Wait(this.TimeOut);
        //     this.Result = Newtonsoft.Json.JsonConvert.DeserializeObject<dynamic>(post.Result.Content.ReadAsStringAsync().Result);
        // }
    }

    public appendBody(name: string): Body {
        const body: Body = new Body(name);
        this.body.push(body);
        return body;
    }
}
