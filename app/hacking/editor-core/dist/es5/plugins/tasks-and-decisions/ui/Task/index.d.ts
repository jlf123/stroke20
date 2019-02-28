import * as React from 'react';
import { InjectedIntlProps } from 'react-intl';
import { PureComponent, ReactElement } from 'react';
import { ProviderFactory } from '@atlaskit/editor-common';
export interface TaskProps {
    taskId: string;
    isDone: boolean;
    contentRef?: (node: HTMLElement | undefined) => void;
    onChange?: (taskId: string, isChecked: boolean) => void;
    showPlaceholder?: boolean;
    children?: ReactElement<any>;
    providers?: ProviderFactory;
    disabled?: boolean;
}
export declare class TaskItem extends PureComponent<TaskProps & InjectedIntlProps, {}> {
    private providerFactory;
    constructor(props: any);
    componentWillUnmount(): void;
    private renderWithProvider;
    render(): JSX.Element;
}
declare const _default: React.ComponentClass<TaskProps, any> & {
    WrappedComponent: ReactIntl.ComponentConstructor<TaskProps & InjectedIntlProps>;
};
export default _default;
