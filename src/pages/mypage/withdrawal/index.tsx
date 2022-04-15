import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

import WithdrawalClause from "../../../components/mypage/withdrawal/withdrawal-clause";

const WithdrawalStyle = styled.div`
`;

const Withdrawal = () => {
    const [agreeValue, setAgreeValue] = useState<boolean>(false)

    const withdrawalFn = async () => {
        if(agreeValue) {
            await axios.delete(`http://localhost:3001/mypage/withdrawal/${localStorage.getItem('ourplace_id')}`)
            .then(response => {
                if(response.data) {
                    console.log(response.data)
                }
                localStorage.removeItem('ourplace_name');
                localStorage.removeItem('ourplace_id');
            })
            .catch(err => alert("다시 시도해 주세요."));

            window.location.href= '/';
        } else {
            alert("동의란을 확인해주세요.")
        }
    }
    return (
        <WithdrawalStyle>
            <WithdrawalClause />

            <div className="agree">
                위 내용에 대하여 동의합니다. 
                <input type="checkbox" 
                    name="agreeCheck" 
                    className="agreeCheck" 
                    onClick={() => setAgreeValue(!agreeValue)}
                />
            </div>
            
            <button type="button"
                className="withdrawalBtn"
                onClick={withdrawalFn}
            >
                회원탈퇴
            </button>
        </WithdrawalStyle>
    )
}

export default Withdrawal