import React from "react";
import styled from "@emotion/styled";

import {
  StatusListWrap,
  PatientItem,
  TimeItem,
  ScheduleItem,
} from "./ui/StatusListItem";

import { List } from "@mui/material";

import cnTheme from "../../theme/cnTheme";

const SList = styled(List)<{ component?: React.ElementType }>({
  "&.MuiList-root": {
    padding: 0,
    width: 448,
  },
  "&.MuiListItem-root": {
    width: 448,
    height: 36,
  },
  "&.MuiListItem-padding": {
    padding: "10 15",
  },
});

interface StatusListProps {
  patientList: any[];
}

export default function StatusList({ patientList }: StatusListProps) {
  return (
    <SList>
      {patientList.map((patient) => (
        <StatusListWrap key={patient.chartNo}>
          <TimeItem checkinAt={patient.checkinAt} />
          <PatientItem
            chartNo={patient.chartNo}
            name={patient.name}
            ssn={patient.ssn}
          />
          <ScheduleItem
            visitType={patient.visitType}
            insType={patient.insType}
          />
        </StatusListWrap>
      ))}
    </SList>
  );
}
