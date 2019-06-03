import * as url from 'url';
import axios, { AxiosInstance } from 'axios';

export default abstract class Loader {
    protected sender: AxiosInstance;

    public constructor() {
        const { protocol, host, pathname = '/' } = url.parse(location.href);
        this.sender = axios.create({
            baseURL: url.format({
                protocol,
                host,
                pathname,
            }),
        });
    }
}
