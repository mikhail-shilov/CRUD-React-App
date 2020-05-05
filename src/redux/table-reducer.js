const initalState = {
    settings: {
        sortMode: 'id',
        sortDirection: 'asc',
        findString: '',
        itemsPerPage: 10,
        listColumnsOfTable: [
            {name: 'id', label: 'Id'},
            {name: 'firstName', label: 'Имя'},
            {name: 'lastName', label: 'Фамилия'},
            {name: 'eMail', label: 'Почта'},
            {name: 'telNo', label: 'Телефон'}
        ]
    },
    tableData: [
        {id: 1, firstName: "Рулон", lastName: "Обоев", email: "rulon@test.io", phone: "2342342"},
        {id: 2, firstName: "Ушат", lastName: "Помоев", email: "ushat@test.io", phone: "2344672"},
        {id: 3, firstName: "Черёд", lastName: "Застоев", email: "chered@test.io", phone: "1354682"},
        {id: 4, firstName: "Налёт", lastName: "Ковбоев", email: "naljot@test.io", phone: "4337352"},
        {id: 5, firstName: "Набег", lastName: "Комрадов", email: "nabeg@test.io", phone: "7569331"},
        {id: 6, firstName: "Кумир", lastName: "Дебилов", email: "kumir@test.io", phone: "554833"}
    ],
    tableDataOutput: [
        {id: 1, firstName: "Рулон", lastName: "Обоев", email: "rulon@test.io", phone: "2342342"},
        {id: 2, firstName: "Ушат", lastName: "Помоев", email: "ushat@test.io", phone: "2344672"},
        {id: 3, firstName: "Черёд", lastName: "Застоев", email: "chered@test.io", phone: "1354682"},
        {id: 4, firstName: "Налёт", lastName: "Ковбоев", email: "naljot@test.io", phone: "4337352"},
        {id: 5, firstName: "Набег", lastName: "Комрадов", email: "nabeg@test.io", phone: "7569331"},
        {id: 6, firstName: "Кумир", lastName: "Дебилов", email: "kumir@test.io", phone: "554833"}
    ]
};

const tableReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'RESORT': {
            let localState = {...state};
            localState.settings = {...state.settings};
            if (localState.settings.sortMode === action.mode)
                if (localState.settings.sortDirection === 'asc')
                    localState.settings.sortDirection = 'desc';
                else
                    localState.settings.sortDirection = 'asc';
            else
                localState.settings.sortDirection = 'asc';

            localState.settings.sortMode = action.mode;

            return localState;
        }
        case 'UPDATE-FIND-STRING': {
            let localState = {...state};
            localState.settings = {...state.settings};
            localState.settings.findString = action.value;
            return localState;
        }
        case 'FILTER': {
            let localState = {...state};
            localState.settings = {...state.settings};
            localState.tableDataOutput = {...state.tableDataOutput}

            let textToFind = localState.settings.findString;

            localState.tableDataOutput = state.tableData.filter(
                (item) => {
                    if (
                        (item.firstName.toLowerCase().includes(textToFind.toLowerCase())) ||
                        (item.lastName.toLowerCase().includes(textToFind.toLowerCase()))
                    )
                    return 1;
                }
            );
            localState.settings.findString = '';
            localState.settings.sortMode = 'id';
            localState.settings.sortDirection = 'asc';
            return localState;
        }
        default: {
            return state;
        }
    }
};
export default tableReducer;

export const setSortModeAC = (mode) => ({type: 'RESORT', mode: mode});
export const dataFilterAC = () => ({type: 'FILTER'});
export const updateFindStringAC = (value) => ({type: 'UPDATE-FIND-STRING', value: value});
