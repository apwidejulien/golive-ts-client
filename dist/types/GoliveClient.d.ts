import { Input } from './input';
import { EnvironmentInfoRequest, type PostEnvironmentInformationResponse } from './client';
export declare class GoliveClient {
    constructor(input: Input);
    sendEnvironmentInfo(info: EnvironmentInfoRequest): Promise<PostEnvironmentInformationResponse>;
}
