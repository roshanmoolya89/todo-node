"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestTimeline = (req, res, next) => {
    const startedAt = Date.now();
    res.locals.requestStartedAt = startedAt;
    console.log(`[timeline] ${req.method} ${req.originalUrl} began at ${startedAt}`);
    res.on("finish", () => {
        const duration = Date.now() - startedAt;
        console.log(`[timeline] ${req.method} ${req.originalUrl} finished in ${duration}ms`);
    });
    next();
};
exports.default = requestTimeline;
//# sourceMappingURL=requestTimeline.js.map