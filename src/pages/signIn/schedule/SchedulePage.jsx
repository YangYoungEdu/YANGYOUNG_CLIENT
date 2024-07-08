import styled from "styled-components";
import { DefaultDiv, RowDiv } from "../../../style/CommonStyle";
import { ReactComponent as Profile } from "../../../assets/Profile.svg";

const SchedulePage = () => {
  return (
    <ScheduleWrapper>
      <RowDiv>
        <div>나의 수업 스케줄</div>
        <ProfileIcon />
      </RowDiv>
      <RowDiv>
        
      </RowDiv>
    </ScheduleWrapper>
  );
};

const ScheduleWrapper = styled(DefaultDiv)`
  justify-content: flex-start;
`;

const ProfileIcon = styled(Profile)``;

export default SchedulePage;
