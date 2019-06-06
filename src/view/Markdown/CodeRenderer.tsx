import * as React from 'react';
import { Light } from 'react-syntax-highlighter';

const style = require('react-syntax-highlighter/dist/styles/hljs/atom-one-light').default;
const typescript = require('react-syntax-highlighter/dist/cjs/languages/hljs/typescript').default;
const javascript = require('react-syntax-highlighter/dist/cjs/languages/hljs/javascript').default;
const sh = require('react-syntax-highlighter/dist/cjs/languages/hljs/bash').default;

Light.registerLanguage('typescript', typescript);
Light.registerLanguage('javascript', javascript);
Light.registerLanguage('sh', sh);
Light.registerLanguage('bash', sh);

/** "CodeRenderer" component properties */
export interface CodeRendererProps {
    /** Language to process */
    language: string;
    /** Code text */
    value: string;
}

/** Code block renderer for Markdown texts */
const CodeRenderer: React.FunctionComponent<CodeRendererProps> = ({ language, value }) => (
    <Light language={language} style={style} showLineNumbers>
        {value}
    </Light>
);

CodeRenderer.displayName = `CodeRenderer from "${__filename}"`;

export default CodeRenderer;
