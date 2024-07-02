import { Input } from './input';
export type RunOccurrence = {
    id: number;
    title: string;
    commitId?: string;
    commitMessage?: string;
};
export declare class GithubClient {
    private readonly octokit;
    constructor(input: Input);
    private get client();
    getAllRunsSinceLastSuccess(): Promise<RunOccurrence[]>;
}
