"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sowRoutes = void 0;
const express_1 = __importDefault(require("express"));
const sowController_1 = require("../controllers/sowController");
const router = express_1.default.Router();
exports.sowRoutes = router;
router.post('/sows', sowController_1.createSOWHandler);
router.get('/sows/find/:sowId', sowController_1.findSOWByIdHandler);
router.put('/sows/update/:sowId', sowController_1.updateSOWHandler);
router.delete('/sows/delete/:sowId', sowController_1.deleteSOWHandler);
//# sourceMappingURL=sowRoutes.js.map