"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
exports.__esModule = true;
exports.getDataCount = exports.selectSpecificJob = exports.selectRefreshing = exports.selectData = exports.setSpecificJob = exports.stopRefreshing = exports.startRefreshing = exports.fetchSpecificJob = exports.fetchData = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var getSurveyData_1 = require("../../services/api/survey/getSurveyData");
// Buat initial state
var initialState = {
    data: [],
    refreshing: false,
    specificJob: undefined
};
// Fetch the data dari api -> thunk middleware
exports.fetchData = toolkit_1.createAsyncThunk('survey/fetchData', function () { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getSurveyData_1.fetchSurveyData()];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); });
exports.fetchSpecificJob = toolkit_1.createAsyncThunk('survey/fetchSpecificJob', function (_a) {
    var noPengajuanSurvey = _a.noPengajuanSurvey, unitNo = _a.unitNo;
    return __awaiter(void 0, void 0, void 0, function () {
        var response, specificJob;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getSurveyData_1.fetchSurveyData()];
                case 1:
                    response = _b.sent();
                    specificJob = response.data.find(function (item) {
                        return item.noPengajuanSurvey === noPengajuanSurvey && item.unitNo === unitNo;
                    });
                    return [2 /*return*/, specificJob];
            }
        });
    });
});
var surveySlice = toolkit_1.createSlice({
    name: 'survey',
    initialState: initialState,
    reducers: {
        startRefreshing: function (state) {
            state.refreshing = true;
        },
        stopRefreshing: function (state) {
            state.refreshing = false;
        },
        setSpecificJob: function (state, action) {
            state.specificJob = action.payload;
        }
    },
    extraReducers: function (builder) {
        // Builder buat fetch data
        builder.addCase(exports.fetchData.fulfilled, function (state, action) {
            // Simpen datanya dari payload ke state
            state.data = action.payload;
            state.refreshing = false;
        });
        // Kalau pending
        builder.addCase(exports.fetchData.pending, function (state, action) {
            state.refreshing = true;
        });
        // Kalau rejected
        builder.addCase(exports.fetchData.rejected, function (state, action) {
            state.refreshing = false;
        });
        // For specific job
        builder.addCase(exports.fetchSpecificJob.fulfilled, function (state, action) {
            state.specificJob = action.payload;
        });
    }
});
exports.startRefreshing = (_a = surveySlice.actions, _a.startRefreshing), exports.stopRefreshing = _a.stopRefreshing, exports.setSpecificJob = _a.setSpecificJob;
exports.selectData = function (state) { return state.survey.data; };
exports.selectRefreshing = function (state) { return state.survey.refreshing; };
exports.selectSpecificJob = function (state) { return state.survey.specificJob; };
exports.getDataCount = function (state) { return state.survey.data.length; };
exports["default"] = surveySlice.reducer;
