declare module '*.md' {
    const content: string;
    export = content;
}

declare module '*.svg' {
    const uri: string;
    export = uri;
}
