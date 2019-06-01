/** Version select option singature */
export interface VersionOption {
    /** Version value */
    value: string;
    /** Version label */
    label: string;
}

/** Component behavior hook signature */
export interface Behavior {
    value: VersionOption | undefined;
    options: VersionOption[];
    getOptionValue(option: VersionOption): string;
    getOptionLabel(option: VersionOption): string;
    onChange(param?: VersionOption | ReadonlyArray<VersionOption> | null | undefined): void;
}
