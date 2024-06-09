"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.organizationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const organizationController_1 = require("../controllers/organizationController");
const router = express_1.default.Router();
exports.organizationRoutes = router;
router.post('/organizations/register', organizationController_1.registerOrganizations);
//# sourceMappingURL=organizationRoutes.js.map