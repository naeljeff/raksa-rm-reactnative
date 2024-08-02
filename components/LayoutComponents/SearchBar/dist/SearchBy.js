"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_native_element_dropdown_1 = require("react-native-element-dropdown");
var react_1 = require("react");
var SearchBy = function (_a) {
    var onSearchByChange = _a.onSearchByChange, searchTab = _a.searchTab;
    var _b = react_1.useState(''), selected = _b[0], setSelected = _b[1];
    var _c = react_1.useState([]), searchByList = _c[0], setSearchByList = _c[1];
    react_1.useEffect(function () {
        switch (searchTab) {
            case 'IncomingJob':
                setSearchByList([
                    { name: 'None', value: 'none' },
                    { name: 'No Pengajuan', value: 'noPengajuanSurvey' },
                    { name: 'Alamat Survey', value: 'alamat' },
                    { name: 'No Telepon', value: 'noTelp' },
                    { name: 'Merek', value: 'merek' },
                    { name: 'Tipe', value: 'tipe' },
                    { name: 'Model', value: 'model' },
                    { name: 'Jenis Asuransi', value: 'jenisAsuransi' },
                    { name: 'Plat Nomor', value: 'platNomor' },
                ]);
                break;
            case 'JobMonitoring':
                setSearchByList([
                    { name: 'None', value: 'none' },
                    { name: 'No Pengajuan', value: 'noPengajuanSurvey' },
                    { name: 'Nama Surveyor', value: 'surveyorName' },
                    { name: 'Tanggal Request', value: 'requestDate' },
                    { name: 'Insured Name', value: 'insuredName' },
                ]);
                break;
            case 'MySurvey':
                setSearchByList([
                    { name: 'None', value: 'none' },
                    { name: 'No Pengajuan', value: 'noPengajuanSurvey' },
                    { name: 'Alamat Survey', value: 'alamat' },
                    { name: 'No Telepon', value: 'noTelp' },
                    { name: 'Merek', value: 'merek' },
                    { name: 'Tipe', value: 'tipe' },
                    { name: 'Model', value: 'model' },
                ]);
                break;
            case 'History':
                setSearchByList([
                    { name: 'None', value: 'none' },
                    { name: 'No Pengajuan', value: 'noPengajuanSurvey' },
                    { name: 'Alamat Survey', value: 'alamat' },
                    { name: 'No Telepon', value: 'noTelp' },
                    { name: 'Merek', value: 'merek' },
                    { name: 'Tipe', value: 'tipe' },
                    { name: 'Model', value: 'model' },
                    { name: 'Jenis Asuransi', value: 'jenisAsuransi' },
                    { name: 'Plat Nomor', value: 'platNomor' },
                ]);
                break;
            default:
                setSearchByList([]);
                break;
        }
    }, [searchTab]);
    var handleSearchBy = function (option) {
        console.log('Selected option:', option);
        if (option.value === 'none') {
            setSelected(option.name);
            onSearchByChange('');
        }
        else {
            setSelected(option.value);
            onSearchByChange(option.value);
        }
    };
    return (react_1["default"].createElement(react_native_1.View, { className: "w-[33%] mt-4 ml-3" },
        react_1["default"].createElement(react_native_element_dropdown_1.Dropdown, { data: searchByList, search: true, activeColor: "#f7ebd7", maxHeight: 300, labelField: "name", valueField: "value", placeholder: "Search By", searchPlaceholder: "Search By", value: selected, selectedTextStyle: { fontSize: 12, color: 'black' }, itemTextStyle: { fontSize: 12, color: 'black' }, inputSearchStyle: { fontSize: 12, color: 'black' }, placeholderStyle: { fontSize: 12, color: 'black' }, style: { paddingHorizontal: 4 }, onChange: function (option) { return handleSearchBy(option); } })));
};
exports["default"] = SearchBy;
