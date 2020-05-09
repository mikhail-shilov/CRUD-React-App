const initalState = {
    settings: {
        listColumnsOfTable: [
            {name: 'id', label: 'Id'},
            {name: 'firstName', label: 'Имя'},
            {name: 'lastName', label: 'Фамилия'},
            {name: 'eMail', label: 'Почта'},
            {name: 'telNo', label: 'Телефон'}
        ],

        sortMode: 'id',
        sortDirection: 'asc',
        findDraft: '',
        activeFilter: '',
        itemsPerPage: 10,
        currentPage: 1
    },
    tableData: [
        {id: 1, firstName: "Рулон", lastName: "Обоев", email: "rulon@test.io", phone: "2342342"},
        {id: 2, firstName: "Ушат", lastName: "Помоев", email: "ushat@test.io", phone: "2344672"},
        {id: 3, firstName: "Черёд", lastName: "Застоев", email: "chered@test.io", phone: "1354682"},
        {id: 4, firstName: "Налёт", lastName: "Ковбоев", email: "naljot@test.io", phone: "4337352"},
        {id: 5, firstName: "Набег", lastName: "Комрадов", email: "nabeg@test.io", phone: "7569331"},
        {id: 6, firstName: "Кумир", lastName: "Дебилов", email: "kumir@test.io", phone: "554833"}
    ],
    tableDataOutput: [{id: 3, firstName: "Черёд", lastName: "Застоев", email: "chered@test.io", phone: "1354682"},
    ]
};

const tableReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'RESORT': {
            let localState = {...state};
            localState.settings = {...state.settings};
            localState.tableDataOutput = [...state.tableDataOutput];

            if (localState.settings.sortMode === action.mode)
                if (localState.settings.sortDirection === 'asc')
                    localState.settings.sortDirection = 'desc';
                else
                    localState.settings.sortDirection = 'asc';
            else
                localState.settings.sortDirection = 'asc';

            localState.settings.sortMode = action.mode;

            localState.tableDataOutput.sort((a, b) => {
                let elemA;
                let elemB;

                switch (localState.settings.sortMode) {
                    case 'id':
                        elemA = a.id;
                        elemB = b.id;
                        break
                    case 'firstName':
                        elemA = a.firstName;
                        elemB = b.firstName;
                        break
                    case 'lastName':
                        elemA = a.lastName;
                        elemB = b.lastName;
                        break
                    case 'eMail':
                        elemA = a.email;
                        elemB = b.email;
                        break
                    case 'telNo':
                        elemA = a.phone;
                        elemB = b.phone;
                        break
                    default:
                        elemA = a.id;
                        elemB = b.id;
                        break
                }
                if (elemA < elemB) return (localState.settings.sortDirection === 'asc') ? -1 : 1;
                if (elemA > elemB) return (localState.settings.sortDirection === 'asc') ? 1 : -1;
                return 0;
            });



            return localState;
        }
        case '11RESORT': {
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
            localState.settings.findDraft = action.value;
            return localState;
        }
        case 'FILTER': {
            let localState = {...state};
            localState.settings = {...state.settings};
            localState.tableDataOutput = {...state.tableDataOutput}

            let textToFind = localState.settings.findDraft;

            localState.tableDataOutput = state.tableData.filter(
                (item) => {
                    if (
                        (item.firstName.toLowerCase().includes(textToFind.toLowerCase())) ||
                        (item.lastName.toLowerCase().includes(textToFind.toLowerCase()))
                    )
                        return 1;
                    else return 0;
                }
            );
            localState.settings.findDraft = '';
            localState.settings.sortMode = 'id';
            localState.settings.sortDirection = 'asc';
            return localState;
        }
        case 'FILTER-AND-SORT': {
            let localState = {...state};
            localState.settings = {...state.settings};
            localState.tableDataOutput = [...state.tableDataOutput]

            if (localState.settings.sortMode === action.mode) {
                if (localState.settings.sortDirection === 'asc') localState.settings.sortDirection = 'desc';
                else localState.settings.sortDirection = 'asc';
            } else {
                localState.settings.sortDirection = 'asc';
                localState.settings.sortMode = action.mode;
            }


            let textToFind = localState.settings.findDraft;

            if (action.filter == true) {

                localState.tableDataOutput = state.tableData.filter(
                    (item) => {
                        if (
                            (item.firstName.toLowerCase().includes(textToFind.toLowerCase())) ||
                            (item.lastName.toLowerCase().includes(textToFind.toLowerCase()))
                        )
                            return 1;
                        else return 0;
                    }
                );
                localState.settings.findDraft = '';
                localState.settings.sortMode = 'id';
                localState.settings.sortDirection = 'asc';
            } else {
                localState.tableDataOutput = [...state.tableData];
            }


            localState.tableDataOutput.sort((a, b) => {
                let elemA;
                let elemB;

                switch (state.settings.sortMode) {
                    case 'id':
                        elemA = a.id;
                        elemB = b.id;
                        break
                    case 'firstName':
                        elemA = a.firstName;
                        elemB = b.firstName;
                        break
                    case 'lastName':
                        elemA = a.lastName;
                        elemB = b.lastName;
                        break
                    case 'eMail':
                        elemA = a.email;
                        elemB = b.email;
                        break
                    case 'telNo':
                        elemA = a.phone;
                        elemB = b.phone;
                        break
                    default:
                        elemA = a.id;
                        elemB = b.id;
                        break
                }
                if (elemA < elemB) return (state.settings.sortDirection === 'asc') ? -1 : 1;
                if (elemA > elemB) return (state.settings.sortDirection === 'asc') ? 1 : -1;
                return 0;
            });


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
export const dataFilterSortAC = (mode, filter) => ({type: 'FILTER-AND-SORT', mode: mode, filter: filter});
