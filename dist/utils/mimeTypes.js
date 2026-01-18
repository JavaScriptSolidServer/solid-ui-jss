/**
 * Lightweight MIME type utilities
 *
 * Replaces the heavy mime-types package (146KB) with a small lookup
 * for common web file types.
 */
// Extension to MIME type mapping
const extToMime = {
    // Images
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    ico: 'image/x-icon',
    bmp: 'image/bmp',
    tiff: 'image/tiff',
    tif: 'image/tiff',
    avif: 'image/avif',
    // Documents
    pdf: 'application/pdf',
    doc: 'application/msword',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    xls: 'application/vnd.ms-excel',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ppt: 'application/vnd.ms-powerpoint',
    pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    odt: 'application/vnd.oasis.opendocument.text',
    ods: 'application/vnd.oasis.opendocument.spreadsheet',
    // Text
    txt: 'text/plain',
    html: 'text/html',
    htm: 'text/html',
    css: 'text/css',
    csv: 'text/csv',
    xml: 'text/xml',
    md: 'text/markdown',
    markdown: 'text/markdown',
    // Code
    js: 'text/javascript',
    mjs: 'text/javascript',
    ts: 'text/typescript',
    json: 'application/json',
    jsonld: 'application/ld+json',
    // RDF
    ttl: 'text/turtle',
    n3: 'text/n3',
    nt: 'application/n-triples',
    nq: 'application/n-quads',
    rdf: 'application/rdf+xml',
    trig: 'application/trig',
    // Audio
    mp3: 'audio/mpeg',
    wav: 'audio/wav',
    ogg: 'audio/ogg',
    oga: 'audio/ogg',
    m4a: 'audio/mp4',
    flac: 'audio/flac',
    aac: 'audio/aac',
    weba: 'audio/webm',
    // Video
    mp4: 'video/mp4',
    m4v: 'video/mp4',
    webm: 'video/webm',
    ogv: 'video/ogg',
    avi: 'video/x-msvideo',
    mov: 'video/quicktime',
    mkv: 'video/x-matroska',
    // Archives
    zip: 'application/zip',
    gz: 'application/gzip',
    tar: 'application/x-tar',
    rar: 'application/vnd.rar',
    '7z': 'application/x-7z-compressed',
    // Fonts
    woff: 'font/woff',
    woff2: 'font/woff2',
    ttf: 'font/ttf',
    otf: 'font/otf',
    eot: 'application/vnd.ms-fontobject',
    // Other
    wasm: 'application/wasm',
    bin: 'application/octet-stream',
};
// MIME type to preferred extension mapping
const mimeToExt = {};
for (const [ext, mime] of Object.entries(extToMime)) {
    // Only set if not already set (first extension wins as preferred)
    if (!mimeToExt[mime]) {
        mimeToExt[mime] = ext;
    }
}
/**
 * Get MIME type from filename
 * @param filename - The filename or path
 * @returns The MIME type or false if not found
 */
export function lookup(filename) {
    var _a;
    const ext = (_a = filename.split('.').pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    if (!ext)
        return false;
    return extToMime[ext] || false;
}
/**
 * Get preferred extension for a MIME type
 * @param mimeType - The MIME type
 * @returns The extension (without dot) or false if not found
 */
export function extension(mimeType) {
    // Handle mime types with parameters (e.g., "text/plain; charset=utf-8")
    const baseMime = mimeType.split(';')[0].trim().toLowerCase();
    return mimeToExt[baseMime] || false;
}
export default { lookup, extension };
//# sourceMappingURL=mimeTypes.js.map