 import logo from './logo.svg';
import './App.css';
import ViewComponent from './component/viewcomponent';
import Secondcomponent from './component/secondcomponent';
import PaymEmployeeForm from './components/paymEmployee/paymEmployeeForm';
import CustomizedTables from './components/paymEmployee/CustomizedTables';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

import PaymBranchForm from './components/PaymBranch/PaymBranchForm'
import SampleTable from './components/SampleTable';
import PaymEmpTable from './components/paymEmployee/PaymEmpTable';
import PaymCompanyForm from './components/paymCompany/paymCompanyForm'
import AssetsTable from './components/Assets/AssetsTable';
import Sampleform from './components/Assets/sampleform';
import AttendenceTable from './components/AttendeceCeiling/AttendenceTable';
import AttendenceForm from './components/AttendeceCeiling/attendenceform';
import EarnDeductTable from './components/Earn Deduct/EarnDeductTable';
import EarnDeductForm from './components/Earn Deduct/EarnDeductForm'
import Form7table from './components/Form7/Form7table';
import SampleForm7 from './components/Form7/form7form';
import HrAuthenticationTable from './components/hrauthentication/HrAuthenticationTable';
import HrAuthForm  from './components/hrauthentication/HrAuthenticationForm';
import Hrmcoursetable from './components/hrmcourse/hrmcoursetable';
import HrmmCourseForm  from './components/hrmcourse/HrmmCourseForm';
import Hrmskillmastertable from './components/hrmskillmaster/Hrmskillmastertable';
import SkillsMasterForm from './components/hrmskillmaster/HrmmSkillsMasterForm';
import HrmmSpecializationtable from './components/hrmSpecilization/HrmmSpecializationtable';
import SpecializationForm from './components/hrmSpecilization/HrmmSpecializationForm';
import LeaveAppForm from './components/LeaveApply/LeaveApplyForm';
import LeaveApplyTable from './components/LeaveApply/LeaveApplyTable';
import LeaveSettleForm from './components/LeaveSettlement/LeaveSettlementForm';
import LeaveSettlementTable from './components/LeaveSettlement/LeaveSettlementTable';
import LeaveAllocationMasterTable from './components/LeaveAllocationMaster/LeaveAllocationMasterTable';
import LeaveAllocationForm from './components/LeaveAllocationMaster/LeaveAllocationMasterForm';
import LeaveApproveHrTable from './components/LeaveApproveHr/LeaveApproveHrTable';
import ApprovehrForm from './components/LeaveApproveHr/LeaveApproveHrForm';
import LoanPostTable from './components/LoanPost/LoanPostTable';
import LoanPostForm from './components/LoanPost/LoanPostForm';
import LoanPreCloserTable from './components/LoanPreCloser/LoanPreCloserTable';
import LoanPreclosForm from './components/LoanPreCloser/LoanPreclosureForm';
import Sample28 from './components/PaymLoan/PayLoanForm';
import PaymLoanTable from './components/PaymLoan/PaymLoanTable';
import LoanEntryTable from './components/LoanEntry/LoanEntryTable';
import LoanEntForm from './components/LoanEntry/LoanEntryForm';
import OnDutyTable from './components/OnDuty/OnDutyTable';
import OndutyForm from './components/OnDuty/ondutyForm';
import OtsLabTable from './components/OtsLabs/OtsLabTable';
import OTSlabForm from './components/OtsLabs/OTSLabForm';
import Payslip from './components/payslips/Payslips';
import Hello from './components/payslips/Payslips';
import Paycalc from './components/payslips/Payslips';
import { Grid, Button } from '@mui/material';
import generatePDF from 'react-to-pdf';
import { useRef } from 'react';
import ButtonPrint from './components/ButtonPrint'
import DailyTimeCardTables from './components/DailyTimeCard/DailyTimeCardTables';
import { inputDailyTimecardForm } from './components/DailyTimeCard/DailyTimeCard';
import DailyTimeCardForm from './components/DailyTimeCard/DailyTimeCardForm';
import PaymAttBonusTable from './components/PaymAttBonus/PaymAttBonusTable';
import PaymattbonusForm from './components/PaymAttBonus/PaymAttBonusForm';
import PaymBankTable from './components/PaymBank/paymbankTables';
import PaybankForm from './components/PaymBank/paymbankForm';
import PaymcarryForwardTable from './components/paymcarryForward/PaymcarryForwardTable';
import PaymCarrForwardForm from './components/paymcarryForward/paymCarryForwardForm'
import PaymCategoryTable from './components/PaymCategory/PaymCategoryTable';
import Paymcategoryform from './components/PaymCategory/PaymCategoryForm';
import PaymComputationtables from './components/PaymComputation/PaymComputationtables';
import ComputationForm from './components/PaymComputation/paymComputationForm';
import PaymDeductionTable from './components/PaymDeduction/paymDeductionTable';
import DeductionForm from './components/PaymDeduction/paymDeductionForm';
import PaymDepartmentTable from './components/paymDepartment/paymDepartmentTable';
import DepartmentForm from './components/paymDepartment/paymDepartmentForm';
import PaymDesignationTable from './components/paymDesignation/PaymDesignationTable';
import DesignationForm from './components/paymDesignation/PaymDesignationForm';
import PaymDIvisionTable from './components/paymDivision/PaymDivisionTable';
import DivisionForm from './components/paymDivision/paymDivisionForm';
import PaymEarningsTable from './components/PaymEarnings/PaymEarningTable';
import EarningsForm from './components/PaymEarnings/paymEarningsForm';
import PaymEmpDeductionTable from './components/PaymEmpDeduction/PaymEmpDeductionTable';
import EmpDeductionForm from './components/PaymEmpDeduction/paymEmpDeductionForm';
import PaymEmpEarningsTable from './components/PaymEmpEarning/PaymEmpEarningTable';
import EmpEarningsForm from './components/PaymEmpEarning/paymEmpEarningsForm';
import PaymEmployeeLeaveTable from './components/PaymEmpEarning/PaymEmpEarningTable';
import EmployeeLeaveForm from './components/PaymEmployeeLeave/paymEmployeeLeaveForm';
import EmployeeProfile1Form from './components/paymEmployeeProfile/paymEmployeeProfile1Form';
import PaymEmployeeProfile1Tables from './components/paymEmployeeProfile/paymEmployeeProfileTables';
import PaymEmployeeWorkDetailTables from './components/PaymEmployeeWorkDetails/paymEmployeeWorkDetailsTable';
import EmployeeWorkDetailsForm from './components/PaymEmployeeWorkDetails/paymEmployeeWorkDetailsForm';
import PaymEncashmentDetailsTables from './components/PaymEncashmentDetails/paymEncashmentDetailsTable';
import EncashmentDetailsForm from './components/PaymEncashmentDetails/paymEncashmentDetailsForm';
import GradeForm from './components/PaymGrade/paymGradeForm';
import PaymgradeTables from './components/PaymGrade/PaymGradeTables';
import HolidayForm from './components/PaymHolidays/paymHolidaysForm';
import PaymHolidayTables from './components/PaymHolidays/PaymHolidaysTables';
import PaymJobStatusTable from './components/JobStatus/paymJobStatusTables';
import JobStatusForm from './components/JobStatus/paymJobStatusForm';
import PaymleaveTables from './components/PaymLeave/paymleaveTable';
import LeaveForm from './components/PaymLeave/paymleaveForm';
import LeaveAllocation1Form from './components/PaymLeaveAllocation1/paymleaveAllocation1Form';
import Paymleaveallocation1Tables from './components/PaymLeaveAllocation1/paymLeaveAllocation1table';
import LevelForm from './components/PaymLevel/paymLevelForm';
import PaymlevelTables from './components/PaymLevel/paymLevelTables';
import TempshiftdetailsTables from './components/TempShiftDetails/tempshiftdetailsTable';
import ShiftDetailsForm from './components/TempShiftDetails/tempshiftdetailsForm';
import Sample27 from './components/PaymloanDiminshing/paymloandiminishingForm';
import PaymLoanDiminishingTable from './components/PaymloanDiminshing/paymloandiminshingTable';
import Sample26 from './components/PaymOverHeadingCost/paymoverheadingCostForm';
import PaymOverHeadingcostTable from './components/PaymOverHeadingCost/paymoverheadingcostTable';
import PaymPaybillTable from './components/PaymPaybill/paympaybillTables';
import Sample25 from './components/PaymPaybill/paympaybillForm';
import PaympfTable from './components/PaymPaybill/paympaybillTables';
import Sample23 from './components/PaymShift/paymshiftform';
import PaymshiftTable from './components/PaymShift/paymshiftTable';
import Sample22 from './components/PayoutputLoan/payoutputloanForm';
import PaympayoutputloanTable from './components/PayoutputLoan/payoutputloanTable';
import Sample21 from './components/Payrollfinalsettlement/payrollfinalsettlementForm';
import PayrollFinalSettlemetTable from './components/Payrollfinalsettlement/payrollfinalsettlementTables';
import Sample20 from './components/PfEp/pfepform';
import PfepTable from './components/PfEp/pfepTable';
import Sample19 from './components/PfEPF/pfEpfForm';
import PfepfTable from './components/PfEPF/pfepfTable';
import Sample18 from './components/PunchDetails/punchdetailform';
import PunchdetailsTable from './components/PunchDetails/punchdetailsTables';
import Sample17 from './components/SalaryPeriod/salaryperiodform';
import SalaryPeriodTable from './components/SalaryPeriod/salaryperiodTable';
import SalaryStructureTable from './components/SalaryStructure/salarystructureTable';
import Sample16 from './components/SalaryStructure/salarystructureform';
import Sample15 from './components/ShiftBalance/shiftbalanceform';
import ShiftBalanceTable from './components/ShiftBalance/shiftbalanceTable';
import ShiftDetailsTable from './components/ShiftDetails/shiftdetailsTables';
import Sample14 from './components/ShiftDetails/shiftdetailform';
import ShiftMonthTable from './components/ShiftMonth/shiftmonthTable';
import Sample13 from './components/ShiftMonth/shiftmonthform';
import ShiftPatternTable from './components/ShiftPattern/shiftpatternTable';
import Sample12 from './components/ShiftPattern/shiftpatternform';
import Sample1 from './components/Yearend/yearendform';
import YearEndTable from './components/Yearend/yearendTable';
import MainPage from './components/nav';
// import ServiceCard from './components/servicecard';
import Layoutcomp from './components/layoutcomp';
import LoginForm from './components/Authentication/Login';
import { Login } from './components/Authentication/Login';
import { useState } from 'react';
import { UserContext } from './components/Authentication/UserContext';
import { useEffect } from 'react';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState("");
  
  useEffect(() => {
    // Check if the user is already logged in
    const loggedIn = sessionStorage.getItem("user") !== null;
    setIsLoggedIn(loggedIn);
    setLogin(loggedIn);
  }, []);

  function changeState(state) {
    setLogin(state);
  }

  return (
    <div className="App">
      <MainPage />
      <ErrorBoundary/>
      {login ? <div>Welcome {sessionStorage.getItem("user")}</div> : <LoginForm isLoggedIn={changeState} />}
      <Outlet />
    </div>
    
  );
}


