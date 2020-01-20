export class Settings {
    public static _urlBase: string = document.location.href.indexOf("localhost:") > -1 ? 'http://localhost:8070/api' : 'https://www.videofy.com.br/api';
    public static _urlRoot: string = document.location.href.indexOf("localhost:") > -1 ? 'http://localhost:8070' : 'https://www.videofy.com.br/dash';
}