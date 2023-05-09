import React, {
  Children,
  cloneElement,
  Context,
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";
import styled from "@emotion/styled";
import { Typography, ListItem, Box, Divider } from "@mui/material";

import visitType1 from "../../../images/icon_visitType1.svg";
import visitType2 from "../../../images/icon_visitType2.svg";
import visitType3 from "../../../images/icon_visitType3.svg";
import insType1 from "../../../images/icon_insType1.svg";
import insType2 from "../../../images/icon_insType2.svg";
import insType3 from "../../../images/icon_insType3.svg";

import cnTheme from "../../../theme/cnTheme";

const STypography = styled(Typography)<{ component?: React.ElementType }>({
  "&.MuiTypography-root": {
    fontSize: 13,
  },
});

const SPatientBox = styled(Box)<{ component?: React.ElementType }>({
  "&.MuiBox-root": {
    display: "flex",
    flexDirection: "row",
    width: 171,
  },
});

const SPatientTypography = styled(Typography)<{
  component?: React.ElementType;
}>({
  "&.MuiTypography-root": {
    fontSize: 13,
    fontWeight: 700,
    marginRight: 7,
  },
});

const SListItem = styled(ListItem)<{ component?: React.ElementType }>({
  "& .MuiListItem-root": {
    width: 448,
    height: 36,
  },
});

const SImgIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const SDivider = styled(Divider)<{ component?: React.ElementType }>({
  "&.MuiDivider-root": {
    backgroundColor: `${cnTheme.secondary.bg1}`,
  },
});

/** 시간 */
interface TimeProps {
  checkinAt: string;
}

export const TimeItem = ({ checkinAt }: TimeProps) => {
  const formatTime = (time: string) => {
    return `${time.slice(8, 10)}:${time.slice(10, 12)}`;
  };

  return (
    <>
      <STypography style={{ width: "66px" }}>
        {formatTime(checkinAt)}
      </STypography>
    </>
  );
};

/** 환자 */
interface PatientProps {
  chartNo: string;
  name: string;
  ssn: string;
}

export const PatientItem = ({ chartNo, name, ssn }: PatientProps) => {
  const formatSsn = (ssn: string) => {
    return `${ssn.substring(0, 6)}-${ssn.substring(6, 7)}`;
  };
  return (
    <SPatientBox>
      <SPatientTypography
        style={{
          width: "50px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        {chartNo}
      </SPatientTypography>
      <SPatientTypography>{name}</SPatientTypography>
      <SPatientTypography>{formatSsn(ssn)}</SPatientTypography>
    </SPatientBox>
  );
};

/** 스케줄 */
interface ScheduleProps {
  visitType: number;
  insType: number;
}

export const ScheduleItem = ({ visitType, insType }: ScheduleProps) => {
  const formatVisitType = (visitType: number) => {
    switch (visitType) {
      case 1:
        return <SImgIcon src={visitType1} />;
      case 2:
        return <SImgIcon src={visitType2} />;
      case 3:
        return <SImgIcon src={visitType3} />;
      default:
        return;
    }
  };
  const formatInsType = (insType: number) => {
    switch (insType) {
      case 1:
        return <SImgIcon src={insType1} />;
      case 2:
        return <SImgIcon src={insType2} />;
      case 3:
        return <SImgIcon src={insType3} />;

      default:
        return;
    }
  };
  return (
    <>
      <STypography>{formatVisitType(visitType)}</STypography>
      <STypography>{formatInsType(insType)}</STypography>
    </>
  );
};

interface StatusListWrapProps {
  children?: ReactNode;
}

export const StatusListWrap = ({ children }: StatusListWrapProps) => {
  return (
    <>
      <ListItem>{children}</ListItem>
      <SDivider />
    </>
  );
};
