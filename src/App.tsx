import React, { useState } from "react";
import "./App.css";
import "./reset.css";
import Accordion from "./components/statusList/Accordion";
import StatusList from "./components/statusList/StatusList";
import { ThemeProvider } from "styled-components";
import cnTheme from "../src/theme/cnTheme";
import { ResvCard } from "./components/resvCard/ResvCardMain";

const App: React.FC = () => {
  const patientList1 = [
    {
      name: "장도숙", //이름
      chartNo: "BD123456", //차트번호
      ssn: "7401152", //주민등록번호
      cellPhone: "01026073914", // 전화번호
      visitNote: "접수메모 1 접수메모 1 접수메모 1 접수메모 1 접수메모 1", // 접수메모
      checkinAt: "20230103174520", // 접수버튼 누른 시간
      reservationNote: "예약메모 1 예약메모 1 예약메모 1 예약메모 1 예약메모", //예약메모
      patientId: 1, //환자 아이디
      scheduleId: 1, // 스케쥴 아이디
      medicalAreaCode: 1, //진료분야
      detailedAreaCode: 1, // 하위진료분야
      doctorId: 1, // 의사 아이디
      employeeId: 1, // 상담사, 담당직원 아이디
      procedureCode: 1, //시술
      visitType: 1, //진료구분(1초진, 2재초진, 3재진, 5협진-양방, 6협진-한방, 8촉탁의)
      insType: 3, //보험구분(1건보, 2일반, 3자보, 4산재)
      scheduleStatus: 11 /*  -외래 (10: 취소, 11: 예약, 12: 접수, 13: 처치, 14: 수납대기, 15: 수납완료, 16: 귀가)
															-입원 (20: 취소, 21: 입원대기, 22: 입원접수, 23: 심사대기, 24:심사중, 25: 심사완료(퇴원대기), 26: 퇴원) */,
      bookmark: 0,
      pregnant: 0,
      profileImg:
        "https://news.harvard.edu/wp-content/uploads/2014/10/hello-kitty-wallpaper-37_605.jpg",
      slips: [
        {
          appointedAt: "20230105120000", //예약시간
          StartedAt: null, //슬립 시작시간
          CompletedAt: null, // 종료시간
          scheduleId: 1, //
          slipId: 1, //
          doctorId: 1, //
          employeeId: 1, //
          procType: 10, // 상담:10, 양방진료:20, 한방진료:30, 피부관리:21, 방사선:22, 검사:25, 도수:26, 침구:31, 첩약:32
          procStatus: 2, //슬립 진행 상태 - 예약(1), 대기(2), 진행중(3), 완료(4)
          seqno: 1, //진행 순서
          chartRock: true,
          oriPrescription: false,
          chart: true,
        },
        {
          appointedAt: "20230105120000",
          StartedAt: null,
          CompletedAt: null,
          scheduleId: 1,
          slipId: 2,
          doctorId: 1,
          employeeId: 1,
          procType: 20,
          procStatus: 2,
          seqno: 2,
          chartRock: false,
          oriPrescription: false,
          chart: false,
        },
      ],
    },
    {
      name: "박태환", //이름
      chartNo: "1002", //차트번호
      ssn: "9402021", //주민등록번호
      cellPhone: "01026073194", // 전화번호
      visitNote: "접수메모입니다. 길어지면 말 줄임표, 툴팁으로 표시합니다.", // 접수메모
      checkinAt: "20230103184520", // 접수버튼 누른 시간
      reservationNote: "예약메모 1 예약메모 1 예약메모 1 예약메모 1 예약메모", //예약메모
      patientId: 2, //환자 아이디
      scheduleId: 2, // 스케쥴 아이디
      medicalAreaCode: 2, //진료분야
      detailedAreaCode: 2, // 하위진료분야
      doctorId: 1, // 의사 아이디
      employeeId: 1, // 상담사, 담당직원 아이디
      procedureCode: 2, //시술
      visitType: 1, //초진재진
      insType: 3, //보험구분
      scheduleStatus: 12 /*  -외래 (10: 취소, 11: 예약, 12: 접수, 13: 처치, 14: 수납대기, 15: 수납완료, 16: 귀가)
															-입원 (20: 취소, 21: 입원대기, 22: 입원접수, 23: 심사대기, 24:심사중, 25: 심사완료(퇴원대기), 26: 퇴원) */,
      bookmark: 1,
      pregnant: 0,
      profileImg:
        "https://item.kakaocdn.net/do/eda86b27d953e0a1bc89848fff989e659f17e489affba0627eb1eb39695f93dd",
      slips: [
        {
          appointedAt: "20230105120000", //예약시간
          StartedAt: "20230105133000", //슬립 시작시간
          CompletedAt: "20230105140000", // 종료시간
          scheduleId: 1, //
          slipId: 112, //
          doctorId: 1, //
          employeeId: 1, //
          procType: 10,
          procStatus: 4,
          seqno: 1,
          chartRock: false,
          oriPrescription: true,
          chart: true,
        },
        {
          appointedAt: "",
          StartedAt: "20230105133000",
          CompletedAt: null,
          scheduleId: 1,
          slipId: 212,
          doctorId: 1,
          employeeId: 1,
          procType: 20,
          procStatus: 3,
          seqno: 2,
          chartRock: false,
          oriPrescription: true,
          chart: true,
        },
        {
          appointedAt: "20230105120000",
          StartedAt: "20230105133000",
          CompletedAt: null,
          scheduleId: 1,
          slipId: 312,
          doctorId: 1,
          employeeId: 1,
          procType: 30,
          procStatus: 2,
          seqno: 3,
          chartRock: false,
          oriPrescription: true,
          chart: true,
        },
      ],
    },
    {
      name: "김현우", //이름
      chartNo: "1003", //차트번호
      ssn: "9401011", //주민등록번호
      cellPhone: "01026073193", // 전화번호
      visitNote: "접수메모 1 접수메모 1 접수메모 1 접수메모 1 접수메모 1", // 접수메모
      checkinAt: "20230103184520", // 접수버튼 누른 시간
      reservationNote: "예약메모 1 예약메모 1 예약메모 1 예약메모 1 예약메모", //예약메모
      patientId: 3, //환자 아이디
      scheduleId: 3, // 스케쥴 아이디
      medicalAreaCode: 3, //진료분야
      detailedAreaCode: 3, // 하위진료분야
      doctorId: 2, // 의사 아이디
      employeeId: 2, // 상담사, 담당직원 아이디
      procedureCode: 3, //시술
      visitType: 2, //초진재진
      insType: 3, //보험구분
      scheduleStatus: 12 /*  -외래 (10: 취소, 11: 예약, 12: 접수, 13: 처치, 14: 수납대기, 15: 수납완료, 16: 귀가)
															-입원 (20: 취소, 21: 입원대기, 22: 입원접수, 23: 심사대기, 24:심사중, 25: 심사완료(퇴원대기), 26: 퇴원) */,
      bookmark: 0,
      pregnant: 0,
      profileImg:
        "https://i.pinimg.com/236x/32/71/f1/3271f1c9fba13eeb7bea0275eda72e52--sanrio-gifs.jpg",
      slips: [
        {
          appointedAt: "20230105120000", //예약시간
          StartedAt: null, //슬립 시작시간
          CompletedAt: null, // 종료시간
          scheduleId: 3, //
          slipId: 111, //
          doctorId: 1, //
          employeeId: 1, //
          procType: 10,
          procStatus: 4,
          seqno: 1,
          chartRock: false,
          oriPrescription: false,
          chart: true,
        },
        {
          appointedAt: "20230105120000",
          StartedAt: null,
          CompletedAt: null,
          scheduleId: 3,
          slipId: 211,
          doctorId: 1,
          employeeId: 1,
          procType: 20,
          procStatus: 3,
          seqno: 2,
          chartRock: false,
          oriPrescription: false,
          chart: true,
        },
        {
          appointedAt: "20230105120000",
          StartedAt: null,
          CompletedAt: null,
          scheduleId: 3,
          slipId: 311,
          doctorId: 1,
          employeeId: 1,
          procType: 30,
          procStatus: 2,
          seqno: 3,
          chartRock: false,
          oriPrescription: false,
          chart: true,
        },
      ],
    },
    {
      name: "나균안", //이름
      chartNo: "1004", //차트번호
      ssn: "9704222", //주민등록번호
      cellPhone: "01026073193", // 전화번호
      visitNote: "접수메모 1 접수메모 1 접수메모 1 접수메모 1 접수메모 1", // 접수메모
      checkinAt: "20230103184520", // 접수버튼 누른 시간
      reservationNote: "예약메모 1 예약메모 1 예약메모 1 예약메모 1 예약메모", //예약메모
      patientId: 4, //환자 아이디
      scheduleId: 3, // 스케쥴 아이디
      medicalAreaCode: 3, //진료분야
      detailedAreaCode: 3, // 하위진료분야
      doctorId: 2, // 의사 아이디
      employeeId: 2, // 상담사, 담당직원 아이디
      procedureCode: 3, //시술
      visitType: 2, //초진재진
      insType: 1, //보험구분
      scheduleStatus: 12 /*  -외래 (10: 취소, 11: 예약, 12: 접수, 13: 처치, 14: 수납대기, 15: 수납완료, 16: 귀가)
															-입원 (20: 취소, 21: 입원대기, 22: 입원접수, 23: 심사대기, 24:심사중, 25: 심사완료(퇴원대기), 26: 퇴원) */,
      bookmark: 1,
      pregnant: 0,
      profileImg:
        "https://i.pinimg.com/236x/32/71/f1/3271f1c9fba13eeb7bea0275eda72e52--sanrio-gifs.jpg",
      slips: [
        {
          appointedAt: "20230105130000", //예약시간
          StartedAt: null, //슬립 시작시간
          CompletedAt: null, // 종료시간
          scheduleId: 3, //
          slipId: 11211, //
          doctorId: 1, //
          employeeId: 1, //
          procType: 10,
          procStatus: 4,
          seqno: 1,
          chartRock: true,
          oriPrescription: false,
          chart: true,
        },
        {
          appointedAt: "20230105140000",
          StartedAt: null,
          CompletedAt: null,
          scheduleId: 3,
          slipId: 21211,
          doctorId: 1,
          employeeId: 1,
          procType: 25,
          procStatus: 3,
          seqno: 2,
          chartRock: false,
          oriPrescription: false,
          chart: true,
        },
        {
          appointedAt: "20230105150000",
          StartedAt: null,
          CompletedAt: null,
          scheduleId: 3,
          slipId: 31211,
          doctorId: 1,
          employeeId: 1,
          procType: 31,
          procStatus: 2,
          seqno: 3,
        },
      ],
    },
    {
      name: "황성빈", //이름
      chartNo: "BD979795", //차트번호
      ssn: "9901181", //주민등록번호
      cellPhone: "01026073193", // 전화번호
      visitNote: "접수메모 1 접수메모 1 접수메모 1 접수메모 1 접수메모 1", // 접수메모
      checkinAt: "20230103194520", // 접수버튼 누른 시간
      reservationNote: "예약메모 1 예약메모 1 예약메모 1 예약메모 1 예약메모", //예약메모
      patientId: 4, //환자 아이디
      scheduleId: 3, // 스케쥴 아이디
      medicalAreaCode: 3, //진료분야
      detailedAreaCode: 3, // 하위진료분야
      doctorId: 2, // 의사 아이디
      employeeId: 2, // 상담사, 담당직원 아이디
      procedureCode: 3, //시술
      visitType: 2, //초진재진
      insType: 2, //보험구분
      scheduleStatus: 12 /*  -외래 (10: 취소, 11: 예약, 12: 접수, 13: 처치, 14: 수납대기, 15: 수납완료, 16: 귀가)
															-입원 (20: 취소, 21: 입원대기, 22: 입원접수, 23: 심사대기, 24:심사중, 25: 심사완료(퇴원대기), 26: 퇴원) */,
      bookmark: 1,
      pregnant: 0,
      profileImg:
        "https://i.pinimg.com/236x/32/71/f1/3271f1c9fba13eeb7bea0275eda72e52--sanrio-gifs.jpg",
      slips: [
        {
          appointedAt: "20230105120000", //예약시간
          StartedAt: null, //슬립 시작시간
          CompletedAt: null, // 종료시간
          scheduleId: 333, //
          slipId: 11111, //
          doctorId: 1, //
          employeeId: 1, //
          procType: 10,
          procStatus: 4,
          seqno: 1,
          chartRock: false,
          oriPrescription: false,
          chart: true,
        },
        {
          appointedAt: "20230105120000",
          StartedAt: null,
          CompletedAt: null,
          scheduleId: 444,
          slipId: 21111,
          doctorId: 1,
          employeeId: 1,
          procType: 25,
          procStatus: 3,
          seqno: 2,
          chartRock: false,
          oriPrescription: false,
          chart: true,
        },
        {
          appointedAt: "20230105120000",
          StartedAt: null,
          CompletedAt: null,
          scheduleId: 555,
          slipId: 31111,
          doctorId: 1,
          employeeId: 1,
          procType: 31,
          procStatus: 2,
          seqno: 3,
        },
      ],
    },
  ];

  return (
    <ThemeProvider theme={cnTheme}>
      {/*       
      <Accordion />
       */}
        <ResvCard>
          <ResvCard.
        </ResvCard>
       
      {/* <StatusList patientList={patientList1} /> */}
    </ThemeProvider>
  );
};
export default App;
