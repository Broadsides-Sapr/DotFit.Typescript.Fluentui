## API Report File for "@fluentui/babel-preset-global-context"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { CallExpression } from '@babel/types';
import { ImportDeclaration } from '@babel/types';
import { NodePath } from '@babel/traverse';
import { PluginObj } from '@babel/core';
import { PluginPass } from '@babel/core';

// @public (undocumented)
function preset(): {
    plugins: ((api: object, options: Record<string, any> | null | undefined, dirname: string) => PluginObj<PluginPass & {
    importDeclarationPaths?: NodePath<ImportDeclaration>[] | undefined;
    nativeExpressionPaths?: NodePath<CallExpression>[] | undefined;
    contextSelectorExpressionPaths?: NodePath<CallExpression>[] | undefined;
    nativeLocalName?: string | undefined;
    contextSelectorLocalName?: string | undefined;
    }>)[][];
};
export default preset;

// (No @packageDocumentation comment for this package)

```