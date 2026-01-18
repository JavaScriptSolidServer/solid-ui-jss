/**
 * Lightweight MIME type utilities
 *
 * Replaces the heavy mime-types package (146KB) with a small lookup
 * for common web file types.
 */
/**
 * Get MIME type from filename
 * @param filename - The filename or path
 * @returns The MIME type or false if not found
 */
export declare function lookup(filename: string): string | false;
/**
 * Get preferred extension for a MIME type
 * @param mimeType - The MIME type
 * @returns The extension (without dot) or false if not found
 */
export declare function extension(mimeType: string): string | false;
declare const _default: {
    lookup: typeof lookup;
    extension: typeof extension;
};
export default _default;
//# sourceMappingURL=mimeTypes.d.ts.map