/**
 * @name Wikitude
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import { Wikitude } from 'ionic-native';
 *
 *
 * constructor(private wikitude: Wikitude) { }
 *
 * ...
 *
 *
 * this.wikitude.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class Wikitude {
    isDeviceSupported(requiredFeatures: string[]): Promise<any>;
    requestAccess(requiredFeatures: string[]): Promise<any>;
    loadARchitectWorld(architectWorldPath: string, requiredFeatures: string[], startupConfiguration: Object): Promise<any>;
    setOnUrlInvokeCallback(onUrlInvokeCallback: Function): void;
    callJavaScript(js: string): void;
    close(): Promise<any>;
    hide(): Promise<any>;
    show(): Promise<any>;
}
