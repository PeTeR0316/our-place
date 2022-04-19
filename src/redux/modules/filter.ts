// 리뷰 리스트 필터값 타입 생성
const FILTER_VALUE = 'filter/FILTER_VALUE' as const;

// 액션 함수 생성 
export const filterValue = (value:string) => ({
    type: FILTER_VALUE,
    payload: value
});

//action 파라미터 타입 설정
type FilterAction = | ReturnType<typeof filterValue>;

// state 타입 지정
type FilterState = {
    filter: string;
};

// state 초기화
const initialState: FilterState = {
    filter: "latest"
};

//리듀서 생성
function filter(state: FilterState = initialState, action: FilterAction) {
    switch(action.type) {
        case FILTER_VALUE:
            return { filter: action.payload };
        default:
            return state;
    }
};

export default filter;