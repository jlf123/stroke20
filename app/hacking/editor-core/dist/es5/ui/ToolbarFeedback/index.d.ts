import { PureComponent } from 'react';
export declare type EditorProduct = 'bitbucket' | 'jira' | 'confluence' | 'stride' | undefined;
export interface Props {
    packageVersion?: string;
    packageName?: string;
    product?: EditorProduct;
    popupsMountPoint?: HTMLElement;
    popupsBoundariesElement?: HTMLElement;
    popupsScrollableElement?: HTMLElement;
    labels?: string[];
}
export interface State {
    jiraIssueCollectorScriptLoading: boolean;
    showOptOutOption?: boolean;
    target?: HTMLElement;
}
declare global {
    interface Window {
        jQuery: any;
        ATL_JQ_PAGE_PROPS: any;
    }
}
/**
 * Inspired from:
 * https://stackoverflow.com/questions/11219582/how-to-detect-my-browser-version-and-operating-system-using-javascript
 */
export declare const getBrowserInfo: (nAgt: any) => string;
/**
 * Inspired from:
 * https://stackoverflow.com/questions/9514179/how-to-find-the-operating-system-version-using-javascript
 */
export declare const getDeviceInfo: (nAgt: any, nVersion: any) => string;
export default class ToolbarFeedback extends PureComponent<Props, State> {
    state: State;
    private handleRef;
    showJiraCollectorDialogCallback?: () => void;
    private handleSpinnerComplete;
    render(): JSX.Element | null;
    private collectFeedback;
    private toggleShowOptOutOption;
    private openFeedbackPopup;
    private loadJiraIssueCollectorScript;
    private openLearnMorePage;
    private hasJquery;
}
