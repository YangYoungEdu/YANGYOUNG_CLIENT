import { useState, useEffect } from "react";
import styled from "styled-components";
import { DefaultDiv, RowDiv } from "../../../style/CommonStyle";
import { ReactComponent as Profile } from "../../../assets/Profile.svg";

const SchedulePage = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
  });

  const years = Array.from(
    { length: 7 },
    (_, index) => today.getFullYear() - 3 + index
  );
  const months = [
    { value: 0, label: "1월" },
    { value: 1, label: "2월" },
    { value: 2, label: "3월" },
    { value: 3, label: "4월" },
    { value: 4, label: "5월" },
    { value: 5, label: "6월" },
    { value: 6, label: "7월" },
    { value: 7, label: "8월" },
    { value: 8, label: "9월" },
    { value: 9, label: "10월" },
    { value: 10, label: "11월" },
    { value: 11, label: "12월" },
  ];

  useEffect(() => {
    const date = new Date();
    setSelectedDate({
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
    });
  }, []);

  const handleDateChange = (e, type) => {
    const { value } = e.target;
    setSelectedDate({
      ...selectedDate,
      [type]: Number(value),
    });
  };

  return (
    <ScheduleWrapper>
      <RowDiv>
        <div>나의 수업 스케줄</div>
        <ProfileIcon />
      </RowDiv>
      <RowDiv>
        <div>
          <select
            value={selectedDate.year}
            onChange={(e) => handleDateChange(e, "year")}
          >
            <option value="">년</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}년
              </option>
            ))}
          </select>
          <select
            value={selectedDate.month}
            onChange={(e) => handleDateChange(e, "month")}
          >
            <option value="">월</option>
            {months.map((month) => (
              <option key={month.value} value={month.value}>
                {month.label}
              </option>
            ))}
          </select>
        </div>
        <div>Today</div>
      </RowDiv>
    </ScheduleWrapper>
  );
};

const ScheduleWrapper = styled(DefaultDiv)`
  justify-content: flex-start;
`;

const ProfileIcon = styled(Profile)``;

export default SchedulePage;
