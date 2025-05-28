export function isWebEnvironment(): boolean {
    return typeof window !== 'undefined' && 'localStorage' in window;
}