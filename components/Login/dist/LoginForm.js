"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_native_paper_1 = require("react-native-paper");
var react_native_simple_toast_1 = require("react-native-simple-toast");
var native_1 = require("@react-navigation/native");
var react_redux_1 = require("react-redux");
var react_1 = require("react");
var userSlice_1 = require("../../store/slices/userSlice");
var LoginForm = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState({
        username: '',
        password: ''
    }), formInput = _b[0], setFormInput = _b[1];
    var _c = react_1.useState(false), showPassword = _c[0], setShowPassword = _c[1];
    var _d = react_1.useState(false), formSubmitted = _d[0], setFormSubmitted = _d[1];
    var dispatch = react_redux_1.useDispatch();
    var isLoading = react_redux_1.useSelector(userSlice_1.selectUserLoading);
    var loggedIn = react_redux_1.useSelector(userSlice_1.selectUserLoggedIn);
    var error = react_redux_1.useSelector(userSlice_1.selectUserError);
    react_1.useEffect(function () {
        if (loggedIn) {
            react_native_simple_toast_1["default"].show('Login Berhasil!', react_native_simple_toast_1["default"].LONG);
            navigation.dispatch(native_1.CommonActions.reset({
                index: 0,
                routes: [{ name: 'mainPage', params: { username: formInput.username } }]
            }));
        }
        else if (formSubmitted && error) {
            react_native_simple_toast_1["default"].show(error, react_native_simple_toast_1["default"].LONG);
        }
    }, [loggedIn, error]);
    var handleUsernameInput = function (username) {
        setFormInput(__assign(__assign({}, formInput), { username: username }));
    };
    var handlePasswordInput = function (password) {
        setFormInput(__assign(__assign({}, formInput), { password: password }));
    };
    var hasUsername = function () {
        return formInput.username.length === 0;
    };
    var hasPassword = function () {
        return formInput.password.length === 0;
    };
    var validateUserLogin = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setFormSubmitted(true);
            if (!hasUsername() && !hasPassword()) {
                dispatch(userSlice_1.getUserLoginData(formInput));
            }
            else {
                console.log('Data input kosong');
            }
            return [2 /*return*/];
        });
    }); };
    var handleFormSubmit = function () {
        validateUserLogin();
    };
    return (react_1["default"].createElement(react_native_1.View, { className: "flex-1 flex-col justify-center items-center gap-y-8" },
        react_1["default"].createElement(react_native_1.Text, { className: "text-2xl font-semibold text-black tracking-wide -mt-2" }, "Sign In"),
        react_1["default"].createElement(react_native_paper_1.Surface, { elevation: 5, className: "rounded-xl" },
            react_1["default"].createElement(react_native_1.View, { className: "container h-[300px] w-[300px] bg-white/80 rounded-xl p-5" },
                react_1["default"].createElement(react_native_paper_1.TextInput, { mode: "outlined", label: "Username", placeholder: "Enter your username", outlineColor: "#94a3b8", outlineStyle: {
                        borderRadius: 10
                    }, activeOutlineColor: "#334155", className: "w-full shadow-xl", onChangeText: handleUsernameInput, value: formInput.username, right: react_1["default"].createElement(react_native_paper_1.TextInput.Icon, { icon: "at", pointerEvents: "none" }) }),
                formSubmitted && hasUsername() && (react_1["default"].createElement(react_native_paper_1.HelperText, { type: "error" }, "Username tidak boleh kosong!")),
                react_1["default"].createElement(react_native_paper_1.TextInput, { mode: "outlined", label: "Password", placeholder: "Enter your password", secureTextEntry: !showPassword, outlineColor: "#94a3b8", outlineStyle: {
                        borderRadius: 10
                    }, activeOutlineColor: "#334155", className: "mt-5 shadow-xl rounded-full", onChangeText: handlePasswordInput, value: formInput.password, right: react_1["default"].createElement(react_native_paper_1.TextInput.Icon, { icon: showPassword ? 'eye-off' : 'eye', onPress: function () { return setShowPassword(!showPassword); } }) }),
                formSubmitted && hasPassword() && (react_1["default"].createElement(react_native_paper_1.HelperText, { type: "error" }, "Password tidak boleh kosong!")),
                react_1["default"].createElement(react_native_1.View, { className: "w-full flex justify-center items-center mt-16 " + (formSubmitted
                        ? !hasUsername() && !hasPassword()
                            ? 'mt-16'
                            : !hasUsername() || !hasPassword()
                                ? 'mt-8'
                                : 'mt-4'
                        : '') },
                    react_1["default"].createElement(react_native_paper_1.Surface, { elevation: 3, className: "rounded-full" },
                        react_1["default"].createElement(react_native_paper_1.Button, { mode: "contained-tonal", className: "w-[60%]", buttonColor: "#f7ebd7", style: {
                                borderWidth: 1,
                                borderColor: '#64748b',
                                borderRadius: 50
                            }, textColor: "black", rippleColor: "white", onPress: handleFormSubmit }, isLoading ? 'Loading...' : 'Login'))))),
        react_1["default"].createElement(react_native_1.Text, { className: "text-sm text-black tracking-tighter" }, "Your Hardware ID:")));
};
exports["default"] = LoginForm;
