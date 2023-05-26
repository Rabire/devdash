import { faker } from "@faker-js/faker";
import { endOfYear } from "date-fns";
import ProgressBarSection from "../components/ProgressBarSection";
import ExpensesSection from "../components/ExpensesSection";
import CreditCard from "../components/CreditCard";
import AdministrationButtons from "../components/AdministrationButtons";
import DoughnutSection from "../components/DoughnutSection";
import IncomeAndSpendsChart from "../components/IncomeAndSpendsChart";

const Administrative = () => (
  <main className="grid-rows-[auto_1fr_auto]">
    <ProgressBarSection
      subTitle="Objectifs"
      title="Semestre 2 - 65 000€"
      percentage={faker.number.int(100)}
      deadline={endOfYear(new Date())}
    />
    <CreditCard />

    <ExpensesSection />

    <div className="grid gap-5 desktop:grid-cols-2 tablet:col-span-1 desktop:col-span-2 top-0">
      <DoughnutSection type="incomes" />
      <DoughnutSection type="turnover" />
    </div>

    <IncomeAndSpendsChart />
    <AdministrationButtons />
  </main>
);

export default Administrative;
