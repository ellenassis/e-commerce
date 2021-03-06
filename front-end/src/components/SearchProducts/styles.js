import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
`;
export const Title = styled.h1`
    margin: 20px;
`;
export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 725px) {
        flex-wrap: wrap;
    }
`;
export const Filter = styled.span`
    margin: 20px;
`;

export const FilterText = styled.span `
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;

    @media (max-width: 450px) {
        font-size: 16px;
    }
`;

export const Select = styled.select `
    padding: 10px;
    margin-right: 20px;

    @media (max-width: 760px) {
        margin-right: 10px;
    }
`;

export const Option = styled.option `
`;
