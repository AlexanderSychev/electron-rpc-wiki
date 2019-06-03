import Loader from './Loader';

import { MenuItem } from './types';

export default class MenuLoader extends Loader {
    private static instance: MenuLoader | null = null;

    private cache: Map<string, MenuItem[]>;

    private constructor() {
        super();
        this.cache = new Map<string, MenuItem[]>();
    }

    public static getInstance(): MenuLoader {
        if (!MenuLoader.instance) {
            MenuLoader.instance = new MenuLoader();
        }
        return MenuLoader.instance;
    }

    public async loadMenu(version: string): Promise<MenuItem[]> {
        if (!this.cache.has(version)) {
            const { data } = await this.sender.get<MenuItem[]>(`v${version}/menu.json`);
            this.cache.set(version, data);
        }

        return this.cache.get(version)!;
    }
}
