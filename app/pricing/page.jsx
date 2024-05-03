import Heading from "../ui/heading";
import Table from "../ui/pricing/table";
const header = [
  {
    title: "Free",
    value: "free",
  },
  {
    title: "Trial",
    value: "trial",
  },
  {
    title: "Basic",
    value: "basic",
  },

  {
    title: "Standard",
    value: "standard",
  },
  {
    title: "Premium",
    value: "premium",
  },
];
const data = [
  {
    free: "lorem ipsum",
    trial: "lorem ipsum",
    basic: "lorem ipsum",
    premium: "lorem ipsum",
    standard: "lorem ipsum",
  },
  {
    free: "lorem ipsum",
    trial: "lorem ipsum",
    basic: "lorem ipsum",
    premium: "lorem ipsum",
    standard: "lorem ipsum",
  },
  {
    free: "lorem ipsum",
    trial: "lorem ipsum",
    basic: "lorem ipsum",
    premium: "lorem ipsum",
    standard: "lorem ipsum",
  },
  {
    free: "lorem ipsum",
    trial: "lorem ipsum",
    basic: "lorem ipsum",
    premium: "lorem ipsum",
    standard: "lorem ipsum",
  },
  {
    free: "lorem ipsum",
    trial: "lorem ipsum",
    basic: "lorem ipsum",
    premium: "lorem ipsum",
    standard: "lorem ipsum",
  },
  {
    free: "lorem ipsum",
    trial: "lorem ipsum",
    basic: "lorem ipsum",
    premium: "lorem ipsum",
    standard: "lorem ipsum",
  },
  {
    free: "lorem ipsum",
    trial: "lorem ipsum",
    basic: "lorem ipsum",
    premium: "lorem ipsum",
    standard: "lorem ipsum",
  },
  {
    free: "lorem ipsum",
    trial: "lorem ipsum",
    basic: "lorem ipsum",
    premium: "lorem ipsum",
    standard: "lorem ipsum",
  },
  {
    free: "lorem ipsum",
    trial: "lorem ipsum",
    basic: "lorem ipsum",
    premium: "lorem ipsum",
    standard: "lorem ipsum",
  },
  {
    free: "lorem ipsum",
    trial: "lorem ipsum",
    basic: "lorem ipsum",
    premium: "lorem ipsum",
    standard: "lorem ipsum",
  },
  {
    free: "lorem ipsum",
    trial: "lorem ipsum",
    basic: "lorem ipsum",
    premium: "lorem ipsum",
    standard: "lorem ipsum",
  },
  {
    free: "lorem ipsum",
    trial: "lorem ipsum",
    basic: "lorem ipsum",
    premium: "lorem ipsum",
    standard: "lorem ipsum",
  },
  {
    free: "lorem ipsum",
    trial: "lorem ipsum",
    basic: "lorem ipsum",
    premium: "lorem ipsum",
    standard: "lorem ipsum",
  },
  {
    free: "lorem ipsum",
    trial: "lorem ipsum",
    basic: "lorem ipsum",
    premium: "lorem ipsum",
    standard: "lorem ipsum",
  },
  {
    free: "lorem ipsum",
    trial: "lorem ipsum",
    basic: "lorem ipsum",
    premium: "lorem ipsum",
    standard: "lorem ipsum",
  },
  {
    free: "lorem ipsum",
    trial: "lorem ipsum",
    basic: "lorem ipsum",
    premium: "lorem ipsum",
    standard: "lorem ipsum",
  },
  {
    free: "lorem ipsum",
    trial: "lorem ipsum",
    basic: "lorem ipsum",
    premium: "lorem ipsum",
    standard: "lorem ipsum",
  },
  {
    free: "lorem ipsum",
    trial: "lorem ipsum",
    basic: "lorem ipsum",
    premium: "lorem ipsum",
    standard: "lorem ipsum",
  },
  {
    free: "lorem ipsum",
    trial: "lorem ipsum",
    basic: "lorem ipsum",
    premium: "lorem ipsum",
    standard: "lorem ipsum",
  },
  {
    free: "lorem ipsum",
    trial: "lorem ipsum",
    basic: "lorem ipsum",
    premium: "lorem ipsum",
    standard: "lorem ipsum",
  },
];
export default function Page() {
  return (
    <div className="flex flex-col gap-y-[60px] text-center pt-[175.51px] px-[30px] bg-white">
      <Heading text="Pricing" />
      <Table header={header} data={data} />
    </div>
  );
}
