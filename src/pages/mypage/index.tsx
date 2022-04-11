import React from "react";
import styled from "styled-components";

import MypageComponent from "../../components/mypage";

const MypageStyle = styled.div`
`;

const Mypage = () => {
    return (
        <MypageStyle>
            <MypageComponent />
        </MypageStyle>
    )
};

export default Mypage;