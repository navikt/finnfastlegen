export function cls(baseName: string, className: string | undefined): string {
    return !!className ? `${baseName} ${className}` : baseName
}